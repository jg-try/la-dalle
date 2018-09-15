import { NgModule } from '@angular/core';

import { LaDalleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LaDalleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LaDalleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LaDalleSharedCommonModule {}
