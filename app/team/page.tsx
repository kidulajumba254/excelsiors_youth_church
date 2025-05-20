import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Users, Calendar, Heart, Music, Camera } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Our Youth Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who lead and serve in our youth ministry across various departments.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMember
              name="Pastor Michael Johnson"
              role="Youth Pastor"
              image="/placeholder.svg?height=300&width=300"
              email="michael@excelsiors.feat.com"
              phone="(123) 456-7890"
              bio="Leading our youth ministry with 10+ years of experience in youth mentorship and spiritual guidance."
            />
            <TeamMember
              name="Sarah Williams"
              role="Assistant Youth Pastor"
              image="/placeholder.svg?height=300&width=300"
              email="sarah@excelsiors.feat.com"
              phone="(123) 456-7891"
              bio="Passionate about helping teens discover their identity in Christ and develop their leadership potential."
            />
            <TeamMember
              name="David Chen"
              role="Youth Coordinator"
              image="/placeholder.svg?height=300&width=300"
              email="david@excelsiors.feat.com"
              phone="(123) 456-7892"
              bio="Coordinates all youth activities and ensures smooth operation of our various ministry departments."
            />
          </div>
        </div>

        <Tabs defaultValue="fellowship" className="mb-10">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="fellowship" className="flex items-center">
              <Users className="mr-2 h-4 w-4 hidden sm:block" /> Fellowship
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 hidden sm:block" /> Events
            </TabsTrigger>
            <TabsTrigger value="discipleship" className="flex items-center">
              <Heart className="mr-2 h-4 w-4 hidden sm:block" /> Discipleship
            </TabsTrigger>
            <TabsTrigger value="worship" className="flex items-center">
              <Music className="mr-2 h-4 w-4 hidden sm:block" /> Worship
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center">
              <Camera className="mr-2 h-4 w-4 hidden sm:block" /> Media
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fellowship" className="pt-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Fellowship Department</h2>
              <p className="text-gray-600 mb-6">
                Our Fellowship team creates a welcoming environment where youth can build meaningful relationships and
                experience community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Keziah Kellen"
                role="Fellowship Director"
                image="/placeholder.svg?height=300&width=300"
                email="kellenkeziah@excelsiors.feat.com"
                phone="011789933"
                bio="Coordinates social activities and ensures every youth feels welcomed and connected."
              />
              <TeamMember
                name="Shadrack Gitau"
                role="Small Groups Coordinator"
                image="/placeholder.svg?height=300&width=300"
                email="gitaushaddy@excelsiors.feat.com"
                phone="0735367993"
                bio="Organizes and oversees our small group ministry to foster deeper connections among youth."
              />
              <TeamMember
                name="Jesse Kidula"
                role="Welcome Team Lead"
                image="/placeholder.svg?height=300&width=300"
                email="kidulajesse@excelsiors.feat.com"
                phone="0758301141"
                bio="Leads our welcome team to ensure new visitors feel at home from their first visit."
              />
            </div>
          </TabsContent>

          <TabsContent value="events" className="pt-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Events Department</h2>
              <p className="text-gray-600 mb-6">
                Our Events team plans and executes impactful gatherings that inspire, educate, and bring our youth
                community together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Daniel Kigen"
                role="Events Director"
                image="/placeholder.svg?height=300&width=300"
                email="danielkigen@excelsiors.feat.com"
                phone="07239008367"
                bio="Oversees all event planning and execution with a focus on creating memorable experiences."
              />
              <TeamMember
                name="Watson Muvali"
                role="Retreat Coordinator"
                image="/placeholder.svg?height=300&width=300"
                email="muvaliwatson@excelsiors.feat.com"
                phone="07224673883"
                bio="Plans our annual retreats and overnight events with attention to spiritual impact and safety."
              />
              <TeamMember
                name="Martin Wanyonyi"
                role="Outreach Events Coordinator"
                image="/placeholder.svg?height=300&width=300"
                email="wanyonyimartin@excelsiors.feat.com"
                phone="0769280229"
                bio="Coordinates community service events and outreach opportunities for our youth."
              />
            </div>
          </TabsContent>

          <TabsContent value="discipleship" className="pt-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Discipleship Department</h2>
              <p className="text-gray-600 mb-6">
                Our Discipleship team focuses on spiritual formation, Bible study, and mentoring to help youth grow in
                their faith.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Derrick Obegi"
                role="Discipleship Director"
                image="/placeholder.svg?height=300&width=300"
                email="derrickobegi@excelsiors.feat.com"
                phone="0735299383"
                bio="Develops curriculum and oversees all discipleship programs with a passion for spiritual growth."
              />
              <TeamMember
                name="Gooda Hemsworth"
                role="Bible Study Coordinator"
                image="/placeholder.svg?height=300&width=300"
                email="goodahemsworth@excelsiors.feat.com"
                phone="0764644993"
                bio="Leads our Bible study program and trains small group leaders in effective teaching methods."
              />
              <TeamMember
                name="Martha Nyakundi"
                role="Mentorship Program Lead"
                image="/placeholder.svg?height=300&width=300"
                email="nyakundimartha@excelsiors.feat.com"
                phone="0188373673"
                bio="Coordinates our one-on-one mentorship program, pairing youth with mature Christian mentors."
              />
            </div>
          </TabsContent>

          <TabsContent value="worship" className="pt-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Worship Team</h2>
              <p className="text-gray-600 mb-6">
                Our Worship team leads the congregation in praise and worship, creating an atmosphere for encountering
                God.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="June Joyce"
                role="Worship Director"
                image="/placeholder.svg?height=300&width=300"
                email="junejoy@excelsiors.feat.com"
                phone="0735383933"
                bio="Leads our worship team with a heart for authentic worship and musical excellence."
              />
              <TeamMember
                name="Kelvin Muya"
                role="Technical Director"
                image="/placeholder.svg?height=300&width=300"
                email="muyakelvin@excelsiors.feat.com"
                phone="011288765"
                bio="Manages sound, lighting, and visual elements to enhance the worship experience."
              />
              <TeamMember
                name="Simon Makali"
                role="Vocal Coach"
                image="/placeholder.svg?height=300&width=300"
                email="makalisimon@excelsiors.feat.com"
                phone="0748654890"
                bio="Trains and develops vocalists while coordinating the choir for special performances."
              />
            </div>
          </TabsContent>

          <TabsContent value="media" className="pt-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Media Department</h2>
              <p className="text-gray-600 mb-6">
                Our Media team leverages technology and creative content to enhance our ministry and extend our reach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Salome"
                role="Media Director"
                image="/placeholder.svg?height=300&width=300"
                email="mumbisalome@excelsiors.feat.com"
                phone="0746488483"
                bio="Oversees all media production with expertise in digital strategy and content creation."
              />
              <TeamMember
                name="Mia Johnson"
                role="Social Media Coordinator"
                image="/placeholder.svg?height=300&width=300"
                email="mia@excelsiors.feat.com"
                phone="011837739"
                bio="Manages our social media presence and develops engaging content for our online community."
              />
              <TeamMember
                name="Kelvin Muya"
                role="Video Production Lead"
                image="/placeholder.svg?height=300&width=300"
                email="muyakelvin@excelsiors.feat.com"
                phone="0736648494"
                bio="Directs video projects including testimonials, event highlights, and promotional content."
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-700 mb-4">
            We're always looking for passionate individuals to serve in our youth ministry. If you have a heart for
            youth and want to make a difference, we'd love to hear from you!
          </p>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            <Link href="/volunteer">Volunteer Application</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function TeamMember({
  name,
  role,
  image,
  email,
  phone,
  bio,
}: {
  name: string
  role: string
  image: string
  email: string
  phone: string
  bio: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative bg-gray-200">
        {/* Replace the Image component with a more reliable implementation */}
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="h-24 w-24 rounded-full bg-yellow-400 flex items-center justify-center text-black text-2xl font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{bio}</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-600">{email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-600">{phone}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100">
          <Link href={`/team/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
