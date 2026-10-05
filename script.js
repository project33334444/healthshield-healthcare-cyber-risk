let totalEvents = 120;
let lowRisk = 92;
let highRisk = 20;
let criticalRisk = 8;


function getTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

}


function updateDashboard() {

    document.getElementById("totalEvents").textContent =
        totalEvents;

    document.getElementById("lowRisk").textContent =
        lowRisk;

    document.getElementById("highRisk").textContent =
        highRisk;

    document.getElementById("criticalRisk").textContent =
        criticalRisk;

}


function addAudit(message) {

    const log = document.getElementById("auditLog");

    const item = document.createElement("div");

    item.className = "audit-item";

    item.innerHTML = `
        <span class="audit-time">
            ${getTime()}
        </span>

        <span>
            ${message}
        </span>
    `;

    log.prepend(item);

}


function addActivity(
    user,
    event,
    risk,
    status
) {

    const table =
        document.getElementById("activityTable");

    const row =
        document.createElement("tr");


    let badgeClass = "low-bg";


    if (risk === "HIGH") {

        badgeClass = "high-bg";

    }


    if (risk === "CRITICAL") {

        badgeClass = "critical-bg";

    }


    row.innerHTML = `

        <td>${getTime()}</td>

        <td>${user}</td>

        <td>${event}</td>

        <td>

            <span class="badge ${badgeClass}">

                ${risk}

            </span>

        </td>

        <td>${status}</td>

    `;


    table.prepend(row);

}


function updateRiskAnalysis(
    time,
    login,
    volume,
    behavior,
    total
) {

    document.getElementById("factorTime")
        .textContent = "+" + time;

    document.getElementById("factorLogin")
        .textContent = "+" + login;

    document.getElementById("factorVolume")
        .textContent = "+" + volume;

    document.getElementById("factorBehavior")
        .textContent = "+" + behavior;


    document.getElementById("barTime")
        .style.width = time + "%";

    document.getElementById("barLogin")
        .style.width = login + "%";

    document.getElementById("barVolume")
        .style.width = volume + "%";

    document.getElementById("barBehavior")
        .style.width = behavior + "%";


    updateRiskCircle(total);

}


function updateRiskCircle(score) {

    const circle =
        document.getElementById("riskCircle");

    const scoreText =
        document.getElementById("riskScore");

    const level =
        document.getElementById("riskLevel");


    scoreText.textContent = score;


    const degrees =
        (score / 100) * 360;


    let color = "#22c55e";


    if (score >= 60) {

        color = "#f97316";

    }


    if (score >= 80) {

        color = "#ef4444";

    }


    circle.style.background = `
        conic-gradient(
            ${color} ${degrees}deg,
            #e2e8f0 ${degrees}deg
        )
    `;


    level.className =
        "risk-level";


    if (score === 0) {

        level.classList.add("safe");

        level.textContent =
            "NO THREAT";

    }

    else if (score < 60) {

        level.classList.add("safe");

        level.textContent =
            "LOW RISK";

    }

    else if (score < 80) {

        level.classList.add("warning");

        level.textContent =
            "HIGH RISK";

    }

    else {

        level.classList.add("danger");

        level.textContent =
            "CRITICAL";

    }

}


function simulateNormal() {

    totalEvents++;

    lowRisk++;


    addActivity(
        "Dr. Arun",
        "Normal Login",
        "LOW",
        "Allowed"
    );


    addAudit(
        "Normal login from Dr. Arun"
    );


    updateRiskAnalysis(
        0,
        0,
        5,
        5,
        10
    );


    showSafeAlert();

    updateDashboard();

}


function simulateSuspicious() {

    totalEvents++;

    highRisk++;


    addActivity(
        "Nurse Maya",
        "Unusual Login",
        "HIGH",
        "Under Review"
    );


    addAudit(
        "Suspicious login detected"
    );


    addAudit(
        "Risk assessment initiated"
    );


    updateRiskAnalysis(
        25,
        20,
        15,
        15,
        75
    );


    showSecurityAlert(

        "HIGH RISK ACTIVITY",

        "Possible compromised healthcare account.",

        [
            "Login occurred at an unusual time",
            "Multiple failed login attempts detected",
            "Activity differs from normal behavior"
        ],

        75

    );


    updateDashboard();

}


function simulateCritical() {

    totalEvents++;

    criticalRisk++;


    addActivity(
        "Dr. Arun",
        "Bulk Patient Access",
        "CRITICAL",
        "Human Review Required"
    );


    addAudit(
        "CRITICAL anomaly detected"
    );


    addAudit(
        "Risk score calculated: 94/100"
    );


    addAudit(
        "Human review required"
    );


    updateRiskAnalysis(
        20,
        20,
        35,
        19,
        94
    );


    showSecurityAlert(

        "CRITICAL SECURITY ALERT",

        "Possible compromised healthcare account.",

        [
            "Large number of patient records accessed",
            "Access pattern is abnormal",
            "Potential unauthorized activity"
        ],

        94

    );


    updateDashboard();

}


function showSafeAlert() {

    const panel =
        document.getElementById("alertPanel");


    panel.style.borderTopColor =
        "#22c55e";


    document.getElementById("alertBadge")
        .className =
        "alert-badge safe";


    document.getElementById("alertBadge")
        .textContent =
        "MONITORING";


    document.getElementById("alertStatus")
        .textContent =
        "No immediate security threat detected.";


    document.getElementById("alertContent")
        .innerHTML = `

        <div class="empty-alert">

            <div class="empty-icon">
                🟢
            </div>

            <h3>
                Normal Activity
            </h3>

            <p>
                The simulated healthcare
                activity appears normal.
            </p>

        </div>
    `;

}


function showSecurityAlert(
    title,
    message,
    reasons,
    score
) {

    const panel =
        document.getElementById("alertPanel");


    panel.style.borderTopColor =
        "#ef4444";


    document.getElementById("alertBadge")
        .className =
        "alert-badge danger";


    document.getElementById("alertBadge")
        .textContent =
        "ACTION REQUIRED";


    document.getElementById("alertStatus")
        .textContent =
        "Human review required before consequential action.";


    let reasonsHTML = "";


    reasons.forEach(
        reason => {

            reasonsHTML += `
                <li>${reason}</li>
            `;

        }
    );


    document.getElementById("alertContent")
        .innerHTML = `

        <div class="alert-box">

            <h3 class="alert-title">
                🚨 ${title}
            </h3>

            <p>
                ${message}
            </p>


            <div class="alert-score">

                Risk Score:
                ${score}/100

            </div>


            <strong>
                Risk Factors
            </strong>


            <ul>

                ${reasonsHTML}

            </ul>


            <div class="approval-buttons">

                <button
                    class="approve"
                    onclick="approveAction()">

                    ✓ Approve Action

                </button>


                <button
                    class="reject"
                    onclick="rejectAction()">

                    ✕ Reject

                </button>


                <button
                    class="investigate"
                    onclick="investigateAction()">

                    🔎 Investigate

                </button>

            </div>

        </div>

    `;

}


function approveAction() {

    addAudit(
        "Human reviewer APPROVED security action"
    );


    document.getElementById("alertContent")
        .innerHTML = `

        <div class="empty-alert">

            <div class="empty-icon">
                ✅
            </div>

            <h3>
                Action Approved
            </h3>

            <p>
                Human reviewer approved the
                simulated security response.
            </p>

            <p>
                The event has been recorded
                in the security audit log.
            </p>

        </div>

    `;


    document.getElementById("alertBadge")
        .textContent =
        "APPROVED";


    document.getElementById("alertBadge")
        .className =
        "alert-badge safe";


    document.getElementById("alertStatus")
        .textContent =
        "Human-approved response recorded.";

}


function rejectAction() {

    addAudit(
        "Human reviewer REJECTED security action"
    );


    document.getElementById("alertContent")
        .innerHTML = `

        <div class="empty-alert">

            <div class="empty-icon">
                🟡
            </div>

            <h3>
                Action Rejected
            </h3>

            <p>
                Human reviewer rejected the
                simulated security response.
            </p>

            <p>
                The event remains under investigation.
            </p>

        </div>

    `;


    document.getElementById("alertBadge")
        .textContent =
        "UNDER REVIEW";


    document.getElementById("alertStatus")
        .textContent =
        "Security team must investigate further.";

}


function investigateAction() {

    addAudit(
        "Security analyst started investigation"
    );


    document.getElementById("alertContent")
        .innerHTML = `

        <div class="empty-alert">

            <div class="empty-icon">
                🔎
            </div>

            <h3>
                Investigation Started
            </h3>

            <p>
                The security analyst is reviewing
                the simulated activity.
            </p>

            <p>
                No automatic disruptive action
                has been performed.
            </p>

        </div>

    `;


    document.getElementById("alertBadge")
        .textContent =
        "INVESTIGATING";


    document.getElementById("alertBadge")
        .className =
        "alert-badge danger";

}


updateDashboard();

updateRiskCircle(0);