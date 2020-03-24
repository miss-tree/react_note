import React from "react";

const light = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>光源</h3>
                    <span>Threejs常用的设置有以下几个</span>
                    <ul>
                        <li>AmbientLight:环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
                            <div>
                                没有明确的光源位置，在各处形成的亮度也是一致的。不会影响阴影的产生，
                                不能将环境光作为场景唯一的光源。不能单独使用
                            </div>
                        </li>
                        <li>PointLight:点光源，朝着所有方向都发射光线。类似电灯泡 </li>
                        <li>SpotLight:聚光灯光源--锥形光源，类型台灯，天花板上的吊灯，手电筒等</li>
                        <li>DirectionalLight:方向光，从这个发出的光源可以看做是平行光，类似通道一样</li>
                        <li>高级光照效果--半球光(类似3DMAX的球天)、平面光、镜头眩光</li>
                    </ul>
                    <div>阴影设置</div>
                    <ul>
                        <li>发光体:设置光源的 castShadow 属性为true</li>
                        <li>平面:给平面的 receiveShadow 设置为true </li>
                        <li>渲染器:renderer.shadowMapEnabled=true</li>
                        <li>被照物体:物体的 castShadow 属性为true</li>
                    </ul>
                </div>
                <div >
                    <h3>材质</h3>
                    <div>常用的材质</div>
                    <ul>
                        <li>LineBasicMaterial:基础线条材料，就是第一个例子的样子</li>
                        <li>LineDashedMaterial:一个用虚线绘制线框式结构的材料。</li>
                        <li>MeshBasicMaterial:一个以简单着色（平面或线框）方式来绘制几何形状的材料。</li>
                        <li>MeshDepthMaterial:一种通过深度绘制几何体的材料。深度基于相机的远近平面。白色是最近的，黑色是最远的。</li>
                        <li>MeshLambertMaterial:一种非发光材料（兰伯特）的表面，计算每个顶点。</li>
                        <li>MeshNormalMaterial:一种把法向量映射到RGB颜色的材料。</li>
                        <li>MeshPhongMaterial:用于表面有光泽的材料，计算每个像素。</li>
                        <li>MeshStandardMaterial:基础网孔材料</li>
                        <li>MeshNormalMaterial:一种把法向量映射到RGB颜色的材料。</li>
                        <li>MeshNormalMaterial:一种把法向量映射到RGB颜色的材料。</li>
                        <li>MeshNormalMaterial:一种把法向量映射到RGB颜色的材料。</li>
                    </ul>
                    <div>
                        材质不仅受光源、贴图和颜色影响，还受环境的影响。
                        比如给场景添加雾化，近的就比较清晰，远的就模糊，再远就变成颜色了。
                    </div>
                    <div className='balance'>
                        <div className="hang">
                            <span>scene.fog = new THREE.Fog(0xffffff,0.05,100)</span>
                        </div>
                    </div>
                    <div>
                        使用材质覆盖属性,就会使全部材质设置为统一的样式
                    </div>
                    <div className='balance'>
                        <div className="hang">
                            <span>scene.overrideMaterial = new THREE.MeshLambertMaterial(<code>{`{color:0xffffff}`}</code>)</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>环境光影响整个场景</span>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/light01.jpg")} alt=""/>
                    </div>
                </div>
                <div>
                    <span>下面是一个动态添加立方体的例子</span>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo03.gif")} alt=""/>
                    </div>
                </div>
                <div>
                    <h3>完整代码</h3>
                    <pre>
                        <code>
                            {`
    <script src="./js/three.js" type="text/javascript" charset="utf-8"></script>
    <script src="./js/OrbitControls.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
        //设置场景
        const scene=new THREE.Scene()
        //设置相机					
        const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.x=5
        camera.position.y=40
        camera.position.z=70
        camera.lookAt(scene.position)
        //增加雾化效果
        scene.fog = new THREE.Fog(0xffffff,0.05,100)
        //使用材质覆盖属性
        // scene.overrideMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
        //设置绘制对象		
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setClearColor(new THREE.Color(0xeeeeee))	//设置颜色
        renderer.setSize(window.innerWidth,window.innerHeight)	//设置全屏
        renderer.shadowMapEnabled=true
        //设置平面					
        const 	planeGeometry = new THREE.PlaneGeometry(100,60,1,1)
        const  planeMaterial = new THREE.MeshLambertMaterial({color:0x3c3c3c})
        const plane = new THREE.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=10;
        plane.position.y=0;
        plane.position.z=0;
        plane.receiveShadow=true	
        scene.add(plane)
        //设置光源
        const ambientLight = new THREE.AmbientLight(0x0c0c0c);	//创建光源
        scene.add(ambientLight)	//在场景添加光源
        const spotLight = new THREE.SpotLight(0xffffff);	//创建光源
        spotLight.position.set(-10,40,-10)	
        spotLight.castShadow=true;	
        scene.add(spotLight)	//在场景添加光源
        //增加方块
        function addCube(){
            const cubeGeometry = new THREE.CubeGeometry(4,4,4)
            const cubeMaterial = new THREE.MeshLambertMaterial({color:0xFF0000 })
            const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
            cube.position.x=Math.round(Math.random()*planeGeometry.parameters.width)/2;//随机位置x
            cube.position.y=Math.round(Math.random()*5);//随机位置y
            cube.position.z=Math.round(Math.random()*planeGeometry.parameters.height)/2;//随机位置z
            cube.castShadow=true	
            scene.add(cube)
        }
        //引入动画
        function renderAnimation(){
            addCube()
            renderer.render(scene,camera)
            requestAnimationFrame(renderAnimation)
        }
        //设置视角可以旋转
        var controls = new THREE.OrbitControls( camera, renderer.domElement );
        renderAnimation()
        document.body.appendChild(renderer.domElement)
    </script>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }

export default light;