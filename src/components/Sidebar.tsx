import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px]  bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b text-center border-gray-600 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            slugLesson={lesson.slug}
          />
        ))}
      </div>
    </aside>
  );
}
export { Sidebar };
