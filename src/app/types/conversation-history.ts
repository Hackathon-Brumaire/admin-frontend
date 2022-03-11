export type ConversationHistory = {
  id: number;
  roomId: string;
  conversationHistorics: ConversationMessage[];
}

export type ConversationMessage = {
  message: string;
  messageType: string;
  createdAt: Date;
}
