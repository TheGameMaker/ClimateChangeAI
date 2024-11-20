import PropTypes from "prop-types";

function MusicPage() {
  return (
    <div className="fantasypark">
      <VisualizerHeader></VisualizerHeader>
      <VisualizerPage></VisualizerPage>
    </div>
  );
}

function VisualizerHeader() {
  //add images later for now just text
  return <h1>Dynamic Melody</h1>;
}

function VisualizerPage() {
  const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };

  return (
    <>
      <h2>This is Dynamic Melody</h2>
      <p>
        A real time music visualizer that can sync to your computer or microphone audio. Ultimately this app will sync to DJ controllers
        through DMX allowing this app to be used for live concerts.
      </p>
      <YoutubeEmbed embedId="n5TJmb73GxQ?si=dFNbT0EVXnrOOSXT" />
      <YoutubeEmbed embedId="ISHEEslpD2w?si=UOTc-d6unS8JJMeL" />
      <h2>Updates</h2>
      <p>
        - Added Kalidescope View to enhance noise flowvield visuals.
      </p>
      <p>
        - Added ability to update the amount of particles in the scene.
      </p>
    </>
  );
}

export default MusicPage;
