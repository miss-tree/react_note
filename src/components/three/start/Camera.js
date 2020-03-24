import React from "react";

const Camera = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>相机</h3>
                    <p>
                    摄像机阵列（ArrayCamera）用于更加高效地使用一组已经预定义的摄像机来渲染一个场景。这将能够更好地提升VR场景的渲染性能。常见的相机有以下几种
                    </p>
                    <ul>
                        <li>PerspectiveCamera:透视摄像机</li>
                        <li>OrthographicCamera:正交摄像机,无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。</li>
                        <li>CubeCamera:立方相机,创建6个摄像机，并将它们所拍摄的场景渲染到WebGLCubeRenderTarget上</li>
                        <li>StereoCamera:立体相机,常被用于创建3D Anaglyph（3D立体影像）或者Parallax Barrier（视差效果）。</li>
                    </ul>
                    {/* <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo03.webp")} alt=""/>
                    </div> */}
                </div>
                <div>
                    <h3>PerspectiveCamera</h3>
                    <div>
                        构造器:PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
                    </div>
                    <ul>
                        <li>fov — 摄像机视锥体垂直视野角度,从视图的底部到顶部，以角度来表示。默认值是50。</li>
                        <li>aspect — 摄像机视锥体长宽比,通常是使用画布的宽/画布的高。默认值是1（正方形画布）。</li>
                        <li>near — 摄像机视锥体近端面,默认值是0.1。</li>
                        <li>far — 摄像机视锥体远端面,默认值是2000。</li>
                    </ul>
                    {/* <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo0321.jpg")} alt=""/>
                    </div> */}
                </div>
                <div>
                    <h3>OrthographicCamera</h3>
                    <div>
                        构造器:OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )
                    </div>
                    <ul>
                        <li>left — 摄像机视锥体左侧面。</li>
                        <li>right — 摄像机视锥体右侧面。</li>
                        <li>top — 摄像机视锥体上侧面。</li>
                        <li>bottom — 摄像机视锥体下侧面</li>
                        <li>near — 摄像机视锥体近端面,其默认值为0.1。</li>
                        <li>far — 摄像机视锥体远端面，其默认值为2000。</li>
                    </ul>
                </div>
                <div>
                    <h3>CubeCamera</h3>
                    <div>
                        构造器:CubeCamera( near : Number, far : Number, cubeResolution : Number )
                    </div>
                    <ul>
                        <li>near -- 近剪切面的距离。</li>
                        <li>far -- 远剪切面的距离。</li>
                        <li>cubeResolution -- 设置立方体边缘的长度。</li>
                        <li>bottom — 摄像机视锥体下侧面</li>
                        <li>near — 摄像机视锥体近端面,其默认值为0.1。</li>
                        <li>far — 摄像机视锥体远端面，其默认值为2000。</li>
                    </ul>
                </div>
                <div>
                    <h3>CubeCamera</h3>
                    <div>
                        构造器:StereoCamera( )
                    </div>
                    <ul>
                        <li>.cameraL:左摄像机，它被加入到了layer 1中 —— 需要被左摄像机渲染的物体也应当要加入到这一层中。</li>
                        <li>.cameraR :右摄像机，它被加入到了layer 2中 —— 需要被右摄像机渲染的物体也应当要加入到这一层中。</li>
                        <li>.update:基于摄像机通过场景，更新立体摄像机。。</li>
                    </ul>
                </div>
                <div>
                    <h3>demo0322部分代码</h3>
                    <div>
                        相机移动效果,点击左右按键，过2秒后切换视角
                    </div>
                    <div className='linuxImg'>
                        <img src={require("../../../assets/images/three/demo0322.gif")} alt=""/>
                    </div>
                    <pre>
                        <code>
                            {`
    <script type="text/javascript">
        ...	
        //增加方块
        const cubeGeometry = new THREE.BoxGeometry(4,4,4)
        for(let j=0;j<planeGeometry.parameters.height/5;j++){
            for(let i=0;i<planeGeometry.parameters.width/5;i++){
                var rnd = Math.random()*0.75+0.25
                let cubeMaterial = new THREE.MeshLambertMaterial();
                cubeMaterial.color = new THREE.Color(rnd,0,0)
                let cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
                cube.position.x = -(planeGeometry.parameters.width/2)+2+(i*5)
                cube.position.y = 2
                cube.position.z = -(planeGeometry.parameters.height/2)+2+(j*5)
                scene.add(cube)
            }
        }
        //因为画布长50，宽30，方块是4x4x4，铺满就需要一个合理的数字，所以除五，当然其他合理数字也可以
        //扭动相机
        var controls = new function(){
            this.perspective = 'Perspective'
            this.switchCamera = function(){
                if (camera instanceof THREE.PerspectiveCamera){
                    camera = new THREE.OrthographicCamera(
                        window.innerWidth/-16,
                        window.innerWidth/16,
                        window.innerHeight/-16,
                        window.innerHeight/16,
                        -1,1000
                    )
                    camera.position.x = -20
                    camera.position.y = 60
                    camera.position.z = 50
                    camera.lookAt(scene.position)
                    this.perspective ='Orthographic'
                }else{
                    this.perspective = 'Perspective'
                    camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)
                    camera.position.x = -20
                    camera.position.y = 60
                    camera.position.z = 50
                    camera.lookAt(scene.position)
                }
            }
        }
        setInterval(function(){
            controls.switchCamera()
        },2000)
        document.onkeydown = function(event){
            switch (event.keyCode){
                case 37:
                    camera.rotation.y+=0.02
                    render()
                    break;
                case 39:
                    camera.rotation.y-=0.02
                    render()
                    break;
            }
        }
        function render(){
            renderer.render(scene,camera)
        }
        render()
        document.body.appendChild(renderer.domElement)
    </script>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }

export default Camera;