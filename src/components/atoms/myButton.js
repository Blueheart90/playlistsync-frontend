export default function MyButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full px-4 py-2 text-base text-white transition-all duration-100 bg-black border border-gray-200 cursor-pointer select-none font-dmsans hover:shadow-lg "
    >
      {children}
    </button>
  )
}
