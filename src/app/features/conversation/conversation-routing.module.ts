import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConversationComponent} from "./components/conversation.component";

const decisionTreeRoutes: Routes = [
  {path: '', component: ConversationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(decisionTreeRoutes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule {
}
