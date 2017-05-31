import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIKitModule } from "../../ui-kit/ui-kit.module";
import { routing } from './home.routes';
import { HomeComponent } from "./home.page";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        routing,
        UIKitModule,
    ],
    exports: [
    ]
})
export class HomeModule { }