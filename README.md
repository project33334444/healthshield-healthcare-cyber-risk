# HealthShield — Healthcare Cyber Risk Monitoring Platform

## Overview

HealthShield is a controlled healthcare cybersecurity prototype designed to detect abnormal user activity, assess cybersecurity risk, explain why an event was flagged, and support human-reviewed security responses.

The prototype uses simulated healthcare activity and synthetic data. It is designed for demonstration and educational purposes and does not connect to or attack real healthcare systems.

---

## Hackathon Track

**Identity + Human Security**

### Challenge

Healthcare organizations depend on many users accessing sensitive systems. Compromised credentials or abnormal user behavior can create cybersecurity and privacy risks.

HealthShield demonstrates a lightweight approach for identifying suspicious healthcare-user activity and presenting the risk to a human security reviewer.

---

## Problem Statement

Healthcare systems contain sensitive information and are accessed by doctors, nurses, administrators, and other authorized users.

An attacker who obtains legitimate credentials may attempt to access healthcare systems in an unusual way, such as:

* Logging in at unusual times
* Repeatedly attempting to log in
* Accessing an unusually large amount of information
* Performing behavior that differs from normal activity

Traditional login monitoring may not provide enough context for a security analyst to quickly understand the risk.

HealthShield addresses this problem by combining activity monitoring, explainable risk scoring, security alerts, and human review.

---

## Proposed Solution

HealthShield monitors simulated healthcare security events and assigns a risk score based on several indicators.

The prototype follows this workflow:

```text
Healthcare Activity
        ↓
Event Detection
        ↓
Risk Analysis
        ↓
Risk Score
        ↓
Security Alert
        ↓
Human Review
        ↓
Approve / Reject / Investigate
        ↓
Security Audit Log
```

The system does not automatically perform consequential security actions. A human reviewer remains responsible for the final decision.

---

## Key Features

### 1. Healthcare Security Dashboard

Provides an overview of simulated security events.

Displays:

* Total events
* Low-risk events
* High-risk events
* Critical events

### 2. Security Event Simulator

The prototype includes controlled simulations for:

* Normal Login
* Suspicious Login
* Bulk Patient Access

### 3. Explainable Risk Scoring

The system displays factors contributing to the risk score, including:

* Unusual login time
* Failed login attempts
* Access volume
* Abnormal behavior

### 4. Security Alerts

Suspicious activity generates a detailed security alert containing:

* Threat description
* Risk score
* Risk factors
* Recommended human response

### 5. Human Review

Security personnel can:

* Approve the simulated response
* Reject the response
* Start an investigation

### 6. Security Audit Log

Important system events and human decisions are recorded in an audit-style log.

---

## Risk Model

The prototype uses a simple explainable scoring model rather than a complex machine-learning model.

Example:

```text
Unusual login time       → risk contribution
Failed login attempts    → risk contribution
Access volume            → risk contribution
Abnormal behavior        → risk contribution
                           ↓
                      Risk Score
```

Risk levels are represented as:

```text
0–59    Lower Risk
60–79   High Risk
80–100  Critical Risk
```

The scoring system is intentionally simple so that security decisions can be understood by a human reviewer.

---

## Technology Stack

* HTML
* CSS
* JavaScript
* GitHub

The prototype runs directly in a web browser and does not require a backend server.

---

## System Architecture

```text
┌───────────────────────────┐
│   Simulated Healthcare    │
│        Activity           │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│     Event Detection       │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Risk Analysis        │
│                           │
│ Time | Login | Volume     │
│ Behavior                  │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       Risk Score          │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Security Alert       │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       Human Review        │
└───────┬────────┬──────────┘
        │        │
        ▼        ▼
     Approve   Reject
        │
        ▼
┌───────────────────────────┐
│      Audit Log            │
└───────────────────────────┘
```

---

## Installation

No external dependencies are required.

### Option 1 — Run locally

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

### Project Structure

```text
healthshield-healthcare-cyber-risk/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

---

## Demo Instructions

Open `index.html`.

### Demo 1 — Normal Activity

Click:

**Normal Login**

Expected result:

* Low-risk activity
* Normal activity message
* Audit log entry

### Demo 2 — Suspicious Activity

Click:

**Suspicious Login**

Expected result:

* High-risk alert
* Risk score of approximately 75/100
* Explainable risk factors
* Human review options

### Demo 3 — Critical Activity

Click:

**Bulk Patient Access**

Expected result:

* Critical security alert
* Risk score of approximately 94/100
* Multiple risk factors
* Human review options

Then demonstrate:

**Investigate**

The system records that a security investigation has started without automatically performing a disruptive action.

---

## Testing

The prototype was manually tested using simulated healthcare events.

| Test Case           | Expected Result                  | Status |
| ------------------- | -------------------------------- | ------ |
| Normal Login        | Low risk                         | PASS   |
| Suspicious Login    | High risk alert                  | PASS   |
| Bulk Patient Access | Critical alert                   | PASS   |
| Risk analysis       | Risk factors displayed           | PASS   |
| Approve Action      | Human-approved response recorded | PASS   |
| Reject Action       | Event remains under review       | PASS   |
| Investigate         | Investigation started            | PASS   |
| Audit Log           | Security action recorded         | PASS   |

---

## Security and Privacy

HealthShield is demonstrated using a controlled simulation environment.

The prototype does not use:

* Real patient records
* Real hospital credentials
* Real healthcare infrastructure
* Real medical devices
* Unauthorized systems

All healthcare activity shown in the prototype is simulated or synthetic.

---

## Patient Safety Considerations

HealthShield is designed with human oversight in mind.

The prototype does not automatically perform high-impact security actions. Instead, suspicious activity is presented to a human reviewer who can choose to approve, reject, or investigate the event.

This approach helps reduce the risk of an automated system incorrectly disrupting legitimate healthcare activity.

---

## Limitations

This is a hackathon prototype and is not a production healthcare security platform.

Current limitations include:

* Simulated security events
* Browser-based prototype
* Rule-based risk scoring
* No real hospital integration
* No real-time network monitoring
* No production database
* No clinical system integration

---

## Future Scope

Future versions could include:

* Machine-learning-based anomaly detection
* Real-time security event ingestion
* Integration with Security Information and Event Management systems
* Role-based access control
* More advanced behavioral baselines
* Secure backend infrastructure
* Automated notification workflows
* Additional healthcare cybersecurity scenarios

Any future automated response should continue to include appropriate human oversight for high-impact actions.

---

## Team

**Project:** HealthShield

**Hackathon:** ASTRA 2026 — Cyber in Healthcare Hackathon

**Track:** Identity + Human Security

---

## Disclaimer

HealthShield is a cybersecurity research and hackathon prototype intended for controlled demonstration and educational purposes.

It must not be used to access, disrupt, test, or attack systems without explicit authorization.
