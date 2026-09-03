import Image from 'next/image';

interface CardsProjetosProps {
  title: string;
  text: string;
  url?: string;
  repo?: string;
  img: string;
}

export default function CardsProjetos({
  title,
  text,
  url,
  repo,
  img,
}: CardsProjetosProps) {
  return (
    <div className="max-w-100">
      <div className="card max-h-100">
        <a href={url}>
          <Image
            src={img}
            alt={`Imagem do projeto ${title}`}
            width={400}
            height={300}
            className="rounded shadow-xl/30 transform hover:scale-105 transition"
          />
        </a>
      </div>
      <div className="flex flex-col text-center text-(--tertiary) mt-5">
        <p className="w-full font-bold text-(--primary)">{title}</p>
        <p className="w-full text-sm font-light text-mist-600">{text}</p>
        <a href={repo} className="text-sm text-mist-600 font-bold">
          Repository
        </a>
      </div>
    </div>
  );
}
