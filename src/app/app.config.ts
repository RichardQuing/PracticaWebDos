import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-d3ceb","appId":"1:1074375494631:web:bd482e9c1276ee1ab34b42","storageBucket":"app-pokemon-d3ceb.appspot.com","apiKey":"AIzaSyAtGKLDyq3U95Gmy0D6SDeX8scocpoCXuQ","authDomain":"app-pokemon-d3ceb.firebaseapp.com","messagingSenderId":"1074375494631","measurementId":"G-7YC8S2F8K9"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
