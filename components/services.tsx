import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Heart, Sparkles, TrendingUp, Users2, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Ansiedade e Estresse",
      description: "Técnicas eficazes para gerenciar ansiedade, ataques de pânico e estresse do dia a dia",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Relacionamentos",
      description: "Melhore suas relações interpessoais, amorosas e familiares com autoconhecimento",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Carreira e Propósito",
      description: "Encontre direção profissional e construa uma carreira alinhada com seus valores",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Autoestima",
      description: "Desenvolva confiança, autoaceitação e uma relação mais saudável consigo mesmo",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Users2,
      title: "Habilidades Sociais",
      description: "Supere timidez e desenvolva comunicação assertiva e relações mais autênticas",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Transições de Vida",
      description: "Navegue mudanças importantes com suporte emocional e estratégias práticas",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const formats = [
    {
      title: "Online",
      description: "Atendimento por videochamada com total privacidade e conforto",
      features: ["Flexibilidade de horários", "Conforto da sua casa", "Mesma eficácia"],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Presencial",
      description: "Consultório acolhedor no coração de São Paulo",
      features: ["Ambiente privativo", "Fácil acesso", "Estacionamento"],
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Áreas de Atuação</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Como posso <span className="gradient-text">te ajudar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Trabalho com diversas questões que afetam jovens adultos, sempre com uma abordagem personalizada e baseada
              em evidências.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 relative overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-[2rem] blur-3xl" />
            <div className="relative glass-effect rounded-[2rem] p-8 sm:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Escolha o formato ideal</h3>
                <p className="text-muted-foreground">Flexibilidade para atender suas necessidades</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {formats.map((format, index) => (
                  <Card key={index} className="p-8 border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all">
                    <div
                      className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${format.gradient} text-white text-sm font-semibold mb-4`}
                    >
                      {format.title}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{format.description}</p>
                    <ul className="space-y-3 mb-6">
                      {format.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                    >
                      Saber mais
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
