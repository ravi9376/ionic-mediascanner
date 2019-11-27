
module.exports = {
    scanFile: function(fileUri, successCallback, errorCallback) {
        cordova.exec(function() {
            successCallback && successCallback();
        }, function(error) {
            errorCallback && errorCallback(error);
        },
        "MediaScannerPlugin",
        "scanFile",
        [fileUri]);
    }
};