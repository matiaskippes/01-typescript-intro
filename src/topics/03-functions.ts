function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 50);

strider.showHp();

// const result: number = addNumbers(1, 2)
// const result2: string = addNumbersArrow(1, 2)

// console.log({ result, result2 })



export { };