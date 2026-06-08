import ExerciseCard from "@/components/molecules/ExerciseCard";

const exercises = [
  {
    id: 1,
    title: "Puxada frontal",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/images/puxada-frontal.jpg",
  },
  {
    id: 2,
    title: "Remada curvada",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/images/remada-curvada.jpg",
  },
  {
    id: 3,
    title: "Remada unilateral",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/images/remada-unilateral.jpg",
  },
  {
    id: 4,
    title: "Levantamento terra",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/images/levantamento-terra.jpg",
  },
];

export default function ExerciseList() {
  return (
    <div className="flex flex-col gap-3">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          title={exercise.title}
          subtitle={exercise.subtitle}
          imageSrc={exercise.imageSrc}
        />
      ))}
    </div>
  );
}