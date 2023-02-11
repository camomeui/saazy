const url = process.env.NEXT_PUBLIC_SITE_URL;

/** @type {import('@/types').SiteData} */
const siteData = {
  title: "Saazy",
  subtitle: "This is subtitle text",
  description: "This is description text about your website.",
  url,
  ogImage: url + "/images/og.png",
  defaultAuthor: "john-doe",
  defaultBlogThumbImg: "/images/post-placeholder.webp",
  blogPostsPerPage: 7,
};

export default siteData;
