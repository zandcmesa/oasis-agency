export const products = [
  "Websites",
  "AI agent workers & teams",
  "Digital presence strategy",
  "Social media content",
  "Promotional video",
];

export const hero = {
  eyebrow: "Oasis Creative Studios",
  headline: "Cutting-edge tech + design for ambitious brands",
  sub: "Websites, AI agent teams, strategy, content, and video. One team that actually builds.",
};

export const about = {
  eyebrow: "Who we are",
  headline: "Design that holds up. Engineering that ships.",
  body: "Oasis is a creative studio with real product and engineering depth. Nearly two decades designing and building for the biggest brands in tech, now pointed at ambitious businesses that need more than a template.",
  loveLine: "We love helping churches, ministries, and non-profits.",
  brands: ["Google", "HubSpot", "TJX"],
  cta: { label: "How we work", href: "/how-we-work" },
};

export interface Service {
  number: string;
  title: string;
  copy: string;
  image?: string;
  alt?: string;
  href: string;
  tags?: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    copy: "Custom Next.js, headless, fast. Not a template shop.",
    image: "/work/cornerstone-site-home.jpg",
    alt: "Cornerstone Church website homepage",
    href: "/contact",
  },
  {
    number: "02",
    title: "AI agent workers & teams",
    copy: "Named workers that do real jobs. After-Hours Catcher and Front Desk SMS are the beauty pack.",
    tags: ["After-Hours Catcher", "Front Desk SMS", "Beauty pack"],
    href: "/contact",
  },
  {
    number: "03",
    title: "Digital presence strategy",
    copy: "SEO, AI search, and the plan behind all of it.",
    tags: ["SEO", "AI search", "Consulting"],
    href: "/contact",
  },
  {
    number: "04",
    title: "Social media content",
    copy: "Strategy and execution. On-brand, on schedule.",
    image: "/work/cornerstone-clip-01.jpg",
    alt: "Cornerstone Church sermon clip",
    href: "/contact",
  },
  {
    number: "05",
    title: "Promotional video",
    copy: "B-roll production with premium craft.",
    image: "/work/foster-the-city-still.jpg",
    alt: "Foster the City promotional video still",
    href: "/contact",
  },
];

export const statement =
  "Most agencies hand you a template and hit a wall the first time you need something real. We build the thing.";

export const metrics = [
  { value: 19, suffix: "+", label: "Years", detail: "In tech and design, shipping product at scale." },
  { value: 3, label: "Global brands", detail: "Google, HubSpot, and TJX. We've built for the biggest." },
  { value: 5, label: "Product lines", detail: "Web, AI agents, strategy, content, video. One team." },
];

export const ctaBand = {
  headline: "Ready to build?",
  cta: { label: "Start a project", href: "/contact" },
};

export const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

export const testimonialsSample = [
  {
    quote: "Sample quote. Replace with a real client testimonial before this block ships on a live page.",
    name: "Client name",
    role: "Role, Organization",
  },
  {
    quote: "Sample quote. The card handles two to four lines at this size without breaking the grid.",
    name: "Client name",
    role: "Role, Organization",
  },
  {
    quote: "Sample quote. Keep it to one idea per testimonial.",
    name: "Client name",
    role: "Role, Organization",
  },
];
