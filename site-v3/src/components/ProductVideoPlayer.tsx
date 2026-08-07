import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import type { ComponentType } from "react";
import { createRef, PureComponent } from "react";
import { videoById, remotionVideoDefaults, type HomeVideoId, type StoryVideoId, type VideoId } from "@/remotion/data/homeVideos";

type ProductVideoPlayerProps = {
  id: VideoId;
  title: string;
  description: string;
  featured?: boolean;
  bare?: boolean;
  autoplay?: boolean;
};

type AnyVideoComponent = ComponentType<Record<string, unknown>>;

// Each composition is imported dynamically so a page ships only the animation
// it actually renders.
//
// These were previously eight static imports, which meant every composition
// was bundled into one chunk (286KB raw / 88KB gzip) and loaded on 14 of the
// site's 16 pages — to display a single looping figure. Vite gives each
// import() its own chunk, so a page now pays for one composition instead of
// all eight.
//
// Safe against layout shift: .product-video__frame carries its own
// `aspect-ratio: 1 / 1` and the fallback is absolutely positioned inside it,
// so the box holds its size whether or not the player has loaded yet.
const componentLoaders: Record<HomeVideoId, () => Promise<AnyVideoComponent>> = {
  HomeHeroVideo: () => import("@/remotion/compositions/HomeHeroVideo").then((m) => m.HomeHeroVideo as AnyVideoComponent),
  HomeProblemVideo: () => import("@/remotion/compositions/HomeProblemVideo").then((m) => m.HomeProblemVideo as AnyVideoComponent),
  HomeReframeVideo: () => import("@/remotion/compositions/HomeReframeVideo").then((m) => m.HomeReframeVideo as AnyVideoComponent),
  HomeFiveStepVideo: () => import("@/remotion/compositions/HomeFiveStepVideo").then((m) => m.HomeFiveStepVideo as AnyVideoComponent),
  HomeModulesVideo: () => import("@/remotion/compositions/HomeModulesVideo").then((m) => m.HomeModulesVideo as AnyVideoComponent),
  HomeAuditPackagesVideo: () => import("@/remotion/compositions/HomeAuditPackagesVideo").then((m) => m.HomeAuditPackagesVideo as AnyVideoComponent),
  HomeRealBusinessPaymentVideo: () =>
    import("@/remotion/compositions/HomeRealBusinessPaymentVideo").then((m) => m.HomeRealBusinessPaymentVideo as AnyVideoComponent),
};

const loadStoryVideo = () =>
  import("@/remotion/compositions/StoryVideo").then((m) => m.StoryVideo as AnyVideoComponent);

type ProductVideoPlayerState = {
  Component: AnyVideoComponent | null;
};

export default class ProductVideoPlayer extends PureComponent<ProductVideoPlayerProps, ProductVideoPlayerState> {
  state: ProductVideoPlayerState = { Component: null };

  private playerRef = createRef<PlayerRef>();
  private containerRef = createRef<HTMLElement>();
  private timer: number | undefined;
  private frame = 0;
  private intersectionObserver: IntersectionObserver | undefined;
  private hasMounted = false;

  componentDidMount() {
    this.hasMounted = true;

    // Every call site hydrates this with client:visible, so mounting already
    // means "at or near the viewport" — no second visibility gate needed
    // before fetching the composition chunk.
    const { id } = this.props;
    const load = id in componentLoaders ? componentLoaders[id as HomeVideoId] : loadStoryVideo;
    load()
      .then((Component) => {
        if (!this.hasMounted) return;
        // Mute inside the callback: the Player does not exist until this
        // state lands, so playerRef is still null at componentDidMount time.
        this.setState({ Component }, () => {
          if (!this.props.autoplay) return;
          this.playerRef.current?.mute();
          this.playerRef.current?.setVolume(0);
        });
      })
      .catch(() => {
        // Leave Component null. The frame keeps its aspect ratio and the
        // static fallback stays visible, which is the correct degraded state
        // for a decorative figure.
      });

    if (!this.props.autoplay) {
      return;
    }

    // Pause the frame-stepping loop while the player is off-screen so the
    // homepage doesn't run every Remotion player's render loop concurrently.
    // Resumes automatically once the section scrolls back into view.
    const node = this.containerRef.current;
    if (node && "IntersectionObserver" in window) {
      this.intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.startLoop();
          } else {
            this.stopLoop();
          }
        },
        { threshold: 0.1 },
      );
      this.intersectionObserver.observe(node);
    } else {
      this.startLoop();
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
    this.stopLoop();
    this.intersectionObserver?.disconnect();
  }

  private startLoop = () => {
    if (this.timer !== undefined) {
      return;
    }
    const duration = videoById[this.props.id].durationInFrames;
    this.timer = window.setInterval(() => {
      this.frame = (this.frame + 1) % duration;
      this.playerRef.current?.seekTo(this.frame);
    }, 1000 / remotionVideoDefaults.fps);
  };

  private stopLoop = () => {
    if (this.timer !== undefined) {
      window.clearInterval(this.timer);
      this.timer = undefined;
    }
  };

  render() {
    const { id, title, description, featured = false, bare = false, autoplay = true } = this.props;
    const spec = videoById[id];
    const isHomeVideo = id in componentLoaders;
    const Component = this.state.Component;
    const inputProps = isHomeVideo ? undefined : { id: id as StoryVideoId };

    return (
      <article
        ref={this.containerRef}
        className={`${featured ? "product-video product-video--featured" : "product-video"}${bare ? " product-video--bare" : ""}`}
      >
        <div className="product-video__frame" aria-label={`${title} Remotion video player`}>
          <div className="product-video__fallback" aria-hidden="true">
            <p>{spec.title}</p>
            <div>
              <span />
              <span />
              <span />
            </div>
            <small>Graphic system animation</small>
          </div>
          {Component && (
            <Player
              ref={this.playerRef}
              component={Component}
              inputProps={inputProps}
              durationInFrames={spec.durationInFrames}
              fps={remotionVideoDefaults.fps}
              compositionWidth={remotionVideoDefaults.width}
              compositionHeight={remotionVideoDefaults.height}
              autoPlay={false}
              initiallyMuted
              controls={!autoplay}
              loop
              acknowledgeRemotionLicense
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: "#0E2233",
              }}
            />
          )}
        </div>
        {!bare && (
          <div className="product-video__copy">
            <p className="product-video__kicker">{featured ? "Featured explainer" : "Animated section"}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )}
      </article>
    );
  }
}
