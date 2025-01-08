import React, { useState } from "react";
import { FaPlane, FaCar, FaBus, FaShip } from "react-icons/fa"; // Ícones para os meios de transporte

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destino: "",
    transporte: [],
    data: "",
    meioDeHospedagem: "",
    temTransporteDefinido: false,
    temHospedagemDefinida: false,
    orcamento: "",
  });

  const destinosSugestao = ["Canadá", "Cabo Frio", "Capadócia", "Copenhagen", "Cairns"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const newTransporte = prevState.transporte.includes(value)
        ? prevState.transporte.filter((item) => item !== value)
        : [...prevState.transporte, value];
      return { ...prevState, transporte: newTransporte };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch("http://localhost:5000/api/enviar-formulario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });
      if (response.ok) {
        alert("Formulário enviado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao enviar o formulário.");
    }
  };

  const goBack = () => {
    if (step === 1) {
      window.location.href = "/"; // Redireciona para a página inicial
    } else {
      setStep(step - 1); // Volta para o step anterior
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[80%] md:w-[50%] transition-transform transform-gpu">
        <h2 className="text-2xl font-semibold text-[#223240] mb-4">Planeje Sua Viagem</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <label className="block mb-2 text-[#223240]">Destino:</label>
              <input
                type="text"
                name="destino"
                value={formData.destino}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Exemplo: Canadá"
                list="destinos"
                required
              />
              <datalist id="destinos">
                {destinosSugestao
                  .filter((destino) => destino.toLowerCase().includes(formData.destino.toLowerCase()))
                  .map((destino, index) => (
                    <option key={index} value={destino} />
                  ))}
              </datalist>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-2 text-[#223240]">Já tem um meio de locomoção definido?</label>
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="temTransporteDefinido"
                    value="sim"
                    onChange={() => {
                      setFormData({ ...formData, temTransporteDefinido: true });
                      setStep(4); // Pular para a próxima etapa
                    }}
                  />
                  <span className="ml-2">Sim</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="temTransporteDefinido"
                    value="não"
                    onChange={() => setFormData({ ...formData, temTransporteDefinido: false })}
                  />
                  <span className="ml-2">Não</span>
                </label>
              </div>
            </div>
          )}

          {step === 3 && !formData.temTransporteDefinido && (
            <div>
              <label className="block mb-2 text-[#223240]">Escolha os meios de transporte:</label>
              <div className="grid grid-cols-2 gap-4">
                {["avião", "carro", "onibus", "navio"].map((transporte) => (
                  <label key={transporte} className="flex items-center">
                    <input
                      type="checkbox"
                      value={transporte}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {transporte === "avião" && <FaPlane />}
                    {transporte === "carro" && <FaCar />}
                    {transporte === "onibus" && <FaBus />}
                    {transporte === "navio" && <FaShip />}
                    {transporte.charAt(0).toUpperCase() + transporte.slice(1)}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block mb-2 text-[#223240]">Data da Viagem:</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          )}

          {step === 5 && (
            <div>
              <label className="block mb-2 text-[#223240]">Tem hospedagem definida?</label>
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="temHospedagemDefinida"
                    value="sim"
                    onChange={() => {
                      setFormData({ ...formData, temHospedagemDefinida: true });
                      setStep(6); // Pular para a próxima etapa
                    }}
                  />
                  <span className="ml-2">Sim</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="temHospedagemDefinida"
                    value="não"
                    onChange={() => setFormData({ ...formData, temHospedagemDefinida: false })}
                  />
                  <span className="ml-2">Não</span>
                </label>
              </div>
            </div>
          )}

          {step === 6 && !formData.temHospedagemDefinida && (
            <div>
              <label className="block mb-2 text-[#223240]">Onde prefere se hospedar?</label>
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="meioDeHospedagem"
                    value="hotel"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Hotel</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="meioDeHospedagem"
                    value="airbnb"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Airbnb</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="meioDeHospedagem"
                    value="casaDeAlguem"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Casa de Alguém</span>
                </label>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={goBack}
              className="bg-[#347355] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]"
            >
              Voltar
            </button>

            {step === 6 ? (
              <button type="submit" className="bg-[#347355] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]">
                Enviar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-[#347355] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]"
              >
                Próximo
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
