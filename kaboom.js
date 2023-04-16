// import kaboom lib from CDN
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialise kaboom context
export const k = kaboom({
    width: 640,
    height: 480,
    background: [0, 0, 255],
    canvas: document.querySelector("mycanvas")
});

// make kaboom available in other scripts
export default k;