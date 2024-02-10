# Hugo Theme daisyUI

A simple, clean and fast theme based on TailwindCSS and daisyUI

[demo](https://lukki15.github.io/hugo-theme-daisyui/)

## Features

- mobile friendly
- fast
- clean
- multi-language support
- minimal
- dark theme

## Installation

a new site
```bash
$ hugo new new site example
$ cd example
```

add and setup theme
```bash
$ git submodule add https://github.com/lukki15/hugo-theme-daisyui.git themes/daisyUI
$ cd themes daisyUI

$ npm install
$ npm run tailwind
```

copy example site
```bash
$ cd ../..
$ cp -R themes/daisyUI/exampleSite/* .
```

hugo serve and build
```
$ hugo serve -t daisyUI
$ hugo --gc --minify -t daisyUI 
```

## Configuration

for home page
- an optional `avatar` can be set

for posts:
- an optional `feature_image` can be set
- an optional `description` can be set
