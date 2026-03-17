import { useState, useId } from 'react'

interface AmountOption {
  value: number
  label: string
  covers: string[]
}

const options: AmountOption[] = [
  {
    value: 35,
    label: 'Essential Care',
    covers: [
      'Daily meals & nutrition',
      'Clothing & basic needs',
      'Safe shelter & hygiene',
    ],
  },
  {
    value: 45,
    label: 'Education Focus',
    covers: [
      'School fees & uniforms',
      'Learning materials',
      'Tutoring & mentorship',
    ],
  },
  {
    value: 65,
    label: 'Full Sponsorship',
    covers: [
      'Essential care included',
      'School fees & supplies',
      'Medical & psychosocial care',
    ],
  },
]

export function AmountPicker() {
  const [selected, setSelected] = useState<number>(65)
  const [custom, setCustom] = useState<string>('')
  const [customFocused, setCustomFocused] = useState(false)
  const id = useId()

  const isCustomActive =
    customFocused || (custom !== '' && !options.find((o) => o.value === selected))
  const displayAmount = custom && isCustomActive ? Number(custom) || 0 : selected

  function selectPreset(val: number) {
    setSelected(val)
    setCustom('')
    setCustomFocused(false)
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value.replace(/[^0-9]/g, '')
    setCustom(v)
    if (v) setSelected(Number(v))
  }

  return (
    <section
      aria-labelledby={`${id}-heading`}
      style={{
        backgroundColor: '#F8F3EB',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: '#6B5B45',
            marginBottom: '12px',
          }}>
            Monthly commitment
          </p>
          <h2
            id={`${id}-heading`}
            style={{
              fontFamily: 'var(--font-heading, serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#1C1208',
              margin: '0 0 24px',
            }}
          >
            Choose your promise.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="280" height="2" viewBox="0 0 280 2" aria-hidden="true">
              <line x1="0" y1="1" x2="280" y2="1" stroke="#D4A84B" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* 3-tier horizontal cards */}
        <div
          role="radiogroup"
          aria-label="Select a monthly sponsorship amount"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '2px',
            marginBottom: '2px',
          }}
        >
          {options.map((opt) => {
            const active = selected === opt.value && !isCustomActive
            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={active}
                onClick={() => selectPreset(opt.value)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '2.25rem 2rem',
                  background: active ? 'var(--color-teal)' : '#F8F3EB',
                  border: `1px solid ${active ? 'var(--color-teal)' : 'rgba(196,149,42,0.25)'}`,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'background 200ms ease, border-color 200ms ease',
                  textAlign: 'left',
                  minHeight: '220px',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.borderColor = '#C4952A'
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,149,42,0.25)'
                }}
              >
                {/* Price */}
                <span style={{
                  fontFamily: 'var(--font-heading, serif)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: active ? '#FFFFFF' : '#C4952A',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}>
                  ${opt.value}
                </span>

                {/* Label */}
                <span style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  color: active ? 'rgba(255,255,255,0.85)' : '#1C1208',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}>
                  {opt.label}
                </span>

                {/* Gold rule */}
                <svg width="24" height="1" viewBox="0 0 24 1" aria-hidden="true" style={{ marginBottom: '1rem', flexShrink: 0 }}>
                  <line x1="0" y1="0.5" x2="24" y2="0.5" stroke={active ? 'rgba(196,149,42,0.5)' : '#C4952A'} strokeWidth="1.5"/>
                </svg>

                {/* Cover bullets */}
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {opt.covers.map((item) => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-body, sans-serif)',
                      fontSize: '0.8125rem',
                      color: active ? 'rgba(255,255,255,0.65)' : '#6B5B45',
                      lineHeight: 1.55,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}>
                      <span style={{ color: active ? 'rgba(196,149,42,0.7)' : '#C4952A', flexShrink: 0, marginTop: '1px' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Per month footnote */}
                <span style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.6875rem',
                  color: active ? 'rgba(255,255,255,0.38)' : '#9B8872',
                  display: 'block',
                  marginTop: 'auto',
                  paddingTop: '1.25rem',
                  letterSpacing: '0.04em',
                }}>
                  CAD / month
                </span>
              </button>
            )
          })}
        </div>

        {/* Custom amount — full-width row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap' as const,
            gap: '1rem',
            padding: '1.625rem 2rem',
            background: isCustomActive ? 'var(--color-teal)' : '#F8F3EB',
            border: `1px solid ${isCustomActive ? 'var(--color-teal)' : 'rgba(196,149,42,0.25)'}`,
            borderRadius: '2px',
            marginBottom: '20px',
            transition: 'background 200ms ease, border-color 200ms ease',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            color: isCustomActive ? 'rgba(255,255,255,0.75)' : '#9B8872',
            flexShrink: 0,
          }}>
            Own amount:
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', flex: 1 }}>
            <span style={{
              fontFamily: 'var(--font-heading, serif)',
              fontSize: '2rem',
              fontWeight: 400,
              color: isCustomActive ? '#FFFFFF' : '#9B8872',
            }}>
              $
            </span>
            <input
              type="number"
              min="1"
              placeholder="___"
              value={custom}
              onChange={handleCustomChange}
              onFocus={() => setCustomFocused(true)}
              onBlur={() => setCustomFocused(false)}
              aria-label="Enter a custom monthly amount in Canadian dollars"
              style={{
                fontFamily: 'var(--font-heading, serif)',
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                color: isCustomActive ? '#FFFFFF' : '#1C1208',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                width: '140px',
                MozAppearance: 'textfield',
              } as React.CSSProperties}
            />
          </div>
          <span style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.6875rem',
            color: isCustomActive ? 'rgba(255,255,255,0.45)' : '#9B8872',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}>
            CAD / month
          </span>
        </div>

        {/* Primary CTA */}
        <a
          href="/sponsor"
          style={{
            display: 'block',
            width: '100%',
            padding: '1.125rem 2rem',
            backgroundColor: '#C4952A',
            color: '#1C1208',
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
            textAlign: 'center' as const,
            borderRadius: '2px',
            transition: 'background-color 250ms ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#D4A84B' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C4952A' }}
          aria-label={`Sponsor an Orphan for $${displayAmount} per month`}
        >
          Sponsor an Orphan — ${displayAmount > 0 ? displayAmount : '___'}/month
        </a>

        {/* Trust note */}
        <p style={{
          textAlign: 'center' as const,
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.75rem',
          color: '#9B8872',
          marginTop: '14px',
          letterSpacing: '0.03em',
        }}>
          Tax receipts provided · Cancel anytime · 100% reaches the child
        </p>

      </div>
    </section>
  )
}

export default AmountPicker
