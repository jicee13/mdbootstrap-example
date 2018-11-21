// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'fs';
import {join} from 'path';

import {enableProdMode} from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {renderModuleFactory} from '@angular/platform-server';

const ROUTES = [
    '/'
];

const minify = require('html-minifier').minify;
const domino = require('domino');
const template = readFileSync(join('browser', 'index.html'), 'utf8');
const win = domino.createWindow(template);

global['window'] = win;
global['document'] = win.document;

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./server/main');

/// New function implementation ///

async function prerender() {
  const BROWSER_FOLDER = join(process.cwd(), 'browser');

  // Get the app index
  const index = readFileSync(join('browser', 'index.html'), 'utf8');
  const domino = require('domino');
  const win = domino.createWindow(index);
  global['document'] = win.document;

  // Loop over each route
  for (const route of ROUTES) {
     const fullPath = join(BROWSER_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath);
  }

    // Render with Universal
    const html = await renderModuleFactory(AppServerModuleNgFactory, {
      document: index,
      url: route,
      extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
    });

    await writeFileSync(join(fullPath, minify('index.html')), html);
  }

  process.exit();
}

prerender();

