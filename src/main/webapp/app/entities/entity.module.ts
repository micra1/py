import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FoodStoreProductModule } from './product/product.module';
import { FoodStoreProductCategoryModule } from './product-category/product-category.module';
import { FoodStoreCustomerModule } from './customer/customer.module';
import { FoodStoreProductOrderModule } from './product-order/product-order.module';
import { FoodStoreOrderItemModule } from './order-item/order-item.module';
import { FoodStoreInvoiceModule } from './invoice/invoice.module';
import { FoodStoreShipmentModule } from './shipment/shipment.module';
import { FoodStoreNotificationModule } from './notification/notification.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FoodStoreProductModule,
        FoodStoreProductCategoryModule,
        FoodStoreCustomerModule,
        FoodStoreProductOrderModule,
        FoodStoreOrderItemModule,
        FoodStoreInvoiceModule,
        FoodStoreShipmentModule,
        FoodStoreNotificationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodStoreEntityModule {}
