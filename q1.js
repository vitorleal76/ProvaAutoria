let detalharEndereco = (Endereco) => {
    let {rua, cidade, CEP} = Endereco;
    return `Rua: ${rua}, Cidade: ${cidade}, CEP: ${CEP}`;
}

console.log(detalharEndereco({rua : "Marechal Rondon", cidade: "Parnamirim", CEP : "23346-768"}))