import { Card } from "@/components/ui/card"
import { Brain, Heart, Sparkles, Users } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Um espaço acolhedor e sem julgamentos para você ser quem realmente é",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "Ciência",
      description: "Abordagens baseadas em evidências científicas e práticas atualizadas",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Autenticidade",
      description: "Terapia genuína que respeita sua individualidade e ritmo",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Conexão",
      description: "Construímos juntos uma relação terapêutica de confiança",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Sobre Mim</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Psicologia que faz sentido para a <span className="gradient-text">sua geração</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Entendo os desafios únicos que jovens adultos enfrentam hoje: ansiedade, pressão social, relacionamentos,
              carreira e a busca por propósito.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-card/50 backdrop-blur-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative glass-effect rounded-[2rem] p-2">
                <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/perfil22.png"
                    alt="Psicóloga"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">Olá, sou o Dr. Felipe Guimarães</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm font-semibold text-primary">CRP 06/123456 | Psicóloga Clínica</p>
                <p>Especializada em Terapia Cognitivo-Comportamental e Terapia de Aceitação e Compromisso (ACT).</p>
                <p>
                  Há mais de 8 anos ajudo jovens adultos a navegarem pelos desafios da vida moderna. Minha abordagem
                  combina técnicas cientificamente comprovadas com uma escuta genuína e acolhedora.
                </p>
                <p>
                  Acredito que a terapia deve ser um espaço de transformação real, onde você pode explorar suas questões
                  sem medo de julgamento e desenvolver ferramentas práticas para viver melhor.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["TCC", "ACT", "Mindfulness", "Terapia Breve"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
