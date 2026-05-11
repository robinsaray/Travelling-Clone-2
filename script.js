


window.onload = () => {
  let w = document.querySelector('.carousel-wrapper'),
      g = document.querySelector('.categories-grid'),
      s = 2.5, x = 0;

  g.innerHTML += g.innerHTML; // clone all

  (function loop(){
    x += s;
    w.scrollLeft = x;
    if(x >= g.scrollWidth/2) x = 0;
    requestAnimationFrame(loop);
  })();

  w.onmouseenter = () => s = 0;
  w.onmouseleave = () => s = 1;
};






let s = document.querySelectorAll(".slide"),
    d = document.querySelectorAll(".dot"),
    i = 0;

const show = n => {
  s.forEach(el => el.classList.toggle("active", el === s[n]));
  d.forEach(el => el.classList.toggle("active", el === d[n]));
};

setInterval(() => show(i = (i + 1) % s.length), 3000);

d.forEach((el, n) => el.onclick = () => show(i = n));



function openPage(page) {
  window.location.href = page;
}






const items = [...document.querySelectorAll(".item")];
const classes = ["left2", "left1", "active", "right1", "right2"];
let index = 2;

const slider = () => {
    items.forEach(item => item.className = "item");
    classes.forEach((cls, i) => 
        items[(index + i - 2 + items.length) % items.length].classList.add(cls)
    );
};

const move = (dir) => {
    index = (index + dir + items.length) % items.length;
    slider();
};

document.getElementById("next").onclick = () => move(1);
document.getElementById("prev").onclick = () => move(-1);

slider();






document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    
    const timer = setInterval(() => {
        count += target / 100;
        el.innerText = Math.ceil(count);
        
        if (count >= target) {
            el.innerText = target;
            clearInterval(timer);
        }
    }, 20);
});





const clients = [
    { name: "John Doe", review: "Amazing service!", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Emily Smith", review: "Best experience ever!", image: "https://i.pravatar.cc/150?img=32" },
    { name: "Michael Lee", review: "Perfectly managed.", image: "https://i.pravatar.cc/150?img=45" }
];

let current = 0;

// UI update karne ka chota function
const updateUI = () => {
    const { name, review, image } = clients[current];
    document.getElementById("clientName").innerText = name;
    document.getElementById("review").innerText = review;
    document.getElementById("clientImg").src = image;
};

// Next aur Prev functions
const nextSlide = () => {
    current = (current + 1) % clients.length;
    updateUI();
};

const prevSlide = () => {
    current = (current - 1 + clients.length) % clients.length;
    updateUI();
};

// Page load hote hi pehla client dikhane ke liye call karein
updateUI();