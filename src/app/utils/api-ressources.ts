import {environment} from "../../environments/environment";

export const API_RESSOURCES_URI = {
  DECISION_TREE: environment.API_URL + '/question',
  CONVERSATION: environment.API_URL + '/conversations/rooms/'
}
