import { twMerge } from "tailwind-merge";

export default function ToolboxItems({
  toolboxItems,
  itemsWrapperClassName,
}: {
  toolboxItems: { title: string; icon: React.ElementType }[];
  itemsWrapperClassName?: string;
}) {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-6 mt-6">
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {toolboxItems.map((tool) => (
          <div
            key={tool.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <tool.icon className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="size-0 absolute">
              <linearGradient id="tech-icon-gradient">
                <stop offset="0%" stopColor="rgba(110 231 183)" />
                <stop offset="100%" stopColor="rgba(56 189 248)" />
              </linearGradient>
            </svg>
            <span className="font-semibold">{tool.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
