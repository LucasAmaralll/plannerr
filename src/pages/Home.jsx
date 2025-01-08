import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-gradient-to-r from-[#223240] via-white px-10">
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
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto e botão */}
      <div className="md:w-1/2 text-center md:text-right">
        <h1 className="text-4xl md:text-5xl font-bold text-[#223240] mb-4">
          Planeje sua viagem com facilidade
        </h1>
        <p className="text-lg text-[#3B8C66] mb-6">
          Descubra o destino perfeito com a ajuda do Planner.
        </p>
        <Link to="/form">
        <div className="space-x-4">
          <button className="bg-[#347355] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#60BF81] transition">
            Planejar Viagem
          </button>
          <button className="bg-[#347355] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#60BF81] transition">
            Destino Surpresa
          </button>
        </div>
          
        </Link>
      </div>
    </section>
  );
}

export default Home;
