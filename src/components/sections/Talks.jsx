import { motion } from 'framer-motion';
import { t } from '../../i18n';
import { SectionTitle } from '../common/SectionTitle';
import { TalkCard } from '../common/TalkCard';
import { talks } from '../../data/talks';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export function Talks() {
  const sortedTalks = [...talks].sort((a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0));

  return (
    <section id="talks" style={{ padding: '6rem 0', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionTitle title={t('talks.title')} subtitle={t('talks.subtitle')} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {sortedTalks.map((talk, i) => (
            <motion.div
              key={talk.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <TalkCard talk={talk} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
