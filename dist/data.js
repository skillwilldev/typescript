import { Player } from "./models.js";
export const players = [
    new Player(1, "გიორგი მაისურაძე", "ფეხბურთი", 24, "Active"),
    new Player(2, "ლუკა ბერიძე", "კალათბურთი", 21, "Active"),
    new Player(3, "ნიკა ხარაზიშვილი", "ხელბურთი", 27, "Injured"),
    new Player(4, "დავით წერეთელი", "ცურვა", 19, "Active"),
    new Player(5, "სანდრო გელაშვილი", "ჭადრაკი", 30, "Injured"),
];
export function getNextId() {
    const maxId = players.reduce((max, p) => (p.id > max ? p.id : max), 0);
    return maxId + 1;
}
