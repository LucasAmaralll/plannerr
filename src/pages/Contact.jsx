// src/pages/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-[#223240] mb-8 text-center">Contato</h1>

      {/* Layout com mapa à esquerda e informações de contato à direita */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Seção do Mapa */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps?q=R.%20Flamengo,%20737%20-%20Vila%20Marumby%20-%2023.4479870216653,-51.92655677563628&output=embed"
            width="100%"
            height="400"
            className="border-none rounded-lg"
            title="Localização"
          ></iframe>
        </div>

        {/* Seção de Informações de Contato */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#223240]">Email</h2>
            <p className="text-lg text-[#3B8C66]">contato@planner.com</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#223240]">Horário de Atendimento</h2>
            <p className="text-lg text-[#3B8C66]">Segunda a Sexta, das 9h às 18h</p>
          </div>

          {/* Contato com ícones */}
          <div className="mb-6 flex justify-center items-center space-x-4">
            <div className="flex items-center text-lg text-[#223240]">
              <FaWhatsapp className="text-2xl text-[#25D366] mr-2" />
              <a
                href="https://wa.me/5512997293820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:underline"
              >
                (12) 99729-3820
              </a>
            </div>
            <div className="flex items-center text-lg text-[#223240]">
              <FaInstagram className="text-2xl text-[#E1306C] mr-2" />
              <a
                href="https://www.instagram.com/virginiamfeitosa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:underline"
              >
                @virginiamfeitosa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
