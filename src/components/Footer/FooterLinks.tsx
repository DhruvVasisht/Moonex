import { Link } from '@/components/ui/link';

const links = [
  { label: 'About Us', href: '#' },
  { label: 'Roadmap', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-8">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-primary transition-colors font-body"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}