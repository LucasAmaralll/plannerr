import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 px-10">
      {/* Slider de Imagens */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="md:w-1/2 flex justify-center"
      >
        {["virginia1.jpg", "virginia2.jpg", "virginia3.jpg", "virginia4.jpg"].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`images/${image}`}
              alt={`Viagem ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto e botão */}
      <div className="md:w-1/2 text-center md:text-right">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Planeje sua viagem com facilidade
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Descubra o destino perfeito com a ajuda do Planner.
        </p>
        <Link to="/form">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Planejar Viagem
          </button>
        </Link>
        <Link to="/quem-sou-eu" className="block mt-4 text-blue-500 underline">
          Quem Sou Eu
        </Link>
      </div>
    </section>
  );
}

export default Home;
