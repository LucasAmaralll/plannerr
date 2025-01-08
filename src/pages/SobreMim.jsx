import React from "react";
import { FaInstagram } from "react-icons/fa";

function QuemSouEu() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-white px-10">
        {/* Foto da Virginia */}
        <div className="md:w-1/2 flex justify-center">
            <img
            src="images/virginia1.jpg"
            alt="Virginia Feitosa"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
            />
        </div>
        {/* Texto de Apresentação */}
        <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#223240] mb-4">
            Olá, eu sou Virginia Feitosa
            </h2>
            <p className="text-lg text-[#223240] mb-6 leading-relaxed">
            Meu nome é Virginia, tenho 28 anos e me aventuro pelo mundo desde os
            meus 18. Já conheci 28 países, domino o inglês fluentemente e ajudo
            pessoas a planejarem viagens inesquecíveis com o melhor custo-benefício.
            </p>
            <p className="text-lg text-[#223240] mb-6 leading-relaxed">
            Planejar viagens é minha paixão. Quer saber mais sobre minhas aventuras?
            Me siga no Instagram!
            </p>
            <a
            href="https://www.instagram.com/virginiamfeitosa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-pink-500 hover:text-pink-600 transition"
            >
            <FaInstagram size={24} className="mr-2" />
            <span>@virginiamfeitosa</span>
            </a>
        </div>
    </section>

  );
}

export default QuemSouEu;
