'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useSplashStore } from '@/hooks/useSplashStore'

export const SplashScreen = () => {
  const MIN_DURATION = 2000
  const [show, setShow] = useState(true)
  const [minimumTimePassed, setMinimumTimePassed] = useState(false)

  const finish = useSplashStore((s) => s.finish)

  useEffect(() => {
    const timer = setTimeout(() => setMinimumTimePassed(true), MIN_DURATION)

    const handleLoaded = () => {
      if (minimumTimePassed) setShow(false)
    }

    window.addEventListener('load', handleLoaded)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoaded)
    }
  }, [minimumTimePassed])

  useEffect(() => {
    if (minimumTimePassed && document.readyState === 'complete') {
      setShow(false)
    }
  }, [minimumTimePassed])

  return (
    <AnimatePresence
      onExitComplete={() => {
        finish()
      }}
    >
      {show && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: 40,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{
              opacity: 0,
              y: 40,
              transition: { duration: 0.6, ease: 'easeInOut' }
            }}
          >
            <svg width="260" height="140" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
              <motion.text
                x="50%"
                y="42%"
                textAnchor="middle"
                fontSize="36"
                fontWeight="700"
                fill="#00A8CC"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.5, ease: 'easeOut' }
                }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                Meal <tspan fill="#44BBA5">Up</tspan>
              </motion.text>

              <motion.path
                d="M20 80 C 70 120, 130 120, 180 80"
                stroke="url(#mealupGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{
                  opacity: 0,
                  pathLength: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                transition={{
                  duration: 1.1,
                  ease: 'easeInOut',
                  delay: 0.3
                }}
              />

              <defs>
                <linearGradient id="mealupGradient" x1="20" y1="120" x2="180" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A8CC" />
                  <stop offset="0.764423" stopColor="#44BBA5" stopOpacity="0.3" />
                  <stop offset="0.9999" stopColor="#F29240" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
