"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Play, Download, Search, Filter, Globe, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { CHURCH_INFO } from "@/lib/constants"

const sermons = [
  {
    id: 1,
    title: "Kutembea katika Imani",
    englishTitle: "Walking in Faith",
    speaker: "Mchungaji James Mwangi",
    date: "Mei 15, 2025",
    duration: "45 dakika",
    category: "Imani",
    videoUrl: "/sermons/faith.mp4",
    thumbnailUrl: "/sermons/faith-thumb.jpg",
    description: "Jifunze jinsi ya kuimarisha imani yako na kuamini ahadi za Mungu.",
    englishDescription: "Learn how to strengthen your faith and trust in God's promises.",
    language: "Swahili"
  },
  {
    id: 2,
    title: "Nguvu ya Maombi",
    englishTitle: "The Power of Prayer",
    speaker: "Mchungaji Sarah Ochieng",
    date: "Mei 8, 2025",
    duration: "38 dakika",
    category: "Maombi",
    videoUrl: "/sermons/prayer.mp4",
    thumbnailUrl: "/sermons/prayer-thumb.jpg",
    description: "Kuelewa umuhimu wa maombi na kujenga maisha yenye nguvu ya maombi.",
    englishDescription: "Understanding the importance of prayer and building a powerful prayer life.",
    language: "Swahili"
  },
  {
    id: 3,
    title: "Youth Empowerment Through Christ",
    englishTitle: "Youth Empowerment Through Christ",
    speaker: "Rev. David Kimani",
    date: "Mei 1, 2025",
    duration: "42 mins",
    category: "Youth",
    videoUrl: "/sermons/youth.mp4",
    thumbnailUrl: "/sermons/youth-thumb.jpg",
    description: "Empowering young people to live purposefully through Christ.",
    englishDescription: "Empowering young people to live purposefully through Christ.",
    language: "English"
  },
  {
    id: 4,
    title: "Uongozi wa Kiroho",
    englishTitle: "Spiritual Leadership",
    speaker: "Mchungaji Grace Wanjiru",
    date: "Aprili 24, 2025",
    duration: "40 dakika",
    category: "Uongozi",
    videoUrl: "/sermons/leadership.mp4",
    thumbnailUrl: "/sermons/leadership-thumb.jpg",
    description: "Kanuni za uongozi wa kiroho kwa vijana wa leo.",
    englishDescription: "Principles of spiritual leadership for today's youth.",
    language: "Swahili"
  }
  // Add more sermons here
]

export default function SermonsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
            <Image
              src="/kenya-pattern.png"
              alt="Kenyan Pattern"
              width={160}
              height={160}
            />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Mahubiri</h1>
          <p className="text-xl text-gray-600 text-center">Sermons</p>
        </div>

        {/* Featured Sermon */}
        <div className="bg-black text-white rounded-lg overflow-hidden mb-12">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Play className="mr-2 h-4 w-4" /> Watch Latest Sermon
              </Button>
            </div>
            <img
              src="/featured-sermon.jpg"
              alt="Featured Sermon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">The Journey of Faith</h2>
            <p className="text-gray-300 mb-4">
              Join us for our latest sermon series exploring the fundamentals of faith.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="mr-1 h-4 w-4" />
              <span className="mr-4">May 21, 2025</span>
              <Clock className="mr-1 h-4 w-4" />
              <span>42 minutes</span>
            </div>
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={sermon.thumbnailUrl}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Play className="mr-2 h-4 w-4" /> Watch Now
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mt-2">{sermon.description}</p>
                {sermon.englishDescription !== sermon.description && (
                  <p className="text-gray-500 mt-1 text-sm">{sermon.englishDescription}</p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    {sermon.language}
                  </span>
                  <span>•</span>
                  <span>{sermon.speaker}</span>
                  <span>•</span>
                  <span>{sermon.date}</span>
                  <span>•</span>
                  <span>{sermon.duration}</span>
                </div>
                {sermon.englishTitle !== sermon.title && (
                  <p className="text-sm text-gray-500 mt-1">{sermon.englishTitle}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{sermon.speaker}</span>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
            Load More Sermons
          </Button>
        </div>
      </div>
    </div>
  )
}
