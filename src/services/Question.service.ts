import { Question } from "../types/Question.type";

const baseRoute = "https://localhost:7282/";

export const getAllQuestions = async (): Promise<Question[]> => {
    try {
        const response = await fetch(`${baseRoute}Question`, {
            method: 'GET'
        });
        return await response.json() as Question[];
    } catch (error){
        return [];
    }
}
