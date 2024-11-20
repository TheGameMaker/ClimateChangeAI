import { Unity, useUnityContext } from "react-unity-webgl";

function GameView() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "BaseDefenseBuild/Build/BaseDefenseBuild.loader.js",
    dataUrl: "BaseDefenseBuild/Build/BaseDefenseBuild.data.unityweb",
    frameworkUrl:
      "BaseDefenseBuild/Build/BaseDefenseBuild.framework.js.unityweb",
    codeUrl: "BaseDefenseBuild/Build/BaseDefenseBuild.wasm.unityweb",
  });

  return (
    <div className="basedefense">
      <h2>Welcome to AR Base Defense!</h2>
      <p>
        This game was originally created for an andorid and was then ported over
        to the Hololens2 and Quest 3 for true Augmented Reality. The Idea is to
        bring real time strategy games to the real world so you can play them on
        your table or floor. Potentially Making games like warhammer more
        immersive. This is a WebGL form of the app so you can play the game
        without access to these headsets. I hope you enjoy!
      </p>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
      <h2>Updates</h2>
      <p>
        - Added ability to train troops and build towers
      </p>
    </div>
  );
}

export default GameView;
