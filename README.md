# Leaderboard
> **Ceapa cool discord server rank leaderboard**

## Setup

- Install node ([linux](https://github.com/nodesource/distributions) | [windows](https://nodejs.org))
- Install yarn if necessary (preferred package manager)
```
npm i -g yarn
```
- create a `.env.local` file in the project root with following content:
```
SQLITE=/path/to/database/file
```
- run `yarn install` and `yarn dev` for development or alternatively `yarn prod` for production

### Change port
Edit the `package.json` and change the port `-p` parameter in the start script:
```json
{
  ...
  "scripts": {
    ...
    "start": "next start -p 3000",
    ...
  },
  ...
}
```