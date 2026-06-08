import ExerciseTitle from "@/components/atoms/ExerciseTitle";
import ExerciseSubtitle from "@/components/atoms/ExerciseSubtitle";
import ArrowIcon from "@/components/atoms/ArrowIcon";
import ExerciseImage from "@/components/atoms/ExerciseImage";

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export default function ExerciseCard({ title, subtitle, imageSrc }: Props) {
  return (
    <div className="flex items-center gap-4 bg-[#2a2a2a] rounded-xl p-3 cursor-pointer hover:bg-[#333333] transition">
      <ExerciseImage src={imageSrc} alt={title} />
      <div className="flex flex-col flex-1">
        <ExerciseTitle text={title} />
        <ExerciseSubtitle text={subtitle} />
      </div>
      <ArrowIcon />
    </div>
  );
}