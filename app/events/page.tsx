import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Filter } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these upcoming events designed to help you grow in faith, build community, and make a
            difference.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="youth">Youth Nights</TabsTrigger>
              <TabsTrigger value="special">Special Events</TabsTrigger>
              <TabsTrigger value="outreach">Outreach</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">April 2025</h2>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </div>

              <TabsContent value="all" className="space-y-6">
                <EventCard
                  title="Youth Night: Identity in Christ"
                  date="April 20, 2025"
                  time="7:00 PM - 9:00 PM"
                  location="Main Sanctuary"
                  description="Join us for worship, games, and a powerful message about finding your identity in Christ. Special guest speaker Pastor James Wilson will be sharing."
                  image="/placeholder.svg?height=300&width=600"
                  category="Youth Night"
                />
                <EventCard
                  title="Night of Worship"
                  date="April 28, 2025"
                  time="7:30 PM - 9:00 PM"
                  location="Main Sanctuary"
                  description="A night dedicated to worship and prayer. Come with an expectant heart as we seek God's presence together."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
                <EventCard
                  title="Community Service Day"
                  date="May 5, 2025"
                  time="10:00 AM - 2:00 PM"
                  location="Community Center"
                  description="Join us as we serve our local community through various service projects. We'll be partnering with the local food bank, homeless shelter, and community garden. Lunch will be provided."
                  image="/placeholder.svg?height=300&width=600"
                  category="Outreach"
                />
                <EventCard
                  title="Youth Game Night"
                  date="April 22, 2025"
                  time="7:00 PM - 9:00 PM"
                  location="Fellowship Hall"
                  description="Join us for a night of fun games, snacks, and fellowship. Bring a friend and your favorite board game!"
                  image="/placeholder.svg?height=300&width=600"
                  category="Youth Night"
                />
                <EventCard
                  title="Parent-Youth Dinner"
                  date="May 12, 2025"
                  time="6:00 PM - 8:00 PM"
                  location="Fellowship Hall"
                  description="A special dinner for parents and youth to connect, share, and celebrate together. Please RSVP by May 5th."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
                <EventCard
                  title="Summer Retreat 2025"
                  date="June 15-18, 2025"
                  time="Departure at 9:00 AM on June 15"
                  location="Mountain View Camp"
                  description="Our annual summer retreat with the theme 'Unshakeable Faith.' Four days of worship, teaching, outdoor activities, and life-changing experiences. Early bird registration ends May 1st."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
              </TabsContent>

              <TabsContent value="youth" className="space-y-6">
                <EventCard
                  title="Youth Night: Identity in Christ"
                  date="April 20, 2025"
                  time="7:00 PM - 9:00 PM"
                  location="Main Sanctuary"
                  description="Join us for worship, games, and a powerful message about finding your identity in Christ. Special guest speaker Pastor James Wilson will be sharing."
                  image="/placeholder.svg?height=300&width=600"
                  category="Youth Night"
                />
                <EventCard
                  title="Youth Game Night"
                  date="April 22, 2025"
                  time="7:00 PM - 9:00 PM"
                  location="Fellowship Hall"
                  description="Join us for a night of fun games, snacks, and fellowship. Bring a friend and your favorite board game!"
                  image="/placeholder.svg?height=300&width=600"
                  category="Youth Night"
                />
              </TabsContent>

              <TabsContent value="special" className="space-y-6">
                <EventCard
                  title="Night of Worship"
                  date="April 28, 2025"
                  time="7:30 PM - 9:00 PM"
                  location="Main Sanctuary"
                  description="A night dedicated to worship and prayer. Come with an expectant heart as we seek God's presence together."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
                <EventCard
                  title="Parent-Youth Dinner"
                  date="May 12, 2025"
                  time="6:00 PM - 8:00 PM"
                  location="Fellowship Hall"
                  description="A special dinner for parents and youth to connect, share, and celebrate together. Please RSVP by May 5th."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
                <EventCard
                  title="Summer Retreat 2025"
                  date="June 15-18, 2025"
                  time="Departure at 9:00 AM on June 15"
                  location="Mountain View Camp"
                  description="Our annual summer retreat with the theme 'Unshakeable Faith.' Four days of worship, teaching, outdoor activities, and life-changing experiences. Early bird registration ends May 1st."
                  image="/placeholder.svg?height=300&width=600"
                  category="Special Event"
                />
              </TabsContent>

              <TabsContent value="outreach" className="space-y-6">
                <EventCard
                  title="Community Service Day"
                  date="May 5, 2025"
                  time="10:00 AM - 2:00 PM"
                  location="Community Center"
                  description="Join us as we serve our local community through various service projects. We'll be partnering with the local food bank, homeless shelter, and community garden. Lunch will be provided."
                  image="/placeholder.svg?height=300&width=600"
                  category="Outreach"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
            Stay Updated
          </h2>
          <p className="text-gray-700 mb-4">
            Never miss an event! Subscribe to our calendar or sign up for event notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/subscribe">Subscribe to Updates</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/calendar">Add to Calendar</Link>
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Plan Your Visit</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Church location"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Location & Directions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">123 Faith Street, City, State 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Regular Youth Service Times</p>
                        <p className="text-gray-600">Fridays at 7:00 PM</p>
                        <p className="text-gray-600">Sundays at 11:00 AM</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Parking</p>
                      <p className="text-gray-600">
                        Free parking is available in our main lot and the overflow lot across the street.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
                        <Link href="/directions">Get Directions</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our events or need more information, please don't hesitate to contact us.
          </p>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
  category,
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative bg-gray-100">
          <div className="w-full h-full flex items-center justify-center">
            <Calendar className="h-16 w-16 text-yellow-400" />
          </div>
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            {category}
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-yellow-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-yellow-500" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-yellow-500" />
              <span>{location}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>Details</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}/register`}>Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
