import React from "react";
import Link from "next/link";

function Breadcrumb({ title }) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
      aria-label="Breadcrumb"
    >
      <Link href="/works" className="hover:underline">
        Our Works
      </Link>

      <span></span>

      <span className="text-brand font-medium">{title}</span>
    </nav>
  );
}
function BoldText(text) {
  return text
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part));
}
function ContentBlock({ type, heading, body, items }) {
  return (
    <div className="space-y-4">
      {heading && <h4>{heading}</h4>}
      {type === "text" && <p className=" whitespace-pre-line">{body}</p>}
      {type === "list" && (
        <ul className="list-disc pl-5 space-y-2 lg:text-xl">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {type === "boldText" && (
        <p className=" whitespace-pre-line">{BoldText(body)}</p>
      )}
      {type === "textwithlist" && (
        <div>
          <p className=" whitespace-pre-line">{body}</p>
          <ul className="list-disc pl-4 space-y-2 lg:text-xl ml-2 mt-1">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function WorksTemplate({ title, content }) {
  const column1 = content.filter((block) => block.column === 1);
  const column2 = content.filter((block) => block.column === 2);

  return (
    <main>
      <section className="py-20" aria-labelledby="Works-heading">
        <div className="container">
          <Breadcrumb title={title} />

          <div className="flex justify-between lg:flex-row flex-col lg:gap-28">
            <div className="lg:min-w-1/2 grow">
              <h2 id="Works-heading" className="lg:mb-6">
                {title}
              </h2>
              <div className="space-y-8 ">
                {column1.map((block, index) => (
                  <ContentBlock key={index} {...block} />
                ))}
              </div>
            </div>

            <div className="space-y-8 lg:max-w-122 shrink-0">
              {column2.map((block, index) => (
                <ContentBlock key={index} {...block} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorksTemplate;
