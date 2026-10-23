import servicesData from '../data/services.json';
import sectorsData from '../data/sectors.json';
import clientsData from '../data/clients.json';
import projectsData from '../data/projects.json';
import historyData from '../data/history.json';
import insightsData from '../data/insights.json';
import faqData from '../data/faq.json';
import siteData from '../data/site.json';
import metricsData from '../data/metrics.json';
import leadsRoutingData from '../data/leads-routing.json';

export const getSiteConfig = () => siteData;

export const getAllServices = () => servicesData.filter(s => s.published !== false);

export const getServiceBySlug = (slug) => {
  return servicesData.find(s => s.slug === slug || s.id === slug);
};

export const getAllSectors = () => sectorsData;

export const getSectorBySlug = (slug) => {
  return sectorsData.find(s => s.slug === slug || s.id === slug);
};

export const getAllClients = () => clientsData;

export const getApprovedDisplayClients = () => {
  return clientsData.filter(c => c.approvedForDisplay === true && c.id !== 'techno-horizon');
};

export const getAllProjects = () => projectsData;

export const getPublishedProjects = () => {
  return projectsData.filter(p => p.published === true);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(p => p.slug === slug);
};

export const getHistoryMilestones = () => {
  return historyData.filter(h => h.published === true);
};

export const getAllInsights = () => {
  return insightsData.filter(i => i.published === true);
};

export const getInsightBySlug = (slug) => {
  return insightsData.find(i => i.slug === slug);
};

export const getFaqs = () => faqData;

export const getMetrics = () => metricsData;

export const getLeadsRouting = () => leadsRoutingData;
