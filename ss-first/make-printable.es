// { hue 20 sat 0.8  } r2 
// 1 * {hue 40 sat 0.9} 1 * { z -2 } r3 
// 1 * {hue 40 sat 0.9} 1 * { z -4 } r4 

// { hue 20 sat 0.8  } arch

rule r2 maxdepth 1 {
{ s 0.82  y 1.1  }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r4 
frame

}

// cubes just in one direction, i did not use
rule r3 maxdepth 5 {
{ s 0.82   rx -15   }  r3
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  r2
// 1 * { y -0.50 z 0.5 x 0.63 s 0.25 }  frame 
frame
}

// a few cubes with a sphere in center
rule r4 maxdepth 5 {
// { s 0.82   rx -15   }  r4
// { s 1 } triangle
// triangle [0,0,0;1,0,0;0.5,0.5,0.5]
{  s 0.9 } sphere
frame
2 * { rx -15 s 0.82 } frame

}

rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box // right front
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

// { s 1 0.1 0.1 y 5  z 5 } box // top front
mybar
1 * { y -0.5} 1 * { s 1 1 1 y 0.1 } mybar
1 * { y -0.5} 4 * { s 0.5 1 1 y 0.1 } mybar
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}

rule mybar  {
	{ s 1 0.1 0.1 y 5  z 5 } box // top front
}


// arch

rule arch {

{ y 0.0               x  0    } box
{ y 0.124986979574   x  1    } box
{ y 0.249895846353   x  2    } box
{ y 0.374648536364   x  3    } box
{ y 0.499167083234   x  4    } box
{ y 0.623373666926    x  5   } box
{ y 0.747190662368    x  6   } box
{ y 0.870540687968    x  7   } box
{ y 0.993346653975    x  8   } box
{ y 1.11553181066    x  9   } box
{ y 1.23701979627    x  10 } box
{ y 1.35773468478    x  11 } box
{ y 1.47760103331    x  12 } box
{ y 1.59654392929    x  13 } box
{ y 1.71448903728    x  14 } box
{ y 1.83136264543    x  15 } box
{ y 1.94709171154    x  16 } box
{ y 2.06160390872    x  17 } box
{ y 2.17482767056    x  18 } box
{ y 2.28669223589    x  19 } box
{ y 2.39712769302    x  20 } box
{ y 2.50606502337    x  21 } box
{ y 2.61343614465    x  22 } box
{ y 2.71917395342    x  23 } box
{ y 2.82321236698    x  24 } box
{ y 2.9254863647     x  25 } box
{ y 3.02593202868    x  26     } box
{ y 3.12448658364    x  27     } box
{ y 3.22108843619    x  28     } box
{ y 3.31567721332    x  29     } box
{ y 3.40819380012    x  30      } box
{ y 3.49858037673    x  31      } box
{ y 3.5867804545      x  32  } box
{ y 3.67273891123    x  33      } box
{ y 3.7564020257     x  34     } box
{ y 3.83771751118    x  35          } box
{ y 3.91663454814    x  36          } box
{ y 3.99310381599    x  37          } box
{ y 4.06707752395    x  38          } box
{ y 4.13850944084    x  39  } box
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

#define rot 4

// ileroof

rule tileroof{ { rz -38 y 3.15 x 0.2 z 0.05 s 0.2 6.3 0.2 }box
9 * {x 0.8} 1 * { ry 8 s 0.8 1 0.1 rz rot}box
8 * {x 0.8} 1 * {x 0.4 y 0.5 ry 8 s 0.8 1 0.1 rz rot}box
7 * {x 0.8} 1 * {x 0.8 y 1 ry 8 s 0.8 1 0.1 rz rot}box
6 * {x 0.8} 1 * {x 1.2 y 1.5 ry 8 s 0.8 1 0.1 rz rot}box
5 * {x 0.8} 1 * {x 1.6 y 2 ry 8 s 0.8 1 0.1 rz rot}box
4 * {x 0.8} 1 * {x 2 y 2.5 ry 8 s 0.8 1 0.1 rz rot}box
3 * {x 0.8} 1 * {x 2.4 y 3 ry 8 s 0.8 1 0.1 rz rot}box
2 * {x 0.8} 1 * {x 2.8 y 3.5 ry 8 s 0.8 1 0.1 rz rot}box
1 * {x 0.8} 1 * {x 3.2 y 4 ry 8 s 0.8 1 0.1 rz rot}box
}


