import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// import "./assets/ScrollMagic/assets/js/lib/gsap3/gsap.min.js";
// import "./assets/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js";
// import "./assets/ScrollMagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
// import "./assets/ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});
