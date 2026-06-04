import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'arturo-carrera-cv',
        appId: '1:517637387944:web:04e6ea76ae98849dab349d',
        storageBucket: 'arturo-carrera-cv.firebasestorage.app',
        apiKey: 'AIzaSyDecid9gAB4VQ-FPKi0Hk8_XNJfOFEkz_8',
        authDomain: 'arturo-carrera-cv.firebaseapp.com',
        messagingSenderId: '517637387944'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};
