const footballTeam = {
    team: "Argentina",
    year: 1986,
    headCoach: "Carlos Bilardo",
    players: [{
        name: "Sergio Almirón",
        position: "forward",
        isCaptain: false
    }, {
        name: "Sergio Batista",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Ricardo Bochini",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Claudio Borghi",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "José Luis Brown",
        position: "defender",
        isCaptain: false
    }, {
        name: "Daniel Passarella",
        position: "defender",
        isCaptain: false
    }, {
        name: "Jorge Burruchaga",
        position: "forward",
        isCaptain: false
    }, {
        name: "Néstor Clausen",
        position: "defender",
        isCaptain: false
    }, {
        name: "José Luis Cuciuffo",
        position: "defender",
        isCaptain: false
    }, {
        name: "Diego Maradona",
        position: "midfielder",
        isCaptain: true
    }, {
        name: "Jorge Valdano",
        position: "forward",
        isCaptain: false
    }, {
        name: "Héctor Enrique",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Oscar Garré",
        position: "defender",
        isCaptain: false
    }, {
        name: "Ricardo Giusti",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Luis Islas",
        position: "goalkeeper",
        isCaptain: false
    }, {
        name: "Julio Olarticoechea",
        position: "defender",
        isCaptain: false
    }, {
        name: "Pedro Pasculli",
        position: "forward",
        isCaptain: false
    }, {
        name: "Nery Pumpido",
        position: "goalkeeper",
        isCaptain: false
    }, {
        name: "Oscar Ruggeri",
        position: "defender",
        isCaptain: false
    }, {
        name: "Carlos Tapia",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Marcelo Trobbiani",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Héctor Zelada",
        position: "goalkeeper",
        isCaptain: false
    }]
};

const teamName = document.getElementById("team");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const sport = footballTeam.sport;
const team = footballTeam.team;
const year = footballTeam.year;
const players = footballTeam.players;
const coachName = footballTeam.headCoach;

teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

let _LPC3 = 1;
let _LP3 = Date.now();

const setPlayerCards = function setPlayerCards() {
    const arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : players;

    if (_LPC3++ % 2000 === 0 && Date.now() - _LP3 > 1500) {
        (function (e) {
            console.log("Potential infinite loop detected on line ".concat(e, ". Tests may be failing because of this."));
        })(131, 0);
        return;
    }

    playerCards.innerHTML += arr.map(function (_ref) {
        var name = _ref.name,
            position = _ref.position,
            isCaptain = _ref.isCaptain;
        return "\n        <div class=\"player-card\">\n          <h2>".concat(isCaptain ? "(Captain)" : "", " ").concat(name, "</h2>\n          <p>Position: ").concat(position, "</p>\n        </div>\n      ");
    }).join("");
};

playersDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";
    switch (e.target.value) {
        case "forward":
            setPlayerCards(players.filter((player) => {
                return player.position === "forward";
            }));
            break;
        case "midfielder":
            setPlayerCards(players.filter((player) => {
                return player.position === "midfielder";
            }));
            break;
        case "defender":
            setPlayerCards(players.filter((player) => {
                return player.position === "defender";
            }));
            break;
        case "goalkeeper":
            setPlayerCards(players.filter((player) => {
                return player.position === "goalkeeper";
            }));
            break;
        default:
            setPlayerCards();
    }
});
setPlayerCards();