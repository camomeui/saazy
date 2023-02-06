const url = process.env.NEXT_PUBLIC_SITE_URL;

/** @type {import('@/types').SiteData} */
const siteData = {
  title: "Saazy",
  subTitle: "Grow your business with your customers",
  description: "This is description text about your website.",
  url,
  ogImage: url + "/images/og.png",
  defaultAuthor: "john-doe",
  defaultBlogThumbImg: "/images/post-placeholder.webp",
  blogPostsPerPage: 8,
};

export default siteData;
