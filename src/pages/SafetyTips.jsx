
import safeDialLogo from '../../ChatGPT Image Nov 2, 2026, 11_20_58 AM.png'

function SafetyTips() {
  return (
    <div className="safety-tips-page">
      <h1>
        <img className="safety-tips-logo" src={safeDialLogo} alt="" />
        Safety Tips
      </h1>

      <p>
        Learn how to stay safe and prepare
        for unexpected emergencies.
      </p>

      <h2>Everyday Safety Tips</h2>

      <ul>
        <li>Keep important emergency numbers nearby.</li>
        <li>Stay calm and move to a safe place during an emergency.</li>
        <li>Tell someone you trust where you are going.</li>
        <li>Know the emergency exits at home, school, or work.</li>
        <li>Keep your phone charged when possible.</li>
      </ul>

      <p>
        SafeDial – Help Is One Dial Away!
      </p>
    </div>
  )
}

export default SafetyTips
