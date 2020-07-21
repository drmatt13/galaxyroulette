const games = {

    'game3': {
        'gamePlayed': false,
        'entry': 50,
        'payout': 1500,
        'winner': '',
        'players': {
            'player1': 'open',
            'player2': 'open',
            'player3': 'open',
            'player4': 'open',
            'player5': 'player5',
            'player6': 'player6',
            'player7': 'player7',
            'player8': 'open',
            'player9': 'player9',
            'player10': 'player10',
            'player11': 'open',
            'player12': 'open',
            'player13': 'open',
            'player14': 'player14',
            'player15': 'player15',
            'player16': 'player16',
            'player17': 'player17',
            'player18': 'player18',
            'player19': 'open',
            'player20': 'open',
            'player21': 'open',
            'player22': 'player22',
            'player23': 'open',
            'player24': 'player23',
            'player25': 'open',
            'player26': 'open',
            'player27': 'player27',
            'player28': 'open',
            'player29': 'open',
            'player30': 'open'
        },
        'link': ''
    },

    'game2': {
        'gamePlayed': false,
        'entry': 20,
        'payout': 600,
        'winner': '',
        'players': {
            'player1': 'open',
            'player2': 'open',
            'player3': 'open',
            'player4': 'open',
            'player5': 'player5',
            'player6': 'open',
            'player7': 'open',
            'player8': 'open',
            'player9': 'open',
            'player10': 'open',
            'player11': 'open',
            'player12': 'open',
            'player13': 'open',
            'player14': 'open',
            'player15': 'open',
            'player16': 'open',
            'player17': 'open',
            'player18': 'open',
            'player19': 'open',
            'player20': 'open',
            'player21': 'open',
            'player22': 'open',
            'player23': 'open',
            'player24': 'open',
            'player25': 'open',
            'player26': 'open',
            'player27': 'open',
            'player28': 'open',
            'player29': 'open',
            'player30': 'open'
        },
        'link': ''
    },

    'game1': {
        'gamePlayed': true,
        'entry': 5,
        'payout': 150,
        'winner': 30,
        'players': {
            'player1': 'player1',
            'player2': 'player2',
            'player3': 'player3',
            'player4': 'player4',
            'player5': 'player5',
            'player6': 'player6',
            'player7': 'player7',
            'player8': 'player8',
            'player9': 'player9',
            'player10': 'player10',
            'player11': 'player11',
            'player12': 'player12',
            'player13': 'player13',
            'player14': 'player14',
            'player15': 'player15',
            'player16': 'player16',
            'player17': 'player17',
            'player18': 'player18',
            'player19': 'player19',
            'player20': 'player20',
            'player21': 'player21',
            'player22': 'player22',
            'player23': 'player23',
            'player24': 'player24',
            'player25': 'player25',
            'player26': 'player26',
            'player27': 'player27',
            'player28': 'player28',
            'player29': 'player29',
            'player30': 'player30'
        },
        'link': 'https://www.facebook.com/106252654502339/videos/269161461055908/'
    }
}

const masterContainer = document.querySelector('.master-container');
const loaderContainer = document.querySelector('.loader-container');
var video = document.getElementById("video");

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function generatePage() {
    let n = Object.size(games);

    for (let i=n; i>0; i--) {
        let div = document.createElement("div");
        let gamei = `game${i}`;
        if (games[`game${i}`].gamePlayed) {
            div.classList = 'game-container-1';
            div.innerHTML = `
            <div class="header">
                <span>Game ${i}:</span>
                <span>$${games[gamei].entry} entry - $${games[gamei].payout} payout</span>
            </div>
            <div class="list-container">
                <ul>
                    <li><span>1.</span><span>${games[gamei].players.player1}</span></li>
                    <li><span>2.</span><span>${games[gamei].players.player2}</span></li>
                    <li><span>3.</span><span>${games[gamei].players.player3}</span></li>
                    <li><span>4.</span><span>${games[gamei].players.player4}</span></li>
                    <li><span>5.</span><span>${games[gamei].players.player5}</span></li>
                    <li><span>6.</span><span>${games[gamei].players.player6}</span></li>
                    <li><span>7.</span><span>${games[gamei].players.player7}</span></li>
                    <li><span>8.</span><span>${games[gamei].players.player8}</span></li>
                    <li><span>9.</span><span>${games[gamei].players.player9}</span></li>
                    <li><span>10.</span><span>${games[gamei].players.player10}</span></li>
                </ul>
                <ul>
                    <li><span>11.</span><span>${games[gamei].players.player11}</span></li>
                    <li><span>12.</span><span>${games[gamei].players.player12}</span></li>
                    <li><span>13.</span><span>${games[gamei].players.player13}</span></li>
                    <li><span>14.</span><span>${games[gamei].players.player14}</span></li>
                    <li><span>15.</span><span>${games[gamei].players.player15}</span></li>
                    <li><span>16.</span><span>${games[gamei].players.player16}</span></li>
                    <li><span>17.</span><span>${games[gamei].players.player17}</span></li>
                    <li><span>18.</span><span>${games[gamei].players.player18}</span></li>
                    <li><span>19.</span><span>${games[gamei].players.player19}</span></li>
                    <li><span>20.</span><span>${games[gamei].players.player20}</span></li>
                </ul>
                <ul>
                    <li><span>21.</span><span>${games[gamei].players.player21}</span></li>
                    <li><span>22.</span><span>${games[gamei].players.player22}</span></li>
                    <li><span>23.</span><span>${games[gamei].players.player23}</span></li>
                    <li><span>24.</span><span>${games[gamei].players.player24}</span></li>
                    <li><span>25.</span><span>${games[gamei].players.player25}</span></li>
                    <li><span>26.</span><span>${games[gamei].players.player26}</span></li>
                    <li><span>27.</span><span>${games[gamei].players.player27}</span></li>
                    <li><span>28.</span><span>${games[gamei].players.player28}</span></li>
                    <li><span>29.</span><span>${games[gamei].players.player29}</span></li>
                    <li><span>30.</span><span>${games[gamei].players.player30}</span></li>
                </ul>
                <div class="img-container">
                    <img src="./payout/${i}.jpg" alt="game ${i}">
                </div>
            </div>
            <div class="link-container">
                <input type="text" value="${games[gamei].link}" disabled>
            </div>
            `;
            let list = div.querySelectorAll("ul");
            for (let i=0; i<3; i++) {
                let ul = list[i];
                for (let j=0; j<10; j++) {
                    if (i*10 + j+1 == games[gamei].winner) {
                        ul.querySelectorAll("li")[j].classList.add("winner");
                    }
                    if (ul.querySelectorAll("li")[j].querySelectorAll("span")[1].innerHTML == "open") {
                        ul.querySelectorAll("li")[j].classList.add("open");
                    }
                }
            }
        } else {
            div.classList = 'game-container-2';
            div.innerHTML = `
            <div class="header">
            <span>Game ${i}:</span>
            <span>$${games[gamei].entry} entry - $${games[gamei].payout} payout</span>
            </div>
            <div class="list-container">
                <ul>
                    <li><span>1.</span><span>${games[gamei].players.player1}</span></li>
                    <li><span>2.</span><span>${games[gamei].players.player2}</span></li>
                    <li><span>3.</span><span>${games[gamei].players.player3}</span></li>
                    <li><span>4.</span><span>${games[gamei].players.player4}</span></li>
                    <li><span>5.</span><span>${games[gamei].players.player5}</span></li>
                    <li><span>6.</span><span>${games[gamei].players.player6}</span></li>
                    <li><span>7.</span><span>${games[gamei].players.player7}</span></li>
                    <li><span>8.</span><span>${games[gamei].players.player8}</span></li>
                    <li><span>9.</span><span>${games[gamei].players.player9}</span></li>
                    <li><span>10.</span><span>${games[gamei].players.player10}</span></li>
                </ul>
                <ul>
                    <li><span>11.</span><span>${games[gamei].players.player11}</span></li>
                    <li><span>12.</span><span>${games[gamei].players.player12}</span></li>
                    <li><span>13.</span><span>${games[gamei].players.player13}</span></li>
                    <li><span>14.</span><span>${games[gamei].players.player14}</span></li>
                    <li><span>15.</span><span>${games[gamei].players.player15}</span></li>
                    <li><span>16.</span><span>${games[gamei].players.player16}</span></li>
                    <li><span>17.</span><span>${games[gamei].players.player17}</span></li>
                    <li><span>18.</span><span>${games[gamei].players.player18}</span></li>
                    <li><span>19.</span><span>${games[gamei].players.player19}</span></li>
                    <li><span>20.</span><span>${games[gamei].players.player20}</span></li>
                </ul>
                <ul>
                    <li><span>21.</span><span>${games[gamei].players.player21}</span></li>
                    <li><span>22.</span><span>${games[gamei].players.player22}</span></li>
                    <li><span>23.</span><span>${games[gamei].players.player23}</span></li>
                    <li><span>24.</span><span>${games[gamei].players.player24}</span></li>
                    <li><span>25.</span><span>${games[gamei].players.player25}</span></li>
                    <li><span>26.</span><span>${games[gamei].players.player26}</span></li>
                    <li><span>27.</span><span>${games[gamei].players.player27}</span></li>
                    <li><span>28.</span><span>${games[gamei].players.player28}</span></li>
                    <li><span>29.</span><span>${games[gamei].players.player29}</span></li>
                    <li><span>30.</span><span>${games[gamei].players.player30}</span></li>
                </ul>
            </div>
            `;
            let list = div.querySelectorAll("ul");
            for (let i=0; i<3; i++) {
                let ul = list[i];
                for (let j=0; j<10; j++) {
                    if (ul.querySelectorAll("li")[j].querySelectorAll("span")[1].innerHTML == "open") {
                        ul.querySelectorAll("li")[j].classList.add("open");
                    }
                }
            }
        }
        masterContainer.appendChild(div);
    }
}

generatePage();

video.onloadeddata = function() {
    masterContainer.classList.remove("remove");
    loaderContainer.parentNode.removeChild(loaderContainer);
};


