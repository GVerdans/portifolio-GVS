'use client';

import { FaLinkedinIn, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import ButtonsHero from '../../components/Buttons/Buttons';
import Image from 'next/image';
import PageSection from '../../components/Section/PageSection';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroPage() {
  const { language } = useLanguage();

  const content = {
    pt: {
      role: 'Desenvolvedor Fullstack',
      intro:
        'Fullstack Developer, from Rio de Janeiro, Brazil com sólida experiencia em desenvolvimento de aplicações Web.',
      projects: 'Projetos',
      about: 'Sobre mim',
      curriculum: 'Curriculum',
    },
    en: {
      role: 'Fullstack Developer',
      intro:
        'Fullstack Developer from Rio de Janeiro, Brazil with solid experience building web applications.',
      projects: 'Projects',
      about: 'About me',
      curriculum: 'Resume',
    },
    es: {
      role: 'Desarrollador Fullstack',
      intro:
        'Desarrollador Fullstack de Río de Janeiro, Brasil, con sólida experiencia en el desarrollo de aplicaciones web.',
      projects: 'Proyectos',
      about: 'Sobre mí',
      curriculum: 'Currículum',
    },
  }[language];

  return (
    <>
      <PageSection backgroundClassName="bg-(--primary) lg:pr-0">
        <nav
          className="fixed right-5 top-4 z-50 flex items-center gap-4 rounded-full bg-(--quartiary)/85 px-4 py-3 text-(--tertiary) shadow-lg backdrop-blur-sm sm:right-8 sm:top-6 sm:gap-6"
          aria-label="Redes sociais">
          <a
            href="https://wa.me/595982514437"
            aria-label="WhatsApp"
            title="WhatsApp">
            <FaWhatsapp size={26} />
          </a>
          <a
            href="https://linkedin.com/in/gverdan"
            aria-label="LinkedIn"
            title="LinkedIn">
            <FaLinkedinIn size={26} />
          </a>
          <a
            href="https://github.com/GVerdans"
            aria-label="GitHub"
            title="GitHub">
            <FaGithub size={26} />
          </a>
          <a
            href="mailto:v.santos28py@gmail.com"
            aria-label="E-mail"
            title="E-mail">
            <FaEnvelope size={26} />
          </a>
          <LanguageSwitcher />
        </nav>

        <div className="flex w-full min-w-0 flex-col text-center lg:text-start lg:w-1/2">
          <p className="text-3xl font-[200] md:text-7xl md:font-[400]">
            Gabriel Verdan
          </p>
          <p className="text-xl text-(--quartiary) md:text-3xl md:font-[400]">
            {content.role}
          </p>
          <p className="text-xl font-[400] text-(--tertiary)">
            React, Node e Typescript
          </p>
          <p className="mx-auto lg:m-0 max-w-[370px] break-words text-sm font-[200] pt-5 leading-tight">
            {content.intro}
          </p>
          <div className="buttons mt-12 flex flex-col items-center lg:flex-row lg:mt-auto lg:items-start">
            <ButtonsHero txt={content.projects} src="#projetos" />
            <ButtonsHero txt={content.about} src="#sobre" />
            <ButtonsHero
              txt={content.curriculum}
              src="/cv/curriculum.pdf"
              download="Gabriel-Verdan-CV.pdf"
              style="bg-(--quartiary) text-(--tertiary) hover:bg-(--secondary)"
            />
          </div>
        </div>
        <div className="mt-12 w-full min-w-0 overflow-hidden rounded-l-[42px] lg:mt-0 lg:w-1/2">
          <div className="flex h-72 min-h-[280px] items-center justify-center rounded-l-[42px] bg-(--secondary) text-center text-2xl text-(--primary) lg:h-full">
            <Image
              src="/images/hero/carac-verdan.webp"
              alt="caricatura-verdan"
              width={700}
              height={450}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-auto max-h-full w-full max-w-full object-contain"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}
