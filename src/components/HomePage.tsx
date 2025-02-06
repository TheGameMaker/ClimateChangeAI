import { Unity, useUnityContext } from "react-unity-webgl";
//import { useRef } from "react";


function HomePage() {
  return (
    <div className="homepage">
      <HomeHeader></HomeHeader>
      <TestHomePage></TestHomePage>
    </div>
  );
}

function HomeHeader() {
  //add images later for now just text
  return <h1>Welcome To Gaia</h1>;
}

//    <img src={background} alt="middlePic" />
function TestHomePage() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "ClimateChangeAIBuild/Build/ClimateChangeAIBuild.loader.js",
    dataUrl: "ClimateChangeAIBuild/Build/ClimateChangeAIBuild.data",
    frameworkUrl:"ClimateChangeAIBuild/Build/ClimateChangeAIBuild.framework.js",
    codeUrl: "ClimateChangeAIBuild/Build/ClimateChangeAIBuild.wasm",
  });
  //function getGalleryIndex(){
    //ImageGalleryRef.current.
  //}

  return (
    <>
    <h2>Your Climate Change Research Partner</h2>
    <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
    <p>
      Press and hold the record button to ask the AI anything you want to know about climate change.
      He loves discussing how to fix any issue you could think of.
    </p>
    <h3>What Is Gaia?</h3>
    <p>
      Gaia is an advanced artificial intelligence platform designed to empower researchers and professionals dedicated to studying climate change. 
      Named after the Greek goddess of Earth, Gaia embodies the spirit of interconnectedness within our ecosystems and emphasizes the importance of 
      collaboration in tackling one of the most pressing challenges of our time.
    </p>
    <h3>Key Features</h3>
    <p style={{marginLeft: '3rem'}}><strong>• Data Insights:</strong> Gaia provides access to real-time climate data, predictive analytics, and customized reports, enabling researchers to draw informed conclusions and make data-driven decisions.</p>
    <p style={{marginLeft: '3rem'}}><strong>• Networking Opportunities:</strong> Connect with a global community of climate change researchers, policy makers, and environmental experts. Gaia facilitates networking through discussion forums, group projects, and dedicated messaging tools.</p>
    <p style={{marginLeft: '3rem'}}><strong>• Collaborative Tools:</strong> Streamline your research projects with Gaia's integrated project management tools. Share documents, track tasks, and collaborate seamlessly with colleagues across various disciplines and locations.</p>
    <p style={{marginLeft: '3rem'}}><strong>• Research Hub:</strong> Access a comprehensive repository of climate research articles, publications, and ongoing projects. Contribute your own findings and explore innovative solutions from other researchers.</p>
    <h3>Our Mission</h3>
    <p>
      At Gaia, our mission is to foster collaboration and innovation in climate science. 
      We believe that by connecting researchers and providing them with essential tools and resources, we can accelerate the progress needed to address climate change effectively. 
      Together, let’s cultivate knowledge, inspire action, and safeguard our planet for future generations.
    </p>
    <h4>Join Gaia today, and be a part of the solution to climate change!</h4>
    </>
  );
}

//<img src={background} alt="bottomPic" />
//    <h3>Fantasy Park VR <img src={background} alt="FantasyPark Coaster Example" /></h3>

export default HomePage;
