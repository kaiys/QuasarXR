"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_PalletEngine_module_ts",{

/***/ "(app-pages-browser)/./PalletEngine/module.ts":
/*!********************************!*\
  !*** ./PalletEngine/module.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Command: function() { return /* binding */ Command; },\n/* harmony export */   PalletEngine: function() { return /* binding */ PalletEngine; },\n/* harmony export */   Renderer: function() { return /* binding */ Renderer; },\n/* harmony export */   Scene: function() { return /* binding */ Scene; },\n/* harmony export */   _module: function() { return /* binding */ _module; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/TransformControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/TransformControls.js\");\n/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-mesh-bvh */ \"(app-pages-browser)/./node_modules/three-mesh-bvh/src/utils/ExtensionUtilities.js\");\n\n\n\n\n\nlet _useWebGPU = false;\nlet _pointer = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n// replace extension functions\nthree__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry.prototype.computeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.computeBoundsTree;\nthree__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry.prototype.disposeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.disposeBoundsTree;\nthree__WEBPACK_IMPORTED_MODULE_0__.Mesh.prototype.raycast = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.acceleratedRaycast;\nvar PowerPreference;\n(function(PowerPreference) {\n    PowerPreference[\"HighPerformance\"] = \"high-performance\";\n    PowerPreference[\"LowPower\"] = \"low-power\";\n    PowerPreference[\"Default\"] = \"default\";\n})(PowerPreference || (PowerPreference = {}));\nfunction findParentByType(object, type) {\n    if (object.parent instanceof type) {\n        return object.parent; // 부모 요소가 해당 타입인 경우 반환\n    } else if (object.parent !== null) {\n        return findParentByType(object.parent, type); // 타입이 아닌 경우 부모 요소로 재귀 호출\n    } else {\n        return null; // 최상위 부모 요소에 도달할 때까지 타입을 찾지 못한 경우\n    }\n}\nclass Command {\n    constructor(){}\n}\nclass InteractionController {\n    drawHelper() {}\n    connectEvent() {}\n    getViewportPos(x, y) {\n        let target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;\n        _pointer.x = x / window.innerWidth * 2 - 1;\n        _pointer.y = -(y / window.innerHeight) * 2 + 1;\n        if (target) target.copy(_pointer);\n        return _pointer;\n    }\n    constructor(option){\n        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();\n    }\n}\nclass DesktopIRC extends InteractionController {\n    drawHelper() {}\n    connectEvent() {\n        document.addEventListener(\"mousedown\", (event)=>{\n            if (this.controls.axis) {\n                return;\n            }\n            this.raycaster.setFromCamera(this.getViewportPos(event.clientX, event.clientY), _module.camera);\n            const hits = this.raycaster.intersectObject(_module.sceneGraph, true);\n            this.onIntersection(hits);\n        });\n    }\n    onIntersection(hits) {\n        const hitMeshes = hits.filter((h)=>h.object.isMesh && !findParentByType(h.object, three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__.TransformControls));\n        if (hitMeshes.length > 0) {\n            this.controls.enabled = true;\n            const group = findParentByType(hitMeshes[0].object, three__WEBPACK_IMPORTED_MODULE_0__.Group);\n            if (group) {\n                this.controls.attach(group);\n            } else {\n                this.controls.attach(hitMeshes[0].object);\n            }\n        } else {\n            this.controls.detach();\n            this.controls.enabled = false;\n        }\n    }\n    createControls(camera, canvas) {\n        this.controls = new three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__.TransformControls(camera, canvas);\n        return this.controls;\n    }\n    constructor(){\n        super({});\n    }\n}\nclass VirtualRealityIRC extends InteractionController {\n    constructor(){\n        super({});\n    }\n}\nclass CommandQueue {\n    isEmpty() {\n        return this.array.length > 0;\n    }\n    update() {\n        if (this.isEmpty()) {}\n    }\n    constructor(){\n        this.array = new Array();\n    }\n}\nclass Scene {\n    defaultScene() {}\n    constructor(){\n        this.root = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        this.animationObjects = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n    }\n}\nclass Renderer {\n    static Get() {\n        if (!Renderer.renderer) {\n            Renderer.Create({});\n        }\n        return Renderer.renderer;\n    }\n    static Create(opt) {\n        Renderer.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer(opt);\n        return Renderer.renderer;\n    }\n    static AnimationLoop(func) {}\n}\nRenderer.renderer = null;\nRenderer.canvas = null;\nRenderer.option = {\n    alpha: true\n};\nclass PalletElement extends HTMLElement {\n    constructor(){\n        super();\n    }\n}\nclass PalletEngine extends PalletElement {\n    createScene() {\n        const gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__.GridHelper(50, 50, 0x7c7c7c, 0x5f5f5f);\n        this.camera.position.set(0, 0, 5);\n        this.sceneGraph.add(gridHelper);\n        this.sceneGraph.add(this.directionalLight);\n        this.sceneGraph.add(this.ambientLight);\n        //create temporal object\n        const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1), new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n            color: 0xffdfba\n        }));\n        this.sceneGraph.add(cube);\n        this.updateFunctions.push((delta)=>{\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n        });\n    }\n    createEnvironment() {}\n    loadGLTF(url, onload) {\n        this.gltfLoader.load(url, (gltf)=>{\n            onload(gltf);\n            this.sceneGraph.add(gltf.scene);\n        });\n    }\n    update(dt) {\n        this.updateFunctions.map((func)=>func(dt));\n        this.commandQueue.update();\n        this.controller.update();\n        Renderer.Get().render(this.sceneGraph, this.camera);\n    }\n    addUpdator(func) {\n        this.updateFunctions.push(func);\n    }\n    appendCommand() {}\n    constructor(canvas){\n        super();\n        this.sceneGraph = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 10);\n        this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xfff8e8);\n        this.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();\n        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n        this.controller = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(this.camera, canvas);\n        this.controller.enableDamping = true;\n        this.controller.dampingFactor = 0.1;\n        this.updateFunctions = new Array();\n        this.commandQueue = new CommandQueue();\n        this.irc = new DesktopIRC();\n        this.irc.connectEvent();\n        const transformer = this.irc.createControls(this.camera, canvas);\n        this.sceneGraph.add(transformer);\n        const renderer = Renderer.Create({\n            antialias: true,\n            canvas: canvas\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0x3c3c3c);\n        renderer.setAnimationLoop(()=>{\n            const dt = this.clock.getDelta();\n            this.update(dt);\n        });\n        window.addEventListener(\"resize\", (event)=>{\n            this.camera.aspect = window.innerWidth / window.innerHeight;\n            this.camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        });\n        this.createScene();\n    }\n}\ncustomElements.define(\"pallet-element\", PalletElement);\ncustomElements.define(\"pallet-engine\", PalletEngine);\nlet canvasElements = document.getElementsByTagName(\"canvas\");\nlet _module;\nif (canvasElements.length > 0) {\n    const canvas = canvasElements[0];\n    _module = new PalletEngine(canvas);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL1BhbGxldEVuZ2luZS9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVvQztBQUNPO0FBQ1E7QUFDUTtBQUUxRixJQUFJTyxhQUF1QjtBQUMzQixJQUFJQyxXQUEyQixJQUFJUiwwQ0FBYTtBQUVoRCw4QkFBOEI7QUFDOUJBLGlEQUFvQixDQUFDVyxTQUFTLENBQUNQLGlCQUFpQixHQUFHQSw2REFBaUJBO0FBQ3BFSixpREFBb0IsQ0FBQ1csU0FBUyxDQUFDTixpQkFBaUIsR0FBR0EsNkRBQWlCQTtBQUNwRUwsdUNBQVUsQ0FBQ1csU0FBUyxDQUFDRSxPQUFPLEdBQUdQLDhEQUFrQkE7O1VBRTVDUTs7OztHQUFBQSxvQkFBQUE7QUFFTCxTQUFTQyxpQkFBa0JDLE1BQU0sRUFBR0MsSUFBSTtJQUNwQyxJQUFJRCxPQUFPRSxNQUFNLFlBQVlELE1BQU87UUFDaEMsT0FBT0QsT0FBT0UsTUFBTSxFQUFFLHNCQUFzQjtJQUNoRCxPQUFPLElBQUlGLE9BQU9FLE1BQU0sS0FBSyxNQUFNO1FBQy9CLE9BQU9ILGlCQUFpQkMsT0FBT0UsTUFBTSxFQUFFRCxPQUFRLHlCQUF5QjtJQUM1RSxPQUFPO1FBQ0gsT0FBTyxNQUFNLGtDQUFrQztJQUNuRDtBQUNKO0FBZ0JPLE1BQU1FO0lBR1RDLGFBQWMsQ0FFZDtBQUNKO0FBRUEsTUFBTUM7SUFLRkMsYUFBYSxDQUFDO0lBQ2RDLGVBQWUsQ0FBQztJQUNoQkMsZUFBZ0JDLENBQVUsRUFBRUMsQ0FBVSxFQUF1RDtZQUFyREMsU0FBQUEsaUVBQXlCQztRQUM3RHBCLFNBQVNpQixDQUFDLEdBQUcsSUFBTUksT0FBT0MsVUFBVSxHQUFLLElBQUk7UUFDN0N0QixTQUFTa0IsQ0FBQyxHQUFHLENBQUlBLENBQUFBLElBQUlHLE9BQU9FLFdBQVcsSUFBSyxJQUFJO1FBQ2hELElBQUtKLFFBQVNBLE9BQU9LLElBQUksQ0FBRXhCO1FBQzNCLE9BQU9BO0lBQ1g7SUFWQVks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ZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0ICogYXMgZGF0IGZyb20gJ2RhdC5ndWknO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcic7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybUNvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1RyYW5zZm9ybUNvbnRyb2xzJztcclxuaW1wb3J0IHsgY29tcHV0ZUJvdW5kc1RyZWUsIGRpc3Bvc2VCb3VuZHNUcmVlLCBhY2NlbGVyYXRlZFJheWNhc3QgfSBmcm9tICd0aHJlZS1tZXNoLWJ2aCc7XHJcblxyXG5sZXQgX3VzZVdlYkdQVSA6IEJvb2xlYW4gPSBmYWxzZTtcclxubGV0IF9wb2ludGVyIDogVEhSRUUuVmVjdG9yMiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4vLyByZXBsYWNlIGV4dGVuc2lvbiBmdW5jdGlvbnNcclxuVEhSRUUuQnVmZmVyR2VvbWV0cnkucHJvdG90eXBlLmNvbXB1dGVCb3VuZHNUcmVlID0gY29tcHV0ZUJvdW5kc1RyZWU7XHJcblRIUkVFLkJ1ZmZlckdlb21ldHJ5LnByb3RvdHlwZS5kaXNwb3NlQm91bmRzVHJlZSA9IGRpc3Bvc2VCb3VuZHNUcmVlO1xyXG5USFJFRS5NZXNoLnByb3RvdHlwZS5yYXljYXN0ID0gYWNjZWxlcmF0ZWRSYXljYXN0O1xyXG5cclxuZW51bSBQb3dlclByZWZlcmVuY2UgeyBIaWdoUGVyZm9ybWFuY2UgPSBcImhpZ2gtcGVyZm9ybWFuY2VcIiwgTG93UG93ZXIgPSBcImxvdy1wb3dlclwiLCBEZWZhdWx0ID0gXCJkZWZhdWx0XCIgfTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQYXJlbnRCeVR5cGUoIG9iamVjdCAsIHR5cGUgKSB7XHJcbiAgICBpZiAob2JqZWN0LnBhcmVudCBpbnN0YW5jZW9mIHR5cGUgKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC5wYXJlbnQ7IC8vIOu2gOuqqCDsmpTshozqsIAg7ZW064u5IO2DgOyeheyduCDqsr3smrAg67CY7ZmYXHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmluZFBhcmVudEJ5VHlwZShvYmplY3QucGFyZW50LCB0eXBlICk7IC8vIO2DgOyeheydtCDslYTri4wg6rK97JqwIOu2gOuqqCDsmpTshozroZwg7J6s6reAIO2YuOy2nFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDsgLy8g7LWc7IOB7JyEIOu2gOuqqCDsmpTshozsl5Ag64+E64us7ZWgIOuVjOq5jOyngCDtg4DsnoXsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVuZGVyT3B0aW9ucyA9IHtcclxuICAgIGNhbnZhcyA6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgY29udGV4dCA6IFJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICBhbHBoYSA6IGJvb2xlYW4sXHJcbiAgICBwcmVjaXNpb24gOiBzdHJpbmcsXHJcbiAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBib29sZWFuLFxyXG4gICAgYW50aWFsaWFzIDogYm9vbGVhbixcclxuICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXIgOiBib29sZWFuLFxyXG4gICAgZGVwdGggOiBib29sZWFuLFxyXG4gICAgc3RlbmNpbCA6IGJvb2xlYW4sXHJcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXIgOiBib29sZWFuLFxyXG4gICAgcG93ZXJQcmVmZXJlbmNlIDogUG93ZXJQcmVmZXJlbmNlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kIHtcclxuICAgIGNvbW1hbmQgOiBzdHJpbmc7XHJcbiAgICBwYXJhbWV0ZXIgOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEludGVyYWN0aW9uQ29udHJvbGxlciB7XHJcbiAgICByYXljYXN0ZXIgOiBUSFJFRS5SYXljYXN0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvciggb3B0aW9uIDogT2JqZWN0ICkge1xyXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xyXG4gICAgfSAgICBcclxuICAgIGRyYXdIZWxwZXIoKSB7fVxyXG4gICAgY29ubmVjdEV2ZW50KCkge31cclxuICAgIGdldFZpZXdwb3J0UG9zKCB4IDogbnVtYmVyLCB5IDogbnVtYmVyLCB0YXJnZXQgOiBUSFJFRS5WZWN0b3IyID0gdW5kZWZpbmVkICkgOiBUSFJFRS5WZWN0b3IyIHtcclxuICAgICAgICBfcG9pbnRlci54ID0gKCB4IC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xyXG4gICAgICAgIF9wb2ludGVyLnkgPSAtICggeSAvIHdpbmRvdy5pbm5lckhlaWdodCApICogMiArIDE7XHJcbiAgICAgICAgaWYgKCB0YXJnZXQgKSB0YXJnZXQuY29weSggX3BvaW50ZXIgKTtcclxuICAgICAgICByZXR1cm4gX3BvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERlc2t0b3BJUkMgZXh0ZW5kcyBJbnRlcmFjdGlvbkNvbnRyb2xsZXIge1xyXG4gICAgY29udHJvbHMgOiBUcmFuc2Zvcm1Db250cm9scztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0hlbHBlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdEV2ZW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jb250cm9scy5heGlzICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIHRoaXMuZ2V0Vmlld3BvcnRQb3MoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKSwgX21vZHVsZS5jYW1lcmEgKTtcclxuICAgICAgICAgICAgY29uc3QgaGl0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCggX21vZHVsZS5zY2VuZUdyYXBoLCB0cnVlICk7XHJcbiAgICAgICAgICAgIHRoaXMub25JbnRlcnNlY3Rpb24oIGhpdHMgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uSW50ZXJzZWN0aW9uKCBoaXRzIDogQXJyYXk8YW55PiApIHtcclxuICAgICAgICBjb25zdCBoaXRNZXNoZXMgPSBoaXRzLmZpbHRlciggaCA9PiBoLm9iamVjdC5pc01lc2ggJiYgISAoIGZpbmRQYXJlbnRCeVR5cGUoIGgub2JqZWN0LCBUcmFuc2Zvcm1Db250cm9scyApICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBoaXRNZXNoZXMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kUGFyZW50QnlUeXBlKCBoaXRNZXNoZXNbIDAgXS5vYmplY3QsIFRIUkVFLkdyb3VwICk7XHJcbiAgICAgICAgICAgIGlmICggZ3JvdXAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmF0dGFjaCggZ3JvdXAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuYXR0YWNoKCBoaXRNZXNoZXNbMF0ub2JqZWN0ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5kZXRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbnRyb2xzKCBjYW1lcmEsIGNhbnZhcyApIDogVHJhbnNmb3JtQ29udHJvbHMge1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgVHJhbnNmb3JtQ29udHJvbHMoIGNhbWVyYSwgY2FudmFzICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFZpcnR1YWxSZWFsaXR5SVJDIGV4dGVuZHMgSW50ZXJhY3Rpb25Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCB7fSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb21tYW5kUXVldWUgeyBcclxuICAgIGFycmF5IDogQXJyYXk8Q29tbWFuZD47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBuZXcgQXJyYXk8Q29tbWFuZD4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtcHR5KCkgOiBCb29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5pc0VtcHR5KCkgKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuXHJcbiAgICByb290IDogVEhSRUUuU2NlbmU7XHJcbiAgICBhbmltYXRpb25PYmplY3RzIDogVEhSRUUuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25PYmplY3RzID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdFNjZW5lKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHN0YXRpYyByZW5kZXJlciA6IFRIUkVFLldlYkdMUmVuZGVyZXIgPSBudWxsO1xyXG4gICAgc3RhdGljIGNhbnZhcyA6IEhUTUxDYW52YXNFbGVtZW50ID0gbnVsbDtcclxuICAgIHN0YXRpYyBvcHRpb24gOiBSZW5kZXJPcHRpb25zID0geyBhbHBoYTogdHJ1ZSB9IGFzIFJlbmRlck9wdGlvbnM7XHJcbiAgICBzdGF0aWMgR2V0KCkge1xyXG4gICAgICAgIGlmICggISBSZW5kZXJlci5yZW5kZXJlciApIHtcclxuICAgICAgICAgICAgUmVuZGVyZXIuQ3JlYXRlKCB7fSBhcyBSZW5kZXJPcHRpb25zICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZW5kZXJlci5yZW5kZXJlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ3JlYXRlKCBvcHQgOiBSZW5kZXJPcHRpb25zICkgOiBUSFJFRS5XZWJHTFJlbmRlcmVyIHtcclxuICAgICAgICBSZW5kZXJlci5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCBvcHQgKTtcclxuICAgICAgICByZXR1cm4gUmVuZGVyZXIucmVuZGVyZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEFuaW1hdGlvbkxvb3AoIGZ1bmMgOiBGdW5jdGlvbiApIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGFsbGV0RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHsgICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFsbGV0RW5naW5lIGV4dGVuZHMgUGFsbGV0RWxlbWVudCB7XHJcbiAgICBcclxuICAgIHNjZW5lR3JhcGggOiBUSFJFRS5TY2VuZTtcclxuICAgIGNhbWVyYSA6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhO1xyXG4gICAgZGlyZWN0aW9uYWxMaWdodCA6IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQ7XHJcbiAgICBhbWJpZW50TGlnaHQgOiBUSFJFRS5BbWJpZW50TGlnaHQ7XHJcbiAgICBnbHRmTG9hZGVyIDogR0xURkxvYWRlcjtcclxuICAgIGNsb2NrIDogVEhSRUUuQ2xvY2s7XHJcbiAgICBjb250cm9sbGVyIDogT3JiaXRDb250cm9scztcclxuICAgIHVwZGF0ZUZ1bmN0aW9ucyA6IEFycmF5PEZ1bmN0aW9uPjtcclxuICAgIGNvbW1hbmRRdWV1ZSA6IENvbW1hbmRRdWV1ZTtcclxuICAgIGlyYyA6IEludGVyYWN0aW9uQ29udHJvbGxlcjtcclxuICAgICAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvciggY2FudmFzIDogSFRNTENhbnZhc0VsZW1lbnQgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNjZW5lR3JhcGggPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAgKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDEwICk7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGZmZjhlOCApO1xyXG4gICAgICAgIHRoaXMuZ2x0ZkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xzKCB0aGlzLmNhbWVyYSwgY2FudmFzICk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmVuYWJsZURhbXBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5kYW1waW5nRmFjdG9yID0gMC4xO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zID0gbmV3IEFycmF5PEZ1bmN0aW9uPigpO1xyXG4gICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlID0gbmV3IENvbW1hbmRRdWV1ZSgpO1xyXG4gICAgICAgIHRoaXMuaXJjID0gbmV3IERlc2t0b3BJUkMoKTtcclxuICAgICAgICB0aGlzLmlyYy5jb25uZWN0RXZlbnQoKTtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lciA9ICggdGhpcy5pcmMgYXMgRGVza3RvcElSQyApLmNyZWF0ZUNvbnRyb2xzKCB0aGlzLmNhbWVyYSwgY2FudmFzICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggdHJhbnNmb3JtZXIgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBSZW5kZXJlci5DcmVhdGUoIHsgYW50aWFsaWFzOiB0cnVlLCBjYW52YXM6IGNhbnZhcyB9IGFzIFJlbmRlck9wdGlvbnMgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgzYzNjM2MgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR0ID0gdGhpcy5jbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSggZHQgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xyXG4gICAgICAgIH0gKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2NlbmUoKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA6IFRIUkVFLkdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNTAsIDUwLCAweDdjN2M3YywgMHg1ZjVmNWYgKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAsIDAsIDUgKTtcclxuICAgICAgICB0aGlzLnNjZW5lR3JhcGguYWRkKCBncmlkSGVscGVyICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggdGhpcy5kaXJlY3Rpb25hbExpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggdGhpcy5hbWJpZW50TGlnaHQgKTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGVtcG9yYWwgb2JqZWN0XHJcblxyXG4gICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICksIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCggeyBjb2xvcjogMHhmZmRmYmEgfSApICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggY3ViZSApO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5wdXNoKCAoIGRlbHRhICkgPT4geyBcclxuICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgICAgICAgICAgIGN1YmUucm90YXRpb24ueSArPSAwLjAxO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVudmlyb25tZW50KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkR0xURiggdXJsIDogc3RyaW5nLCBvbmxvYWQgOiBGdW5jdGlvbiApIHtcclxuICAgICAgICB0aGlzLmdsdGZMb2FkZXIubG9hZCggdXJsICwgZ2x0ZiA9PiB7XHJcbiAgICAgICAgICAgIG9ubG9hZCggZ2x0ZiApO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lR3JhcGguYWRkKCBnbHRmLnNjZW5lICk7XHJcbiAgICAgICAgfSwgLyogb25Qcm9ncmVzcywgb25FcnJvciAqLyApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSggZHQgOiBOdW1iZXIgKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMubWFwKCBmdW5jID0+IGZ1bmMoIGR0ICkgKTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIFJlbmRlcmVyLkdldCgpLnJlbmRlciggdGhpcy5zY2VuZUdyYXBoLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVwZGF0b3IoIGZ1bmMgOiBGdW5jdGlvbiApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5wdXNoKCBmdW5jICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ29tbWFuZCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSggJ3BhbGxldC1lbGVtZW50JywgUGFsbGV0RWxlbWVudCApO1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoICdwYWxsZXQtZW5naW5lJywgUGFsbGV0RW5naW5lICk7XHJcblxyXG5cclxubGV0IGNhbnZhc0VsZW1lbnRzIDogSFRNTENvbGxlY3Rpb25PZjxIVE1MQ2FudmFzRWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyApO1xyXG5leHBvcnQgbGV0IF9tb2R1bGUgOiBQYWxsZXRFbmdpbmU7XHJcblxyXG5pZiAoIGNhbnZhc0VsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNFbGVtZW50c1sgMCBdO1xyXG4gICAgX21vZHVsZSA9IG5ldyBQYWxsZXRFbmdpbmUoIGNhbnZhcyApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkdMVEZMb2FkZXIiLCJPcmJpdENvbnRyb2xzIiwiVHJhbnNmb3JtQ29udHJvbHMiLCJjb21wdXRlQm91bmRzVHJlZSIsImRpc3Bvc2VCb3VuZHNUcmVlIiwiYWNjZWxlcmF0ZWRSYXljYXN0IiwiX3VzZVdlYkdQVSIsIl9wb2ludGVyIiwiVmVjdG9yMiIsIkJ1ZmZlckdlb21ldHJ5IiwicHJvdG90eXBlIiwiTWVzaCIsInJheWNhc3QiLCJQb3dlclByZWZlcmVuY2UiLCJmaW5kUGFyZW50QnlUeXBlIiwib2JqZWN0IiwidHlwZSIsInBhcmVudCIsIkNvbW1hbmQiLCJjb25zdHJ1Y3RvciIsIkludGVyYWN0aW9uQ29udHJvbGxlciIsImRyYXdIZWxwZXIiLCJjb25uZWN0RXZlbnQiLCJnZXRWaWV3cG9ydFBvcyIsIngiLCJ5IiwidGFyZ2V0IiwidW5kZWZpbmVkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29weSIsIm9wdGlvbiIsInJheWNhc3RlciIsIlJheWNhc3RlciIsIkRlc2t0b3BJUkMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnRyb2xzIiwiYXhpcyIsInNldEZyb21DYW1lcmEiLCJjbGllbnRYIiwiY2xpZW50WSIsIl9tb2R1bGUiLCJjYW1lcmEiLCJoaXRzIiwiaW50ZXJzZWN0T2JqZWN0Iiwic2NlbmVHcmFwaCIsIm9uSW50ZXJzZWN0aW9uIiwiaGl0TWVzaGVzIiwiZmlsdGVyIiwiaCIsImlzTWVzaCIsImxlbmd0aCIsImVuYWJsZWQiLCJncm91cCIsIkdyb3VwIiwiYXR0YWNoIiwiZGV0YWNoIiwiY3JlYXRlQ29udHJvbHMiLCJjYW52YXMiLCJWaXJ0dWFsUmVhbGl0eUlSQyIsIkNvbW1hbmRRdWV1ZSIsImlzRW1wdHkiLCJhcnJheSIsInVwZGF0ZSIsIkFycmF5IiwiU2NlbmUiLCJkZWZhdWx0U2NlbmUiLCJyb290IiwiYW5pbWF0aW9uT2JqZWN0cyIsIlJlbmRlcmVyIiwiR2V0IiwicmVuZGVyZXIiLCJDcmVhdGUiLCJvcHQiLCJXZWJHTFJlbmRlcmVyIiwiQW5pbWF0aW9uTG9vcCIsImZ1bmMiLCJhbHBoYSIsIlBhbGxldEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlBhbGxldEVuZ2luZSIsImNyZWF0ZVNjZW5lIiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsImRpcmVjdGlvbmFsTGlnaHQiLCJhbWJpZW50TGlnaHQiLCJjdWJlIiwiQm94R2VvbWV0cnkiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwidXBkYXRlRnVuY3Rpb25zIiwicHVzaCIsImRlbHRhIiwicm90YXRpb24iLCJjcmVhdGVFbnZpcm9ubWVudCIsImxvYWRHTFRGIiwidXJsIiwib25sb2FkIiwiZ2x0ZkxvYWRlciIsImxvYWQiLCJnbHRmIiwic2NlbmUiLCJkdCIsIm1hcCIsImNvbW1hbmRRdWV1ZSIsImNvbnRyb2xsZXIiLCJyZW5kZXIiLCJhZGRVcGRhdG9yIiwiYXBwZW5kQ29tbWFuZCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiRGlyZWN0aW9uYWxMaWdodCIsIkFtYmllbnRMaWdodCIsImNsb2NrIiwiQ2xvY2siLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImlyYyIsInRyYW5zZm9ybWVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJzZXRBbmltYXRpb25Mb29wIiwiZ2V0RGVsdGEiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJjYW52YXNFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./PalletEngine/module.ts\n"));

/***/ })

});