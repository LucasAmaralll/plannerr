// src/controllers/formularioController.js
const nodemailer = require('../config/nodemailer');

const enviarFormulario = (req, res) => {
  const { destino, transporte, data, meioDeHospedagem, orcamento, temHospedagemDefinida, temTransporteDefinido } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "usealigned@gmail.com", // E-mail para onde enviar
    subject: "Novo formulário de Planejar Viagem",
    text: `
      Destino: ${destino}
      Transporte: ${transporte.join(", ")}
      Data: ${data}
      Meio de Hospedagem: ${meioDeHospedagem}
      Orçamento: ${orcamento}
      Tem hospedagem definida: ${temHospedagemDefinida}
      Tem transporte definido: ${temTransporteDefinido}
    `,
  };

  nodemailer.transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Erro ao enviar o e-mail");
    }
    res.status(200).send("Formulário enviado com sucesso");
  });
};

module.exports = { enviarFormulario };
