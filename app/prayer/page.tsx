"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Globe } from "lucide-react"
import Image from "next/image"
import { CHURCH_INFO } from "@/lib/constants"
import Link from "next/link"

export default function PrayerRequestPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement prayer request submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Prayer Request Received</h2>
            <p className="text-gray-600 mb-8">
              Thank you for sharing your prayer request. Our prayer team will be praying for you.
              May God's peace be with you during this time.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
              <Image
                src="/kenya-pattern.png"
                alt="Kenyan Pattern"
                width={160}
                height={160}
              />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Ombi la Maombi</h1>
            <p className="text-xl text-gray-600 text-center">Prayer Request</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-yellow-400/10 rounded-lg p-4">
                <Globe className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="ml-4 text-gray-600">
                Your prayer request will be kept confidential and shared only with our prayer team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Jina / Name
                </label>
                <Input id="name" placeholder="Jina lako / Your name" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Barua pepe / Email
                </label>
                <Input id="email" type="email" placeholder="barua@pepe.com" required />
              </div>

              <div>
                <label htmlFor="prayerType" className="block text-sm font-medium text-gray-700 mb-2">
                  Aina ya Ombi la Maombi / Type of Prayer Request
                </label>
                <select
                  id="prayerType"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                >
                  <option value="">Chagua kategoria / Select a category</option>
                  <option value="healing">Uponyaji / Healing</option>
                  <option value="guidance">Uongozi / Guidance</option>
                  <option value="family">Familia / Family</option>
                  <option value="spiritual">Ukuaji wa Kiroho / Spiritual Growth</option>
                  <option value="other">Nyingine / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
                  Ombi la Maombi / Prayer Request
                </label>
                <Textarea
                  id="request"
                  placeholder="Shiriki ombi lako la maombi... / Share your prayer request..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="urgent"
                  className="mt-1 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                />
                <label htmlFor="urgent" className="ml-2 text-sm text-gray-600">
                  This is an urgent prayer request
                </label>
              </div>

              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold group">
                <span className="flex items-center justify-center">
                  Tuma Ombi la Maombi
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Prayer Team</h3>
            <p className="text-gray-600 mb-6">
              Would you like to join our prayer team and help pray for others? Contact us to learn more.
            </p>
            <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
