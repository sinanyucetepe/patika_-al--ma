let userName = prompt("Please give your name")
Name.innerHTML=userName
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function Time() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = days[today.getDay()];
  let info = document.querySelector ("#Clock")
  h = h < 10 ? "0" + h : h        
  m = m < 10 ? "0" + m : m        
  s = s < 10 ? "0" + s : s 
  info.innerHTML = `${h}:${m}:${s}:${d}`
}
setInterval(Time, 1000);
Time();
