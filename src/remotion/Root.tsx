import { Composition, registerRoot } from "remotion";
import { homeVideoSpecs, remotionVideoDefaults, storyVideoSpecs } from "./data/homeVideos";
import { HomeAuditPackagesVideo } from "./compositions/HomeAuditPackagesVideo";
import { HomeFiveStepVideo } from "./compositions/HomeFiveStepVideo";
import { HomeHeroVideo } from "./compositions/HomeHeroVideo";
import { HomeModulesVideo } from "./compositions/HomeModulesVideo";
import { HomeProblemVideo } from "./compositions/HomeProblemVideo";
import { HomeReframeVideo } from "./compositions/HomeReframeVideo";
import { HomeRealBusinessPaymentVideo } from "./compositions/HomeRealBusinessPaymentVideo";
import { StoryVideo } from "./compositions/StoryVideo";

const components = {
  HomeHeroVideo,
  HomeProblemVideo,
  HomeReframeVideo,
  HomeFiveStepVideo,
  HomeModulesVideo,
  HomeAuditPackagesVideo,
  HomeRealBusinessPaymentVideo,
};

export const RemotionRoot = () => (
  <>
    {homeVideoSpecs.map((video) => (
      <Composition
        key={video.id}
        id={video.id}
        component={components[video.id]}
        durationInFrames={video.durationInFrames}
        fps={remotionVideoDefaults.fps}
        width={remotionVideoDefaults.width}
        height={remotionVideoDefaults.height}
      />
    ))}
    {storyVideoSpecs.map((video) => (
      <Composition
        key={video.id}
        id={video.id}
        component={StoryVideo}
        defaultProps={{ id: video.id }}
        durationInFrames={video.durationInFrames}
        fps={remotionVideoDefaults.fps}
        width={remotionVideoDefaults.width}
        height={remotionVideoDefaults.height}
      />
    ))}
  </>
);

registerRoot(RemotionRoot);
