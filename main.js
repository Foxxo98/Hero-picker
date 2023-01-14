const heroes = ["D.va", "Doomfist", "Junker Queen", "Orisa", "Ramatta", "Rienhart", "Roadhog", "Sigma", "Winston", "Zarya", "Wrecking Ball",                 "Ash", "Bastion", "Cassidy", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Phara", "Reaper", "Sojourn", "Solder 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker",                "Anna", "Baptist", "Brigitte", "Kiriko", "Lucio", "Mercy", "Moira", "Zenyatta"];
const roles = ["Tank", "Support", "Support", "DPS", "DPS"];

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const assignRoles = (players) => {
    let roleList = shuffle(roles);
    let tankList = heroes.slice(0, 11);
    let dpsList = heroes.slice(11, 28);
    let supportList = heroes.slice(28);
    let playerHero = {};
    let assignedHeroes = []
    players.forEach((player, index) => {
        let hero = null;
        let role = roleList[index];
        if(role === "Tank"){
            hero = tankList.pop();
            while (assignedHeroes.includes(hero)) {
                hero = tankList.pop();
            }
        }else if(role === "DPS"){
            hero = dpsList.pop();
            while (assignedHeroes.includes(hero)) {
                hero = dpsList.pop();
            }
        }else if(role === "Support"){
            hero = supportList.pop();
            while (assignedHeroes.includes(hero)) {
                hero = supportList.pop();
            }
        }
        assignedHeroes.push(hero)
        playerHero[player] = {
            role,
            hero
        };
    });
    return playerHero;
}
const players = [];
for (let i = 1; i <= 5; i++) {
    players.push(prompt(`Enter the name of player ${i}:`));
}
const assignedRoles = assignRoles(players);

const results = document.createElement('div')
Object.keys(assignedRoles).forEach(player => {
  results.innerHTML += `<p>${player}  Will be a ${assignedRoles[player].role} playing as ${assignedRoles[player].hero}</p>`;
});
document.body.appendChild(results)