# MDBootstrap Angular Universal Example

My attempt at a minimal setup to run an Angular Universal app either server-side or with prerendering. I integrated it with [MDBootstrap](https://mdbootstrap.com/), a popular bootstrap library. 

## About

I built this mixing and mashing a variety of online tutorials/open source code you can find in the references at the bottom. I wanted to include the prerendering because this allows you to host this website like a static website with the benefits of ssr. Pretty neat.


## Tough Things This Solves

The reason I wanted to integrate *MDBootstrap* with this setup is because the library makes use of `Hammerjs`. To make some scrolling actions work correctly on mobile, this requires you to customize your `Hammerjs` config, seen [here](https://mdbootstrap.com/docs/angular/advanced/mobile/#basic-example). This example doesn't work out of the box so I had to do some fiddling.

Universal Starter has a nice list of _gotchas_ you can find [here](https://github.com/angular/universal/blob/master/docs/gotchas.md).

## Installation

* `npm install`

## Development (not ssr)

* `ng serve -o`

## Building

* `npm run build:ssr && npm run serve:ssr` - Compiles and runs the application on a local nodejs server.
* `npm run build:prerender && http-server ./dist/browser` - Compiles, prerenders, and runs application.

## References

* [MDBootstrap Getting Started](https://mdbootstrap.com/docs/angular/getting-started/angular-universal/)
* [AngularFirebase Prerendering](https://angularfirebase.com/lessons/angular-6-universal-ssr-prerendering-firebase-hosting/)
* [AngularFire Prerendering](https://github.com/angular/angularfire2/blob/master/docs/universal/prerendering.md)
* [Universal Starter](https://github.com/angular/universal-starter)

## Further Help

If you have more questions feel free to reach out [here](https://info.jayce.life)

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://github.com/jicee13/mdbootstrap-example/blob/master/LICENSE)