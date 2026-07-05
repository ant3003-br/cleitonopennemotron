import { Link } from "react-router-dom";
import { albums } from "../data/albums.js";

export default function PortfolioAlbunsPage() {
  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 lg:px-10 bg-ink text-paper">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-paper/70 mb-5">Portfólio</p>
          <h1 className="font-display text-[40px] md:text-[64px] leading-[1.05] font-medium max-w-2xl">
            Álbuns organizados por tema.
          </h1>
          <p className="text-paper/80 max-w-xl mt-6 text-[15px] md:text-base leading-relaxed font-light">
            Escolha um álbum para ver a coleção completa de fotografias — clique em qualquer imagem para
            ampliar e navegar entre as fotos.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {albums.map((album, i) => (
              <Link
                key={album.slug}
                to={`/portfolio/${album.slug}`}
                className="focus-ring group block"
                aria-label={`Ver álbum ${album.name}${album.count ? ` — ${album.count} fotos` : ""}`}
              >
                <div className="relative overflow-hidden bg-mist aspect-[4/5]">
                  {album.cover ? (
                    <img
                      src={album.cover}
                      alt={`Capa do álbum ${album.name}`}
                      loading={i < 6 ? "eager" : "lazy"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-graphite font-mono text-xs">
                      Em breve
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-mono text-[11px] text-paper/70">
                      {String(i + 1).padStart(2, "0")} · {album.count}{" "}
                      {album.count === 1 ? "foto" : "fotos"}
                    </span>
                    <h2 className="font-display text-2xl text-paper mt-1">{album.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
