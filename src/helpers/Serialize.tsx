import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

interface node {
    bold: string;
    code: string;
    italic: string;
    url: string;
    children: any;
    type: any;
}

const Serialize = ({ children }: any) =>
    children.map((node: node, i: any) => {
        if (Text.isText(node)) {
            let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

            if (node.bold) {
                text = <strong key={i}>{text}</strong>;
            }

            if (node.code) {
                text = <code key={i}>{text}</code>;
            }

            if (node.italic) {
                text = <em key={i}>{text}</em>;
            }

            // Handle other leaf types here...

            return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
            return null;
        }

        switch (node.type) {
            case "h1":
                return <h1 key={i}>{Serialize(node.children)}</h1>;
            // Iterate through all headings here...
            case "h6":
                return <h6 key={i}>{Serialize(node.children)}</h6>;

            case "h2":
                return <h2 key={i}>{Serialize({ children: node.children })}</h2>;

            case "ul":
                return <ul key={i}>{Serialize({ children: node.children })}</ul>;

            case "li":
                return <li key={i}>{Serialize({ children: node.children })}</li>;

            case "ol":
                return <ol key={i}>{Serialize({ children: node.children })}</ol>;
            case "quote":
                return <blockquote key={i}>{Serialize({ children: node.children })}</blockquote>;

            case "link":
                return (
                    <a href={escapeHTML(node.url)} key={i}>
                        {Serialize({ children: node.children })}
                    </a>
                );

            case "table":
                return <table>{Serialize({ children: node.children })}</table>;

            default:
                return <p key={i}>{Serialize({ children: node.children })}</p>;
        }
    });

export default Serialize;
