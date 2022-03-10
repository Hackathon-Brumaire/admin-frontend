import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

type Question = {
  id: number,
  title: string,
  previousAnswerId: number,
  nextAnswers: Answer[],
}
type Answer = {
  id: number,
  title: string,
  previousQuestionId: number,
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

  onQuestionAdd(questionId: number): void {
    const questions: any[] = this.treeForm.value['QUESTIONS'];
    const index = questions.findIndex((q: any) => {
      return q.id === questionId
    });
    questions[index] = {
      ...questions[index],
      title: this.questionForm.value['QUESTION_TITLE']
    }
    this.treeForm.controls['QUESTIONS'].setValue(
      [...questions]
    );
  }

  onAnswerAdd(questionId: number): void {
    const answer: any[] = this.treeForm.value['ANSWERS'];

    this.treeForm.controls['ANSWERS'].setValue(
      [...answer,
        {
          id: answer.length + 1,
          title: this.answerForm.value['ANSWER_LABEL'],
          previousQuestionId: questionId,
        }
      ]
    );
    console.log(this.treeForm.value['ANSWERS']);
  }

  getSubmitedAnswer(questionId: number): any[] {
    return this.treeForm.value['ANSWERS'].filter((a: any) => a.previousQuestionId === questionId);
  }

  onQuestionAddFromAnswer(answerId: number): void {
    const questions = this.treeForm.value['QUESTIONS'];
    this.treeForm.controls['QUESTIONS'].setValue(
      [
        ...questions,
        {
          id: questions.length + 1,
          title: '',
          previousAnswerId: answerId,

        }
      ]
    );

  }


}
