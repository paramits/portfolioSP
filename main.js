// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {
LottieInteractivity.create({
    player: "#firstLottie",
    mode:"forward", autoplay,
    actions: [
        {
            visibility:[0, 1],
            type: "loop",
            frames: [1, 214]
        }
    ]
});
});



function dropdown() {
    let x = document.getElementById("quotations");  
    if (x.style.display !== "none") {
      x.style.display = "none";
      document.getElementById("dropLink").innerHTML ="Show Transcript"
    } else {
      x.style.display = "block";
       document.getElementById("dropLink").innerHTML ="Hide Transcript"
    }
  }
  function dropdownTwo() {
    let y = document.getElementById("quotationsTwo");  
    if (y.style.display !== "none") {
      y.style.display = "none";
      document.getElementById("dropLinkTwo").innerHTML ="Show Transcript"
    } else {
      y.style.display = "block";
       document.getElementById("dropLinkTwo").innerHTML ="Hide Transcript"
    }
  }
  function dropdownThree() {
    let z = document.getElementById("quotationsThree");  
    if (z.style.display !== "none") {
      z.style.display = "none";
      document.getElementById("dropLinkThree").innerHTML ="Show Transcript"
    } else {
      z.style.display = "block";
       document.getElementById("dropLinkThree").innerHTML ="Hide Transcript"
    }
  }
// let introText = document.querySelector('#animatedText');

// window.addEventListener('focus', function() {
//   introText.style.animationPlayState = 'running';
// });

// window.addEventListener('blur', function() {
//   introText.style.animationPlayState = 'paused';
// });
// const introAnim = document.querySelector("#animatedText");
// const [anim] = introAnim.getAnimations().filter(({
//   typing
// }) => typing === "moving");
// document.addEventListener('visibilitychange', (evt) => {
//   if (document.visibilityState === "visible") {
//     anim.play();
//   } else {
//     anim.pause();
//   }
// });
// import * as THREE from 'three';

// const renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize( window.innerWidth, window.innerHeight );

// document.body.appendChild( renderer.domElement );

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
// camera.position.set(4,5,11)

// const groundGeometry = new THREE.PlaneGeometry(20,20,32,32);
// groundGeometry.rotateX(-MATH.PI/2);
// const groundMat = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMat);
// scene.add(groundMesh);

// function animate(){
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();

