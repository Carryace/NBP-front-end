
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { UIKitModule } from "../../ui-kit/ui-kit.module";


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        UIKitModule,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class AppComponentModule { }