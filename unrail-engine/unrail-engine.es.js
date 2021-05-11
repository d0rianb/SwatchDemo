var t = Object.defineProperty,
    e = Object.prototype.hasOwnProperty,
    i = Object.getOwnPropertySymbols,
    s = Object.prototype.propertyIsEnumerable,
    n = (e, i, s) => i in e ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[i] = s,
    o = (t, o) => { for (var r in o || (o = {})) e.call(o, r) && n(t, r, o[r]); if (i)
            for (var r of i(o)) s.call(o, r) && n(t, r, o[r]); return t };
class r { static random() { return Math.random() } static randint(t, e) { return Math.floor(t + Math.random() * (e - t)) } static choice(t) { return t[~~(r.random() * t.length)] } static bool() { return r.random() > .5 } static sign() { return r.choice([-1, 1]) } static percent(t) { return r.random() < t / 100 } }
var a = r;
class l { constructor(t, e) { this.x = t, this.y = e } add(t) { return new l(this.x + t.x, this.y + t.y) } clone() { return new l(this.x, this.y) } dist(t) { return Math.sqrt((this.x - t.x) ** 2 + (this.y - t.y) ** 2) } }
const c = l,
    h = new l(0, 0),
    d = new l(1, 1);

function u(t, e, i) { return Math.max(t, Math.min(e, i)) }

function p(t, e, i) { return u(e, t, i) === t }
var y, f;
(f = y || (y = {}))[f.KeyboardPressed = 0] = "KeyboardPressed", f[f.KeyboardDown = 1] = "KeyboardDown", f[f.Mouse = 2] = "Mouse", f[f.Window = 3] = "Window", f[f.Custom = 4] = "Custom";
class m { constructor(t, e, i = 4) { this.name = t, this.callback = e, this.type = i, this.listeners = [this.callback] } static emit(t, e) { const i = w.getCustomEvent(t);
        i && i.listeners.forEach((t => t(e))) } static on(t, e) { const i = w.getCustomEvent(t); if (i) i.listeners.push(e);
        else { const i = new m(t, e, 4);
            w.addEvent(i) } } static onKeyDown(t, e) { w.addEvent(new m(t, e, 1)) } static onKeyPressed(t, e) { w.addEvent(new m(t, e, 0)) } static onMouseClick(t) { w.addEvent(new m("click", t, 2)) } }
const w = new class { constructor() { this.windowEvents = [], this.keyboardDownEvents = [], this.keyboardPressedEvents = [], this.customEvents = [], this.currentKeyEvents = [] } init() { window.addEventListener("keydown", (t => { this.currentKeyEvents.find((e => e.code === t.code)) || this.currentKeyEvents.push(t), this.keyboardPressedEvents.forEach((e => { t.code === e.name && e.callback(t) })) })), window.addEventListener("keyup", (t => { this.currentKeyEvents.length && (this.currentKeyEvents = this.currentKeyEvents.filter((e => e.code !== t.code))) })) } addEvent(t) { switch (t.type) {
            case y.KeyboardDown:
                this.keyboardDownEvents.push(t);
            case y.KeyboardPressed:
                this.keyboardPressedEvents.push(t);
            case y.Mouse:
                break;
            case y.Window:
                this.windowEvents.push(t), this.bindEvents();
            case y.Custom:
                this.customEvents.push(t) } } getCustomEvent(t) { return this.customEvents.find((e => e.name === t)) } bindEvents() { this.windowEvents.forEach((t => window.addEventListener(t.name, t.callback))) } tick() { this.currentKeyEvents.length && this.keyboardDownEvents.forEach((t => { this.currentKeyEvents.forEach((e => { e.code === t.name && t.callback(e) })) })) } };
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var g, v = (function(t, e) { var i;
    t.exports = ((i = function() {
        function t(t) { return n.appendChild(t.dom), t }

        function e(t) { for (var e = 0; e < n.children.length; e++) n.children[e].style.display = e === t ? "block" : "none";
            s = t } var s = 0,
            n = document.createElement("div");
        n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", n.addEventListener("click", (function(t) { t.preventDefault(), e(++s % n.children.length) }), !1); var o = (performance || Date).now(),
            r = o,
            a = 0,
            l = t(new i.Panel("FPS", "#0ff", "#002")),
            c = t(new i.Panel("MS", "#0f0", "#020")); if (self.performance && self.performance.memory) var h = t(new i.Panel("MB", "#f08", "#201")); return e(0), { REVISION: 16, dom: n, addPanel: t, showPanel: e, begin: function() { o = (performance || Date).now() }, end: function() { a++; var t = (performance || Date).now(); if (c.update(t - o, 200), t > r + 1e3 && (l.update(1e3 * a / (t - r), 100), r = t, a = 0, h)) { var e = performance.memory;
                    h.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576) } return t }, update: function() { o = this.end() }, domElement: n, setMode: e } }).Panel = function(t, e, i) { var s = 1 / 0,
            n = 0,
            o = Math.round,
            r = o(window.devicePixelRatio || 1),
            a = 80 * r,
            l = 48 * r,
            c = 3 * r,
            h = 2 * r,
            d = 3 * r,
            u = 15 * r,
            p = 74 * r,
            y = 30 * r,
            f = document.createElement("canvas");
        f.width = a, f.height = l, f.style.cssText = "width:80px;height:48px"; var m = f.getContext("2d"); return m.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = i, m.fillRect(0, 0, a, l), m.fillStyle = e, m.fillText(t, c, h), m.fillRect(d, u, p, y), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(d, u, p, y), { dom: f, update: function(l, w) { s = Math.min(s, l), n = Math.max(n, l), m.fillStyle = i, m.globalAlpha = 1, m.fillRect(0, 0, a, u), m.fillStyle = e, m.fillText(o(l) + " " + t + " (" + o(s) + "-" + o(n) + ")", c, h), m.drawImage(f, d + r, u, p - r, y, d, u, p - r, y), m.fillRect(d + p - r, u, r, y), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(d + p - r, u, r, o((1 - l / w) * y)) } } }, i) }(g = { exports: {} }, g.exports), g.exports);

function x() { return { width: window.innerWidth, height: window.innerHeight } }

function b(t, e, i, s) { const n = i || window.devicePixelRatio || 1,
        o = document.createElement("canvas"); return 1 != n && (o.width = t * n, o.height = e * n, o.style.width = t + "px", o.style.height = e + "px", o.getContext("2d").setTransform(n, 0, 0, n, 0, 0)), s && (o.oncontextmenu = t => t.preventDefault()), o }

function E(t, e) { window.onload = () => { let i = document.querySelector(e);
        i || (i = document.createElement(e)), i.appendChild(t), document.querySelector("body").appendChild(i) } }
const S = { strokeStyle: "black", lineWidth: 2, lineJoin: "round", fillStyle: "transparent", globalAlpha: 1, globalCompositeOperation: "add" };
let k = 4;
try { k = 2 * (window.devicePixelRatio || 1) } catch (st) {}

function P(t) { return ~~(t * k) / k }
let C = null;
class M { static create(t, e) { const i = b(t, e); return E(i, "main"), M.setContext(i.getContext("2d")), i } static setContext(t) { C = t } static getContext() { return C } static style(t) { if (!C) throw new Error("Context has not been initialize. Please use Renderer.setContext"); const e = o(o({}, S), t); for (let i in e) C[i] !== e[i] && (C[i] = e[i]) } static clear(t) { t ? (M.style({ fillStyle: t }), C.fillRect(0, 0, C.canvas.width, C.canvas.height)) : C.clearRect(0, 0, C.canvas.width, C.canvas.height) } static line(t, e, i) { M.style(i), C.beginPath(), C.moveTo(P(t.x), P(t.y)), C.lineTo(P(e.x), P(e.y)), C.stroke() } static rect(t, e, i, s, n, o) { o || M.style(n); const [r, a, l, c] = [P(t), P(e), P(i), P(s)];
        C.fillRect(r, a, l, c), C.strokeRect(r, a, l, c) } static poly(t, e) { if (t.length) { M.style(e), C.beginPath(), C.moveTo(P(t[0].x), P(t[0].y)); for (let e = 1; e < t.length; e++) C.lineTo(P(t[e].x), P(t[e].y));
            C.stroke() } } static circle(t, e, i, s) { M.style(s), C.beginPath(), C.arc(P(t), P(e), i, 0, 2 * Math.PI), C.stroke() } static point(t, e, i) { M.circle(t, e, 5, i) } static rectSprite(t, e, i, s, n) { M.style({}), C.save(), C.translate(P(t + i / 2), P(e + s / 2)), C.scale(n.scale.x, n.scale.y), C.rotate(n.rotation), C.drawImage(n.image, P(i * n.offset.x - i / 2), P(s * n.offset.y - s / 2), P(i), P(s)), C.restore() } static circleSprite(t, e, i, s) { C.save(), C.beginPath(), C.arc(P(t), P(e), i, 0, 2 * Math.PI), C.clip(), M.rectSprite(t - i, e - i, 2 * i, 2 * i, s), C.restore() } static tint(t, e, i, s, n) { M.rect(e, i, s, n, { fillStyle: t, globalCompositeOperation: "multiply", globalAlpha: .25 }) } } class T { constructor(t, e) { this.title = t, this.content = e } }
let R = null,
    D = null,
    I = null;
const K = new Map;

function L(t, e, i) { D.postMessage(new T(t, e), i || []) }

function O(t, e) { L("render", { method: t, args: e }) } class j { static create(t, e) { return I = b(t, e, 1), j.transferTo(I, t, e), E(I, "main"), I } static transferTo(t, e, i) { R = t.transferControlToOffscreen(); let { clientWidth: s, clientHeight: n } = t; "offscreen" !== $.rendererType && $.setRendererType("offscreen"), j.initRenderWorker(e || s, i || n) } static initRenderWorker(t, e) { D = new Worker("./src/render/offscreen-renderer/renderer-worker.ts", { type: "module" }), L("initCanvas", { canvas: R, width: t, height: e, dpr: window.devicePixelRatio || 1 }, [R]), D.onmessage = t => { console.log("message from the worker : ", t.data) } } static style(t) { O("style", t) } static clear(t) { O("clear", t) } static line(t, e, i) { O("line", { point1: t, point2: e, obj: i }) } static rect(t, e, i, s, n, o) { O("rect", { x: t, y: e, width: i, height: s, obj: n, noStyle: o }) } static poly(t, e) { O("poly", { points: t, obj: e }) } static circle(t, e, i, s) { O("circle", { x: t, y: e, radius: i, obj: s }) } static point(t, e, i) { O("point", { x: t, y: e, obj: i }) } static rectSprite(t, e, i, s, n) { n.id in K ? O("rectSprite", { x: t, y: e, width: i, height: s, texture: K[n.id] }) : n.convertToBitmap().then((t => K[n.id] = t)) } static async circleSprite(t, e, i, s) { if (s.id in K) O("circleSprite", { x: t, y: e, radius: i, texture: K[s.id] });
        else { const n = await s.convertToBitmap();
            K[s.id] = n, O("circleSprite", { x: t, y: e, radius: i, texture: n }) } } static tint(t, e, i, s, n) { O("circle", { color: t, x: e, y: i, width: s, height: n }) } }
let W = 0;
class q { constructor(t, e) { if (!t) throw new Error("A source path to the resource must be provided");
        this.id = W++, this.image = new Image, this.image.src = t, this.size = new l(this.image.width, this.image.height), this.options = e || {}, this.rotation = this.options.rotation || 0, this.offset = this.options.offset || h, this.scale = this.options.scale || d } async convertToBitmap() { const t = await createImageBitmap(this.image); return o(o({}, this), { image: t }) } }
let A = [],
    U = 4;
const B = ["top-left", "top-right", "bottom-left", "bottom-right", "custom"];
class H { static addItem(t, e, i) { const s = { callback: t, position: e, options: i };
        A.push(s); const n = A.length;
        window.addEventListener("load", (() => H.addToDom(s, n))) } static init() { const t = document.createElement("div");
        t.classList.add("ue-interface", "ue-container"); for (let e of B) { const i = document.createElement("div");
            i.classList.add(e), t.appendChild(i) } document.body.appendChild(t) } static addToDom(t, e) { var i, s; const n = t.callback(),
            o = document.createElement("span");
        o.classList.add("ue-interface-items"), o.id = `item-${e}`, o.innerText = n, Object.entries(t.options || {}).forEach((([t, e]) => o.style[t] = e)), t.position ? null == (i = document.querySelector(`.ue-container > .${t.position}`)) || i.appendChild(o) : null == (s = document.querySelector(".ue-container > .custom")) || s.appendChild(o) } static update() { A.forEach(((t, e) => { const i = t.callback(),
                s = document.querySelector(`.ue-interface #item-${e+1}`);
            s && s.innerText !== i && (s.innerText = i) })) } static statsShift(t) { const e = document.querySelector(".top-left");
        e && (e.style.top = `${t}px`) } static setUpdateInterval(t) { U = t } static get updateInterval() { return U } }

function z() { const t = new v,
        e = document.createElement("div"); return e.classList.toggle("stats"), t.showPanel(0), e.appendChild(t.dom), document.body.appendChild(e), H.statsShift(48), t }
let N = "normal";
class $ { constructor(t, e) { this.name = t, this.env = e, this.tick = 0, this.stats = null, this.showStatsPanel = !0 } static setRendererType(t) { N = t } static get rendererType() { return N } toggleStats(t) { this.showStatsPanel = void 0 !== t ? t : !this.showStatsPanel, this.showStatsPanel ? this.stats = z() : (this.stats = null, document.querySelector(".stats") && document.querySelector(".stats").remove()) } setMainLoop(t) { this.gameLoop = t } update(t) { var e, i;
        null == (e = this.stats) || e.begin(), w.tick(), this.gameLoop(t), this.tick % H.updateInterval == 0 && H.update(), null == (i = this.stats) || i.end(), window.requestAnimationFrame((t => this.update(t))) } start() { if (!this.gameLoop) throw new Error("No game loop");
        window.addEventListener("DOMContentLoaded", (() => { this.name && (document.title = this.name), w.init(), H.init(), this.showStatsPanel && (this.stats = z()), this.update(0) })) } } class G { constructor(t, e) { this.width = t, this.height = e } update() {} render() {} } class F { constructor(t, e) { this.x = t, this.y = e } collide(t) { return !!(t.width && t.height && this.width && this.height) && (this.x < t.x + t.width && this.x + this.width > t.x && this.y < t.y + t.height && this.height + this.y > t.y) } update(...t) {} render(t, ...e) {} } class J extends F { constructor(t, e) { super(t, e) } update(...t) {} render(t, ...e) {} } class V { constructor(t, e) { this.delay = t, this.callback = e, window.setTimeout(this.callback, this.delay) } } class Q extends F { constructor(t, e, i = 5, s, n) { super(e.x, e.y), this.id = t, this.pos = e.clone(), this.angle = s && "random" != s ? s % 2 * Math.PI : Math.PI / 2 + 2 * Math.random() * Math.PI, this.velocity = new l(Math.random() * i * Math.cos(this.angle), Math.random() * i * Math.sin(this.angle)), this.color = n || "red", this.opacity = u(100, 255 * Math.random(), 255), this.radius = 2 } update() { this.velocity.y += .01, this.pos = this.pos.add(this.velocity), this.opacity-- } render() { switch ($.rendererType) {
            case "normal":
                M.circle(this.pos.x, this.pos.y, this.radius, { fillStyle: this.color, lineWidth: 1, globalAlpha: this.opacity / 255 }); break;
            case "offscreen":
                j.circle(this.pos.x, this.pos.y, this.radius, { fillStyle: this.color, lineWidth: 1, globalAlpha: this.opacity / 255 }) } } } class X { constructor(t, e, i, s) { this.pos = e, this.lifeDuration = i, this.particles = [], this.UUID = 100 * a.randint(1, 100); for (let n = 0; n < t; n++) { let t = new Q(this.UUID + n, this.pos);
            this.particles.push(t) } new V(this.lifeDuration, (() => { this.destroy(), s() })) } addParticles(t) { return t.concat(this.particles) } removeParticles(t) { const e = this.particles.length; return t.filter((t => !p(t.id, this.UUID, this.UUID + e))) } destroy() {} }
var Y, Z;
(Z = Y || (Y = {}))[Z.Turret = 0] = "Turret", Z[Z.Road = 1] = "Road", Z[Z.Ground = 2] = "Ground", Z[Z.Empty = 3] = "Empty";
class _ { constructor(t, e) { this.rows = e, this.cols = t, this.cells = [], this.focusCell = null, this.createCells(), this.defineNeighboors() } createCells() { for (let t = 0; t < this.cols; t++)
            for (let e = 0; e < this.rows; e++) this.cells.push(new tt(t, e)) } updateCell(t) { if (this.cells.includes(t)) { if (1 !== t.width || 1 !== t.height) { if (t.width > 1) { let e = t.width - 1,
                        i = this.cells.filter((i => i.y === t.y && i.x > t.x && i.x <= t.x + e));
                    this.cells = this.cells.filter((t => !i.includes(t))) } if (t.height > 1) { let e = t.height - 1,
                        i = this.cells.filter((i => i.x === t.x && i.y > t.y && i.y <= t.y + e));
                    this.cells = this.cells.filter((t => !i.includes(t))) } } this.defineNeighboors(), this.cells[this.cells.indexOf(t)] = t } } defineNeighboors() { this.cells.forEach((t => { t.neighboor.top = t.y >= 1 ? this.cells.filter((e => e.x <= t.x && e.x + e.width > t.x && e.y === t.y - t.height))[0] : null, t.neighboor.bottom = t.y <= this.rows - 1 ? this.cells.filter((e => e.x <= t.x && e.x + e.width > t.x && e.y === t.y + t.height))[0] : null, t.neighboor.left = t.x >= 1 ? this.cells.filter((e => e.y <= t.y && e.y + e.height > t.y && e.x === t.x - t.width))[0] : null, t.neighboor.right = t.x <= this.cols - 1 ? this.cells.filter((e => e.y <= t.y && e.y + e.height > t.y && e.x === t.x + t.width))[0] : null })) } } class tt { constructor(t, e, i = 1, s = 1) { this.x = t, this.y = e, this.width = i, this.height = s, this.highlight = !1, this.type = 2, this.neighboor = {} } toggleHighlight() { this.highlight = !this.highlight } }
const et = {},
    it = "0.1.1";
export { tt as Cell, et as Config, V as Cooldown, m as Event, $ as Game, G as GameEnvironement, F as GameObject, _ as Grid, H as Interface, j as OffscreenRenderer, Q as Particle, X as ParticuleGenerator, J as PlayerObject, c as Point, a as Random, M as Renderer, q as Texture, it as VERSION, h as V_NULL, d as V_UNIT, l as Vector2, u as clamp, b as createCanvas, x as getWindowDimensions, p as inRange };