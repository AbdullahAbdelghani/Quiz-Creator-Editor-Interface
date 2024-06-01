export type Quiz = {
  created: string;
  description: string;
  id?: string;
  modified?: string;
  questions_answers: Question[];
  score: null | number;
  title: string;
  url: string;
};

export type Question = {
  answer_id: null | string;
  answers: {
    id?: string;
    is_true: boolean;
    text: string;
  }[];
  feedback_false: string;
  feedback_true: string;
  id?: string;
  text: string;
};
