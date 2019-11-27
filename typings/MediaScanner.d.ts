/**
 * Enumerations for transcoding
 */
declare module MediaScannerOptions {
}

/**
 * Transcode options that are required to reencode or change the coding of the video.
 */

interface MediaScanner {
   
    scanMedia(onSuccess: (path: string) => void,
        onError: (error: any) => void,
        options: MediaScannerOptions): void;

}

declare var MediaScanner: MediaScanner;