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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
