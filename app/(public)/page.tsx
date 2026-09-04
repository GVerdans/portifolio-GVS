import HeroPage from './sections/Hero/HeroPage';
import AboutPage from './sections/About/AboutPage';
import StacksPage from './sections/Stacks/StacksPage';
import ProjetosPage from './sections/Projetos/ProjetosPage';
import BackTopBtn from './components/Buttons/BackTopBtn';

export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <StacksPage />
      <ProjetosPage />
      <BackTopBtn />
    </>
  );
}
