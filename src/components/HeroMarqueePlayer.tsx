import { Player } from "@remotion/player";
import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee";

type HeroMarqueePlayerProps = {
  items: string[];
};

const MarqueeScene = ({ items }: HeroMarqueePlayerProps) => (
  <PerspectiveMarquee
    items={items}
    rotateY={-26}
    rotateX={7}
    perspective={1180}
    pixelsPerFrame={2.1}
    speed={1}
    fontSize={78}
    fontWeight={900}
    background="#181715"
    fadeColor="#181715"
    color="#cc785c"
  />
);

export default function HeroMarqueePlayer({ items }: HeroMarqueePlayerProps) {
  return (
    <Player
      component={MarqueeScene}
      inputProps={{ items }}
      durationInFrames={360}
      fps={30}
      compositionWidth={1280}
      compositionHeight={360}
      autoPlay
      loop
      initiallyMuted
      controls={false}
      clickToPlay={false}
      acknowledgeRemotionLicense
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#181715",
      }}
    />
  );
}
