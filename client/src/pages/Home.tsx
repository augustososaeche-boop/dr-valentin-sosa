/*
 * Design Philosophy: Medicina Suiza Contemporánea
 * - Layout asimétrico con grilla 8-4 y 7-5
 * - Tipografía: Playfair Display (títulos) + Inter (cuerpo)
 * - Azul médico profundo + blanco puro + grises fríos
 * - Transiciones precisas y lineales (150-200ms)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertCircle, ChevronRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header con navegación fija */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-primary"></div>
              <div>
                <h1 className="font-semibold tracking-tight text-foreground" style={{fontSize: '28px'}}>Dr. Valentín Sosa</h1>
                <p className="text-xs text-muted-foreground">Especialista Recertificado. M.P: 447702</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#procedimiento" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-150">
                Procedimiento
              </a>
              <a href="#tecnica" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-150">
                Técnica
              </a>
              <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-150">
                Contacto
              </a>
              <Button size="sm" className="transition-all duration-150">
                <Phone className="w-4 h-4 mr-2" />
                Consultar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Sección Hero - CIRUGÍAS PERCUTÁNEAS */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/F7xHduwsUNYEzxNQsvRJoB/sandbox/sgl9YQeVpgzGFMvXRrnQEF-img-1_1770655544000_na1fn_aGVyby1tZWRpY2FsLXByZWNpc2lvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRjd4SGR1d3NVTllFenhOUXN2UkpvQi9zYW5kYm94L3NnbDlZUWVWcGd6R0ZNdlhScm5RRUYtaW1nLTFfMTc3MDY1NTU0NDAwMF9uYTFmbl9hR1Z5YnkxdFpXUnBZMkZzTFhCeVpXTnBjMmx2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PdAkSJ4AM8R4pdRpEX7Fht9KXP5sJz1iNLG8tqRTmZpXOQWpsoBzwA9Ly5F3kCSgCn3C9VWO49WDTFVHBBcCIMRdj9gzTyxx1E7kiXyU3aHUhrSRvXsXIg0-HIr-JVU~QrcGTFoTrQIhUWUBPynRfmCirb7-6cczqwwMYJBlftIKzOcqozSBdkEOSb-4G56-SAzJ8~HNEMbrrA8sgy6x9ShjFd-MEKX8e7lkn4NMFAlcH7m-8fMXMCU6nHaoIRAhETaa-QL-LuH1ZXfh8HtuRTfXHrAZBonen9tNGjo5z1rnFfS9oOwllGwjuimR74n5jrhUMY97kWAjowc8OGZ-BA__"
              alt="Precisión quirúrgica"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                      Médico Traumatólogo
                    </p>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                    Cirugías Percutáneas<br />
                    <span className="text-primary">Hallux Valgus (JUANETES)</span>
                  </h1>
                  
                  <div className="flex items-start gap-4 bg-accent/10 p-6 border-l-4 border-accent">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Tratamiento de Juanetes con Técnica Mínimamente Invasiva
                      </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Procedimiento percutáneo de última generación para la corrección del Hallux Valgus (juanetes), 
                      con mínimas incisiones, menor dolor postoperatorio y recuperación más rápida que las técnicas tradicionales.
                      <br /><br />
                      <strong className="text-primary">NO DEJA CICATRICES</strong>
                    </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="text-base px-8 transition-all duration-150 hover:shadow-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Agendar Consulta
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 transition-all duration-150">
                      Más Información
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-px bg-border"></div>
                  <Card className="border-2 shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Beneficios del Procedimiento</h3>
                      <ul className="space-y-3">
                        {[
                          "Mínimas incisiones (2-3mm)",
                          "Recuperación más rápida",
                          "Menor dolor postoperatorio",
                          "Anestesia local + sedación",
                          "Alta el mismo día"
                        ].map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 02 - El Procedimiento */}
        <section id="procedimiento" className="py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <div className="space-y-8">
                  <div className="relative">
                    <span className="section-number absolute -left-4 -top-8">02</span>
                    <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary mb-4">
                      <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                        El Procedimiento
                      </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                      ¿Qué es la Cirugía Percutánea de Hallux Valgus?
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      La cirugía percutánea del Hallux Valgus es un procedimiento quirúrgico mínimamente invasivo 
                      diseñado para corregir la deformidad del dedo gordo del pie conocida como "juanete". 
                      A diferencia de las técnicas tradicionales abiertas, este método utiliza pequeñas incisiones 
                      de apenas 2 a 3 milímetros.
                    </p>



                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      El procedimiento corrige la desviación del primer metatarsiano y realinea el dedo gordo, 
                      eliminando la prominencia ósea dolorosa característica del juanete. La técnica percutánea 
                      permite una recuperación significativamente más rápida, con menos dolor postoperatorio 
                      y cicatrices prácticamente imperceptibles.
                    </p>


                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-6">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/F7xHduwsUNYEzxNQsvRJoB/sandbox/sgl9YQeVpgzGFMvXRrnQEF-img-2_1770655541000_na1fn_Zm9vdC1hbmF0b215LWRpYWdyYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRjd4SGR1d3NVTllFenhOUXN2UkpvQi9zYW5kYm94L3NnbDlZUWVWcGd6R0ZNdlhScm5RRUYtaW1nLTJfMTc3MDY1NTU0MTAwMF9uYTFmbl9abTl2ZEMxaGJtRjBiMjE1TFdScFlXZHlZVzAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OjqQJSDI3z-Bco6zhBrIiBHqYZ09BWDM~X0W0EsR4rgwO0Kte6xnZ-tKFD9mCbXARHNrUsfsD4dIlX~nmViW23MK42PkYJNdncw1eRZf1mSiJqKOkMnnLBpO47EbTAY~st7eeDoaerqtpVup4gY6WOASsX6eXEPOJKGdSPCxQub9lwBbCHuZys~WUrHr64e8i1dVY0yv7iML6j9rmaPk3qYrDqX0fyEgD7IfTBsMwIWYM7bqjaGpyZHggOHIlEK8Wknfr6DI12MMV7kShN-p4yqb3lQIw4fux5fXaxmwuiQRU8TpQW7J5SmJlbbAATCTe0UeSt10OGxKwcR8ppI-HA__"
                    alt="Anatomía del Hallux Valgus"
                    className="w-full rounded-lg shadow-lg border-2 border-border"
                  />
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343365141/QfatkcvIEddXbSfC.jpg"
                    alt="Antes y después del procedimiento"
                    className="w-full rounded-lg shadow-lg border-2 border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 03 - Técnica, Anestesia y Cuidados */}
        <section id="tecnica" className="py-24 bg-background">
          <div className="container">
            <div className="mb-16">
              <div className="relative max-w-3xl">
                <span className="section-number absolute -left-4 -top-8">03</span>
                <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary mb-4">
                  <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                    Detalles Técnicos
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Técnica, Anestesia y Cuidados Postquirúrgicos
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Técnica Quirúrgica */}
              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Técnica Quirúrgica</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p className="leading-relaxed">
                      Se realizan pequeñas incisiones de 2-3mm a través de las cuales se introducen 
                      instrumentos especializados (fresas quirúrgicas de pequeño calibre).
                    </p>
                    <p className="leading-relaxed">
                      Bajo control fluoroscópico continuo, se realizan osteotomías (cortes óseos) precisos 
                      en el primer metatarsiano para corregir la desviación angular.
                    </p>
                    <p className="leading-relaxed">
                      La corrección se fija mediante tornillos de titanio biocompatibles que quedan 
                      internamente, sin necesidad de retiro posterior en la mayoría de los casos.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <img 
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343365141/cfLtRDyXCNDjxiYv.jpeg"
                        alt="Radiografía del procedimiento"
                        className="w-full rounded-lg mt-4"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anestesia */}
              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Anestesia</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p className="leading-relaxed">
                      El procedimiento se realiza bajo <strong className="text-foreground">anestesia local 
                      del tobillo</strong> combinada con sedación consciente administrada por un 
                      médico anestesiólogo.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg my-4">
                      <h4 className="font-semibold text-foreground mb-2">Ventajas de esta técnica:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Menor riesgo anestésico</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Recuperación más rápida</span>
                        </li>

                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Alta el mismo día</span>
                        </li>
                      </ul>
                    </div>
                    <p className="leading-relaxed">
                      El paciente permanece cómodo y sin dolor durante todo el procedimiento, 
                      pudiendo incluso conversar con el equipo quirúrgico si lo desea.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cuidados Postquirúrgicos */}
              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Cuidados Postquirúrgicos</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                      <h4 className="font-semibold text-foreground mb-2">El paciente:</h4>
                      <ul className="space-y-2">
                        <li>• Debe deambular el mismo día de la intervención.</li>
                        <li>• NO requiere de internación</li>
                        <li>• NO necesita inmovilización con yeso ni férula. Solamente vendaje.</li>
                      </ul>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="font-semibold text-foreground">REHABILITACIÓN INMEDIATA.</h4>
                      <p className="leading-relaxed">
                        El paciente puede deambular inmediatamente después de la intervención. 
                        Se utiliza vendaje compresivo que se cambia en consulta para facilitar la recuperación rápida.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <img 
                        src="https://private-us-east-1.manuscdn.com/sessionFile/F7xHduwsUNYEzxNQsvRJoB/sandbox/sgl9YQeVpgzGFMvXRrnQEF-img-3_1770655543000_na1fn_cmVjb3ZlcnktcGVhY2VmdWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRjd4SGR1d3NVTllFenhOUXN2UkpvQi9zYW5kYm94L3NnbDlZUWVWcGd6R0ZNdlhScm5RRUYtaW1nLTNfMTc3MDY1NTU0MzAwMF9uYTFmbl9jbVZqYjNabGNua3RjR1ZoWTJWbWRXdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CPt7gPtEGyGs23IkvNV7yJqQPC9xDZl0bts3Cx5he37fKzrqMGr0btDEiiYRWFklSR5dF3HoSgV2t45YJCxnCmV7ya47Qv-ZDfhmd10EYeq23gwyPg8joR79p2Xzr1N5uiC5oY71WBkwuPcJw6EY0GJndNhDR-GoOwHnJ9anXAarU3lqMrvRUuGkxEDGWeYbIg8xZ6Oz32Nl8fZSb6hjVE~238jg01AWnDdBgep-B6LcSCdUo7eybok9uBvtYbmP~tQOF5Inl8pm2yMOVxVRTZ1ZrqmdXRMWm7~NRpaoivjCswhjNqFzLBEL76MLjuhedXnunlPnPtVEo34n8KueUg__"
                        alt="Recuperación postquirúrgica"
                        className="w-full rounded-lg mt-4"
                      />
                    </div>


                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sección 04 - Contacto y Ubicación */}
        <section id="contacto" className="py-24 bg-muted/30">
          <div className="container">
            <div className="mb-16 text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary mb-4">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase">
                  Contacto
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Agende su Consulta
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarle a recuperar su calidad de vida. Contáctenos para más información 
                o para agendar una evaluación personalizada.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Información de Contacto */}
              <div className="space-y-6">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                          <p className="text-muted-foreground">0236-4448110</p>
                          <p className="text-sm text-muted-foreground mt-1"></p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Email</h4>
                          <p className="text-muted-foreground">sosav@intramed.net</p>
                          <p className="text-sm text-muted-foreground mt-1">Respuesta en 24-48 horas</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Ubicaciones</h4>
                          <p className="text-muted-foreground">
                            <strong>APEX:</strong> Arquimedes 39, Junín (B)<br />
                            <strong>Clínica LA PEQUEÑA FAMILIA:</strong> Ruta 188 y Alberdi, Junín (B)
                          </p>
                        </div>
                      </div>


                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <Button className="w-full" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Solicitar Consulta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Imagen de Consulta */}
              <div className="space-y-6">
                <Card className="border-2 shadow-lg overflow-hidden">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343365141/zdVhbXbCZBKrAUij.png"
                    alt="APEX y Clínica La Pequeña Familia"
                    className="w-full h-80 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground">APEX Y LA PEQUEÑA FAMILIA</h3>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-background"></div>
                <div>
                  <h3 className="text-lg font-semibold">Dr. Valentín Sosa</h3>
                  <p className="text-sm text-background/70">Traumatólogo Especialista</p>
                </div>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                Médico Traumatólogo Especialista Recertificado en Cirugías Percutáneas 
                de Hallux Valgus (Juanetes).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#procedimiento" className="hover:text-background transition-colors duration-150">El Procedimiento</a></li>
                <li><a href="#tecnica" className="hover:text-background transition-colors duration-150">Técnica y Cuidados</a></li>
                <li><a href="#contacto" className="hover:text-background transition-colors duration-150">Contacto</a></li>
              </ul>
            </div>


          </div>

          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
            <p>&copy; 2026 Dr. Valentín Sosa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
