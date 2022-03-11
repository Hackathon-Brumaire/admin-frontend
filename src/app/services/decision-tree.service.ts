import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Question} from "../types/apiTypes";
import {API_RESSOURCES_URI} from "../utils/api-ressources";

@Injectable({providedIn: 'root'})
export class DecisionTreeService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  async postDecisionTree(decisionTree: Question | undefined): Promise<void> {
    if (decisionTree !== undefined) {
      return await this.httpClient
        .post<void>(
          API_RESSOURCES_URI.DECISION_TREE,
          decisionTree
        ).toPromise();
    } else {
      console.error('Decision tree is undefined');
    }
  }
}
