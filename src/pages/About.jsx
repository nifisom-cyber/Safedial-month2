
import featureImage from '../assets/feature.jpg'

function About() {
  return (
    <div className="about-page">
      <h1>About SafeDial </h1>

      <h2>Help Is One Dial Away!</h2>

      <p>
        SafeDial is a website designed to help people
        find important emergency contact information
        quickly and easily.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to make emergency information
        easier to access and encourage people to
        prepare for unexpected situations.
      </p>

      <h2>Why We Created SafeDial</h2>

      <p>
        We created SafeDial because emergencies can
        happen at any time. We want people in South
        Africa to know where to find important
        emergency contact information.
      </p>

      <h2>Our Future Goals</h2>

      <ul>
        <li>Improve access to emergency information.</li>
        <li>Add more useful safety features.</li>
        <li>Support different South African languages.</li>
        <li>Explore location-sharing features.</li>
      </ul>

      <p>
        SafeDial is a developing project and is not
        a replacement for official emergency services.
      </p>

      <img
        className="about-page-image"
        src={featureImage}
        alt="SafeDial community safety network connecting families to emergency support"
      />
    </div>
  )
}

export default About
