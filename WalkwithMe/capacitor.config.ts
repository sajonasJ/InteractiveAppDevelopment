import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.sajonasJ.WalkTracker',
  appName: 'WalkTracker',
  webDir: 'www',
  bundledWebRuntime: false,

  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 2000,
      "splashFullScreen":true,
      "splashImmersive":false,
      "splash":{
        iosAssetsFolder: "App/Assets.xcassets/splash_screens/SplashScreen.imageset"
      }

    }
  }
  
};

export default config;
