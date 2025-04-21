'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BeakerIcon, BookOpenIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    name: 'Study Material',
    description: 'Comprehensive study materials for Biology, Physics, and Chemistry',
    icon: BookOpenIcon,
    href: '/resources/neet-materials',
  },
  {
    name: 'Mock Tests',
    description: 'Practice with NEET pattern questions and full-length tests',
    icon: ClockIcon,
    href: '/mock-tests/neet',
  },
  {
    name: 'Mentorship',
    description: 'Get guidance from experienced medical professionals',
    icon: UserGroupIcon,
    href: '/mentorship',
  },
  {
    name: 'Practical Tips',
    description: 'Important topics, strategies, and time management tips',
    icon: BeakerIcon,
    href: '/resources/neet-tips',
  },
]

const examInfo = {
  overview: {
    title: 'About NEET',
    description: 'National Eligibility cum Entrance Test (NEET) is the uniform entrance examination for admission to medical courses across India.',
    key_points: [
      'Conducted by National Testing Agency (NTA)',
      'Single window for medical admissions',
      'Tests Biology, Physics, and Chemistry',
      'Offline pen-and-paper based exam',
      'Required for MBBS, BDS, AYUSH, and other medical courses',
    ],
  },
  syllabus: {
    title: 'Exam Pattern',
    sections: [
      {
        name: 'Physics',
        topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Electricity & Magnetism', 'Modern Physics'],
        questions: 45,
      },
      {
        name: 'Chemistry',
        topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
        questions: 45,
      },
      {
        name: 'Biology',
        topics: ['Zoology', 'Botany', 'Human Physiology', 'Genetics', 'Ecology'],
        questions: 90,
      },
    ],
  },
}

export default function NEETPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              NEET Preparation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Your gateway to medical education in India. Get comprehensive preparation materials,
              expert guidance, and practice resources to crack NEET with confidence.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/mock-tests/neet"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Take Mock Test
              </Link>
              <Link
                href="/resources/neet-materials"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Study Materials <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Exam Overview */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {examInfo.overview.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {examInfo.overview.description}
          </p>
          <ul className="mt-8 space-y-4">
            {examInfo.overview.key_points.map((point, i) => (
              <li
                key={i}
                className="flex gap-x-3 text-gray-600 dark:text-gray-300"
              >
                <span className="text-blue-600">•</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Syllabus section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {examInfo.syllabus.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {examInfo.syllabus.sections.map((section) => (
              <div
                key={section.name}
                className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {section.questions} questions
                </p>
                <ul className="mt-4 space-y-2">
                  {section.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resources section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Study Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Prepare with Confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Access comprehensive study materials, practice tests, and expert guidance
            designed specifically for NEET aspirants.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <resource.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {resource.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{resource.description}</p>
                  <p className="mt-6">
                    <Link href={resource.href} className="text-sm font-semibold leading-6 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 