// import kaboom lib from CDN
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
export const k = kaboom({
    width: 640,
    height: 480,
    background: [0, 0, 255],
    canvas: document.querySelector("mycanvas") // gameplay is drawn to canvas
});

// make kaboom available in other scripts
export default k;