import {AnswerForm, QuestionForm} from "../types/formTypes";
import {Answer, Question} from "../types/apiTypes";

export function formToJsonBody(questionsForm: QuestionForm[], answersForm: AnswerForm[],
                               previousAnswerId: number | undefined = undefined): Question | undefined {
  const question: QuestionForm | undefined = questionsForm.find((q) => q.previousAnswerId === previousAnswerId);
  if (question == undefined) {
    return undefined;
  }
  let decisionAnswers: Answer[] = [];


  const currentAnswersForm: AnswerForm[] = answersForm.filter((a) => a.previousQuestionId === question?.id);
  for (const currentAnswer of currentAnswersForm) {
    let answer: Answer = {
      title: currentAnswer.title,
      nextQuestion: formToJsonBody(
        questionsForm.filter((q) => q.id !== question?.id),
        answersForm.filter((a) => a.previousQuestionId !== question?.id),
        currentAnswer.id
      )
    };
    if (currentAnswer.doc !== undefined) {
      answer.doc = {...currentAnswer.doc};
    }
    decisionAnswers.push(answer);
  }

  return {
    title: question?.title ?? 'ERROR',
    nextAnswers: decisionAnswers
  };
}
