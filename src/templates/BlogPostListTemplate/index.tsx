import BlogGrid from "@/components/BlogGrid";
import BlogPagination from "@/components/BlogPagination";
import { type ExtractContentMeta } from "@/lib/contentlayer";
import { Pagination } from "@/types";
import siteData from "content/siteData";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

const { defaultBlogThumbImg } = siteData;

type Props = {
  posts: ExtractContentMeta<Blog>[];
  pagination?: Pagination;
};

export default function BlogPostListTemplate({ posts, pagination }: Props) {
  return (
    <div className={styles.container}>
      <BlogGrid
        posts={posts.map((post) => {
          return {
            ...post,
            description: post.description ?? "",
            thumbImg: post.thumbImg ?? defaultBlogThumbImg,
          };
        })}
      />
      {pagination && <BlogPagination {...pagination} />}
    </div>
  );
}
