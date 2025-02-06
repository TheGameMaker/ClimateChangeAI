import logo from "../assets/earth.png";

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
  return <picture><img src={logo} alt="inlinePic" /><h1>Nam ER Technology</h1></picture>;
}

function BannerFooter() {
  return <p>Our Solution For Change</p>;
}

export default MainBanner;
