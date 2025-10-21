"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp (formato: 5511999999999)
    const phoneNumber = "5514991044572"
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50 animate-fade-in-up"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </Button>
  )
}
