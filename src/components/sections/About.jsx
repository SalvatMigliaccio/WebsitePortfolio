import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { GraduationCap, Cpu, Shield, Globe, Briefcase, Award, Atom, Code2, Music, Gamepad2, Layers, Tv, BookOpen } from 'lucide-react';
import { t } from '../../i18n';
import { SectionTitle } from '../common/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export function About() {
  const workEntries = [
    {
      role: 'R&D Engineer',
      company: 'Namirial S.p.A.',
      period: '2024 — Present',
      bullets: [
        'Develop and test high-fidelity prototypes for emerging technologies, focusing on PQC and cryptographic solutions.',
        'Deployed a production-ready web application showcasing a PQC digital signature demonstrator.',
        'Write technical deliverables and manage documentation for competitive research grant proposals.',
      ],
    },
    {
      role: 'AI Standardization Committee Member',
      company: 'CEN/CENELEC JTC 21 & ISO/IEC JTC 1/SC 42',
      period: '2024 — Present',
      bullets: [
        'Contribute to international AI standards focused on trustworthiness, governance, and technical requirements.',
        'Collaborate with international experts to align European and global AI regulations.',
      ],
    },
    {
      role: 'Academic Tutor',
      company: 'University of Naples Federico II',
      period: '2022 — 2023',
      bullets: [
        'Mentored students in Fundamentals of Computer Science and Computer Architecture.',
      ],
    },
  ];

  const certificates = [
    {
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: 'May 2026',
      credentialId: '5EM1XB9GZLFK',
    },
    {
      name: 'NeaPolis Innovation Summer Campus',
      issuer: 'STMicroelectronics',
      date: 'Jan 2022',
      credentialId: null,
    },
    {
      name: 'Cisco Networking',
      issuer: 'Cisco',
      date: null,
      credentialId: null,
    },
  ];

  const interests = [
    { key: 'about.interest.pqc', icon: <Shield size={16} /> },
    { key: 'about.interest.ai', icon: <Cpu size={16} /> },
    { key: 'about.interest.web', icon: <Globe size={16} /> },
    { key: 'about.interest.sec', icon: <Shield size={16} /> },
    { key: 'about.interest.quantum', icon: <Atom size={16} /> },
    { key: 'about.interest.leetcode', icon: <Code2 size={16} /> },
  ];

  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Avatar + Education + Interests */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Avatar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.05em',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/1777648175189.jpg"
                  alt="Salvatore Migliaccio"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentNode.textContent = 'SM';
                  }}
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                {t('about.education.label')}
              </p>
              <div
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <GraduationCap
                  size={18}
                  style={{ color: 'var(--color-text-muted)', marginTop: '2px', flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {t('about.education.degree')}
                  </p>
                  <p
                    style={{
                      margin: '0.25rem 0 0',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {t('about.education.detail')}
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <GraduationCap
                  size={18}
                  style={{ color: 'var(--color-text-muted)', marginTop: '2px', flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {t('about.education2.degree')}
                  </p>
                  <p
                    style={{
                      margin: '0.25rem 0 0',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {t('about.education2.detail')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={3}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                Certifications
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {certificates.map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Award
                      size={16}
                      style={{ color: 'var(--color-text-muted)', marginTop: '2px', flexShrink: 0 }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          lineHeight: 1.35,
                        }}
                      >
                        {cert.name}
                      </p>
                      <p
                        style={{
                          margin: '0.2rem 0 0',
                          fontSize: '0.75rem',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                      </p>
                      {cert.credentialId && (
                        <p
                          style={{
                            margin: '0.15rem 0 0',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: 'var(--color-text-muted)',
                          }}
                        >
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={4}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                Languages
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { lang: 'Italian', level: 'Native' },
                  { lang: 'English', level: 'B2' },
                ].map(({ lang, level }) => (
                  <div
                    key={lang}
                    style={{
                      background: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '0.6rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {lang}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--color-text-muted)',
                        background: 'var(--color-bg-elevated)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        padding: '2px 8px',
                      }}
                    >
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={5}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                Working Interests
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {interests.map(({ key, icon }) => (
                  <span
                    key={key}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '5px',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {icon}
                    {t(key)}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={6}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                Interests
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  { label: 'Music',              icon: <Music size={16} /> },
                  { label: 'Gaming',             icon: <Gamepad2 size={16} /> },
                  { label: 'Trading Card Games', icon: <Layers size={16} /> },
                  { label: 'Films & TV Series',  icon: <Tv size={16} /> },
                  { label: 'Manga & Comics',     icon: <BookOpen size={16} /> },
                ].map(({ label, icon }) => (
                  <span
                    key={label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '5px',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {icon}
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {t('about.bio1')}
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {t('about.bio2')}
            </p>

            {/* Work Experience Timeline */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  marginTop: '0.5rem',
                }}
              >
                Work Experience
              </p>
              <div
                style={{
                  borderLeft: '1px solid var(--color-border)',
                  paddingLeft: '1.25rem',
                  marginLeft: '0.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                {workEntries.map((entry, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      paddingBottom: i < workEntries.length - 1 ? '1.75rem' : 0,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-1.56rem',
                        top: '0.35rem',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg-elevated)',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {entry.role}
                      </p>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--color-text-muted)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {entry.period}
                      </span>
                    </div>
                    <p style={{ margin: '0.15rem 0 0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Briefcase size={12} style={{ flexShrink: 0, color: 'var(--color-text-muted)' }} />
                      {entry.company}
                    </p>
                    <ul style={{ margin: 0, paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {entry.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative monospace block */}
            <div
              style={{
                marginTop: '0.5rem',
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: '#555' }}>// </span>
              <span>whoami</span>
              <br />
              <span style={{ color: 'var(--color-text-secondary)' }}>name</span>
              <span style={{ color: '#555' }}>: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>"Salvatore Migliaccio"</span>
              <br />
              <span style={{ color: 'var(--color-text-secondary)' }}>role</span>
              <span style={{ color: '#555' }}>: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>"R&D Engineer @ Namirial S.p.A."</span>
              <br />
              <span style={{ color: 'var(--color-text-secondary)' }}>focus</span>
              <span style={{ color: '#555' }}>: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>["PQC", "Agentic AI", "Standards"]</span>
              <br />
              <span style={{ color: 'var(--color-text-secondary)' }}>status</span>
              <span style={{ color: '#555' }}>: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>"research"</span>
            </div>
          </motion.div>
        </div>
        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ marginTop: '3.5rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            GitHub Activity
          </p>
          <div
            style={{
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              padding: '1.5rem',
              overflowX: 'auto',
            }}
          >
            <GitHubCalendar
              username="SalvatMigliaccio"
              colorScheme="dark"
              theme={{
                dark: ['#161616', '#252525', '#3a3a3a', '#686868', '#e8e8e8'],
              }}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              style={{ color: 'var(--color-text-muted)' }}
            />
          </div>
        </motion.div>      </div>
    </section>
  );
}
