export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Primeira Sessão",
      description:
        "Conversamos sobre suas questões, expectativas e construímos juntos um plano terapêutico personalizado.",
    },
    {
      number: "02",
      title: "Desenvolvimento",
      description: "Exploramos suas emoções, padrões de pensamento e comportamento, desenvolvendo novas habilidades.",
    },
    {
      number: "03",
      title: "Transformação",
      description:
        "Você aplica as ferramentas aprendidas no dia a dia, construindo uma vida mais alinhada com seus valores.",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Como funciona o processo terapêutico
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              Um caminho estruturado mas flexível, que respeita seu ritmo e suas necessidades únicas.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl sm:text-7xl font-bold text-primary-foreground/30 mb-4">{step.number}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-primary-foreground/20" />
                )}
              </div>
            ))}
          </div>

          {/* FAQ Preview */}
          <div className="bg-primary-foreground/5 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">Perguntas frequentes</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Quanto tempo dura cada sessão?</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Cada sessão tem duração de 50 minutos, com frequência semanal ou quinzenal.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quanto tempo dura a terapia?</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Varia de pessoa para pessoa. Algumas questões podem ser trabalhadas em meses, outras levam mais tempo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Aceita convênio?</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Trabalho como particular, mas forneço recibo para reembolso junto ao seu convênio.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Como é o sigilo?</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Total e absoluto. Tudo que conversamos é protegido pelo código de ética profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
