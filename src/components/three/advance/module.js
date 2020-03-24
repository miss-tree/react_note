import React from "react";

const module = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>封装公共模块</h3>
                    <p>
                        在Three.js中有些是经常调用的，我们可以将这些公共代码封装起来方便调用。
                    </p>
                    <pre>
                        <code>
                            {`
        function common(obj){
            const scene=new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000)
            camera.position.set(-25,30,25)
            
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setClearColor(new THREE.Color(0xeeeeee))	
            renderer.setSize(window.innerWidth,window.innerHeight)	
            renderer.shadowMapEnabled=true
            
            const 	planeGeometry = new THREE.PlaneGeometry(60,30,1,1)
            const  planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
            const plane = new THREE.Mesh(planeGeometry,planeMaterial)
            plane.rotation.x=-0.5*Math.PI;
            plane.castShadow=true
            plane.receiveShadow=true	
            scene.add(plane)
            
            return {
                scene:scene,
                renderer:renderer,
                plane:plane,
                camera:camera
            }
        }                  
        
        在别处调用

        var common3D = common()
        common3D.camera.position.set(-25,30,25)
                            `}
                        </code>
                    </pre>
                </div>
                <div >
                    <h3>进一步封装</h3>
                    <p>
                        为了进一步方便快捷调用，我们还可以传参，使用默认参数的方法。
                        通过参数修改场景细节将会更加便捷和降低耦合。
                    </p>
                    <pre>
                        <code>
                            {`
        function common(obj){
            var data={
                cp:[-25,30,25],
                plane:{
                    position:[-4,3,0]
                }
            }//自定义默认参数
            data = Object.assign(data,obj)
            const scene=new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000)
            camera.position.set(data.cp[0],data.cp[1],data.cp[2])
            
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setClearColor(new THREE.Color(0xeeeeee))	
            renderer.setSize(window.innerWidth,window.innerHeight)	
            renderer.shadowMapEnabled=true
            
            const 	planeGeometry = new THREE.PlaneGeometry(60,30,1,1)
            const  planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
            const plane = new THREE.Mesh(planeGeometry,planeMaterial)
            plane.rotation.x=-0.5*Math.PI;
            plane.position.set(data.plane.position[0],data.plane.position[1],data.plane.position[2])
            plane.castShadow=true
            plane.receiveShadow=true	
            scene.add(plane)
            
            return {
                scene:scene,
                renderer:renderer,
                plane:plane,
                camera:camera
            }
        }                  
        
        在别处调用
        const dataObj= {
            cp:[-25,30,75]
        }
        var common3D = common(dataObj)
        common3D.camera.position.set(-25,30,25)
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }

export default module;