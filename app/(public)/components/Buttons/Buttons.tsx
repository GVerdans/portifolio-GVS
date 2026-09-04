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
  const className = `m-2 flex h-10 w-40 cursor-pointer items-center justify-center rounded-xl border ${style ?? ''}`;

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
