import Image, { type StaticImageData } from 'next/image';

interface CardsProjetosProps {
  title: string;
  text: string;
  url?: string;
  repo?: string;
  img: string | StaticImageData;
}

export default function CardsProjetos({
  title,
  text,
  url,
  repo,
  img,
}: CardsProjetosProps) {
  const image = img ? (
    <Image
      src={img}
      alt={`Imagem do projeto ${title}`}
      fill
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 28vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-(--secondary)/40 text-sm text-(--tertiary)/70">
      Imagem do projeto
    </div>
  );

  return (
    <div className="max-w-100">
      <div className="card group relative aspect-[16/10] overflow-hidden rounded-xl border-2 border-(--primary)/20 bg-(--secondary)/20 shadow-lg">
        {url ? (
          <a href={url} className="block h-full w-full">
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      <div className="flex flex-col text-center mx-2 text-(--tertiary) mt-5">
        <p className="w-full font-bold text-(--primary)">{title}</p>
        <p className="w-full text-sm font-light text-mist-600">{text}</p>
        {repo && (
          <a href={repo} className="text-sm text-mist-600 font-bold">
            Repository
          </a>
        )}
      </div>
    </div>
  );
}
