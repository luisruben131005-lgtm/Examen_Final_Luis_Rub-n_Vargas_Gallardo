import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ExerciseImage({ src, alt }: Props) {
  return (
    <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}