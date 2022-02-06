<h2 align="center">Penguin Monorepo </h2>

<p align="center">
 <img src="https://c.tenor.com/Z_Z9gYlFDc0AAAAC/hello-penguin.gif" alt="Penguin Repository" style="margin: 0px 15%;text-align:center;width:200px;"/>
</p>
<p align="center">
<img src="https://img.shields.io/github/issues/samayun/penguin-monorepo" alt="Issues">
<img src="https://img.shields.io/github/forks/samayun/penguin-monorepo" alt="Forks">

<img src="https://img.shields.io/github/stars/samayun/penguin-monorepo?color=%2312ff65&label=Stars&logo=Star&logoColor=green&style=flat" alt="Stars">
<img src="https://img.shields.io/github/license/samayun/penguin-monorepo" alt="License">

<a href="https://twitter.com/intent/tweet?text=What a repo ! Wow !Check It =>  :&url=https://github.com/samayun/penguin-monorepo"> 
<img src="https://img.shields.io/twitter/url?label=Follow@samayunmc&logoColor=%230f0&url=https%3A%2F%2Fgithub.com%2Fsamayun%2Fpenguin-monorepo" alt="Tweet">
</a>
</p>

# Commands & Usage

```bash
 #  Start Backend Express.js server
 ## NPM
 cd apps/express-modular-architecture && cp .env.example .env
 npx nx start:dev express-modular-architecture

 ## Docker
 cd apps/express-modular-architecture/src
 make build
 make run
 # detach mode >>
 make start
 #generate swagger docs
 npx nx swagger express-modular-architecture

```
