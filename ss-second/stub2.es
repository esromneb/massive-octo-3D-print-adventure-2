// 1 * {z 2} box

// mybox

rule r2 maxdepth 25 {
{ s 0.82  rz 10 ry 12 rx -10 x 0.1 y -0.1 }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r4 
mybox

}

r2



1 * { y -2  z 0 } rr 

rule rr {
 // { s 0.1 1.1 0.1 x 5  z 5 } box
 // { s 0.1 1.1 0.1 x 5  z -5 } box
 // { s 0.1 1.1 0.1 x -5  z 5 } box
 // { s 0.1 1.1 0.1 x -5  z -5 } box

 { s 1 0.3 0.01  y 0  z 0 } box
 // { s 1 0.1 0.1 y 5  z -5 } box
 // { s 1 0.1 0.1 y -5  z 5 } box
 // { s 1 0.1 0.1 y -5  z -5 } box

 // { s 0.1 0.1 1 y 5  x 5 } box
 // { s 0.1 0.1 1 y 5  x -5 } box
 // { s 0.1 0.1 1 y -5  x 5 } box
 // { s 0.1 0.1 1 y -5  x -5 } box
}

