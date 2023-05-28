import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.sajonasJ.WalkTracker',
  appName: 'WalkTracker',
  webDir: 'www',
  bundledWebRuntime: false,

  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
  
};

export default config;
