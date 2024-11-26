import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';

const features = [
  { icon: Sparkles, text: "Lowest Fees" },
  { icon: Shield, text: "Audited by CertiK" },
  { icon: Rocket, text: "Lightning Fast" },
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="star absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-display text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Now Live on Multiple Chains
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight"
          >
            Trusted Multi-Chain
            <motion.span 
              className="block text-primary relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              DEX Platform
              <motion.div
                className="absolute -right-8 top-0 w-6 h-6 text-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl font-body text-gray-400 max-w-3xl mx-auto"
          >
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg group">
              Connect Wallet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg">
              Trade Crypto
            </Button>
          </motion.div>

          {/* Feature badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>
    </div>
  );
}