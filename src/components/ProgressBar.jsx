export default function ProgressBar ({ progress }) {
    return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div className="bg-blue-500 h-3 transition-all duration-300" 
        style={{ width: `${progress}%` }}
        />
    </div>
    )
}
