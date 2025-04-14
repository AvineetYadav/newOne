const Navbar = () => (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent">
      <h1 className="text-2xl font-bold">BrainyLingo</h1>
      <ul className="hidden md:flex space-x-6 text-gray-300">
        <li>Home</li>
        <li>Leaderboard</li>
        <li>Daily Quiz</li>
        <li>Genre</li>
      </ul>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full font-medium">
        Sign Out
      </button>
    </nav>
  );
  
  export default Navbar;