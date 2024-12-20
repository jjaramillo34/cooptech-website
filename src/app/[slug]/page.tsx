import Image from 'next/image';
import { getProgramData, getMarkdownContent, getAllProgramSlugs } from '@/lib/markdown';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const programData = await getProgramData(params.slug);
  return {
    title: programData.title,
    description: programData.description,
  };
}

export async function generateStaticParams() {
  const paths = await getAllProgramSlugs();
  return paths.map(path => ({
    slug: path.params.slug
  }));
}

export default async function ProgramPage({ params }: PageProps) {
  const programData = await getProgramData(params.slug);
  const content = await getMarkdownContent(programData.content);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={programData.image}
            alt={programData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {programData.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {programData.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="/PDFs/Application.pdf" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
} 