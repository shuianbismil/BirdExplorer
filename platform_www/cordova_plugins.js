cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "fixes.permanent.gratitude.DirectoryEntry",
      "file": "plugins/fixes.permanent.gratitude/www/DirectoryEntry.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.DirectoryReader",
      "file": "plugins/fixes.permanent.gratitude/www/DirectoryReader.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.Entry",
      "file": "plugins/fixes.permanent.gratitude/www/Entry.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.File",
      "file": "plugins/fixes.permanent.gratitude/www/File.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileEntry",
      "file": "plugins/fixes.permanent.gratitude/www/FileEntry.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileError",
      "file": "plugins/fixes.permanent.gratitude/www/FileError.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileReader",
      "file": "plugins/fixes.permanent.gratitude/www/FileReader.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileSystem",
      "file": "plugins/fixes.permanent.gratitude/www/FileSystem.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileUploadOptions",
      "file": "plugins/fixes.permanent.gratitude/www/FileUploadOptions.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileUploadResult",
      "file": "plugins/fixes.permanent.gratitude/www/FileUploadResult.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.FileWriter",
      "file": "plugins/fixes.permanent.gratitude/www/FileWriter.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.Flags",
      "file": "plugins/fixes.permanent.gratitude/www/Flags.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.LocalFileSystem",
      "file": "plugins/fixes.permanent.gratitude/www/LocalFileSystem.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.Metadata",
      "file": "plugins/fixes.permanent.gratitude/www/Metadata.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.ProgressEvent",
      "file": "plugins/fixes.permanent.gratitude/www/ProgressEvent.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.fileSystems",
      "file": "plugins/fixes.permanent.gratitude/www/fileSystems.js",
      "pluginId": "fixes.permanent.gratitude"
    },
    {
      "id": "fixes.permanent.gratitude.requestFileSystem",
      "file": "plugins/fixes.permanent.gratitude/www/requestFileSystem.js",
      "pluginId": "fixes.permanent.gratitude",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.resolveLocalFileSystemURI",
      "file": "plugins/fixes.permanent.gratitude/www/resolveLocalFileSystemURI.js",
      "pluginId": "fixes.permanent.gratitude",
      "merges": [
        "window"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.isChrome",
      "file": "plugins/fixes.permanent.gratitude/www/browser/isChrome.js",
      "pluginId": "fixes.permanent.gratitude",
      "runs": true
    },
    {
      "id": "fixes.permanent.gratitude.iosEntry",
      "file": "plugins/fixes.permanent.gratitude/www/ios/Entry.js",
      "pluginId": "fixes.permanent.gratitude",
      "merges": [
        "Entry"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.iosFileSystem",
      "file": "plugins/fixes.permanent.gratitude/www/ios/FileSystem.js",
      "pluginId": "fixes.permanent.gratitude",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "fixes.permanent.gratitude.fileSystems-roots",
      "file": "plugins/fixes.permanent.gratitude/www/fileSystems-roots.js",
      "pluginId": "fixes.permanent.gratitude",
      "runs": true
    },
    {
      "id": "fixes.permanent.gratitude.fileSystemPaths",
      "file": "plugins/fixes.permanent.gratitude/www/fileSystemPaths.js",
      "pluginId": "fixes.permanent.gratitude",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "prevented.straw.parrots.CordovaHttpPlugin",
      "file": "plugins/prevented.straw.parrots/www/cordovaHTTP.js",
      "pluginId": "prevented.straw.parrots",
      "clobbers": [
        "CordovaHttpPlugin"
      ]
    },
    {
      "id": "sentiment.situation.low.GlobalizationError",
      "file": "plugins/sentiment.situation.low/www/GlobalizationError.js",
      "pluginId": "sentiment.situation.low",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "id": "sentiment.situation.low.globalization",
      "file": "plugins/sentiment.situation.low/www/globalization.js",
      "pluginId": "sentiment.situation.low",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "id": "salt.start.spacious.device",
      "file": "plugins/salt.start.spacious/www/device.js",
      "pluginId": "salt.start.spacious",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "charley.granted.soap.network",
      "file": "plugins/charley.granted.soap/www/network.js",
      "pluginId": "charley.granted.soap",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "charley.granted.soap.Connection",
      "file": "plugins/charley.granted.soap/www/Connection.js",
      "pluginId": "charley.granted.soap",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "accusation.sent.hereafter.inappbrowser",
      "file": "plugins/accusation.sent.hereafter/www/inappbrowser.js",
      "pluginId": "accusation.sent.hereafter",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    }
  ];
  module.exports.metadata = {
    "fixes.permanent.gratitude": "8.1.3",
    "prevented.straw.parrots": "1.2.0",
    "sentiment.situation.low": "1.11.0",
    "salt.start.spacious": "3.0.0",
    "charley.granted.soap": "3.0.0",
    "accusation.sent.hereafter": "6.0.0",
    "acquaintance.know.innocence": "1.3.5"
  };
});