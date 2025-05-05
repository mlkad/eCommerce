<h1 align="center">eCommerce by "StackUp" team</h1>

## About Project

<section>

  <h3>Info</h3>
  <p>
    The project is dedicated to the writing of a full-fledged SPA as part of the educational
    process in the Rolling Scopes School.
  </p>

<h3>Technological Stack</h3>

<ul>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://react.dev/">React</a></li>
  <li><a href="https://sass-lang.com/">Sass (SCSS)</a></li>
  <li><a href="https://vitest.dev/">Vitest</a></li>
  <li><a href="https://commercetools.com">CommerceTools</a></li>
  <li><a href="https://vite.dev/">Vite</a></li>
</ul>

<p><small>
  * Related tools such as styling frameworks (e.g.&nbsp;Tailwind) or state-management
  libraries (e.g.&nbsp;Redux) may be added as the project evolves.
</small></p>

  <h3>Theme of Project</h3>
  <p>
    The project will be devoted to the electronic online-store. The store will showcase a full product catalog with rich filtering and real-time stock visibility.
    Secure checkout flows—powered by CommerceTools carts, promotions, and payment integrations—will ensure a smooth purchasing experience on both desktop and mobile.
    In later sprints we plan to add wish-lists, order-tracking, and personalized recommendations to emulate the feature set of a modern enterprise storefront.
    <br />
    <small>* The choice is not final and can be changed within sprint&nbsp;2.</small>
  </p>

  <h3>Objectives</h3>
  <ol>
    <li>
      To elaborate a full-fledged, visually appealing and highly advanced SPA using modern
      front-end technologies powered by
      <a href="https://commercetools.com">CommerceTools</a>.
    </li>
    <li>
      To deliver a lightning-fast, smoothly automated and accessible online shop while
      levelling-up as full-stack and front-end engineers.
    </li>
    <li>
      To cultivate a supportive team culture and improve teamwork soft skills.
    </li>
  </ol>

  <h3>Team</h3>
  <ul>
    <li><a href="https://github.com/elena-web">Elena&nbsp;Paulovich</a></li>
    <li><a href="https://github.com/elena-web">Malika&nbsp;Dusmagambetova</a></li>
    <li><a href="https://github.com/mikhailmaidan">Mikhail&nbsp;Maidan</a></li>
  </ul>

</section>

## Folder Structure

<p>The Feature Slice Design will be chosen as the folder strructural approach for this Project. The example for current structure looks as follows:</p></br>
<small>* The author is aware about the YAGNI principle (do not create folders/files that are not using instantly. This FSD structure is created as example for further structural approaches)</small></br />

```
src/
├── assets/
│   └── styles/ ...
│
├── core/
│   ├── header/
│   │   ├── Header.tsx
│   │   └── Header.scss
│   │
│   ├── footer/
│   │   ├── Footer.tsx
│   │   └── Footer.scss
│   │
│   ├── main/
│   │   ├── Main.tsx
│   │   └── Main.scss
│   │
│   └── notFoundPage/
│       ├── notFoundPage.tsx
│       └── notFoundPage.scss
│
├── hooks/
│
├── features/
    ├── cart/
    │   ├── components/
    │   ├── constants/
    │   └── pages/
    │
    ├── catalog/
    ├── market/
    └── profile/

```

## Available npm Scripts

- `npm run dev` – starts the Vite development server with hot-module reloading at **http://localhost:5173**
- `npm run build` – runs `tsc -b` for type-checking and builds an optimized production bundle in **dist/**
- `npm run lint` – executes ESLint on the whole code-base; fails on _any_ warning (`--max-warnings 0`)
- `npm run lint:fix` – runs ESLint with `--fix`, automatically correcting fixable issues

- `npm run format` – formats all supported files with Prettier (`.ts, .tsx, .js, .jsx, .json, .css, .scss, .md`)
- `npm test` – one-shot Vitest run (`vitest run`); used in the **pre-push** hook
- `npm run test:coverage` – runs tests and creates an HTML/LCOV coverage report in **coverage/**

## Quick Local Setup

1. **Install prerequisites**

   - Node 22 + and npm 10 + (`node -v`, `npm -v`)
   - Git 2.40 +

2. **Clone the repository**

   ```bash
   git clone https://github.com/mlkad/eCommerce.git
   cd eCommerce
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Run quality checks**

   ```bash
   npm run lint
   npm run format
   npm test
   ```

6. **Create a production build**

   ```bash
   npm run build
   ```
