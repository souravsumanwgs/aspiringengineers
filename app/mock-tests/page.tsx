<<<<<<< HEAD
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const upcomingTests = [
  {
    id: 1,
    name: 'JEE Main Full Mock Test',
    date: '2024-04-15',
    time: '10:00 AM',
    duration: '3 hours',
    participants: 245,
    type: 'jee',
    url: 'https://forms.gle/example1',
  },
  {
    id: 2,
    name: 'NEET Full Length Test',
    date: '2024-04-18',
    time: '2:00 PM',
    duration: '3 hours 20 minutes',
    participants: 189,
    type: 'neet',
    url: 'https://forms.gle/example2',
  },
  {
    id: 3,
    name: 'WBJEE Mock Test Series',
    date: '2024-04-20',
    time: '11:00 AM',
    duration: '2 hours',
    participants: 156,
    type: 'wbjee',
    url: 'https://forms.gle/example3',
  },
  {
    id: 4,
    name: 'WBJEE PYQ Series',
    date: '2024-04-20',
    time: '11:00 AM',
    duration: '2 hours',
    participants: 156,
    type: 'wbjee',
    url: 'https://forms.gle/example4',
  },
]

const availableTests = {
  jee: [
    { id: 1, name: 'Physics - Mechanics', questions: 30, duration: '45 minutes' },
    { id: 2, name: 'Chemistry - Organic', questions: 30, duration: '45 minutes' },
    { id: 3, name: 'Mathematics - Calculus', questions: 30, duration: '45 minutes' },
    { id: 4, name: 'Full Mock Test 1', questions: 90, duration: '3 hours' },
  ],
  neet: [
    { id: 1, name: 'Biology - Human Physiology', questions: 45, duration: '1 hour' },
    { id: 2, name: 'Physics - Modern Physics', questions: 30, duration: '45 minutes' },
    { id: 3, name: 'Chemistry - Inorganic', questions: 30, duration: '45 minutes' },
    { id: 4, name: 'Full Mock Test 1', questions: 180, duration: '3 hours 20 minutes' },
  ],
  wbjee: [
    { id: 1, name: 'Mathematics - Algebra', questions: 25, duration: '40 minutes' },
    { id: 2, name: 'Physics - Electromagnetism', questions: 20, duration: '30 minutes' },
    { id: 3, name: 'Full Mock Test 1', questions: 115, duration: '2 hours' },
  ],
}

export default function MockTestsPage() {
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
              Mock Tests
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Practice with our comprehensive collection of mock tests designed to simulate
              the actual exam environment. Track your progress and improve your performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Tests section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Upcoming Live Tests
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {upcomingTests.map((test) => (
              <div
                key={test.id}
                className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {test.name}
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {new Date(test.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {test.time} • {test.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <UserGroupIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {test.participants} students enrolled
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={test.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Available Tests section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Practice Tests
          </h2>
          <div className="mt-8 space-y-16">
            {Object.entries(availableTests).map(([type, tests]) => (
              <div key={type} className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {type} Tests
                </h3>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                  {tests.map((test) => (
                    <div
                      key={test.id}
                      className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
                    >
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {test.name}
                      </h4>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {test.questions} questions
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Duration: {test.duration}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/mock-tests/${type}/${test.id}`}
                          className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          Start Test
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
=======
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const upcomingTests = [
  {
    id: 1,
    name: 'JEE Main Full Mock Test',
    date: '2024-04-15',
    time: '10:00 AM',
    duration: '3 hours',
    participants: 245,
    type: 'jee',
  },
  {
    id: 2,
    name: 'NEET Full Length Test',
    date: '2024-04-18',
    time: '2:00 PM',
    duration: '3 hours 20 minutes',
    participants: 189,
    type: 'neet',
  },
  {
    id: 3,
    name: 'WBJEE Mock Test Series',
    date: '2024-04-20',
    time: '11:00 AM',
    duration: '2 hours',
    participants: 156,
    type: 'wbjee',
  },
]

const availableTests = {
  jee: [
    { id: 1, name: 'Physics - Mechanics', questions: 30, duration: '45 minutes' },
    { id: 2, name: 'Chemistry - Organic', questions: 30, duration: '45 minutes' },
    { id: 3, name: 'Mathematics - Calculus', questions: 30, duration: '45 minutes' },
    { id: 4, name: 'Full Mock Test 1', questions: 90, duration: '3 hours' },
  ],
  neet: [
    { id: 1, name: 'Biology - Human Physiology', questions: 45, duration: '1 hour' },
    { id: 2, name: 'Physics - Modern Physics', questions: 30, duration: '45 minutes' },
    { id: 3, name: 'Chemistry - Inorganic', questions: 30, duration: '45 minutes' },
    { id: 4, name: 'Full Mock Test 1', questions: 180, duration: '3 hours 20 minutes' },
  ],
  wbjee: [
    { id: 1, name: 'Mathematics - Algebra', questions: 25, duration: '40 minutes' },
    { id: 2, name: 'Physics - Electromagnetism', questions: 20, duration: '30 minutes' },
    { id: 3, name: 'Full Mock Test 1', questions: 115, duration: '2 hours' },
  ],
}

export default function MockTestsPage() {
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
              Mock Tests
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Practice with our comprehensive collection of mock tests designed to simulate
              the actual exam environment. Track your progress and improve your performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Tests section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Upcoming Live Tests
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {upcomingTests.map((test) => (
              <div
                key={test.id}
                className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {test.name}
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {new Date(test.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {test.time} • {test.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <UserGroupIcon className="h-5 w-5 mr-2 text-blue-600" />
                    {test.participants} students enrolled
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/mock-tests/${test.type}/${test.id}`}
                    className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Available Tests section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Practice Tests
          </h2>
          <div className="mt-8 space-y-16">
            {Object.entries(availableTests).map(([type, tests]) => (
              <div key={type} className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {type} Tests
                </h3>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                  {tests.map((test) => (
                    <div
                      key={test.id}
                      className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
                    >
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {test.name}
                      </h4>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {test.questions} questions
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Duration: {test.duration}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/mock-tests/${type}/${test.id}`}
                          className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          Start Test
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
>>>>>>> b3d5c6612c314649fdb20cf2039ecb621efabfc7
} 