import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {ConversationRoutingModule} from "./conversation-routing.module";
import {ConversationComponent} from "./components/conversation.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ConversationComponent
  ],
  imports: [
    ConversationRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ConversationModule {
}
