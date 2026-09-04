'use client';

import PageSection from '../../components/Section/PageSection';
import { useLanguage } from '../../context/LanguageContext';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiInsomnia,
  SiPostman,
  SiDocker,
  SiMysql,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const frontendStacks = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
];

const backendStacks = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
];

const toolStacks = [
  { name: 'VS Code', icon: <VscVscode /> },
  { name: 'Insomnia', icon: <SiInsomnia /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <SiDocker /> },
];

export default function StacksPage() {
  const { language } = useLanguage();
  const content = {
    pt: {
      description:
        'Ferramentas que transformam ideias em produtos funcionais, acessíveis e fáceis de evoluir.',
      statement: 'Uma caixa de ferramentas para cada etapa do produto.',
      groups: ['Frontend', 'Backend', 'Ferramentas'],
    },
    en: {
      description:
        'Tools that turn ideas into functional, accessible, and easy-to-evolve products.',
      statement: 'A toolbox for every stage of the product.',
      groups: ['Frontend', 'Backend', 'Tools'],
    },
    es: {
      description:
        'Herramientas que convierten ideas en productos funcionales, accesibles y fáciles de evolucionar.',
      statement: 'Una caja de herramientas para cada etapa del producto.',
      groups: ['Frontend', 'Backend', 'Herramientas'],
    },
  }[language];

  return (
    <PageSection backgroundClassName="bg-(--tertiary)">
      <div className="w-full text-center text-(--secondary) lg:text-left">
        <header className="flex flex-col gap-5 border-b border-(--secondary)/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--quartiary)">
              @/package.json
            </p>
            <h2 className="text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
              Stacks<span className="text-(--quartiary)">.</span>
            </h2>
          </div>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-(--secondary)/70 lg:mx-0 sm:text-right">
            {content.description}
          </p>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-xs m-auto text-2xl leading-tight text-(--secondary)/80 sm:text-3xl lg:m-0">
                {content.statement}
              </p>
              <div className="mt-8 h-px w-20 bg-(--quartiary)" />
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.2em] text-(--secondary)/50 lg:mt-0">
              Frontend / Backend / Delivery
            </p>
          </div>

          <div>
            {[
              { name: content.groups[0], stacks: frontendStacks },
              { name: content.groups[1], stacks: backendStacks },
              { name: content.groups[2], stacks: toolStacks },
            ].map((stackGroup, groupIndex) => (
              <div
                key={stackGroup.name}
                className={groupIndex > 0 ? 'mt-12' : ''}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs ml-2 lg:ml-0 text-(--quartiary)">
                    0{groupIndex + 1}
                  </span>
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {stackGroup.name}
                  </h3>
                  <span className="h-px flex-1 bg-(--secondary)/30" />
                </div>
                <div className="grid grid-cols-2 border-t border-(--secondary)/30 sm:grid-cols-3">
                  {stackGroup.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="group flex min-h-28 flex-col items-center justify-between border-b border-r border-(--secondary)/30 p-4 text-center transition-colors hover:bg-(--quartiary) hover:text-(--tertiary) sm:p-5 lg:items-start lg:text-left">
                      <span className="text-3xl transition-transform group-hover:-rotate-6 group-hover:scale-130">
                        {stack.icon}
                      </span>
                      <span className="mt-5 text-sm">{stack.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
