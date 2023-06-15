// "use client"
import Quiz from "@/components/quiz/Quiz";
import { QuizChoices } from "@/components/quiz/Quiz";

export default function Page() {
  return (
    <div>
        <Quiz quizQuestion={"Have you ever made a website before?"} nextPage={"./question2"}>
            <div className="field">
                <div className="control">
                    <QuizChoices answer={"Yes, I have!"} />
                    <QuizChoices answer={"No, I have not."} />
                    <QuizChoices answer={"What's a website?"} />
                </div>
            </div>
        </Quiz>
    </div>
  );
}
