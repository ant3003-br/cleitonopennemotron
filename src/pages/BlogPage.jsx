import { useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts, getAlbumImages } from "../data/blogData.js";
import { IconArrowRight } from "../components/Icons.jsx";

export default function BlogPage() {
  const randomCovers = useMemo(
    () =>
      Object.fromEntries(
        blogPosts.map((post) => {
          const imgs = getAlbumImages(post.albumSlug);
          return [post.slug, imgs.length > 0 ? imgs[Math.floor(Math.random() * imgs.length)].src : null];
        })
      ),
    []
  );

  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 lg:px-10 bg-ink text-paper">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-paper/70 mb-5">Blog</p>
          <h1 className="font-display text-[40px] md:text-[64px] leading-[1.05] font-medium max-w-2xl">
            Dicas, inspirações e histórias.
          </h1>
          <p className="text-paper/80 max-w-xl mt-6 text-[15px] md:text-base leading-relaxed font-light">
            Artigos sobre fotografia, preparação para ensaios e tudo o que envolve eternizar momentos especiais.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="focus-ring group block"
              >
                <div className="relative overflow-hidden bg-mist aspect-[4/3]">
                  {randomCovers[post.slug] ? (
                    <img
                      src={randomCovers[post.slug]}
                      alt={post.title}
                      loading={i < 3 ? "eager" : "lazy"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-graphite font-mono text-xs">
                      Em breve
                    </div>
                  )}
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider text-graphite mb-2">
                    <span>{post.category}</span>
                    <span className="w-px h-3 bg-line" aria-hidden="true" />
                    <span>{post.date}</span>
                    <span className="w-px h-3 bg-line" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl text-ink group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-graphite font-light text-[14px] mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-ink mt-4 group-hover:gap-3 transition-all">
                    Ler artigo
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
