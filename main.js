import k from "./kaboom.js";

// load assets
loadSprite("player", "player.png")
loadSprite("door", "door.png")

// main player sprite properties
const player = add([
    'player_sprite',
    sprite("player"),
    pos(300, 250),
    area(),
])

// text and sprite for 'register' door
add([
    text("register", { size: 24 }),
    color(255, 242, 0),
    pos(20, 220),
]);

const registerDoor = add([
    "register_door",
    sprite("door"),
    pos(20, 250),
    area(),
])

// text and sprite for 'submit' door
add([
    text("submit", { size: 24 }),
    color(255, 242, 0),
    pos(530, 220),
]);

const submitDoor = add([
    "submit_door",
    sprite("door"),
    pos(520, 250),
    area(),
])

// player controls
onKeyDown("left", () => {
    player.move(-100, 0)
})

onKeyDown("right", () => {
    player.move(100, 0)
})

// navigate to register page when player sprite collides with register door sprite
// hardcoded URL here, relative link is not working for now
onCollide("register_door", "player_sprite", () => {
    window.location.href = 'https://andrewdempsey2018.github.io/Game-Hack-UI-Concept/register';
})

// navigate to submit page when player sprite collides with submit door sprite
// hardcoded URL here, relative link is not working for now
onCollide("submit_door", "player_sprite", () => {
    window.location.href = 'https://andrewdempsey2018.github.io/Game-Hack-UI-Concept/submit';
})

/* kaboom by default will not give the game canvas focus. Below line 
   explicitly gives the canvas focus on load */
k.canvas.focus()