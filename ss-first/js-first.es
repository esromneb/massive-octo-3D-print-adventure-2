#javascript

var mm = Math.random() * 3;

b = "} \
box";

// a = '{ s ' + mm + ' } box';
a = '{ s ' + mm + b;

Builder.append(a +'\n');

var t2 = 'rule arch{';

for(i = 0; i < 40; i++) {
t2 += '{ s 0.5 y ' + Math.sin(i/8)*5 +  ' x ' + i*0.9 + '} box\n';
}

t2 += '}\n arch \n';

Builder.append(t2);





Builder.build()
