products = [{
    nome: 'mouse',
    preco: 20,
    categoria: 'perifericos',
    disponibilidade: true
},
{
    nome: 'teclado',
    preco: 110,
    categoria: 'perifericos',
    disponibilidade: true
},
{
    nome: 'fone',
    preco: 50,
    categoria: 'perifericos',
    disponibilidade: false
},
{
    nome: 'salame',
    preco: 10,
    categoria: 'alimentos',
    disponibilidade: true
},
{
    nome: 'pipoca',
    preco: 5,
    categoria: 'alimentos',
    disponibilidade: false
},
{
    nome: 'tomate',
    preco: 4,
    categoria: 'alimentos',
    disponibilidade: true
},
{
    nome: 'macarrao',
    preco: 10,
    categoria: 'alimentos',
    disponibilidade: false
},
{
    nome: 'camisa',
    preco: 70,
    categoria: 'roupas',
    disponibilidade: true
},
{
    nome: 'calca',
    preco: 100,
    categoria: 'roupas',
    disponibilidade: true
},
{
    nome: 'tenis',
    preco: 30,
    categoria: 'roupas',
    disponibilidade: true
}]



const filtro = document.getElementById('filtro')
const areaProducts = document.getElementById('produtos')
const btnClicar = document.getElementById('btnClick')

filtro.addEventListener('mouseover', () => {
    let areaProduct = document.createElement('div')
    areaProduct.innerHTML = `
    <h1> Texto </h1>
    `
    products.append(product)
})
