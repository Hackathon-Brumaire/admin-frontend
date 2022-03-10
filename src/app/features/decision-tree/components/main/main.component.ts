import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

type Question = {
  id: number;
  title: String,
  nextAnswers: Answer[],
}
type Answer = {
  id: number,
  title: String,
  nextQuestion?: Question,
  doc?: Doc
}
type Doc = {
  label: string,
  description: string,
  type: string,
  link: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  treeForm: FormGroup;
  answerForm: FormGroup;
  questionForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.treeForm = fb.group({
      QUESTIONS: [[{id: 1, title: ''}]],
      ANSWERS: [[]],
    });
    this.answerForm = fb.group({
      ANSWER_PREVIOUS_QUESTION_ID: [0],
      ANSWER_LABEL: [''],
      ANSWER_DOC_TYPE: [''],
      ANSWER_DOC_DESCRIPTION: [''],
      ANSWER_DOC_LINK: ['']
    });
    this.questionForm = fb.group({
      PREVIOUS_ANSWER_ID: [0],
      QUESTION_TITLE: [''],
    })
  }

  ngOnInit(): void {
  }

  onQuestionAdd(questionId: number, event: any): void {
    const questions = this.treeForm.value['QUESTIONS'];
    const index = questions.indexOf((q: any) => q.id == questionId);
    questions[index] = {
      ...questions[index],
      title: event.target.value
    }
    this.treeForm.controls['QUESTIONS'].setValue(
      questions
    );
  }


}
