'use client'
import { motion } from 'framer-motion'
import { BookOpen, Code, Palette, Layers } from 'lucide-react'
import { Course } from '@/lib/supabase'

const iconMap: { [key: string]: any } = {
  BookOpen, Code, Palette, Layers
}

export default function CourseCard({ course, index }: { course: Course, index: number }) {
  const Icon = iconMap[course.icon_name] || BookOpen

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Icon className="text-purple-400" size={20} />
        </div>
        <h3 className="text-white font-semibold text-sm">{course.title}</h3>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-purple-500 h-2 rounded-full"
        />
      </div>
      <p className="text-gray-400 text-xs mt-2">{course.progress}% complete</p>
    </motion.article>
  )
}