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
    let produto = document.createElement("div");
    if (product.disponibilidade === true) {
      produto.innerHTML = `<h2>${product.nome}<h2/><h3/>Preço: R$${product.preco}<h3/><h3>Categoria: ${product.categoria}<h3/><h3>Estoque Disponível<h3/>`;
      areaProducts.append(produto);
    } else {
      produto.innerHTML = `<h2/>${product.nome}<h2/><h3>Preço: R$${product.preco}<h3/> <h3>Categoria: ${product.categoria}<h3/><h3>Estoque: Indisponível<h3/>`;
      areaProducts.append(produto);
    }
    produto.style.textAlign = "center";
    produto.style.margin = "10px";
    produto.style.border = "1px solid #ccc";
    produto.addEventListener("mouseover", () => {
      produto.style.backgroundColor = "#f0f0f0";
    });
    produto.addEventListener("mouseout", () => {
      produto.style.backgroundColor = "";
    });
  });
});

btnFiltro.addEventListener("click", (event) => {
  event.preventDefault();
  areaProducts.innerHTML = ``;
  products.forEach((product) => {
    let produto = document.createElement("div");
    if (categorias.value === product.categoria) {
      if (
        checkDisponiveis.checked === true &&
        product.disponibilidade === true
      ) {
        produto.innerHTML = `<h2>${product.nome}<h2/><h3/>Preço: R$${product.preco}<h3/><h3>Categoria: ${product.categoria}<h3/><h3>Estoque Disponível<h3/>`;
        areaProducts.append(produto);
      } else if (checkDisponiveis.checked === false) {
        if (product.disponibilidade === true) {
          produto.innerHTML = `<h2>${product.nome}<h2/><h3/>Preço: R$${product.preco}<h3/><h3>Categoria: ${product.categoria}<h3/><h3>Estoque Disponível<h3/>`;
          areaProducts.append(produto);
        } else {
          produto.innerHTML = `<h2/>${product.nome}<h2/><h3>Preço: R$${product.preco}<h3/> <h3>Categoria: ${product.categoria}<h3/><h3>Estoque: Indisponível<h3/>`;
          areaProducts.append(produto);
        }
      }
      produto.style.textAlign = "center";
      produto.style.margin = "10px";
      produto.style.border = "1px solid #ccc";
      produto.addEventListener("mouseover", () => {
        produto.style.backgroundColor = "#f0f0f0";
      });
      produto.addEventListener("mouseout", () => {
        produto.style.backgroundColor = "";
      });
    }
  });
});
