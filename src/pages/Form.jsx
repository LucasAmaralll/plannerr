import React, { useState } from "react";
import { FaPlane, FaCar, FaBus, FaShip } from "react-icons/fa"; // Ícones para os meios de transporte
import emailjs from "emailjs-com"; // Importe a biblioteca EmailJS

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
    nomeCompleto: "",
    quantidadePessoas: 1,
    idadePrincipal: "",
    idadeAcompanhante: "",
    nomeAcompanhante: "",
    documentos: [], // Agora é um array para permitir mais de 1 documento
    locomoção: "", // Para o step de locomoção
  });

  const paisesEcidades = {
    "Brasil": ["Rio de Janeiro", "São Paulo", "Belo Horizonte"],
    "Canadá": ["Toronto", "Vancouver", "Montreal"],
    "EUA": ["Nova York", "Los Angeles", "Miami"],
  }; // Exemplo de países e cidades

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value], // Adiciona o valor selecionado
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value), // Remove o valor desmarcado
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({ ...formData, documentos: [...formData.documentos, ...files] }); // Adiciona arquivos ao array
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.documentos.length === 0) {
      alert("Por favor, anexe ao menos um documento.");
      return;
    }

    const templateParams = {
      destino: formData.destino,
      transporte: formData.transporte.join(", "),
      data: formData.data,
      meioDeHospedagem: formData.meioDeHospedagem,
      orcamento: formData.orcamento,
      temHospedagemDefinida: formData.temHospedagemDefinida ? "Sim" : "Não",
      temTransporteDefinido: formData.temTransporteDefinido ? "Sim" : "Não",
      nomeCompleto: formData.nomeCompleto,
      quantidadePessoas: formData.quantidadePessoas,
      idadePrincipal: formData.idadePrincipal,
      nomeAcompanhante: formData.nomeAcompanhante,
      idadeAcompanhante: formData.idadeAcompanhante,
      documentos: formData.documentos.map((doc) => doc.name).join(", "),
    };

    emailjs
      .send("service_d2rcxe6", "template_tj3vmce", templateParams, "YFfYgvI750pHBl_iy")
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso", response);
          alert("Formulário enviado com sucesso!");
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error);
          alert("Erro ao enviar o formulário.");
        }
      );
  };

  const goBack = () => {
    if (step === 1) {
      window.location.href = "/"; // Redireciona para a página inicial
    } else if (step === 6 || step === 8) {
      setStep(step - 1); // Vai voltar para o step de locomoção ou hospedagem sem limpar a seleção
    } else {
      setStep(step - 1); // Volta para o step anterior normalmente
    }
  };  

  const handleQuantidadePessoasChange = (e) => {
    const quantidade = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      quantidadePessoas: quantidade,
    });
    // Abrir ou fechar os steps dos acompanhantes
    if (quantidade > 1) {
      setStep(3); // Avançar para o step de acompanhantes se houver mais de 1 pessoa
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[80%] md:w-[50%] transition-transform transform-gpu">
        <h2 className="text-2xl font-semibold text-[#223240] mb-4">Planeje Sua Viagem</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <label className="block mt-4 mb-2 text-[#223240]">País:</label>
              <select
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Selecione o país</option>
                {Object.keys(paisesEcidades).map((pais, index) => (
                  <option key={index} value={pais}>
                    {pais}
                  </option>
                ))}
              </select>

              {formData.pais && (
                <>
                  <label className="block mt-4 mb-2 text-[#223240]">Cidade:</label>
                  <select
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  >
                    <option value="">Selecione a cidade</option>
                    {paisesEcidades[formData.pais].map((cidade, index) => (
                      <option key={index} value={cidade}>
                        {cidade}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-2 text-[#223240]">Nome Completo:</label>
              <input
                type="text"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <label className="block mt-4 mb-2 text-[#223240]">Quantas pessoas irão com você na viagem?</label>
              <input
                type="number"
                name="quantidadePessoas"
                value={formData.quantidadePessoas}
                onChange={handleQuantidadePessoasChange}
                className="w-full p-2 border rounded-lg"
                min="1"
                required
              />
            </div>
          )}

          {step === 3 && formData.quantidadePessoas > 1 && (
            <div>
              <h3 className="text-xl text-[#223240] mb-4">Acompanhantes:</h3>
              {Array.from({ length: formData.quantidadePessoas - 1 }, (_, index) => (
                <div key={index}>
                  <label className="block mt-4 mb-2 text-[#223240]">Nome do Acompanhante {index + 1}:</label>
                  <input
                    type="text"
                    name={`nomeAcompanhante${index}`}
                    value={formData[`nomeAcompanhante${index}`]}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                  <label className="block mt-4 mb-2 text-[#223240]">Idade do Acompanhante {index + 1}:</label>
                  <input
                    type="number"
                    name={`idadeAcompanhante${index}`}
                    value={formData[`idadeAcompanhante${index}`]}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    min="0"
                  />
                </div>
              ))}
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block mb-2 text-[#223240]">Anexar documentos (Passaporte, Carteira de Identidade):</label>
              <input
                type="file"
                name="documentos"
                onChange={handleFileChange}
                className="w-full p-2 border rounded-lg"
                accept=".pdf"
                multiple
                required
              />
            </div>
          )}

          {step === 5 && (
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

        {step === 6 && (
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
                      setStep(8); // Pular para a próxima etapa
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

        {step === 7 && !formData.temTransporteDefinido && (
            <div>
              <label className="block mb-2 text-[#223240]">Escolha os meios de transporte:</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="transporte"
                    value="avião"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Avião</span> <FaPlane />
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="transporte"
                    value="carro"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Carro</span> <FaCar />
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="transporte"
                    value="onibus"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Ônibus</span> <FaBus />
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="transporte"
                    value="navio"
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Navio</span> <FaShip />
                </label>
              </div>
            </div>
          )}

          {step === 8 && (
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
                      setStep(10); // Avança para o próximo passo ao escolher "Sim"
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

          {step === 9 && !formData.temHospedagemDefinida && (
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
                className="bg-[#223240] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]"
              >
                Voltar
              </button>

            {step < 10 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)} // Avança para o próximo step
                  className="bg-[#347355] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]"
                >
                  Próximo
                </button>
              )}
            {step === 10 && (
              <div>
                <label className="block mb-2 text-[#223240]">Declaro que as informações fornecidas são verdadeiras:</label>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="declaracao"
                    onChange={(e) => setFormData({ ...formData, declaracao: e.target.checked })}
                  />
                  <span className="ml-2">Sim, aceito</span>
              </div>
                <button
                  type="submit"
                  disabled={!formData.declaracao}
                  className="bg-[#347355] text-white py-2 px-4 rounded-lg hover:bg-[#60BF81]"
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
