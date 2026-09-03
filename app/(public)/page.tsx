import ButtonsHero from '../components/Buttons/Buttons';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-xl bg-(--primary) py-20 shadow-2xl sm:px-8 md:py-30 md:pl-15 lg:m-auto lg:pr-0 lg:w-3/4 lg:flex-row">
        <nav
          className="absolute right-8 top-6 flex items-center gap-6 text-(--tertiary)"
          aria-label="Redes sociais">
          <a href="#linkedin" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedinIn size={26} />
          </a>
          <a href="#github" aria-label="GitHub" title="GitHub">
            <FaGithub size={26} />
          </a>
          <a
            href="mailto:gabriel@example.com"
            aria-label="E-mail"
            title="E-mail">
            <FaEnvelope size={26} />
          </a>
        </nav>

        <div className="flex w-full min-w-0 flex-col text-center lg:text-start lg:w-1/2">
          <p className="text-3xl font-[200] md:text-7xl md:font-[400]">
            Gabriel Verdan
          </p>
          <p className="text-xl text-(--quartiary) md:text-3xl md:font-[400]">
            Desenvolvedor Fullstack
          </p>
          <p className="text-xl font-[400] text-(--tertiary)">
            React, Node e Typescript
          </p>
          <p className="mx-auto lg:m-0 max-w-[370px] break-words text-sm font-[200] pt-5 leading-tight">
            Fullstack Developer, from Rio de Janeiro, Brazil com sólida
            experiencia em desenvolvimento de aplicações Web.
          </p>
          <div className="buttons mt-12 flex flex-col items-center lg:flex-row lg:mt-auto lg:items-start">
            <ButtonsHero txt="Projetos" />
            <ButtonsHero txt="Curriculum" />
            <ButtonsHero
              txt="Fale Comigo !"
              style="bg-(--secondary) text-(--primary) hover:bg-(--quartiary) hover:font-semibold transition delay-100"
            />
          </div>
        </div>
        <div className="mt-12 w-full min-w-0 overflow-hidden rounded-l-[42px] lg:mt-0 lg:w-1/2">
          <div className="flex h-72 min-h-[280px] items-center justify-center rounded-l-[42px] bg-(--secondary) text-center text-2xl text-(--primary) lg:h-full">
            <p>foto</p>
          </div>
        </div>
      </section>
    </>
  );
}
