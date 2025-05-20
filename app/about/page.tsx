import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, BookOpen, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">About Excelsiors Youth Ministry</h1>
              <p className="text-gray-600">Empowering the next generation through faith, fellowship, and service.</p>
            </div>
            <div className="prose max-w-none">
              <p>
                Excelsiors Youth Ministry is a vibrant community of young believers dedicated to growing in faith and
                making a positive impact in our world. Our name "Excelsiors" reflects our commitment to excellence and
                our desire to continually rise higher in our spiritual journey.
              </p>
              <p>
                Founded in 2010, our ministry has grown from a small group of 15 youth to a thriving community of over
                200 young people from diverse backgrounds. We believe that every youth has God-given potential and
                purpose, and we're passionate about helping them discover and fulfill that purpose.
              </p>
              <p>
                Our ministry is built on the foundation of God's Word and is committed to creating an environment where
                youth can encounter Jesus, build meaningful relationships, and develop as leaders who will impact their
                generation.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Youth group" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 h-5 w-5 text-yellow-500" />
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Mission</h3>
                <p className="mb-4">
                  To create a Christ-centered community where youth can grow in their faith, develop meaningful
                  relationships, and discover their God-given purpose.
                </p>
                <p>
                  We accomplish this through relevant teaching, authentic worship, intentional mentoring, and
                  opportunities to serve others.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-400 text-black">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="mb-4">
                  To see a generation of youth who are passionate about Jesus, grounded in God's Word, connected in
                  community, and actively using their gifts to impact the world.
                </p>
                <p>
                  We envision raising up young leaders who will transform their schools, communities, and beyond with
                  the love and truth of Jesus Christ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-yellow-500" />
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              title="Christ-Centered"
              description="Jesus is at the center of everything we do. We're committed to helping youth develop a personal relationship with Christ and follow His example."
            />
            <ValueCard
              title="Authentic Community"
              description="We create spaces where youth can be real, build meaningful relationships, and support one another in their faith journey."
            />
            <ValueCard
              title="Biblical Truth"
              description="We're grounded in God's Word and committed to teaching biblical principles that are relevant to the lives of today's youth."
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in all we do, not for perfection, but to honor God and create meaningful experiences for youth."
            />
            <ValueCard
              title="Servant Leadership"
              description="We develop leaders who lead like Jesus—with humility, integrity, and a heart to serve others."
            />
            <ValueCard
              title="Outreach & Impact"
              description="We're passionate about reaching those who don't know Jesus and making a positive difference in our community and world."
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-2 h-5 w-5 text-yellow-500" />
            Our Team
          </h2>
          <div className="prose max-w-none mb-6">
            <p>
              Our Youth Ministry is led by a dedicated team of staff and volunteers who are passionate about investing
              in the next generation. From our youth pastor to our department leaders and volunteer mentors, each person
              plays a vital role in creating a thriving youth ministry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMemberCard
              name="Pastor Daniel Masawi"
              role="Youth Pastor"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMemberCard
              name="Watson Muvali"
              role="Assistant Youth Pastor"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMemberCard
              name="Cindy Wambui"
              role="Youth Coordinator"
              image="/placeholder.svg?height=300&width=300"
            />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="link" className="text-yellow-700">
              <Link href="/team" className="flex items-center justify-center">
                Meet Our Full Team <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Departments</h2>
          <div className="prose max-w-none mb-6">
            <p>
              Our youth ministry operates through five key departments, each focused on a specific aspect of our
              mission. These departments work together to create a comprehensive ministry that addresses the spiritual,
              relational, and practical needs of our youth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DepartmentCard
              title="Fellowship"
              description="Building community and meaningful relationships through regular gatherings and activities."
              link="/departments/fellowship"
            />
            <DepartmentCard
              title="Events"
              description="Planning and organizing impactful events that inspire and bring people together."
              link="/departments/events"
            />
            <DepartmentCard
              title="Discipleship"
              description="Growing deeper in faith through Bible study, mentorship, and spiritual formation."
              link="/departments/discipleship"
            />
            <DepartmentCard
              title="Praise and Worship Team"
              description="Leading the congregation in worship through music, song, and creative expression."
              link="/departments/worship"
            />
            <DepartmentCard
              title="Mentorship "
              description="Utilizing technology and digital platforms to spread our message and reach more people."
              link="/departments/media"
            />
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Whether you're a youth looking to connect or an adult wanting to serve, there are many ways to get involved
            with Excelsiors Youth Ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/events">Attend an Event</Link>
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

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMemberCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <Link href={`/team/${name.toLowerCase().replace(/\s+/g, "-")}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="aspect-square relative bg-gray-100">
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-bold group-hover:text-yellow-500 transition-colors">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

function DepartmentCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-md border-t-4 border-yellow-400">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <span className="text-yellow-700 font-medium flex items-center text-sm">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
