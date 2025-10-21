import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Conteúdo */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Psicologia Moderna & Sem Tabus
              </span>
            </div>

            {/* O "FIX" ESTÁ AQUI.
              O H1 AGORA É A PROMESSA, NÃO O NOME.
            */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
              Transforme sua <span className="gradient-text">saúde mental</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up text-pretty leading-relaxed">
              <span className="font-semibold text-primary">Felipe Guimarães</span>,
              Psicólogo Analítico-Comportamental. Terapia online e presencial
              focada em autoconhecimento e mudança de comportamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up mb-12">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full border-2 bg-transparent"
              >
                Conhecer abordagem
              </Button>
            </div>

            {/* Stats modernos (Isso aqui está perfeito, não mude nada) */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 animate-fade-in-up">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text mb-1">
                  500+
                </div>
                <div className="text-xs text-muted-foreground">Pacientes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text mb-1">8+</div>
                <div className="text-xs text-muted-foreground">Anos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                <div className="text-xs text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-up">
            <div className="relative max-w-lg mx-auto">
              {/* Efeitos decorativos */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

              {/* Container da foto */}
              <div className="relative glass-effect rounded-[2rem] p-2 shadow-2xl">
                <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/perfil11111.png"
                    alt="Dr. Felipe Guimarães - Psicólogo"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-4 right-3 glass-effect px-6 py-3 rounded-full shadow-xl">
                  <p className="text-sm font-semibold text-center">
                    Felipe Guimarães
                  </p>{" "}
                  {/* <-- SEM "Dr." */}
                  <p className="text-xs text-muted-foreground font-poppins">
                    Psicólogo | CRP 06/188968
                  </p>{" "}
                  {/* <-- Assim! */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator moderno */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
