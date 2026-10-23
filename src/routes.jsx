import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Clients from './pages/Clients';
import Approach from './pages/Approach';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import RequestProposal from './pages/RequestProposal';
import ScheduleConsultation from './pages/ScheduleConsultation';
import RequestTraining from './pages/RequestTraining';
import SubmitRfp from './pages/SubmitRfp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 01. Home */}
      <Route path="/" element={<Home />} />

      {/* 02. About */}
      <Route path="/about" element={<About />} />

      {/* 03. Journey */}
      <Route path="/about/our-journey" element={<Journey />} />

      {/* 04. Services Overview */}
      <Route path="/services" element={<Services />} />

      {/* 05 - 08. Individual Service Domains */}
      <Route
        path="/services/software-it-solutions"
        element={<ServiceDetail forcedSlug="software-it-solutions" />}
      />
      <Route
        path="/services/business-consultancy"
        element={<ServiceDetail forcedSlug="business-consultancy" />}
      />
      <Route
        path="/services/training-skill-development"
        element={<ServiceDetail forcedSlug="training-skill-development" />}
      />
      <Route
        path="/services/manpower-solutions"
        element={<ServiceDetail forcedSlug="manpower-solutions" />}
      />
      <Route path="/services/:slug" element={<ServiceDetail />} />

      {/* 09 - 11. Sectors Overview & Details */}
      <Route path="/sectors" element={<Sectors />} />
      <Route
        path="/sectors/government-public-sector"
        element={<SectorDetail forcedSlug="government-public-sector" />}
      />
      <Route
        path="/sectors/private-enterprise"
        element={<SectorDetail forcedSlug="private-enterprise" />}
      />
      <Route path="/sectors/:slug" element={<SectorDetail />} />

      {/* 12 - 13. Projects Library & Detail */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />

      {/* 14. Clients */}
      <Route path="/clients" element={<Clients />} />

      {/* 15. Delivery Approach */}
      <Route path="/approach" element={<Approach />} />

      {/* 16 - 17. Insights & Article Detail */}
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightDetail />} />

      {/* 18. Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* 19. Request a Proposal */}
      <Route path="/request-proposal" element={<RequestProposal />} />

      {/* 20. Schedule Consultation */}
      <Route path="/schedule-consultation" element={<ScheduleConsultation />} />

      {/* 21. Request Training */}
      <Route path="/request-training" element={<RequestTraining />} />

      {/* 22. Submit RFP / Tender Info */}
      <Route path="/submit-rfp" element={<SubmitRfp />} />

      {/* 23. Privacy Policy Framework */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* 24. Terms Framework */}
      <Route path="/terms" element={<Terms />} />

      {/* 25. Accessibility Statement */}
      <Route path="/accessibility" element={<Accessibility />} />

      {/* 26. Wildcard 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
