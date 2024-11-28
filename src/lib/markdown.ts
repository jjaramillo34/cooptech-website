import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const programsDirectory = path.join(process.cwd(), "src/content/programs");

export interface ProgramData {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
}

export async function getProgramData(slug: string): Promise<ProgramData> {
  const fullPath = path.join(programsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    image: data.image,
    content,
  };
}

export async function getAllProgramSlugs() {
  const fileNames = await fs.readdir(programsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getMarkdownContent(content: string) {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}
