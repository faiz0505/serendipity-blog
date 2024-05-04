// "use server";
// import { connectToDatabase } from "@/lib/database/connectToDatabase";
// import Blog from "../components/Blog";
// import { data } from "../data";
// import { Post } from "@/lib/database/Modals";

// export const fetchPosts = (category, page, categories) => {
//   if (!category) {
//     const res = data;
//     return res.slice(0, page * 9).map((post) => {
//       return (
//         <Blog
//           key={post.uniqueId}
//           id={post.uniqueId}
//           title={post.title}
//           content={post.content}
//           category={post.category}
//           date={"03-May-2024"}
//         />
//       );
//     });
//   }
//   if (category === "Others") {
//     const othersCategoryData = data.filter(
//       (post) => !categories.includes(post.category)
//     );
//     return othersCategoryData.slice(0, page * 9).map((post) => {
//       return (
//         <Blog
//           key={post.uniqueId}
//           id={post.uniqueId}
//           title={post.title}
//           content={post.content}
//           category={post.category}
//           date={"03-May-2024"}
//         />
//       );
//     });
//   }
//   const res = data.filter((post) => post.category === category);
//   return res.slice(0, page * 9).map((post) => {
//     return (
//       <Blog
//         key={post.uniqueId}
//         id={post.uniqueId}
//         title={post.title}
//         content={post.content}
//         categoty={post.category}
//         date={"03-May-2024"}
//       />
//     );
//   });
// };

// export const postsCount = (category) => {
//   if (category) {
//     const res = data.filter((post) => post.category === category);
//     return res.length === 0 ? 1 : res.length;
//   }
//   const res = data;
//   return res.length === 0 ? 1 : res.length;
// };

"use server";
export const addNewPost = async (title, content, category, user) => {
  try {
    await connectToDatabase();
    const newPost = await Post.create({
      title,
      content,
      category,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: "",
      comments: [],
    });
    if (!newPost) {
      throw Error("Post didn't created");
    }
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    throw new Error(error);
  }
};
