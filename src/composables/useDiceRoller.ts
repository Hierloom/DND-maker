export const useDiceRoller = () => {
    /**
     *  Roll a dice and return the result.
     * @param diceMax max of the dice to roll
     * @returns a random number between 1 and choosen max dice number
     */
    function roll(diceMax: number) {
        return Math.floor(Math.random() * diceMax) + 1;
    }
    return { roll };
}