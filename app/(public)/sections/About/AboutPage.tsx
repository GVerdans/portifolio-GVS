'use client';

import Image from 'next/image';
import PageSection from '../../components/Section/PageSection';
import AboutImage from '@/public/images/about/Gab_dev.webp';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const content = {
    pt: {
      title: '- Sobre Gabriel',
      paragraphs: [
        'Desde pequeno, sempre fui curioso sobre tecnologia. Gostava de desmontar coisas para entender como funcionavam e passava madrugadas esperando o melhor horário para usar a internet discada da iG. Essa curiosidade em entender como as coisas funcionam acabou se tornando parte da minha forma de pensar.',
        'Antes de atuar profissionalmente com desenvolvimento de software, construí minha experiência em outra área. Passei 9 anos na Marinha do Brasil, atuando principalmente em Recursos Humanos e em atividades administrativas. Foi nesse ambiente que comecei a perceber o potencial da tecnologia para resolver problemas reais. Ao identificar processos repetitivos e deficiências no dia a dia, buscava formas de simplificá-los utilizando tecnologia.',
        'Hoje, atuo como Desenvolvedor de Software, criando aplicações e soluções utilizando tecnologias como JavaScript, TypeScript, React e Node.js.',
        'Minha experiência profissional anterior também faz parte do que levo para o desenvolvimento: organização, responsabilidade, visão de processos e a capacidade de entender um problema antes de pensar na solução.',
      ],
    },
    en: {
      title: '- About Gabriel',
      paragraphs: [
        'I have been curious about technology since I was young. I enjoyed taking things apart to understand how they worked and stayed up late waiting for the best time to use iG dial-up internet. That curiosity about how things work became part of the way I think.',
        "Before working professionally with software development, I built my experience in another field. I spent 9 years in the Brazilian Navy, working mainly in Human Resources and administrative activities. There, I began to see technology's potential to solve real problems and looked for ways to simplify repetitive processes.",
        'Today, I work as a Software Developer, creating applications and solutions with technologies such as JavaScript, TypeScript, React, and Node.js.',
        'My previous professional experience also shapes my development work: organization, accountability, process awareness, and the ability to understand a problem before thinking about its solution.',
      ],
    },
    es: {
      title: '- Sobre Gabriel',
      paragraphs: [
        'Desde pequeño siempre sentí curiosidad por la tecnología. Me gustaba desmontar cosas para entender cómo funcionaban y pasaba las madrugadas esperando el mejor momento para usar el internet por línea telefónica de iG. Esa curiosidad por entender cómo funcionan las cosas se convirtió en parte de mi forma de pensar.',
        'Antes de trabajar profesionalmente con desarrollo de software, construí mi experiencia en otra área. Pasé 9 años en la Marina de Brasil, principalmente en Recursos Humanos y actividades administrativas. Allí empecé a percibir el potencial de la tecnología para resolver problemas reales y buscaba formas de simplificar procesos repetitivos.',
        'Hoy trabajo como Desarrollador de Software, creando aplicaciones y soluciones con tecnologías como JavaScript, TypeScript, React y Node.js.',
        'Mi experiencia profesional anterior también forma parte de lo que llevo al desarrollo: organización, responsabilidad, visión de procesos y la capacidad de entender un problema antes de pensar en la solución.',
      ],
    },
  }[language];

  return (
    <PageSection id="sobre" backgroundClassName="bg-(--secondary)">
      <div className="grid w-full grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-16">
        <div className="flex justify-center">
          <div className="w-full max-w-[560px] rounded-[42px] bg-(--quartiary) p-5 sm:p-8">
            <Image
              src={AboutImage}
              alt="Foto de Gabriel"
              sizes="(max-width: 1279px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="mb-5 text-center text-4xl font-bold leading-tight text-(--tertiary) sm:text-5xl xl:text-6xl">
            {content.title}
          </h2>

          <p className="text-justify text-sm leading-relaxed text-(--tertiary) sm:text-base lg:text-lg">
            {content.paragraphs.map((paragraph) => (
              <span key={paragraph} className="mb-4 block last:mb-0">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      </div>
    </PageSection>
  );
}
