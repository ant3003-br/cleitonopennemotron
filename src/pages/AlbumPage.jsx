import { Link, useParams } from "react-router-dom";
import { getAlbumBySlug, albums } from "../data/albums.js";
import MasonryGallery from "../components/MasonryGallery.jsx";
import { IconChevronLeft, IconWhatsApp } from "../components/Icons.jsx";

export default function AlbumPage() {
  const { slug } = useParams();
  const album = getAlbumBySlug(slug);

  if (!album) {
    return (
      <section className="pt-40 pb-24 px-6 lg:px-10 min-h-[60vh]">
        <div className="max-w-content mx-auto text-center">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">Portfólio</p>
          <h1 className="font-display text-3xl md:text-4xl text-ink mb-6">Álbum não encontrado.</h1>
          <Link
            to="/portfolio"
            className="focus-ring inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-ink border-b border-ink pb-1"
          >
            <IconChevronLeft className="w-4 h-4" />
            Voltar para os álbuns
          </Link>
        </div>
      </section>
    );
  }

  const otherAlbums = albums.filter((a) => a.slug !== slug && a.count > 0);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-14 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto">
          <Link
            to="/portfolio"
            className="focus-ring inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-graphite hover:text-ink transition-colors mb-8"
          >
            <IconChevronLeft className="w-4 h-4" />
            Todos os álbuns
          </Link>

          {/* Container flexível: textos na esquerda e botão na direita em telas maiores */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">
                Álbum · {album.count} {album.count === 1 ? "foto" : "fotos"}
              </p>
              <h1 className="font-display text-[36px] md:text-[56px] leading-[1.05] font-medium text-ink mb-3">
                {album.name}
              </h1>
              <p className="text-graphite font-light text-[15px]">{album.description}</p>
            </div>
            
            {/* Botão posicionado e alinhado à direita no desktop */}
            <div className="flex-shrink-0">
              <a 
                href={`https://wa.me/5531985310266?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o álbum: ${album.name}`)}`}
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex items-center gap-3 bg-white border border-ink text-ink px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase hover:bg-ink hover:text-white transition-all duration-300 w-full md:w-auto justify-center"
              >
                <IconWhatsApp className="w-4 h-4" />
                Quero um orçamento para {album.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto">
          <MasonryGallery images={album.images} />
        </div>
      </section>

      {otherAlbums.length > 0 && (
        <section className="py-16 px-6 lg:px-10 bg-mist">
          <div className="max-w-content mx-auto">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-graphite mb-6">Outros álbuns</p>
            <div className="flex flex-wrap gap-3">
              {otherAlbums.map((a) => (
                <Link
                  key={a.slug}
                  to={`/portfolio/${a.slug}`}
                  className="focus-ring border border-line px-5 py-2.5 text-[13px] text-graphite hover:text-ink hover:border-ink transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
