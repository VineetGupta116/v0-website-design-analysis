"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/917017193675"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-75" />
    </a>
  )
}
