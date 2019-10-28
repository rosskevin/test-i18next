# Test Repo (i18next, React, Typescript, Jest/Enzyme, Webpack)

`esModuleInterop: true`

`import i18next from 'i18next'`

This branch is recommended settings for i18next and typescript.

This is the companion to the NOT recommended: https://github.com/rosskevin/test-i18next/tree/non-esmoduleinterop-ts-loader

This branch shows the same thing but simpler:

- use just babel-loader, no ts-loader needed
- simpler imports
- no forced settings on tsconfig or webpack to make full use of esm modules
