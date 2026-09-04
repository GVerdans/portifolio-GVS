interface ButtonHeroProps {
  txt: string;
  style?: string;
  src?: string;
  fction?: () => void;
}

export default function ButtonsHero({
  txt,
  style,
  src,
  fction,
}: ButtonHeroProps) {
  const className = `m-2 flex h-10 w-40 cursor-pointer items-center justify-center rounded-xl border transition duration-300 ease-out hover:-translate-y-1 hover:bg-(--secondary) hover:text-(--primary) hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--secondary) active:translate-y-0 active:scale-95 ${style ?? ''}`;

  if (src) {
    return (
      <a href={src} className={className}>
        {txt}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={fction}>
      {txt}
    </button>
  );
}
