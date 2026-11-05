import { useState } from 'react'
import EmergencyServiceCard from '../components/EmergencyServiceCard.jsx'
import phoneImage from '../assets/cellphone.jpg'

function EmergencyServices() {
    const [searchTerm, setSearchTerm] = useState('')
    
const emergencyServices = [
  { name: 'Police', number: '10111', code: '*1#', icon: '🚓' },
  { name: 'Ambulance', number: '10177', code: '*2#', icon: '🚑' },
  { name: 'Emergency from a cellphone', number: '112', icon: '📱' },
]

const filteredServices = emergencyServices.filter((service) =>
  service.name.toLowerCase().includes(searchTerm.toLowerCase())
)

  return (
    <div className="emergency-page">
      <div className="emergency-page-intro">
        <div>
          <h1 className="emergency-page-title">Emergency Services 🚨</h1>
          <p>
            Find important emergency contact
            information quickly and easily. Example SafeDial codes are not
            carrier services; tap Call to open your dialer with the number below.
            Offline mode can show saved information, but a call needs a supported
            network connection. Satellite SOS or Wi-Fi calling depends on your
            device, carrier, and location.
          </p>
          <h2>Help Is One Dial Away!</h2>
        </div>
        <img
          className="emergency-phone-image"
          src={phoneImage}
          alt="SafeDial phone interface with emergency contact options"
        />
      </div>
      
<input
  type="text"
  className="search-input"
  placeholder="Search emergency services..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
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

<div className="emergency-list">
  {filteredServices.map((service) => (
    <EmergencyServiceCard
      key={service.name}
      service={service}
    />
  ))}
</div>

    </div>
  )
}

export default EmergencyServices
