import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className={"hero is-fullheight-with-navbar"}>
        <div className={"hero-body"}>
          <div className={"container"}>
            <p className={"title is-spaced has-text-info"}>
              Welcome to webdevfor.me, the last web development course you will
              need.
            </p>
            <p className={"subtitle has-text-danger-light"}>
              Before we begin, let&apos;s find out how much you know.
            </p>
            <Link href={"./intro/quiz/question1"} className={"button is-info"}>Continue</Link>
          </div>
        </div>
      </section>
    </>
  );
}
