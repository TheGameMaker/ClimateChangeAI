function TeamPage() {
    return (
      <div className="teampage">
        <TestHeader></TestHeader>
        <TestHomePage></TestHomePage>
      </div>
    );
  }
  
  function TestHeader() {
    //add images later for now just text
    return <h1>About The Team</h1>;
  }
  
  function TestHomePage() {
    return (
      <>
      <h2>Our Team</h2>
      <p>
        Meet the brilliant minds behind Lucid Gaming Studios. Our team of experienced developers, designers, artists, and writers share a common vision of crafting exceptional games. 
        We are committed to pushing the boundaries of gaming, ensuring that each project surpasses expectations.
      </p>
      <h3>Clark</h3>
      <p>CEO, Lead programmer and developer</p>
      <h3>Michael</h3>
      <p>3D modeling and level design</p>
      <h3>Aya</h3>
      <p>2D artist, web design and marketing</p>
      <h3>Lusif</h3>
      <p>Game Developer and level design</p>
      <h2>Join Us</h2>
      <p>
        Are you a passionate gamer, a creative visionary, or a coding genius? Join us on our quest to redefine gaming. 
        We're always on the lookout for talented individuals who share our passion and vision.
      </p>
      </>
    );
  }
  
  export default TeamPage;