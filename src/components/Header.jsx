import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Planner</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/form" className="hover:underline">Formulário</Link></li>
          <li><Link to="/products" className="hover:underline">Produtos</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/user" className="hover:underline">Área do Usuário</Link></li>
          <li><Link to="/admin" className="hover:underline">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
