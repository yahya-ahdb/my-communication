import react from "react";

export function HTMLDisplay({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}