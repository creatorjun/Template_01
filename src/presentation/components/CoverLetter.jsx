// src/presentation/components/CoverLetter.jsx
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'

export default function CoverLetter() {
  const { ref, inView } = useInView()
  const { coverLetter, profile } = usePortfolio()

  return (
    <section
      id="cover-letter"
      className="py-24 px-6 md:px-12 border-b"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--color-primary)' }}>
            Cover Letter
          </p>
          <h2
            className="mb-2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: 'var(--color-text)' }}
          >
            자기소개서
          </h2>
          <p className="text-xs mb-12 font-mono" style={{ color: 'var(--color-text-muted)' }}>
            {profile.nameKo} · {profile.title}
          </p>

          <div className="space-y-3">
            {coverLetter.sections.map((section, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border transition-colors"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: 'var(--color-primary-hl)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
