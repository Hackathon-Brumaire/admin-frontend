import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

export type QuestionForm = {
  id: number,
  title: string,
  previousAnswerId?: number,
  nextAnswers: AnswerForm[],
}
export type AnswerForm = {
  id: number,
  title: string,
  previousQuestionId: number,
  doc?: DocForm
}
export type DocForm = {
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
      ANSWER_TITLE: [''],
      ANSWER_DOC_LABEL: [''],
      ANSWER_DOC_TYPE: [''],
      ANSWER_DOC_DESCRIPTION: [''],
      ANSWER_DOC_LINK: ['']
    });
    this.questionForm = fb.group({
      QUESTION_TITLE: [''],
    })
  }

  ngOnInit(): void {
  }

  onQuestionSubmit(questionId: number): void {
    const questions: QuestionForm[] = this.treeForm.value['QUESTIONS'];
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
    this.questionForm.reset();
  }

  onAnswerAdd(questionId: number): void {
    const answerForms: AnswerForm[] = this.treeForm.value['ANSWERS'];
    const nextAnswer: AnswerForm = {
      id: answerForms.length + 1,
      title: this.answerForm.value['ANSWER_TITLE'],
      previousQuestionId: questionId,
    }
    if (this.answerForm.value['ANSWER_DOC_LABEL'] == null ||
      this.answerForm.value['ANSWER_DOC_LABEL'].length > 0) {
      nextAnswer.doc = {
        label: this.answerForm.value['ANSWER_DOC_LABEL'],
        description: this.answerForm.value['ANSWER_DOC_DESCRIPTION'],
        type: this.answerForm.value['ANSWER_DOC_TYPE'],
        link: this.answerForm.value['ANSWER_DOC_LINK']
      }
    }
    this.treeForm.controls['ANSWERS'].setValue(
      [...answerForms,
        nextAnswer
      ]
    );
    this.answerForm.reset();
  }

  onQuestionAddFromAnswer(answerId: number): void {
    const questions: QuestionForm[] = this.treeForm.value['QUESTIONS'];
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

  getSubmittedAnswer(questionId: number): any[] {
    return this.treeForm.value['ANSWERS'].filter((a: any) => a.previousQuestionId === questionId);
  }

  getAnswer(answerId: number): AnswerForm | undefined {
    const answers: AnswerForm[] = this.treeForm.value['ANSWERS'];
    return answers.find((answer: AnswerForm) => answer.id === answerId);
  }
}
