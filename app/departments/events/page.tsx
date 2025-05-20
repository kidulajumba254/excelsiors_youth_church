import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsDepartmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">Events Department</h1>
              <p className="text-gray-600">
                Planning and organizing impactful events that inspire and bring people together.
              </p>
            </div>
            <div className="prose max-w-none">
              <p>
                The Events Department is responsible for creating meaningful gatherings that inspire, educate, and unite
                our youth community. We plan and execute a variety of events throughout the year, from weekly youth
                nights to annual retreats and special celebrations.
              </p>
              <p>
                Our team works diligently to ensure that each event is purposeful, well-organized, and creates
                opportunities for spiritual growth, fellowship, and fun. We believe that well-crafted events can be
                transformative experiences in the lives of young people.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p>
                To create impactful events that inspire spiritual growth, foster community, and provide memorable
                experiences for youth to encounter God and connect with others.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Youth events" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
            Our Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Youth Nights</CardTitle>
                <CardDescription>Every Friday at 7:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our regular youth gatherings featuring worship, teaching, games, and small group discussions.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events/youth-nights">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Annual Retreats</CardTitle>
                <CardDescription>Summer and Winter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Multi-day getaways focused on spiritual growth, community building, and outdoor adventures.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events/retreats">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Special Events</CardTitle>
                <CardDescription>Throughout the year</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Concerts, conferences, service projects, and holiday celebrations designed for impact and outreach.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events/special">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            <EventCard
              title="Youth Night: Identity in Christ"
              date="April 20, 2025"
              time="7:00 PM - 9:00 PM"
              location="Main Sanctuary"
              description="Join us for worship, games, and a powerful message about finding your identity in Christ. Special guest speaker Pastor James Wilson will be sharing."
              image="/placeholder.svg?height=300&width=600"
            />
            <EventCard
              title="Summer Retreat 2025"
              date="June 15-18, 2025"
              time="Departure at 9:00 AM on June 15"
              location="Mountain View Camp"
              description="Our annual summer retreat with the theme 'Unshakeable Faith.' Four days of worship, teaching, outdoor activities, and life-changing experiences. Early bird registration ends May 1st."
              image="/placeholder.svg?height=300&width=600"
            />
            <EventCard
              title="Community Service Day"
              date="May 5, 2025"
              time="10:00 AM - 2:00 PM"
              location="Community Center"
              description="Join us as we serve our local community through various service projects. We'll be partnering with the local food bank, homeless shelter, and community garden. Lunch will be provided."
              image="/placeholder.svg?height=300&width=600"
            />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="link" className="text-yellow-700">
              <Link href="/events" className="flex items-center">
                View All Events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Join Our Events Team</h2>
          <p className="text-gray-700 mb-4">
            We're always looking for creative, organized individuals to help plan and execute our events. If you have a
            passion for creating meaningful experiences, we'd love to have you on our team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/volunteer">Join the Team</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
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
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative bg-gray-100">
          <div className="w-full h-full flex items-center justify-center">
            <Calendar className="h-16 w-16 text-yellow-400" />
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
