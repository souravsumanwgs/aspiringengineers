'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline'

const colleges = {
  engineering: [
    {
      name: "Indian Institute of Technology, Bombay",
      location: "Mumbai, Maharashtra",
      description: "One of the premier engineering institutions known for its excellence in technology and research.",
      ranking: 1,
      seats: 1000,
      exams: ["JEE Advanced"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
    {
      name: "Indian Institute of Technology, Delhi",
      location: "New Delhi",
      description: "Renowned for its cutting-edge research and world-class education in engineering and technology.",
      ranking: 2,
      seats: 850,
      exams: ["JEE Advanced"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
    {
      name: "Jadavpur University",
      location: "Kolkata, West Bengal",
      description: "Top-ranked state university known for its engineering and technology programs.",
      ranking: 8,
      seats: 600,
      exams: ["WBJEE"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
  ],
  medical: [
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      description: "India's premier medical institution offering world-class medical education and healthcare.",
      ranking: 1,
      seats: 125,
      exams: ["NEET"],
      image: "https://images.unsplash.com/photo-1631557676757-fca5c2ccb3c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
    {
      name: "Christian Medical College",
      location: "Vellore, Tamil Nadu",
      description: "One of the top medical colleges known for its excellent medical education and research.",
      ranking: 2,
      seats: 100,
      exams: ["NEET"],
      image: "https://images.unsplash.com/photo-1631557676757-fca5c2ccb3c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
    {
      name: "Armed Forces Medical College",
      location: "Pune, Maharashtra",
      description: "Premier medical institution training medical officers for the Indian Armed Forces.",
      ranking: 3,
      seats: 150,
      exams: ["NEET"],
      image: "https://images.unsplash.com/photo-1631557676757-fca5c2ccb3c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
    },
  ],
} as const;

export default function CollegesPage() {
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
              Top Colleges
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore India&apos;s top engineering and medical colleges. Get detailed information
              about rankings, courses, and admission criteria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Engineering Colleges section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Top Engineering Colleges
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.engineering.map((college, index) => (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="relative flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <div className="relative h-48">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium text-white">Rank #{college.ranking}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{college.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.location}
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <UsersIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.seats} seats
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.exams.join(", ")}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      {college.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/colleges/${college.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Medical Colleges section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Top Medical Colleges
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.medical.map((college, index) => (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="relative flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <div className="relative h-48">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium text-white">Rank #{college.ranking}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{college.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.location}
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <UsersIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.seats} seats
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-600" />
                      {college.exams.join(", ")}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      {college.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/colleges/${college.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 