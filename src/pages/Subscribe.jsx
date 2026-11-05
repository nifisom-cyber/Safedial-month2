
import { useState } from 'react'

function Subscribe() {
    
const [email, setEmail] = useState('')

const [audience, setAudience] = useState('')

const [consent, setConsent] = useState(false)

const [subscriptionMessage, setSubscriptionMessage] = useState('')




  return (
    <div className="subscribe-page">
      <h1>Subscribe to SafeDial </h1>

      <h2>Stay Informed. Stay Prepared. Stay Safe.</h2>
      
<div className="subscription-form">
    
<h3>Get Free Safety Updates 📩</h3>
<p>
  Choose your group and sign up to explore how
  SafeDial safety updates could work.
</p>

  <label htmlFor="subscriber-email">Email Address</label>
  <input
    id="subscriber-email"
    type="email"
    placeholder="Enter your email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required 
  />
  
<label htmlFor="subscriber-audience">I am a:</label>

<select
  id="subscriber-audience"
  value={audience}
  onChange={(e) => setAudience(e.target.value)}
>

  <option value="" disabled>Choose your group</option>
  <option value="student">Student</option>
  <option value="parent">Parent or Family Member</option>
  <option value="employee">Employee</option>
  <option value="community">Community Member</option>
</select>

<div className="consent-section">
  <label>
    
<input
  type="checkbox"
  checked={consent}
  onChange={(e) => setConsent(e.target.checked)}
/>

    I agree to receive safety tips and updates from SafeDial.
  </label>
</div>


<button
  type="button"
  className="subscribe-button"
  
onClick={() => {
  if (email.trim() === '') {
    setSubscriptionMessage('Please enter your email address.')
    return
  }

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
  setSubscriptionMessage('Please enter a valid email address.')
  return
}

if (audience === '') {
  setSubscriptionMessage('Please select your audience group.')
  return
}

if (!consent) {
  setSubscriptionMessage('Please agree to receive safety updates.')
  return
}

  
setSubscriptionMessage('Success! Your SafeDial subscription demo is complete. No email has been sent or saved.')

}}

>

  
Get Safety Tips

</button>

{subscriptionMessage && (
  <p className="subscription-message">
    {subscriptionMessage}
  </p>
)}



</div>


      <p>
        Join our safety awareness community and
        receive useful safety information.
      </p>

      <h3>What You Can Expect</h3>

      <ul>
        <li>Everyday safety tips</li>
        <li>Emergency preparedness information</li>
        <li>Community safety awareness updates</li>
        <li>Family, student, and workplace safety tips</li>
      </ul>

      <p>
        Our email subscription feature is currently
        a demonstration. We are not sending emails yet.
      </p>
    </div>
  )
}

export default Subscribe
