import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Lucas M.",
      age: 26,
      text: "A terapia me ajudou a entender minha ansiedade e desenvolver ferramentas práticas para lidar com ela. Hoje me sinto muito mais confiante e no controle.",
      rating: 5,
    },
    {
      name: "Mariana S.",
      age: 24,
      text: "Finalmente encontrei uma psicóloga que me entende de verdade. O ambiente é super acolhedor e as sessões online são super práticas para minha rotina.",
      rating: 5,
    },
    {
      name: "Pedro R.",
      age: 29,
      text: "Estava perdido na carreira e nos relacionamentos. A terapia me ajudou a me reconectar com meus valores e tomar decisões mais alinhadas com quem eu sou.",
      rating: 5,
    },
    {
      name: "Julia K.",
      age: 23,
      text: "Comecei a terapia com muita resistência, mas hoje vejo como foi transformador. Aprendi a me aceitar mais e a construir relações mais saudáveis.",
      rating: 5,
    },
    {
      name: "Rafael T.",
      age: 27,
      text: 'A abordagem é moderna e prática, sem aquele papo de "deitar no divã". Sinto que estou realmente evoluindo a cada sessão.',
      rating: 5,
    },
    {
      name: "Camila L.",
      age: 25,
      text: "Melhor decisão que tomei foi começar terapia. Me ajudou a superar traumas, melhorar minha autoestima e viver de forma mais leve e autêntica.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Star className="w-4 h-4 fill-accent" />
              <span className="text-sm font-semibold">Depoimentos</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              O que meus <span className="gradient-text">pacientes</span> dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Depoimentos reais de pessoas que transformaram suas vidas através da terapia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-[3rem]" />
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.age} anos</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-effect shadow-xl">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent -ml-1 first:ml-0" />
                ))}
              </div>
              <span className="font-bold text-lg">4.9/5.0</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">120+ avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
