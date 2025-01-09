import React, { useState } from "react";
import Slider from "react-slick"; // Biblioteca de carrossel
import '../styles/Blog.css'; // Importação do arquivo de estilos

function Blog() {
  // Estado para armazenar os posts
  const [posts, setPosts] = useState([
    // Exemplo de posts iniciais
    {
      id: 1,
      name: "João Silva",
      message: "A viagem foi incrível! Super recomendo.",
      date: new Date(),
    },
    {
      id: 2,
      name: "Maria Souza",
      message: "A experiência foi maravilhosa. Obrigado!",
      date: new Date(),
    },
  ]);

  // Estado para gerenciar o formulário
  const [newPost, setNewPost] = useState({
    name: "",
    message: "",
  });

  // Função para atualizar o estado do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  // Função para adicionar um novo post
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!newPost.name || !newPost.message) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const newPostData = {
      ...newPost,
      id: posts.length + 1,
      date: new Date(),
    };

    setPosts([newPostData, ...posts]);
    setNewPost({ name: "", message: "" }); // Limpar o formulário
  };

  // Configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-[#223240] mb-8 text-center">Blog</h1>

      {/* Formulário de novo post */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#223240] mb-4">Adicionar Publicação</h2>
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={newPost.name}
            onChange={handleInputChange}
            placeholder="Seu nome"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            value={newPost.message}
            onChange={handleInputChange}
            placeholder="Sua mensagem..."
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-[#60BF81] text-white py-2 px-4 rounded-md hover:bg-[#3B8C66]"
          >
            Publicar
          </button>
        </form>
      </div>

      {/* Carrossel de publicações */}
      <Slider {...settings}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-[#223240]">{post.name}</h3>
              <p className="text-gray-500 text-sm ml-4">
                {new Date(post.date).toLocaleString()}
              </p>
            </div>

            {/* Exibe apenas o feedback sem imagem */}
            <p className="text-lg italic text-gray-600 text-center">"{post.message}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
