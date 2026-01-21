// ==========================
// script.js – FULL INTERACTIONS
// ==========================

// 1️⃣ Password Unlock
const passwordScreen = document.getElementById('passwordScreen');
const mainContent = document.getElementById('mainContent');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordError = document.getElementById('passwordError');

const correctPassword = '17-08-2026';

passwordBtn.addEventListener('click', () => {
  if (passwordInput.value === correctPassword) {
    passwordScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
  } else {
    passwordError.textContent = 'Incorrect password! 💥';
    triggerCrackerAnimation();
    passwordInput.value = '';
  }
});

// 2️⃣ Cracker Animation Placeholder
function triggerCrackerAnimation() {
  const cracker = document.createElement('div');
  cracker.className = 'cracker-animation';
  document.body.appendChild(cracker);
  setTimeout(() => { cracker.remove(); }, 3000);
}

// 3️⃣ XOX GAME
function xoxMove(player) {
  if(player === 'Moon') {
    alert("Off course win ayyav ley... Birthday ani kavalani odipoyaa... if nijam ga adithey off course neney gelusthaga 🙄.. Malli adi ee sari nanu gelipinchu");
  } else {
    alert("Congratulations viraajitha ❤️.. nv titan's heart geluchukunnav ✨🎀");
  }
}

// 4️⃣ Hidden Promise
let heartClicks = 0;
const heartMax = 50;
function clickHeart() {
  heartClicks++;
  if(heartClicks >= heartMax) showHiddenPromise();
}

function showHiddenPromise() {
  const popup = document.createElement('div');
  popup.className = 'hidden-promise-popup';
  popup.innerHTML = `
    <h2>A hidden promise</h2>
    <p>
      Time maarina, situations maarina,<br>
      naa love ni eppudu marchanu maa...<br>
      Nee hand hold chesi...<br>
      Night time empty road lo moon chusthu nadichey day kosam waiting...<br>
      Ee life key kadhu .. Pathi janma ki nithoney unali ani undhi...<br>
      Always ready to accept you vijju ❤️ ...<br>
      Finally I love you Vijju ❤️...
    </p>`;
  document.body.appendChild(popup);
}

// 5️⃣ Reasons I Love You Cards
const loveCards = [
  "3yrs+ nunchi chusthunna maa... Nenu loyality expect chesthunnaa maa 🤍✨",
  "Beauty avasaram ledhu... Inka cute avuthunav 🩷🙃🌕",
  "You are my Vijju ❤️"
];

function showLoveCard(index) { alert(loveCards[index]); }

// 6️⃣ Countdown Section
const birthdayDate = new Date('2026-02-22T00:00:00');
setInterval(() => {
  const now = new Date();
  const diff = birthdayDate - now;
  const el = document.getElementById('countdown');
  if(diff>0){
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60%24);
    const m=Math.floor(diff/1000/60%60);
    const s=Math.floor(diff/1000%60);
    el.innerHTML=`${d}d ${h}h ${m}m ${s}s`;
  } else el.innerHTML="I love you 💖";
},1000);

// 7️⃣ Cake Cuts
function cakeCut(cut){
  const messages=[
    "Happy Birthday vijjuluuuuu ❤️",
    "Happy Birthday picchii 🎀",
    "Happy Birthday my close one 🩷",
    "ni dreams ani true avvali maa ✨",
    "i love you vijjuluuuuu…ni dream true avvali ani korukunttu…by your picchii"
  ];
  alert(messages[cut-1]);
}

// 8️⃣ Gift
function openGift(){ alert("Reel & PDF waiting for you 💓"); }

// 9️⃣ Jar of Endless Wishes
const jarMessages = [
  "You have unlimited wishes",
  "I will try my best",
  "Always waiting for you",
  "I love you",
  "Miss youhh"
];
function clickJar(){
  const msg = jarMessages[Math.floor(Math.random()*jarMessages.length)];
  alert(msg);
}

// 🔟 Name a Star
function addStar(){
  const sky = document.getElementById('star-sky');
  const star = document.createElement('span');
  star.textContent="✨Vijju✨";
  star.style.position='absolute';
  star.style.top=Math.random()*80+'%';
  star.style.left=Math.random()*90+'%';
  star.style.color='#fff';
  star.style.fontSize='18px';
  sky.appendChild(star);
}

// 1️⃣1️⃣ Final Celebration
function finalCelebrate(){
  document.getElementById('finalMessage').textContent="Happy Birthday Vijju… welcome to 16th world 🌍 … enjoy this day my pichhi one 🎀";
  // Optional: trigger fireworks animation
}
