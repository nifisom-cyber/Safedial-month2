
import { useEffect, useRef, useState } from 'react'
import './App.css'
import safeDialLogo from '../ChatGPT Image Nov 2, 2026, 11_20_58 AM.png'
import heroImage from './assets/woman-holding-cellphone.jpg'
import phoneImage from './assets/cellphone.jpg'
import featureImage from './assets/feature.jpg'
import emergencyImage from './assets/police-and-ambulance.jpg.jpg'
import EmergencyServiceCard from './components/EmergencyServiceCard.jsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Campaign from './pages/CampaignPage.jsx'
import EmergencyServices from './pages/EmergencyServices.jsx'
import SafetyTips from './pages/SafetyTips.jsx'
import Subscribe from './pages/Subscribe.jsx'
import About from './pages/About.jsx'
import Enquiries from './pages/Enquiries.jsx'

import Analytics from './pages/Analytics.jsx'






function App() {
  const location = useLocation()

  const [showEmergency, setShowEmergency] = useState(false)
  const emergencyPanelRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const [audience, setAudience] = useState('')
    const [consent, setConsent] = useState(false)
  const emergencyServices = [
      { name: 'Police', number: '10111', code: '*1#', icon: '🚔' },
      { name: 'Ambulance', number: '10177', code: '*2#', icon: '🚑' },
      { name: 'Fire Department', number: '112', code: '*3#', icon: '🚒' },
    { name: 'Emergency from a cellphone', number: '112', icon: '📱' },
  ]
  const filteredServices = emergencyServices.filter((service) =>


    service.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect(() => {
    if (showEmergency) {
      emergencyPanelRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [showEmergency])

  useEffect(() => {
    const pageMetadata = {
      '/': {
        title: 'SafeDial | Help Is One Dial Away',
        description: 'Find emergency contact information and practical safety tips with the SafeDial South African concept demo. No live dispatch.',
      },
      '/campaign': {
        title: 'SafeDial Campaign | Emergency Contacts and Safety Tips',
        description: 'Explore a South African safety concept, emergency contact information, and practical preparedness tips. Demo only; no live dispatch.',
      },
      '/services': {
        title: 'Emergency Services | SafeDial',
        description: 'Browse SafeDial emergency contact information for South Africa. Verify local numbers with official sources; demo only.',
      },
      '/safety-tips': {
        title: 'Safety Tips | SafeDial',
        description: 'Explore practical everyday safety and emergency preparedness tips from the SafeDial South African concept project.',
      },
      '/about': {
        title: 'About SafeDial | South African Safety Concept',
        description: 'Learn about the SafeDial project and its goal of making emergency information easier to find in South Africa.',
      },
      '/subscribe': {
        title: 'Safety Updates | SafeDial',
        description: 'Explore the SafeDial safety update subscription demonstration. No email addresses are stored and no emails are sent.',
      },
      '/enquiries': {
        title: 'Safety Enquiries | SafeDial',
        description: 'Send a non-urgent demonstration enquiry about SafeDial safety information. Do not use this form to report emergencies.',
      },
      '/analytics': {
        title: 'Campaign Analytics | SafeDial',
        description: 'View the SafeDial campaign KPI dashboard. All displayed campaign figures are fictional sample data.',
      },
    }
    const metadata = pageMetadata[location.pathname] ?? pageMetadata['/']
    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
  }, [location.pathname])

  return (
    <div className="app">
      <header className="navbar">
        <h1><img className="brand-logo" src={safeDialLogo} alt="" />SafeDial</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/campaign">Campaign</Link>
          <Link to="/services">Emergency Services</Link>
          <Link to="/safety-tips">Safety Tips</Link>
          <Link to="/subscribe">Subscribe</Link>
          <Link to="/about">About Us</Link>
          
<Link to="/enquiries">Safety Enquiries</Link>

<Link to="/analytics">Analytics Dashboard</Link>


          
<Link to="/enquiries">Contact</Link>

        </nav>
      </header>

      <main>
        
<Routes>
  <Route path="/" element={null} />
  <Route path="/campaign" element={<Campaign />} />
  <Route path="/services" element={<EmergencyServices />} />
  <Route path="/safety-tips" element={<SafetyTips />} />
  <Route path="/subscribe" element={<Subscribe />} />
  <Route path="/about" element={<About />} />
  
<Route path="/enquiries" element={<Enquiries />} />

<Route path="/analytics" element={<Analytics />} />


</Routes>

{location.pathname === '/' && (
    <>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">YOUR SAFETY MATTERS</p>
            <h2>Help Is One Dial Away</h2>
            <p>
              Find important emergency contact numbers quickly.
              SafeDial helps you access emergency information
              when you need it most.
            </p>
            <button
              className="emergency-button"
              onClick={() => setShowEmergency(!showEmergency)}
            >
              {showEmergency
                ? 'Hide Emergency Numbers'
                : 'View Emergency Numbers'}
            </button>
          </div>
          <img
            className="hero-image"
            src={heroImage}
            alt="A woman holding a phone with SafeDial emergency contacts displayed"
          />
        </section>

        {showEmergency && (
          <section className="emergency-panel" ref={emergencyPanelRef}>
            <h2>Emergency Contact Numbers</h2>
            <p>
              If you are in immediate danger, contact the
              appropriate emergency service.
            </p>
            <p className="service-code-note">
              Example SafeDial codes are not carrier services. Tap a Call button
              to open your phone dialer with the official number; dialing a code
              directly will not redirect the call. Offline mode saves these
              details, but a call still needs a supported network connection.
            </p>
            <input
              type="text"
              placeholder="Search emergency services..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                type="button"
                className="copy-button"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            )}
            {filteredServices.length === 0 && (
              <p className="no-results">
                No emergency services found. Please try another search.
              </p>
            )}
            <div className="service-grid">
              {filteredServices.map((service) => (
                <EmergencyServiceCard
                  key={service.name}
                  service={service}
                />
              ))}
            </div>
            <p className="notice">
              Emergency numbers can vary by service and location.
              Confirm the correct number for your area.
            </p>
          </section>
        )}

        <section className="services" id="services">
          <h2>Emergency Assistance</h2>
          <p>Know where to turn when an emergency happens.</p>
          <img
            className="services-photo"
            src={emergencyImage}
            alt="South African police and ambulance services responding to emergencies"
          />
          <div className="service-grid">
            <div className="service-card">
              <span className="service-icon">🚔</span>
              <h3>Police Assistance</h3>
              <p>Find contact information for police assistance.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🚑</span>
              <h3>Medical Emergencies</h3>
              <p>Know how to contact emergency medical services.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🔥</span>
              <h3>Fire Emergencies</h3>
              <p>Find help when there is a fire or similar emergency.</p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h2>About SafeDial</h2>
          <p>
            SafeDial is an emergency assistance website designed
            to make important emergency information easier to find.
            Our goal is to help people access useful information
            quickly, especially during stressful situations.
          </p>
          <img
            className="about-image"
            src={featureImage}
            alt="SafeDial community safety network connecting families with emergency support"
          />
        </section>

        <section className="phone-showcase" aria-label="SafeDial emergency contact app preview">
          <img
            src={phoneImage}
            alt="SafeDial phone interface showing police, ambulance, fire, family, and SOS options"
          />
          <p>Quick access to the help and contacts that matter.</p>
        </section>

        <section className="newsletter" id="contact">
          <h2>Stay Connected With SafeDial</h2>
          <p>Join our mailing list to receive safety tips and important updates.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSubscriptionMessage(
                'Thank you for your interest in SafeDial! This is a demo subscription.',
              )
              setEmail('')
              setAudience('')
              setConsent(false)
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <select
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              required
            >
              <option value="">Select your audience group</option>
              <option value="student">Student</option>
              <option value="parent">Parent or Family</option>
              <option value="employee">Employee</option>
              <option value="community">Community Member</option>
            </select>
            <label className="consent-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                required
              />
              I agree to receive safety tips and email updates from SafeDial.
            </label>
            <button type="submit">Subscribe</button>
            {subscriptionMessage && (
              <p className="subscription-message">{subscriptionMessage}</p>
            )}
          </form>
          {subscriptionMessage && (
            <p className="subscription-message">{subscriptionMessage}</p>
          )}
          <small>
            This demonstration does not store email addresses or send actual emails.</small>
        </section>
        </>
        )}
      </main>

      <footer>
        <h3><img className="brand-logo" src={safeDialLogo} alt="" />SafeDial</h3>
        <p>Help Is One Dial Away.</p>
        <p>Emergency information at your fingertips.</p>
        <p>© 2026 SafeDial. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App