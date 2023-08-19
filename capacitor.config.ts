import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.titouansola.timesup',
  appName: "Time's Up",
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
