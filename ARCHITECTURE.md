# HealthShield Architecture

## 1. System Overview

HealthShield is a lightweight browser-based healthcare cybersecurity prototype.

It demonstrates how simulated healthcare security events can be detected, analyzed, scored, presented to a human reviewer, and recorded in an audit log.

```text
┌──────────────────────────────┐
│  Simulated Healthcare Events  │
│                              │
│  • Normal Login              │
│  • Suspicious Login          │
│  • Bulk Patient Access       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Event Detection        │
│                              │
│ Identify the type of event   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Risk Analysis         │
│                              │
│ • Login timing               │
│ • Failed attempts            │
│ • Access volume              │
│ • Abnormal behavior          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Risk Scoring          │
│                              │
│       0 ────────── 100       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Security Alert         │
│                              │
│ Explain the detected risk    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Human Review          │
│                              │
│ Approve │ Reject │ Investigate│
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         Audit Log            │
│                              │
│ Record system and reviewer   │
│ actions                      │
└──────────────────────────────┘
```

---

## 2. Frontend Components

### `index.html`

Provides the structure of the dashboard.

Major interface sections include:

* Security statistics
* Event simulator
* Security alerts
* Risk score
* Risk analysis
* Recent activity
* Audit log

### `style.css`

Provides the visual design and responsive layout.

### `script.js`

Provides the simulation and security workflow logic.

It handles:

* Event generation
* Risk scoring
* Alert creation
* Human-review actions
* Activity updates
* Audit-log updates

---

## 3. Risk Analysis

The prototype uses an explainable rule-based risk model.

The current simulated risk factors are:

```text
Unusual Login Time
        +
Failed Login Attempts
        +
Access Volume
        +
Abnormal Behavior
        ↓
    Risk Score
```

The purpose of the model is not to claim production-grade machine learning accuracy.

Instead, it demonstrates how a security analyst can understand why an event was flagged.

---

## 4. Human-in-the-Loop Workflow

High-risk events are presented to a human reviewer.

The reviewer can choose:

### Approve

Records that the simulated security response was approved.

### Reject

Records that the response was rejected and the event remains under review.

### Investigate

Starts a simulated investigation without automatically performing a disruptive action.

This design keeps consequential decisions under human control.

---

## 5. Data Flow

```text
User Activity
     ↓
Simulated Event
     ↓
Event Classification
     ↓
Risk Factors
     ↓
Risk Score
     ↓
Alert
     ↓
Human Decision
     ↓
Audit Record
```

---

## 6. Security and Privacy Design

The prototype operates entirely as a controlled demonstration.

It does not require:

* Real patient information
* Real hospital credentials
* Real hospital infrastructure
* Real medical devices
* Unauthorized network access

All demonstrated healthcare activity is simulated.

---

## 7. Technology Stack

| Component          | Technology          |
| ------------------ | ------------------- |
| Interface          | HTML                |
| Styling            | CSS                 |
| Application Logic  | JavaScript          |
| Hosting/Repository | GitHub              |
| Data               | Synthetic/Simulated |
| Backend            | None required       |

---

## 8. Current Prototype Limitations

The current implementation is intentionally lightweight.

It does not provide:

* Production authentication
* Real-time hospital network monitoring
* Production database storage
* Real SIEM integration
* Machine-learning anomaly detection
* Real healthcare-system integration

These capabilities are potential future extensions.

---

## 9. Future Architecture

A future production-oriented architecture could include:

```text
Healthcare Systems
       ↓
Secure Event Collection
       ↓
Security Event Pipeline
       ↓
Anomaly Detection Engine
       ↓
Risk Scoring Engine
       ↓
Alert & Explanation Layer
       ↓
Human Security Analyst
       ↓
Approved Response
       ↓
Secure Audit System
```

Any future automated response system should continue to use appropriate human oversight for high-impact healthcare security decisions.
