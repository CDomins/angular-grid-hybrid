import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { UsersComponent } from './app/component/users/users.component';
import { ProductsComponent } from './app/component/products/products.component';
import { OrdersComponent } from './app/component/orders/orders.component';
declare var angular: any;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    angular
      .module('migrationReadyApp')
      .directive('appUsers', downgradeComponent({ component: UsersComponent }))
      .directive(
        'appProducts',
        downgradeComponent({ component: ProductsComponent })
      )
      .directive(
        'appOrders',
        downgradeComponent({ component: OrdersComponent })
      );
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.body, ['migrationReadyApp']);
  })
  .catch((err) => console.error(err));
