import k from "./kaboom.js";

// add assets
 loadSprite("player", "player.png")

 loadSprite("door", "door.png")

 const player = add([
     sprite("player"),
     pos(300, 250),
 ])

 add([
     text("register", { size: 24 }),
     color(255, 242, 0),
     pos(20, 220),
 ]);

 const registerDoor = add([
     sprite("door"),
     pos(20, 250),
 ])

 add([
     text("submit", { size: 24 }),
     color(255, 242, 0),
     pos(530, 220),
 ]);

 const submitDoor = add([
     sprite("door"),
     pos(520, 250),
 ])

 // move left / right 100 pixels per second
 onKeyDown("left", () => {
     player.move(-100, 0)
 })

 onKeyDown("right", () => {
     player.move(100, 0)
 })

 onKeyDown("up", () => {
     player.move(0, -100)
     window.location.href = '/register.html';
 })

 /* Give the game canvas focus so that the users input registers */
k.canvas.focus()