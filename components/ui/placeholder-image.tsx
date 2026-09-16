import Image from "next/image";

type PlaceholderImageProps = {
  label: string;
  width?: number;
  height?: number;
  dark?: boolean;
  className?: string;
  priority?: boolean;
};

export function PlaceholderImage({
  label,
  width = 600,
  height = 400,
  dark = false,
  className = "",
  priority = false,
}: PlaceholderImageProps) {
  const colors = dark ? "10203a/92a6c5" : "e5edf5/748ba4";
  return (
    <Image
      unoptimized
      src={`https://placehold.co/${width}x${height}/${colors}?text=${encodeURIComponent(label)}`}
      alt={`Imagine provizorie: ${label}`}
      width={width}
      height={height}
      className={className}
      preload={priority}
    />
  );
}
