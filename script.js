// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let count=0;

function onMyFuncClick(){
  count++;
  return count;
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  max=parselnt(max);
  if(isNaN(max) || max<1) return0;
  return Math.floor(Math.random()*max)+1;
}

// 3) myAdder(x, y): numeric sum
function myAddre(x,y){
  x=parselnt(x);
  y=parselnt(y);
  ADD=x+y;
  return ADD;
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2){
  return Math.sqrt((x2-x11)**2 +(y2-y1)**2);
}
// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b,c){
  let disc= b*b-4*a*c;
  if(disc>0){
    let r1=(-b + Math.sqrt(disc))/(2*a);
    let r2=(-b - Math.sqrt(disc))/(2*a);
    return[-b/(2*a)];
        } else if (disc === 0) {
        return [-b / (2 * a)];
    } else {
        let real = (-b / (2 * a));
        let imag = (Math.sqrt(-disc) / (2 * a));
        return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
