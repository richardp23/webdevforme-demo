import Link from "next/link";

export default function Quiz({quizQuestion, nextPage, children}: {quizQuestion: string, nextPage: string, children: React.ReactNode}) {
    return (
        <section className={"hero is-fullheight-with-navbar is-black"}>
            <div className={"hero-body"}>
                <div className={"container is-fluid"}>
                    <div className={"notification is-info"}>
                        <div className={"title is-spaced"}>{quizQuestion}</div>
                        <div className={"subtitle"}>
                            {children}
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <Link href={nextPage} className="button is-link">Submit</Link>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function QuizChoices({ answer }: {answer: string}) {
    return (
        <>
            <label className={"radio block"}>
                <input type={"radio"} name={"answer"}/>
                {`  ${answer}   `}
            </label>
            <br />
        </>
    );
}