var trevor = {
  name: 'Trevor',
  position: {
    x: 0,
    y: 0
  },
  health: 100,
  mana: 100,
  burdon: 28,
  strength: 5,
  constitution: 12,
  magic: 10,
  spell: {
    name: "Fireball",
    strength: 10
  },
  weapon: undefined,

  yell() {
    console.log("LEEEROOYYYYYY JENNNKKKKIINNNNNSSSS!!!!!");
  }
};

var adam = {
  name: 'Adam',
  health: 100,
  mana: 100,
  burdon: 40,
  constitution: 14,
  strength: 5,
  spell: undefined,
  weapon: {
    name: "Lion's Roar",
    type: "broadsword",
    strength: 8,
  },
  yell() {
    console.log('I FIGHT FOR MY FRIENDS!!');
  }
};

function takeDamage(ammount, target) {
  target.health = target.health - ammount;
  console.log(`${target.name} took ${ammount} damage and is now at ${target.health} health!`);

  if (target.health <= 0 && target.health > target.constitution * -1) {
    console.log(`${target.name} has passed out`);
  }
  else if (target.health <= target.constitution * -1) {
    console.log(`${target.name} has died`);
  }
  else {
    console.log('Nothing of consequence has happened as a result.');
  }

}

function attack(attacker, target) {
  console.log(`${attacker.name} attacked ${target.name}!`)
  var damage = attacker.weapon.strength + attacker.strength;
  takeDamage(damage, target);
}

function castSpell(attacker, target) {
  if (!attacker.spell) {
    return;
  }
  console.log(`${attacker.name} Cast ${attacker.spell.name}`)
  var damage = attacker.spell.strength + attacker.magic;
  takeDamage(damage, target);
}

trevor.yell();
adam.yell();
attack(adam, trevor);
castSpell(trevor, adam);
castSpell(trevor, adam);
castSpell(trevor, adam);
castSpell(trevor, adam);
castSpell(trevor, adam);
castSpell(trevor, adam);

document.getElementById('trevor').addEventListener('click', function () {
  castSpell(adam, trevor);
});

document.getElementById('adam').addEventListener('click', function () {
  attack(adam, trevor);
});

