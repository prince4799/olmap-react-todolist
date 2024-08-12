# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

URL:- http://localhost:5173/


# Most widely used react structure 
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── containers/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── ...


API key : b9049226dad6df8c1950086eb9e1ce73,
API read access token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTA0OTIyNmRhZDZkZjhjMTk1MDA4NmViOWUxY2U3MyIsIm5iZiI6MTcyMDUwNzg4NC43MDg1NzYsInN1YiI6IjY2OGNkYWQxYzVlZDk0YTAwMmYzNWY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXf2zTyzXqnJ09WjqzD0BpLVBLJ3yJWVOtEGoy-bJnI,