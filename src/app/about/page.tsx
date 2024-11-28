import Image from "next/image";
import ClientLayout from "@/components/ClientLayout";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
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
              About Coop Tech
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* History Section */}
            <section className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed">
                For over thirty years, The School for Cooperative Technical Education has been a half-day vocational program that offers students hands-on training in a variety of in-demand and cutting-edge trade areas. Coop Tech serves approximately 1,500 students in all five boroughs who are 17-21 years of age, and who represent a wide variety of ethnic and cultural backgrounds, ability levels, and educational histories. Coop Tech students join us as either shared instruction students who also attend over 130 traditional high schools and Pathways to Graduation programs, or as post-graduates who have already obtained a diploma.
              </p>
            </section>

            <Separator className="my-8" />

            {/* Cooperative Learning Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Cooperative Learning
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg leading-relaxed">
                  Many students at Coop Tech are given the opportunity to take part in the Department of Education's Work Based Learning (WBL) Program, which provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Job readiness skills</li>
                  <li>Knowledge of basic safety and OSHA procedures</li>
                  <li>CPR certification</li>
                  <li>Real-world work exposure</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Upon recommendation of program faculty, certain students can be matched with one of Coop Tech's intern partnership sites. Students are encouraged to take full advantage of internship opportunities as they build their portfolios and expand their skills for future employment. Eligible students who participate in paid internships receive minimum wage in addition to real work experience.
                </p>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">1,500+</h3>
                <p className="text-muted-foreground">Students Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">130+</h3>
                <p className="text-muted-foreground">Partner Schools</p>
              </div>
            </section>

            {/* Location Section */}
            <section className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Visit Us</h2>
              <p className="text-lg text-muted-foreground">
                321 East 96th Street<br />
                New York, NY<br />
                (212) 369-8800
              </p>
            </section>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
} 