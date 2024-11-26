import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, Coins, Rocket, Timer } from 'lucide-react';

const comparisonPoints = [
  {
    title: 'Lightning Fast Trades',
    description: 'Execute trades in milliseconds',
    icon: Timer,
  },
  {
    title: 'Lowest Transaction Fees',
    description: 'Save more with our optimized fee structure',
    icon: Coins,
  },
  {
    title: 'Multi-Chain Support',
    description: 'Trade across multiple blockchains seamlessly',
    icon: Rocket,
  },
  {
    title: 'Enhanced Security',
    description: 'Audited by CertiK for maximum protection',
    icon: Shield,
  },
  {
    title: 'Instant Rewards',
    description: 'Earn rewards immediately after trading',
    icon: Zap,
  },
];

export function ComparisonSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,200,0,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Why Choose <span className="text-primary relative">
              MoonEX
              <motion.div
                className="absolute -right-6 top-0 w-5 h-5 text-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-body text-lg">
            Compare and see why traders choose us over others
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-[640px]"
          >
            <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-6 mb-8">
              <div className="font-display text-xl text-left">Features</div>
              <div className="flex items-center justify-center space-x-2 bg-secondary/30 backdrop-blur-sm rounded-lg py-3">
                <img src="/logo.svg" alt="Moonex" className="h-6 w-6" />
                <span className="font-display text-primary">MoonEX</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-secondary/30 backdrop-blur-sm rounded-lg py-3">
                <span className="font-display text-pink-500">UNISWAP</span>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-[1.5fr,1fr,1fr] gap-6 bg-secondary/10 backdrop-blur-sm rounded-lg p-4 hover:bg-secondary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/30">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-sm sm:text-base">{point.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-body">{point.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-1.5 rounded-full bg-green-500/10"
                    >
                      <Check className="text-green-500 w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className="flex justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-1.5 rounded-full bg-red-500/10"
                    >
                      <X className="text-red-500 w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}