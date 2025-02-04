import { registerLocaleData } from '@angular/common';
import localeFrBE from '@angular/common/locales/fr-BE';
import localeNlBE from '@angular/common/locales/nl-BE';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

registerLocaleData(localeFrBE, 'fr-BE');
registerLocaleData(localeNlBE, 'nl-BE');

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
