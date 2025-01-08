import React from "react";

function Footer() {
  return (
    <footer className="bg-[#223240] text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2025 Planner - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/sobre-mim" className="hover:underline text-[#60BF81]">Sobre Mim</a>
          <a href="/contact" className="hover:underline text-[#60BF81]">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
