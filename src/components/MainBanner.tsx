import logo from "../assets/LGLogo.png";

function MainBanner() {
  return (
    <div className="mainbanner">
      <BannerHeader></BannerHeader>
      <BannerFooter></BannerFooter>
    </div>
  );
}

function BannerHeader() {
  //add images later for now just text
  return <picture><img src={logo} alt="inlinePic" /><h1>Namer Technology</h1></picture>;
}

function BannerFooter() {
  return <p>Unleashing Dreams, Forging Realities </p>;
}

export default MainBanner;
