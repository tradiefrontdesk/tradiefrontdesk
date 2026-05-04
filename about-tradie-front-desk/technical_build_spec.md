# Technical Build Spec

# The Tradie Front Desk System

## GoHighLevel Build Blueprint, CRM Structure, Pipelines, Fields, Tags, Forms, Workflows, Automations, Reporting, Testing, And Launch Standards

## Core Product

# **The Tradie Front Desk System**

## Core Promise

# **More Booked Jobs. Less Chasing. No Tech Headaches.**

## Core Mechanism

# **Capture → Respond → Qualify → Book → Follow Up**

---

# 1. Purpose Of This Document

This document defines how **The Tradie Front Desk System** should be technically built, mainly inside **GoHighLevel**.

It is the operational blueprint for building the system consistently for trade businesses.

This document should guide:

- GoHighLevel sub-account setup
- Snapshot creation
- CRM structure
- Contact fields
- Tags
- Pipelines
- Forms
- Calendars
- Workflows
- Missed-call text-back
- SMS/email follow-up
- Quote follow-up
- Review automation
- Old lead reactivation
- Campaign lead routing
- AI phone assistant rules
- Reporting
- QA testing
- Launch process
- Monthly optimisation
- Troubleshooting

The goal is to build a repeatable system that can be customised for each trade business without rebuilding everything from scratch.

---

# 2. Technical Build Philosophy

## 2.1 Build A Managed System, Not A Random CRM

The client is not buying a CRM.

They are buying a managed front-desk system.

Therefore, every technical component must support one of the five core actions:

1. Capture the enquiry
2. Respond quickly
3. Qualify the job
4. Move the customer toward booking/callback/quote
5. Follow up until outcome

If a workflow, field, tag, or pipeline stage does not support those outcomes, it should be removed or simplified.

---

## 2.2 Keep The Build Simple Enough To Manage

The system should be powerful, but not overcomplicated.

Avoid unnecessary:

- Tags
- Pipeline stages
- Branches
- Custom fields
- Workflows
- Conditions
- Notifications
- User permissions

The system should be understandable by the internal team and simple enough for the client to use if needed.

---

## 2.3 Customise The Rules, Not The Whole System

The base structure should remain consistent across clients.

Customise:

- Services
- Service areas
- Urgency rules
- Message tone
- Follow-up timing
- Notification recipients
- Booking rules
- Qualification questions
- Bad-fit criteria

Avoid fully custom architecture unless the client is paying for advanced implementation.

---

## 2.4 Test Before Launch

Every workflow must be tested before real customers use it.

Never launch untested:

- Forms
- Missed-call messages
- Follow-up sequences
- Quote follow-ups
- Notifications
- Campaign routing
- Review requests
- AI phone flows

---

## 2.5 Default To Owner Review Before Risky Actions

The system should not automatically:

- Confirm complex jobs
- Give exact pricing
- Decline customers aggressively
- Promise availability
- Accept urgent jobs without owner visibility
- Give technical advice

Default safe behaviour:

> Capture details, notify owner, move to review/callback stage.

---

# 3. Recommended GoHighLevel Structure

## 3.1 Agency Account Structure

Recommended hierarchy:

- Agency account
  - Snapshot: Tradie Front Desk System - Base
  - Snapshot: Tradie Front Desk System - Starter
  - Snapshot: Tradie Front Desk System - Booked Jobs
  - Snapshot: Tradie Front Desk System - Managed Growth
  - Client sub-accounts

---

## 3.2 Snapshot Strategy

Create a base snapshot that includes the standard architecture.

Recommended snapshots:

### Snapshot 1: Base Snapshot

Includes:

- Core pipeline
- Core custom fields
- Core tags
- Basic forms
- Basic workflows disabled by default
- Message templates
- Notification templates
- Reporting dashboard structure

### Snapshot 2: Front Desk Starter

Includes:

- Missed-call text-back
- Basic enquiry form
- Basic follow-up
- Basic pipeline
- Owner notifications

### Snapshot 3: Booked Jobs System

Includes:

- Advanced quote form
- Lead qualification
- Quote follow-up
- Callback flow
- Full pipeline
- Monthly reporting structure

### Snapshot 4: Managed Growth System

Includes:

- Campaign lead routing
- Reactivation workflows
- Review automation
- Optional AI phone placeholders
- Advanced reporting

---

## 3.3 Naming Convention

Use consistent naming so workflows are easy to find.

Recommended format:

`TDFS - [Category] - [Workflow Name]`

Examples:

- `TDFS - Capture - Website Form Submitted`
- `TDFS - Capture - Missed Call Text Back`
- `TDFS - Respond - New Enquiry SMS`
- `TDFS - Qualify - Request Job Details`
- `TDFS - Follow Up - New Enquiry No Response`
- `TDFS - Follow Up - Quote Sent Sequence`
- `TDFS - Notify - Owner New Lead Alert`
- `TDFS - Reviews - Request Google Review`
- `TDFS - Reactivation - Old Lead Campaign`

For tags:

`TDFS | Category | Tag Name`

Examples:

- `TDFS | Source | Website`
- `TDFS | Status | New Enquiry`
- `TDFS | Action | Needs Callback`

For custom fields:

`TDFS - Field Name`

Examples:

- `TDFS - Service Needed`
- `TDFS - Job Location`

---

# 4. Client Sub-Account Setup

## 4.1 Required Client Details

Before building, collect:

- Business name
- Legal business name
- Website URL
- Main phone number
- Main email
- Business address, if relevant
- Service areas
- Business hours
- After-hours rules
- Emergency rules
- Owner contact details
- Team notification contacts
- Google review link
- Booking preferences
- Services
- Good-fit job criteria
- Bad-fit job criteria
- Tone of voice

---

## 4.2 Sub-Account Settings

Configure:

- Business profile
- Time zone
- Business address
- Email sending domain, if applicable
- Phone number
- SMS settings
- Call tracking settings
- User permissions
- Calendar settings
- Notification settings
- Company branding
- Default from email/name

Recommended timezone:

- Use client local timezone.

For New Zealand clients:

- `Pacific/Auckland`

For Australian clients:

- Use correct state timezone.

---

## 4.3 Users And Permissions

Recommended user roles:

### Owner User

Access:

- Conversations
- Contacts
- Opportunities
- Calendars
- Reporting

Avoid giving unnecessary workflow editing access unless client is technical.

### Admin / Office User

Access:

- Conversations
- Contacts
- Opportunities
- Calendars

### Internal Agency User

Access:

- Full admin
- Workflows
- Settings
- Forms
- Funnels/sites
- Reporting

### Sales / Estimator User

Access:

- Opportunities
- Conversations
- Calendars

---

# 5. Core Pipeline Build

## 5.1 Pipeline Name

# **Job Enquiry Pipeline**

Alternative names:

- Front Desk Pipeline
- Quote Request Pipeline
- Enquiry To Booking Pipeline

Recommended:

# **Job Enquiry Pipeline**

---

## 5.2 Standard Pipeline Stages

Use these default stages for the full Booked Jobs System.

1. New Enquiry
2. Auto Response Sent
3. Details Requested
4. Details Received
5. Needs Owner Review
6. Callback Required
7. Quote / Site Visit Booked
8. Quote Sent
9. Follow-Up Needed
10. Won
11. Lost
12. Not Suitable

---

## 5.3 Stage Definitions

### Stage 1: New Enquiry

A new lead has entered the system.

Sources may include:

- Website form
- Missed call
- Facebook lead form
- Google lead form
- Manual entry
- Reactivation reply
- AI phone call

### Stage 2: Auto Response Sent

The system has sent an acknowledgement or missed-call text-back.

### Stage 3: Details Requested

The system has asked for missing details such as location, service, urgency, or photos.

### Stage 4: Details Received

Customer has provided enough information for review.

### Stage 5: Needs Owner Review

The enquiry needs a human to decide whether to call, quote, decline, or request more information.

### Stage 6: Callback Required

Customer needs a callback or has requested one.

### Stage 7: Quote / Site Visit Booked

A quote call, quote appointment, or site visit has been booked or requested.

### Stage 8: Quote Sent

A quote has been sent to the customer.

### Stage 9: Follow-Up Needed

Customer needs follow-up or has not responded after quote/enquiry.

### Stage 10: Won

Job has been accepted or booked.

### Stage 11: Lost

Customer did not proceed, chose someone else, or stopped responding.

### Stage 12: Not Suitable

Customer is outside area, wrong service, bad-fit job, or otherwise unsuitable.

---

## 5.4 Starter Pipeline Version

For Front Desk Starter, use a simpler pipeline:

1. New Enquiry
2. Response Sent
3. Needs Callback
4. Quote / Review Needed
5. Won
6. Lost
7. Not Suitable

---

## 5.5 Managed Growth Additional Stages

For Managed Growth clients, optionally add:

- Campaign Lead
- Reactivated Lead
- High-Value Lead
- Urgent Lead
- Review Requested

However, avoid too many stages. Prefer tags for categories and stages for actual process movement.

---

# 6. Custom Fields

## 6.1 Core Custom Fields

Create the following custom fields.

### Field: TDFS - Service Needed

Type: Text or dropdown

Purpose:

Tracks the service the customer needs.

Examples:

- Roof repair
- Plumbing leak
- Electrical work
- Landscaping quote

---

### Field: TDFS - Job Location

Type: Text

Purpose:

Captures address, suburb, or service location.

---

### Field: TDFS - Suburb

Type: Text

Purpose:

Allows service-area filtering.

---

### Field: TDFS - Urgency

Type: Dropdown

Options:

- Emergency
- Urgent
- This week
- This month
- Future planning
- Not sure

---

### Field: TDFS - Preferred Callback Time

Type: Text or date/time

Purpose:

Captures when the customer wants to be contacted.

---

### Field: TDFS - Property Type

Type: Dropdown

Options:

- Residential
- Commercial
- Rural
- Industrial
- Not sure

---

### Field: TDFS - Photos Provided

Type: Dropdown or checkbox

Options:

- Yes
- No
- Requested
- Not required

---

### Field: TDFS - Job Description

Type: Long text

Purpose:

Captures summary of the job.

---

### Field: TDFS - Lead Source

Type: Dropdown

Options:

- Website
- Missed Call
- Phone Call
- Facebook
- Instagram
- Google
- Referral
- Reactivation
- Paid Campaign
- AI Phone
- Manual Entry
- Other

---

### Field: TDFS - Good-Fit Status

Type: Dropdown

Options:

- Good Fit
- Possible Fit
- Needs Review
- Bad Fit
- Unknown

---

### Field: TDFS - Bad-Fit Reason

Type: Text or dropdown

Options:

- Outside service area
- Wrong service
- Too small
- No capacity
- Unsafe job
- Not decision maker
- Price shopper
- Other

---

### Field: TDFS - Quote Status

Type: Dropdown

Options:

- Not quoted
- Quote requested
- Quote booked
- Quote sent
- Quote accepted
- Quote declined
- Quote expired
- Needs follow-up

---

### Field: TDFS - Estimated Job Value

Type: Monetary or text

Purpose:

Optional. Helps prioritise high-value jobs.

---

### Field: TDFS - Review Status

Type: Dropdown

Options:

- Not requested
- Approved to request
- Requested
- Reminder sent
- Review received
- Do not request

---

### Field: TDFS - Last Follow-Up Date

Type: Date

Purpose:

Tracks last follow-up for reporting or logic.

---

### Field: TDFS - Next Action

Type: Text

Purpose:

Simple human-readable next step.

Examples:

- Call customer
- Awaiting photos
- Quote follow-up due
- Owner review required

---

## 6.2 Optional Custom Fields

Use only when needed.

- TDFS - Job Address
- TDFS - Emergency Status
- TDFS - Decision Maker
- TDFS - Budget Range
- TDFS - Timeline
- TDFS - Existing Customer
- TDFS - Campaign Name
- TDFS - Ad Set Name
- TDFS - Landing Page
- TDFS - Google Click ID
- TDFS - Facebook Click ID
- TDFS - Assigned Team Member
- TDFS - AI Call Summary
- TDFS - AI Call Recording Link
- TDFS - Original Enquiry Message

---

# 7. Tags

## 7.1 Tag Categories

Use tags for categories and automation conditions, not for every tiny event.

Tag categories:

- Source
- Status
- Action
- Fit
- Urgency
- Package / module
- Campaign
- Reactivation
- Review
- AI Phone

---

## 7.2 Source Tags

- `TDFS | Source | Website`
- `TDFS | Source | Missed Call`
- `TDFS | Source | Phone Call`
- `TDFS | Source | Facebook`
- `TDFS | Source | Instagram`
- `TDFS | Source | Google`
- `TDFS | Source | Referral`
- `TDFS | Source | Paid Campaign`
- `TDFS | Source | Reactivation`
- `TDFS | Source | AI Phone`
- `TDFS | Source | Manual Entry`

---

## 7.3 Status Tags

- `TDFS | Status | New Enquiry`
- `TDFS | Status | Auto Response Sent`
- `TDFS | Status | Details Requested`
- `TDFS | Status | Details Received`
- `TDFS | Status | Needs Owner Review`
- `TDFS | Status | Callback Required`
- `TDFS | Status | Quote Sent`
- `TDFS | Status | Won`
- `TDFS | Status | Lost`
- `TDFS | Status | Not Suitable`

---

## 7.4 Action Tags

- `TDFS | Action | Call Back`
- `TDFS | Action | Send Quote`
- `TDFS | Action | Request Photos`
- `TDFS | Action | Request Location`
- `TDFS | Action | Follow Up Needed`
- `TDFS | Action | Owner Review Needed`
- `TDFS | Action | Stop Follow Up`

---

## 7.5 Fit Tags

- `TDFS | Fit | Good Fit`
- `TDFS | Fit | Possible Fit`
- `TDFS | Fit | Bad Fit`
- `TDFS | Fit | Needs Review`

---

## 7.6 Urgency Tags

- `TDFS | Urgency | Emergency`
- `TDFS | Urgency | Urgent`
- `TDFS | Urgency | Normal`
- `TDFS | Urgency | Future Work`

---

## 7.7 Review Tags

- `TDFS | Review | Approved`
- `TDFS | Review | Requested`
- `TDFS | Review | Reminder Sent`
- `TDFS | Review | Received`
- `TDFS | Review | Do Not Request`

---

## 7.8 Reactivation Tags

- `TDFS | Reactivation | Old Lead`
- `TDFS | Reactivation | Past Quote`
- `TDFS | Reactivation | Past Customer`
- `TDFS | Reactivation | Replied`
- `TDFS | Reactivation | Not Interested`

---

# 8. Forms

## 8.1 Core Forms

Recommended forms:

1. Quote Request Form
2. Contact Form
3. Free Front Desk Audit Form, for your own sales site
4. Callback Request Form
5. Review Approval Form, internal optional

For client systems, the main form is the Quote Request Form.

---

## 8.2 Quote Request Form Fields

Recommended fields:

- Full name
- Phone
- Email
- Service needed
- Job location/suburb
- Job description
- Urgency
- Property type
- Photo upload, if available
- Preferred callback time
- Consent checkbox, where required

---

## 8.3 Quote Request Form Logic

On submit:

- Create/update contact
- Create opportunity in Job Enquiry Pipeline
- Set stage: New Enquiry
- Apply source tag
- Set custom fields
- Send customer acknowledgement
- Send owner notification
- Start no-response follow-up if needed

---

## 8.4 Service-Specific Form Variants

Create variants for niches if needed.

### Roofing

Additional fields:

- Is there an active leak?
- Roof type, if known
- Can you upload photos?

### Plumbing

Additional fields:

- Is water currently leaking?
- Is this urgent?
- Can water be turned off?

### Electrical

Additional fields:

- Is there a safety issue?
- Residential or commercial?
- Is power currently off?

### Landscaping

Additional fields:

- Project type
- Approximate area size
- Timeline
- Photos/inspiration

### Building/Renovation

Additional fields:

- Project type
- Do you have plans?
- Desired start date
- Property owner status

---

# 9. Calendars

## 9.1 Calendar Strategy

Do not automatically book jobs unless the client approves.

For most tradies, default to:

> Callback request or quote request first, manual confirmation second.

---

## 9.2 Calendar Types

Possible calendars:

1. Callback Calendar
2. Quote Appointment Calendar
3. Site Visit Calendar
4. Audit Calendar, for your own sales funnel

---

## 9.3 Callback Calendar

Use when:

- Owner wants structured callback slots
- Business can handle scheduled callbacks
- Not every enquiry needs a site visit

Settings:

- Availability based on business rules
- Buffer times
- Owner/team notifications
- Customer confirmation
- Reminder SMS/email

---

## 9.4 Site Visit Calendar

Use carefully.

Only use when:

- Client is comfortable with direct site visit requests
- Service area is controlled
- Job type is qualified first
- Travel time is manageable

---

# 10. Core Workflows Overview

## 10.1 Workflow Categories

Core workflow categories:

1. Capture workflows
2. Response workflows
3. Qualification workflows
4. Follow-up workflows
5. Pipeline workflows
6. Notification workflows
7. Review workflows
8. Reactivation workflows
9. Campaign workflows
10. AI phone workflows
11. Stop/cleanup workflows

---

# 11. Workflow: Website Form Submitted

## Workflow Name

`TDFS - Capture - Website Form Submitted`

## Trigger

Quote Request Form submitted.

## Actions

1. Create/update contact
2. Add tag: `TDFS | Source | Website`
3. Add tag: `TDFS | Status | New Enquiry`
4. Set field: `TDFS - Lead Source = Website`
5. Create opportunity in Job Enquiry Pipeline
6. Set stage: New Enquiry
7. Send SMS acknowledgement
8. Send email acknowledgement, optional
9. Send owner notification
10. Wait for customer reply or required field completion
11. If missing key details, trigger qualification workflow
12. If no reply, trigger no-response follow-up

## Customer SMS

> Hi {{contact.first_name}}, thanks for contacting {{business_name}}. We’ve received your enquiry. What suburb is the job in, and what do you need help with?

## Internal Notification

> New website enquiry from {{contact.name}} - {{contact.phone}}. Service: {{service}}. Location: {{job_location}}. Source: Website.

---

# 12. Workflow: Missed Call Text-Back

## Workflow Name

`TDFS - Capture - Missed Call Text Back`

## Trigger

Inbound call status = missed.

## Conditions

Only send if:

- Contact has not received missed-call text within last X hours
- Number is valid mobile, where possible
- Contact is not opted out
- Business wants missed-call text-back active

Recommended cooldown:

- 4–24 hours, depending on call volume

## Actions

1. Create/update contact
2. Add tag: `TDFS | Source | Missed Call`
3. Add tag: `TDFS | Status | New Enquiry`
4. Set field: `TDFS - Lead Source = Missed Call`
5. Create opportunity if none open
6. Set stage: New Enquiry or Auto Response Sent
7. Send missed-call SMS
8. Notify owner
9. Start missed-call no-response follow-up

## Customer SMS

> Hi {{contact.first_name}}, thanks for calling {{business_name}}. We may be on-site at the moment. Reply with what you need help with and we’ll get back to you as soon as possible.

## No Name Version

> Hi, thanks for calling {{business_name}}. We may be on-site at the moment. Reply with what you need help with and we’ll get back to you as soon as possible.

## Internal Notification

> Missed call from {{contact.name}} - {{contact.phone}}. Auto-reply sent. Waiting for customer response.

---

# 13. Workflow: Customer Reply Handling

## Workflow Name

`TDFS - Respond - Customer Reply Handling`

## Trigger

Customer replied via SMS/email/WhatsApp/conversation channel.

## Actions

1. Remove tag: `TDFS | Action | Follow Up Needed`, where relevant
2. Add tag: `TDFS | Status | Details Received`, where applicable
3. Stop active no-response follow-up workflows
4. Move opportunity to Details Received or Needs Owner Review
5. Notify owner/team
6. If message contains urgent keywords, trigger urgent workflow
7. If message contains photo or attachment, set Photos Provided = Yes if possible

## Urgent Keywords

Examples:

- urgent
- emergency
- leaking
- flood
- no power
- dangerous
- smoke
- burst
- blocked
- storm

Use with caution. Keyword detection should flag for review, not make final decisions.

---

# 14. Workflow: Qualification Request

## Workflow Name

`TDFS - Qualify - Request Job Details`

## Trigger

New enquiry missing required fields.

Required fields may include:

- Service needed
- Job location
- Urgency
- Photos, where relevant

## Actions

1. Check missing fields
2. Ask one or two key questions only
3. Add action tag for missing details
4. Move opportunity to Details Requested
5. Wait for reply
6. On reply, update stage to Details Received or Needs Owner Review

## Message Examples

### Missing Location

> Thanks {{contact.first_name}}. What suburb is the job in?

### Missing Service

> What do you need help with? A short description is fine.

### Missing Photos

> If you have any photos of the job, please send them through here. That will help us understand what is needed.

### Missing Timeline

> When are you hoping to have this work done?

---

# 15. Workflow: New Enquiry No-Response Follow-Up

## Workflow Name

`TDFS - Follow Up - New Enquiry No Response`

## Trigger

New enquiry received and customer has not replied or completed details.

## Stop Conditions

Stop if:

- Customer replies
- Opportunity moves to Won, Lost, Not Suitable
- Owner manually stops follow-up
- Contact opts out

## Recommended Timing

1. 1 hour after initial message
2. Next day
3. 3 days later

## Messages

### Follow-Up 1

> Hi {{contact.first_name}}, just checking we have the right details for your enquiry with {{business_name}}. What suburb is the job in, and what do you need help with?

### Follow-Up 2

> Hi {{contact.first_name}}, just following up on your enquiry with {{business_name}}. Are you still looking for help with this job?

### Follow-Up 3

> Hi {{contact.first_name}}, we have not heard back, so we’ll leave this for now. If you still need help, just reply here and we can pick it back up.

## Final Action

- Move to Lost or Follow-Up Needed depending on client preference
- Add tag: `TDFS | Status | Lost` or `TDFS | Action | Follow Up Needed`

---

# 16. Workflow: Callback Request

## Workflow Name

`TDFS - Book - Callback Request`

## Trigger

Customer selects callback, requests callback, or form includes callback request.

## Actions

1. Set stage: Callback Required
2. Set field: Preferred Callback Time
3. Notify owner/team
4. Send customer confirmation
5. Create task for owner/admin, optional
6. If calendar used, send booking link or confirmation

## Customer Message

> Thanks {{contact.first_name}}. We’ve received your details and someone from {{business_name}} will be in touch to discuss the next step.

## Internal Notification

> Callback requested by {{contact.name}} - {{contact.phone}}. Preferred time: {{callback_time}}. Service: {{service}}. Location: {{job_location}}.

---

# 17. Workflow: Quote Sent Follow-Up

## Workflow Name

`TDFS - Follow Up - Quote Sent Sequence`

## Trigger

Opportunity moved to stage: Quote Sent

or

Field `TDFS - Quote Status = Quote Sent`

## Stop Conditions

Stop if:

- Customer replies
- Opportunity moves to Won
- Opportunity moves to Lost
- Opportunity moves to Not Suitable
- Owner applies Stop Follow Up tag

## Recommended Timing

1. 24 hours after quote sent
2. 3 days after quote sent
3. 7 days after quote sent

## Messages

### 24 Hours

> Hi {{contact.first_name}}, just checking you received the quote from {{business_name}}. Let us know if you have any questions.

### 3 Days

> Hi {{contact.first_name}}, just following up to see if you would like to go ahead or if there is anything you would like clarified.

### 7 Days

> Hi {{contact.first_name}}, we’ll leave this with you for now. If you would like to move forward with the quote, just reply here and we can help with the next step.

## Internal Notification

Optional:

> Quote follow-up sequence started for {{contact.name}} - {{contact.phone}}.

---

# 18. Workflow: Review Request

## Workflow Name

`TDFS - Reviews - Request Google Review`

## Trigger Options

Option 1:

- Opportunity moved to Won
- Review Status = Approved to Request

Option 2:

- Manual tag applied: `TDFS | Review | Approved`

Recommended:

Use manual approval or approved stage to avoid asking unhappy customers.

## Actions

1. Send review request SMS/email
2. Apply tag: `TDFS | Review | Requested`
3. Update field: Review Status = Requested
4. Wait 2–3 days
5. Send reminder if appropriate
6. Apply tag: `TDFS | Review | Reminder Sent`

## Message

> Hi {{contact.first_name}}, thanks again for choosing {{business_name}}. If you were happy with the work, would you mind leaving us a quick Google review? It really helps our local business: {{review_link}}

---

# 19. Workflow: Old Lead Reactivation

## Workflow Name

`TDFS - Reactivation - Old Lead Campaign`

## Trigger

Manual tag applied:

- `TDFS | Reactivation | Old Lead`
- `TDFS | Reactivation | Past Quote`
- `TDFS | Reactivation | Past Customer`

or campaign launched to list segment.

## Pre-Launch Requirements

Before launching:

- Clean list
- Confirm consent/compliance
- Remove bad contacts
- Remove do-not-contact contacts
- Confirm message wording
- Confirm owner/team can handle replies

## Actions

1. Send reactivation message
2. Wait 2–3 days
3. Send follow-up if no reply
4. On reply, stop sequence
5. Move to Reactivated Lead / New Enquiry stage
6. Notify owner

## Message 1

> Hi {{contact.first_name}}, it’s {{business_name}} here. Just checking whether you still need help with {{service}} or if you have already sorted it. Reply here if we can help.

## Message 2

> Hi {{contact.first_name}}, just following up once more. If you still need help with {{service}}, reply here and we can pick it back up. If not, no worries.

---

# 20. Workflow: Campaign Lead Routing

## Workflow Name

`TDFS - Campaigns - Paid Lead Routing`

## Trigger

- Facebook lead form submitted
- Google lead form submitted
- Landing page form submitted
- Campaign form submitted

## Actions

1. Create/update contact
2. Apply source tag
3. Set Lead Source field
4. Set Campaign Name, if available
5. Create opportunity
6. Set stage: New Enquiry or Campaign Lead
7. Send immediate acknowledgement
8. Notify owner/team
9. Start campaign lead follow-up
10. Track source/campaign

## Customer Message

> Hi {{contact.first_name}}, thanks for your enquiry with {{business_name}}. We’ve received your details. What suburb is the job in, and what do you need help with?

## Internal Notification

> New campaign enquiry from {{contact.name}} - {{contact.phone}}. Campaign: {{campaign_name}}. Service: {{service}}. Location: {{job_location}}.

---

# 21. Workflow: Urgent Lead Routing

## Workflow Name

`TDFS - Notify - Urgent Lead Routing`

## Trigger

Any of:

- Urgency field = Emergency
- Urgency field = Urgent
- Customer message contains urgent keyword
- Form urgent option selected
- AI phone tags urgent

## Actions

1. Add tag: `TDFS | Urgency | Urgent` or Emergency
2. Move opportunity to Needs Owner Review or Urgent Lead stage, if used
3. Send immediate owner SMS
4. Optional: send email notification
5. Optional: create urgent task
6. Optional: stop normal no-response delay and prioritise response

## Customer Message

> Thanks {{contact.first_name}}. We’ve marked this as urgent and passed the details through for review. If there is an immediate safety risk, please contact the appropriate emergency service now.

## Owner SMS

> URGENT enquiry from {{contact.name}} - {{contact.phone}}. Location: {{job_location}}. Details: {{job_description}}. Please review immediately.

---

# 22. Workflow: Stop Follow-Up

## Workflow Name

`TDFS - Control - Stop Follow Up`

## Trigger

Any of:

- Customer replies
- Contact opts out
- Opportunity moved to Won
- Opportunity moved to Lost
- Opportunity moved to Not Suitable
- Tag applied: `TDFS | Action | Stop Follow Up`

## Actions

1. Remove from active follow-up workflows
2. Remove action tags
3. Update status field if needed
4. Prevent duplicate future messages

---

# 23. Workflow: Won Job

## Workflow Name

`TDFS - Pipeline - Job Won`

## Trigger

Opportunity moved to Won.

## Actions

1. Add tag: `TDFS | Status | Won`
2. Remove active follow-up tags
3. Stop active follow-up workflows
4. Update Quote Status = Quote Accepted, if relevant
5. Optional: wait until job complete stage or manual approval for review request
6. Optional: trigger review request if approved

---

# 24. Workflow: Lost Job

## Workflow Name

`TDFS - Pipeline - Job Lost`

## Trigger

Opportunity moved to Lost.

## Actions

1. Add tag: `TDFS | Status | Lost`
2. Stop active follow-up workflows
3. Remove action tags
4. Optional: set Lost Reason field
5. Optional: add to future reactivation segment if appropriate

---

# 25. Workflow: Not Suitable

## Workflow Name

`TDFS - Pipeline - Not Suitable`

## Trigger

Opportunity moved to Not Suitable or bad-fit status set.

## Actions

1. Add tag: `TDFS | Status | Not Suitable`
2. Stop active follow-up workflows
3. Set bad-fit reason
4. Notify owner if manual review needed
5. Send polite decline only if approved

## Safe Customer Message

> Hi {{contact.first_name}}, thanks for the details. We’ll review this and let you know whether it is something we can help with.

## Decline Message, If Approved

> Hi {{contact.first_name}}, thanks for reaching out to {{business_name}}. Based on the details provided, this may not be the right fit for our services at the moment. We appreciate you contacting us and wish you all the best with the job.

---

# 26. AI Phone Assistant Technical Spec

## 26.1 When To Include

Include AI phone assistant only when sold or approved.

Best use cases:

- Missed calls
- After-hours calls
- High-volume basic enquiries
- Qualification calls
- Callback detail capture

---

## 26.2 AI Phone Goals

The AI phone assistant should:

- Greet caller professionally
- Capture name
- Capture phone number, if needed
- Capture service needed
- Capture job location
- Capture urgency
- Ask if photos can be sent
- Escalate urgent jobs
- Avoid pricing promises
- Avoid technical advice
- Summarise call
- Create/update contact
- Create opportunity
- Notify owner/team

---

## 26.3 AI Phone Guardrails

The assistant must not:

- Pretend to be the owner
- Give exact prices unless approved
- Confirm job acceptance unless approved
- Provide risky technical advice
- Diagnose complex problems
- Promise availability
- Argue with caller
- Continue if customer wants human

---

## 26.4 AI Phone Script Structure

1. Greeting
2. Name capture
3. Service need
4. Location
5. Urgency
6. Photos prompt
7. Callback preference
8. Summary
9. Handover

## Example Greeting

> Hi, thanks for calling {{business_name}}. I can help collect a few details so the team can get back to you. Can I start with your name?

## Pricing Guardrail

> I cannot confirm pricing over the phone without the team reviewing the job details properly, but I can collect the information so they can follow up.

## Urgent Escalation

> Thanks for letting me know. I’ll mark this as urgent and pass it through for review. If there is an immediate safety risk, please contact the appropriate emergency service now.

---

## 26.5 AI Phone Output Requirements

After call, system should create:

- Contact
- Opportunity
- AI call summary
- Call recording link, if available
- Service needed
- Job location
- Urgency
- Preferred callback time
- Owner notification

---

# 27. Reporting Dashboard

## 27.1 Reporting Goals

The client should see simple practical metrics.

Do not overwhelm with technical data.

---

## 27.2 Core Metrics

Track:

- New enquiries captured
- Missed calls captured
- Website enquiries
- Campaign enquiries
- Reactivated leads
- Customer replies
- Callback requests
- Quotes sent
- Quote follow-ups sent
- Won jobs
- Lost opportunities
- Not suitable enquiries
- Reviews requested
- Reviews received, if trackable

---

## 27.3 Monthly Summary Metrics

Recommended monthly report:

- New enquiries captured: X
- Missed calls recovered: X
- Follow-ups sent: X
- Quote requests/callbacks: X
- Quotes followed up: X
- Won jobs: X
- Reviews requested: X
- Reactivated leads: X

---

## 27.4 Source Metrics

Track by source:

- Website
- Missed Call
- Campaign
- Referral
- Reactivation
- AI Phone
- Manual

---

## 27.5 Recommended Client Dashboard Sections

1. Enquiry Volume
2. Lead Sources
3. Pipeline Status
4. Follow-Up Activity
5. Missed Call Activity
6. Quote Follow-Up
7. Reviews
8. Campaign Results, if included

---

# 28. Compliance And Safety Notes

## 28.1 SMS Compliance

Before SMS automation:

- Confirm consent where required
- Include opt-out where appropriate
- Do not spam old lists
- Respect STOP replies
- Avoid excessive follow-up

---

## 28.2 Email Compliance

Before email campaigns:

- Ensure lawful basis/consent where required
- Include unsubscribe where required
- Avoid misleading subject lines

---

## 28.3 AI Disclosure And Risk

If AI phone is used, avoid misleading customers.

Use honest, simple framing if needed:

> I can help collect a few details so the team can get back to you.

---

## 28.4 Sensitive Information

Do not request unnecessary sensitive information.

Avoid collecting:

- Payment details through SMS
- Personal identity documents
- Irrelevant personal information
- Sensitive health or legal information

---

# 29. QA Testing Checklist

## 29.1 Form Testing

Test:

- Form loads on desktop
- Form loads on mobile
- Required fields work
- Submission creates contact
- Custom fields populate correctly
- Opportunity is created
- Correct pipeline stage is set
- Customer receives message
- Owner receives notification
- Follow-up starts correctly

---

## 29.2 Missed Call Testing

Test:

- Missed call triggers workflow
- SMS sends once only
- Cooldown works
- Opportunity is created
- Source tag is applied
- Owner notification sends
- Reply stops follow-up

---

## 29.3 Follow-Up Testing

Test:

- Timing works
- Messages are correct
- Customer reply stops sequence
- Won stage stops sequence
- Lost stage stops sequence
- Not Suitable stops sequence
- No duplicate messages

---

## 29.4 Pipeline Testing

Test:

- New opportunity creation
- Stage changes
- Stage-triggered workflows
- Quote sent workflow
- Won/lost stop workflows
- Manual movement does not break logic

---

## 29.5 Notification Testing

Test:

- Owner SMS notification
- Owner email notification
- Urgent notification
- Callback notification
- Quote follow-up notification
- Correct recipient
- Useful message content

---

## 29.6 Review Testing

Test:

- Review trigger only starts when approved
- Review link works
- Reminder timing works
- Do Not Request prevents message

---

## 29.7 Reactivation Testing

Test:

- Correct segment receives message
- Opt-outs excluded
- Reply stops sequence
- Owner notification on reply
- Reactivated lead enters pipeline

---

## 29.8 Campaign Testing

Test:

- Lead form connection
- Landing page form connection
- Source tags
- Campaign name capture
- Customer acknowledgement
- Owner notification
- Pipeline entry

---

## 29.9 AI Phone Testing

Test:

- Greeting
- Name capture
- Service capture
- Location capture
- Urgency capture
- Pricing guardrail
- Human handover
- Owner notification
- Opportunity creation
- Call summary

---

# 30. Launch Checklist

Before launch, confirm:

- Client onboarding complete
- Access received
- Business settings complete
- Pipeline built
- Custom fields created
- Tags created
- Forms built
- Forms embedded, if needed
- Workflows built
- Workflows tested
- Messages approved
- Notifications tested
- Calendar tested, if used
- Review link tested
- Reactivation list cleaned, if used
- Campaign forms connected, if used
- AI phone tested, if used
- Client understands notifications
- Internal team has QA sign-off

---

# 31. Launch Process

## Step 1: Final Internal Test

Submit a test enquiry and confirm full flow.

## Step 2: Client Test

Have client submit or receive test enquiry.

## Step 3: Activate Live Workflows

Turn on workflows in correct order.

## Step 4: Connect Live Channels

Connect forms, numbers, campaigns, and calendars.

## Step 5: Monitor First Live Enquiries

Watch first leads closely.

## Step 6: Fix Issues Quickly

Adjust messages, routing, or stages as needed.

---

# 32. Monthly Maintenance Checklist

Each month, review:

- Workflow health
- Failed messages
- Missed call volume
- New enquiry volume
- Reply rates
- Pipeline stuck stages
- Quote follow-up activity
- Won/lost status updates
- Tags/fields consistency
- Client feedback
- Message improvements
- Campaign performance, if included
- AI phone transcripts, if included
- Review requests
- Reactivation replies

---

# 33. Troubleshooting Guide

## Issue: Customer Did Not Receive SMS

Check:

- Phone number format
- Opt-out status
- SMS provider status
- Workflow trigger
- Sending number
- Compliance filters
- Message errors

---

## Issue: Owner Did Not Get Notification

Check:

- Recipient number/email
- Workflow action
- Notification conditions
- User permissions
- Spam folder
- SMS/email logs

---

## Issue: Duplicate Messages Sent

Check:

- Multiple workflow triggers
- Missing cooldown
- Duplicate contact records
- Form submitted multiple times
- Re-entry settings

---

## Issue: Follow-Up Did Not Stop

Check:

- Stop conditions
- Customer reply trigger
- Opportunity stage trigger
- Stop follow-up tag
- Workflow re-entry

---

## Issue: Opportunity Not Created

Check:

- Workflow action
- Pipeline ID
- Required fields
- Trigger conditions
- Contact creation

---

## Issue: Wrong Pipeline Stage

Check:

- Stage action
- Competing workflows
- Manual movement
- Trigger order

---

## Issue: Form Field Not Mapping

Check:

- Custom field connection
- Form field type
- Field naming
- Required fields
- Submission logs

---

# 34. Internal Build SOP Summary

For every client, follow this order:

1. Import or apply correct snapshot
2. Configure business profile
3. Set timezone and contact settings
4. Create/confirm users
5. Confirm phone/SMS/email setup
6. Customise services and areas
7. Customise custom fields if needed
8. Customise tags if needed
9. Build pipeline
10. Build forms
11. Build workflows
12. Write/customise messages
13. Configure notifications
14. Configure calendar if needed
15. Configure review link if needed
16. Configure reactivation if included
17. Configure campaign routing if included
18. Configure AI phone if included
19. Test internally
20. Review with client
21. Launch
22. Monitor
23. Monthly optimise

---

# 35. Package-Specific Build Requirements

---

## 35.1 Front Desk Starter Build

Must include:

- Basic pipeline
- Quote/contact form
- Missed-call text-back
- Instant enquiry response
- Basic no-response follow-up
- Owner notifications
- Basic testing
- Launch

Do not include by default:

- Advanced qualification
- Quote follow-up
- Campaigns
- Reactivation
- AI phone
- Review automation

---

## 35.2 Booked Jobs System Build

Must include:

- Full pipeline
- Advanced quote request form
- Missed-call text-back
- Instant enquiry response
- Qualification flow
- Callback/booking flow
- No-response follow-up
- Quote follow-up
- Owner notifications
- Basic source tracking
- Monthly report setup
- Testing
- Launch

---

## 35.3 Managed Growth System Build

Must include everything in Booked Jobs System plus sold modules:

- Campaign lead routing
- Landing page/form connection
- Old lead reactivation
- Review automation
- AI phone assistant, if included
- Advanced reporting
- Monthly growth review structure

---

# 36. Master Technical Summary

The Tradie Front Desk System technical build must support one core journey:

# **Capture → Respond → Qualify → Book → Follow Up**

Every field, tag, workflow, pipeline stage, form, and notification should support that journey.

The system should be:

- Simple enough to manage
- Flexible enough to customise
- Safe enough to avoid risky automation
- Clear enough for clients to understand
- Reliable enough to run every day
- Structured enough to scale across many clients

The client-facing promise is:

# **More Booked Jobs. Less Chasing. No Tech Headaches.**

The technical build must protect that promise by making the backend reliable, tested, and easy to operate.

