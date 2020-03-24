import React from "react";

const Geometry = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>几何对象</h3>
                    <span>Threejs常用的设置有以下几个</span>
                    <ul>
                        <li>THREE.Geometry:是所有几何对象基类(简称geom)</li>
                        <li>geom.vertices:表示几何体的顶点，是一个数组</li>
                        <li>geom.faces:表示几何体的侧面</li>
                        <li>DirectionalLight:方向光，从这个发出的光源可以看做是平行光，类似通道一样</li>
                    </ul>
                    <p>
                        关于几何体的组成，本例子是由两个三角形组成的一个侧面，也有侧面是由四角形组成的，
                        但是相对于做3D，两个三角形组成的更优，有利于形变，类似于钻石菱形的物体容易组成。
                    </p>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo03.webp")} alt=""/>
                    </div>
                    <p>
                        关于 THREE.Face3()参数的设置要看上面的图的每个点的索引，以顶面为例，
                        两个三角形分别是由上图0、1、3、2四个点组成，第一个三角形是由(0,2,1)
                        三个点组成，第二个三角形是由(2,3,1)组成。记住不是坐标，否则容易进入死角。
                        Face3( a : 索引, b : 索引, c : 索引, normal : Vector3, color : 颜色, materialIndex : Integer )
                        后面的三个参数为选填。
                    </p>
                </div>
                <div >
                    <h3>网格对象</h3>
                    <ul>
                        <li>position:决定该对象相对于父对象的位置</li>
                        <li>rotation:设置对象任何一个轴的旋转弧度</li>
                        <li>scale:沿x、y和z轴进行缩放对象</li>
                        <li>translateX:X轴平移</li>
                        <li>translateY:Y轴平移</li>
                        <li>translateZ:Z轴平移</li>
                    </ul>
                </div>
                <div>
                    <span>下面是一个添加立方体</span>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo0321.jpg")} alt=""/>
                    </div>
                </div>
                <div>
                    <h3>完整代码</h3>
                    <pre>
                        <code>
                            {`
    <script src="./js/three.js" type="text/javascript" charset="utf-8"></script>
    <script src="./js/SceneUtils.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
        //设置场景
        const scene=new THREE.Scene()
        //设置相机					
        const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.x=5
        camera.position.y=20
        camera.position.z=20
        camera.lookAt(scene.position)
        //设置绘制对象		
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setClearColor(new THREE.Color(0xeeeeee))	//设置颜色
        renderer.setSize(window.innerWidth,window.innerHeight)	//设置全屏
        renderer.shadowMapEnabled=true
        //设置平面					
        const 	planeGeometry = new THREE.PlaneGeometry(70,50,1,1)
        const  planeMaterial = new THREE.MeshLambertMaterial({color:0x3c3c3c})
        const plane = new THREE.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=0;
        plane.position.y=0;
        plane.position.z=0;
        plane.receiveShadow=true	
        scene.add(plane)
        //设置光源
        const spotLight = new THREE.SpotLight(0xffffff);	
        spotLight.position.set(-40,60,-10)	
        spotLight.castShadow=true;	
        scene.add(spotLight)	
        //增加方块
        //设置8个顶点坐标
        const vertices = [
            new THREE.Vector3(1,3,1),
            new THREE.Vector3(1,3,-1),
            new THREE.Vector3(1,-1,1),
            new THREE.Vector3(1,-1,-1),
            new THREE.Vector3(-1,3,-1),
            new THREE.Vector3(-1,3,1),
            new THREE.Vector3(-1,-1,-1),
            new THREE.Vector3(-1,-1,1),
        ]
        //增加6个面
        const faces = [
            new THREE.Face3(0,2,1),
            new THREE.Face3(2,3,1),
            
            new THREE.Face3(4,5,6),
            new THREE.Face3(6,7,5),
            
            new THREE.Face3(4,5,1),
            new THREE.Face3(5,0,1),
            
            new THREE.Face3(7,6,2),
            new THREE.Face3(6,3,2),
            
            new THREE.Face3(5,7,0),
            new THREE.Face3(7,2,0),
            
            new THREE.Face3(1,3,4),
            new THREE.Face3(3,6,4),
        ]
        const geom = new THREE.Geometry()
        geom.vertices= vertices
        geom.faces = faces
        geom.computeFaceNormals()
        //增加材质
        const materials = [
            new THREE.MeshLambertMaterial({
                opacity:0.5,color:0x44ff44,transparent:true,
                }),
            new THREE.MeshBasicMaterial({color:0x000000,wireframe:true})
        ]
        //构成物体
        const mesh = new THREE.SceneUtils.createMultiMaterialObject(geom,materials)
        mesh.children.forEach(function(e){
            e.castShadow=true   //给每个面添加阴影
        })
        scene.add(mesh)
        renderer.render(scene,camera)
        document.body.appendChild(renderer.domElement)
    </script>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }

export default Geometry;