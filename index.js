import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import path from 'path';


const ___dirname = path.resolve(path.dirname(''));

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(___dirname, 'public')));
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

const pokedex = [
    {
        id: 1,
        nome: 'Bulbasaur',
        descricao: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        tipo: 'grass'
    },
    {   id: 2,
        nome: 'Ivysaur',
        descricao: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        tipo: 'fire'
    },
    {   id: 3,
        nome: 'Wartortle',
        descricao: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        tipo: 'water'
    }
]

let pokemon = undefined;
app.get("/", (req, res) => {
    res.render("index", { pokedex, pokemon });
});

app.post("/cadastro", (req, res) => {
    const pokemon = req.body;

    pokemon.id = pokedex.length + 1;

    pokedex.push(pokemon);
    res.redirect("/#cards")
});

app.get("/detalhes/:id", (req,res) =>{
    const id = +req.params.id;
    pokemon = pokedex.find((pokemon) => pokemon.id === id);
    res.redirect("/");
});

app.post("/update/:id", (req, res) => {
    const id = +req.params.id -1;
    const newPokemon = req.body;
    newPokemon.id = id + 1;
    pokedex[id] = newPokemon;
    pokemon = undefined;
    res.redirect("/#cadastro");
});
app.get("/delete/:id", (req,res) => {
    const id = +req.params.id - 1;

    delete pokedex[id];
    res.redirect("/#cards");
});
app.get("/personagem/:id", (req, res) => {
    const pokemonAtual = pokedex.filter((element)=> element.id == req.params.id)
    
    res.render('detalhes.ejs', {
        pokemonAtual
    })
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));