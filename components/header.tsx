"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl text-yellow-400 hover:text-yellow-300 transition-colors">
            EXCELSIORS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/sermons">Sermons</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/announcements">Announcements</NavLink>
            <NavLink href="/team">Youth Team</NavLink>
            <NavLink href="/prayer">Prayer Request</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold ml-4">
              <Link href="/donate">Donate</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-yellow-400 transition-colors" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-black transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} absolute top-20 left-0 w-full shadow-lg`}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <MobileNavLink href="/" onClick={toggleMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={toggleMenu}>
            About
          </MobileNavLink>
          <MobileNavLink href="/events" onClick={toggleMenu}>
            Events
          </MobileNavLink>
          <MobileNavLink href="/sermons" onClick={toggleMenu}>
            Sermons
          </MobileNavLink>
          <MobileNavLink href="/blog" onClick={toggleMenu}>
            Blog
          </MobileNavLink>
          <MobileNavLink href="/gallery" onClick={toggleMenu}>
            Gallery
          </MobileNavLink>
          <MobileNavLink href="/announcements" onClick={toggleMenu}>
            Announcements
          </MobileNavLink>
          <MobileNavLink href="/team" onClick={toggleMenu}>
            Youth Team
          </MobileNavLink>
          <MobileNavLink href="/prayer" onClick={toggleMenu}>
            Prayer Request
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={toggleMenu}>
            Contact
          </MobileNavLink>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-yellow-400 transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-gray-300 hover:text-yellow-400 transition-colors py-2 block" onClick={onClick}>
      {children}
    </Link>
  )
}
