import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app.routes'
import {provideClientHydration, withEventReplay} from '@angular/platform-browser'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {connectFunctionsEmulator, getFunctions, provideFunctions} from '@angular/fire/functions'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
      projectId: "unravel-test-cbbb2",
      appId: "1:49671002902:web:b4020c4e38b2c7c4454e37",
      storageBucket: "unravel-test-cbbb2.firebasestorage.app",
      apiKey: "AIzaSyCniLfTX2Zs24pP4-xySlRX7aUDxoAFmvg",
      authDomain: "unravel-test-cbbb2.firebaseapp.com",
      messagingSenderId: "49671002902",
      measurementId: "G-E4KTVV3MHK"
    })), provideFunctions(() => {
      const functions = getFunctions()
      connectFunctionsEmulator(functions, 'localhost', 5001)
      return functions
    }),
  ]
}
