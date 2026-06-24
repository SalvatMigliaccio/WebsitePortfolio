// Each project maps its tags and github key to translations via t()
// deployed: true  → link points to a live production deployment
// deployed: false → link points to GitHub repo
export const projects = [
  {
    id: 'underdome',
    translationKey: 'projects.underdome',
    link: 'https://underdomegv.it/',
    deployed: true,
    wip: false,
  },
  {
    id: 'pqcbench',
    translationKey: 'projects.pqcbench',
    link: 'https://pqc-showcase.namirial.com',
    deployed: true,
    wip: false,
  },
  {
    id: 'pqcanalysis',
    translationKey: 'projects.pqcanalysis',
    link: 'https://csrc.nist.gov/csrc/media/events/2025/sixth-pqc-standardization-conference/namirials%20explorations%20regarding%20recent%20pqc%20solutions.pdf',
    deployed: false,
    wip: false,
  },
  {
    id: 'airag',
    translationKey: 'projects.airag',
    link: 'https://github.com/SalvatMigliaccio/AgenticAI',
    deployed: false,
    wip: true,
  },
];
