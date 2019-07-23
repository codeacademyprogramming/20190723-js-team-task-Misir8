let btn = document.createElement('a');
btn.href = '#';
btn.innerHTML = 'Generate Login Page';
console.log(btn);
let body = document.querySelector('body');
body.appendChild(btn);
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.height = '100vh';
body.style.alignItems = 'center';
// btn.setAttribute("class", "btn-outline-primary");
btn.setAttribute("class", "btn-outline-primary btn");
btn.onclick = () =>{
    btn.innerHTML('<h2>salam</h2>')
}