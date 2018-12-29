import bpy

def isclose(a, b, rel_tol=1e-09, abs_tol=0.0):
    return abs(a-b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)

# Setup stuff and unselect everything
bpy.ops.object.mode_set(mode = 'OBJECT')
obj = bpy.context.active_object
bpy.ops.object.mode_set(mode = 'EDIT') 
bpy.ops.mesh.select_mode(type="VERT")
bpy.ops.mesh.select_all(action = 'DESELECT')
bpy.ops.object.mode_set(mode = 'OBJECT')


# user edit these
tol = 1e-6
dir = 2   # 0 = x, 1 = y, 2 = z
desired = 1

for i,v in enumerate(obj.data.vertices):
    check = v.co[dir]
    # print(v.co[0])
    if isclose(desired, check, abs_tol=tol):
        print("fnd")
        v.select = True
    

bpy.ops.object.mode_set(mode = 'EDIT')