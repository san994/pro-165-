AFRAME.registerComponent("fire",{
    init:function(){
        this.shoot()
    },
    shoot:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "z"){
                var fireball = document.createElement("a-entity");
                fireball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1
                });

                var cam = document.querySelector("#cam-rig");
                var pos = cam.getAttribute("position");
                fireball.setAttribute("position",{
                    x:pos.x,
                    y:pos.y+1,
                    z:pos.z-0.5
                });

                var cam3d = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                cam3d.getWorldDirection(direction);

                fireball.setAttribute("velocity", direction.multiplyScalar(-50));
                fireball.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:0
                })

                var scene = document.querySelector("#scene");
                scene.appendChild(fireball);
            }
        })
    }
})