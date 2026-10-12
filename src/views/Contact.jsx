import { BriefcaseBusiness, CodeXml, Mail, Phone } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { profile } from '../data/resume';

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, Icon: Phone },
  { label: 'GitHub', value: 'github.com/najanikhatoon25', href: profile.github, Icon: CodeXml },
  { label: 'LinkedIn', value: 'linkedin.com/in/najnisaikh', href: profile.linkedin, Icon: BriefcaseBusiness },
];

const Contact = () => (
  <PageLayout
    eyebrow="Contact"
    title="Let’s build something useful."
    description="I'm open to internships, junior developer opportunities and meaningful collaborations."
  >
    <div className="grid gap-4 sm:grid-cols-2">
      {contacts.map(({ label, value, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
          rel={label === 'GitHub' || label === 'LinkedIn' ? 'noreferrer' : undefined}
          className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-amber-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-200">
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span>
            <span className="mt-1 block break-all text-sm text-slate-200 group-hover:text-white">{value}</span>
          </span>
        </a>
      ))}
    </div>
    <a
      href={`mailto:${profile.email}`}
      className="mt-8 inline-flex rounded-full border border-amber-400/50 bg-amber-400/10 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
    >
      Get In Touch
    </a>
  </PageLayout>
);

export default Contact;
