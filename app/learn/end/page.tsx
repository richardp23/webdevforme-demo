import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className={"hero is-fullheight-with-navbar is-black"}>
            <div className={"hero-body"}>
                <div className={"container"}>
                    <div className={"block"}>
                        <p className={"title is-spaced is-1"}>
                            That&apos;s the end of the demo!
                        </p>
                    </div>
                    <p className={"subtitle is-3 block"}>
                        Thank you so much for viewing this limited preview.
                        <br/>Sign up  in order to receive future updates!
                    </p>
                    <div className={"field"}>
                        <label className={"label has-text-info"}>Email</label>
                        <div className={"control block"}>
                            <input className={"input"} type={"email"} placeholder={"Email input"} />
                        </div>
                        <div className={"control block"}>
                            <button className={"button is-link"}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
