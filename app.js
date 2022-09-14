const mainContainer = document.getElementById('main_container');

eventListener()

function eventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Funciona...')
        crearBloques()
    })
}

let parCard = []

const memoCards = [
    {
        id: 1,
        contenido: 'A',
    },
    {
        id: 2,
        contenido: 'B',
    },
    {
        id: 3,
        contenido: 'C',
    },
    {
        id: 4,
        contenido: 'D',
    },
    {
        id: 5,
        contenido: 'F',
    },
    {
        id: 6,
        contenido: 'G',
    },
    {
        id: 7,
        contenido: 'H',
    },
    {
        id: 8,
        contenido: 'I',
    },
]

function crearBloques() {
    const row = document.createElement('div')
    row.classList.add('row');

    
    const clonMemoCard = [...memoCards];
    
    const memorice = [...memoCards, ...clonMemoCard];
    
    randomizeMemoriceArr(memorice)
    
    memorice.forEach((card) => {
        const cardDiv = document.createElement('div');
        cardDiv.dataset.id = card.id;
        cardDiv.textContent = card.contenido;
        cardDiv.classList.add('card', 'memocard');

        row.appendChild(cardDiv);

    })
    mainContainer.appendChild(row)

    const arrayCards = document.querySelectorAll('.memocard');

    selectCard(arrayCards)

}

const cardArrMemo = []

const cardObj = {

}

let cardUno = 0 ;
let cardDos = 0 ;

function selectCard(arr) {
    
    arr.forEach((card) => {
        card.onclick = function() {
            if(cardUno === 0) {
                cardUno = parseInt(card.dataset.id)
                cardDos = 0;
                
                card.classList.add('click', 'card-uno')
                console.log(`El valor de cardUno es ${cardUno}`)
                console.log(`El valor de cardDos es ${cardDos}`)
            }else if(cardUno > 0 && cardDos == 0) {
                cardDos = parseInt(card.dataset.id)
        
                card.classList.add('click', 'card-dos')
                console.log(`El valor de cardUno es ${cardUno}`)
                console.log(`El valor de cardDos es ${cardDos}`)
                setTimeout(() => {
                    if(cardUno === cardDos) {
                        console.log('MAAATCHHH')
    
                        document.querySelector('.card-uno').classList.add('match')
                        document.querySelector('.card-dos').classList.add('match')
    
                        arr.forEach(click => {
                            click.classList.remove('click', 'card-uno', 'card-dos')                
                        })
                    cardUno = 0;
                    cardDos = 0;
    
                    } else {
                        arr.forEach(click => {
                            click.classList.remove('click', 'card-uno', 'card-dos')
                        })
                        cardUno = 0;
                        cardDos = 0;
                    }
                }, 1500)
            }
        }
    })

}

function randomizeMemoriceArr(arr) {
    arr.sort(() => .5 - Math.random())
}