# MediaScannerPlugin
Cordova/Phonegap plugin to call MediaScannerPlugin

MediaScanner should be called to add a downloaded image to Android Gallery.

Installation
------------

### For ionic
npm i ionic-mediascanner

Usage:
------

           this.fileTransfer.download(imageLocation, DownloadFileLocation + FileName).then((entry) => {
            cordova.plugins.MediaScannerPlugin.scanFile(DownloadFileLocation + FileName); //This is the code line that you need.You need to use this line where your download thing  happens



"# ionic-mediascanner" 
