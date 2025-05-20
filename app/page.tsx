"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Calendar, Users, Heart, Music, Camera, Mail, Star, ArrowRight, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { CHURCH_INFO } from "@/lib/constants"

export default function Home() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    setEmail("")
    alert("Thank you for subscribing!")
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/kenya-church.jpg"
            alt="Kenyan Church"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="absolute top-4 right-4 z-30 flex items-center space-x-2">
          <Image
            src="/kenya-flag.png"
            alt="Kenyan Flag"
            width={32}
            height={20}
            className="rounded shadow-lg"
          />
          <span className="text-white text-sm">Nairobi, Kenya</span>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 animate-fade-in">
              {CHURCH_INFO.name}
            </h1>
            <p className="text-xl md:text-3xl text-white mb-8 animate-fade-in-delay">
              Kuinua kizazi kipya kupitia imani, ushirika, na huduma<br />
              <span className="text-lg md:text-xl text-gray-300">
                Empowering the next generation through faith, fellowship, and service
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Button 
                asChild 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg group"
              >
                <Link href="/donate" className="flex items-center">
                  Toa Sadaka
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 text-lg group"
              >
                <Link href="/events" className="flex items-center">
                  Matukio Yajayo
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4 text-white/80 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {CHURCH_INFO.location.street}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="font-light">Jumapili</span> 9:00 AM
              </div>
            </div>
            <ChevronRight className="h-8 w-8 text-yellow-400 transform rotate-90 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-8">Welcome to Excelsiors</h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              We are a vibrant community of young believers dedicated to growing in faith and making a positive impact
              in our world. Our mission is to inspire, equip, and empower youth to live out their faith boldly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Join a loving family of believers who support and encourage one another.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-gray-600">Experience spiritual growth through worship, study, and fellowship.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Service</h3>
                <p className="text-gray-600">Make a difference in our community through outreach and service projects.</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="/about">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Youth Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">Youth Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Being part of Excelsiors has transformed my life. I've found true friendship and grown stronger in my faith."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-gray-600 text-sm">Youth Leader</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The support and mentorship I've received here has helped me become a better leader and follower of Christ."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">R</span>
                </div>
                <div>
                  <h3 className="font-semibold">Rachel Thompson</h3>
                  <p className="text-gray-600 text-sm">New Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I immediately felt welcomed and at home. The community here is truly special and caring."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for updates on events, announcements, and inspiring content.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold whitespace-nowrap">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DepartmentCard
              title="Fellowship"
              description="Building community and meaningful relationships through regular gatherings and activities."
              icon={<Users className="h-10 w-10 text-yellow-400" />}
              href="/departments/fellowship"
            />
            <DepartmentCard
              title="Events"
              description="Planning and organizing impactful events that inspire and bring people together."
              icon={<Calendar className="h-10 w-10 text-yellow-400" />}
              href="/departments/events"
            />
            <DepartmentCard
              title="Discipleship"
              description="Growing deeper in faith through Bible study, mentorship, and spiritual formation."
              icon={<Heart className="h-10 w-10 text-yellow-400" />}
              href="/departments/discipleship"
            />
            <DepartmentCard
              title="Worship Team"
              description="Leading the congregation in worship through music, song, and creative expression."
              icon={<Music className="h-10 w-10 text-yellow-400" />}
              href="/departments/worship"
            />
            <DepartmentCard
              title="Media"
              description="Utilizing technology and digital platforms to spread our message and reach more people."
              icon={<Camera className="h-10 w-10 text-yellow-400" />}
              href="/departments/media"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-yellow-400">Upcoming Events</h2>
            <Button
              asChild
              variant="outline"
              className="mt-4 md:mt-0 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Youth Night"
              date="April 20, 2025"
              description="Join us for worship, games, and fellowship every Friday night."
              location="Main Sanctuary"
            />
            <EventCard
              title="Summer Retreat"
              date="June 15-18, 2025"
              description="Annual youth retreat with worship, outdoor activities, and spiritual growth."
              location="Mountain View Camp"
            />
            <EventCard
              title="Community Outreach"
              date="May 5, 2025"
              description="Serving our local community through various service projects."
              location="Community Center"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Join Our Community</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Whether you're new to faith or have been on this journey for years, there's a place for you in our youth
            ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-gray-800 text-yellow-400 font-bold">
              <Link href="/contact">Get Connected</Link>
            </Button>
            <Button asChild variant="outline" className="border-black text-black hover:bg-black/10">
              <Link href="/donate">Support Our Ministry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function DepartmentCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-yellow-400">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-yellow-500 transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

function EventCard({
  title,
  date,
  description,
  location,
}: {
  title: string
  date: string
  description: string
  location: string
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400">
      <div className="text-yellow-400 text-sm font-medium mb-2">{date}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-gray-300">
        <span className="text-sm">{location}</span>
      </div>
    </div>
  )
}
