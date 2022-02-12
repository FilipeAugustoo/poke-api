var botaoBuscar = document.querySelector('#buscar-pokemon');
var idPokemonClient = document.querySelector('#nome-pokemon');
var poderes = document.getElementById('poderes')

botaoBuscar.addEventListener('click', function() {

    poderes.classList.remove('before');

    var teste = idPokemonClient.value

    var url = 'https://pokeapi.co/api/v2/pokemon/' + teste;

    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.clear();
            console.log(data)

            var nome = data['name']
            var imagem = data['sprites']['front_default']
            if (data['abilities'].length >= 2) {
                var poder1 = data['abilities']['0']['ability']['name']
                var poder2 = data['abilities']['1']['ability']['name']
            } else {
                var poder1 = data['abilities']['0']['ability']['name']
                var poder2 = ""
            }
    

            document.querySelector('#nome').innerHTML = nome;
            document.querySelector('#imagem-pokemon').setAttribute('src', imagem);
            document.querySelector('#poder1').innerHTML = poder1;
            document.querySelector('#poder2').innerHTML = poder2;
        })
})
