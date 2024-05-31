export type Quiz = {
  created: string;
  description: string;
  id: number;
  modified: string;
  questions_answers: {
    answer_id: null | number;
    answers: {
      id: number;
      is_true: boolean;
      text: string;
    }[];
    feedback_false: string;
    feedback_true: string;
    id: number;
    text: string;
  }[];
  score: null | number;
  title: string;
  url: string;
};
