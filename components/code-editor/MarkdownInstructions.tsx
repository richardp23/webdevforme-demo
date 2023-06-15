"use client";

import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownInstructions({ pageName }: {pageName: string}) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/${pageName}/${pageName}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [pageName]);

    return <ReactMarkdown>{content}</ReactMarkdown>
}