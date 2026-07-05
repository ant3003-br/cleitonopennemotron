import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts, getAlbumImages } from "../data/blogData.js";
import { IconArrowRight, IconWhatsApp } from "../components/Icons.jsx";
import { business } from "../data/siteData.js";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const { coverImage, contentImages } = useMemo(() => {
    if (!post) return { coverImage: null, contentImages: [] };
    const imgs = getAlbumImages(post.albumSlug);
    const shuffled = [...imgs].sort(() => Math.random() - 0.5);
    const imageCount = post.content.filter((b) => b.type === "image").length;
    return {
      coverImage: shuffled.length > 0 ? shuffled[0]?.src : null,
      contentImages: shuffled.slice(1, 1 + imageCount).map((i) => i.src),
    };
  }, [post]);

  if (!post) {
    return (
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto text-center">
          <h1 className="font-display text-4xl text-ink mb-4">Post não encontrado</h1>
          <Link to="/blog" className="focus-ring inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase text-ink hover:gap-3 transition-all">
            <IconArrowRight className="w-4 h-4 rotate-180" />
            Voltar ao blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <article>
        <section className="pt-36 pb-12 md:pt-44 md:pb-20 px-6 lg:px-10 bg-ink text-paper">
          <div className="max-w-content mx-auto">
            <Link to="/blog" className="focus-ring-light inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-paper/60 hover:text-paper transition-colors mb-8">
              <IconArrowRight className="w-3.5 h-3.5 rotate-180" />
              Voltar ao blog
            </Link>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider text-paper/60 mb-5">
              <span>{post.category}</span>
              <span className="w-px h-3 bg-paper/20" aria-hidden="true" />
              <span>{post.date}</span>
              <span className="w-px h-3 bg-paper/20" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-display text-[32px] md:text-[56px] leading-[1.05] font-medium max-w-3xl">
              {post.title}
            </h1>
          </div>
        </section>

        {coverImage && (
          <section className="px-6 lg:px-10 bg-ink">
            <div className="max-w-content mx-auto">
              <div className="aspect-[16/7] overflow-hidden">
                <img src={coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-24 px-6 lg:px-10 bg-paper">
          <div className="max-w-content mx-auto max-w-2xl">
            <div className="space-y-5 text-[15px] md:text-base text-graphite font-light leading-[1.8]">
              {(() => {
                let imgIdx = 0;
                return post.content.map((block, i) => {
                  if (block.type === "image") {
                    const src = contentImages[imgIdx++];
                    if (!src) return null;
                    return (
                      <div key={i} className="my-8 overflow-hidden rounded-sm">
                        <img src={src} alt={post.title} className="w-full object-cover" />
                      </div>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="font-display text-2xl md:text-3xl text-ink font-medium pt-4">
                        {block.text}
                      </h2>
                    );
                  }
                  return <p key={i}>{block.text}</p>;
                });
              })()}
            </div>

            <div className="mt-16 pt-10 border-t border-line">
              <h3 className="font-display text-xl text-ink mb-4">Gostou? Vamos conversar!</h3>
              <p className="text-graphite font-light text-[14px] mb-6">
                Entre em contato pelo WhatsApp e solicite um orçamento personalizado para a sua cobertura fotográfica.
              </p>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-ink/85 transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-10">
              <Link to="/blog" className="focus-ring inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase text-ink hover:gap-3 transition-all">
                <IconArrowRight className="w-4 h-4 rotate-180" />
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
