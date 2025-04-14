'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpenIcon, ClockIcon, AcademicCapIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    name: 'Previous Year Papers',
    description: 'Practice with actual JEE Main and Advanced papers from past years',
    icon: DocumentTextIcon,
    href: '/resources/jee-papers',
  },
  {
    name: 'Study Material',
    description: 'Comprehensive study materials covering all JEE topics',
    icon: BookOpenIcon,
    href: '/resources/jee-materials',
  },
  {
    name: 'Mock Tests',
    description: 'Take full-length mock tests with detailed analysis',
    icon: ClockIcon,
    href: '/mock-tests/jee',
  },
  {
    name: 'Top Colleges',
    description: 'Explore top engineering colleges accepting JEE scores',
    icon: AcademicCapIcon,
    href: '/colleges',
  },
]

const examInfo = {
  main: {
    title: 'JEE Main',
    description: 'Joint Entrance Examination (Main) is an all-India test for admission to various technical undergraduate programs.',
    key_points: [
      'Conducted by National Testing Agency (NTA)',
      'Multiple sessions throughout the year',
      'Computer-based test format',
      'Tests Physics, Chemistry, and Mathematics',
      'Gateway to NITs, IIITs, and other top engineering colleges',
    ],
  },
  advanced: {
    title: 'JEE Advanced',
    description: 'JEE Advanced is the qualifying exam for admission to the prestigious Indian Institutes of Technology (IITs).',
    key_points: [
      'Conducted by IITs',
      'Eligibility: Top 2,50,000 JEE Main qualifiers',
      'Two papers on the same day',
      'More challenging than JEE Main',
      'Gateway to all 23 IITs across India',
    ],
  },
}

export default function JEEPage() {
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
              JEE Preparation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive preparation guide for JEE Main and Advanced. Access study materials,
              mock tests, and expert guidance to crack India's premier engineering entrance exam.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/mock-tests/jee"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start Practice
              </Link>
              <Link
                href="/mentorship"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Get Mentorship <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Exam Information */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {[examInfo.main, examInfo.advanced].map((exam, index) => (
            <motion.div
              key={exam.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pr-8 lg:pt-4"
            >
              <div className="lg:max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                  {exam.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {exam.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {exam.key_points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-blue-600">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resources section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Study Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Access comprehensive study materials, practice tests, and resources
            designed to help you achieve your best in JEE.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
                      Access Now <span aria-hidden="true">→</span>
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