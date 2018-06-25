new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    gameTurns: []
  },
  methods: {
    startGame() {
      console.log("Starting new game!");
      this.gameIsRunning = true;
      this.playerHealth = this.monsterHealth = 100;
    },
    quitGame() {
      alert("Booooh!!");
      this.gameIsRunning = false;
      this.gameTurns = [];
    },
    attack() {
      console.log("Attack!!!");
      const playerDamage = this.calcDamage(9, 3);
      const monsteDamage = this.calcDamage(12, 1);
      this.monsterHealth -= playerDamage;
      this.playerHealth  -= monsteDamage;
      this.logActivity({
        type: 'Attack',
        class: 'attack',
        text: `Player deals ${playerDamage} points of damage.\nMonster deals ${monsteDamage} back`
      });
      this.checkWin();
    },
    specialAttack() {
      console.log("Special Attack!");
      const playerDamage = this.calcDamage(14, 6);
      const monsteDamage = this.calcDamage(12, 1);
      this.monsterHealth -= playerDamage;
      this.playerHealth  -= monsteDamage;
      this.logActivity({
        type: 'Special Attack',
        class: 'special-attack',
        text: `Player deals ${playerDamage} points of damage.\nMonster deals ${monsteDamage} back`
      });
      this.checkWin();
    },
    heal() {
      console.log("...heal!");
      const heal = 7 - this.calcDamage(12, 1); // Monster attacks anyway
      this.playerHealth  += heal;
      this.playerHealth = Math.min(100, this.playerHealth); // Do not pass 100
      this.logActivity({
        type: 'Heal',
        class: 'heal',
        text: `Player attempts to heal, Monster strikes, result ${heal} points gained/lost.`
      });
      this.checkWin();
    },
    calcDamage(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    checkWin() {
      if (this.monsterHealth <= 0 && this.playerHealth > 0) {
        this.monsterHealth = 0;
        alert("You won!");
        this.gameIsRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        alert("Damn you loser...");
        this.gameIsRunning = false;
        return true;
      } else {
        return false;
      }
    },
    logActivity: function(log) {
      this.gameTurns.unshift(log);
      console.log(log.type, log.text);
    }
  }
});

console.log("Starting VueJS...");
