import { Component, OnInit } from '@angular/core';

type Conversation = {
  message: string;
  type: "question" | "answer";
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  conversation: Conversation[] = [
    {
      message: "Hello",
      type:"question"
    },
    {
      message: "Hello",
      type:"answer"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
