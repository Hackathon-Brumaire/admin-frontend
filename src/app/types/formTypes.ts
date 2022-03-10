export type QuestionForm = {
  id: number,
  title: string,
  previousAnswerId?: number,
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
