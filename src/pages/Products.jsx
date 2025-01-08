import React from "react";

function Produtos() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#223240] text-center mb-10">
          Nossos Produtos
        </h1>

        {/* Planejar Viagem */}
        <div className="mb-10 flex items-center gap-6">
          <div className="w-1/3">
            <img
              src="images/planejar-viagem.jpg" // Substitua com o caminho da imagem desejada
              alt="Planejar Viagem"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-2/3 text-[#223240]">
            <h2 className="text-2xl font-semibold mb-4">Planejar Viagem</h2>
            <p className="text-lg leading-relaxed">
              O <strong>Planejar Viagem</strong> é ideal para quem já tem um destino em mente, mas ainda não sabe como organizar todos os detalhes. Com esse produto, vamos decidir o meio de transporte, escolher o hotel ou Airbnb, planejar atividades para fazer no destino, tudo com base em seu orçamento. Pensado para facilitar o seu planejamento e garantir que você aproveite ao máximo a sua viagem.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              <strong>Ideal para:</strong> Pessoas que já têm um destino, mas precisam de ajuda para organizar os detalhes da viagem e otimizar o orçamento.
            </p>
          </div>
        </div>

        {/* Destino Surpresa */}
        <div className="flex items-center gap-6">
          <div className="w-1/3">
            <img
              src="images/destino-surpresa.jpg" // Substitua com o caminho da imagem desejada
              alt="Destino Surpresa"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-2/3 text-[#223240]">
            <h2 className="text-2xl font-semibold mb-4">Destino Surpresa</h2>
            <p className="text-lg leading-relaxed">
              O <strong>Destino Surpresa</strong> é perfeito para quem não sabe para onde ir, mas tem uma ideia do que gostaria em uma viagem. Com esse produto, o usuário seleciona suas preferências, como o clima, região, país, tipo de transporte, número de dias e o orçamento disponível. Com essas informações, vamos escolher um destino surpresa que se encaixa perfeitamente nas suas expectativas.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              <strong>Ideal para:</strong> Pessoas que estão em busca de uma experiência única e estão abertas a explorar novos destinos com base em suas preferências pessoais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
