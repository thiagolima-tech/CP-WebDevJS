products = [
  {
    nome: "Mouse",
    preco: 20,
    categoria: "Perifericos",
    disponibilidade: true,
  },
  {
    nome: "Teclado",
    preco: 110,
    categoria: "Perifericos",
    disponibilidade: true,
  },
  {
    nome: "Fone de ouvido",
    preco: 50,
    categoria: "Perifericos",
    disponibilidade: false,
  },
  {
    nome: "Salame",
    preco: 10,
    categoria: "Alimentos",
    disponibilidade: true,
  },
  {
    nome: "Pipoca",
    preco: 5,
    categoria: "Alimentos",
    disponibilidade: false,
  },
  {
    nome: "Tomate",
    preco: 4,
    categoria: "Alimentos",
    disponibilidade: true,
  },
  {
    nome: "Macarrao",
    preco: 10,
    categoria: "Alimentos",
    disponibilidade: false,
  },
  {
    nome: "Camisa",
    preco: 70,
    categoria: "Roupas",
    disponibilidade: true,
  },
  {
    nome: "Calça",
    preco: 100,
    categoria: "Roupas",
    disponibilidade: true,
  },
  {
    nome: "Tenis",
    preco: 30,
    categoria: "Roupas",
    disponibilidade: true,
  },
];

const categorias = document.getElementById("categorias");
const areaProducts = document.getElementById("produtos");
const btnFiltro = document.getElementById("btnFiltrar");
const btnTodos = document.getElementById("btnTodos");
const checkDisponiveis = document.getElementById("checkbox");

btnTodos.addEventListener("click", (event) => {
  event.preventDefault();
  areaProducts.innerHTML = ``;
  products.forEach((product) => {
    areaProducts.append(
      document.createElement("br"),
      document.createElement("br"),
      product.nome,
      document.createElement("br"),
      product.preco,
      document.createElement("br"),
      product.categoria,
      document.createElement("br")
    );
    if (product.disponibilidade === true) {
      areaProducts.append("Disponível");
    } else {
      areaProducts.append("Indisponível");
    }
  });
});

btnFiltro.addEventListener("click", (event) => {
  event.preventDefault();
  areaProducts.innerHTML = ``;
  products.forEach((product) => {
    if (categorias.value === product.categoria) {
      if (
        checkDisponiveis.checked === true &&
        product.disponibilidade === true
      ) {
        areaProducts.append(
          document.createElement("br"),
          document.createElement("br"),
          product.nome,
          document.createElement("br"),
          product.preco,
          document.createElement("br"),
          product.categoria,
          document.createElement("br"),
          "Disponível",
          document.createElement("br")
        );
      } else if (checkDisponiveis.checked === false) {
        areaProducts.append(
          document.createElement("br"),
          document.createElement("br"),
          product.nome,
          document.createElement("br"),
          product.preco,
          document.createElement("br"),
          product.categoria,
          document.createElement("br")
        );
        if (product.disponibilidade === true) {
          areaProducts.append("Disponível");
        } else {
          areaProducts.append("Indisponível");
        }
      }
    }
  });
});
