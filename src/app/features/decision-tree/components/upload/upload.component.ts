import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DecisionTreeService } from 'src/app/services/decision-tree.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private decisionTreeSerivce: DecisionTreeService) { }

  ngOnInit(): void {
  }

  async loadJSON(event: any): Promise<void> {
      console.log("event");
      console.log(event);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsText(event.target.files[0]);
      reader.onload = async (_event) => {
        if (typeof reader.result === "string") {
            await this.decisionTreeSerivce.postDecisionTree(JSON.parse(reader.result));

        }
      }
    }
  }

  

}
