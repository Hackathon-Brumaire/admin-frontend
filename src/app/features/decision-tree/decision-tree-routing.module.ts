import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";

const decisionTreeRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chatbot', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(decisionTreeRoutes)],
  exports: [RouterModule]
})
export class DecisionTreeRoutingModule {
}
