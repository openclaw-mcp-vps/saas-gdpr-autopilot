export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR on Autopilot
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate GDPR Compliance<br className="hidden sm:block" /> for Your SaaS
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your app via API and get auto-generated privacy policies, cookie banners, data deletion workflows, and audit trails — in minutes, not months.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            ["Privacy Policy", "Auto-generated"],
            ["Cookie Banner", "One-click deploy"],
            ["Data Deletion", "Automated workflows"],
            ["Audit Trail", "Full compliance log"],
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm">{title}</div>
              <div className="text-[#6e7681] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#6e7681] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Auto-generated privacy policy",
              "Cookie consent banner",
              "Data deletion request workflows",
              "Full audit trail & compliance log",
              "API integration for your SaaS",
              "Email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Do I need legal expertise to use this?",
              "No. GDPR Autopilot generates compliant documents and workflows automatically. You just connect your app and configure your settings.",
            ],
            [
              "How does the API integration work?",
              "You get an API key after signup. Add a few lines of code to your app to send user data events, and we handle the rest — deletion requests, consent logs, and policy updates.",
            ],
            [
              "Is this a substitute for a lawyer?",
              "GDPR Autopilot covers the technical and operational side of compliance. For complex legal questions, we recommend consulting a lawyer, but most SaaS founders find our automation covers 95% of their needs.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Autopilot. Not legal advice.
      </footer>
    </main>
  );
}
