import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-wide">Happy Clients</p>
      </div>
      <h1 className="font-serif text-3xl md:text-5xl">
        What Clients Say About Me
      </h1>
      <p>
        Don&apos;t just take my word for it. See what my clients have to say
        about my work.
      </p>
    </div>
  );
}
