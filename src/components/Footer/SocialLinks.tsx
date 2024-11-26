import { Twitter, MessageCircle, Send } from 'lucide-react';

const socialLinks = [
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: MessageCircle, href: '#', label: 'Reddit' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}