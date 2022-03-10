export type Question = {
  title: string,
  nextAnswers: Answer[]
}

export type Answer = {
  title: string,
  nextQuestion?: Question,
  doc?: Doc
}
export type Doc = {
  label: string,
  description: string,
  type: string,
  link: string
}
