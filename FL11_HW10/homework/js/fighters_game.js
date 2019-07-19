class Fighter { 
    constructor(obj) {
        this.name = obj['name'];
        this.damage = obj['damage'];
        this.hp = obj['hp'];
        this.agility = obj['agility'];
        this.win = 0;
        this.lose = 0;
        this.starthp = obj['hp'];
    }
    get getName() {
        return this.name;
    }
    get getDamage() {
        return this.damage;
    }
    get getAgility() {
        return this.agility;
    }
    get getHealth() {
        return this.hp;
    }

    logCombatHistory() {
        console.log(`Name: ${this.getName}, Wins: ${this.win}, Losses: ${this.lose}`)
    }

    dealDamage(num_dam) {
        this.hp -= num_dam;
    }

    heal(healpn) {
        if (typeof healpn === 'undefined') {
            healpn = 0;
        } else {
            this.hp += healpn;
            if (this.hp > this.starthp) {
                this.hp = this.starthp;
            }
        }
    }

    addWin() {
        this.win += 1;
    }

    addLoss() {
        this.lose += 1;
    }

    attack(f2) {
        let hun = 100;
        let d = Math.random();
        if (d < 1 - f2.getAgility / hun) {
            f2.dealDamage(this.getDamage);
            console.log(`${this.getName} make ${this.getDamage} damage to ${f2.getName}`);
        }else {
            console.log(`${this.getName} attack missed`);
        }
    }
}

function battle(f1, f2) {
    if (f1.getHealth === 0) {
        console.log(`${f1.getName} is dead and cant fight.`);
    } else if (f2.getHealth === 0) {
        console.log(`${f2.getName} is dead and cant fight.`);
    } else {
        while (f2.getHealth !== 0 && f1.getHealth !== 0) {
            f1.attack(f2);
            f2.attack(f1);
        }
        if (f1.getHealth > 0) {
            f1.addWin();
            f2.addLoss();
        }else {
            f1.addLoss();
            f2.addWin();
        }
    }
}
