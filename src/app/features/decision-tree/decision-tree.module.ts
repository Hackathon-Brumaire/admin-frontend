import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {DecisionTreeRoutingModule} from "./decision-tree-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    DecisionTreeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DecisionTreeModule {
}
