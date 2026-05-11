'use client'

import { WhatsAppButton } from '@/components/WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const tiers = [
  {
    id: 'minor',
    name: 'Minor',
    price: 'Rp 150k',
    unit: '/hour',
    description: 'For Minor UI tweaks and minor integrations & updates that does not consume much resources or creating a layers of complexity code',
    features: [
      'Text content updates',
      'Image replacements',
      'Minor UI tweaks',
      'Simple form integrations',
      'Simple database updates/integrations',
    ],
  },
  {
    id: 'major',
    name: 'Major',
    price: 'Rp 250k',
    unit: '/hour',
    description: 'For adding new pages, add new feature development, security updates and much more complex integrations thar requires more resources to be done, but still not a full custom build',
    features: [
      'New page creation',
      'Feature development',
      'Security updates',
      'Complex integrations',
      'SEO optimization',
      'Major database updates/integrations',
      'Database design & setup',
    ],
  },
  {
    id: 'project',
    name: 'Project',
    price: 'Custom',
    unit: 'enquiry-based',
    description: 'Full custom builds, complex systems development, and large scale projects that requires a full custom solution, with a dedicated support and timeline based on the scope of the project',
    features: [
      'Full custom development',
      'Database design & setup',
      'API integration',
      'Advanced features',
      'Dedicated support',
      'Timeline based on scope',
    ],
  },
]

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6289123456789'

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<string>('major')
  const [expandedMobile, setExpandedMobile] = useState<string>('major')

  const toggleMobileExpand = (id: string) => {
    setExpandedMobile(expandedMobile === id ? '' : id)
  }

  return (
    <main className="min-h-screen bg-black text-white py-16 px-4">
      <WhatsAppButton />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Personal Freelance <span className="text-amber-500">Rate Card</span>
          </h1>
          <p className="text-xl text-white">
            For web maintenance, development and projects.
          </p>
        </motion.div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Tier List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {tiers.map((tier) => (
              <motion.button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                whileHover={{ x: 8 }}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-2 ${
                  selectedTier === tier.id
                    ? 'border-amber-500 bg-amber-500/5'
                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-500">{tier.price}</span>
                  <span className="text-white text-sm">{tier.unit}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Detailed Info */}
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10"
          >
            {tiers
              .filter((t) => t.id === selectedTier)
              .map((tier) => (
                <div key={tier.id}>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-3">{tier.name}</h2>
                    <p className="text-white text-lg">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-10">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                      What's Included
                    </h3>
                    {tier.features.map((feature, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20your%20${tier.name}%20tier%20service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-500 text-black font-bold py-4 rounded-lg hover:bg-amber-400 transition-all text-center"
                  >
                    Get Started
                  </motion.a>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="md:hidden space-y-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Tier Button */}
              <motion.button
                onClick={() => toggleMobileExpand(tier.id)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-2 flex justify-between items-center ${
                  expandedMobile === tier.id
                    ? 'border-amber-500 bg-amber-500/5'
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-amber-500">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.unit}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedMobile === tier.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-amber-500" />
                </motion.div>
              </motion.button>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedMobile === tier.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-t-0 border-amber-500/30 rounded-b-lg p-6">
                      <p className="text-gray-400 mb-6">{tier.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                          What's Included
                        </h4>
                        {tier.features.map((feature, i) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.03 }}
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20your%20${tier.name}%20tier%20service`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-amber-500 text-black font-bold py-3 rounded-lg hover:bg-amber-400 transition-all text-center"
                      >
                        Get Started
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Working Arrangement Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 pt-12 mt-12"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-amber-500 mb-4">📝 Work Arrangement</h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">•</span>
                <span><strong>Flexible Timeline:</strong> Project timelines and deadlines are always discussed upfront based on scope and your needs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">•</span>
                <span><strong>Freelance Basis:</strong> I work on a freelance basis — no fixed 9–5, so I'm often available outside standard office hours</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">•</span>
                <span><strong>Working Hours:</strong> I'm based in GMT+8 (UTC +8) and typically work evenings and outside of standard business hours</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">•</span>
                <span><strong>Weekend Work:</strong> Available on weekends but limited to night hours only</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center mb-16"
        >
          <p className="text-gray-400">
            Not sure which tier? <span className="text-amber-500 font-semibold">Chat via WhatsApp</span>
          </p>
        </motion.div>
        
      </div>
    </main>
  )
}
