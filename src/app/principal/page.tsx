import Image from "next/image";
import ClientLayout from "@/components/ClientLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PrincipalPage() {
  return (
    <ClientLayout>
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[400px] mb-16">
          <Image
            src="/Pics/Co-op Fascade 4.webp"
            alt="Co-op Tech Building Facade"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              Principal&apos;s Message
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg">
              <div className="space-y-8">
                {/* Principal's Photo Section */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden">
                    <Image
                      src="/Pics/principal.webp"
                      alt="Principal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      Welcome to Coop Tech!
                    </h2>
                    <p className="text-muted-foreground">
                      Principal&apos;s Office
                    </p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="leading-relaxed">
                    The School of Cooperative Technical Education (Coop Tech) is a unique citywide school that offers students opportunities to learn skills in a variety of different career and technical education courses. We have a dedicated group of educators that strive to prepare our students with the skills needed to be successful in high demand industries.
                  </p>
                  
                  <p className="leading-relaxed">
                    At Coop Tech, it is critical that our students are given opportunities to work towards state recognized industry certifications and develop the skills necessary to meet the demands of industry, career and college. We strongly believe that all students can be prepared to meet the industry demands and workforce challenges in a caring, supportive, rigorous and highly academic student-centered environment.
                  </p>
                  
                  <p className="leading-relaxed">
                    We continuously work towards providing students with authentic experiences in career and technical education and look forward to welcoming you to our school community.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href="/PDFs/Application.pdf" target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* School Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  321 East 96th Street<br />
                  New York, NY
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Phone: (212) 369-8800<br />
                  Email: info@cooptech.org
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  8:00 AM - 4:00 PM
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
} 