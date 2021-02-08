import React, { useEffect } from 'react'
import * as THREE from "three"
const { PerspectiveCamera, Scene, WebGLRenderer } = THREE
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { fragment } from './shaders/fragmentShader';
import { vertex } from './shaders/vertexShader';
import gsap from "gsap";
import hammerjs from "hammerjs";
import { planetAnimation, fadeOutFadeIn, dissableBlurOnElement } from './utils/animations/hero.animations';



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
        const canvas = document.querySelector('.hero_canvas')
        const container = document.querySelector('.hero_container')
        // const axesHelper = new THREE.AxesHelper(5);
        const videoTextureElement = document.querySelector('.texture_video')
        const videoIntro = document.querySelector('.intro_video')
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
        camera.position.set(0, 0, .8)
        // camera.position.set(0, 0, 3)


        // ─── RENDERER ────────────────────────────────────────────────────
        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);


        // ─── VIDEO TEXTURE ───────────────────────────────────────────────
        const videoTexture = new THREE.VideoTexture(videoTextureElement as HTMLVideoElement)
        // videoTexture.magFilter = THREE.NearestFilter
        const videoMaterial = new THREE.MeshBasicMaterial({
            map: videoTexture,
            side: THREE.DoubleSide,
            toneMapped: true
        })


        // ─── MESHES ───────────────────────────────────────────────────────
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 52, 52), videoMaterial);
        sphere.rotation.set(0, Math.PI / 1.1, 0)

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
        videoIntro.addEventListener('ended', ({ currentTarget }) => [
            fadeOutFadeIn('.intro_video', ['.hero_canvas', '.title'])
        ])



        const heroCanvasGestures = new hammerjs(container as HTMLElement)
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
        scene.add(camera);
        scene.add(sphere);
        scene.add(ring)
        renderer.setClearColor(0xffffff, 0)
        canvas.appendChild(renderer.domElement);
        animate()
    }






    return (
        <>
            <div className="hero_container" onMouseMove={e=> dissableBlurOnElement(e, '.main_header')}>
                <video className='texture_video' playsInline muted loop autoPlay width="320" height="240" src="/textures/videos/version3_higher_resolution.mp4" />
                <video className='intro_video' muted autoPlay src="/videos/intro/hero_high_resolution.mp4" />
                <h1 className='title'>IDEP</h1>
                <h1 className='main_header'>IDEP Storage for true <br /> distributed applications</h1>
                <div className="hero_canvas" />
            </div>
            <style jsx>{`
                .texture_video{
                    width: .1vw;
                    height: .1vh;
                    position: fixed;
                }

                .intro_video{
                    z-index: 7;  
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    min-width: 100%;
                    min-height: 100%;
                    width: auto;
                    height: auto;
                    z-index: -100;
                    transform: translateX(-50%) translateY(-50%);
                    background-size: cover;
                    transition: 1s opacity;   
                }
                
                .hero_container{
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                .hero_canvas{
                    position: absolute;
                    opacity: 0;
                    z-index: 3;
                }

                .title{
                    font-size: calc(3rem + 6vw);
                    opacity: 0;
                    text-align: left;
                    color: white;
                    text-align: center;
                    position: absolute;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    left: 50%;
                    z-index: 4; 
                    user-select: none;
                    text-shadow: 0px 18px 50px #1213193b;
                    clip-path: circle(100%);
                }
                
                .main_header{
                    font-weight: 900;
                    opacity: 0;
                    margin-top: -1rem;
                    font-size: calc(2rem + 5vw);
                    text-align: left;
                    color: var(--black);
                    z-index: 1; 
                    /* user-select: none; */
                    margin-top: -29rem;
                    filter: blur(7px);
                    transition: filter .2s ease;
                    
                }
            
                
                .main_header:hover{
                    filter: blur(0px);
                    z-index: 10;
                }

                @media screen and (max-width: 1000px){
                    .main_header {
                        filter: none !important;
                    }
                }



            `}</style>
        </>
    )
}



export default BuildingCanvas;