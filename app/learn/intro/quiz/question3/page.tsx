// "use client"
import Quiz from "@/components/quiz/Quiz";
import { QuizChoices } from "@/components/quiz/Quiz";

export default function Page() {
  return (
    <div>
        <Quiz quizQuestion={"Have you ever written code before?"} nextPage={"../code/"}>
            <div className="field">
                <div className="control">
                    <QuizChoices answer={"Yes I have!"} />
                    <QuizChoices answer={"Nope!"} />
                </div>
            </div>
        </Quiz>
    </div>
  );
}
