import { Player, Coach, FitnessCoach } from "./models.js";
import { players, getNextId } from "./data.js";
const headCoach = new Coach("ლევან წიკლაური");
headCoach.introduce();
const fitnessCoach = new FitnessCoach("ანა ბერაძე", "გამძლეობის ვარჯიშები");
fitnessCoach.describeSpecialization();
const listEl = document.getElementById("player-list");
const emptyStateEl = document.getElementById("empty-state");
const countEl = document.getElementById("player-count");
const searchInput = document.getElementById("search-input");
const form = document.getElementById("add-form");
const nameInput = document.getElementById("name-input");
const sportInput = document.getElementById("sport-input");
const ageInput = document.getElementById("age-input");
const formError = document.getElementById("form-error");
let searchTerm = "";
let editingId;
function findPlayer(id) {
    return players.find((p) => p.id === id);
}
function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}
function render() {
    listEl.innerHTML = "";
    const term = searchTerm.trim().toLowerCase();
    const visible = term
        ? players.filter((p) => p.name.toLowerCase().includes(term))
        : players;
    countEl.textContent = String(players.length);
    emptyStateEl.style.display = visible.length === 0 ? "block" : "none";
    emptyStateEl.textContent = term
        ? "ასეთი სახელით მოთამაშე ვერ მოიძებნა."
        : "სია ცარიელია — დაამატეთ პირველი მოთამაშე.";
    visible.forEach((player) => {
        const card = document.createElement("article");
        card.className = "card" + (player.status === "Injured" ? " card--injured" : "");
        if (editingId === player.id) {
            card.appendChild(buildEditForm(player));
        }
        else {
            card.appendChild(buildPlayerView(player));
        }
        listEl.append(card);
    });
}
function buildPlayerView(player) {
    const frag = document.createDocumentFragment();
    const top = document.createElement("div");
    top.className = "card__top";
    const name = document.createElement("h3");
    name.textContent = player.name;
    const badge = document.createElement("span");
    badge.className = "badge " + (player.status === "Active" ? "badge--active" : "badge--injured");
    badge.textContent = player.status === "Active" ? "აქტიურია" : "ტრავმირებულია";
    top.append(name, badge);
    const meta = document.createElement("p");
    meta.className = "card__meta";
    meta.innerHTML = `<strong>სპორტი:</strong> ${escapeHtml(player.sport)} &nbsp;·&nbsp; <strong>ასაკი:</strong> ${player.age}`;
    const actions = document.createElement("div");
    actions.className = "card__actions";
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn--ghost";
    toggleBtn.textContent = player.status === "Active" ? "მონიშვნა როგორც ტრავმირებული" : "მონიშვნა როგორც აქტიური";
    toggleBtn.addEventListener("click", () => toggleStatus(player.id));
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn--ghost";
    editBtn.textContent = "რედაქტირება";
    editBtn.addEventListener("click", () => {
        editingId = player.id;
        render();
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn--danger";
    deleteBtn.textContent = "წაშლა";
    deleteBtn.addEventListener("click", () => deletePlayer(player.id));
    actions.append(toggleBtn, editBtn, deleteBtn);
    frag.append(top, meta, actions);
    return frag;
}
function buildEditForm(player) {
    const wrap = document.createElement("div");
    wrap.className = "edit-form";
    const nameField = document.createElement("input");
    nameField.type = "text";
    nameField.value = player.name;
    nameField.className = "input";
    const sportField = document.createElement("input");
    sportField.type = "text";
    sportField.value = player.sport;
    sportField.className = "input";
    const ageField = document.createElement("input");
    ageField.type = "number";
    ageField.value = String(player.age);
    ageField.className = "input";
    ageField.min = "0";
    const actions = document.createElement("div");
    actions.className = "card__actions";
    const saveBtn = document.createElement("button");
    saveBtn.className = "btn btn--primary";
    saveBtn.textContent = "შენახვა";
    saveBtn.addEventListener("click", () => {
        const newName = nameField.value.trim();
        const newSport = sportField.value.trim();
        const newAge = Number(ageField.value);
        if (!newName || !newSport || !Number.isFinite(newAge) || newAge <= 0) {
            return;
        }
        player.name = newName;
        player.sport = newSport;
        player.age = newAge;
        editingId = null;
        render();
    });
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "btn btn--ghost";
    cancelBtn.textContent = "გაუქმება";
    cancelBtn.addEventListener("click", () => {
        editingId = null;
        render();
    });
    actions.append(saveBtn, cancelBtn);
    wrap.append(nameField, sportField, ageField, actions);
    return wrap;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const sport = sportInput.value.trim();
    const age = Number(ageInput.value);
    if (!name || !sport || !Number.isFinite(age) || age <= 0) {
        formError.textContent = "გთხოვთ, შეავსოთ ყველა ველი გამართულად (ასაკი უნდა იყოს დადებითი რიცხვი).";
        return;
    }
    formError.textContent = "";
    const newPlayer = new Player(getNextId(), name, sport, age, "Active");
    players.push(newPlayer);
    form.reset();
    render();
});
function deletePlayer(id) {
    const index = players.findIndex((p) => p.id === id);
    if (index !== -1) {
        players.splice(index, 1);
    }
    render();
}
function toggleStatus(id) {
    const player = findPlayer(id);
    if (!player)
        return;
    let newStatus;
    if (player.status === "Active") {
        newStatus = "Injured";
    }
    else {
        newStatus = "Active";
    }
    player.status = newStatus;
    render();
}
searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value;
    render();
});
render();
