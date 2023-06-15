import Link from "next/link";

export default function Page() {
  return (
      <section className={"hero is-fullheight-with-navbar is-black"}>
        <div className={"hero-body"}>
          <div className={"container has-text-centered"}>
            <p className={"title is-spaced is-1"}>
              Stop worrying about what to learn.
            </p>
            <p className={"subtitle"}>
              Getting into web development can be hard. With so many tools out
              there, how do you know which one to pick? Fortunately, we have the
              answer.
            </p>
            <Link href={"/learn/intro"} className={"button is-primary"}>Start Learning!</Link>
          </div>
        </div>
      </section>
  );
}
