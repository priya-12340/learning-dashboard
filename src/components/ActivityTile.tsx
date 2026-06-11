'use client'
import { motion } from 'framer-motion'

const activityData = [4, 2, 7, 5, 8, 3, 6, 9, 4, 7, 5, 8, 6, 3]

export default function ActivityTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
    >
      <h3 className="text-white font-semibold mb-4">Activity</h3>
      <div className="flex items-end gap-1 h-20">
        {activityData.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${(value / 10) * 100}%` }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="flex-1 bg-purple-500/60 rounded-sm hover:bg-purple-400 transition-colors"
          />
        ))}
      </div>
      <p className="text-gray-400 text-xs mt-3">Last 14 days</p>
    </motion.section>
  )
}