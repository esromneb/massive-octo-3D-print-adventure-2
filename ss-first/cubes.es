{ hue 20 sat 0.8  } r2 
1 * {hue 40 sat 0.9} 1 * { z -2 } r3 
1 * {hue 40 sat 0.9} 1 * { z -4 } r4 

rule r2 maxdepth 5 {
{ s 0.82  rz 10 ry 12 rx -10 x 0.1  }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r2
1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  frame 
frame

}

rule r3 maxdepth 5 {
{ s 0.82   rx -15   }  r3
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  frame 
frame
}

rule r4 maxdepth 5 {
{ s 0.82   rx -15   }  r4
frame
}

rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

{ s 1 0.1 0.1 y 5  z 5 } box
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}

// R1

rule R1 maxdepth 20 {
  { x 1 rz 6 ry 6 s 0.99 blend blue 0.04 } R1
  { s 0.2 } sphere
}

// R8

rule R8 {
1 * { y 0.5 z -0.5 s 0.25 } 20 * { x 0.9 s 0.82 rz 10 y -0.2 } r2
}

// R9

rule R9 {
1 * { y 2 } 30 * { x 0.9 s 0.82 rz 10 } r2
}
