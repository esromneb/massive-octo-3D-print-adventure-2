{ hue 20 sat 0.8  } r2 

rule r2 maxdepth 20 {
{ s 0.82  rz 10 ry 10 x 0.1  }  r2
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

R8

rule R8 {
1 * { y 2 } 30 * { x 0.9 s 0.82 rz 10 } r2
}

// R9

rule R9 {
1 * { y 2 } 30 * { x 0.9 s 0.82 rz 10 } r2
}
