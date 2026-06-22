# Professional Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio into a recruiter-friendly, navy-themed single-page home with EN|TH toggle, featured projects, and shared layout across all routes.

**Architecture:** Extract shared Layout (Navbar/Footer), split Home into section components, centralize copy in i18n JSON files via LanguageContext, apply CSS variables for the navy theme, and restyle Portfolio/Detail pages to match. Remove Resume route (redirect to `/#experience`).

**Tech Stack:** React 17, React Router v5, react-bootstrap 4, SCSS, @testing-library/react

**Spec:** `docs/superpowers/specs/2026-06-22-professional-portfolio-redesign-design.md`

---

## File Map

| File | Responsibility |
|------|----------------|
| `src/styles/_variables.scss` | Design tokens (navy palette) |
| `src/context/LanguageContext.js` | Language state + `t()` helper |
| `src/i18n/en.json` | English UI strings |
| `src/i18n/th.json` | Thai UI strings |
| `src/data/experience.js` | Work history data (from Resume screen) |
| `src/data/skills.js` | Skill groups |
| `src/data/contact.js` | LinkedIn, email, social URLs |
| `src/data/featuredProjects.js` | Names of 4 featured projects |
| `src/components/Layout/index.js` | Wraps Navbar + main + Footer |
| `src/components/Navbar/index.js` | Nav links, EN\|TH, Download CV |
| `src/components/Footer/index.js` | Secondary links |
| `src/components/LanguageToggle/index.js` | EN \| TH buttons |
| `src/components/ProjectCard/index.js` | Reusable project card |
| `src/components/SectionHero/` … `SectionContact/` | Home sections |
| `src/screens/Home/index.js` | Composes all sections |
| `src/screens/Portfolio/index.js` | All projects grid |
| `src/screens/PortfolioDetail/index.js` | Restyled detail page |
| `src/App.js` | Routes + `/resume` redirect |
| `src/index.js` | Wrap app in LanguageProvider |
| `src/index.css` | Remove dot animations; import variables |

**Delete after migration:** `src/screens/Resume/` (both files)

---

### Task 1: Design Tokens

**Files:**
- Create: `src/styles/_variables.scss`
- Modify: `src/index.css`
- Test: `src/styles/variables.test.js`

- [ ] **Step 1: Write the failing test**

Create `src/styles/variables.test.js`:

```javascript
import fs from 'fs';
import path from 'path';

test('variables scss defines navy palette tokens', () => {
  const content = fs.readFileSync(
    path.join(__dirname, '_variables.scss'),
    'utf8'
  );
  expect(content).toContain('--color-navy: #1e3a5f');
  expect(content).toContain('--color-bg-alt: #f7f8fa');
  expect(content).toContain('--color-text-muted: #718096');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false variables.test.js`
Expected: FAIL — file not found

- [ ] **Step 3: Create variables file**

Create `src/styles/_variables.scss`:

```scss
:root {
  --color-navy: #1e3a5f;
  --color-navy-dark: #152a45;
  --color-bg: #ffffff;
  --color-bg-alt: #f7f8fa;
  --color-text: #2d3748;
  --color-text-muted: #718096;
  --color-border: #e2e8f0;
  --font-family: 'Helvetica Neu', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --shadow-card: 0 2px 8px rgba(30, 58, 95, 0.08);
  --shadow-card-hover: 0 4px 16px rgba(30, 58, 95, 0.15);
  --section-padding: 80px 0;
  --max-width: 1140px;
}
```

Add to top of `src/index.css`:

```css
@import './styles/_variables.scss';
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false variables.test.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/styles/_variables.scss src/styles/variables.test.js src/index.css
git commit -m "feat: add navy design token variables"
```

---

### Task 2: Contact & Featured Project Data

**Files:**
- Create: `src/data/contact.js`
- Create: `src/data/featuredProjects.js`
- Test: `src/data/contact.test.js`

- [ ] **Step 1: Write the failing test**

Create `src/data/contact.test.js`:

```javascript
import contact from './contact';

test('contact exports linkedin and email from spec', () => {
  expect(contact.linkedin).toBe(
    'https://www.linkedin.com/in/pawnpunnarai-saimoonkham-b0041b130/'
  );
  expect(contact.email).toBe('pawnpunnarai.saimoonkham@gmail.com');
  expect(contact.cvPath).toContain('Resume');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false contact.test.js`
Expected: FAIL

- [ ] **Step 3: Create data files**

Create `src/data/contact.js`:

```javascript
import CVPort from '../assets/files/Resume - Pawnpunnarai Saimoonkham.pdf';

const contact = {
  linkedin: 'https://www.linkedin.com/in/pawnpunnarai-saimoonkham-b0041b130/',
  email: 'pawnpunnarai.saimoonkham@gmail.com',
  facebook: 'https://www.facebook.com/kudokung.w/',
  instagram: 'https://www.instagram.com/kulzoul/',
  cvPath: CVPort,
};

export default contact;
```

Create `src/data/featuredProjects.js`:

```javascript
const FEATURED_PROJECT_NAMES = [
  'ASAPH',
  'Pikul Wallet (Release and developing)',
  'DLT Taxi Driver',
  'SCB Business Anywhere',
];

export default FEATURED_PROJECT_NAMES;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false contact.test.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/contact.js src/data/featuredProjects.js src/data/contact.test.js
git commit -m "feat: add contact info and featured project names"
```

---

### Task 3: Experience & Skills Data

**Files:**
- Create: `src/data/experience.js`
- Create: `src/data/skills.js`
- Test: `src/data/experience.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import experience from './experience';

test('experience has four work entries', () => {
  expect(experience).toHaveLength(4);
  expect(experience[0].company).toBe('Socket 9 Co., Ltd. (HQ)');
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Create experience.js** (extract from `src/screens/Resume/index.js` items array, add `bullets` array split from `cardDetailedText`):

```javascript
const experience = [
  {
    period: 'March 2021 - Present',
    company: 'Socket 9 Co., Ltd. (HQ)',
    role: 'Mobile and Web Developer (Front-End)',
    bullets: [
      'Developed DLT Driver and SCB Business Anywhere using React Native',
      'Built HandiGo and Tspace with React JS; ASAPH with TypeScript and VideoSDK live streaming',
      'Current: Pikul app and Pikul merchant app (e-wallet) for Asset World Corporation',
    ],
  },
  {
    period: 'Jan 2019 - Feb 2021 (2Y 2M)',
    company: 'SiamDApp (Thailand) Co.,Ltd.',
    role: 'Web and Mobile Developer (Front-End)',
    bullets: [
      'React Native: CM-transit, Om Wallet, Om Merchant (POS), CM-Bus Sell Ticket (POS)',
      'React JS: Tokenization Platform, Crowdfunding; WordPress: Om Platform; Preact/React: CM-Bus Admin',
    ],
  },
  {
    period: 'Nov 2017 – Dec 2018 (1Y)',
    company: 'School of Public Policy (SPP CMU)',
    role: 'Web-Developer (Front-End)',
    bullets: [
      'Designed and developed organization website using HTML, CSS, and PHP',
    ],
  },
  {
    period: 'March 2017 – Oct 2017 (8M)',
    company: 'PranWorks Co., Ltd.',
    role: 'Software Engineering (Intern)',
    bullets: [
      'Built Front-End web applications with ASP.NET MVC and MySQL via SqlDataSource',
    ],
  },
];

export default experience;
```

Create `src/data/skills.js`:

```javascript
const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS/SCSS', 'PHP', 'Java'],
  frameworks: ['React', 'React Native', 'Preact', 'Angular', 'Bootstrap', 'WordPress'],
  tools: ['Figma', 'IntelliJ', 'Visual Studio', 'BitBucket', 'Sourcetree', 'Video SDK'],
};

export default skills;
```

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/data/experience.js src/data/skills.js src/data/experience.test.js
git commit -m "feat: extract experience and skills data"
```

---

### Task 4: LanguageContext + i18n Files

**Files:**
- Create: `src/context/LanguageContext.js`
- Create: `src/i18n/en.json`
- Create: `src/i18n/th.json`
- Modify: `src/index.js`
- Test: `src/context/LanguageContext.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function Probe() {
  const { t, setLang, lang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero">{t('hero.title')}</span>
      <button onClick={() => setLang('th')}>TH</button>
    </div>
  );
}

test('t() returns english by default and switches to thai', () => {
  render(<LanguageProvider><Probe /></LanguageProvider>);
  expect(screen.getByTestId('hero')).toHaveTextContent('Pawnpunnarai Saimoonkham');
  fireEvent.click(screen.getByText('TH'));
  expect(screen.getByTestId('lang')).toHaveTextContent('th');
  expect(screen.getByTestId('hero')).toHaveTextContent('ปอนปุณณรัตน์ สายมูลคำ');
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Implement LanguageContext**

Create `src/i18n/en.json` with keys: `nav.about`, `nav.experience`, `nav.projects`, `nav.contact`, `nav.downloadCv`, `hero.title`, `hero.subtitle`, `hero.years`, `hero.projects`, `hero.downloadCv`, `about.title`, `about.body`, `experience.title`, `experience.downloadCv`, `skills.title`, `skills.languages`, `skills.frameworks`, `skills.tools`, `projects.title`, `projects.viewAll`, `projects.viewDetails`, `contact.title`, `contact.linkedin`, `contact.email`, `footer.copyright`.

Create `src/i18n/th.json` with Thai equivalents for all keys above.

Create `src/context/LanguageContext.js`:

```javascript
import React, { createContext, useContext, useState, useCallback } from 'react';
import en from '../i18n/en.json';
import th from '../i18n/th.json';

const messages = { en, th };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('portfolio-lang') || 'en'
  );

  const setLang = useCallback((next) => {
    setLangState(next);
    localStorage.setItem('portfolio-lang', next);
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = messages[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
```

Wrap in `src/index.js`:

```javascript
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
);
```

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/context/ src/i18n/ src/index.js
git commit -m "feat: add LanguageContext with EN/TH i18n"
```

---

### Task 5: Navbar + Footer + Layout

**Files:**
- Create: `src/components/LanguageToggle/index.js`
- Create: `src/components/Navbar/index.js` + `style.scss`
- Create: `src/components/Footer/index.js` + `style.scss`
- Create: `src/components/Layout/index.js`
- Test: `src/components/Navbar/Navbar.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import Navbar from './index';

test('navbar renders download cv and language toggle', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText(/Download CV/i)).toBeInTheDocument();
  expect(screen.getByText('EN')).toBeInTheDocument();
  expect(screen.getByText('TH')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Implement components**

`LanguageToggle` — two buttons, active state uses navy background.

`Navbar` — white bg, subtle bottom border, logo + site name, anchor links (`#about`, `#experience`, `#projects`, `#contact`) using `useHistory` + `useLocation` for cross-page hash navigation, `LanguageToggle`, `<a href={contact.cvPath} download>` for CV.

`Footer` — gray text, LinkedIn + Email prominent row, Facebook/Instagram smaller below.

`Layout` — renders Navbar, `<main>{children}</main>`, Footer.

Navbar `style.scss`: use `var(--color-navy)`, no pink, `position: sticky; top: 0; z-index: 100`.

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/components/LanguageToggle src/components/Navbar src/components/Footer src/components/Layout
git commit -m "feat: add Layout with professional Navbar and Footer"
```

---

### Task 6: ProjectCard Component

**Files:**
- Create: `src/components/ProjectCard/index.js` + `style.scss`
- Test: `src/components/ProjectCard/ProjectCard.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from './index';

const project = {
  name: 'ASAPH',
  description: 'Live streaming app',
  skill: 'TypeScript, React',
  image: 'test.png',
};

test('project card shows name and skill tags', () => {
  render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>
  );
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
  expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Implement ProjectCard**

- White card, `border: 1px solid var(--color-border)`, `border-radius: 8px`
- Image top, name, description (1 line `text-overflow: ellipsis`), skill chips from `project.skill.split(',')`
- `Link` to `/portfolio/detail` with `state: { data: project }`
- Hover: `box-shadow: var(--shadow-card-hover)`, `border-color: var(--color-navy)`
- No hover color-fill or image hide behavior

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard
git commit -m "feat: add professional ProjectCard component"
```

---

### Task 7: Home Section Components

**Files:**
- Create: `src/components/SectionHero/index.js` + `style.scss`
- Create: `src/components/SectionAbout/index.js` + `style.scss`
- Create: `src/components/SectionExperience/index.js` + `style.scss`
- Create: `src/components/SectionSkills/index.js` + `style.scss`
- Create: `src/components/SectionProjects/index.js` + `style.scss`
- Create: `src/components/SectionContact/index.js` + `style.scss`
- Test: `src/components/SectionHero/SectionHero.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import SectionHero from './index';

test('hero shows name and experience stat', () => {
  render(<LanguageProvider><SectionHero /></LanguageProvider>);
  expect(screen.getByText('Pawnpunnarai Saimoonkham')).toBeInTheDocument();
  expect(screen.getByText(/6\+/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Implement all six sections**

**SectionHero:** id=`hero`, two-column layout, intro image from `images.imgIntro`, stats row, no floating dots.

**SectionAbout:** id=`about`, bg `var(--color-bg-alt)`, `t('about.body')` text.

**SectionExperience:** id=`experience`, vertical timeline CSS (left border line, dots at each entry), map `experience.js` data, Download CV link at bottom.

**SectionSkills:** id=`skills`, three chip groups from `skills.js`.

**SectionProjects:** id=`projects`, filter `MyPortfolio.MENU` where `name` is in `featuredProjects.js`, render 4 `ProjectCard`s in 2×2 grid, Link button to `/portfolio` with `t('projects.viewAll')`.

**SectionContact:** id=`contact`, navy bg, white text, links to `contact.linkedin`, `mailto:contact.email`, CV download.

Each section: `max-width: var(--max-width)`, centered, `padding: var(--section-padding)`.

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/components/SectionHero src/components/SectionAbout src/components/SectionExperience src/components/SectionSkills src/components/SectionProjects src/components/SectionContact
git commit -m "feat: add all home page sections"
```

---

### Task 8: Refactor Home Screen

**Files:**
- Modify: `src/screens/Home/index.js`
- Modify: `src/screens/Home/style.scss` (strip old navbar/hero styles, keep only home-specific overrides if any)
- Test: `src/screens/Home/Home.test.js`

- [ ] **Step 1: Write the failing test**

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import HomeScreen from './index';

test('home renders all main sections', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('hero')).toBeInTheDocument();
  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.getElementById('experience')).toBeInTheDocument();
  expect(document.getElementById('skills')).toBeInTheDocument();
  expect(document.getElementById('projects')).toBeInTheDocument();
  expect(document.getElementById('contact')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Replace Home screen**

```javascript
import React from 'react';
import Layout from '../../components/Layout';
import SectionHero from '../../components/SectionHero';
import SectionAbout from '../../components/SectionAbout';
import SectionExperience from '../../components/SectionExperience';
import SectionSkills from '../../components/SectionSkills';
import SectionProjects from '../../components/SectionProjects';
import SectionContact from '../../components/SectionContact';

const HomeScreen = () => (
  <Layout>
    <SectionHero />
    <SectionAbout />
    <SectionExperience />
    <SectionSkills />
    <SectionProjects />
    <SectionContact />
  </Layout>
);

export default HomeScreen;
```

Remove old `renderMenu`, `renderHome`, floating dots, inline styles from `style.scss`.

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/screens/Home
git commit -m "feat: refactor Home into single-page sections"
```

---

### Task 9: Update Routing + Remove Resume

**Files:**
- Modify: `src/App.js`
- Delete: `src/screens/Resume/index.js`, `src/screens/Resume/style.scss`
- Test: `src/App.test.js`

- [ ] **Step 1: Write the failing test**

Replace `src/App.test.js`:

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';

test('home route renders hero section', () => {
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('hero')).toBeInTheDocument();
});

test('/resume redirects to experience section', () => {
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/resume']}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('experience')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL**

- [ ] **Step 3: Update App.js**

```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './screens/Home';
import PortfolioScreen from './screens/Portfolio';
import PortfolioDetailScreen from './screens/PortfolioDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/detail" exact component={PortfolioDetailScreen} />
        <Route path="/portfolio" exact component={PortfolioScreen} />
        <Route path="/resume" exact render={() => <Redirect to="/#experience" />} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
```

Delete Resume screen files. Remove `react-chrono` from `package.json` dependencies.

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/App.js src/App.test.js
git rm src/screens/Resume/index.js src/screens/Resume/style.scss
git commit -m "feat: update routing and remove Resume screen"
```

---

### Task 10: Refactor Portfolio + Detail Pages

**Files:**
- Modify: `src/screens/Portfolio/index.js` + `style.scss`
- Modify: `src/screens/PortfolioDetail/index.js` + `style.scss`

- [ ] **Step 1: Write the failing test**

Create `src/screens/Portfolio/Portfolio.test.js`:

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import PortfolioScreen from './index';

test('portfolio page lists all projects', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <PortfolioScreen />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
  expect(screen.getByText('Tokenization Platform')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test — expect FAIL** (old screen has no Layout)

- [ ] **Step 3: Refactor both screens**

**Portfolio:** Wrap in `Layout`, remove duplicated `renderMenu`, map all `MyPortfolio.MENU` to `ProjectCard` grid, remove `cardPortfolio` hover classes and per-project border colors.

**PortfolioDetail:** Wrap in `Layout`, add breadcrumb, navy title, restyle carousel (transparent bg, navy arrows), outline buttons for store links, back link to `/portfolio`.

- [ ] **Step 4: Run test — expect PASS**

- [ ] **Step 5: Commit**

```bash
git add src/screens/Portfolio src/screens/PortfolioDetail
git commit -m "feat: restyle Portfolio and Detail pages with Layout"
```

---

### Task 11: Global Style Cleanup

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`
- Modify: `src/screens/Home/style.scss` (delete or empty if unused)

- [ ] **Step 1: Remove playful styles from index.css**

Delete lines 38–452 (`.section-header`, all `@keyframes p1`–`p9`, `.point-floating-*` classes).

Delete `.index-page .squares` block (lines 491–565).

Keep font-face declarations and body font-family.

- [ ] **Step 2: Verify no pink navbar remains**

Search: `rg "ffc0cb|ffdce3|a94db9|floating" src/`
Expected: no matches (or only in deleted files)

- [ ] **Step 3: Run full test suite**

Run: `npm test -- --watchAll=false`
Expected: all tests PASS

- [ ] **Step 4: Run dev server smoke check**

Run: `npm start` (manual)
Verify: home loads navy theme, no dots, EN|TH toggle works, featured 4 projects visible, `/portfolio` works, `/resume` lands on experience.

- [ ] **Step 5: Commit**

```bash
git add src/index.css src/App.css
git commit -m "chore: remove casual animations and pink theme styles"
```

---

### Task 12: Production Build Verification

**Files:** none (verification only)

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: exit 0, no errors

- [ ] **Step 2: Verify spec success criteria**

| # | Criterion | How to verify |
|---|-----------|---------------|
| 1 | Recruiter sees profile quickly | Hero shows name, role, stats in first viewport |
| 2 | No casual elements | No dots, pink, purple gradients |
| 3 | EN\|TH works | Toggle changes all section headings |
| 4 | All projects accessible | `/portfolio` shows 15+ cards |
| 5 | Featured 4 correct | Home `#projects` shows ASAPH, Pikul, DLT, SCB |
| 6 | Resume redirect | `/resume` → `/#experience` |

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git commit -m "chore: verify production build passes"
```

---

## Spec Coverage Checklist

| Spec Section | Task |
|--------------|------|
| Design tokens | Task 1 |
| Contact info | Task 2 |
| Featured projects | Task 2, 7 |
| Experience data | Task 3, 7 |
| Skills data | Task 3, 7 |
| i18n EN\|TH | Task 4 |
| Layout/Navbar/Footer | Task 5 |
| Home sections | Task 7, 8 |
| Routing + resume redirect | Task 9 |
| Portfolio restyle | Task 10 |
| Remove casual styles | Task 11 |
| Remove react-chrono | Task 9 |
| Accessibility focus states | Task 5 (Navbar), Task 6 (cards) |
| Education section | **Deferred** — not in approved design sections; add to About or Experience only if user requests |

## Deferred (YAGNI for v1)

- Thai translations for all 15+ project descriptions (`descriptionTh` field) — UI strings only in v1
- Education section from old Resume page — omitted from approved design
- Professional headshot — keep existing intro image
