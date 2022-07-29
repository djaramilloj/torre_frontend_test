import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { SearchbarPeopleComponent } from "./searchbar-people/searchbar-people.component";
import { HeaderComponent } from './header/header.component';
import { ChipComponent } from './chip/chip.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
    declarations: [
        SearchbarPeopleComponent,
        HeaderComponent,
        ChipComponent,
        UserInfoComponent
    ],
    imports: [
        MaterialModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        SearchbarPeopleComponent,
        HeaderComponent,
        ChipComponent,
        UserInfoComponent
    ]
})

export class ComponentsModule {}