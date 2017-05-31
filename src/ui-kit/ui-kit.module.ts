
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from "./searchbar/searchbar.component";


@NgModule({
    declarations: [
        SearchbarComponent,
    ],
    imports: [],
    exports: [
        SearchbarComponent,
    ]
})
export class UIKitModule { }