#javascript

// var Builder = {
//   'txt': '',
//   'append': function(x) {
//     Builder.txt += x;
//     // console.log(x);
//   },
//   'build': function(x) {
//     console.log(Builder.txt);
//   }
// };

var mm = Math.random() * 3;

hdr = "\
 frame\
\
 rule frame  {\
 { s 0.1 1.1 0.1 x 5  z 5 } box\
 { s 0.1 1.1 0.1 x 5  z -5 } box\
 { s 0.1 1.1 0.1 x -5  z 5 } box\
 { s 0.1 1.1 0.1 x -5  z -5 } box\
\
    { s 1 0.1 0.1 y 5  z 5 } box\
 { s 1 0.1 0.1 y 5  z -5 } box\
 { s 1 0.1 0.1 y -5  z 5 } box\
 { s 1 0.1 0.1 y -5  z -5 } box\
\
 { s 0.1 0.1 1 y 5  x 5 } box\
 { s 0.1 0.1 1 y 5  x -5 } box\
 { s 0.1 0.1 1 y -5  x 5 } box\
 { s 0.1 0.1 1 y -5  x -5 } box\
}\
\
rule mybar  {\
    { s 1 0.1 0.1 y 5  z 5 } box\
}\
";

Builder.append(hdr +'\n');

b = "} \
box";

// a = '{ s ' + mm + ' } box';
a = '{ y -1 s ' + mm + b;

// Builder.append(a +'\n');

var t2 = 'rule arch{';

for(i = 0; i < Math.PI; i+=0.1) {
var arg = i;
var scale = 3;
var translate = ((i*Math.PI)-5);
var trany = 1.5;
var tranz = 5;
var rot1 = 0; //i*90;
t2 += '{ s 0.1 y ' + (Math.sin(arg)*scale+trany) +  ' x ' + translate + ' z ' + tranz +' rx ' + rot1 + '} box\n';
}

t2 += '}\n arch \n';

Builder.append(t2);





Builder.build()
