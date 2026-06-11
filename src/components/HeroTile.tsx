'use client'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-gradient-to-br from-purple-900/50 to-gray-900 rounded-2xl p-8 border border-purple-500/20 col-span-2"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm mb-1">Welcome back,</p>
          <h1 className="text-white text-3xl font-bold">Priya</h1>
          <p className="text-gray-400 mt-2">Continue your learning journey</p>
        </div>
        <div className="flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full border border-orange-500/30">
          <Flame className="text-orange-400" size={18} />
          <span className="text-orange-400 font-bold">7 day streak</span>
        </div>
      </div>
    </motion.section>
  )
}