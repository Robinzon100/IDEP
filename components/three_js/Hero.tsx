import React, { useEffect } from 'react'
import * as THREE from "three"
const { PerspectiveCamera, Scene, WebGLRenderer } = THREE
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { fragment } from './shaders/fragmentShader';
import { vertex } from './shaders/vertexShader';
import gsap from "gsap";
import hammerjs from "hammerjs";
import { planetAnimation, fadeOutFadeIn, dissableBlurOnElement } from './utils/animations/hero.animations';
import Button from '../lib/button/Button';







const Hero: React.FC = () => {
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
        const videoTextureElement = document.querySelector('.texture_video')
        const videoIntro = document.querySelector('.intro_video')
        const clock = new THREE.Clock()
        const scene = new Scene();


        let mousePosition = {
            x: 0,
            y: 0
        }

        navigator.userAgent.search("Firefox") > -1 && videoTextureElement.setAttribute('src', "/textures/videos/version3_compressed.mp4");

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
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.1, 52, 52), videoMaterial);
        sphere.rotation.set(0, Math.PI / 1.1, 0)


        const ring = new THREE.Mesh(new THREE.RingGeometry(1.5, 2, 80), new THREE.MeshMatcapMaterial(
            {
                side: THREE.DoubleSide,
                matcap: new THREE.TextureLoader().load('/textures/matcaps/white_black.png')
            }))
        ring.rotation.set(Math.PI / 2, -15, 0);
        // ring.rotation.set(Math.PI / 2, -15, 0);
        sphere.receiveShadow = true; //default


        // ─── LIGHTS ────────────────────────────────────────────────────




        // ─── CONTROLS ────────────────────────────────────────────────────
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;








        // ─── EVENTS ────────────────────────────────────────────────────
        videoIntro.addEventListener('ended', ({ currentTarget }) => {
            fadeOutFadeIn('.intro_video', ['.hero_canvas', '.title'])



            const heroCanvasGestures = new hammerjs(container as HTMLElement)
            heroCanvasGestures.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
            heroCanvasGestures.on('panup pandown', (e) => planetAnimation(e, camera, e.type))
            container.addEventListener('mousewheel', (e) => {
                console.log('scrolled');
                planetAnimation(e, camera)
            })
        })





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
            videoMaterial.needsUpdate = true
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
            <section className="hero_container" onMouseMove={e => dissableBlurOnElement(e, '.main_header')}>
                <video className='texture_video' playsInline muted loop autoPlay width="320" height="240" src="/textures/videos/version3_higher_resolution.mp4" />
                <video className='intro_video' muted autoPlay src="/videos/intro/hero_high_resolution.mp4" />
                <div className="content">
                    <h1 className='f-size-h1 title'>IDEP</h1>
                    <h1 className='f-size-h1 main_header'>Intergalactic <span className='colored_word'> Data </span><br /> Exchange Protocol</h1>
                    <Button className='hero_button' size={6} ctaMode={true} style={{ zIndex: 10 }}>
                        <p className="f-size-h5 f-weight-r">get started</p>
                    </Button>
                </div>
                <div className="bg_gradients">
                    <div className="purple" style={{ transform: 'translate(160%, 222%)' }} />
                    <div className="orange" style={{ transform: 'translate(230%, 190%)' }} />
                    <div className="cyan" style={{ transform: 'translate(-110%, 100%) scale(1.5)' }} />
                    <div className="cyan" style={{ transform: 'translate(480%, -100%) scale(1.5)' }} />
                </div>
                <div className="hero_canvas" />
            </section>
            <style jsx>{`
              


            `}</style>
        </>
    )
}



export default Hero;
