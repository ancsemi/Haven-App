# Haven — Android App

Capacitor-powered WebView wrapper that connects to your self-hosted Haven server.

## Prerequisites

- **Node.js 18+** (20 LTS recommended)
- **Android Studio** (with SDK 34+, Build Tools, and an emulator or connected device)
- **Java 17** (bundled with modern Android Studio)

## Quick start

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Sync web assets + plugins → android/
npx cap sync android

# 3. Open in Android Studio
npx cap open android
```

Then click **Run ▶** in Android Studio to build & launch on an emulator or device.

## How it works

The app is a thin native wrapper around a WebView. On first launch the user enters their Haven server URL (e.g. `https://myserver.example.com`). The URL is saved to `localStorage` so subsequent launches auto-connect.

All chat logic, voice, and UI are served by the Haven server — the native shell provides:
- **Push notifications** via Firebase Cloud Messaging
- **Microphone access** for voice channels
- **Back-button** handling
- **Status bar** theming
- **Splash screen**

## Project structure

```
Haven-App/
├── www/                 # Web shell (connect screen + iframe loader)
│   └── index.html
├── android/             # Generated Android Studio project
├── capacitor.config.ts  # Capacitor configuration
├── package.json
└── README.md
```

## Building a release APK

1. Open `android/` in Android Studio
2. **Build → Generate Signed Bundle / APK**
3. Choose APK, follow the signing wizard
4. Output lands in `android/app/build/outputs/apk/release/`

## Push notifications (future)

FCM integration is wired in the web shell (`PushNotifications` plugin). To activate:
1. Create a Firebase project and add an Android app with package `com.haven.chat`
2. Download `google-services.json` → place in `android/app/`
3. The FCM token is stored in `localStorage('haven_fcm_token')` and can be sent to the Haven server for server-side push delivery.
