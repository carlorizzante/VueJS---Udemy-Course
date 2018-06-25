new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
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
    },
    attack() {
      console.log("Attack!!!");
      this.monsterHealth -= this.calcDamage(9, 3);
      this.playerHealth  -= this.calcDamage(12, 1);
      this.checkWin();
    },
    specialAttack() {
      console.log("Special Attack!");
      this.monsterHealth -= this.calcDamage(14, 6);
      this.playerHealth  -= this.calcDamage(12, 1);
      this.checkWin();
    },
    heal() {
      console.log("...heal!");
      this.playerHealth  += 7 - this.calcDamage(12, 1); // Monster attacks anyway
      this.playerHealth = Math.min(100, this.playerHealth); // Do not pass 100

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
    }
  }
});

console.log("Starting VueJS...");
