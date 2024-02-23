import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './app/_modules/_core/core.module';

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
    .catch(err => console.error(err));
