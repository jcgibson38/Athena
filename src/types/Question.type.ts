import { Answer } from "./Answer.type";
import { User } from "./User.type";

export interface Question {
    Id: string;
    Title: string;
    Body: string;
    Answers: Answer[];
    Rating: number;
    User: User;
}