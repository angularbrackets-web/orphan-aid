import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Sponsoring an orphan through Orphan Aid is the most meaningful thing our family does each month. We know exactly where our money goes — and we feel it.",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah M.",
    role: "Monthly Sponsor · Toronto, ON",
  },
  {
    text: "I've given to other charities before, but the transparency here is unlike anything I've seen. Every dollar accounted for. Every child real.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar K.",
    role: "Monthly Sponsor · Vancouver, BC",
  },
  {
    text: "The framing of sponsorship as sadaqah jariyah resonated with me deeply. This isn't charity — it's a covenant. I renewed for the second year without hesitation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Nadia R.",
    role: "Monthly Sponsor · Calgary, AB",
  },
  {
    text: "My husband and I sponsor two children together. It's become part of our Friday routine — a reminder of what our wealth is for.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Fatima A.",
    role: "Monthly Sponsor · Mississauga, ON",
  },
  {
    text: "I was skeptical at first — I've been burned by other orgs. But Orphan Aid sent me a detailed breakdown of exactly what my $65 covers. Trust earned.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Yusuf H.",
    role: "Monthly Sponsor · Ottawa, ON",
  },
  {
    text: "My children asked why we give each month. Explaining it to them — that another child has food and school because of us — was one of the best parenting moments I've had.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab S.",
    role: "Monthly Sponsor · Edmonton, AB",
  },
  {
    text: "The website itself told me everything I needed to know about the organization. If this much care goes into the design, I knew it goes into the mission too.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Tariq B.",
    role: "Monthly Sponsor · Montreal, QC",
  },
  {
    text: "I've been looking for a Canadian Islamic charity I can trust completely. Orphan Aid is it. The registration is clear, the impact is clear, and the mission is clear.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Amira D.",
    role: "Monthly Sponsor · Brampton, ON",
  },
  {
    text: "This is sadaqah jariyah in the truest sense. A child receives care every month because I made one decision. That continuity is everything.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan J.",
    role: "Monthly Sponsor · Winnipeg, MB",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.ul
      animate={{ translateY: '-50%' }}
      transition={{
        duration: props.duration || 15,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-3 pb-3 list-none m-0 p-0"
    >
      {[...new Array(2).fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, image, name, role }, i) => (
            <li
              key={`${index}-${i}`}
              aria-hidden={index === 1 ? 'true' : 'false'}
              tabIndex={index === 1 ? -1 : 0}
              style={{
                backgroundColor: '#EFE8D8',
                border: '1px solid rgba(196, 149, 42, 0.18)',
                borderRadius: '2px',
                padding: '28px 28px',
                maxWidth: '320px',
                width: '100%',
              }}
            >
              <blockquote className="m-0 p-0">
                {/* Decorative gold quotation mark */}
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading, serif)',
                    fontSize: '3rem',
                    lineHeight: '1',
                    color: '#C4952A',
                    opacity: 0.4,
                    marginBottom: '8px',
                    userSelect: 'none',
                  }}
                  aria-hidden="true"
                >
                  "
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: '#6B5B45',
                    margin: 0,
                  }}
                >
                  {text}
                </p>
                <footer
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '20px',
                  }}
                >
                  {/* Gold accent line */}
                  <svg
                    width="20"
                    height="1"
                    viewBox="0 0 20 1"
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#C4952A" strokeWidth="1.5" />
                  </svg>
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt=""
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <cite
                      style={{
                        fontFamily: 'var(--font-body, sans-serif)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        letterSpacing: '0.02em',
                        color: '#1C1208',
                        lineHeight: '1.3',
                      }}
                    >
                      {name}
                    </cite>
                    <span
                      style={{
                        fontFamily: 'var(--font-body, sans-serif)',
                        fontSize: '0.75rem',
                        color: '#9B8872',
                        marginTop: '2px',
                        lineHeight: '1.4',
                      }}
                    >
                      {role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </li>
          ))}
        </React.Fragment>
      ))]}
    </motion.ul>
  </div>
);

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      style={{
        backgroundColor: '#F8F3EB',
        paddingTop: '10rem',
        paddingBottom: '10rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '540px',
            margin: '0 auto 4rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6B5B45',
              marginBottom: '16px',
            }}
          >
            Donor Stories
          </p>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: 'var(--font-heading, serif)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1C1208',
              margin: '0 0 20px',
            }}
          >
            Voices from our community.
          </h2>
          {/* Gold divider */}
          <svg width="200" height="2" viewBox="0 0 200 2" aria-hidden="true">
            <line x1="0" y1="1" x2="200" y2="1" stroke="#D4A84B" strokeWidth="1" />
          </svg>
          <p
            style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#9B8872',
              marginTop: '16px',
              maxWidth: '380px',
            }}
          >
            Monthly sponsors across Canada, on what their commitment means to them.
          </p>
        </div>

        {/* Scrolling columns */}
        <div
          role="region"
          aria-label="Donor testimonials"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '2.5rem',
            maxHeight: '720px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
