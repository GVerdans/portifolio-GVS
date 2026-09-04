# Portfólio GVS

Portfólio pessoal de Gabriel Verdan, desenvolvido com Next.js para apresentar sua experiência, suas tecnologias e seus principais projetos como Desenvolvedor Full Stack.

## Demo

Visite a versão publicada em [gverdan.dev](https://gverdan.dev).

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Icons
- Vercel

## Recursos

- Seções de apresentação, sobre, tecnologias e projetos
- Cards com imagens e links para projetos publicados e repositórios
- Navegação por âncoras entre as seções
- Scroll snap e animações de entrada durante a rolagem
- Barra de progresso vertical
- Botão para voltar ao topo
- Links para WhatsApp, LinkedIn, GitHub e e-mail
- Download do currículo em PDF
- `robots.txt` e `sitemap.xml` para SEO

## Desenvolvimento local

Clone o repositório, instale as dependências e inicie o servidor:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run lint     # executa o ESLint
npm run build    # gera o build de produção
npm run start    # inicia o servidor de produção
```

## Estrutura principal

```text
app/
├── (public)/
│   ├── components/
│   ├── sections/
│   ├── layout.tsx
│   └── page.tsx
├── robots.ts
├── sitemap.ts
└── globals.css
public/
├── cv/
└── images/
```

## Deploy

O projeto está configurado para deploy contínuo na Vercel. Cada push na branch `main` gera uma nova versão em produção.

Para publicar uma alteração:

```bash
git add .
git commit -m "tipo: descreve a alteração"
git push origin main
```

O domínio principal é [https://gverdan.dev](https://gverdan.dev).
