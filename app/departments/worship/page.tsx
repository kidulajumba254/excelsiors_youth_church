import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Mic, Headphones, ArrowRight } from "lucide-react"

export default function WorshipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">Worship Team</h1>
              <p className="text-gray-600">
                Leading the congregation in worship through music, song, and creative expression.
              </p>
            </div>
            <div className="prose max-w-none">
              <p>
                The Worship Team is dedicated to creating an atmosphere where youth can encounter God through music and
                worship. We believe that worship is more than just singing songs—it's a lifestyle of honoring God in
                everything we do.
              </p>
              <p>
                Our team consists of vocalists, musicians, sound technicians, and visual artists who work together to
                facilitate meaningful worship experiences. We strive for excellence in our craft while maintaining
                hearts that are fully devoted to serving God and the congregation.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p>
                To lead authentic worship that connects youth with God, creates space for spiritual transformation, and
                inspires a lifestyle of worship.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Worship team" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Music className="mr-2 h-5 w-5 text-yellow-500" />
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Worship</CardTitle>
                <CardDescription>Leading youth nights and services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our team leads worship at weekly youth gatherings, creating an atmosphere for youth to connect with
                  God.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events">Upcoming Services</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Worship Nights</CardTitle>
                <CardDescription>Extended times of worship and prayer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Special evenings dedicated solely to worship, creating space for deeper encounters with God's
                  presence.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events/worship-nights">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training & Development</CardTitle>
                <CardDescription>Growing in skill and spiritual leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Regular rehearsals, workshops, and mentoring to develop both musical skills and worship leadership.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/worship/training">Training Opportunities</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Mic className="mr-2 h-5 w-5 text-yellow-500" />
            Join the Team
          </h2>
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">We're Looking for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <span>Vocalists (lead and background)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <span>Musicians (guitar, keys, drums, bass, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <span>Sound and lighting technicians</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      4
                    </div>
                    <span>Visual artists and projection operators</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                    <Link href="/worship/auditions">Apply for Auditions</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Worship auditions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Headphones className="mr-2 h-5 w-5 text-yellow-500" />
            Upcoming Worship Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Night of Worship</CardTitle>
                <CardDescription>April 28, 2025 • 7:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  An extended evening of worship and prayer. Come with an expectant heart as we seek God's presence
                  together.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/events/night-of-worship">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Worship Team Auditions</CardTitle>
                <CardDescription>May 15, 2025 • 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Auditions for new worship team members. If you play an instrument or sing and have a heart for
                  worship, we'd love to hear from you!
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/worship/auditions">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-4 text-center">
            <Button asChild variant="link" className="text-yellow-700">
              <Link href="/events" className="flex items-center">
                View All Events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Resources for Worship</h2>
          <p className="text-gray-700 mb-4">
            We've compiled resources to help you grow in your worship journey, whether you're on the team or simply want
            to deepen your personal worship life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/worship/resources">Access Resources</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/contact">Contact Worship Director</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
