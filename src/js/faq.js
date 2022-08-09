let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');

box1.onclick =()=>{
    c1.classList.toggle('hidden');
    if(h1.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h1.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h1.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}
box2.onclick =()=>{
    c2.classList.toggle('hidden');
    if(h2.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h2.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h2.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}
box3.onclick =()=>{
    c3.classList.toggle('hidden');
    if(h3.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h3.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h3.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}
box4.onclick =()=>{
    c4.classList.toggle('hidden');
    if(h4.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h4.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h4.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}
box5.onclick =()=>{
    c5.classList.toggle('hidden');
    if(h5.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h5.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h5.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}
box6.onclick =()=>{
    c6.classList.toggle('hidden');
    if(h6.innerHTML === `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`)
        h6.innerHTML = `<i class="fa-solid fa-chevron-up bg-slate-100 p-2 rounded-lg text-blue-700"></i>`;
    else 
        h6.innerHTML = `<i class="fa-solid fa-chevron-down bg-slate-100 p-2 rounded-lg text-blue-700"></i>`; 
}