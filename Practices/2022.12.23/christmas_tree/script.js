!function() {
    "use strict";
    let e, t, n, o, a, r, s, i, E, l, d, c, h = 1, w = "";
    const m = 1, u = new THREE.Layers();
    u.set(m);
    const T = {
        exposure: 2,
        bloomStrength: 2,
        bloomThreshold: 0,
        bloomRadius: 0
    }, R = new THREE.MeshBasicMaterial({
        color: "black"
    }), H = {}, p = new THREE.Vector3(), M = new THREE.Matrix4();
    let f = new THREE.Vector3();
    const g = new THREE.Euler();
    let b = new THREE.Quaternion();
    const y = new THREE.Vector3(1, 1, 1), S = new THREE.Vector3(0, 0, 0);
    new THREE.Matrix4(), new THREE.Vector3(0, 1, 0);
    function x(e, n, o) {
        let a, r = n.length, s = new THREE.InstancedMesh(i.geometry, i.material, r);
        s.castShadow = !0, b.set(0, 0, 0, 0);
        for (let t = 0; t < r; t++) p.set(n[t][0], n[t][1], n[t][2]), f = p, "ico" != o && "green" != o || (g.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI), 
        b.setFromEuler(g)), 1 != e && y.set(e, e, e), M.compose(f, b, y), a = "green" == o ? new THREE.Color().setHSL(THREE.MathUtils.randFloat(.25, .4), 1, .4) : "ico" == o ? new THREE.Color().setHSL(Math.random(), 1, .8) : new THREE.Color().setHSL(Math.random(), 1, .5), 
        s.setMatrixAt(t, M), s.setColorAt(t, a);
        if ("bloom" == o) {
            setInterval(function() {
                s.layers.toggle(m), A();
            }, 1e3);
        }
        t.add(s);
    }
    function v(e) {
        let t = this.attributes.position;
        if (null != this.index) return;
        let n = t.count / 3, o = [], a = new THREE.Triangle(), r = new THREE.Vector3(), s = new THREE.Vector3(), i = new THREE.Vector3();
        for (let E = 0; E < n; E++) {
            r.fromBufferAttribute(t, 3 * E + 0), s.fromBufferAttribute(t, 3 * E + 1), i.fromBufferAttribute(t, 3 * E + 2), 
            a.set(r, s, i);
            let n = new THREE.Vector3();
            a.getMidpoint(n);
            let l = r.distanceTo(s), d = Math.sqrt(3) / 2 * l * e, c = n.clone().normalize().setLength(d);
            n.add(c), o.push(n.clone(), r.clone(), s.clone(), n.clone(), s.clone(), i.clone(), n.clone(), i.clone(), r.clone());
        }
        let E = new THREE.BufferGeometry().setFromPoints(o);
        return E.computeVertexNormals(), E;
    }
    function P() {
        const t = window.innerWidth, o = window.innerHeight;
        e.aspect = t / o, e.updateProjectionMatrix(), n.setSize(t, o), d.setSize(t, o), 
        c.setSize(t, o), A();
    }
    function C(e) {
        (e.isMesh || e.isInstancedMesh) && !1 === u.test(e.layers) && (H[e.uuid] = e.material, 
        e.material = R);
    }
    function I(e) {
        H[e.uuid] && (e.material = H[e.uuid], delete H[e.uuid]);
    }
    function z() {
        requestAnimationFrame(z), o.update(), l && l.moveAlongCurve(.002), A();
    }
    function A() {
        t.traverse(C), d.render(), t.traverse(I), c.render();
    }
    !function() {
        const m = document.createElement("div");
        document.body.appendChild(m), (t = new THREE.Scene()).background = 0, (n = new THREE.WebGLRenderer({
            antialias: !0
        })).setPixelRatio(window.devicePixelRatio), n.setSize(window.innerWidth, window.innerHeight), 
        n.outputEncoding = THREE.sRGBEncoding, n.shadowMap.enabled = !0, m.appendChild(n.domElement), 
        new THREE.TextureLoader().load("https://happy358.github.io/Images/HDR/leadenhall_market_1k_s.jpg", function(e) {
            e.mapping = THREE.EquirectangularReflectionMapping, t.environment = e;
        }), (e = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .01, 500)).position.set(0, .8, 24), 
        e.lookAt(0, 0, 0);
        const u = new THREE.RenderPass(t, e), R = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, .4, .85);
        R.threshold = T.bloomThreshold, R.strength = T.bloomStrength, R.radius = T.bloomRadius, 
        (d = new THREE.EffectComposer(n)).renderToScreen = !1, d.addPass(u), d.addPass(R);
        const H = new THREE.ShaderPass(new THREE.ShaderMaterial({
            uniforms: {
                baseTexture: {
                    value: null
                },
                bloomTexture: {
                    value: d.renderTarget2.texture
                }
            },
            vertexShader: document.getElementById("vertexshader").textContent,
            fragmentShader: document.getElementById("fragmentshader").textContent,
            defines: {}
        }), "baseTexture");
        H.needsSwap = !0, (c = new THREE.EffectComposer(n)).addPass(u), c.addPass(H);
        const M = new THREE.AmbientLight(16777215, .2);
        t.add(M);
        const f = [], g = [ {
            x: 2.8,
            y: -2.8,
            z: -2.8
        }, {
            x: 2.8,
            y: -2.8,
            z: 2.8
        }, {
            x: -2.8,
            y: -2.8,
            z: 2.8
        }, {
            x: -2.8,
            y: -2.8,
            z: -2.8
        } ];
        for (const e of g) {
            const t = new THREE.Object3D();
            t.position.copy(e), f.push(t);
        }
        const b = new THREE.CatmullRomCurve3(f.map(e => e.position));
        b.curveType = "catmullrom", b.tension = .8, b.closed = !0, new THREE.FontLoader().load("https://cdn.jsdelivr.net/npm/three@0.145.0/examples/fonts/helvetiker_bold.typeface.json", function(e) {
            (a = new THREE.TextGeometry("Happy Holidays!", {
                font: e,
                size: 1,
                height: .1,
                curveSegments: 12
            })).rotateX(Math.PI), a.rotateY(-Math.PI), r = new THREE.MeshStandardMaterial({
                color: 16766720
            });
            const n = new THREE.Mesh(a, r);
            (l = new THREE.Flow(n)).updateCurve(0, b), t.add(l.object3D);
        }), a = new THREE.CylinderGeometry(0, 4, 10, 6, 1, !0);
        new THREE.Mesh(a, new THREE.MeshStandardMaterial({
            color: 16777215,
            metalness: .8,
            roughness: 0,
            wireframe: !0
        }));
        let y = [];
        r = new THREE.MeshBasicMaterial(), s = new THREE.Mesh(a, r);
        const C = new THREE.MeshSurfaceSampler(s).build();
        for (let e = 0; e < 730; e++) C.sample(p, S), y.push([ p.x, p.y, p.z ]);
        let I = 600, A = [ ...Array(I) ].map(() => y.splice(Math.floor(Math.random() * y.length), 1)[0]);
        I = 70;
        let B = [ ...Array(I) ].map(() => y.splice(Math.floor(Math.random() * y.length), 1)[0]);
        I = 20;
        let G = [ ...Array(I) ].map(() => y.splice(Math.floor(Math.random() * y.length), 1)[0]);
        r = new THREE.MeshStandardMaterial({
            metalness: .8,
            roughness: 0
        }), E = .2, a = new THREE.SphereGeometry(E, 20, 20), i = new THREE.Mesh(a, r), x(h = 1, y, "spere"), 
        E = .13, h = 3, THREE.BufferGeometry.prototype.tripleFace = v, a = new THREE.IcosahedronGeometry(E, 0).tripleFace(h), 
        i = new THREE.Mesh(a, r), x(h = 1, G, "ico"), E = .1, a = new THREE.IcosahedronGeometry(E, 0), 
        i = new THREE.Mesh(a, r), x(h = 1, A, "green"), E = .08, a = new THREE.SphereGeometry(E, 10, 10), 
        i = new THREE.Mesh(a, new THREE.MeshBasicMaterial()), x(h = 1, B, "bloom");
        const V = [];
        for (let e = 0; e < 10; e++) {
            const t = e % 2 == 1 ? 1 : 2, n = e / 5 * Math.PI;
            V.push(new THREE.Vector2(Math.cos(n) * t, Math.sin(n) * t));
        }
        const L = new THREE.Shape(V);
        a = new THREE.ExtrudeGeometry(L, {
            depth: 0,
            steps: 1,
            bevelEnabled: !0,
            bevelThickness: 1,
            bevelSize: 1,
            bevelOffset: -.9,
            bevelSegments: 1
        }), (r = r.clone()).color.set("yellow"), r.side = THREE.DoubleSide;
        const k = new THREE.Mesh(a, r);
        k.position.y = 5.3, k.rotation.z = Math.PI / 5 / 2, h = .35, k.scale.set(h, h, h), 
        k.castShadow = !0, t.add(k);
        w = 16777215;
        const F = new THREE.PointLight(w, 1, 40, 3.8);
        F.castShadow = !0, F.shadow.bias = -.005, t.add(F), a = new THREE.BoxGeometry(50, 50, 50), 
        r = new THREE.MeshPhongMaterial({
            color: 16758465,
            shininess: 10,
            specular: 1118481,
            side: THREE.BackSide
        }), (s = new THREE.Mesh(a, r)).position.y = 19.2, s.receiveShadow = !0, t.add(s), 
        (o = new THREE.OrbitControls(e, n.domElement)).autoRotate = !0, o.autoRotateSpeed = 2, 
        o.enableDamping = !0, o.enablePan = !1, o.minDistance = 3, o.maxDistance = 28, o.minPolarAngle = 0, 
        o.maxPolarAngle = Math.PI / 2, o.target.set(0, 0, 0), o.update(), z(), window.addEventListener("resize", P);
    }();
}();