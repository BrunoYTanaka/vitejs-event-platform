import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
interface LessonProps {
  title: string;
  slugLesson: string;
  availableAt: Date;
  type: "live" | "class";
}

function Lesson({ title, availableAt, type, slugLesson }: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === slugLesson;

  return (
    <Link to={`/event/lesson/${slugLesson}`} className="group">
      <span className="text-gray-300 first-letter:capitalize block">
        {availableDateFormatted}
      </span>
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors relative",
          {
            "bg-green-500": isActiveLesson,
            " before:indicator": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm  font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[0.125rem] px-2 text-white border font-bold",
              {
                "border-white": isActiveLesson,
                "border-green-300 ": !isActiveLesson,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames(" mt-4 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}

export { Lesson };
