const statut = document.querySelector("h2")
let jeu = true
let joueur = "X"
let etatjeu = ["","","","","","","","",""]

const regle = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//message 
const gagne = () => `Le joueur ${joueur} a gagné`
const egalite = () => "Egalité"
const tourjoueur = () => `C'est au tour du joueur ${joueur}`

statut.innerHTML = tourjoueur()

document.querySelectorAll(".case").forEach
(cell => cell.addEventListener("click", gestionClicCase))
document.querySelector("#recommencer").addEventListener
("click", recommencer)

function gestionClicCase(){
    // pour recuperer l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    //console.log(indexCase)
    
    if(etatjeu[indexCase] != "" || !jeu){
        return 
    }
    
    etatjeu[indexCase] = joueur
    //console.log(etatjeu)

    //ecrire a l'interieur de la case (this est la case)
    this.innerHTML = joueur

    verifgagne()
}

function verifgagne(){
    let tourgagnant = false

    for(let regles of regle){
        //recuperer toute les valeurs de regle dans etatjeu
        let val1 = etatjeu[regles[0]]
        let val2 = etatjeu[regles[1]]
        let val3 = etatjeu[regles[2]]
        
        if(val1 === "" || val2 === "" || val3 === ""){
            continue 
        }
        // dans les 3 cases qui sont des conditions de victoire (regle) j'ai le meme joueur
        if(val1 === val2 && val2 === val3){
            tourgagnant = true

            //break pour sortir (une fois sorti je suis a l'exterieur de la boucle for)
            break

        }
    }
    //à l'exterieur de mon for je verifie si je suis sur un tour gagnant avec une condition
    if(tourgagnant){

        //si je suis sur un tour gagnant je met statut (mon H2) inner html à gagné 
        statut.innerHTML = gagne()

        //j'arrete le jeu 
        jeu = false

        //je quitte 
        return
    }

    // si je n'ai ni gagner ni d'égalité le jeu continue donc je change de joueur (ternaire)
    joueur = joueur === "X" ? "O" :"X"
    statut.innerHTML = tourjoueur()
}

//activer le bouton recommencer en créant une fonction "recommencer" et remettre les 3 variables (let) du dessus dans la fonction 
function recommencer(){
    joueur = "X"
    jeu = true
    etatjeu = ["","","","","","","","",""]
    statut.innerHTML = tourjoueur()
    //effacer toute les cases 
    document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "")

}





