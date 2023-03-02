import siteData from "@/content/siteData";
import kebabCase from "@/lib/kebabCase";
import { allBlogs } from "contentlayer/generated";

const { blogPostsPerPage } = siteData;

export function getBlogPostsForPage(pageNumber: number) {
  const posts = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(blogPostsPerPage * (pageNumber - 1), blogPostsPerPage * pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allBlogs.length / blogPostsPerPage),
  };
  return { posts, pagination };
}

export async function getAllTags() {
  const tags: { slug: string; label: string; count: number }[] = [];
  allBlogs.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        const slug = kebabCase(tag);
        const target = tags.find((t) => t.slug === slug);
        if (target) {
          target.count += 1;
        } else {
          tags.push({
            slug,
            label: tag,
            count: 1,
          });
        }
      });
    }
  });

  return tags;
}
