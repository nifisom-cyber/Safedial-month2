
# SafeDial — Week 8 Final Testing Report

## 1. Project Information

Project Name: SafeDial
Tagline: Help Is One Dial Away

Project Type: Digital Campaign and Customer Engagement Platform

## 2. Testing Objective

The purpose of this testing is to check that SafeDial
works correctly before the final CAPACITI presentation.

## 3. Final Testing Checklist

| Feature | Expected Result | Status |
|---------|-----------------|--------|

| Home Page | Opens correctly | Passed |


| Navigation Menu | All page links work | Passed |


| Emergency Services | Emergency numbers display | Passed |

| Search Function | Filters emergency services | Passed |
| Copy Number Button | Copies the selected number | Passed |
| Safety Tips | Safety information displays | Passed |
| Subscription Form | Accepts valid demo input and displays confirmation | Passed |
| Safety Enquiries | Accepts demo input and displays confirmation | Passed |
| Analytics Dashboard | Displays five sample KPI cards and chart | Passed |
| Campaign Landing Page | Opens and displays campaign content | Passed |
| Mobile Responsiveness | Website fits mobile screens | Passed |

## 4. Testing Environment

Website:
https://nifisom-cyber.github.io/Safedial-month2/

Testing Method:
Manual browser testing.

Tests 1–10 describe the previously published site. Tests 11–12
were completed in the local Vite preview after the campaign page
and fifth KPI were added. Those changes still need a post-deploy check.

## 5. Testing Results


### Test 1: Home Page

Status: Passed

Result:
The SafeDial Home page opened successfully
on the published website.

The website name, tagline, text, buttons
and images displayed correctly.

The Home navigation link also worked.

No problems were identified during this test.

### Test 2: Navigation Menu

Status: Passed

Result:
All SafeDial navigation links worked correctly
on the published website.

The following pages opened successfully:
- Home
- Emergency Services
- Safety Tips
- Subscribe
- About Us
- Safety Enquiries
- Analytics Dashboard

The Emergency Services page also opened
correctly after refreshing the browser.

No navigation errors were identified.

### Test 3: Emergency Services

Status: Passed

Result:
The Emergency Services page opened successfully.

All emergency service cards displayed correctly.

The service names, emergency numbers and
action buttons were visible.

No display problems were identified.

Conclusion:
The Emergency Services display test passed.

### Test 4: Emergency Services Search Function

Status: Passed

Result:
I opened the Emergency Services page and
typed "Police" into the search box.

The search function worked correctly and
displayed the Police service.

Conclusion:
The search function passed the test.

### Test 5: Copy Number Button

Status: Passed

Result:
I opened the Emergency Services page
and selected the Police service.

I clicked the Copy Number button.

I opened Notepad and pressed Ctrl + V.

The correct Police emergency number was pasted.

Conclusion:
The Copy Number button works correctly
and passed the test.

### Test 6: Safety Tips Page

Status: Passed

Result:
I opened the Safety Tips page on the
published SafeDial website.

All safety tips displayed correctly.

The information was clear and easy to read.

No missing or overlapping content was identified.

Conclusion:
The Safety Tips page passed the test.

### Test 7: Subscription Form

Status: Passed

Result:
I opened the Subscribe page on the
published SafeDial website.

I entered a test email address and
clicked the Subscribe button.

The form accepted the email address
and displayed a success message.

Conclusion:
The Subscription Form passed the
basic user interface test.

Note:
Email delivery and permanent subscription
storage have not been verified.

### Test 8: Safety Enquiries Form

Status: Passed

Result:
I opened the Safety Enquiries page
on the published SafeDial website.

I completed the form using test information.

I entered the message:
"This is a test enquiry for SafeDial."

I clicked the Submit button.

The form submitted successfully and
displayed a confirmation message.

Conclusion:
The Safety Enquiries Form passed
the basic submission test.

Note:
The confirmation message was verified.
Enquiry storage was not tested.

### Test 9: Analytics Dashboard

Status: Passed

Result:
I opened the Analytics Dashboard on the
published SafeDial website. The four KPI cards
in that published version displayed correctly.

No missing or overlapping content was identified.

I also refreshed the Analytics Dashboard,
and the page opened successfully.

Conclusion:
The Analytics Dashboard passed the
display and page refresh tests.

Note:
The dashboard currently uses sample data,
not real website analytics.

### Test 10: Mobile Responsiveness

Status: Passed

Result:
I opened the published SafeDial website
in Google Chrome.

I used Developer Tools to test the website
in mobile view.

The website displayed correctly on
the smaller screen.

The text was readable, the navigation
menu worked, and the content fitted
the mobile screen.

Conclusion:
SafeDial passed the mobile responsiveness
test in the selected mobile view.


### Test 11: Campaign Landing Page

Status: Passed

Result:
The `/campaign` route opened in the local React preview.
The campaign image and all four audience cards loaded.
The primary links opened Emergency Services and Safety Tips.
The page fitted a 390px mobile viewport without horizontal overflow.

### Test 12: Five-KPI Dashboard

Status: Passed

Result:
The updated dashboard displayed all five sample KPIs,
including engagement rate, and all five chart rows.
The mobile viewport had no horizontal overflow.

Note:
Dashboard figures remain fictional sample data. GA4 is not connected.

## 6. Bugs and Improvements

### Bug 2: Contact Link Not Working

Problem:
The Contact link did not open the correct page.
It added #contact to the current website URL.

Cause:
The navigation used an anchor link instead
of React Router navigation.

Solution:
Changed the Contact link in App.jsx from:

<a href="#contact">Contact</a>

To:

<Link to="/enquiries">Contact</Link>

Testing:
- Tested the Contact link locally.
- Rebuilt and redeployed the website.
- Tested the Contact link on GitHub Pages.

Result:
The Contact link now opens the
Safety Enquiries page correctly.

Status: Fixed and Passed

### Bug 1: Analytics Dashboard 404 Error

Problem:
The Analytics Dashboard displayed a 404 error
when the page was refreshed or opened directly.

Cause:
GitHub Pages did not automatically recognise
the React Router page URL.

Solution:
- Created a custom 404.html redirect file.
- Updated main.jsx to restore the requested route.
- Added a .nojekyll file.
- Rebuilt and redeployed the website.

Testing Result:
Passed

The Analytics Dashboard now opens correctly
after refreshing the browser.

Status:
Fixed and tested successfully.

Any problems found during testing will be documented
and corrected where possible.

## 7. Conclusion

Final testing is in progress.

The report will be updated once all features
have been checked.
