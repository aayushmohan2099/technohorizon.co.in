# Techno Horizon — Corporate Website & Institutional Portal

A complete, production-grade corporate portfolio and lead-generation portal for **Techno Horizon**, an Indian enterprise services company. Built with **Vite + React JavaScript**, native CSS design tokens, custom SVG illustrations, modular JSON-driven content, and client-side routing across 26 institutional routes.

---

## 1. Architectural Highlights

- **Tech Stack:** Vite, React 18, React Router v6, Lucide Icons, Vanilla CSS Design Tokens.
- **Enterprise Positioning:** Institutional services portfolio designed for government procurement officers, PSU directors, corporate executives, and HR leaders.
- **Strict Scope Boundaries:** **NO LOGIN, NO ACCOUNTS, NO PRICING TIERS, NO SAAS PACKAGES, NO SHOPPING CARTS**.
- **The Honeycomb Rule:** Exactly **ONE** fluid honeycomb-like animation on the entire site, located exclusively in Section 04 of the homepage ("*One connected partner. Four specialist capabilities.*").
- **Original Vector Illustrations:** Bespoke SVG components (`DigitalHorizon`, `SoftwareFlow`, `AdvisoryWorkflow`, `LearningLadder`, `TalentPipeline`, `ApproachProcess`, and `NotFoundGraphic`). No stock photos or competitor screenshots.
- **Data-First Modular Architecture:** All company facts, services, sectors, reference candidates, milestones, case studies, FAQs, and lead dispatch routing are maintained in separate, modular JSON files in `src/data/`.
- **Evidence & Governance Ledger:** All case studies, metrics, and institutional references track verification status (`approved`, `pending`, `archival`). Unverified candidate records are preserved in an editorial review state and quarantined from public claims.

---

## 2. Directory Structure

```text
├── logos/                         # Original owner-supplied logo assets (preserved intact)
├── public/
│   └── logos/                     # Static distribution copies of owner-supplied logos
├── src/
│   ├── components/
│   │   ├── layout/                # Header (accessible mega dropdowns & drawer), Footer, Layout
│   │   ├── ui/                    # Breadcrumbs, SectionHeading, TrustRail, CtaBand
│   │   └── projects/              # ProjectCard
│   ├── data/
│   │   ├── site.json              # Brand identity, verification notes, contact constants
│   │   ├── navigation.json        # Header, mega menu, and footer links
│   │   ├── services.json          # 4 core service pillars with capabilities & deliverables
│   │   ├── sectors.json           # Government & PSU, Private Enterprise, Semi-Public
│   │   ├── clients.json           # 15 reference candidates with approval metadata
│   │   ├── projects.json          # Verified case studies & quarantined candidate records
│   │   ├── history.json           # Milestone timeline and archival candidates
│   │   ├── insights.json          # Substantive institutional articles & takeaways
│   │   ├── faq.json               # Categorized institutional and procurement FAQs
│   │   ├── metrics.json           # Evidence-based qualitative capability matrix
│   │   ├── media.json             # Media asset ledger & SVG catalog
│   │   └── leads-routing.json     # Departmental lead routing & dispatch parameters
│   ├── graphics/                  # Original SVG vector illustrations
│   │   ├── DigitalHorizon.jsx     # Enterprise Hero illustration (non-honeycomb)
│   │   ├── HomeHoneycomb.jsx      # Sole fluid honeycomb animation (Homepage section 04)
│   │   ├── SoftwareFlow.jsx       # Software & IT integration flow
│   │   ├── AdvisoryWorkflow.jsx   # BPR & DPR advisory transformation map
│   │   ├── LearningLadder.jsx     # Training & change management progression
│   │   ├── TalentPipeline.jsx     # Manpower & staffing pipeline
│   │   ├── ApproachProcess.jsx    # 5-stage branching delivery methodology
│   │   └── NotFoundGraphic.jsx    # Abstract pathway for 404 recovery
│   ├── lib/
│   │   ├── content.js             # Data access helpers
│   │   ├── mailto.js              # URL-encoded mailto generator & clipboard copy fallback
│   │   ├── validation.js          # Client-side form & future-date validation
│   │   └── seo.js                 # Document title & meta tag hook
│   ├── pages/                     # Complete layouts for all 26 routes
│   ├── styles/
│   │   ├── tokens.css             # PRD brand tokens (#0F4C81, #E53E3E, neutrals)
│   │   └── global.css             # Reset, typography, forms, cards, accessibility
│   ├── routes.jsx                 # Route declarations mapping all 26 URLs
│   ├── App.jsx                    # Root App component
│   └── main.jsx                   # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 3. The 26 Required Routes

| # | Route | Purpose | Key Content & Interactive Elements |
|---|---|---|---|
| 01 | `/` | Home | 12 complete sections, hero DigitalHorizon, TrustRail, 4 pillars, single HomeHoneycomb, sectors, case studies, methodology, CTA |
| 02 | `/about` | About | Operating principles, organizational facts, target customer domains, link to journey |
| 03 | `/about/our-journey` | Journey & Evolution | Verified capability timeline from `history.json`, archival candidates quarantine notice |
| 04 | `/services` | All Services | Dynamic accessible category tabs, capabilities, cross-disciplinary integration scenarios |
| 05 | `/services/software-it-solutions` | Software & IT | Custom applications, systems integration, legacy modernization, SoftwareFlow graphic |
| 06 | `/services/business-consultancy` | Business Advisory | BPR, DPR formulation, AdvisoryWorkflow graphic, deliverables gallery |
| 07 | `/services/training-skill-development` | Training & Skills | Change management, Train-the-Trainer (ToT), LearningLadder graphic |
| 08 | `/services/manpower-solutions` | Manpower Solutions | Executive search, project staffing, TalentPipeline graphic, SLA frameworks |
| 09 | `/sectors` | Sectors Overview | Government, PSUs, Private Enterprise, NGOs, comprehensive sectoral matrix |
| 10 | `/sectors/government-public-sector` | Government & PSUs | Procurement-ready DPRs, citizen portals, compliance checkpoints |
| 11 | `/sectors/private-enterprise` | Private Enterprise & NGOs | Agile enterprise software, cloud APIs, specialized tech staffing |
| 12 | `/projects` | Projects Library | Live keyword search, sector filters, service filters, reset, sort, candidate ledger |
| 13 | `/projects/:slug` | Project Detail | Reusable template: context, challenge, scope, approach, deliverables, outcomes, technologies |
| 14 | `/clients` | Clients & References | 15 reference candidates with approval statuses, text fallback for SVCG, governance notice |
| 15 | `/approach` | Delivery Approach | Five delivery phases, ApproachProcess branching diagram, engagement roadmap |
| 16 | `/insights` | Insights Listing | Editorial grid with reading times, category filters, executive summaries |
| 17 | `/insights/:slug` | Insight Detail | Reusable article template: executive takeaways, desktop table of contents, body sections |
| 18 | `/contact` | Contact Desk | Direct inquiry intake, sector/service selection, progressive validation, mailto + copy |
| 19 | `/request-proposal` | Request a Proposal | Single-page procurement intake: multi-select services, scope, timeline, mailto + copy |
| 20 | `/schedule-consultation` | Schedule Consultation | Consultation intake, date (no past dates), time slots, timezone, pretyped message, mailto |
| 21 | `/request-training` | Request Training | Training intake: cohort size, delivery format, target dates, objectives, mailto + copy |
| 22 | `/submit-rfp` | RFP & Tender Desk | Static informational desk per PRD, tender notice parameters, direct coordination email |
| 23 | `/privacy-policy` | Privacy Policy | Provisional governance framework, data handling rules, contact desk |
| 24 | `/terms` | Terms of Engagement | Preliminary scoping terms, intellectual property, institutional contract boundaries |
| 25 | `/accessibility` | Accessibility | WCAG 2.1 AA implementation baseline, keyboard navigation, contrast, feedback email |
| 26 | `*` | 404 Recovery | Non-honeycomb NotFoundGraphic, recovery links to Home, Services, and Contact |

---

## 4. Setup, Run & Build Instructions

### Prerequisites
- Node.js (v18.0.0 or later, v24 recommended)
- npm (v9.0.0 or later)

### Installation
In the project root directory (`C:/Projects/technohorizon.co.in`):

```bash
npm install
```

### Development Server
Run the local Vite development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your web browser.

### Production Build
To validate the application bundle and generate optimized assets:

```bash
npm run build
```

Compiled assets are emitted into the `dist/` directory.

### Preview Production Build
To preview the compiled production output locally:

```bash
npm run preview
```

---

## 5. Deployment & Single-Page Application (SPA) Fallback

Because this website uses client-side routing via React Router HTML5 History, all incoming HTTP requests must fall back to `index.html` on the server so that routes like `/services/software-it-solutions` or `/projects/rural-infrastructure-monitoring` can be rendered directly upon page refresh.

### Nginx Configuration
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Netlify (`public/_redirects`)
```text
/*    /index.html   200
```

### Apache (`.htaccess`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 6. Real Blockers & Owner Approvals Still Needed

In accordance with requirement precedence and evidence rules, the following items require owner review or corporate documentation before being certified for public claims:

1. **Corporate Legal Entity Name & Suffix:**
   - Stored in `site.json` under `legalNamePendingVerification`.
   - Needs official Certificate of Incorporation to confirm exact suffix (e.g., *TechnoHorizon Pvt. Ltd.* vs. *Techno Horizon*).
2. **Missing SVCG Logo Asset:**
   - The brief lists `SVCG (GUJARAT) - ./logos/` with no file name or asset provided.
   - Handled via an accessible, dignified text-only badge. Do not fabricate an unapproved logo.
3. **Third-Party Client Marks & Display Rights:**
   - All 15 supplied logos are cataloged in `src/data/clients.json` with `approvedForDisplay: true` and `logoApproved: true` (or `false` for SVCG).
   - Owner/Legal team must formally verify marketing display rights for state government seals and partner marks.
4. **Archival Candidate Projects & Milestones:**
   - 3 archival projects and 1 historical milestone from earlier profile records are preserved in `projects.json` and `history.json` with `published: false` and `verificationStatus: "pending"`.
   - These remain quarantined from public case study search until certified.
5. **Capability Deck File:**
   - The PRD lists a "Download Capability Deck" CTA. In accordance with strict rules against broken links, this action links to a formal inquiry route (`/contact?inquiry=capability-deck`) until an approved PDF asset is placed into `public/assets/capability-deck/`.
6. **Backend CRM / Tender Upload Integration:**
   - Forms currently generate clean, safely encoded `mailto:contact@technohorizon.co.in` messages and provide 1-click clipboard copy fallbacks.
   - If automated server-side CRM ingestion or encrypted file uploads are required, an authenticated backend endpoint must be provided via `VITE_LEAD_DISPATCH_ENDPOINT`.
