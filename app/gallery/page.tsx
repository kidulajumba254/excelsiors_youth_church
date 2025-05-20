"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, X } from "lucide-react"

interface Photo {
  id: number
  url: string
  title: string
  category: string
  date: string
}

const photos: Photo[] = [
  {
    id: 1,
    url: "/gallery/worship-team.jpg",
    title: "Timu ya Sifa na Kuabudu",
    category: "Worship",
    date: "Mei 15, 2025"
  },
  {
    id: 2,
    url: "/gallery/kibera-outreach.jpg",
    title: "Huduma Kibera",
    category: "Service",
    date: "Mei 10, 2025"
  },
  {
    id: 3,
    url: "/gallery/youth-study.jpg",
    title: "Masomo ya Vijana",
    category: "Study",
    date: "Mei 8, 2025"
  },
  {
    id: 4,
    url: "/gallery/cultural-day.jpg",
    title: "Siku ya Utamaduni",
    category: "Events",
    date: "Mei 5, 2025"
  },
  {
    id: 5,
    url: "/gallery/morning-glory.jpg",
    title: "Maombi ya Asubuhi",
    category: "Prayer",
    date: "Mei 3, 2025"
  },
  {
    id: 6,
    url: "/gallery/youth-choir.jpg",
    title: "Kwaya ya Vijana",
    category: "Worship",
    date: "Mei 1, 2025"
  },
  {
    id: 7,
    url: "/gallery/community-cleanup.jpg",
    title: "Usafi wa Jamii",
    category: "Service",
    date: "Aprili 28, 2025"
  },
  {
    id: 8,
    url: "/gallery/youth-fellowship.jpg",
    title: "Ushirika wa Vijana",
    category: "Fellowship",
    date: "Aprili 25, 2025"
  }
]

const categories = ["All", "Worship", "Service", "Study", "Fellowship", "Prayer", "Events"]

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Camera className="h-8 w-8 text-yellow-400 mr-3" />
          <h1 className="text-4xl font-bold text-center">Picha Zetu</h1>
          <p className="text-xl text-gray-600 text-center mt-2">Our Photo Gallery</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover-scale"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:text-yellow-400"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{selectedPhoto.title}</h3>
                <p className="text-sm">{selectedPhoto.date}</p>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
            Picha Zaidi
          </Button>
        </div>
      </div>
    </div>
  )
}
