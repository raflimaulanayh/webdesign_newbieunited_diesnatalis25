'use client'

import { FAQ_DATA } from '@/constants/faq-data'
import { motion, Variants } from 'framer-motion'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/ui/accordion'
import { Container } from '@/components/templates/container'

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20
    }
  }
}

export const FAQSection = () => {
  return (
    <section className="py-10 pb-20! lg:py-16">
      <Container className="flex max-w-3xl! flex-col gap-10 lg:gap-14">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex flex-wrap justify-center gap-2 text-2xl font-bold text-slate-800 max-sm:w-10/12 sm:text-3xl lg:text-4xl"
        >
          FAQ Mitra
          <span className="text-primary">Meal Up</span>
        </motion.h2>

        <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-5 lg:space-y-6">
            {FAQ_DATA.map((item, index) => (
              <motion.div key={index} variants={itemVariants} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <AccordionItem
                  value={item.question}
                  className="rounded-xl border border-slate-400 px-6 py-2 transition-all hover:border-primary/50 hover:bg-slate-50"
                >
                  <AccordionTrigger className="text-start font-semibold text-slate-800 md:text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-justify text-slate-700">
                    <article dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  )
}
