import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import type { ComponentType } from "react";
import { createRef, PureComponent } from "react";
import { videoById, remotionVideoDefaults, type HomeVideoId, type StoryVideoId, type VideoId } from "@/remotion/data/homeVideos";
import { HomeAuditPackagesVideo } from "@/remotion/compositions/HomeAuditPackagesVideo";
import { HomeFiveStepVideo } from "@/remotion/compositions/HomeFiveStepVideo";
import { HomeHeroVideo } from "@/remotion/compositions/HomeHeroVideo";
import { HomeModulesVideo } from "@/remotion/compositions/HomeModulesVideo";
import { HomeProblemVideo } from "@/remotion/compositions/HomeProblemVideo";
import { HomeReframeVideo } from "@/remotion/compositions/HomeReframeVideo";
import { HomeRealBusinessPaymentVideo } from "@/remotion/compositions/HomeRealBusinessPaymentVideo";
import { StoryVideo } from "@/remotion/compositions/StoryVideo";

type ProductVideoPlayerProps = {
  id: VideoId;
  title: string;
  description: string;
  featured?: boolean;
  bare?: boolean;
  autoplay?: boolean;
};

const components = {
  HomeHeroVideo,
  HomeProblemVideo,
  HomeReframeVideo,
  HomeFiveStepVideo,
  HomeModulesVideo,
  HomeAuditPackagesVideo,
  HomeRealBusinessPaymentVideo,
};

export default class ProductVideoPlayer extends PureComponent<ProductVideoPlayerProps> {
  private playerRef = createRef<PlayerRef>();
  private timer: number | undefined;
  private frame = 0;

  componentDidMount() {
    if (!this.props.autoplay) {
      return;
    }

    const player = this.playerRef.current;
    player?.mute();
    player?.setVolume(0);
    this.timer = window.setInterval(() => {
      const duration = videoById[this.props.id].durationInFrames;
      this.frame = (this.frame + 1) % duration;
      this.playerRef.current?.seekTo(this.frame);
    }, 1000 / remotionVideoDefaults.fps);
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  render() {
    const { id, title, description, featured = false, bare = false, autoplay = true } = this.props;
    const spec = videoById[id];
    const isHomeVideo = id in components;
    const Component = (isHomeVideo ? components[id as HomeVideoId] : StoryVideo) as ComponentType<Record<string, unknown>>;
    const inputProps = isHomeVideo ? undefined : { id: id as StoryVideoId };

    return (
      <article className={`${featured ? "product-video product-video--featured" : "product-video"}${bare ? " product-video--bare" : ""}`}>
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
              backgroundColor: "#050505",
            }}
          />
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
