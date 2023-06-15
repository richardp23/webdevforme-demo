import Link from "next/link";

export default function Page() {
    return (
        <>
            <section className={"hero is-fullheight-with-navbar"}>
                <div className={"hero-body"}>
                    <div className={"container"}>
                        <p className={"title is-spaced has-text-info"}>
                            Based on your answers: you&apos;re a beginner to web development.
                        </p>
                        <p className={"subtitle has-text-danger-light"}>
                            And that&apos;s okay, everyone starts off somewhere. Let&apos;s start with the basics!
                        </p>
                        <Link href={"./code/lesson1"} className={"button is-info"}>Continue</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
