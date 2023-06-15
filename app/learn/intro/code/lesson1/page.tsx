"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Workspace from "@/components/code-editor/CourseWorkspace";

import settings from "./sandpack-settings.json";

export default function Page() {
  const directory = usePathname();
  const getDirectoryName = () => {
    return directory.substring(
      directory.lastIndexOf("/") + 1,
      directory.length
    );
  };

  return (
    <section className={"hero is-fullheight-with-navbar"}>
      <div className={"hero-body"}>
          <Workspace
              editorSettings={settings}
              directoryName={getDirectoryName()}
          />
      </div>
      <div className={"hero-footer"}>
        <div className={"container is-flex is-align-items-center mb-5"}>
          <span className={"tag is-align-self-center"}>Course progress: </span>
          <progress
            className={"progress mx-4 mb-0 is-info"}
            value={"25"}
            max={"100"}
            style={{ display: "inline" }}
          >
            25%
          </progress>
            <button className={"button mr-1"}>Back</button>
            <Link href={"/learn/end"} className={"button ml-2 is-primary"}>Next</Link>
        </div>
      </div>
    </section>
  );
}
