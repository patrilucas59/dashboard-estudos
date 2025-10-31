import ProgressBar from "./ProgressBar"

export default function CourseCard({ course, onDelete, onUpdate }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-xl flex flex-col gap-2 w-full md:w-80">
            <h3 className="text-lg font-bold">
                {course.name}
            </h3>
            <p className="text-sm text-gray-500">
                {course.progress}
            </p>
            <ProgressBar progress={course.progress} />
            <div className="flex justify-between mt-3">
                <button
                onClick={() => onUpdate(course.id, { progress: Math.min(course.progress + 10, 100) })}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                >
                +10%
                </button>
                <button
                onClick={() => onDelete(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                    Remover
                </button>
            </div>
        </div>
    )
}