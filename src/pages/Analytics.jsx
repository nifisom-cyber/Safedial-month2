
const campaignData = {
  websiteVisits: 245,
  emergencyClicks: 52,
  safetyTipsViews: 38,
  enquiries: 16,
  engagementRate: 48
}

function Analytics() {
  return (
    <div className="analytics-page">
      <h1>SafeDial Campaign Analytics</h1>

      <p>
        Track campaign performance and measure
        progress towards our marketing goals.
      </p>

      <h2>30-Day Campaign Performance</h2>

      <p>
        <strong>Demonstration Dashboard:</strong>
        All figures are fictional sample data,
        not actual SafeDial campaign results.
      </p>
      
<div className="analytics-cards">
  <div className="analytics-card">
    <h3>Website Visits</h3>
    <h2>{campaignData.websiteVisits}</h2>
    <p>Target: 300 visits</p>
  </div>

  <div className="analytics-card">
    <h3>Emergency Button Clicks</h3>
    <h2>{campaignData.emergencyClicks}</h2>
    <p>Target: 60 clicks</p>
  </div>

  <div className="analytics-card">
    <h3>Safety Tips Views</h3>
    <h2>{campaignData.safetyTipsViews}</h2>
    <p>Target: 40 views</p>
  </div>

  <div className="analytics-card">
    <h3>Demo Enquiries</h3>
    <h2>{campaignData.enquiries}</h2>
    <p>Target: 20 enquiries</p>
  </div>

  <div className="analytics-card">
    <h3>Engagement Rate</h3>
    <h2>{campaignData.engagementRate}%</h2>
    <p>Target: 50%</p>
  </div>
</div>

<section className="analytics-chart">
  <h2>Campaign Performance vs Targets</h2>
  <p>Fictional sample results for a proposed 30-day campaign.</p>

  {[
    { name: 'Website Visits', actual: campaignData.websiteVisits, target: 300 },
    { name: 'Emergency Clicks', actual: campaignData.emergencyClicks, target: 60 },
    { name: 'Safety Tips Views', actual: campaignData.safetyTipsViews, target: 40 },
    { name: 'Demo Enquiries', actual: campaignData.enquiries, target: 20 },
    { name: 'Engagement Rate', actual: campaignData.engagementRate, target: 50, unit: '%' }
  ].map((item) => (
    <div className="chart-item" key={item.name}>
      <p>
        <strong>{item.name}</strong>:
        {' '}{item.actual}{item.unit ?? ''} / {item.target}{item.unit ?? ''}
      </p>

      <div className="chart-bar-background">
        <div
          className="chart-bar-fill"
          style={{
            width: `${Math.min(
              (item.actual / item.target) * 100,
              100
            )}%`
          }}
        ></div>
      </div>
    </div>
  ))}
</section>

    </div>
  )
}

export default Analytics
