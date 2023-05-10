#!/usr/bin/env bash

trash /Applications/piskel.app
grunt desktop-mac
cp /Users/matt/Projects/piskel/piskel.icns /Users/matt/Projects/piskel/dest/desktop/piskel/osx64/piskel.app/Contents/Resources/app.icns
ditto /Users/matt/Projects/piskel/dest/desktop/piskel/osx64/piskel.app /Applications/piskel.app
open /Applications/piskel.app
