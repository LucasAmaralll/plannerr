import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2025 Planner - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:underline">Sobre Nós</a>
          <a href="/contact" className="hover:underline">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
