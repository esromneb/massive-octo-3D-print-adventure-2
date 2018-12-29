import bpy
import bmesh
import numpy as np

def isclose(a, b, rel_tol=1e-09, abs_tol=0.0):
    return abs(a-b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)

# Setup stuff and unselect everything

obj = bpy.context.active_object

count_sel = 0
selected = []

if 1:
    count_sel = 0
    if obj.mode == 'EDIT':
        print("Object was in edit")
        bm=bmesh.from_edit_mesh(obj.data)
        for v in bm.verts:
            if v.select:
                print(v.co)
                count_sel += 1
                selected.append(v.co)
        if count_sel != 3:
            raise Exception("must select 3 verts")
    else:
        raise Exception("Object is not in edit mode.")

print("---")

p1 = np.array(selected[0])
p2 = np.array(selected[1])
p3 = np.array(selected[2])

# These two vectors are in the plane
v1 = p3 - p1
v2 = p2 - p1

# the cross product is a vector normal to the plane
cp = np.cross(v1, v2)
a, b, c = cp

# This evaluates a * x3 + b * y3 + c * z3 which equals d
d = np.dot(cp, p3)

print('The equation is {0}x + {1}y + {2}z = {3}'.format(a, b, c, d))









if 0:
    bpy.ops.object.mode_set(mode = 'EDIT') 
    bpy.ops.mesh.select_mode(type="VERT")
    bpy.ops.mesh.select_all(action = 'DESELECT')
    bpy.ops.object.mode_set(mode = 'OBJECT')


# user edit these
tol = 1e-5
dir = 0   # 0 = x, 1 = y, 2 = z
desired = -1.0

if 0:
    for i,v in enumerate(obj.data.vertices):
        check = v.co[dir]
        if isclose(desired, check, abs_tol=tol):
            # print("fnd")
            v.select = True
    bpy.ops.object.mode_set(mode = 'EDIT')