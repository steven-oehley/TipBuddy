export default function Message({ children }) {
  return (
    <div className="message mt-8 p-6 bg-gray-100 border border-gray-200 rounded-md shadow-md">
      <h3 className="text-gray-800">{children}</h3>
    </div>
  );
}
