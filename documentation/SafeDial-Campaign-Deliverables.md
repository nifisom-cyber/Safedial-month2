# SafeDial Campaign Deliverables

## Campaign Status

This is a proposed 30-day awareness pilot for the SafeDial concept. It has not launched. Campaign targets are goals, not forecasts; dashboard results are fictional examples and must not be reported as live performance.

## Campaign Objective

Within 30 days of launch, attract at least 300 relevant visits from people in South Africa, generate 60 emergency-contact call-intent clicks, reach 40 Safety Tips page views, receive 20 demonstration enquiries, and achieve a 50% engaged-session rate. Establish a baseline during week one and review results weekly.

## Working Audience Profiles

These are planning hypotheses, not research findings. Validate them through interviews or a short survey before media spend.

| Audience | Need and context | Likely digital touchpoints | Message and next step |
|---|---|---|---|
| Students and young adults | Want quick access to safety information while commuting, on campus, or out with friends. | Mobile search, Instagram, campus and community WhatsApp groups. | Keep official contacts accessible; browse emergency information and practical tips. |
| Parents, families, and caregivers | Want household members to know whom to contact and how to prepare. | Search, Facebook, family WhatsApp groups, email. | Make a simple family safety plan and review the Safety Tips page together. |
| Employees and workers | Need to find workplace-relevant contacts and remember basic emergency steps. | Search, employer or community channels, Facebook. | Review emergency contacts and identify the correct workplace procedure. |
| South African community members | Want clear, locally relevant safety information without confusing claims. | Search, Facebook, WhatsApp community groups. | Save verified local contacts and share practical safety information. |

All audience-facing copy must state that SafeDial is a demonstration concept and does not dispatch help or replace official services.

## Digital Marketing Funnel

| Stage | Channel and content | Destination or action | Measurement |
|---|---|---|---|
| Awareness | Search, Facebook and Instagram posts, permitted WhatsApp sharing. | Campaign landing page. | Reach, impressions, tagged sessions. |
| Consideration | Clear explanation of the demo, emergency information, FAQ, and safety tips. | Browse Emergency Services or Safety Tips. | Landing-page engagement, page views, CTA clicks. |
| Action | Prominent call links and a clearly labelled demonstration enquiry form. | Call-intent click or submit a non-urgent demo enquiry. | `emergency_call_click`, `enquiry_submit`. |
| Retention | Consent-based welcome and safety-awareness emails; recurring social posts. | Return to relevant safety content. | Email opens/clicks, unsubscribe rate, return sessions. |

Email retention is not active until a compliant email service, consent record, and working unsubscribe mechanism are configured.

## Campaign Landing Page

The campaign landing page is `/campaign` on the React site. Its primary actions are to browse emergency contacts and read Safety Tips. It must keep the demo disclaimer visible, use the SafeDial image assets, and avoid implying that sample codes connect to responders.

## SEO Keyword Strategy

The terms below are a qualitative starting list from a manual search-results scan. Search volume, difficulty, and conversion intent have not been independently measured. Validate them in Google Keyword Planner or another keyword tool before launch.

| Search intent | Keyword themes | Recommended page |
|---|---|---|
| Find official contacts | South Africa emergency numbers; emergency contact numbers South Africa | Emergency Services |
| Compare safety concepts | personal safety app South Africa; emergency safety app South Africa | Campaign landing page |
| Learn how to prepare | emergency preparedness tips South Africa; personal safety tips | Safety Tips |

Use one descriptive page title and meta description per indexable page, descriptive headings, useful alt text, and links between the campaign, Emergency Services, and Safety Tips pages. Do not promise live dispatch. Recheck search results and keyword data before buying ads.

## Proposed Paid-Search Advertisement

**Final URL:** `https://nifisom-cyber.github.io/safedial-month2/campaign`  
**Display path:** `SafeDial / Safety-Info`

**Headlines**
- SafeDial Safety Guide
- Emergency Info in South Africa
- Plan Ahead With SafeDial

**Descriptions**
- Explore a South African safety concept. Sample information only; no live dispatch.
- Find practical tips and contact links. For emergencies, contact official services.

Use phrase and exact-match variants for the keyword themes above. Add negatives such as `jobs`, `careers`, and `training course` after reviewing actual search terms. Confirm Google Ads character limits, landing-page policy, and final URL behavior before launch.

## Budget Assumptions

Illustrative 30-day pilot cap only; these figures are planning assumptions, not a supplier quote or a claim about current South African CPCs.

| Item | Assumption | Estimated amount |
|---|---|---:|
| Search media | R1,500 spend; planning CPC R15; approximately 100 paid clicks before any variance. | R1,500 |
| Creative production | Use existing project photography and in-house copy; staff time excluded. | R0 cash cost |
| Analytics platform | GA4 has no platform fee at this scale; setup and staff time are excluded. | R0 platform cost |
| Contingency | Hold for CPC variation or a small creative adjustment. | R500 |
| **Maximum cash budget** |  | **R2,000** |

The 300-visit target assumes additional organic and social visits; the 100-click media scenario alone does not meet it. Reforecast using a live keyword planner and actual CPC data before approval.

## Five Social-Media Posts

Include the concept-demo disclaimer on every post and link to official emergency information where appropriate.

1. **Emergency information, easy to find** (Instagram/Facebook): “Would you know where to find emergency contacts quickly? Explore the SafeDial concept and save the official numbers for your area. SafeDial is a demo, not a dispatch service.” CTA: Browse Emergency Services.
2. **Make a family plan** (Instagram carousel/Facebook): “Choose a meeting place, keep trusted contacts up to date, and make sure everyone knows how to reach help.” CTA: Read Safety Tips.
3. **Check your local contacts** (Facebook): “Save the emergency numbers used in your area and verify them with official sources. SafeDial does not place emergency calls.” CTA: View Emergency Services.
4. **Know your exits** (Instagram Story): “At school, work, or a venue, take a moment to notice the nearest safe exit and follow local staff instructions.” CTA: Share one preparedness step.
5. **Small steps help** (WhatsApp Status/Instagram): “Charge your phone when possible, tell someone you trust your plan, and keep key contacts accessible.” CTA: Visit the SafeDial campaign page.

## One-Week Social Content Calendar

| Day | Channel and format | Post | Destination or action |
|---|---|---|---|
| Monday | Instagram and Facebook feed | Post 1: emergency information, clearly labelled as a concept demo. | Campaign landing page |
| Tuesday | Instagram Story | Poll: “Do you know where to find your local emergency contacts?” | Emergency Services |
| Wednesday | Instagram carousel and Facebook | Post 2: family safety-plan steps. | Safety Tips |
| Thursday | Instagram Story Q&A | Explain that SafeDial does not dispatch responders. | Campaign FAQ/disclaimer |
| Friday | Facebook feed | Post 3: verify and save local emergency contacts. | Emergency Services |
| Saturday | Instagram Story | Post 4: notice exits and follow venue guidance. | Safety Tips |
| Sunday | WhatsApp Status | Post 5: small preparedness steps; review reach and clicks. | Campaign landing page |

## Email Assets

- Welcome email: [Welcome-Email.md](email-marketing/Welcome-Email.md)
- Promotional AIDA email: [Promotional-Email-AIDA.md](email-marketing/Promotional-Email-AIDA.md)
- Email journey: 14 days, distinct from the 30-day awareness pilot: welcome on day 1, segmented safety tip on day 3, promotional email on day 7, preparedness reminder on day 14.

Do not send either sample until the mailing platform stores consent, the privacy notice is published, and each email has a working unsubscribe link.

## KPIs and Measurement Plan

| KPI | 30-day target | Measurement method |
|---|---:|---|
| Relevant website visits | 300 | GA4 sessions with campaign UTM parameters. |
| Emergency contact call-intent clicks | 60 | GA4 `emergency_call_click` event on `tel:` links. |
| Safety Tips page views | 40 | GA4 page views for `/safety-tips`. |
| Demonstration enquiries | 20 | GA4 `enquiry_submit`; local browser storage alone is not a site-wide count. |
| Engaged-session rate | 50% | GA4 engagement reports. |

Tag campaign links with `utm_source`, `utm_medium`, and `utm_campaign`. Check events in GA4 DebugView before launch, review weekly, and compare the completed 30-day period with the targets. GA4 is not connected to the current site; a property, measurement ID, privacy review, and any required consent flow are still needed.

## A/B Testing Hypothesis

For the subscription CTA, test “Subscribe Now” (A) against “Get Safety Tips” (B). Hypothesis: B will produce a higher CTA click-through rate because it states the benefit. Randomly assign comparable visitors, keep design and placement identical, and compare CTA clicks divided by CTA views. The current site uses B, but no live experiment has been run and there is no winning result.

## Sample Results and Optimisation

The existing dashboard uses fictional figures. The following actions are hypotheses to test, not conclusions from live users.

| KPI | Target | Fictional sample | Next optimisation to test |
|---|---:|---:|---|
| Visits | 300 | 245 (81.7%) | Use tagged social/search links and compare qualified visits by channel. |
| Call-intent clicks | 60 | 52 (86.7%) | Test clearer placement and wording for emergency contact links. |
| Safety Tips views | 40 | 38 (95%) | Continue the safety-tip posts and link each to the relevant page. |
| Enquiries | 20 | 16 (80%) | Clarify that the form is for non-urgent demo enquiries; review abandonment after real tracking exists. |
| Engagement rate | 50% | 48% (96% of target) | Maintain useful content while testing ways to increase qualified reach. |

Do not describe these sample results as actual campaign outcomes. Replace them only after a real campaign has run and tracking has been checked.

## Launch Checklist

- Confirm emergency information and local applicability with official sources.
- Verify the campaign URL, routes, and mobile layout on the published domain.
- Configure analytics, UTM naming, privacy notice, and any required consent controls.
- Configure consent storage and a working unsubscribe process before email delivery.
- Confirm the ad budget and keyword forecast with current platform data.
- Keep all sample results labelled as fictional until replaced with measured data.