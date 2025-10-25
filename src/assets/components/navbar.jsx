export default function Navbar() {
  return (
    <>
      <nav className="backdrop-blur-md bg-white/30 fixed w-full top-0 left-0 z-50  ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-[10vh]">
          <div className="1 border border-white rounded ">
            <h1 className="text-white text-lg font-bold pl-5 pr-5 pt-2 pb-2 ">
              News Media
            </h1>
          </div>
          <ul className="flex gap-6 text-black">
            <li className="hover:underline">Top Headlines</li>
            <li className="hover:underline">Sports</li>
            <li className="hover:underline">International</li>
            <li className="font-bold hover:underline">LOGIN</li>
            <li className="font-bold hover:underline">SignUp</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
