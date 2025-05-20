"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram } from "lucide-react"
import { CHURCH_INFO, KENYAN_COUNTIES } from "@/lib/constants"
import Image from "next/image"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [county, setCounty] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement contact form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Asante! Thank You!</h2>
            <p className="text-gray-600 mb-8">
              We have received your message and will get back to you soon.<br />
              Tumepokea ujumbe wako na tutakujibu hivi karibuni.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Wasiliana Nasi</h1>
            <p className="text-xl text-gray-600">Get in Touch With Us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-black text-white rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40">
                <Image
                  src="/kenya-pattern.png"
                  alt="Kenyan Pattern"
                  width={160}
                  height={160}
                  className="opacity-10"
                />
              </div>

              <h2 className="text-2xl font-bold mb-8">Our Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">{CHURCH_INFO.location.street}</p>
                    <p className="text-gray-300">{CHURCH_INFO.location.city}, {CHURCH_INFO.location.country}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">{CHURCH_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">{CHURCH_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href={CHURCH_INFO.socialMedia.facebook} className="bg-yellow-400/10 hover:bg-yellow-400/20 p-3 rounded-full transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={CHURCH_INFO.socialMedia.twitter} className="bg-yellow-400/10 hover:bg-yellow-400/20 p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={CHURCH_INFO.socialMedia.instagram} className="bg-yellow-400/10 hover:bg-yellow-400/20 p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+254 700 000000" required />
              </div>

              <div>
                <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-2">
                  County
                </label>
                <select
                  id="county"
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select your county</option>
                  {KENYAN_COUNTIES.map((county) => (
                    <option key={county} value={county}>{county}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold group">
                <span className="flex items-center justify-center">
                  Tuma Ujumbe
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
