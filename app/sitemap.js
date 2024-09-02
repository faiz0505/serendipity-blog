export default async function sitemap() {
  return [
    { url: "https://serendipityblog.vercel.app", lastModified: new Date() },
    {
      url: "https://serendipityblog.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://serendipityblog.vercel.app/contact",
      lastModified: new Date(),
    },
    {
      url: "https://serendipityblog.vercel.app/create-post",
      lastModified: new Date(),
    },
  ];
}
