// Create a page that links the JoelHiltonHeadshot (1).jpg headshot

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <img src="JoelHiltonHeadshot (1).jpg" alt="Joel Hilton Headshot" />

      <div>
        <h1>About Us</h1>
        <p>
          We are a movie database that provides information on a wide range of
          movies. Our database is constantly updated with the latest releases,
          and we pride ourselves on being a reliable source of information for
          movie enthusiasts.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a comprehensive database of movies that
          allows users to easily search and discover new movies. We aim to make
          the process of finding information on movies as simple and intuitive
          as possible, and we strive to create a community of movie lovers who
          can share their thoughts and opinions on the latest releases.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback about our database, please feel
          free to contact us at:
        </p>
        <ul>
          <li>Email: contact@moviedatabase.com</li>
          <li>Phone: 555-1234</li>
          <li>Address: 123 Main Street, Anytown USA</li>
        </ul>
      </div>
    </div>
  );
}
export default HomePage;
