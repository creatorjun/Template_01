// src/presentation/components/About.jsx
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'
import { ABOUT } from '../../config'

export default function About() {
  const { ref, inView } = useInView()
  const { profile } = usePortfolio()

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--color-primary)' }}>About</p>
          <h2
            className="mb-12 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: 'var(--color-text)' }}
          >
            {ABOUT.headline}<br />
            <span style={{ color: 'var(--color-text-muted)' }}>{ABOUT.subheadline}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {profile.stats.map(s => (
                <div
                  key={s.label}
                  className="p-5 rounded-lg border"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <p
                    className="text-2xl font-bold mb-0.5"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
