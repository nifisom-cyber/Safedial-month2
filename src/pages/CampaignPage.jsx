import { Link } from 'react-router-dom'
import heroImage from '../assets/woman-holding-cellphone.jpg'

const audiences = [
  { title: 'Students and young adults', need: 'Mobile-first safety information for campus, commuting, and everyday plans.', channels: 'Mobile search, Instagram, campus and community WhatsApp groups.' },
  { title: 'Families and caregivers', need: 'Household emergency contacts and practical ways to plan together.', channels: 'Search, Facebook, family WhatsApp groups, and email.' },
  { title: 'Employees and workers', need: 'Workplace emergency contacts and a reminder to follow local procedures.', channels: 'Search, employer or community channels, and Facebook.' },
  { title: 'South African communities', need: 'Clear, locally relevant information that is easy to verify and share.', channels: 'Search, Facebook, and permitted community WhatsApp groups.' },
]

const funnel = [
  { stage: 'Awareness', activity: 'Search ads and safety posts on Facebook, Instagram, and permitted WhatsApp groups.', action: 'Visit the campaign page.', measure: 'Reach, impressions, and tagged visits.' },
  { stage: 'Consideration', activity: 'Explain the demo and connect visitors to emergency contacts, safety tips, and the FAQ.', action: 'Browse Emergency Services or Safety Tips.', measure: 'Page views, engaged sessions, and CTA clicks.' },
  { stage: 'Action', activity: 'Offer clear call links and a non-urgent demonstration enquiry form.', action: 'Call an official number or submit a demo enquiry.', measure: 'Call-intent clicks and enquiry submissions.' },
  { stage: 'Retention', activity: 'Share consent-based safety emails and regular social content.', action: 'Return to useful safety information.', measure: 'Return visits, email clicks, and unsubscribes.' },
]

const keywords = [
  { intent: 'Find emergency contacts', terms: 'South Africa emergency numbers; emergency contact numbers South Africa', page: 'Emergency Services' },
  { intent: 'Compare safety concepts', terms: 'personal safety app South Africa; emergency safety app South Africa', page: 'Campaign' },
  { intent: 'Learn how to prepare', terms: 'emergency preparedness tips South Africa; personal safety tips', page: 'Safety Tips' },
]

const budget = [
  { item: 'Search advertising', assumption: 'R1,500 at a planning CPC of R15, around 100 paid clicks before variance.', amount: 'R1,500' },
  { item: 'Creative production', assumption: 'Use existing project photography and in-house copy; staff time excluded.', amount: 'R0 cash cost' },
  { item: 'Analytics platform', assumption: 'GA4 platform cost assumed R0 at this scale; setup and staff time excluded.', amount: 'R0 platform cost' },
  { item: 'Contingency', assumption: 'Reserve for CPC variation or a small creative change.', amount: 'R500' },
]

const socialPosts = [
  { title: 'Emergency information, easy to find', channel: 'Instagram / Facebook', caption: 'Would you know where to find emergency contacts quickly? Explore the SafeDial concept and save the official numbers for your area. SafeDial is a demo, not a dispatch service.', action: 'Browse Emergency Services' },
  { title: 'Make a family plan', channel: 'Instagram carousel / Facebook', caption: 'Choose a meeting place, keep trusted contacts up to date, and make sure everyone knows how to reach help.', action: 'Read Safety Tips' },
  { title: 'Check your local contacts', channel: 'Facebook', caption: 'Save the emergency numbers used in your area and verify them with official sources. SafeDial does not place emergency calls.', action: 'View Emergency Services' },
  { title: 'Know your exits', channel: 'Instagram Story', caption: 'At school, work, or a venue, notice the nearest safe exit and follow local staff instructions.', action: 'Share one preparedness step' },
  { title: 'Small steps help', channel: 'WhatsApp Status / Instagram', caption: 'Charge your phone when possible, tell someone you trust your plan, and keep key contacts accessible.', action: 'Visit the SafeDial campaign page' },
]

const calendar = [
  { day: 'Monday', channel: 'Instagram and Facebook feed', post: 'Post 1: emergency information, clearly labelled as a concept demo.', destination: 'Campaign page' },
  { day: 'Tuesday', channel: 'Instagram Story', post: 'Poll: do you know where to find local emergency contacts?', destination: 'Emergency Services' },
  { day: 'Wednesday', channel: 'Instagram carousel and Facebook', post: 'Post 2: family safety-plan steps.', destination: 'Safety Tips' },
  { day: 'Thursday', channel: 'Instagram Story Q&A', post: 'Clarify that SafeDial does not dispatch responders.', destination: 'Campaign disclaimer' },
  { day: 'Friday', channel: 'Facebook feed', post: 'Post 3: verify and save local emergency contacts.', destination: 'Emergency Services' },
  { day: 'Saturday', channel: 'Instagram Story', post: 'Post 4: notice exits and follow venue guidance.', destination: 'Safety Tips' },
  { day: 'Sunday', channel: 'WhatsApp Status', post: 'Post 5: small preparedness steps; review weekly results.', destination: 'Campaign page' },
]

const kpis = [
  { name: 'Relevant website visits', target: '300', sample: '245 (81.7%)', method: 'GA4 sessions with campaign UTM parameters.' },
  { name: 'Emergency call-intent clicks', target: '60', sample: '52 (86.7%)', method: 'GA4 event on tel: links.' },
  { name: 'Safety Tips page views', target: '40', sample: '38 (95%)', method: 'GA4 page views for /safety-tips.' },
  { name: 'Demo enquiries', target: '20', sample: '16 (80%)', method: 'GA4 enquiry_submit event; local storage alone is not site-wide.' },
  { name: 'Engaged-session rate', target: '50%', sample: '48% (96% of target)', method: 'GA4 engagement reports.' },
]

const recommendations = [
  'Visits are 81.7% of the fictional target: tag links and compare qualified visits by channel before reallocating spend.',
  'Call-intent clicks are 86.7%: test clearer placement and wording for emergency contact links.',
  'Safety Tips views are 95%: continue useful safety posts and link each post to the relevant page.',
  'Demo enquiries are 80%: clarify the non-urgent purpose of the form and review abandonment after real tracking is available.',
  'Engaged-session rate is 48% against a 50% target: maintain useful content while testing ways to attract more relevant visits.',
]

function DataTable({ headers, rows }) {
  return (
    <div className="campaign-table-wrap">
      <table className="campaign-table">
        <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <th scope="row">{row[0]}</th>
              {row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CampaignPage() {
  return (
    <div className="campaign-page">
      <section className="campaign-hero">
        <div className="campaign-hero-copy">
          <p className="campaign-eyebrow">30-Day Safety Awareness Campaign</p>
          <h1>Find emergency information before you need it.</h1>
          <p>Explore emergency contact information and practical safety tips for planning ahead in South Africa.</p>
          <div className="campaign-actions">
            <Link className="campaign-primary-link" to="/services">Browse emergency contacts</Link>
            <Link className="campaign-secondary-link" to="/safety-tips">Read safety tips</Link>
          </div>
          <p className="campaign-disclaimer">SafeDial is a demonstration concept. It does not dispatch help or replace official emergency services. Confirm contacts with local official sources.</p>
        </div>
        <img className="campaign-hero-image" src={heroImage} alt="A person using a phone to view SafeDial emergency information" />
      </section>

      <nav className="campaign-section-nav" aria-label="Campaign sections">
        <a href="#audience">Audience</a>
        <a href="#funnel">Funnel</a>
        <a href="#search-plan">Search and budget</a>
        <a href="#social-plan">Social content</a>
        <a href="#email-plan">Email sequence</a>
        <a href="#measurement-plan">Measurement</a>
      </nav>

      <section className="campaign-section" id="audience">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Audience profile</p>
          <h2>Who this campaign is designed to help</h2>
          <p className="campaign-section-intro">These are planning hypotheses, not research findings. Validate them through interviews or a short survey before media spend.</p>
          <div className="campaign-audience-grid">
            {audiences.map((audience) => (
              <article className="campaign-audience" key={audience.title}>
                <h3>{audience.title}</h3>
                <p><strong>Need:</strong> {audience.need}</p>
                <p><strong>Touchpoints:</strong> {audience.channels}</p>
              </article>
            ))}
          </div>
          <article className="campaign-persona">
            <p className="campaign-eyebrow">Illustrative customer persona</p>
            <h3>Sam, 22, a student who commutes to campus</h3>
            <p>Sam wants a quick, mobile-friendly way to find useful safety information and keep official contacts accessible. Sam is wary of unverified shortcuts, so the page must distinguish example codes from real phone numbers and point to official sources.</p>
            <p><strong>Likely channels:</strong> mobile search, Instagram, and campus groups.</p>
            <p><strong>Next step:</strong> browse emergency contacts or read a relevant safety tip.</p>
            <p className="campaign-note">This persona is fictional and should be validated with intended users.</p>
          </article>
        </div>
      </section>

      <section className="campaign-section campaign-section-alt" id="funnel">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Digital marketing funnel</p>
          <h2>From awareness to return visits</h2>
          <div className="campaign-funnel-grid">
            {funnel.map((item) => (
              <article className="campaign-funnel-step" key={item.stage}>
                <p className="campaign-step-number">{item.stage}</p>
                <p>{item.activity}</p>
                <p><strong>Action:</strong> {item.action}</p>
                <p><strong>Measure:</strong> {item.measure}</p>
              </article>
            ))}
          </div>
          <p className="campaign-note">Email retention is proposed only. It needs a consent-aware email provider and working unsubscribe process before launch.</p>
        </div>
      </section>

      <section className="campaign-section" id="search-plan">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Search and budget</p>
          <h2>Help people find relevant safety information</h2>
          <p className="campaign-section-intro">Keyword research is a qualitative starting point. Search volume, difficulty, and conversion intent have not been independently measured.</p>
          <DataTable headers={['Search intent', 'Keyword themes', 'Destination']} rows={keywords.map((item) => [item.intent, item.terms, item.page])} />
          <article className="campaign-ad-proposal">
            <h3>Proposed paid-search ad</h3>
            <p><strong>Final URL:</strong> https://nifisom-cyber.github.io/Safedial-month2/campaign</p>
            <p><strong>Headlines:</strong> SafeDial Safety Guide; Emergency Info in South Africa; Plan Ahead With SafeDial</p>
            <p><strong>Descriptions:</strong> Explore a South African safety concept. Sample information only; no live dispatch. Find practical tips and contact links; for emergencies, contact official services.</p>
            <p className="campaign-note">Planning example only. Confirm ad character limits, landing-page policy, and a live keyword forecast before launch.</p>
          </article>
          <h3 className="campaign-subheading">Illustrative 30-day budget assumptions</h3>
          <DataTable headers={['Item', 'Assumption', 'Estimate']} rows={[
            ...budget.map((item) => [item.item, item.assumption, item.amount]),
            ['Maximum cash budget', 'Planning cap, not a quote.', 'R2,000'],
          ]} />
          <p className="campaign-note">The 300-visit target assumes additional organic and social visits. The estimated 100 paid clicks alone will not meet it. Reforecast using current platform data before approval.</p>
        </div>
      </section>

      <section className="campaign-section campaign-section-alt" id="social-plan">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Social media</p>
          <h2>Five posts and a one-week calendar</h2>
          <p className="campaign-section-intro">Include the concept-demo disclaimer on every post. Link to official emergency information where appropriate.</p>
          <div className="campaign-post-grid">
            {socialPosts.map((post, index) => (
              <article className="campaign-post" key={post.title}>
                <p className="campaign-step-number">Post {index + 1} - {post.channel}</p>
                <h3>{post.title}</h3>
                <p>{post.caption}</p>
                <p><strong>Call to action:</strong> {post.action}</p>
              </article>
            ))}
          </div>
          <h3 className="campaign-subheading">One-week content calendar</h3>
          <DataTable headers={['Day', 'Channel', 'Content', 'Destination']} rows={calendar.map((item) => [item.day, item.channel, item.post, item.destination])} />
        </div>
      </section>

      <section className="campaign-section" id="email-plan">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Two-email sequence</p>
          <h2>Welcome, then share a useful next step</h2>
          <div className="campaign-email-grid">
            <article className="campaign-email">
              <p className="campaign-step-number">Email 1 - Welcome</p>
              <h3>Subject: Welcome to SafeDial - Your Safety Matters</h3>
              <p><strong>Preview:</strong> Stay informed, stay prepared, and discover useful safety tips.</p>
              <p>Hello, and welcome to the SafeDial safety-awareness community. Explore emergency contact information and practical preparedness ideas for students, families, employees, and communities.</p>
              <p>Your safety matters. Start by reviewing the information and contacts for your area.</p>
              <Link className="campaign-secondary-link" to="/services">Explore emergency information</Link>
            </article>
            <article className="campaign-email">
              <p className="campaign-step-number">Email 2 - Promotional (AIDA)</p>
              <h3>Subject: In an Emergency, Every Second Counts</h3>
              <p><strong>Attention:</strong> Would you know where to find emergency contacts quickly?</p>
              <p><strong>Interest:</strong> SafeDial brings emergency contact information and practical safety tips together in one concept website.</p>
              <p><strong>Desire:</strong> Review useful contacts and prepare a simple plan with people you trust.</p>
              <p><strong>Action:</strong> Explore the information and verify local contacts with official sources.</p>
              <Link className="campaign-secondary-link" to="/safety-tips">Read safety tips</Link>
            </article>
          </div>
          <p className="campaign-note">These are sample emails, not sent by the site. Before sending, configure consent storage, a privacy notice, an email provider, and working unsubscribe links.</p>
        </div>
      </section>

      <section className="campaign-section campaign-section-alt" id="measurement-plan">
        <div className="campaign-section-inner">
          <p className="campaign-eyebrow">Objective and measurement</p>
          <h2>Set targets, measure carefully</h2>
          <p className="campaign-objective"><strong>30-day objective:</strong> reach 300 relevant visits, 60 emergency-contact call-intent clicks, 40 Safety Tips views, 20 demo enquiries, and a 50% engaged-session rate.</p>
          <p className="campaign-sample-warning">Dashboard results below are fictional examples for planning. They are not actual SafeDial campaign performance.</p>
          <DataTable headers={['KPI', 'Target', 'Fictional example', 'Measurement']} rows={kpis.map((item) => [item.name, item.target, item.sample, item.method])} />
          <p className="campaign-note">Before launch, configure GA4, UTM naming, privacy review, and consent controls. Test page-view, call-intent, and enquiry events in DebugView; review weekly and compare measured results with targets. GA4 is not connected, so live results are not available. Local Storage enquiries are browser-specific, not a site-wide count.</p>
          <div className="campaign-test-hypothesis">
            <h3>A/B testing hypothesis</h3>
            <p>“Get Safety Tips” will receive a higher CTA click-through rate than “Subscribe Now” because it states the benefit more clearly.</p>
            <p>Show both versions to comparable visitors, keep design and placement identical, and compare CTA clicks divided by CTA views. The current website uses “Get Safety Tips”; no live experiment has run, so there is no winning variant.</p>
          </div>
          <h3 className="campaign-subheading">Optimisation recommendations</h3>
          <p className="campaign-note">These are testable recommendations based on the fictional sample results, not conclusions from live visitors.</p>
          <ol className="campaign-recommendations">
            {recommendations.map((recommendation) => <li key={recommendation}>{recommendation}</li>)}
          </ol>
          <Link className="campaign-secondary-link" to="/analytics">Open the sample analytics dashboard</Link>
        </div>
      </section>

      <section className="campaign-next-step">
        <h2>Make your next step a prepared one.</h2>
        <div className="campaign-actions campaign-actions-centered">
          <Link className="campaign-primary-link" to="/services">View emergency services</Link>
          <Link className="campaign-secondary-link" to="/safety-tips">Read safety tips</Link>
        </div>
      </section>
    </div>
  )
}

export default CampaignPage