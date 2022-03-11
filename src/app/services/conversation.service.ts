import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_RESSOURCES_URI} from "../utils/api-ressources";
import {ConversationHistory} from "../types/conversation-history";

@Injectable({providedIn: 'root'})
export class ConversationService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  async getConversation(roomId: number): Promise<ConversationHistory | undefined> {
    if (!roomId) {
      throw new Error('roomId is undefined');
    }
    return await this.httpClient
      .get<ConversationHistory>(
        API_RESSOURCES_URI.CONVERSATION + roomId
      ).toPromise();
  }
}
