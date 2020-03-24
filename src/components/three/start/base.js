import React from "react";

const base = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>Threejs基石</h3>
                    <span>Threejs常用的设置有以下几个</span>
                    <ul>
                        <li>Plane(平面):二维矩形，渲染结果是在屏幕中央有个灰色的矩形</li>
                        <li>Cube(方块):三维立方体</li>
                        <li>Sphere(球体):三维球体</li>
                        <li>Camera(相机):决定视点的位置和最终观察结果</li>
                        <li>Axes(轴):辅助测试工具</li>
                        <li>stats.min.js：测试帧参数用</li>
                    </ul>
                </div>
                <div >
                    <h3>Three.js使用</h3>
                    <p>
                        首先我们要记住创建场景的步骤，要有顺序的进行，下面是我整理的顺序：
                    </p>
                    <ul>
                        <li>设置场景: const scene=new THREE.Scene()</li>
                        <li>
                            设置相机:const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)
                            <div>
                            THREE.PerspectiveCamera()的参数有4个，视角、高度/宽度、近聚点和远聚点(两个值不能为负)
                            </div>
                        </li>
                        <li>设置绘制对象:const renderer = new THREE.WebGLRenderer()
                            <div>
                            基于webGL的渲染器,是我们比较推荐使用的，其他svg、canvas的渲染器耗费cpu资源、画质不清晰等问题。
                            还可能出现兼容问题。
                            </div>
                        </li>
                        <li>设置辅助工具:const axes = new THREE.AxisHelper(250)
                            <div>一个坐标工具，红线为x轴，绿线为y轴，蓝线为z轴</div>
                        </li>
                        <li>设置平面:const plane = new THREE.Mesh(planeGeometry,planeMaterial)
                            <div>
                                第一个参数是const 	planeGeometry = new THREE.PlaneGeometry(70,50,1,1)设置的平面图形。
                                第二个参数是const  planeMaterial = new THREE.MeshLambertMaterial(<code>{`{color:0xCCCCCC}`}</code>)
                            </div>
                            <div>
                                一定要记得旋转网格模型：<span className='red'>plane.rotation.x=-0.5*Math.PI</span>;
                            </div>
                            <div>
                                给平面设置的坐标是平面的中心点而不是平面四个点的坐标
                            </div>
                        </li>
                        <li>设置立方体：const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
                            <div>
                                第一个参数是const 	cubeGeometry = new THREE.CubeGeometry(70,50,1,1)设置的几何图形。
                                第二个参数是const cubeMaterial = new THREE.MeshLambertMaterial(<code>{`{color:0xFF0000}`}</code>)
                            </div>
                            <div>只有MeshLambertMaterial 和 MeshPongMaterial材质光源产生反应有投影</div>
                        </li>
                        <li>设置光源：const spotLight = new THREE.SpotLight(0xffffff);</li>
                        <li>
                            设置阴影：plane.receiveShadow = true;cube.castShadow = true;sphere.castShadow = true;spotLight.castShadow = true;
                        </li>
                        <li>将模型挂载到dom上：renderer.render(scene,camera)</li>
                    </ul>
                </div>
                <div>
                    <span>材质为MeshDepthMaterial的效果时可以设置线框</span>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo01.jpg")} alt=""/>
                    </div>
                    <span>材质为MeshLambertMaterial的效果修改(细看正方体改了透明，图片压小了)</span>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo02.gif")} alt=""/>
                    </div>
                </div>
                <div>
                    <h3>完整代码</h3>
                    <pre>
                        <code>
                            {`
    <div id="statsOutput"></div>
    <script src="./js/three.js" type="text/javascript" charset="utf-8"></script>
    <script src="./js/stats.min.js" type="text/javascript" charset="utf-8"></script>//插件
    <script type="text/javascript">
        //增加统计功能
        const stats = ininStats()
        
        //设置场景
        const scene=new THREE.Scene()
        
        //设置相机					视角(人视角120度)、宽度、高度、近聚点和远聚点(两个值不能为负)
        const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.x=20
        camera.position.y=20
        camera.position.z=50
        camera.lookAt(scene.position)
        
        //设置绘制对象		基于webGL的渲染器		(svg、canvas的渲染器、耗费cpu资源、画质不清晰等问题)
        const renderer = new THREE.WebGLRenderer()  //参数可以开启抗锯齿{ antialias: true, alpha: true } 比较消耗cpu资源
        renderer.setClearColor(new THREE.Color(0xeeeeee))	//设置颜色
        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.shadowMapEnabled=true
        
        //设置辅助工具
        const axes = new THREE.AxisHelper(20)//参数表示坐标轴的大小，比如200
        scene.add(axes)
        /*
        红线为x轴，绿线为y轴，蓝线为z轴
        */
        
        //设置平面					宽、高、宽高参数段数
        const 	planeGeometry = new THREE.PlaneGeometry(70,50,1,1)  //创建几何图形
        // const  planeMaterial = new THREE.MeshDepthMaterial({color:0xCCCCCC})	//平面材质 ，反向材质
        const  planeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC})
        const plane = new THREE.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x=-0.5*Math.PI;  //!!!!!! 重点 重点 重点 一定要将这行代码写上，否则投影将出问题  主要作用是旋转网格模型
       //因为创建时是与x、y轴平行于原点(0,0)，因为在3D坐标轴内我们视角看到的是平行于左右的是x轴，上下是y轴，前后是z轴。不翻转就像是在看到了一堵墙。
        plane.position.x=15;
        plane.position.y=0;
        plane.position.z=0;
        plane.castShadow=true
        plane.receiveShadow=true	//平面开启阴影
        scene.add(plane)
        
        //设置立方体		设置长、宽、高
        const cubeGeometry = new THREE.CubeGeometry(4,4,4)
        // const cubeMaterial = new THREE.MeshBasicMaterial({color:0xff0000,wireframe:true})	//wireframe打开线框
        const cubeMaterial = new THREE.MeshLambertMaterial({color:0xFF0000,
            transparent: true,//开启透明度
            opacity: 0.5,//设置透明度具体值
           })	//更改材质
        const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
        cube.position.x=4;
        cube.position.y=2;
        cube.position.z=0;
        cube.castShadow=true	//开启阴影
        scene.add(cube)
        
        //设置球面体
        const sphereGeometry = new THREE.SphereGeometry(4,20,20);
        //const sphereMaterial = new THREE.MeshLambertMaterial({color:0x7777ff,wireframe:true})
        const sphereMaterial = new THREE.MeshLambertMaterial({color:0x7777ff})	//更改材质
        const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
        sphere.position.x=20;
        sphere.position.y=3;
        sphere.position.z=0;
        sphere.castShadow=true;		//开启阴影
        scene.add(sphere)
        
        //设置光源
        const spotLight = new THREE.SpotLight(0xffffff);	//创建光源
        spotLight.position.set(-40,60,-10)	//设置位置
        spotLight.castShadow=true;	//开启阴影
        scene.add(spotLight)	//在场景添加光源
        
        //引入动画
        var step=0;
        function renderAnimation(){
            stats.update();
            //转动方块
            cube.rotation.x+=0.02;
            cube.rotation.y+=0.02;
            cube.rotation.z+=0.02;
            //球体跳跃
            step+=0.04;
            sphere.position.x=20+(10*Math.cos(step))
            sphere.position.y=3+(10*Math.abs(Math.sin(step)))
            requestAnimationFrame(renderAnimation)//请求再次执行渲染函数render，渲染下一帧
            renderer.render(scene,camera)
        }
        
        //初始化统计对象
        function ininStats(){
            let stats = new Stats()
            stats.setMode(0)		//值为1 监测渲染的时间 ， 值为0 监测动画的FPS
            stats.domElement.style.position='absolute';
            stats.domElement.style.left='0px';
            stats.domElement.style.top='0px';
            document.getElementById('statsOutput').appendChild(stats.domElement);//插入canvas对象
            return stats
        }
        
        //将renderer 的输出挂载到body上
        document.body.appendChild(renderer.domElement)
        // renderer.render(scene,camera)
        renderAnimation()
    </script>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }

export default base;