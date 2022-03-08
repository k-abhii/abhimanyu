let cp =require('child_process');
console.log(cp);
// open calculator with the help of this 
//for linux repce with gnome-calculator
cp.execFileSync("calc");