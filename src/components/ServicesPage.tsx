function ServicesPage() {
    return (
      <div className="servicespage">
        <TestHeader></TestHeader>
        <TestHomePage></TestHomePage>
      </div>
    );
  }
  
  function TestHeader() {
    //add images later for now just text
    return <h1>Services</h1>;
  }
  
  function TestHomePage() {
    return (
      <>
      <h2>Our Services at Lucid Gaming Studios</h2>
      <p>
      At Lucid Gaming Studios, we're more than just game developers; we're your partners in turning gaming dreams into reality. 
      Our team of experienced professionals offers a range of services tailored to meet your gaming development needs. 
      Whether you're an indie developer looking for support or a studio seeking collaboration, we have the expertise to bring your vision to life. Explore our services below:
      </p>
      <h3>1. Game Development</h3>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>Full-Stack Game Development</i>: From concept to launch, we handle every aspect of game development, including coding, design, art, and QA testing.</p>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>Prototyping and Concept Design</i>: We help you shape your game ideas into actionable concepts and create prototypes to visualize your vision.</p>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>VR and AR Development</i>: Dive into the immersive worlds of virtual and augmented reality with our specialized development services.</p>
      <h3>2. Art and Design</h3>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>Concept Art and Illustration</i>: Our talented artists create stunning concept art, characters, environments, and assets that breathe life into your game.</p>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>UI/UX Design</i>: We craft intuitive and visually appealing user interfaces and experiences to enhance player engagement.</p>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>3D Modeling and Animation</i>: Bring your game to life with our 3D modeling and animation services, covering characters, objects, and environments.</p>
      <h3>3. Consulting and Collaboration</h3>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>Game Development Consulting</i>: Tap into our expertise for guidance on game design, development, and market trends.</p>
      <p style={{marginLeft: '3rem', marginRight: '3rem'}}>•	<i>Collaborative Partnerships</i>: Join forces with Lucid Gaming Studios for collaborative projects and co-development opportunities.</p>
      <p>
      No matter where you are in your game development journey, Lucid Gaming Studios is here to support and empower your vision. 
      Our services are designed to elevate your gaming project, ensuring it reaches its full potential and captivates players worldwide. 
      Let's transform your ideas into unforgettable gaming experiences. Contact us today to discuss your project and how we can help bring it to life.
      </p>
      </>
    );
  }
  
  export default ServicesPage;