import Blog from "../components/Blog";
import { data } from "../data";

export const fetchPosts = (category,page) => {
  if (!category) {
    const res = data;
    return res.slice(0, 8).map((post) => {
      return (
        <Blog
          key={post.uniqueId}
          title={post.title}
          content={post.content}
          categoty={post.category}
        />
      );
    });
  }
  const res = data.filter((post) => post.category === category);
  return res.map((post) => {
    return (
      <Blog
        key={post.uniqueId}
        title={post.title}
        content={post.content}
        categoty={post.category}
      />
    );
  });
};
