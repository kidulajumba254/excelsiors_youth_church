"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  imageUrl: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Finding Your Purpose in Christ",
    excerpt: "Discover how to align your life's purpose with God's plan for you and make a meaningful impact in the world.",
    date: "May 15, 2025",
    author: "Pastor John Smith",
    category: "Faith",
    imageUrl: "/blog-1.jpg",
    slug: "finding-your-purpose"
  },
  {
    id: 2,
    title: "Building Strong Youth Communities",
    excerpt: "Learn effective strategies for creating and nurturing vibrant youth communities in today's digital age.",
    date: "May 12, 2025",
    author: "Sarah Johnson",
    category: "Community",
    imageUrl: "/blog-2.jpg",
    slug: "building-strong-communities"
  },
  {
    id: 3,
    title: "The Power of Youth Worship",
    excerpt: "Explore how music and worship can transform young hearts and create lasting spiritual connections.",
    date: "May 8, 2025",
    author: "Michael Chen",
    category: "Worship",
    imageUrl: "/blog-3.jpg",
    slug: "power-of-worship"
  }
]

const categories = ["All", "Faith", "Community", "Worship", "Leadership", "Service"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog & Articles</h1>

        {/* Search and Categories */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
                <div className="aspect-video relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
