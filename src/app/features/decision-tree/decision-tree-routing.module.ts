import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";

const decisionTreeRoutes: Routes = [
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(decisionTreeRoutes)],
  exports: [RouterModule]
})
export class DecisionTreeRoutingModule {
}
