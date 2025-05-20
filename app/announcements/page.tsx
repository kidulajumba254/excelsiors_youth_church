"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, MapPin, Clock } from "lucide-react"
import { CHURCH_INFO } from "@/lib/constants"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const announcements = [
  {
    id: 1,
    title: "Kongamano la Vijana 2025",
    date: "Mei 25-27, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "KICC, Nairobi",
    description:
      "Join us for our annual youth conference featuring worship, workshops, and guest speakers from across East Africa. Kongamano letu la kila mwaka la vijana.",
    category: "Event"
  },
  {
    id: 2,
    title: "Mafunzo ya Wahudumu",
    date: "Mei 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Westlands, Nairobi",
    description: "Training session for all youth ministry volunteers. Mafunzo ya wahudumu wote wa vijana.",
    category: "Training"
  },
  {
    id: 3,
    title: "Usajili wa Safari ya Misheni",
    date: "Mwisho wa Usajili: Juni 1, 2025",
    time: "Mtandaoni",
    location: "Online",
    description: "Register for our mission trip to Turkana. Jiandikishe kwa safari yetu ya misheni Turkana.",
    category: "Mission"
  },
  {
    id: 4,
    title: "Tamasha la Kwaya",
    date: "Juni 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "All Saints Cathedral, Nairobi",
    description: "Youth choir festival featuring choirs from different churches. Tamasha la kwaya za vijana kutoka makanisa tofauti.",
    category: "Event"
  },
  {
    id: 5,
    title: "Mkutano wa Maombi",
    date: "Kila Jumamosi",
    time: "6:00 AM - 7:30 AM",
    location: "Karen, Nairobi",
    description: "Weekly prayer meeting for the youth. Mkutano wa maombi wa vijana kila wiki.",
    category: "Prayer"
  }
]

const categories = ["All", "Event", "Training", "Mission", "Prayer"]

export default function AnnouncementsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
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
            <h1 className="text-4xl font-bold text-center mb-4">Matangazo</h1>
            <p className="text-xl text-gray-600 text-center">Church Announcements</p>
          </div>
          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="grid w-full grid-cols-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category.toLowerCase()} className="space-y-6 pt-6">
                {announcements
                  .filter((announcement) => announcement.category === category || category === "All")
                  .map((announcement) => (
                    <Announcement
                      key={announcement.id}
                      title={announcement.title}
                      date={announcement.date}
                      time={announcement.time}
                      location={announcement.location}
                      description={announcement.description}
                    />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Bell className="mr-2 h-5 w-5 text-yellow-500" />
              Subscribe to Updates
            </h2>
            <p className="text-gray-700 mb-4">
              Never miss an announcement or event! Sign up to receive notifications via email or text message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
                <Link href="/calendar">Add to Calendar</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Announcement({
  title,
  date,
  time,
  location,
  description,
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="pt-2">
          <p className="text-gray-700">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
          <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>Event Details</Link>
        </Button>
        <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
          <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}/register`}>Register</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
