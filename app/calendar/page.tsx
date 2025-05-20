"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar as CalendarIcon, MapPin, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  title: string
  date: Date
  time: string
  location: string
  description: string
  category: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Usiku wa Ibada ya Vijana",
    date: new Date(2025, 4, 25), // May 25, 2025
    time: "6:00 PM - 8:00 PM",
    location: "Ukumbi Mkuu, Nairobi",
    description: "Join us for an evening of worship and praise led by our youth worship team. Karibu uabudu pamoja nasi.",
    category: "Worship"
  },
  {
    id: 2,
    title: "Masomo ya Biblia",
    date: new Date(2025, 4, 27), // May 27, 2025
    time: "7:00 PM - 8:30 PM",
    location: "Chumba cha Vijana, Westlands",
    description: "Weekly Bible study focusing on the Book of Acts. Masomo ya kila wiki kutoka kitabu cha Matendo.",
    category: "Study"
  },
  {
    id: 3,
    title: "Huduma ya Jamii",
    date: new Date(2025, 4, 30), // May 30, 2025
    time: "9:00 AM - 12:00 PM",
    location: "Kibera Community Center",
    description: "Community outreach and food distribution in Kibera. Kusaidia jamii yetu na kugawa chakula.",
    category: "Service"
  },
  {
    id: 4,
    title: "Tamasha la Vijana",
    date: new Date(2025, 5, 5), // June 5, 2025
    time: "2:00 PM - 6:00 PM",
    location: "Uhuru Gardens, Nairobi",
    description: "Youth festival with music, games, and fellowship. Sherehe ya vijana na muziki, michezo na ushirika.",
    category: "Fellowship"
  },
  {
    id: 5,
    title: "Maombi ya Asubuhi",
    date: new Date(2025, 5, 7), // June 7, 2025
    time: "5:30 AM - 7:00 AM",
    location: "Ukumbi wa Maombi, Karen",
    description: "Early morning prayer session. Maombi ya asubuhi na mapema.",
    category: "Prayer"
  }
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Worship", "Study", "Service", "Fellowship", "Prayer"]

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesDate = date ? event.date.toDateString() === date.toDateString() : true
    return matchesCategory && matchesDate
  })

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Kalenda ya Matukio</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Event Calendar</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar and Filters */}
          <div className="space-y-6">
            <Card className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Event Categories</h3>
              <div className="flex flex-wrap gap-2">
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
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">
                {date ? (
                  <>Matukio ya {date.toLocaleDateString("sw-KE", { month: "long", day: "numeric", year: "numeric" })}</>
                ) : (
                  "Matukio Yote"
                )}
              </h2>

              {filteredEvents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No events found for the selected date and category.
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-400/10 rounded-lg p-3">
                          <CalendarIcon className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/events/${event.id}`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
