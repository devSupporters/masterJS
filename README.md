<p align="center">
<img src="https://user-images.githubusercontent.com/75932477/152847011-b0b8747b-c48e-4ec0-963b-59b6f8305a39.png" width="400" height="150"/>
</p>

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
