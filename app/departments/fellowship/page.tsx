import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, ArrowRight } from "lucide-react"

export default function FellowshipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">Fellowship Department</h1>
              <p className="text-gray-600">
                Building community and meaningful relationships through regular gatherings and activities.
              </p>
            </div>
            <div className="prose max-w-none">
              <p>
                The Fellowship Department is the heart of our youth ministry, creating spaces where young people can
                connect, build friendships, and experience authentic community. We believe that meaningful relationships
                are essential for spiritual growth and personal development.
              </p>
              <p>
                Our team organizes various social activities, small groups, and community-building events designed to
                help youth feel welcomed, valued, and connected. From game nights and social outings to deeper small
                group discussions, we create environments where youth can be themselves and grow together.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p>
                To create a welcoming, inclusive community where every youth feels they belong and can develop
                meaningful relationships that support their faith journey.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <Users className="h-24 w-24 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-2 h-5 w-5 text-yellow-500" />
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Small Groups</CardTitle>
                <CardDescription>Connect, grow, and share life together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our small groups meet weekly to discuss faith, life challenges, and build deeper friendships in a more
                  intimate setting.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/small-groups">Join a Small Group</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Social Events</CardTitle>
                <CardDescription>Fun activities to build community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  From game nights to outdoor adventures, our social events provide opportunities for youth to have fun
                  and build friendships.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/events">Upcoming Events</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Welcome Team</CardTitle>
                <CardDescription>Making everyone feel at home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our dedicated welcome team ensures that every new person feels valued and connected from their very
                  first visit.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/volunteer">Join the Team</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
            Upcoming Fellowship Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Youth Game Night</CardTitle>
                <CardDescription>April 22, 2025 • 7:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Join us for a night of fun games, snacks, and fellowship. Bring a friend and your favorite board game!
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/events/youth-game-night">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Welcome BBQ</CardTitle>
                <CardDescription>May 8, 2025 • 5:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A special welcome event for new youth and their families. Come enjoy good food and meet our community!
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/events/welcome-bbq">Learn More</Link>
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
          <h2 className="text-xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            There are many ways to get involved with our Fellowship Department, whether you're looking to join a small
            group, attend events, or serve on our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/volunteer">Volunteer Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
