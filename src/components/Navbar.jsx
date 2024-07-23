import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-zinc-500">
      <div className="container flex justify-between items-center mx-auto py-5">
        <h1 className="text-seguri font-bold">Navbar</h1>
        <ul className="flex justify-center items-center gap-4">
          <li>Inicio</li>
          <li>Premios</li>
          <li>Ganadores</li>
        </ul>
      </div>
    </nav>
  );
};
