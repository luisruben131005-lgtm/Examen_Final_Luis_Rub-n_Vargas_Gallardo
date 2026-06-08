import ExerciseList from "@/components/organisms/ExerciseList";

export default function ExercisePageTemplate() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-xs">info</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-2xl font-bold">Exercícios</h1>
          <span className="text-white font-bold">4</span>
        </div>
        <ExerciseList />
      </div>
    </main>
  );
}