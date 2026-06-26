import Link from "next/link";
import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders a string with inline [label](href) markdown links.
 *  Internal links (starting with /) use next/link; others open in a new tab. */
export function RichText({ children }: { children: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;

  while ((m = LINK_RE.exec(children)) !== null) {
    if (m.index > last) nodes.push(children.slice(last, m.index));
    const [, label, href] = m;
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={m.index} href={href} className="font-medium text-accent underline underline-offset-2 hover:text-deepblue">
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a
          key={m.index}
          href={href}
          target="_blank"
          rel="noopener nofollow"
          className="font-medium text-accent underline underline-offset-2 hover:text-deepblue"
        >
          {label}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < children.length) nodes.push(children.slice(last));

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}
