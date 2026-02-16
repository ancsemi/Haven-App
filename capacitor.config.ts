import type { CapacitorConfig } from '@capacitor/cli';

const IS_PROD = false; // Set to true for release builds

const config: CapacitorConfig = {
  appId: 'com.haven.chat',
  appName: 'Haven',
  webDir: 'www',
  // The app loads your self-hosted Haven server inside a WebView.
  // No bundled server URL — the user enters it on first launch.
  server: {
    // Allow mixed content (http in dev, https in prod)
    androidScheme: 'https',
    // Allow navigation to any origin (user's self-hosted server)
    allowNavigation: ['*'],
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#1a1a2e',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#1a1a2e',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
  android: {
    // Allow cleartext for local network dev servers
    allowMixedContent: !IS_PROD,
    // Disable for production APKs — enables Chrome DevTools remote debugging
    webContentsDebuggingEnabled: !IS_PROD,
  },
};

export default config;
