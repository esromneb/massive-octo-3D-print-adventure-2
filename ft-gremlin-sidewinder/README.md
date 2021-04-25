# Purpose
Flite test stopped selling the power pack that goes with the frame that this was originally designed for.

## Solution
The Flite Test Sidewinder edition of the Gremlin cost more but has a carbon fiber frame and ships with 2-4S support which is great.

# Design
I am expanding the previous design ()


# Frame Files
I don't know if they exist or where they are.


# Buy Stuff
* https://store.flitetest.com/flite-test-gremlin-sidewinder-turbo-drone-frame-flt-1504/p739876 - frame
* https://store.flitetest.com/flite-test-turbo-gremlin-power-pack-flt-3020/p948798 - power pack
* https://store.flitetest.com/flite-test-gremlin-1106-6000kv-brushless-motor-flt-3030/p845488 - motors
* https://store.flitetest.com/hq-prop-durable-t2.5x3.5x3-pc-green-hq-pt2.5x3.5x3lg/p775024 - props
* https://store.flitetest.com/hq-prop-durable-t2.5x3.5x3-pc-black-hq-t2.5x3.5x3b/p778732 - props


# Blender Version
blender-2.70a-linux-glibc211-x86_64/blender

# Print Settings
I'm using a snap maker. I turned the temps up a bit (as shown in pics). I think maybe the temps I'm using are too high, as the holes melt a bit.  HOWEVER these melted holes are 100 true to the location if you bore them out a bit with a knife.


# New Layers

FTG-TJ-03 is the final top layer, this means it merges with bool add.

Union            Ring pos
Diff             Ring neg center
Union            Bar
Union            SAIDE BACK
Union            SAIDE FL
Union            SAIDE FR
Union            neg back shave
Difference       SLOT L
Difference       SLOT R


# Old Layers

FTG-TJ-01          orig frame
FTG-TJ-02          FINAL LAYER


Need to build a tree ffs.

FTG-TJ-02 is the final top layer, this means it merges with bool add.

Difference       top neg 2
Union            Ring pos
Union            Bar
Union            SAIDE
Union            SAIDE.001
Union            SAIDE.002
Difference       SLOT L
Difference       SLOT R


BAR is a piece FRONT TO BACK HOOPS
Difference       Bar neg half
Difference       Bar neg
Difference       standoffs tail
Difference       Ring neg cetner a bit taller
ARRAY
Union             Cube.001




Cylinder is the little triangular circular cones at the bottom of the hoops.
?missing but simple, cone



Ring pos, is ring positive.
Difference       Ring neg center (WIREFRAME)
Difference       standoffs
Difference       Ring Notch neg  (WIREFRAME) is a rectanglar cube, points 2 front of drone
Difference       standoffs tail
REMESH           why?

SADIE, side parts of the ring
?missing could be simple?

standoffs
Constant offset       Fixed Count: 2, Constant Offset Y: -5.936, No Relative Offset
Constant offset       Fixed Count: 2, Constant Offset Y: 13.58, No Relative Offset






Difference       
Difference       
Difference       
Difference       
Difference       
Difference       top neg 2
Difference       top neg 2
Difference       top neg 2
Difference       top neg 2
Difference       top neg 2
Difference       top neg 2
Union            
Union            
Union            
Union            
Union            
Union            
Union            
Union            
