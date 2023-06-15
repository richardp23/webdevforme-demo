import {Sandpack} from "@codesandbox/sandpack-react";

import Instructions from "@/components/code-editor/MarkdownInstructions";

interface settingJSON {
    template: any;
    files: {
        [path: string]: string;
    };
    options: {
        editorHeight: string;
    };
}

export default function CourseWorkSpace({ editorSettings, directoryName }: {editorSettings: settingJSON, directoryName: string}) {
    return (
        <div className={"container is-max-widescreen"}>
            <div className={"columns is-gapless"}>
                <div className={"column is-two-thirds"}>
                    <Sandpack
                        template={editorSettings.template}
                        files={editorSettings.files}
                        options={editorSettings.options}
                        theme="auto"
                    />
                </div>
                <div className={"column"}>
                    <div
                        className={"box"}
                        style={{ height: "75vh", overflowY: "auto" }}
                    >
                        <div className={"content"}>
                            <Instructions pageName={directoryName} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}