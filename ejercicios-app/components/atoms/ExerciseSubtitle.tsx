type Props = {
  text: string;
};

export default function ExerciseSubtitle({ text }: Props) {
  return (
    <p className="text-gray-400 text-sm">
      {text}
    </p>
  );
}