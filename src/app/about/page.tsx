import Image from "next/image";
import { Card } from "@/components/ui/card";
import ClientLayout from "@/components/ClientLayout";

export default function AboutPage() {
  return (
    <ClientLayout>
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[400px] mb-16">
          <Image
            src="/Pics/Co-op Fascade 4.webp"
            alt="Co-op Tech Building"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              About Us
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg space-y-8">
              {/* Mission Statement */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To provide quality career and technical education that prepares students for success in their chosen trade and empowers them to become skilled professionals in their field.
                </p>
              </section>

              {/* History */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">Our History</h2>
                <p className="text-muted-foreground mb-4">
                  Since our establishment, Co-op Tech has been at the forefront of technical education in New York City. We&apos;ve evolved from a small vocational program to a comprehensive technical education center serving students across all five boroughs.
                </p>
                <p className="text-muted-foreground">
                  Our commitment to excellence in technical education has made us a trusted name in preparing the next generation of skilled professionals. We&apos;re proud of our legacy and continue to adapt our programs to meet the changing demands of industry.
                </p>
              </section>

              {/* Values */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      Striving for the highest standards in technical education and professional development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      Embracing new technologies and teaching methods to stay ahead of industry trends.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                    <p className="text-muted-foreground">
                      Creating a welcoming environment that celebrates diversity and promotes equal opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Building strong partnerships with local businesses and industry leaders.
                    </p>
                  </div>
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Achievements</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>High job placement rate for graduates</li>
                  <li>Industry-recognized certifications</li>
                  <li>Strong partnerships with leading employers</li>
                  <li>State-of-the-art training facilities</li>
                  <li>Award-winning technical programs</li>
                </ul>
              </section>
            </Card>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
} 