import { contactEmail } from "@/content/site";

export type LegalBlock = string | string[];

export interface LegalSection {
  heading: string;
  body: LegalBlock[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  lead: string;
  effective: string;
  sections: LegalSection[];
}

export const privacy: LegalDocument = {
  eyebrow: "Privacy",
  title: "Privacy policy",
  lead: "We collect as little as we can, we never sell it, and this page says exactly what happens to what we do collect.",
  effective: "September 19, 2026",
  sections: [
    {
      heading: "Who we are",
      body: [
        `Oasis Creative Studios is a creative studio based in Connecticut, United States. This policy covers oasisagency.is. Questions go to ${contactEmail}.`,
      ],
    },
    {
      heading: "What we collect",
      body: [
        "Three things, and only these three.",
        [
          "Contact form. When you write to us we receive your name, email address, the service you are asking about, and your message.",
          "Analytics. We use Umami, a privacy-focused analytics tool that does not use cookies and does not identify you. It records the page you visited, the page that referred you, your browser, operating system, device type, and country. Your IP address is not stored.",
          "Hosting logs. The site is served by GitHub Pages. GitHub may log connection data such as IP addresses under its own privacy statement.",
        ],
        "We do not run advertising, retargeting, social media pixels, or any cross-site tracking.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "Contact details are used to reply to you and to carry on the conversation you started. Analytics tell us which pages people read so we can improve the site. That is the whole list.",
        "We do not sell personal information and we do not share it for anyone else's marketing.",
      ],
    },
    {
      heading: "Who handles it on our behalf",
      body: [
        [
          "Formspree processes contact form submissions and forwards them to our inbox. Submissions are held on Formspree's servers for a limited period, currently 30 days, before they are removed.",
          "Umami hosts our analytics dashboard. The data it holds is aggregate and anonymous.",
          "GitHub hosts the site.",
        ],
        "Each of these providers is bound by its own privacy policy and receives only what it needs to do its job.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Messages you send us stay in our email for as long as the conversation is live and for reasonable business record-keeping afterward. Ask us to delete a message and we will, unless we are required to keep it.",
        "Analytics data is retained by Umami for up to six months.",
      ],
    },
    {
      heading: "Cookies and Do Not Track",
      body: [
        "This site sets no cookies and stores nothing in your browser, which is why there is no cookie banner. Our analytics do not track you across sites, so a Do Not Track signal from your browser is honored by default.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Wherever you live, you can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will respond within 30 days. We will not treat you differently for asking.",
        "Residents of California, the European Economic Area, and the United Kingdom have additional rights under local law, including the right to lodge a complaint with a supervisory authority. The same email address is the place to start.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site is for organizations and the adults who run them. We do not knowingly collect information from anyone under 13. If you believe a child has sent us information, email us and we will delete it.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "We link to YouTube and to client sites we have built. Those sites have their own policies and we are not responsible for them.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "When this policy changes we update this page and the effective date at the top. If a change affects how we handle information you have already given us, we will email you before it takes effect.",
      ],
    },
    {
      heading: "Governing law",
      body: ["This policy is governed by the laws of the State of Connecticut."],
    },
  ],
};

export const accessibility: LegalDocument = {
  eyebrow: "Accessibility",
  title: "Accessibility statement",
  lead: "We build websites for a living. Ours should work for everyone, and when it doesn't we want to hear about it.",
  effective: "September 19, 2026",
  sections: [
    {
      heading: "Our standard",
      body: [
        "Oasis Creative Studios aims for this site to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. That is the same standard we design and build to for clients.",
      ],
    },
    {
      heading: "What we have done",
      body: [
        [
          "Every page can be navigated and operated with a keyboard alone, with a visible focus indicator and a skip link to the main content.",
          "Headings, landmarks, lists, and form labels are real HTML, so screen readers get the structure, not just the words.",
          "Text and interface colors meet or exceed the 4.5:1 contrast ratio for body text and 3:1 for large text and controls.",
          "Images that carry meaning have descriptive alternative text. Decorative graphics are hidden from assistive technology.",
          "Motion respects your system's reduced-motion setting. Reveals render in their final state, the ticker stops, and the hero shows a still image.",
          "The layout reflows down to 320 pixels wide and text can be resized to 200 percent without loss of content.",
          "Form errors and confirmations are announced to screen readers.",
        ],
      ],
    },
    {
      heading: "Known limitations",
      body: [
        [
          "The promotional video on the Work page does not yet have captions or a transcript. We are producing them and will replace the file when they are ready.",
        ],
      ],
    },
    {
      heading: "How we test",
      body: [
        "We check each release with keyboard-only navigation, VoiceOver on macOS and iOS, and automated audits in Lighthouse and axe. We test in current versions of Safari, Chrome, Firefox, and Edge.",
      ],
    },
    {
      heading: "Tell us what is broken",
      body: [
        `If any part of this site is hard to use, email ${contactEmail} with the page and what happened. We reply within two business days and treat accessibility bugs as priority fixes.`,
      ],
    },
  ],
};
