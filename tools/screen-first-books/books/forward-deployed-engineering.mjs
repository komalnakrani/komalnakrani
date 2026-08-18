export default Object.freeze({
  slug: 'forward-deployed-engineering',
  publicationDirectory: 'content/publications/forward-deployed-engineering',
  output: 'output/pdf/forward-deployed-engineering-screen-first-review.pdf',
  reviewAssetDirectory: 'tools/screen-first-books/books/forward-deployed-engineering/assets',
  partStarts: [1, 6, 11, 15, 18],
  parts: [
    { number: 1, roman: 'I', title: 'Own the Outcome', range: 'Chapters 01-05' },
    { number: 2, roman: 'II', title: 'Design the Deployment', range: 'Chapters 06-10' },
    { number: 3, roman: 'III', title: 'Build Evidence into the System', range: 'Chapters 11-14' },
    { number: 4, roman: 'IV', title: 'Launch into Reality', range: 'Chapters 15-17' },
    { number: 5, roman: 'V', title: 'Turn Delivery into Leverage', range: 'Chapters 18-19' },
  ],
  appendices: [
    { id: 'A', title: 'Deployment Dossier Templates', file: 'appendices/appendix-a-deployment-dossier-templates.md' },
    { id: 'B', title: 'Gate and Review Checklists', file: 'appendices/appendix-b-gate-and-review-checklists.md' },
    { id: 'C', title: 'Companion Guide', file: 'appendices/appendix-c-companion-guide.md' },
    { id: 'D', title: 'Glossary and Source Use', file: 'appendices/appendix-d-glossary-and-source-use.md' },
    { id: 'E', title: 'Completed Dossier Index', file: 'appendices/appendix-e-completed-dossier-index.md' },
  ],
  palette: {
    midnight: '#07192F',
    cyan: '#00A8CF',
    orange: '#FF7A1A',
    paper: '#F4F7FB',
    ink: '#10233C',
    mist: '#D9F7FF',
  },
  fonts: {
    display: 'tools/screen-first-books/fonts/barlow-condensed.ttf',
    reading: 'tools/screen-first-books/fonts/source-sans-3.ttf',
    technical: 'tools/screen-first-books/fonts/ibm-plex-mono.ttf',
  },
  closingStatement: 'Leave the system more legible than you found it.',
  reviewLabel: 'Complete screen-first review edition - not the published edition',
  protectedPublication: {
    manifest: {
      file: 'content/publications/forward-deployed-engineering/publication.json',
      sha256: 'd35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb',
    },
    pdf: {
      file: 'public/downloads/forward-deployed-engineering-v1.0.0.pdf',
      sha256: '96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050',
    },
  },
});
