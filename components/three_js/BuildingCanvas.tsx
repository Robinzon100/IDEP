import React, { useEffect } from 'react'
import * as THREE from "three"
const { PerspectiveCamera, Scene, WebGLRenderer } = THREE
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { fragment } from './shaders/fragmentShader';
import { vertex } from './shaders/vertexShader';
import gsap from "gsap";




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
        const canvas = document.querySelector('#BuildingCanvas')
        const container = document.querySelector('.hero_container')
        // const axesHelper = new THREE.AxesHelper(5);
        const video = document.querySelector('video')
        const clock = new THREE.Clock()

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

        // ─── RENDERER ────────────────────────────────────────────────────
        const renderer = new WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);


        // ─── VIDEO TEXTURE ───────────────────────────────────────────────
        const videoTexture = new THREE.VideoTexture(video)
        const videoMaterial = new THREE.MeshBasicMaterial({
            map: videoTexture,
            side: THREE.DoubleSide,
            toneMapped: true
        })

        // ─── PLANE ───────────────────────────────────────────────────────
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 52, 52), videoMaterial);
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.5, 2, 50), videoMaterial)
        ring.rotation.set(Math.PI / 2, 0, 5);
        ring.castShadow = true
        sphere.receiveShadow = true; //default

        // ─── CONTROLS ────────────────────────────────────────────────────
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;


        container.addEventListener('mousewheel', (e: any) => {
            gsap.to(camera.position, {
                duration: 3.8,
                z: e.deltaY == 100 ? 4 : 1.1,
                y: e.deltaY == 100 ? 0.8 : 0,
                ease: "Expo.easeOut"
            })

            if (e.deltaY == 100) {
                gsap.to('.title', {
                    duration: 1.8,
                    y: -200,
                    skewY: 10,
                    opacity: 0,
                    ease: "Expo.easeOut"
                })
            }else{
                gsap.to('.title', {
                    duration: 1.8,
                    y: 0,
                    skewY: 0,
                    opacity: 1,
                    ease: "Expo.easeOut"
                })
            }
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
        const scene = new Scene();
        // scene.add(axesHelper);
        scene.add(camera);
        scene.background = new THREE.Color(0xffffff);
        scene.add(sphere);
        scene.add(ring)
        canvas.appendChild(renderer.domElement);
        animate()
    }






    return (
        <>
            <div className="hero_container">
                <video playsInline muted loop autoPlay width="320" height="240" src="/video.mp4" />
                <h1 className='title'>IDEP Storage for true <br/> distributed applications</h1>
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
                    z-index: 1;
                }

                .title{
                    font-size: calc(2rem + 5vw);
                    text-align: left;
                    color: white;
                    z-index: 2; 
                    user-select: none;
                    text-shadow: 0px 18px 50px #1213193b;
                }
            
            
            `}</style>
        </>
    )
}



export default BuildingCanvas;