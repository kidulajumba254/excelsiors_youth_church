import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Video, Share2, ArrowRight } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">Media Department</h1>
              <p className="text-gray-600">
                Utilizing technology and digital platforms to spread our message and reach more people.
              </p>
            </div>
            <div className="prose max-w-none">
              <p>
                The Media Department leverages technology and creative content to enhance our ministry and extend our
                reach beyond physical gatherings. We believe that digital platforms provide powerful opportunities to
                share the gospel and connect with youth in today's media-driven world.
              </p>
              <p>
                Our team handles everything from social media management and content creation to live streaming,
                photography, and video production. We work to ensure that our message is communicated effectively across
                various platforms while maintaining high quality and relevance.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p>
                To utilize media and technology to amplify our ministry's message, engage youth in the digital space,
                and create compelling content that points to Christ.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Media team" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Camera className="mr-2 h-5 w-5 text-yellow-500" />
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>Engaging our community online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Managing our social media presence across platforms to share content, engage with our audience, and
                  build community.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/media/social">Follow Us</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Video Production</CardTitle>
                <CardDescription>Creating compelling visual content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Producing videos including testimonials, event highlights, teaching series, and promotional content.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/media/videos">Watch Our Videos</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Live Streaming</CardTitle>
                <CardDescription>Extending our reach beyond physical space</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Broadcasting our services and events live online to reach those who can't attend in person.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/media/live">Watch Live</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Video className="mr-2 h-5 w-5 text-yellow-500" />
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Youth testimony video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Transformed Lives: Youth Testimonies</CardTitle>
                <CardDescription>Video Series • 5 Episodes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Hear powerful stories of how God is working in the lives of our youth, transforming hearts and
                  changing futures.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/media/testimonies">Watch Series</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Youth retreat highlights"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Winter Retreat 2025 Highlights</CardTitle>
                <CardDescription>Event Recap • 8 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Relive the amazing moments from our most recent winter retreat, including worship, activities, and
                  life-changing moments.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Link href="/media/winter-retreat">Watch Video</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-4 text-center">
            <Button asChild variant="link" className="text-yellow-700">
              <Link href="/media/gallery" className="flex items-center">
                View All Content <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Share2 className="mr-2 h-5 w-5 text-yellow-500" />
            Connect With Us
          </h2>
          <div className="bg-black text-white rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Follow Us on Social Media</h3>
              <p className="text-gray-300">Stay connected with our youth ministry and never miss an update!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SocialCard
                platform="Instagram"
                handle="@excelsiors_youth"
                link="https://instagram.com"
                color="bg-gradient-to-r from-purple-500 to-pink-500"
              />
              <SocialCard platform="TikTok" handle="@excelsiors" link="https://tiktok.com" color="bg-black" />
              <SocialCard platform="YouTube" handle="Excelsiors Youth" link="https://youtube.com" color="bg-red-600" />
              <SocialCard
                platform="Facebook"
                handle="Excelsiors Youth Ministry"
                link="https://facebook.com"
                color="bg-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Join Our Media Team</h2>
          <p className="text-gray-700 mb-4">
            Are you passionate about media, technology, and creative content? We're looking for photographers,
            videographers, graphic designers, social media managers, and tech enthusiasts to join our team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/media/join">Join the Team</Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-100">
              <Link href="/contact">Contact Media Director</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialCard({
  platform,
  handle,
  link,
  color,
}: {
  platform: string
  handle: string
  link: string
  color: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} rounded-lg p-4 text-center hover:opacity-90 transition-opacity`}
    >
      <h4 className="font-bold mb-1">{platform}</h4>
      <p className="text-sm">{handle}</p>
    </a>
  )
}
