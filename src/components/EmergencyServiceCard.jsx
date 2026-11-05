function EmergencyServiceCard({ service }) {
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(String(service.number))
      alert('Number copied successfully!')
    } catch {
      alert('Unable to copy the number. Please copy it manually or use the Call button.')
    }
  }

  return (
    <div className="service-card">
      <span className="service-icon">
        {service.icon}
      </span>

      <h3>{service.name}</h3>

      {service.code && (
        <p className="service-code">
          Demo code <strong>{service.code}</strong>
        </p>
      )}

      <p className="number">
        <span className="service-number-label">Official number</span>
        {service.number}
      </p>

      <button
        type="button"
        className="copy-button"
        onClick={copyNumber}
      >
        📋 Copy Number
      </button>

      <a
        href={`tel:${String(service.number).replace(/\D/g, '')}`}
        className="call-button"
      >
        📞 {service.code ? `Call via ${service.code}` : `Call ${service.number}`}
      </a>
    </div>
  )
}

export default EmergencyServiceCard