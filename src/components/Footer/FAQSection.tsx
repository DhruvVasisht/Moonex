import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How do I get a Referral Code?',
    answer: 'You can get your referral code by connecting your wallet and visiting the referral section in your profile dashboard.',
  },
  {
    question: 'Do I get rewarded in tokens or ETH when I refer buyers?',
    answer: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!',
  },
  {
    question: 'What are the trading fees?',
    answer: 'Our trading fees are among the lowest in the industry, starting at just 0.1% per trade.',
  },
  {
    question: 'How secure is the platform?',
    answer: 'We employ industry-leading security measures and are audited by CertiK to ensure the safety of your assets.',
  },
];

export function FAQSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,200,0,0.05),transparent_25%)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            FA<span className="text-primary">Qs</span>
          </h2>
          <p className="text-gray-400 font-body">
            Everything you need to know about MoonEX
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={index}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg bg-secondary/30 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-display px-6 py-4 hover:bg-secondary/50 rounded-t-lg transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-body px-6 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}