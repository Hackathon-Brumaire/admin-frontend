import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {DecisionTreeRoutingModule} from "./decision-tree-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    DecisionTreeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DecisionTreeModule {
}
