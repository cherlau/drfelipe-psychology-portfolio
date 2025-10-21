"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Mail, MapPin, Phone, Instagram, Linkedin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">Entre em Contato</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Pronto para começar sua <span className="gradient-text">jornada</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Entre em contato para agendar sua primeira sessão ou tirar dúvidas. Estou aqui para te ajudar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold mb-1">Telefone / WhatsApp</div>
                  <div className="text-sm text-muted-foreground">(11) 99999-9999</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Respondo em até 24 horas úteis</p>
              <Button className="w-full rounded-full shadow-lg">
                <Phone className="mr-2 h-4 w-4" />
                Ligar agora
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold mb-1">E-mail</div>
                  <div className="text-sm text-muted-foreground break-all">contato@felipecampos.psi.br</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Envie suas dúvidas por e-mail</p>
              <Button variant="outline" className="w-full rounded-full border-2 bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Enviar e-mail
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold mb-1">Consultório</div>
                  <div className="text-sm text-muted-foreground">
                    Av. Paulista, 1000 - Sala 1234
                    <br />
                    Bela Vista, São Paulo - SP
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Atendimento presencial e online</p>
              <Button variant="outline" className="w-full rounded-full border-2 bg-transparent">
                <MapPin className="mr-2 h-4 w-4" />
                Ver no mapa
              </Button>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold">Horários de atendimento</h4>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Segunda a Sexta", hours: "8h - 20h" },
                  { day: "Sábado", hours: "9h - 14h" },
                  { day: "Domingo", hours: "Fechado" },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <h4 className="font-bold mb-2">Primeira sessão com desconto</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Agende sua primeira consulta e ganhe 20% de desconto. Uma oportunidade para conhecer o trabalho sem
                compromisso.
              </p>
              <div className="space-y-3">
                <Button className="w-full rounded-full shadow-lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Aproveitar oferta
                </Button>
                <div className="flex gap-3 justify-center">
                  <h4 className="text-sm font-semibold">Redes sociais:</h4>
                  {[
                    { icon: Instagram, gradient: "from-pink-500 to-rose-500" },
                    { icon: Linkedin, gradient: "from-blue-500 to-cyan-500" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      className={`rounded-full bg-gradient-to-br ${social.gradient} hover:scale-110 transition-transform shadow-lg border-0`}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
