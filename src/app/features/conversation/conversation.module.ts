import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {ConversationRoutingModule} from "./conversation-routing.module";
import {ConversationComponent} from "./components/conversation.component";
import {FormsModule} from "@angular/forms";
import {DecisionTreeModule} from "../decision-tree/decision-tree.module";

@NgModule({
  declarations: [
    ConversationComponent
  ],
    imports: [
        ConversationRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule,
        DecisionTreeModule
    ]
})
export class ConversationModule {
}
