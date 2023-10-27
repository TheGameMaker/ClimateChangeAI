import background from "../assets/backgroundGame.png";

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
  return (
    <>
    <h2>Welcome to Lucid Gaming Studios</h2>
    <p>
    At Lucid Gaming Studios, we turn dreams into reality, one game at a time. 
    We are a passionate team of gamers, designers, and storytellers dedicated to creating immersive and unforgettable gaming experiences. 
    Our studio is a place where creativity knows no bounds, and innovation is the driving force behind every project we undertake.
    </p>
    <h2>Our Mission</h2>
    <p>
    Our mission is simple: to craft games that captivate, challenge, and inspire players worldwide. 
    We believe that gaming is an art form, a medium that can transport you to new worlds, evoke powerful emotions, and bring people together like never before.
    </p>
    <p>
    At Lucid Gaming Studios, we believe that gaming has the power to transport us to extraordinary places, forge lasting friendships, and ignite our imaginations. 
    Join us on this incredible journey, and let's create gaming experiences that leave a mark on the world. 
    Dream with us, play with us, and together, we'll redefine the gaming landscape.
    </p>
    <h2>Our Work</h2>
    <>
    <h3>Fantasy Park VR image here <img src={background} alt="inlinePic" /></h3>
    <h3>Music Visualizer image here</h3>
    <h3>Other Team work here</h3>
    </>
    <h2>Company Goals</h2>
    <p>
    At Lucid Gaming Studios, our vision is to shape the future of gaming through a commitment to excellence and innovation. We are driven by a set of core values that guide our every decision and action.
    </p>
    <h3>1. We Always Deliver on Our Promises</h3>
    <p>
      <i>At Lucid Gaming Studios, we take our promises seriously.</i> Our commitment to our players, partners, and the gaming community is unwavering. 
      We set high standards for ourselves and hold ourselves accountable to meet and exceed them.
    </p>
    <h4>Our Pledge to You:</h4>
    <p style={{marginLeft: '3rem'}}><strong>•	Quality Assurance: </strong>We strive for perfection in every game we develop. Our promise is to deliver games that are polished, immersive, and unforgettable. </p>
    <p style={{marginLeft: '3rem'}}><strong>•	Transparency: </strong>We believe in open and honest communication. When we make commitments, you can trust that we will keep you informed every step of the way.</p>
    <p style={{marginLeft: '3rem'}}><strong>•	Timely Updates: </strong>We understand the importance of keeping our games up to date. Count on us to deliver regular updates, improvements, and new content as promised.</p>
    <h3>2. We Prioritize Community-Driven Development</h3>
    <p>
    <i>Our community is at the heart of everything we do.</i> We recognize that the gaming experience is enriched by the voices and ideas of our players. 
    We actively seek out and embrace your feedback, making you a vital part of our development process.
    </p>
    <h4>Our Commitment to Community-Driven Development:</h4>
    <p style={{marginLeft: '3rem'}}><strong>•	Active Engagement: </strong>We value your input and actively engage with our community through forums, social media, and events. Your suggestions and insights shape the direction of our games.</p>
    <p style={{marginLeft: '3rem'}}><strong>•	Beta Testing: </strong>We invite you to be part of our beta testing programs, where you can experience new features and provide crucial feedback before they go live.</p>
    <p style={{marginLeft: '3rem'}}><strong>•	Collaboration: </strong>We actively seek partnerships and collaborations with content creators, modders, and other game developers to ensure that our games continue to evolve with your interests in mind.</p>
    <h3>3. We Push the Boundaries of What's Possible</h3>
    <p>
    <i>Innovation is in our DNA.</i> We're not satisfied with the status quo. Instead, we're constantly pushing the boundaries of what's possible in gaming. 
    Our passion for innovation drives us to create groundbreaking experiences that captivate players worldwide.
    </p>
    <h4>Our Drive for Innovation:</h4>
    <p style={{marginLeft: '3rem'}}><strong>•	Exploring New Technologies: </strong>We're at the forefront of virtual reality, augmented reality, and emerging technologies. We're committed to delivering gaming experiences that push the boundaries of immersion and interactivity.</p>
    <p style={{marginLeft: '3rem'}}><strong>•	Storytelling Excellence: </strong>We believe that storytelling in games can be an art form. We're dedicated to crafting narratives that challenge conventions and resonate with players on a profound level.</p>
    <p style={{marginLeft: '3rem'}}><strong>•	Creating New Worlds: </strong>Our game worlds are not just settings; they're living, breathing ecosystems. We're committed to building expansive and vibrant environments that players can get lost in.</p>
    <p>
    At Lucid Gaming Studios, these goals are not just words; they're the guiding principles that fuel our passion and drive us to create unforgettable gaming experiences. 
    Together, we'll shape the future of gaming, one boundary-pushing adventure at a time. Thank you for being part of our journey.
    </p>
    <h2>Stay Connected</h2>
    <p>
    Stay in the loop with all things Lucid Gaming Studios. Follow us on social media, join our forums, and subscribe to our newsletter to receive the latest updates, behind-the-scenes content, and exclusive sneak peeks.
    </p>
    <h2>Contact Us</h2>
    <p>
    Got questions, feedback, or just want to say hello? We'd love to hear from you! Reach out to us through our contact page, and we'll get back to you as soon as possible.
    </p>
    <h2>Support</h2>
    <p>
    For technical support, bug reports, or any issues related to our games, our dedicated support team is here to assist you. Visit our support page for assistance.
    </p>
    </>
  );
}

//<img src={background} alt="bottomPic" />

export default HomePage;
