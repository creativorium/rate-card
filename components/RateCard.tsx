'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Tier {
  name: string
  price: string
  description: string
  features: string[]
  badge?: string | null
  highlighted?: boolean
}

interface RateCardProps {
  tier: Tier
  index: number
}

export function RateCard({ tier, index }: RateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative rounded-2xl p-8 transition-all duration-300 ${
          tier.highlighted
            ? 'bg-white shadow-2xl ring-2 ring-blue-500'
            : 'bg-white shadow-lg hover:shadow-xl'
        }`}
      >
        {/* Badge */}
        {tier.badge && (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {tier.badge}
            </span>
          </motion.div>
        )}

        {/* Content */}
        <div className="pt-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
          <p className="text-sm text-slate-600 mb-6">{tier.description}</p>

          {/* Price */}
          <div className="mb-8">
            <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
            {tier.price !== 'Custom' && (
              <span className="text-slate-600 ml-2">per update</span>
            )}
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20your%20${tier.name}%20tier%20service`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 rounded-lg font-semibold text-center transition-all mb-8 ${
              tier.highlighted
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
            }`}
          >
            Get Started
          </motion.a>

          {/* Features */}
          <div className="space-y-4">
            {tier.features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                key={i}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
