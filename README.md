# [lalot.ai](https://lalot.ai)

Source code for [https://lalot.ai](https://lalot.ai) built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) and [MDX](https://mdxjs.com/).

## Get started

Source is in the [dev](https://github.com/lalotai/lalotai.github.io/tree/dev) git branch. Built website is in the [master](https://github.com/lalotai/lalotai.github.io/tree/master) git branch. To start the local dev server:

```bash
git checkout dev
npm install
npm start
```

To build the website:

```bash
git checkout dev
npm run build
git checkout master
mv out/* . # delete any old files if necessary
```

## Contributing

Article improvements, typos and general cleanup are always welcome. Please create a pull request in the repo.

## License

MIT
