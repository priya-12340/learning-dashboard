'use client'
import { motion } from 'framer-motion'
import { Home, BookOpen, BarChart2, Settings, ChevronLeft } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        animate={{ width: collapsed ? 64 : 220 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="hidden md:flex bg-gray-900 border-r border-gray-800 flex-col p-4 gap-2 relative min-h-screen"
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 bg-gray-800 rounded-full p-1 border border-gray-700"
        >
          <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
            <ChevronLeft size={14} className="text-gray-400" />
          </motion.div>
        </button>

        {!collapsed && (
          <h2 className="text-purple-400 font-bold text-lg mb-4 px-2">LearnOS</h2>
        )}

        {navItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg relative ${
              active === item.label ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {active === item.label && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-purple-500/20 rounded-lg border border-purple-500/30"
              />
            )}
            <item.icon size={18} />
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around p-3 z-50">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex flex-col items-center gap-1 ${
              active === item.label ? 'text-purple-400' : 'text-gray-400'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}