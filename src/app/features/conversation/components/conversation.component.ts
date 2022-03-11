import {Component, OnInit} from '@angular/core';
import {ConversationService} from "../../../services/conversation.service";
import {ConversationHistory} from "../../../types/conversation-history";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  conversationHistory?: ConversationHistory;
  roomId?: string;

  constructor(private conversationService: ConversationService) {
  }

  ngOnInit(): void {
  }

  getConversation() {
    if (!this.roomId) return;
    this.conversationService.getConversation(parseInt(this.roomId))
      .then(conversation => this.conversationHistory = conversation)
      .catch();
  }
}
