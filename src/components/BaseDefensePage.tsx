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
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
    </div>
  );
}

export default GameView;
