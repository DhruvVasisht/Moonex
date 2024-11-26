import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Wallet, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#' },
  { 
    label: 'Products',
    href: '#',
    children: [
      { label: 'Exchange', href: '#' },
      { label: 'Liquidity', href: '#' },
      { label: 'Staking', href: '#' },
    ]
  },
  { label: 'About Us', href: '#' },
  { label: 'Roadmap', href: '#' },
  { label: 'FAQs', href: '#' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.svg" alt="Moonex" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-display font-bold text-primary">Moonex</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 font-body text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl"
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-secondary/50 transition-colors"
                        >
                          {child.label}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            <Button size="sm" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-body hover:bg-secondary/30 transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-secondary/30 transition-colors"
                        >
                          {child.label}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3">
                <Button className="w-full flex items-center justify-center gap-2">
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}