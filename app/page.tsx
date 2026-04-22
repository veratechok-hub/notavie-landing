export default function Home() {
  return (
    <main style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", background: "#fff" }}>

      {/* HERO */}
      <section style={{ background: "#fdf8f4", padding: "80px 24px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#ede8e3", borderRadius: "999px", padding: "6px 18px", fontSize: "0.85rem", marginBottom: "24px" }}>
          ✦ Now in early access for Oklahoma doulas
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "bold", maxWidth: "780px", margin: "0 auto 24px", lineHeight: 1.1 }}>
          MIA turns your voice into a{" "}
          <span style={{ color: "#8b5e3c" }}>state-ready Medicaid claim</span>{" "}
          — so the visits you show up for never go unpaid.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "580px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          PDI (Perinatal Documentation Integrity) — the first compliance framework built specifically for Medicaid-reimbursed community birth workers.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#waitlist" style={{ background: "#1a1a1a", color: "white", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Join the waitlist →
          </a>
          <a href="#how" style={{ border: "1px solid #ccc", color: "#1a1a1a", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            See how it works
          </a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "12px" }}>Less charting. More care.</h2>
        <p style={{ color: "#666", marginBottom: "48px", fontSize: "1.05rem" }}>MIA gives you back the hours you spend on documentation while keeping every note compliant and reimbursable.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {[
            { title: "Just talk. MIA listens.", body: "Document visits in your own words. MIA turns natural conversation into structured, billable notes." },
            { title: "Audit-proof by design", body: "Every note maps to OHCA Medicaid documentation requirements so you bill with confidence." },
            { title: "Hours back each week", body: "Cut charting time dramatically — spend more time with families, not paperwork." },
            { title: "Policy-aligned", body: "Built around Oklahoma doula scope, units, and visit categories — not a generic medical scribe." },
            { title: "Built with doulas", body: "Designed alongside working Oklahoma doulas, for the way you actually serve clients." },
            { title: "Always improving", body: "MIA learns the language of birth work and updates as policy and best practices evolve." },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: "#fdf8f4", borderRadius: "20px", padding: "28px", border: "1px solid #ede8e3" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "10px" }}>{title}</h3>
              <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: "#fdf8f4", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "12px" }}>How MIA works</h2>
          <p style={{ color: "#666", textAlign: "center", marginBottom: "48px" }}>Three steps from conversation to compliant claim.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { step: "01", title: "Speak naturally after a visit", body: "Open MIA, hit record, and walk through the visit the way you'd tell a colleague. No forms, no checkboxes." },
              { step: "02", title: "MIA structures the note", body: "Voice AI organizes your conversation into the categories Medicaid requires — visit type, duration, education topics, and more." },
              { step: "03", title: "Review, sign, submit", body: "Approve the draft in seconds. Export an audit-ready record that maps directly to OHCA billing codes." },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ background: "#fff", borderRadius: "20px", padding: "32px", border: "1px solid #ede8e3" }}>
                <span style={{ fontSize: "2.5rem", color: "#d4b8a0", fontWeight: "bold" }}>{step}</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", margin: "16px 0 10px" }}>{title}</h3>
                <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fdf8f4", borderRadius: "24px", padding: "60px 48px", textAlign: "center" }}>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic", lineHeight: 1.6, marginBottom: "24px" }}>
            "I became a doula to be with families — not to type up notes at midnight. MIA gives me my evenings back."
          </p>
          <p style={{ color: "#888" }}>— Early access doula, Oklahoma City</p>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ background: "#fdf8f4", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", lineHeight: 1.2 }}>Be the first to try MIA.</h2>
            <p style={{ color: "#666", marginBottom: "32px", lineHeight: 1.7 }}>
              MIA is rolling out access to Oklahoma doulas, healthcare partners, and affiliated organizations. Join the waitlist to get early access and shape the product.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Free during early access", "Built specifically for OHCA Medicaid documentation", "Onboarding support included"].map(i => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", color: "#444" }}>
                  <span style={{ background: "#1a1a1a", color: "white", borderRadius: "999px", width: "22px", height: "22px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", flexShrink: 0 }}>✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", border: "1px solid #ede8e3" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "24px" }}>Join the waitlist</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input type="text" placeholder="Full name" style={{ padding: "14px 18px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "1rem", width: "100%", boxSizing: "border-box" as const }} />
              <input type="email" placeholder="Email address" style={{ padding: "14px 18px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "1rem", width: "100%", boxSizing: "border-box" as const }} />
              <input type="text" placeholder="Organization (optional)" style={{ padding: "14px 18px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "1rem", width: "100%", boxSizing: "border-box" as const }} />
              <button type="submit" style={{ background: "#1a1a1a", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontSize: "1rem", cursor: "pointer", fontFamily: "Georgia, serif" }}>
                Request early access →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "32px 24px", color: "#aaa", fontSize: "0.85rem" }}>
        © 2026 MIA — Maternal Integrity Assistant. Powered by PDI.
      </footer>
    </main>
  );
}
