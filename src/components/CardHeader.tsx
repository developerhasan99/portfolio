import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export default function CardHeader({
  title,
  description,
  className,
}: {
  className?: string;
  title: string;
  description: string;
}) {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm md:text-base md:max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
}
