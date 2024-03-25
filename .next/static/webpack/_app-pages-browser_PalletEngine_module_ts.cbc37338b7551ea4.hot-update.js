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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Command: function() { return /* binding */ Command; },\n/* harmony export */   PalletEngine: function() { return /* binding */ PalletEngine; },\n/* harmony export */   Renderer: function() { return /* binding */ Renderer; },\n/* harmony export */   Scene: function() { return /* binding */ Scene; },\n/* harmony export */   _module: function() { return /* binding */ _module; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/TransformControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/TransformControls.js\");\n/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-mesh-bvh */ \"(app-pages-browser)/./node_modules/three-mesh-bvh/src/utils/ExtensionUtilities.js\");\n\n\n\n\n\nlet _useWebGPU = false;\nlet _pointer = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n// replace extension functions\nthree__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry.prototype.computeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.computeBoundsTree;\nthree__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry.prototype.disposeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.disposeBoundsTree;\nthree__WEBPACK_IMPORTED_MODULE_0__.Mesh.prototype.raycast = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_1__.acceleratedRaycast;\nvar PowerPreference;\n(function(PowerPreference) {\n    PowerPreference[\"HighPerformance\"] = \"high-performance\";\n    PowerPreference[\"LowPower\"] = \"low-power\";\n    PowerPreference[\"Default\"] = \"default\";\n})(PowerPreference || (PowerPreference = {}));\nfunction findParentByType(object, type) {\n    if (object.parent instanceof type) {\n        return object.parent; // 부모 요소가 해당 타입인 경우 반환\n    } else if (object.parent !== null) {\n        return findParentByType(object.parent, type); // 타입이 아닌 경우 부모 요소로 재귀 호출\n    } else {\n        return null; // 최상위 부모 요소에 도달할 때까지 타입을 찾지 못한 경우\n    }\n}\nclass Command {\n    constructor(){}\n}\nclass InteractionController {\n    drawHelper() {}\n    connectEvent() {}\n    getViewportPos(x, y) {\n        let target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;\n        _pointer.x = x / window.innerWidth * 2 - 1;\n        _pointer.y = -(y / window.innerHeight) * 2 + 1;\n        if (target) target.copy(_pointer);\n        return _pointer;\n    }\n    constructor(option){\n        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();\n    }\n}\nclass DesktopIRC extends InteractionController {\n    drawHelper() {}\n    connectEvent() {\n        document.addEventListener(\"mousedown\", (event)=>{\n            if (this.controls.axis) {\n                return;\n            }\n            this.raycaster.setFromCamera(this.getViewportPos(event.clientX, event.clientY), _module.camera);\n            const hits = this.raycaster.intersectObject(_module.sceneGraph, true);\n        });\n    }\n    onHandleIntersection(hits) {\n        const hitMeshes = hits.filter((h)=>h.object.isMesh && !findParentByType(h.object, three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__.TransformControls));\n        if (hitMeshes.length > 0) {\n            this.controls.enabled = true;\n            const group = findParentByType(hitMeshes[0].object, three__WEBPACK_IMPORTED_MODULE_0__.Group);\n            if (group) {\n                this.controls.attach(group);\n            } else {\n                this.controls.attach(hitMeshes[0].object);\n            }\n        } else {\n            this.controls.detach();\n            this.controls.enabled = false;\n        }\n    }\n    createControls(camera, canvas) {\n        this.controls = new three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_2__.TransformControls(camera, canvas);\n        return this.controls;\n    }\n    constructor(){\n        super({});\n    }\n}\nclass VirtualRealityIRC extends InteractionController {\n    constructor(){\n        super({});\n    }\n}\nclass CommandQueue {\n    isEmpty() {\n        return this.array.length > 0;\n    }\n    update() {\n        if (this.isEmpty()) {}\n    }\n    constructor(){\n        this.array = new Array();\n    }\n}\nclass Scene {\n    defaultScene() {}\n    constructor(){\n        this.root = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        this.animationObjects = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n    }\n}\nclass Renderer {\n    static Get() {\n        if (!Renderer.renderer) {\n            Renderer.Create({});\n        }\n        return Renderer.renderer;\n    }\n    static Create(opt) {\n        Renderer.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer(opt);\n        return Renderer.renderer;\n    }\n    static AnimationLoop(func) {}\n}\nRenderer.renderer = null;\nRenderer.canvas = null;\nRenderer.option = {\n    alpha: true\n};\nclass PalletElement extends HTMLElement {\n    constructor(){\n        super();\n    }\n}\nclass PalletEngine extends PalletElement {\n    createScene() {\n        const gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__.GridHelper(50, 50, 0x7c7c7c, 0x5f5f5f);\n        this.camera.position.set(0, 0, 5);\n        this.sceneGraph.add(gridHelper);\n        this.sceneGraph.add(this.directionalLight);\n        this.sceneGraph.add(this.ambientLight);\n        //create temporal object\n        const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1), new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n            color: 0xffdfba\n        }));\n        this.sceneGraph.add(cube);\n        this.updateFunctions.push((delta)=>{\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n        });\n    }\n    createEnvironment() {}\n    loadGLTF(url, onload) {\n        this.gltfLoader.load(url, (gltf)=>{\n            onload(gltf);\n            this.sceneGraph.add(gltf.scene);\n        });\n    }\n    update(dt) {\n        this.updateFunctions.map((func)=>func(dt));\n        this.commandQueue.update();\n        this.controller.update();\n        Renderer.Get().render(this.sceneGraph, this.camera);\n    }\n    addUpdator(func) {\n        this.updateFunctions.push(func);\n    }\n    appendCommand() {}\n    constructor(canvas){\n        super();\n        this.sceneGraph = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 10);\n        this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xfff8e8);\n        this.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();\n        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n        this.controller = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(this.camera, canvas);\n        this.controller.enableDamping = true;\n        this.controller.dampingFactor = 0.1;\n        this.updateFunctions = new Array();\n        this.commandQueue = new CommandQueue();\n        this.irc = new DesktopIRC();\n        this.irc.connectEvent();\n        const transformer = this.irc.createControls(this.camera, canvas);\n        this.sceneGraph.add(transformer);\n        transformer.addEventListener(\"dragging-changed\", (event)=>{\n            this.controller.enabled = !event.value;\n        });\n        const renderer = Renderer.Create({\n            antialias: true,\n            canvas: canvas\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0x3c3c3c);\n        renderer.setAnimationLoop(()=>{\n            const dt = this.clock.getDelta();\n            this.update(dt);\n        });\n        window.addEventListener(\"resize\", (event)=>{\n            this.camera.aspect = window.innerWidth / window.innerHeight;\n            this.camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        });\n        this.createScene();\n    }\n}\ncustomElements.define(\"pallet-element\", PalletElement);\ncustomElements.define(\"pallet-engine\", PalletEngine);\nlet canvasElements = document.getElementsByTagName(\"canvas\");\nlet _module;\nif (canvasElements.length > 0) {\n    const canvas = canvasElements[0];\n    _module = new PalletEngine(canvas);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL1BhbGxldEVuZ2luZS9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVvQztBQUNPO0FBQ1E7QUFDUTtBQUUxRixJQUFJTyxhQUF1QjtBQUMzQixJQUFJQyxXQUEyQixJQUFJUiwwQ0FBYTtBQUVoRCw4QkFBOEI7QUFDOUJBLGlEQUFvQixDQUFDVyxTQUFTLENBQUNQLGlCQUFpQixHQUFHQSw2REFBaUJBO0FBQ3BFSixpREFBb0IsQ0FBQ1csU0FBUyxDQUFDTixpQkFBaUIsR0FBR0EsNkRBQWlCQTtBQUNwRUwsdUNBQVUsQ0FBQ1csU0FBUyxDQUFDRSxPQUFPLEdBQUdQLDhEQUFrQkE7O1VBRTVDUTs7OztHQUFBQSxvQkFBQUE7QUFFTCxTQUFTQyxpQkFBa0JDLE1BQU0sRUFBR0MsSUFBSTtJQUNwQyxJQUFJRCxPQUFPRSxNQUFNLFlBQVlELE1BQU87UUFDaEMsT0FBT0QsT0FBT0UsTUFBTSxFQUFFLHNCQUFzQjtJQUNoRCxPQUFPLElBQUlGLE9BQU9FLE1BQU0sS0FBSyxNQUFNO1FBQy9CLE9BQU9ILGlCQUFpQkMsT0FBT0UsTUFBTSxFQUFFRCxPQUFRLHlCQUF5QjtJQUM1RSxPQUFPO1FBQ0gsT0FBTyxNQUFNLGtDQUFrQztJQUNuRDtBQUNKO0FBZ0JPLE1BQU1FO0lBR1RDLGFBQWMsQ0FFZDtBQUNKO0FBRUEsTUFBTUM7SUFLRkMsYUFBYSxDQUFDO0lBQ2RDLGVBQWUsQ0FBQztJQUNoQkMsZUFBZ0JDLENBQVUsRUFBRUMsQ0FBVSxFQUF1RDtZQUFyREMsU0FBQUEsaUVBQXlCQztRQUM3RHBCLFNBQVNpQixDQUFDLEdBQUcsSUFBTUksT0FBT0MsVUFBVSxHQUFLLElBQUk7UUFDN0N0QixTQUFTa0IsQ0FBQyxHQUFHLENBQUlBLENBQUFBLElBQUlHLE9BQU9FLFdBQVcsSUFBSyxJQUFJO1FBQ2hELElBQUtKLFFBQVNBLE9BQU9LLElBQUksQ0FBRXhCO1FBQzNCLE9BQU9BO0lBQ1g7SUFWQVks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QWN0QjtBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9QYWxsZXRFbmdpbmUvbW9kdWxlLnRzPzZjMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgKiBhcyBkYXQgZnJvbSAnZGF0Lmd1aSc7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJztcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcclxuaW1wb3J0IHsgVHJhbnNmb3JtQ29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvVHJhbnNmb3JtQ29udHJvbHMnO1xyXG5pbXBvcnQgeyBjb21wdXRlQm91bmRzVHJlZSwgZGlzcG9zZUJvdW5kc1RyZWUsIGFjY2VsZXJhdGVkUmF5Y2FzdCB9IGZyb20gJ3RocmVlLW1lc2gtYnZoJztcclxuXHJcbmxldCBfdXNlV2ViR1BVIDogQm9vbGVhbiA9IGZhbHNlO1xyXG5sZXQgX3BvaW50ZXIgOiBUSFJFRS5WZWN0b3IyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbi8vIHJlcGxhY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uc1xyXG5USFJFRS5CdWZmZXJHZW9tZXRyeS5wcm90b3R5cGUuY29tcHV0ZUJvdW5kc1RyZWUgPSBjb21wdXRlQm91bmRzVHJlZTtcclxuVEhSRUUuQnVmZmVyR2VvbWV0cnkucHJvdG90eXBlLmRpc3Bvc2VCb3VuZHNUcmVlID0gZGlzcG9zZUJvdW5kc1RyZWU7XHJcblRIUkVFLk1lc2gucHJvdG90eXBlLnJheWNhc3QgPSBhY2NlbGVyYXRlZFJheWNhc3Q7XHJcblxyXG5lbnVtIFBvd2VyUHJlZmVyZW5jZSB7IEhpZ2hQZXJmb3JtYW5jZSA9IFwiaGlnaC1wZXJmb3JtYW5jZVwiLCBMb3dQb3dlciA9IFwibG93LXBvd2VyXCIsIERlZmF1bHQgPSBcImRlZmF1bHRcIiB9O1xyXG5cclxuZnVuY3Rpb24gZmluZFBhcmVudEJ5VHlwZSggb2JqZWN0ICwgdHlwZSApIHtcclxuICAgIGlmIChvYmplY3QucGFyZW50IGluc3RhbmNlb2YgdHlwZSApIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0LnBhcmVudDsgLy8g67aA66qoIOyalOyGjOqwgCDtlbTri7kg7YOA7J6F7J24IOqyveyasCDrsJjtmZhcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50QnlUeXBlKG9iamVjdC5wYXJlbnQsIHR5cGUgKTsgLy8g7YOA7J6F7J20IOyVhOuLjCDqsr3smrAg67aA66qoIOyalOyGjOuhnCDsnqzqt4Ag7Zi47LacXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsOyAvLyDstZzsg4HsnIQg67aA66qoIOyalOyGjOyXkCDrj4Tri6ztlaAg65WM6rmM7KeAIO2DgOyeheydhCDssL7sp4Ag66q77ZWcIOqyveyasFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZW5kZXJPcHRpb25zID0ge1xyXG4gICAgY2FudmFzIDogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBjb250ZXh0IDogUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIGFscGhhIDogYm9vbGVhbixcclxuICAgIHByZWNpc2lvbiA6IHN0cmluZyxcclxuICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGJvb2xlYW4sXHJcbiAgICBhbnRpYWxpYXMgOiBib29sZWFuLFxyXG4gICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlciA6IGJvb2xlYW4sXHJcbiAgICBkZXB0aCA6IGJvb2xlYW4sXHJcbiAgICBzdGVuY2lsIDogYm9vbGVhbixcclxuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlciA6IGJvb2xlYW4sXHJcbiAgICBwb3dlclByZWZlcmVuY2UgOiBQb3dlclByZWZlcmVuY2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1hbmQge1xyXG4gICAgY29tbWFuZCA6IHN0cmluZztcclxuICAgIHBhcmFtZXRlciA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW50ZXJhY3Rpb25Db250cm9sbGVyIHtcclxuICAgIHJheWNhc3RlciA6IFRIUkVFLlJheWNhc3RlcjtcclxuICAgIGNvbnN0cnVjdG9yKCBvcHRpb24gOiBPYmplY3QgKSB7XHJcbiAgICAgICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbiAgICB9ICAgIFxyXG4gICAgZHJhd0hlbHBlcigpIHt9XHJcbiAgICBjb25uZWN0RXZlbnQoKSB7fVxyXG4gICAgZ2V0Vmlld3BvcnRQb3MoIHggOiBudW1iZXIsIHkgOiBudW1iZXIsIHRhcmdldCA6IFRIUkVFLlZlY3RvcjIgPSB1bmRlZmluZWQgKSA6IFRIUkVFLlZlY3RvcjIge1xyXG4gICAgICAgIF9wb2ludGVyLnggPSAoIHggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDE7XHJcbiAgICAgICAgX3BvaW50ZXIueSA9IC0gKCB5IC8gd2luZG93LmlubmVySGVpZ2h0ICkgKiAyICsgMTtcclxuICAgICAgICBpZiAoIHRhcmdldCApIHRhcmdldC5jb3B5KCBfcG9pbnRlciApO1xyXG4gICAgICAgIHJldHVybiBfcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGVza3RvcElSQyBleHRlbmRzIEludGVyYWN0aW9uQ29udHJvbGxlciB7XHJcbiAgICBjb250cm9scyA6IFRyYW5zZm9ybUNvbnRyb2xzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SGVscGVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0RXZlbnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmNvbnRyb2xzLmF4aXMgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggdGhpcy5nZXRWaWV3cG9ydFBvcyggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApLCBfbW9kdWxlLmNhbWVyYSApO1xyXG4gICAgICAgICAgICBjb25zdCBoaXRzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KCBfbW9kdWxlLnNjZW5lR3JhcGgsIHRydWUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkhhbmRsZUludGVyc2VjdGlvbiggaGl0cyA6IEFycmF5PGFueT4gKSB7XHJcbiAgICAgICAgY29uc3QgaGl0TWVzaGVzID0gaGl0cy5maWx0ZXIoIGggPT4gaC5vYmplY3QuaXNNZXNoICYmICEgKCBmaW5kUGFyZW50QnlUeXBlKCBoLm9iamVjdCwgVHJhbnNmb3JtQ29udHJvbHMgKSApICk7XHJcblxyXG4gICAgICAgIGlmICggaGl0TWVzaGVzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmluZFBhcmVudEJ5VHlwZSggaGl0TWVzaGVzWyAwIF0ub2JqZWN0LCBUSFJFRS5Hcm91cCApO1xyXG4gICAgICAgICAgICBpZiAoIGdyb3VwICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9scy5hdHRhY2goIGdyb3VwICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmF0dGFjaCggaGl0TWVzaGVzWzBdLm9iamVjdCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZGV0YWNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb250cm9scyggY2FtZXJhLCBjYW52YXMgKSA6IFRyYW5zZm9ybUNvbnRyb2xzIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IFRyYW5zZm9ybUNvbnRyb2xzKCBjYW1lcmEsIGNhbnZhcyApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBWaXJ0dWFsUmVhbGl0eUlSQyBleHRlbmRzIEludGVyYWN0aW9uQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigge30gKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29tbWFuZFF1ZXVlIHsgXHJcbiAgICBhcnJheSA6IEFycmF5PENvbW1hbmQ+O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFycmF5ID0gbmV3IEFycmF5PENvbW1hbmQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbXB0eSgpIDogQm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIHRoaXMuaXNFbXB0eSgpICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcblxyXG4gICAgcm9vdCA6IFRIUkVFLlNjZW5lO1xyXG4gICAgYW5pbWF0aW9uT2JqZWN0cyA6IFRIUkVFLkdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uT2JqZWN0cyA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHRTY2VuZSgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBzdGF0aWMgcmVuZGVyZXIgOiBUSFJFRS5XZWJHTFJlbmRlcmVyID0gbnVsbDtcclxuICAgIHN0YXRpYyBjYW52YXMgOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XHJcbiAgICBzdGF0aWMgb3B0aW9uIDogUmVuZGVyT3B0aW9ucyA9IHsgYWxwaGE6IHRydWUgfSBhcyBSZW5kZXJPcHRpb25zO1xyXG4gICAgc3RhdGljIEdldCgpIHtcclxuICAgICAgICBpZiAoICEgUmVuZGVyZXIucmVuZGVyZXIgKSB7XHJcbiAgICAgICAgICAgIFJlbmRlcmVyLkNyZWF0ZSgge30gYXMgUmVuZGVyT3B0aW9ucyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVuZGVyZXIucmVuZGVyZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENyZWF0ZSggb3B0IDogUmVuZGVyT3B0aW9ucyApIDogVEhSRUUuV2ViR0xSZW5kZXJlciB7XHJcbiAgICAgICAgUmVuZGVyZXIucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggb3B0ICk7XHJcbiAgICAgICAgcmV0dXJuIFJlbmRlcmVyLnJlbmRlcmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBBbmltYXRpb25Mb29wKCBmdW5jIDogRnVuY3Rpb24gKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBhbGxldEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7ICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbGxldEVuZ2luZSBleHRlbmRzIFBhbGxldEVsZW1lbnQge1xyXG4gICAgXHJcbiAgICBzY2VuZUdyYXBoIDogVEhSRUUuU2NlbmU7XHJcbiAgICBjYW1lcmEgOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHQgOiBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0O1xyXG4gICAgYW1iaWVudExpZ2h0IDogVEhSRUUuQW1iaWVudExpZ2h0O1xyXG4gICAgZ2x0ZkxvYWRlciA6IEdMVEZMb2FkZXI7XHJcbiAgICBjbG9jayA6IFRIUkVFLkNsb2NrO1xyXG4gICAgY29udHJvbGxlciA6IE9yYml0Q29udHJvbHM7XHJcbiAgICB1cGRhdGVGdW5jdGlvbnMgOiBBcnJheTxGdW5jdGlvbj47XHJcbiAgICBjb21tYW5kUXVldWUgOiBDb21tYW5kUXVldWU7XHJcbiAgICBpcmMgOiBJbnRlcmFjdGlvbkNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoIGNhbnZhcyA6IEhUTUxDYW52YXNFbGVtZW50ICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwICk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZmZmZmZmLCAxMCApO1xyXG4gICAgICAgIHRoaXMuYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCggMHhmZmY4ZTggKTtcclxuICAgICAgICB0aGlzLmdsdGZMb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG4gICAgICAgIHRoaXMuY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgT3JiaXRDb250cm9scyggdGhpcy5jYW1lcmEsIGNhbnZhcyApO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5lbmFibGVEYW1waW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZGFtcGluZ0ZhY3RvciA9IDAuMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZSA9IG5ldyBDb21tYW5kUXVldWUoKTtcclxuICAgICAgICB0aGlzLmlyYyA9IG5ldyBEZXNrdG9wSVJDKCk7XHJcbiAgICAgICAgdGhpcy5pcmMuY29ubmVjdEV2ZW50KCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZXIgPSAoIHRoaXMuaXJjIGFzIERlc2t0b3BJUkMgKS5jcmVhdGVDb250cm9scyggdGhpcy5jYW1lcmEsIGNhbnZhcyApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVHcmFwaC5hZGQoIHRyYW5zZm9ybWVyICk7XHJcbiAgICAgICAgdHJhbnNmb3JtZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2RyYWdnaW5nLWNoYW5nZWQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5lbmFibGVkID0gISBldmVudC52YWx1ZTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gUmVuZGVyZXIuQ3JlYXRlKCB7IGFudGlhbGlhczogdHJ1ZSwgY2FudmFzOiBjYW52YXMgfSBhcyBSZW5kZXJPcHRpb25zICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4M2MzYzNjICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcCggKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkdCA9IHRoaXMuY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoIGR0ICk7XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuICAgICAgICB9IClcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNjZW5lKCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWRIZWxwZXIgOiBUSFJFRS5HcmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoIDUwLCA1MCwgMHg3YzdjN2MsIDB4NWY1ZjVmICk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KCAwLCAwLCA1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggZ3JpZEhlbHBlciApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVHcmFwaC5hZGQoIHRoaXMuZGlyZWN0aW9uYWxMaWdodCApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVHcmFwaC5hZGQoIHRoaXMuYW1iaWVudExpZ2h0ICk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRlbXBvcmFsIG9iamVjdFxyXG5cclxuICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMSwgMSwgMSApLCBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmZkZmJhIH0gKSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVHcmFwaC5hZGQoIGN1YmUgKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMucHVzaCggKCBkZWx0YSApID0+IHsgXHJcbiAgICAgICAgICAgIGN1YmUucm90YXRpb24ueCArPSAwLjAxO1xyXG4gICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcclxuICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbnZpcm9ubWVudCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEdMVEYoIHVybCA6IHN0cmluZywgb25sb2FkIDogRnVuY3Rpb24gKSB7XHJcbiAgICAgICAgdGhpcy5nbHRmTG9hZGVyLmxvYWQoIHVybCAsIGdsdGYgPT4ge1xyXG4gICAgICAgICAgICBvbmxvYWQoIGdsdGYgKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZUdyYXBoLmFkZCggZ2x0Zi5zY2VuZSApO1xyXG4gICAgICAgIH0sIC8qIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKi8gKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoIGR0IDogTnVtYmVyICkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLm1hcCggZnVuYyA9PiBmdW5jKCBkdCApICk7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICBSZW5kZXJlci5HZXQoKS5yZW5kZXIoIHRoaXMuc2NlbmVHcmFwaCwgdGhpcy5jYW1lcmEgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVcGRhdG9yKCBmdW5jIDogRnVuY3Rpb24gKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMucHVzaCggZnVuYyApO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENvbW1hbmQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoICdwYWxsZXQtZWxlbWVudCcsIFBhbGxldEVsZW1lbnQgKTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCAncGFsbGV0LWVuZ2luZScsIFBhbGxldEVuZ2luZSApO1xyXG5cclxuXHJcbmxldCBjYW52YXNFbGVtZW50cyA6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTENhbnZhc0VsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycgKTtcclxuZXhwb3J0IGxldCBfbW9kdWxlIDogUGFsbGV0RW5naW5lO1xyXG5cclxuaWYgKCBjYW52YXNFbGVtZW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzRWxlbWVudHNbIDAgXTtcclxuICAgIF9tb2R1bGUgPSBuZXcgUGFsbGV0RW5naW5lKCBjYW52YXMgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVEhSRUUiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlRyYW5zZm9ybUNvbnRyb2xzIiwiY29tcHV0ZUJvdW5kc1RyZWUiLCJkaXNwb3NlQm91bmRzVHJlZSIsImFjY2VsZXJhdGVkUmF5Y2FzdCIsIl91c2VXZWJHUFUiLCJfcG9pbnRlciIsIlZlY3RvcjIiLCJCdWZmZXJHZW9tZXRyeSIsInByb3RvdHlwZSIsIk1lc2giLCJyYXljYXN0IiwiUG93ZXJQcmVmZXJlbmNlIiwiZmluZFBhcmVudEJ5VHlwZSIsIm9iamVjdCIsInR5cGUiLCJwYXJlbnQiLCJDb21tYW5kIiwiY29uc3RydWN0b3IiLCJJbnRlcmFjdGlvbkNvbnRyb2xsZXIiLCJkcmF3SGVscGVyIiwiY29ubmVjdEV2ZW50IiwiZ2V0Vmlld3BvcnRQb3MiLCJ4IiwieSIsInRhcmdldCIsInVuZGVmaW5lZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvcHkiLCJvcHRpb24iLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJEZXNrdG9wSVJDIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250cm9scyIsImF4aXMiLCJzZXRGcm9tQ2FtZXJhIiwiY2xpZW50WCIsImNsaWVudFkiLCJfbW9kdWxlIiwiY2FtZXJhIiwiaGl0cyIsImludGVyc2VjdE9iamVjdCIsInNjZW5lR3JhcGgiLCJvbkhhbmRsZUludGVyc2VjdGlvbiIsImhpdE1lc2hlcyIsImZpbHRlciIsImgiLCJpc01lc2giLCJsZW5ndGgiLCJlbmFibGVkIiwiZ3JvdXAiLCJHcm91cCIsImF0dGFjaCIsImRldGFjaCIsImNyZWF0ZUNvbnRyb2xzIiwiY2FudmFzIiwiVmlydHVhbFJlYWxpdHlJUkMiLCJDb21tYW5kUXVldWUiLCJpc0VtcHR5IiwiYXJyYXkiLCJ1cGRhdGUiLCJBcnJheSIsIlNjZW5lIiwiZGVmYXVsdFNjZW5lIiwicm9vdCIsImFuaW1hdGlvbk9iamVjdHMiLCJSZW5kZXJlciIsIkdldCIsInJlbmRlcmVyIiwiQ3JlYXRlIiwib3B0IiwiV2ViR0xSZW5kZXJlciIsIkFuaW1hdGlvbkxvb3AiLCJmdW5jIiwiYWxwaGEiLCJQYWxsZXRFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJQYWxsZXRFbmdpbmUiLCJjcmVhdGVTY2VuZSIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwicG9zaXRpb24iLCJzZXQiLCJhZGQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiY3ViZSIsIkJveEdlb21ldHJ5IiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsInVwZGF0ZUZ1bmN0aW9ucyIsInB1c2giLCJkZWx0YSIsInJvdGF0aW9uIiwiY3JlYXRlRW52aXJvbm1lbnQiLCJsb2FkR0xURiIsInVybCIsIm9ubG9hZCIsImdsdGZMb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjZW5lIiwiZHQiLCJtYXAiLCJjb21tYW5kUXVldWUiLCJjb250cm9sbGVyIiwicmVuZGVyIiwiYWRkVXBkYXRvciIsImFwcGVuZENvbW1hbmQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJBbWJpZW50TGlnaHQiLCJjbG9jayIsIkNsb2NrIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJpcmMiLCJ0cmFuc2Zvcm1lciIsInZhbHVlIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJzZXRBbmltYXRpb25Mb29wIiwiZ2V0RGVsdGEiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJjYW52YXNFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./PalletEngine/module.ts\n"));

/***/ })

});