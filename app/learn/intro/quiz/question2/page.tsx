// "use client"
import Quiz from "@/components/quiz/Quiz";
import { QuizChoices } from "@/components/quiz/Quiz";

export default function Page() {
  return (
    <div>
        <Quiz quizQuestion={"Do you know what HTML, CSS, and JavaScript are?"} nextPage={"./question3"}>
            <div className="field">
                <div className="control">
                    <QuizChoices answer={"I don't know any of those!"} />
                    <QuizChoices answer={"I know JavaScript!"} />
                    <QuizChoices answer={"I know HTML and CSS!"} />
                    <QuizChoices answer={"I have heard of them!"} />
                </div>
            </div>
        </Quiz>
    </div>
  );
}
