export default function Home() {
  return (
    <main style={{ fontFamily: "Georgia, serif", maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px" }}>MIA</h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "8px" }}>Maternal Integrity Assistant</p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", maxWidth: "600px", margin: "0 auto 32px" }}>
          MIA turns your voice into a state-ready Medicaid claim — so the visits you show up for never go unpaid.
        </p>
        <a href="#waitlist" style={{ background: "#1a1a1a", color: "white", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
          Join the Waitlist
        </a>
      </div>

      <section id="waitlist" style={{ background: "#f9f5f0", padding: "48px", borderRadius: "16px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Be the first to try MIA.</h2>
        <p style={{ color: "#666", marginBottom: "24px" }}>Free during early access. Built for Oklahoma doulas.</p>
        <form style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <input type="email" placeholder="Your email" style={{ padding: "12px 20px", borderRadius: "999px", border: "1px solid #ddd", fontSize: "1rem", width: "260px" }} />
          <button type="submit" style={{ background: "#1a1a1a", color: "white", padding: "12px 28px", borderRadius: "999px", border: "none", fontSize: "1rem", cursor: "pointer" }}>
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}
