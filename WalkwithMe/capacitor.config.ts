import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'WalkTracker',
  appName: 'WalkwithMe',
  webDir: 'www',
  bundledWebRuntime: false,

  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
  
};

export default config;
