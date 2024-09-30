const filmes = []

for(let i = 0; i < 5; i++){

    const filme = prompt(`Digite o nome do ${i+1}° filme:`).trim()
 
    filmes.push(filme)

};

console.log(`Os filmes informados são: ${filmes}`)