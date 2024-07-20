# Cura settings for Snapmaker 1


# Start
```
M104 S{material_print_temperature} ;Set Hotend Temperature
M140 S{material_bed_temperature} ;Set Bed Temperature
G28 ;home
G90 ;absolute positioning
G1 X-10 Y-10 F3000 ;Move to corner 
G1 Z0 F1800 ;Go to zero offset
M109 S{material_print_temperature} ;Wait for Hotend Temperature
M190 S{material_bed_temperature} ;Wait for Bed Temperature
G92 E0 ;Zero set extruder position
G1 E20 F200 ;Feed filament to clear nozzle
G92 E0 ;Zero set extruder position
```


# End
```
M104 S0 ;Extruder heater off
M140 S0 ;Heated bed heater off
G90 ;absolute positioning
G92 E0 ;Retract the filament
G1 E-1 F300 ;retract the filament a bit before lifting the nozzle, to release some of the pressure
G1 Z{machine_width} E-1 F3000 ;move Z up a bit and retract filament even more
G1 X0 F3000 ;move X to min endstops, so the head is out of the way
G1 Y{machine_depth} F3000 ;so the head is out of the way and Plate is moved forward
```

