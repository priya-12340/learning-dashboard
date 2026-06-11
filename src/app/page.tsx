import { supabase } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'

export default async function Home() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')

  if (error) {
    console.error(error)
  }

  return (
    <main className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <HeroTile />
          <ActivityTile />
          {courses?.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}