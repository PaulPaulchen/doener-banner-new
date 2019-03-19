//https://upload.wikimedia.org/wikipedia/commons/b/bd/Doener_berlin_kraeuter.png

let tl = new TimelineMax({repeat: -1});

tl.from('#welcome-text', 1, {scale: 0.5, y: 800, rotation: 720})
  .to('#welcome-text', .5, {scaleY: 2},"-=0.3")
  .from('#doener-bild', .5, {opacity: 0})
  .from('#mmh', 1.3, { ease: Bounce.easeOut, y: -500 }, "-=0.5")
  .from('#tasty', 1.3, { ease: Bounce.easeOut, y: 500 }, "-=1")
  .to('#doener-bild', 1, {scale: 1.1, ease: Power1.easeInOut, repeat: 6, yoyo: true},"-=1")
  .from('#bike', 1, { x:-250, scale: 0.1}, "-=6")
  .from('#deliver', 1, {scaleY: 0}, "-=5")
  .from('#pre-telefon', 1, {scaleY: 0}, "-=4.5")
  .from('#telefon', 1, {scaleX: 0}, "-=4")
  .call(loopCheck)
  .to("#banner", 0.5,{autoAlpha:0,delay:5});


let loop = 0;
let loopMax = 2;

function loopCheck(){
	console.log("loopCheck")
	loop++;
	if (loop < loopMax) {
		console.log("play again")
		tl.play();
	} else{
		console.log("done")
		tl.pause();
	}
}
