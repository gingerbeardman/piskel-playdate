Piskel for Playdate
===================

Piskel is an easy-to-use sprite editor. It can be used to create game sprites, animations, pixel-art...
It is the editor used in **[piskelapp.com](https://www.piskelapp.com)**.

## Download offline builds

See Releases: https://github.com/gingerbeardman/piskel-playdate/releases

## About this fork

Read about the details on my blog: https://blog.gingerbeardman.com/2023/05/10/piskel-for-playdate/ 

- can be used to build desktop apps on latest operating systems
  - updated to future-proof dependencies and build process
  - builds for Windows, Linux, macOS
- has Playdate-specific features
  - get frame size from imagetable filename
- has quality-of-life improvements
  - save keyboard shortcut will export PNG
  - ignore warnings preference
  - turns off animated preview by default
  - different window size and positioning
  - stops nagging if run in WebKit
  - modern macOS icon
- adds useful community improvements
  - Outliner tool
  - Dither modifier keys
  - Keyboard cursor
  - Shift Palette Color Index Brush
- adds new default Pencil tool
  - draws in the opposite color to that of the start pixel

----

## Building desktop apps

Install [Volta](https://volta.sh/)
- This will find and download a compatible Node version.

Windows
- `npm run build:win`

macOS (Intel)
- `npm run build:mac`

macOS (ARM)
- `npm run build:mac-arm`

----

## About Piskel

### Built with

The Piskel editor is purely built in **JavaScript, HTML and CSS**.

We also use the following **libraries** :
* [spectrum](https://github.com/bgrins/spectrum) : awesome standalone colorpicker
* [gifjs](https://jnordberg.github.io/gif.js/) : generate animated GIFs in javascript, using webworkers
* [supergif](https://github.com/buzzfeed/libgif-js) : modified version of SuperGif to parse and import GIFs
* [jszip](https://github.com/Stuk/jszip) : create, read and edit .zip files with Javascript
* [canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js/) : shim for canvas toBlob
* [jquery](https://jquery.com/) : used sporadically in the application
* [bootstrap-tooltip](https://getbootstrap.com/javascript/#tooltips) : nice tooltips

As well as some **icons** from the [Noun Project](https://thenounproject.com/) :
* Folder by Simple Icons from The Noun Project
* (and probably one or two others)

### Browser Support

Piskel supports the following browsers:
* **Chrome** (latest)
* **Edge** (latest)
* **Firefox** (latest)
* **Opera** (latest)
* **Safari** (latest)
* **Internet Explorer** 11

### Mobile/Tablets

There is no support for mobile.

----

## Contributing ?

Help is always welcome !

* **Issues** : Found a problem when using the application, want to request a feature, [open an issue](https://github.com/piskelapp/piskel/issues).
* **Development** : Have a look at the [wiki](https://github.com/piskelapp/piskel/wiki) to set up the development environment

----

## License

Copyright 2023 Matt Sephton
Copyright 2017 Julian Descottes

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

