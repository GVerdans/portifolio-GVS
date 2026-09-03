interface ButtonHeroProps {
  txt: string;
  style?: string;
  fction?: () => void;
}

export default function ButtonsHero({ txt, style, fction }: ButtonHeroProps) {
  return (
    <button
      type="button"
      className={`m-2 h-10 w-40 cursor-pointer rounded-xl border ${style ?? ''}`}
      onClick={fction}>
      {txt}
    </button>
  );
}
