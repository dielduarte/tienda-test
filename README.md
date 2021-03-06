# Tienda-test

## How to use

after cloning the project, you should install all dependencies with `yarn install` or `npm install`

then to run the project:

```js
npm run dev || yarn run dev
```

obs: also you can see the live project [here](https://tiendanube-test-yrehtshrtx.now.sh/)

## Docz

I'm using `docz` to create a documentation of each dumb component used to create the project. So, to run docz:

```
npm run docz:dev || yarn docz:dev
```

obs: I've uploaded the documentation live [here](https://dist-gbxcpvcigb.now.sh/)

## tests

I'm using `jest` to unit and snapshopt tests, to run the tests:

```
npm run test || yarn test
```

### my choices

To develop this tests I chose:

- `next`: as a framework to handle routing and server side rendering
- `jest`: unit tests
- `styled-components`: to write visual components, merging the best of css in js and css.
- `recompose`: recompose gave me the power of HOC to keep my code more functional and less class based.
- `store`: I'm using just a merging between recompose + new react context api

any questions, feedbacks and suggestions just let me know!
