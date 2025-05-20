import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Book, Users, ArrowRight } from "lucide-react"

export default function DiscipleshipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">Discipleship Department</h1>
              <p className="text-gray-600">
                Growing deeper in faith through Bible study, mentorship, and spiritual formation.
              </p>
            </div>
            <div className="prose max-w-none">
              <p>
                The Discipleship Department is dedicated to helping youth develop a deeper relationship with Christ and
                grow in their faith journey. We believe that discipleship is a lifelong process of becoming more like
                Jesus through intentional spiritual practices and relationships.
              </p>
              <p>
                Our team provides various opportunities for spiritual growth through Bible studies, mentorship programs,
                prayer groups, and discipleship courses. We aim to equip young people with the knowledge, skills, and
                support they need to live out their faith in everyday life.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p>
                To guide youth in developing a personal relationship with Jesus Christ and equip them to grow as
                disciples who make disciples.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Discipleship activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 h-5 w-5 text-yellow-500" />
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bible Studies</CardTitle>
                <CardDescription>Diving deeper into God's Word</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Weekly Bible studies that explore Scripture in depth and help youth apply biblical principles to their
                  lives.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/discipleship/bible-studies">Join a Study</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Program</CardTitle>
                <CardDescription>One-on-one spiritual guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Connecting youth with mature Christian mentors who provide guidance, accountability, and support.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/discipleship/mentorship">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Discipleship Courses</CardTitle>
                <CardDescription>Structured spiritual growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Multi-week courses on foundational Christian beliefs, spiritual disciplines, and practical faith
                  application.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/discipleship/courses">View Courses</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Book className="mr-2 h-5 w-5 text-yellow-500" />
            Current Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Foundations of Faith</CardTitle>
                <CardDescription>Wednesdays at 7:00 PM • 8 Weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  An exploration of core Christian beliefs and how they shape our lives. Perfect for those new to faith
                  or wanting to strengthen their foundation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/discipleship/foundations">Join This Study</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>The Book of James</CardTitle>
                <CardDescription>Sundays at 5:00 PM • 6 Weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A verse-by-verse study of James, focusing on practical wisdom for living out our faith in everyday
                  life.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/discipleship/james">Join This Study</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-4 text-center">
            <Button asChild variant="link" className="text-yellow-700">
              <Link href="/discipleship/studies" className="flex items-center">
                View All Studies <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-2 h-5 w-5 text-yellow-500" />
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "The mentorship program completely transformed my faith journey. Having someone to guide me, answer my
                  questions, and hold me accountable has helped me grow in ways I never expected."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                    JT
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Jamie Thompson</p>
                    <p className="text-sm text-gray-500">Mentorship Program Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "The Foundations of Faith course answered so many questions I had about Christianity and gave me the
                  confidence to share my faith with others. I highly recommend it to everyone!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                    MR
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-gray-500">Course Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Whether you're looking to grow in your faith through our programs or serve as a mentor or Bible study
            leader, we'd love to have you join us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/discipleship/join">Join a Program</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/volunteer">Serve as a Leader</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
