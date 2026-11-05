import { Link } from 'react-router-dom'
import heroImage from '../assets/woman-holding-cellphone.jpg'

const audiences = [
  {
    title: 'Students and young adults',
    description: 'Find practical safety information for campus, commuting, and everyday plans.',
  },
  {
    title: 'Families and caregivers',
    description: 'Start a conversation about trusted contacts and household preparedness.',
  },
  {
    title: 'Employees and workers',
    description: 'Review emergency contacts and the procedures for your workplace.',
  },
  {
    title: 'South African communities',
    description: 'Keep useful local contacts accessible and share verified information.',
  },
]

function Campaign() {
  return (
    <div className="campaign-page">
      <section className="campaign-hero">
        <div className="campaign-hero-copy">
          <p className="campaign-eyebrow">30-Day Safety Awareness Campaign</p>
          <h1>Find emergency information before you need it.</h1>
          <p>
            Explore emergency contact information and practical safety tips
            for planning ahead in South Africa.
          </p>
          <div className="campaign-actions">
            <Link className="campaign-primary-link" to="/services">
              Browse emergency contacts
            </Link>
            <Link className="campaign-secondary-link" to="/safety-tips">
              Read safety tips
            </Link>
          </div>
          <p className="campaign-disclaimer">
            SafeDial is a demonstration concept. It does not dispatch help or
            replace official emergency services. Confirm contacts with local
            official sources.
          </p>
        </div>
        <img
          className="campaign-hero-image"
          src={heroImage}
          alt="A person using a phone to view SafeDial emergency information"
        />
      </section>

      <section className="campaign-audiences">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Safety planning for everyday life</p>
          <h2>A clear place to begin preparing.</h2>
          <div className="campaign-audience-grid">
            {audiences.map((audience) => (
              <article className="campaign-audience" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="campaign-next-step">
        <h2>Make your next step a prepared one.</h2>
        <Link className="campaign-primary-link" to="/services">
          View emergency services
        </Link>
      </section>
    </div>
  )
}

export default Campaign