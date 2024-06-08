const fs = require('node:fs');
const path = require('node:path');

const PISKEL_PATH = path.resolve(__dirname, '..');
const PISKELAPP_PATH = path.resolve(__dirname, '../../piskel-website');

var pjson = require('../package.json');

// Callbacks sorted by call sequence.
function onCopy(err) {
  if (err) {
    console.error('Failed to copy static files...');
    return console.error(err);
  }

  console.log('Copied static files to piskel-website...');
  let previousPartialPath = path.resolve(PISKELAPP_PATH, 'templates/editor/main-partial.html');
  fs.access(previousPartialPath, fs.constants.F_OK, function (err) {
    if (err) {
      // File does not exit, call next step directly.
      console.error('Previous main partial doesn\'t exist yet.');
      onDeletePreviousPartial();
    } else {
      // File exists, try to delete it before moving on.
      fs.unlink(previousPartialPath, onDeletePreviousPartial);
    }
  })
}

function onDeletePreviousPartial(err) {
  if (err) {
    console.error('Failed to delete previous main partial...');
    return console.error(err);
  }

  console.log('Previous main partial deleted...');
  fs.cp(
    path.resolve(PISKELAPP_PATH, "static/editor/piskelapp-partials/main-partial.html"),
    path.resolve(PISKELAPP_PATH, "templates/editor/main-partial.html"),
    onCopyNewPartial
  );
}

function onCopyNewPartial(err) {
  if (err) {
    console.error('Failed to delete previous main partial...');
    return console.error(err);
  }

  console.log('Main partial copied...');
  fs.rm(
    path.resolve(PISKELAPP_PATH, "static/editor/piskelapp-partials/"),
    onDeleteTempPartial
  );
}

function onDeleteTempPartial(err) {
  if (err) {
    console.error('Failed to delete temporary main partial...');
    return console.error(err);
  }

  console.log('Temporary main partial deleted...');

  fs.writeFile(path.resolve(PISKELAPP_PATH, "static/editor/VERSION"), pjson.version, onVersionFileCreated);
}

function onVersionFileCreated(err) {
  if (err) {
    console.error('Failed to create temporary main partial...');
    return console.error(err);
  }

  console.log('Version file created...');
  console.log('Finished!');
}

fs.cp(
  path.resolve(PISKEL_PATH, "dest/prod"),
  path.resolve(PISKELAPP_PATH, "static/editor"),
  onCopy
);