import 'react-image-gallery/styles/css/image-gallery.css';
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
  return <h1>Home</h1>;
}

//    <img src={background} alt="middlePic" />
function TestHomePage() {

  //const ImageGalleryRef = useRef(ImageGallery);
  //const ImageGalleryRef = createRef();

  //function getGalleryIndex(){
    //ImageGalleryRef.current.
  //}

  return (
    <>
    <h2>Welcome to Lucid Gaming Studios</h2>
    <p>
    At Lucid Gaming Studios, we turn dreams into reality, one game at a time. 
    We are a passionate team of gamers, designers, and storytellers dedicated to creating immersive and unforgettable gaming experiences. 
    Our studio is a place where creativity knows no bounds, and innovation is the driving force behind every project we undertake.
    </p>
    </>
  );
}

//<img src={background} alt="bottomPic" />
//    <h3>Fantasy Park VR <img src={background} alt="FantasyPark Coaster Example" /></h3>

export default HomePage;
