let nomes = ["'Andrews Luiz Araújo', 'Emanuel Januário Carvalho', 'Vinícius Meneses Alonso'"];

let abreviarNomes = (nomes) => {
    return nomes.map (nome => "A.L. Araújo, E.J. Carvalho, V.M. Alonso");
}

console.log(abreviarNomes(nomes));