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
      width={400}
      height={300}
      className="h-full w-full rounded object-cover shadow-xl/30 transition hover:scale-105"
    />
  ) : (
    <div className="flex aspect-[4/3] items-center justify-center rounded bg-(--secondary)/40 text-sm text-(--tertiary)/70">
      Imagem do projeto
    </div>
  );

  return (
    <div className="max-w-100">
      <div className="card overflow-hidden">
        {url ? <a href={url}>{image}</a> : image}
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
