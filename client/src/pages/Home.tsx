import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Users } from "lucide-react";

const pdfFiles = [
  { name: "Resumo filósofos_sociólogos", file: "Conceitovital_Resumofilósofos_sociólogos.pdf" },
  { name: "Transições História Geral", file: "Conceitovital_TransiçõesHistóriaGeral.pdf" },
  { name: "Transições História do Brasil", file: "Conceitovital_TransiçõesHistóriadoBrasil.pdf" },
  { name: "Filosofia política", file: "Conceitovital_Filosofiapolítica.pdf" },
  { name: "Moral e ética", file: "Conceitovital_Moraleética.pdf" },
  { name: "Racionalismo e empirismo", file: "Conceitovital_Racionalismoeempirismo.pdf" },
  { name: "Aristóteles", file: "Conceitovital_Aristóteles.pdf" },
  { name: "Sócrates e Platão", file: "Conceitovital_SócratesePlatão.pdf" },
  { name: "Pré-socráticos e Sofistas", file: "Conceitovital_Pré-socráticoseSofistas.pdf" },
  { name: "Geografia ambiental", file: "Conceitovital_Geografiaambiental.pdf" },
  { name: "Modelos produtivos", file: "Conceitovital_Modelosprodutivos.pdf" },
  { name: "Urbanização e Geografia populacional", file: "Conceitovital_UrbanizaçãoeGeografiapopulacional.pdf" },
  { name: "Geologia e geomorfologia", file: "Conceitovital_Geologiaegeomorfologia.pdf" },
  { name: "Cartografia", file: "Conceitovital_Cartografia.pdf" },
  { name: "Era Vargas", file: "Conceitovital_EraVargas.pdf" },
  { name: "Primeira República", file: "Conceitovital_PrimeiraRepública.pdf" },
  { name: "Primeiro Reinado e Segundo Reinado", file: "Conceitovital_PrimeiroReinadoeSegundoReinado.pdf" },
  { name: "Ocupação e expansão territorial no Brasil colônia", file: "Conceitovital_OcupaçãoeexpansãoterritorialnoBrasilcolônia.pdf" },
  { name: "Política e economia coloniais", file: "Conceitovital_Políticaeeconomiacoloniais.pdf" },
  { name: "Guerra Fria e Nova ordem mundial", file: "Conceitovital_GuerraFriaeNovaordemmundial.pdf" },
  { name: "Crise de 1929, período entreguerras e 2ª GM", file: "Conceitovital_Crisede1929,períodoentreguerrase2ªGM.pdf" },
  { name: "Imperialismo e Primeira Guerra Mundial", file: "Conceitovital_ImperialismoePrimeiraGuerraMundial.pdf" },
  { name: "Revolução industrial e globalização", file: "Conceitovital_Revoluçãoindustrialeglobalização.pdf" },
  { name: "Iluminismo, liberalismo e neoliberalismo", file: "Conceitovital_Iluminismo,liberalismoeneoliberalismo.pdf" },
  { name: "Absolutismo e mercantilismo", file: "Conceitovital_Absolutismoemercantilismo.pdf" },
  { name: "Idade média, feudalismo e transição feudo-capitalista", file: "Conceitovital_Idademédia,feudalismoetransiçãofeudo-capitalista.pdf" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Mentoria Mário Machado</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Conceitos vitais de <span className="text-blue-200">Humanas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Revise os tópicos conteudistas mais prováveis de estarem na sua prova!
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* CTA Section */}
      <div className="container py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-white to-blue-50/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <CardContent className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-blue flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Garanta sua vaga na Mentoria 2026
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Clique no botão abaixo e entre no grupo de espera das vagas da Mentoria Mário Machado 2026 para garantir uma das poucas vagas com a melhor oferta do ano!
                  </p>
                  
                  <Button 
                    size="lg"
                    className="gradient-blue text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto"
                    onClick={() => window.open('https://chat.whatsapp.com/CZm3wd5OZyv656skfeouBD?mode=ems_copy_c', '_blank')}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Entrar no grupo de espera
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* PDF Grid Section */}
      <div className="container py-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material de Estudo
            </h2>
            <p className="text-lg text-gray-600">
              Baixe os conceitos vitais e prepare-se para sua prova
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pdfFiles.map((pdf, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-blue-300 bg-white overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-md">
                      <FileText className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight min-h-[2.5rem] flex items-center">
                      {pdf.name}
                    </h3>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = `/pdfs/${pdf.file}`;
                        link.download = pdf.file;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Mentoria Mário Machado</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Preparação completa para sua aprovação nos principais vestibulares do país
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                © 2024 Mentoria Mário Machado. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
