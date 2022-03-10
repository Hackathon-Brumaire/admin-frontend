import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Question} from "../types/apiTypes";

@Injectable({providedIn: 'root'})
export class DecisionTreeService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  async postDecisionTree(decisionTree: Question | undefined): Promise<void> {

  }
}
