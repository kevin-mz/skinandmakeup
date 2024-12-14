import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center bg-[#E57649] text-[#FCECD7] h-12 w-full fixed">
      <ul className="flex justify-around w-full">
        <li>APRENDE</li>
        <li>RESEÑAS</li>
        <li>SOBRE MI</li>
        <li>
          <input type="text" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
