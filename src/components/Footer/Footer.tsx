import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Moonex" className="h-8 w-8" />
            <span className="font-display font-bold text-xl">Moonex</span>
          </div>
          <FooterLinks />
          <SocialLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-gray-400 font-body text-sm">
          © {new Date().getFullYear()} Moonex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}