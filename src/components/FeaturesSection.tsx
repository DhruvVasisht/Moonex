import { motion } from 'framer-motion';
import { DollarSign, Shield, Ban, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: DollarSign,
    title: 'Cheapest TXs',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Shield,
    title: 'CerTIK',
    description: 'We are Audited by Certik. CertiK is the leading security-focused ranking platform to analyze and monitor blockchain protocols and DeFi projects',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Ban,
    title: 'No Contract Sells',
    description: 'No contract sells to rug the marketing wallets',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Layers,
    title: 'CrossDex Support',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,200,0,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-display text-sm mb-4">
            <Shield className="w-4 h-4" />
            Audited & Secure
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Our <span className="text-primary relative">
              Features
              <motion.div
                className="absolute -right-6 top-0 w-5 h-5 text-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Experience the next generation of decentralized trading with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-border/50`}
            >
              <div className="absolute inset-0 bg-background/90 rounded-xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 font-body text-sm mb-4">{feature.description}</p>
                <Button variant="ghost" size="sm" className="group">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="group">
            Start Trading Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}