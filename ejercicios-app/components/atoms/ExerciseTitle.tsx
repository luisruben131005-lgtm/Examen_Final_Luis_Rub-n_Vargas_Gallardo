type Props = {
  text: string;
};

export default function ExerciseTitle({ text }: Props) {
  return (
    <h2 className="text-white text-lg font-bold">
      {text}
    </h2>
  );
}