<p align="center">
<img src="https://user-images.githubusercontent.com/75932477/155848823-adea4766-cda8-46b2-a178-d1092ade13bb.png" alt="masterJS logo devSupporters alguerocode" width="500" height="150"/>
</p>

[![CI](https://github.com/devSupporters/masterJS/actions/workflows/main.yml/badge.svg)](https://github.com/devSupporters/masterJS/actions/workflows/main.yml)

## masterJS under constructions, coming soon!

masterJS is a free resource and collections related to javascript. It provides useful links to help you  learn JavaScript, web development and other related stuff along with some of the best resources available online.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
