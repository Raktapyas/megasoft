import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  size?: "nav" | "footer";
};

export function Logo({ className = "", size = "nav" }: LogoProps) {
  const mark = size === "footer" ? "h-10 w-10" : "h-8 w-8";
  const word =
    size === "footer"
      ? "text-[15px] tracking-[0.4em]"
      : "text-[12.5px] tracking-[0.36em]";

  return (
    <Link
      to="/"
      aria-label="MegaSoft Pvt. Ltd. — home"
      className={`group inline-flex shrink-0 items-center gap-3 ${className}`}
    >
      <img
        src="/logo-mark.png"
        alt=""
        width={64}
        height={64}
        className={`${mark} w-auto object-contain opacity-90 grayscale transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span
        className={`font-display ${word} font-medium text-ivory uppercase`}
      >
        Megasoft
      </span>
    </Link>
  );
}
