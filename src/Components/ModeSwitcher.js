const ModeSwitcher = ({ label, active = false }) => (
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg"
          : "bg-[#1E293B]  text-yellow-50 border border-gray-600"
      }`}
    >
      {label}
    </button>
  );
  
  export default ModeSwitcher;