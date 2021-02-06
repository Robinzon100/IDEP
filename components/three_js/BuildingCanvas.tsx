import React, { useEffect } from 'react'
import * as THREE from "three"
const { PerspectiveCamera, Scene, WebGLRenderer } = THREE
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { fragment } from './shaders/fragmentShader';
import { vertex } from './shaders/vertexShader';
import gsap from "gsap";
import hammerjs from "hammerjs";
import { planetAnimation } from './utils/animations/hero';



interface Window {
    e: any;
}


const BuildingCanvas: React.FC = () => {


    let uniforms = {
        time: { type: "f", value: 1.0 },
        image: { type: 't', value: new THREE.TextureLoader().load('/logo.png') },
        resolution: { type: "v4", value: new THREE.Vector4() }
    };
    let material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: uniforms,
        transparent: true,
        vertexShader: vertex(),
        fragmentShader: fragment()
    });








    useEffect(() => {
        init();
    }, [])









    function init() {
        const canvas = document.querySelector('#BuildingCanvas') as HTMLElement
        const container = document.querySelector('.hero_container') as HTMLElement
        // const axesHelper = new THREE.AxesHelper(5);
        const video = document.querySelector('video')
        const clock = new THREE.Clock()
        const scene = new Scene();


        let mousePosition = {
            x: 0,
            y: 0
        }

        window.addEventListener('mousemove', (e) => {
            // mousePosition.x = e.clientX / window.innerWidth - 0.5
            // mousePosition.y = - (e.clientY / window.innerHeight - 0.5)

        })

        // ─── CAMERA ──────────────────────────────────────────────────────
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 0, 1.1)
        // camera.position.set(0, 0, 3)


        // ─── RENDERER ────────────────────────────────────────────────────
        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);


        // ─── VIDEO TEXTURE ───────────────────────────────────────────────
        const videoTexture = new THREE.VideoTexture(video)
        const videoMaterial = new THREE.MeshBasicMaterial({
            map: videoTexture,
            side: THREE.DoubleSide,
            toneMapped: true
        })


        // ─── MESHES ───────────────────────────────────────────────────────
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 52, 52), videoMaterial);
        sphere.castShadow = true;
        sphere.receiveShadow = false;

        const ring = new THREE.Mesh(new THREE.RingGeometry(1.5, 2, 50), new THREE.MeshBasicMaterial(
            {
                color: 0xffffff,
                side: THREE.DoubleSide
            }))
        ring.rotation.set(Math.PI / 2, -15, 0);
        // ring.rotation.set(Math.PI / 2, -15, 0);
        sphere.receiveShadow = true; //default


        // ─── LIGHTS ────────────────────────────────────────────────────
       



        // ─── CONTROLS ────────────────────────────────────────────────────
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;








        // ─── EVENTS ────────────────────────────────────────────────────
        let heroCanvasGestures = new hammerjs(container)
        heroCanvasGestures.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
        heroCanvasGestures.on('panup pandown', (e) => planetAnimation(e, camera, e.type))
        container.addEventListener('mousewheel', (e) => planetAnimation(e, camera))

        window.addEventListener('resize', _ => {
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
        })



        function animate() {
            // camera.position.x = Math.sin(mousePosition.x * Math.PI * 2)  * 3
            // camera.position.z = Math.cos(mousePosition.x * Math.PI * 2) * 3
            // camera.position.y = mousePosition.y * 5
            // camera.lookAt(phere.position)
            // controls.update()
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }


        // ─── ADDING SCENES ───────────────────────────────────────────────
        // scene.add(axesHelper);
        scene.add(camera);
        // renderer.setClearColor(0xffffff, 0)
        // scene.background = new THREE.Color(0xffffff);
        scene.add(sphere);
        scene.add(ring)
        canvas.appendChild(renderer.domElement);
        animate()
    }






    return (
        <>
            <div className="hero_container">
                <video playsInline muted loop autoPlay width="320" height="240" src="/textures/videos/version3.mp4" />
                <h1 className='title'>IDEP Storage for true <br /> distributed applications</h1>
                {/* <h1 className='title2'>IDEP Storage for true <br /> distributed applications</h1> */}
                <div id="BuildingCanvas" />
            </div>
            <style jsx>{`
                video{
                    width: .1vw;
                    height: .1vh;
                    position: fixed;
                }

                .hero_container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                #BuildingCanvas{
                    position: absolute;
                    z-index: 3;
                }

                .title{
                    user-select: none;
                    font-size: calc(2rem + 5vw);
                    text-align: left;
                    color: white;
                    z-index: 4; 
                    user-select: none;
                    text-shadow: 0px 18px 50px #1213193b;
                    clip-path: circle(100%);
                }
                .title2{
                    font-size: calc(2rem + 5vw);
                    text-align: left;
                    color: red;
                    z-index: 1; 
                    user-select: none;
                    text-shadow: 0px 18px 50px #1213193b;
                }
            
            
            `}</style>
        </>
    )
}



export default BuildingCanvas;