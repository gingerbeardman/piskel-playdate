#!/usr/bin/env bash

trash /Applications/piskel.app
grunt desktop-osx-x64
ditto /Users/matt/Projects/piskel/dest/desktop/piskel-playdate.app /Applications/piskel.app
open /Applications/piskel.app
