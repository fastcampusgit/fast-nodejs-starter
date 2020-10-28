> This is a starter project for mixed javascript/typescript [nodejs] module.
>
> Features:
> - Mixed javascript and [typescript].
> - Lint with [eslint], [prettier] and [typescript-eslint].
> - Test with [jest] and [ts-jest].

your-project-name
=================

your-project-description

## getting started


> NOTE: this module provides **esm** only!

### within es modules(esm):

ex. `foo.mjs` or `foo.js` with `"type": "module"` in `package.json`

```js
import { greetings as sayHi } from '@fastcampus/your-project-name/hi';
import { greetings as sayHello } from '@fastcampus/your-project-name/hello';

console.log(sayHi('here'));
console.log(sayHello('there'));
```

### within commonjs modules:

ex. `foo.cjs` or `foo.js` without `"type": "module"` in `package.json`

```js
(async () => {
  const { greetings: sayHi } = await import("@fastcampus/your-project-name/hi");
  const { greetings: sayHello } = await import("@fastcampus/your-project-name/hello");

  console.log(sayHi("here"));
  console.log(sayHello("there"));
})();
```

### test

Run [jest] for all .spec.js/.spec.ts in `src/`.

```console
$ npm run test
```

### build

Compile with [tsc] for all js/ts in `src/` into `dist/`.

```console
$ npm run build
```

### watch(continuous build)

Watch with [tsc] for all js/ts in `src/` directory into `dist/`.

```console
$ npm start
```

May the **SOURCE** be with you...

[eslint]:https://eslint.org/
[jest]:https://jestjs.io/
[nodejs]:https://nodejs.org/
[prettier]:https://prettier.io/
[ts-jest]:https://kulshekhar.github.io/ts-jest/
[tsc]:https://www.typescriptlang.org/
[typescript-eslint]:https://github.com/typescript-eslint/typescript-eslint
[typescript]:https://www.typescriptlang.org/
