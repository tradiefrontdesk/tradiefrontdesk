import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import { createRef, PureComponent } from "react";
import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee";

type HeroMarqueePlayerProps = {
  items: string[];
};

const durationInFrames = 360;
const fps = 30;

const MarqueeScene = ({ items }: HeroMarqueePlayerProps) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background:
        "radial-gradient(circle at 14px 14px, rgba(255,217,0,.24) 3px, transparent 3.5px), linear-gradient(rgba(255,255,255,.08) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.08) 2px, transparent 2px), #050505",
      backgroundSize: "34px 34px, 86px 86px, 86px 86px, auto",
    }}
  >
    <PerspectiveMarquee
      items={items}
      rotateY={-18}
      rotateX={6}
      perspective={950}
      pixelsPerFrame={2.8}
      speed={1}
      fontSize={104}
      fontWeight={900}
      background="transparent"
      fadeColor="#050505"
      color="#ffd900"
    />
  </div>
);

export default class HeroMarqueePlayer extends PureComponent<HeroMarqueePlayerProps> {
  private playerRef = createRef<PlayerRef>();
  private timer: number | undefined;
  private frame = 0;

  componentDidMount() {
    this.playerRef.current?.mute();
    this.playerRef.current?.setVolume(0);
    this.timer = window.setInterval(() => {
      this.frame = (this.frame + 1) % durationInFrames;
      this.playerRef.current?.seekTo(this.frame);
    }, 1000 / fps);
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  render() {
    return (
      <Player
        ref={this.playerRef}
        component={MarqueeScene}
        inputProps={{ items: this.props.items }}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={1280}
        compositionHeight={360}
        autoPlay={false}
        loop
        initiallyMuted
        controls={false}
        clickToPlay={false}
        acknowledgeRemotionLicense
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#050505",
        }}
      />
    );
  }
}
