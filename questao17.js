const carros = [
    {nome: 'Toyota Corolla', ano: 2023},
    {nome: 'Honda Civic', ano: 2023},
    {nome: 'Audi A4', ano: 2010},
    {nome: 'Chevrolet Camaro', ano: 2010},
    {nome: 'Volkswagen Golf', ano: 2023}
]

const ano10 = carros.filter((carro) => carro.ano > 2010)

console.log(ano10)