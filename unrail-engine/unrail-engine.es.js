var t = Object.defineProperty,
    e = Object.defineProperties,
    i = Object.getOwnPropertyDescriptors,
    s = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable,
    l = (e, i, s) => i in e ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[i] = s,
    o = (t, e) => { for (var i in e || (e = {})) n.call(e, i) && l(t, i, e[i]); if (s)
            for (var i of s(e)) a.call(e, i) && l(t, i, e[i]); return t };
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
class d { static random() { return Math.random() } static randint(t, e) { return Math.floor(t + Math.random() * (e - t)) } static choice(t) { return t[~~(d.random() * t.length)] } static bool() { return d.random() > .5 } static sign() { return d.choice([-1, 1]) } static percent(t) { return d.random() < t / 100 } }
var c = d;
class r { constructor(t, e) { this.x = t, this.y = e } add(t) { return new r(this.x + t.x, this.y + t.y) } clone() { return new r(this.x, this.y) } dist(t) { return Math.sqrt((this.x - t.x) ** 2 + (this.y - t.y) ** 2) } }
const h = r,
    u = new r(0, 0),
    p = new r(1, 1);

function m(t, e, i) { return Math.max(t, Math.min(e, i)) }

function y(t, e, i) { return m(e, t, i) === t }
var b, Z;
(Z = b || (b = {}))[Z.KeyboardPressed = 0] = "KeyboardPressed", Z[Z.KeyboardDown = 1] = "KeyboardDown", Z[Z.Mouse = 2] = "Mouse", Z[Z.Window = 3] = "Window", Z[Z.Custom = 4] = "Custom", Z[Z.All = 5] = "All";
class g { constructor(t, e, i = 4) { this.name = t, this.callback = e, this.type = i, this.listeners = [this.callback] } static emit(t, e) { const i = x.getCustomEvent(t);
        i && i.listeners.forEach((t => t(e))) } static on(t, e) { const i = x.getCustomEvent(t); if (i) i.listeners.push(e);
        else { const i = new g(t, e, 4);
            x.addEvent(i) } } static onKeyDown(t, e) { x.addEvent(new g(t, e, 1)) } static onKeyPressed(t, e) { x.addEvent(new g(t, e, 0)) } static onMouseClick(t) { x.addEvent(new g("click", t, 2)) } static onMouseMove(t) { x.addEvent(new g("mousemove", t, 2)) } }
const x = new class { constructor() { this.windowEvents = [], this.customEvents = [], this.mouseEvents = [], this.keyboardDownEvents = [], this.keyboardPressedEvents = [], this.currentKeyEvents = [] } init() { window.addEventListener("keydown", (t => { this.currentKeyEvents.find((e => e.code === t.code)) || this.currentKeyEvents.push(t), this.keyboardPressedEvents.forEach((e => { t.code === e.name && e.callback(t) })) })), window.addEventListener("keyup", (t => { this.currentKeyEvents.length && (this.currentKeyEvents = this.currentKeyEvents.filter((e => e.code !== t.code))) })), this.bindEvents() } addEvent(t) { switch (t.type) {
            case b.KeyboardDown:
                this.keyboardDownEvents.push(t); break;
            case b.KeyboardPressed:
                this.keyboardPressedEvents.push(t); break;
            case b.Mouse:
                this.mouseEvents.push(t), window.addEventListener(t.name, (e => t.callback(e))); break;
            case b.Window:
                this.windowEvents.push(t), this.bindEvents(); break;
            case b.Custom:
                this.customEvents.push(t) } } getCustomEvent(t) { return this.customEvents.find((e => e.name === t)) } bindEvents() { this.windowEvents.forEach((t => window.addEventListener(t.name, t.callback))) } tick() { this.currentKeyEvents.length && this.keyboardDownEvents.forEach((t => { this.currentKeyEvents.forEach((e => { e.code === t.name && t.callback(e) })) })) } };
const f = new class { constructor() { this.hasStarted = !1, this.animations = [] } add(t) { this.animations.push(t), this.hasStarted && t.options.autostart && t.start() } init() { this.hasStarted = !0; for (let t of this.animations) t.options.autostart && t.start() } tick(t) { for (let e of this.animations) e.update(t) } };
var G, w = { exports: {} },
    W = w.exports = ((G = function() {
        function t(t) { return s.appendChild(t.dom), t }

        function e(t) { for (var e = 0; e < s.children.length; e++) s.children[e].style.display = e === t ? "block" : "none";
            i = t } var i = 0,
            s = document.createElement("div");
        s.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", s.addEventListener("click", (function(t) { t.preventDefault(), e(++i % s.children.length) }), !1); var n = (performance || Date).now(),
            a = n,
            l = 0,
            o = t(new G.Panel("FPS", "#0ff", "#002")),
            d = t(new G.Panel("MS", "#0f0", "#020")); if (self.performance && self.performance.memory) var c = t(new G.Panel("MB", "#f08", "#201")); return e(0), { REVISION: 16, dom: s, addPanel: t, showPanel: e, begin: function() { n = (performance || Date).now() }, end: function() { l++; var t = (performance || Date).now(); if (d.update(t - n, 200), t > a + 1e3 && (o.update(1e3 * l / (t - a), 100), a = t, l = 0, c)) { var e = performance.memory;
                    c.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576) } return t }, update: function() { n = this.end() }, domElement: s, setMode: e } }).Panel = function(t, e, i) { var s = 1 / 0,
            n = 0,
            a = Math.round,
            l = a(window.devicePixelRatio || 1),
            o = 80 * l,
            d = 48 * l,
            c = 3 * l,
            r = 2 * l,
            h = 3 * l,
            u = 15 * l,
            p = 74 * l,
            m = 30 * l,
            y = document.createElement("canvas");
        y.width = o, y.height = d, y.style.cssText = "width:80px;height:48px"; var b = y.getContext("2d"); return b.font = "bold " + 9 * l + "px Helvetica,Arial,sans-serif", b.textBaseline = "top", b.fillStyle = i, b.fillRect(0, 0, o, d), b.fillStyle = e, b.fillText(t, c, r), b.fillRect(h, u, p, m), b.fillStyle = i, b.globalAlpha = .9, b.fillRect(h, u, p, m), { dom: y, update: function(d, Z) { s = Math.min(s, d), n = Math.max(n, d), b.fillStyle = i, b.globalAlpha = 1, b.fillRect(0, 0, o, u), b.fillStyle = e, b.fillText(a(d) + " " + t + " (" + a(s) + "-" + a(n) + ")", c, r), b.drawImage(y, h + l, u, p - l, m, h, u, p - l, m), b.fillRect(h + p - l, u, l, m), b.fillStyle = i, b.globalAlpha = .9, b.fillRect(h + p - l, u, l, a((1 - d / Z) * m)) } } }, G);

function S() { return { width: window.innerWidth, height: window.innerHeight } }

function L(t) { return { width: t.clientWidth || t.width, height: t.clientHeight || t.height } }

function v(t, e, i, s) { const n = document.createElement("canvas"); return C(n, t, e, i), s && (n.oncontextmenu = t => t.preventDefault()), n }

function C(t, e, i, s) { const n = s || window.devicePixelRatio || 1; let a = e || L(t).width,
        l = i || L(t).height;
    t.width = a * n, t.height = l * n, t.style.width = a + "px", t.style.height = l + "px", 1 != n && t.getContext("2d").setTransform(n, 0, 0, n, 0, 0) }

function k(t, e) { window.addEventListener("DOMContentLoaded", (() => { let i = document.querySelector(e);
        i || (i = document.createElement(e)), i.appendChild(t), document.querySelector("body").appendChild(i) })) } String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1) };
class Y extends Error { constructor(t, e) { super(e ? `[${e.capitalize()}] - ${t}` : t), this.name = "EngineFailure" } } class H extends Y { constructor(t) { super(t, "renderer") } }
const R = { strokeStyle: "black", lineWidth: 2, lineJoin: "round", fillStyle: "transparent", globalAlpha: 1, globalCompositeOperation: "add" },
    X = { font: "Roboto", size: 16, color: "black" },
    V = 2 * Math.PI;
let K, I, N, J, F, M = null == self.document && null == self.window ? 4 : 2 * (window.devicePixelRatio || 1);

function E(t) { return ~~(t * M) / M } class U { static create(t, e) { let [i, s] = [S().width, S().height]; const n = v(t || i, e || s); return k(n, "main"), U.setContext(n.getContext("2d")), n } static createFromCanvas(t) { let e = document.querySelector(t); if (!(e && e instanceof HTMLCanvasElement)) throw new H("The selected element is not a canvas"); return C(e), U.setContext(e.getContext("2d")), e } static setContext(t) { K = t } static getContext() { return K } static style(t) { if (!K) throw new H("Context has not been initialize. Please use Renderer.setContext"); const e = o(o({}, R), t); if (e !== I) { for (let t in e) K[t] !== e[t] && (K[t] = e[t]);
            I = e } } static clear(t) { t ? (U.style({ fillStyle: t }), K.fillRect(0, 0, K.canvas.width, K.canvas.height)) : K.clearRect(0, 0, K.canvas.width, K.canvas.height) } static line(t, e, i, s, n) { U.style(n), K.beginPath(), K.moveTo(E(t), E(e)), K.lineTo(E(i), E(s)), K.stroke() } static rect(t, e, i, s, n) { U.style(n); const [a, l, o, d] = [E(t), E(e), E(i), E(s)];
        K.fillRect(a, l, o, d), K.strokeRect(a, l, o, d) } static rectFromCenter(t, e, i, s, n) { return U.rect(t - i / 2, e - s / 2, i, s, n) } static rectFromPoints(t, e, i, s, n) { return U.rect(t, e, i - t, s - e, n) } static poly(t, e) { if (t.length) { U.style(e), K.beginPath(), K.moveTo(E(t[0].x), E(t[0].y)); for (let e = 1; e < t.length; e++) K.lineTo(E(t[e].x), E(t[e].y));
            K.stroke() } } static circle(t, e, i, s) { U.style(s), K.beginPath(), K.arc(E(t), E(e), i, 0, V), K.fill(), K.stroke() } static circleFromRect(t, e, i, s, n) { return U.circle(t + i / 2, e + s / 2, Math.min(i, s) / 2, n) } static point(t, e, i) { U.circle(t, e, 5, i) } static rectSprite(t, e, i, s, n) { U.style({}), K.save(), K.translate(E(t + i / 2), E(e + s / 2)), K.scale(n.scale.x, n.scale.y), K.rotate(n.rotation), K.drawImage(n.image, E(i * n.offset.x - i / 2), E(s * n.offset.y - s / 2), E(i), E(s)), K.restore() } static circleSprite(t, e, i, s) { K.save(), K.beginPath(), K.arc(E(t), E(e), i, 0, V), K.clip(), U.rectSprite(t - i, e - i, 2 * i, 2 * i, s), K.restore() } static text(t, e, i, s) { if (K) { let t = o(o({}, X), s);
            K.font = `${t.size}px ${t.font}`, U.style({ fillStyle: t.color }) } K.fillText(t, e, i) } static tint(t, e, i, s, n) { U.rect(e, i, s, n, { fillStyle: t, globalCompositeOperation: "multiply", globalAlpha: .25 }) } static beginFrame(t) { U.clear(t) } static endFrame() {} } class z { constructor(t, e) { this.title = t, this.content = e } } class Q { constructor(t, e) { this.methodName = t, this.args = e } }

function T() { return new Worker("data:application/javascript;base64,dmFyIGU9T2JqZWN0LmRlZmluZVByb3BlcnR5LHQ9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxpPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1PYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLHM9KHQsaSxyKT0+aSBpbiB0P2UodCxpLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpyfSk6dFtpXT1yLG49KGUsbik9Pntmb3IodmFyIGEgaW4gbnx8KG49e30pKWkuY2FsbChuLGEpJiZzKGUsYSxuW2FdKTtpZih0KWZvcih2YXIgYSBvZiB0KG4pKXIuY2FsbChuLGEpJiZzKGUsYSxuW2FdKTtyZXR1cm4gZX07ZnVuY3Rpb24gYSgpe3JldHVybnt3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aCxoZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0fX1mdW5jdGlvbiBjKGUpe3JldHVybnt3aWR0aDplLmNsaWVudFdpZHRofHxlLndpZHRoLGhlaWdodDplLmNsaWVudEhlaWdodHx8ZS5oZWlnaHR9fWZ1bmN0aW9uIG8oZSx0LGkscil7Y29uc3Qgcz1yfHx3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MTtsZXQgbj10fHxjKGUpLndpZHRoLGE9aXx8YyhlKS5oZWlnaHQ7ZS53aWR0aD1uKnMsZS5oZWlnaHQ9YSpzLGUuc3R5bGUud2lkdGg9bisicHgiLGUuc3R5bGUuaGVpZ2h0PWErInB4IiwxIT1zJiZlLmdldENvbnRleHQoIjJkIikuc2V0VHJhbnNmb3JtKHMsMCwwLHMsMCwwKX1TdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0aGlzLnNsaWNlKDEpfTtjbGFzcyBsIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSx0KXtzdXBlcih0P2BbJHt0LmNhcGl0YWxpemUoKX1dIC0gJHtlfWA6ZSksdGhpcy5uYW1lPSJFbmdpbmVGYWlsdXJlIn19Y2xhc3MgaCBleHRlbmRzIGx7Y29uc3RydWN0b3IoZSl7c3VwZXIoZSwicmVuZGVyZXIiKX19Y29uc3QgZD17c3Ryb2tlU3R5bGU6ImJsYWNrIixsaW5lV2lkdGg6MixsaW5lSm9pbjoicm91bmQiLGZpbGxTdHlsZToidHJhbnNwYXJlbnQiLGdsb2JhbEFscGhhOjEsZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOiJhZGQifSx1PXtmb250OiJSb2JvdG8iLHNpemU6MTYsY29sb3I6ImJsYWNrIn0sZj0yKk1hdGguUEk7bGV0IHgsZyxwPW51bGw9PXNlbGYuZG9jdW1lbnQmJm51bGw9PXNlbGYud2luZG93PzQ6Miood2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpO2Z1bmN0aW9uIHkoZSl7cmV0dXJufn4oZSpwKS9wfWNsYXNzIGJ7c3RhdGljIGNyZWF0ZShlLHQpe2xldFtpLHJdPVthKCkud2lkdGgsYSgpLmhlaWdodF07Y29uc3Qgcz1mdW5jdGlvbihlLHQsaSxyKXtjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImNhbnZhcyIpO3JldHVybiBvKHMsZSx0LGkpLHImJihzLm9uY29udGV4dG1lbnU9ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpKSxzfShlfHxpLHR8fHIpO3JldHVybiBmdW5jdGlvbihlLHQpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIiwoKCk9PntsZXQgaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpO2l8fChpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCkpLGkuYXBwZW5kQ2hpbGQoZSksZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiYm9keSIpLmFwcGVuZENoaWxkKGkpfSkpfShzLCJtYWluIiksYi5zZXRDb250ZXh0KHMuZ2V0Q29udGV4dCgiMmQiKSksc31zdGF0aWMgY3JlYXRlRnJvbUNhbnZhcyhlKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKCEodCYmdCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSl0aHJvdyBuZXcgaCgiVGhlIHNlbGVjdGVkIGVsZW1lbnQgaXMgbm90IGEgY2FudmFzIik7cmV0dXJuIG8odCksYi5zZXRDb250ZXh0KHQuZ2V0Q29udGV4dCgiMmQiKSksdH1zdGF0aWMgc2V0Q29udGV4dChlKXt4PWV9c3RhdGljIGdldENvbnRleHQoKXtyZXR1cm4geH1zdGF0aWMgc3R5bGUoZSl7aWYoIXgpdGhyb3cgbmV3IGgoIkNvbnRleHQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemUuIFBsZWFzZSB1c2UgUmVuZGVyZXIuc2V0Q29udGV4dCIpO2NvbnN0IHQ9bihuKHt9LGQpLGUpO2lmKHQhPT1nKXtmb3IobGV0IGUgaW4gdCl4W2VdIT09dFtlXSYmKHhbZV09dFtlXSk7Zz10fX1zdGF0aWMgY2xlYXIoZSl7ZT8oYi5zdHlsZSh7ZmlsbFN0eWxlOmV9KSx4LmZpbGxSZWN0KDAsMCx4LmNhbnZhcy53aWR0aCx4LmNhbnZhcy5oZWlnaHQpKTp4LmNsZWFyUmVjdCgwLDAseC5jYW52YXMud2lkdGgseC5jYW52YXMuaGVpZ2h0KX1zdGF0aWMgbGluZShlLHQsaSxyLHMpe2Iuc3R5bGUocykseC5iZWdpblBhdGgoKSx4Lm1vdmVUbyh5KGUpLHkodCkpLHgubGluZVRvKHkoaSkseShyKSkseC5zdHJva2UoKX1zdGF0aWMgcmVjdChlLHQsaSxyLHMpe2Iuc3R5bGUocyk7Y29uc3RbbixhLGMsb109W3koZSkseSh0KSx5KGkpLHkocildO3guZmlsbFJlY3QobixhLGMsbykseC5zdHJva2VSZWN0KG4sYSxjLG8pfXN0YXRpYyByZWN0RnJvbUNlbnRlcihlLHQsaSxyLHMpe3JldHVybiBiLnJlY3QoZS1pLzIsdC1yLzIsaSxyLHMpfXN0YXRpYyByZWN0RnJvbVBvaW50cyhlLHQsaSxyLHMpe3JldHVybiBiLnJlY3QoZSx0LGktZSxyLXQscyl9c3RhdGljIHBvbHkoZSx0KXtpZihlLmxlbmd0aCl7Yi5zdHlsZSh0KSx4LmJlZ2luUGF0aCgpLHgubW92ZVRvKHkoZVswXS54KSx5KGVbMF0ueSkpO2ZvcihsZXQgdD0xO3Q8ZS5sZW5ndGg7dCsrKXgubGluZVRvKHkoZVt0XS54KSx5KGVbdF0ueSkpO3guc3Ryb2tlKCl9fXN0YXRpYyBjaXJjbGUoZSx0LGkscil7Yi5zdHlsZShyKSx4LmJlZ2luUGF0aCgpLHguYXJjKHkoZSkseSh0KSxpLDAsZikseC5maWxsKCkseC5zdHJva2UoKX1zdGF0aWMgY2lyY2xlRnJvbVJlY3QoZSx0LGkscixzKXtyZXR1cm4gYi5jaXJjbGUoZStpLzIsdCtyLzIsTWF0aC5taW4oaSxyKS8yLHMpfXN0YXRpYyBwb2ludChlLHQsaSl7Yi5jaXJjbGUoZSx0LDUsaSl9c3RhdGljIHJlY3RTcHJpdGUoZSx0LGkscixzKXtiLnN0eWxlKHt9KSx4LnNhdmUoKSx4LnRyYW5zbGF0ZSh5KGUraS8yKSx5KHQrci8yKSkseC5zY2FsZShzLnNjYWxlLngscy5zY2FsZS55KSx4LnJvdGF0ZShzLnJvdGF0aW9uKSx4LmRyYXdJbWFnZShzLmltYWdlLHkoaSpzLm9mZnNldC54LWkvMikseShyKnMub2Zmc2V0Lnktci8yKSx5KGkpLHkocikpLHgucmVzdG9yZSgpfXN0YXRpYyBjaXJjbGVTcHJpdGUoZSx0LGkscil7eC5zYXZlKCkseC5iZWdpblBhdGgoKSx4LmFyYyh5KGUpLHkodCksaSwwLGYpLHguY2xpcCgpLGIucmVjdFNwcml0ZShlLWksdC1pLDIqaSwyKmkscikseC5yZXN0b3JlKCl9c3RhdGljIHRleHQoZSx0LGkscil7aWYoeCl7bGV0IGU9bihuKHt9LHUpLHIpO3guZm9udD1gJHtlLnNpemV9cHggJHtlLmZvbnR9YCxiLnN0eWxlKHtmaWxsU3R5bGU6ZS5jb2xvcn0pfXguZmlsbFRleHQoZSx0LGkpfXN0YXRpYyB0aW50KGUsdCxpLHIscyl7Yi5yZWN0KHQsaSxyLHMse2ZpbGxTdHlsZTplLGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjoibXVsdGlwbHkiLGdsb2JhbEFscGhhOi4yNX0pfXN0YXRpYyBiZWdpbkZyYW1lKGUpe2IuY2xlYXIoZSl9c3RhdGljIGVuZEZyYW1lKCl7fX1uZXcgY2xhc3MgZXh0ZW5kcyBjbGFzc3tzZW5kTWVzc2FnZVRvTWFpblRocmVhZChlLHQpe3NlbGYucG9zdE1lc3NhZ2Uoe3RpdGxlOmUsZGF0YTp0fSl9bG9nKC4uLmUpe3RoaXMuc2VuZE1lc3NhZ2VUb01haW5UaHJlYWQoImxvZyIsLi4uZSl9fXtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5jYW52YXNSZXNvbHV0aW9uPTEsdGhpcy5vZmZzY3JlZW5DYW52YXM9bnVsbCx0aGlzLmN0eD1udWxsLHRoaXMudGV4dHVyZUFsaWFzPW5ldyBNYXAsc2VsZi5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoKHtkYXRhOmV9KT0+dGhpcy5vbk1lc3NhZ2UoZS50aXRsZSxlLmNvbnRlbnQpKSl9b25NZXNzYWdlKGUsdCl7c3dpdGNoKGUpe2Nhc2UiaW5pdENhbnZhcyI6dGhpcy5vZmZzY3JlZW5DYW52YXM9dC5jYW52YXMsdGhpcy5jdHg9dGhpcy5vZmZzY3JlZW5DYW52YXMuZ2V0Q29udGV4dCgiMmQiKSxiLnNldENvbnRleHQodGhpcy5jdHgpLHRoaXMuc2V0U2l6ZSh0LmRwcix0LndpZHRoLHQuaGVpZ2h0KSx0aGlzLnNlbmRNZXNzYWdlVG9NYWluVGhyZWFkKCJpbml0aWFsaXplZCIpO2JyZWFrO2Nhc2UicmVuZGVyIjpmb3IobGV0IGUgb2YgdC5yZW5kZXJTdGFjayl0aGlzLmhhbmRsZURyYXdSZXF1ZXN0KGUubWV0aG9kTmFtZSxlLmFyZ3MpO2JyZWFrO2Nhc2UibmV3VGV4dHVyZSI6dGhpcy50ZXh0dXJlQWxpYXNbdC5pZF09dC50ZXh0dXJlfX1zZXRTaXplKGUsdCxpKXtjb25zdCByPShlfHwxKSp0aGlzLmNhbnZhc1Jlc29sdXRpb247dGhpcy5vZmZzY3JlZW5DYW52YXMud2lkdGg9dCpyLHRoaXMub2Zmc2NyZWVuQ2FudmFzLmhlaWdodD1pKnIsInNldFRyYW5zZm9ybSJpbiB0aGlzLmN0eCYmdGhpcy5jdHguc2V0VHJhbnNmb3JtKHIsMCwwLHIsMCwwKX1nZXRUZXh0dXJlKGUpe3JldHVybiB0aGlzLnRleHR1cmVBbGlhc1tlXX1oYW5kbGVEcmF3UmVxdWVzdChlLHQpe3N3aXRjaChlKXtjYXNlInN0eWxlIjpiLnN0eWxlKG51bGw9PXQ/dm9pZCAwOnQub2JqKTticmVhaztjYXNlImNsZWFyIjpiLmNsZWFyKG51bGw9PXQ/dm9pZCAwOnQuY29sb3IpO2JyZWFrO2Nhc2UibGluZSI6Yi5saW5lKHQueDEsdC55MSx0LngyLHQueTIsdC5vYmopO2JyZWFrO2Nhc2UicmVjdCI6Yi5yZWN0KHQueCx0LnksdC53aWR0aCx0LmhlaWdodCx0Lm9iaik7YnJlYWs7Y2FzZSJyZWN0RnJvbUNlbnRlciI6Yi5yZWN0RnJvbUNlbnRlcih0LngsdC55LHQud2lkdGgsdC5oZWlnaHQsdC5vYmopO2JyZWFrO2Nhc2UicmVjdEZyb21Qb2ludHMiOmIucmVjdEZyb21Qb2ludHModC54MSx0LnkxLHQueDIsdC55Mix0Lm9iaik7YnJlYWs7Y2FzZSJwb2x5IjpiLnBvbHkodC5wb2ludHMsdC5vYmopO2JyZWFrO2Nhc2UiY2lyY2xlIjpiLmNpcmNsZSh0LngsdC55LHQucmFkaXVzLHQub2JqKTticmVhaztjYXNlImNpcmNsZUZyb21SZWN0IjpiLmNpcmNsZUZyb21SZWN0KHQueCx0LnksdC53aWR0aCx0LmhlaWdodCx0Lm9iaik7YnJlYWs7Y2FzZSJwb2ludCI6Yi5wb2ludCh0LngsdC55LHQub2JqKTticmVhaztjYXNlInJlY3RTcHJpdGUiOmIucmVjdFNwcml0ZSh0LngsdC55LHQud2lkdGgsdC5oZWlnaHQsdGhpcy5nZXRUZXh0dXJlKHQudGV4dHVyZUlkKSk7YnJlYWs7Y2FzZSJjaXJjbGVTcHJpdGUiOmIuY2lyY2xlU3ByaXRlKHQueCx0LnksdC5yYWRpdXMsdGhpcy5nZXRUZXh0dXJlKHQudGV4dHVyZUlkKSk7YnJlYWs7Y2FzZSJ0ZXh0IjpiLnRleHQodC50ZXh0LHQueCx0LnksdC5mb250KTticmVhaztjYXNlInRpbnQiOmIudGludCh0LmNvbG9yLHQueCx0LnksdC53aWR0aCx0LmhlaWdodCl9fX07Cg==", { type: "module" }) }
let j = !1,
    P = [];
const B = new Map;
class O { static get worker() { return J } static get workerIsInitialized() { return j } static get offscreenCanvas() { return N } static get renderStack() { return P } static create(t, e) { let [i, s] = [S().width, S().height]; return F = v(t || i, e || s, 1), O.initRenderWorker(F, t || i, e || s), k(F, "main"), F } static createFromCanvas(t) { if (F = document.querySelector(t), !(F && F instanceof HTMLCanvasElement)) throw new H("The selected element is not a canvas"); return C(F, F.clientWidth, F.clientHeight, 1), O.initRenderWorker(F, F.width, F.height), F } static initRenderWorker(t, e, i) { "offscreen" !== nt.rendererType && nt.setRendererType("offscreen"); let { clientWidth: s, clientHeight: n } = t;
        J = new T, N = t.transferControlToOffscreen(), this.sendMessageToWorker("initCanvas", { width: e || s, height: i || n, canvas: N, dpr: window.devicePixelRatio || 1 }, [N]), J.onmessage = ({ data: { title: t, data: e } }) => { switch (t) {
                case "log":
                    console.log("message from the renderer worker : ", e); break;
                case "initialized":
                    j = !0 } } } static addRenderCall(t, e) { P.push(new Q(t, e || {})) } static sendMessageToWorker(t, e, i) { return J.postMessage(new z(t, e), i || []) } static style(t) { this.addRenderCall("style", { obj: t }) } static clear(t) { this.addRenderCall("clear", { color: t }) } static line(t, e, i, s, n) { this.addRenderCall("line", { x1: t, y1: e, x2: i, y2: s, obj: n }) } static rect(t, e, i, s, n) { this.addRenderCall("rect", { x: t, y: e, width: i, height: s, obj: n }) } static rectFromCenter(t, e, i, s, n) { this.addRenderCall("rectFromCenter", { x: t, y: e, width: i, height: s, obj: n }) } static rectFromPoints(t, e, i, s, n) { this.addRenderCall("rectFromPoints", { x1: t, y1: e, x2: i, y2: s, obj: n }) } static poly(t, e) { this.addRenderCall("poly", { points: t, obj: e }) } static circle(t, e, i, s) { this.addRenderCall("circle", { x: t, y: e, radius: i, obj: s }) } static circleFromRect(t, e, i, s, n) { this.addRenderCall("circleFromRect", { x: t, y: e, width: i, height: s, obj: n }) } static point(t, e, i) { this.addRenderCall("point", { x: t, y: e, obj: i }) } static rectSprite(t, e, i, s, n) { var a;
        B.has(n.id) ? this.addRenderCall("rectSprite", { x: t, y: e, width: i, height: s, textureId: n.id }) : null == (a = n.convertToBitmap()) || a.then((t => { B.set(n.id, t), this.sendMessageToWorker("newTexture", { id: n.id, texture: t }) })) } static async circleSprite(t, e, i, s) { var n;
        B.has(s.id) ? this.addRenderCall("circleSprite", { x: t, y: e, radius: i, textureId: s.id }) : null == (n = s.convertToBitmap()) || n.then((t => { B.set(s.id, t), this.sendMessageToWorker("newTexture", { id: s.id, texture: t }) })) } static text(t, e, i, s) { this.addRenderCall("text", { text: t, x: e, y: i, font: s }) } static tint(t, e, i, s, n) { this.addRenderCall("circle", { color: t, x: e, y: i, width: s, height: n }) } static beginFrame(t) { P = [], this.clear(t) } static endFrame() { j && (this.sendMessageToWorker("render", { renderStack: P }), P = []) } }
let D = 0;
class A { constructor(t, e) { if (!t) throw new Error("A source path to the resource must be provided");
        this.id = D++, this.image = new Image, this.image.src = t, this.size = new r(this.image.width, this.image.height), this.options = e || {}, this.rotation = this.options.rotation || 0, this.offset = this.options.offset || u, this.scale = this.options.scale || p } async convertToBitmap() { if (!this.image.width || !this.image.height) return; const t = await createImageBitmap(this.image); return s = o({}, this), e(s, i({ image: t })); var s } }
let q = [],
    $ = 4;
const _ = ["top-left", "top-right", "bottom-left", "bottom-right", "custom"];
class tt { static addItem(t, e, i) { tt.internalAddItem(t, e, i) } static addButton(t, e, i, s) { tt.internalAddItem(t, i, s, e) } static internalAddItem(t, e, i, s) { const n = { callback: t, position: e, options: i, onClick: s };
        q.push(n); const a = q.length;
        window.addEventListener("load", (() => tt.addToDom(n, a))) } static init() { tt.addStyle('*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: "Roboto";\n    font-weight: 400;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\ncanvas {\n    z-index: 10;\n}\n\n.ue-interface {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    padding: 0.5em;\n    z-index: 10;\n    /* Make the click event pass through */\n    pointer-events: none;\n}\n\n.ue-container>div {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.ue-container>.top-left {\n    top: 0;\n    left: 0;\n}\n\n.ue-container>.top-right {\n    top: 0;\n    right: 0;\n    text-align: right;\n}\n\n.ue-container>.bottom-left {\n    bottom: 0;\n    left: 0;\n}\n\n.ue-container>.bottom-right {\n    bottom: 0;\n    right: 0;\n    text-align: right;\n}\n\n.ue-interface-items {\n    padding: .1em;\n}\n\n.ue-interface-button {\n    cursor: pointer;\n    user-select: none;\n}'); const t = document.createElement("div");
        t.classList.add("ue-interface", "ue-container"); for (let e of _) { const i = document.createElement("div");
            i.classList.add(e), t.appendChild(i) } document.body.appendChild(t) } static addStyle(t) { const e = document.createElement("style");
        e.textContent = t, document.head.append(e) } static addToDom(t, e) { var i, s; const n = t.callback(),
            a = document.createElement("span");
        a.classList.add("ue-interface-items"), a.id = `item-${e}`, a.innerText = n, Object.entries(t.options || {}).forEach((([t, e]) => a.style[t] = e)), t.position ? null == (i = document.querySelector(`.ue-container > .${t.position}`)) || i.appendChild(a) : null == (s = document.querySelector(".ue-container > .custom")) || s.appendChild(a), t.onClick && (a.addEventListener("click", (e => t.onClick(e))), a.classList.add("ue-interface-button")) } static update() { q.forEach(((t, e) => { const i = t.callback(),
                s = document.querySelector(`.ue-interface #item-${e+1}`);
            s && s.innerText !== i && (s.innerText = i) })) } static statsShift(t) { const e = document.querySelector(".top-left");
        e && (e.style.top = `${t}px`) } static setUpdateInterval(t) { $ = t } static get updateInterval() { return $ } }

function et() { const t = new W,
        e = document.createElement("div"); return e.classList.toggle("stats"), t.showPanel(0), e.appendChild(t.dom), document.body.appendChild(e), tt.statsShift(48), t } class it { constructor(t, e = 60) { if (this.requestId = 0, this.animate = t, this.fps = e, !window) throw new Y("No window context", "core") } start() { let t = performance.now() || Date.now(); const e = 1e3 / this.fps,
            i = s => { this.requestId = window.requestAnimationFrame(i); const n = s - t;
                n >= e - .1 && (t = s - n % e, this.animate(n)) };
        this.requestId = window.requestAnimationFrame(i) } stop() { window.cancelAnimationFrame(this.requestId) } }
let st = "normal";
class nt { constructor(t, e, i = 60) { this.fps = 60, this.name = t, this.env = e, this.tick = 0, this.stats = null, this.showStatsPanel = !0, this.gameLoop = null, this.fps = i } static setRendererType(t) { st = t } static get rendererType() { return st } toggleStats(t) { this.showStatsPanel = void 0 !== t ? t : !this.showStatsPanel, this.showStatsPanel ? this.stats = et() : (this.stats = null, document.querySelector(".stats") && document.querySelector(".stats").remove()) } makeAnimationFrame() { this.animationFrame = new it((t => this.update(t)), this.fps) } setMainLoop(t) { this.gameLoop = t, this.makeAnimationFrame() } setFPS(t) { this.fps = t, this.makeAnimationFrame() } update(t) { var e, i;
        null == (e = this.stats) || e.begin(), x.tick(), f.tick(t), this.gameLoop && this.gameLoop(t), this.tick % tt.updateInterval == 0 && tt.update(), null == (i = this.stats) || i.end(), this.tick++ } start() { if (!this.gameLoop) throw new Error("No game loop"); if (!this.animationFrame) throw new Error("AnimationFrame");
        window.addEventListener("DOMContentLoaded", (() => { var t;
            this.name && (document.title = this.name), x.init(), f.init(), tt.init(), this.showStatsPanel && (this.stats = et()), null == (t = this.animationFrame) || t.start() })) } } class at { constructor(t, e) { this.width = t, this.height = e } update() {} render() {} } class lt { constructor(t, e) { this.x = t, this.y = e } collide(t) { return !!(t.width && t.height && this.width && this.height) && (this.x < t.x + t.width && this.x + this.width > t.x && this.y < t.y + t.height && this.height + this.y > t.y) } update(...t) {} render(...t) {} } class ot extends lt { constructor(t, e) { super(t, e) } update(...t) {} render(...t) {} } class dt { constructor(t, e) { this.delay = t, this.callback = e, window.setTimeout(this.callback, this.delay) } } class ct extends lt { constructor(t, e, i = 5, s, n) { super(e.x, e.y), this.id = t, this.pos = e.clone(), this.angle = s && "random" != s ? s % 2 * Math.PI : Math.PI / 2 + 2 * Math.random() * Math.PI, this.velocity = new r(Math.random() * i * Math.cos(this.angle), Math.random() * i * Math.sin(this.angle)), this.color = n || "transparent", this.opacity = m(100, 255 * Math.random(), 255), this.radius = 2 } update() { this.velocity.y += .01, this.pos = this.pos.add(this.velocity), this.opacity -= 2 } render() { switch (nt.rendererType) {
            case "normal":
                U.circle(this.pos.x, this.pos.y, this.radius, { fillStyle: this.color, lineWidth: 1, globalAlpha: this.opacity / 255 }); break;
            case "offscreen":
                O.circle(this.pos.x, this.pos.y, this.radius, { fillStyle: this.color, lineWidth: 1, globalAlpha: this.opacity / 255 }) } } } class rt { constructor(t, e, i, s) { this.pos = e, this.lifeDuration = i, this.particles = [], this.UUID = 100 * c.randint(1, 100); for (let n = 0; n < t; n++) { let t = new ct(this.UUID + n, this.pos);
            this.particles.push(t) } new dt(this.lifeDuration, (() => { this.destroy(), s && s() })) } addParticles(t) { return t.concat(this.particles) } removeParticles(t) { const e = this.particles.length; return t.filter((t => !y(t.id, this.UUID, this.UUID + e))) } destroy() {} }
var ht, ut;
(ut = ht || (ht = {}))[ut.Turret = 0] = "Turret", ut[ut.Road = 1] = "Road", ut[ut.Ground = 2] = "Ground", ut[ut.Empty = 3] = "Empty";
class pt { constructor(t, e) { this.rows = e, this.cols = t, this.cells = [], this.focusCell = null, this.createCells(), this.defineNeighboors() } createCells() { for (let t = 0; t < this.cols; t++)
            for (let e = 0; e < this.rows; e++) this.cells.push(new mt(t, e)) } updateCell(t) { if (this.cells.includes(t)) { if (1 !== t.width || 1 !== t.height) { if (t.width > 1) { let e = t.width - 1,
                        i = this.cells.filter((i => i.y === t.y && i.x > t.x && i.x <= t.x + e));
                    this.cells = this.cells.filter((t => !i.includes(t))) } if (t.height > 1) { let e = t.height - 1,
                        i = this.cells.filter((i => i.x === t.x && i.y > t.y && i.y <= t.y + e));
                    this.cells = this.cells.filter((t => !i.includes(t))) } } this.defineNeighboors(), this.cells[this.cells.indexOf(t)] = t } } defineNeighboors() { this.cells.forEach((t => { t.neighboor.top = t.y >= 1 ? this.cells.filter((e => e.x <= t.x && e.x + e.width > t.x && e.y === t.y - t.height))[0] : null, t.neighboor.bottom = t.y <= this.rows - 1 ? this.cells.filter((e => e.x <= t.x && e.x + e.width > t.x && e.y === t.y + t.height))[0] : null, t.neighboor.left = t.x >= 1 ? this.cells.filter((e => e.y <= t.y && e.y + e.height > t.y && e.x === t.x - t.width))[0] : null, t.neighboor.right = t.x <= this.cols - 1 ? this.cells.filter((e => e.y <= t.y && e.y + e.height > t.y && e.x === t.x + t.width))[0] : null })) } } class mt { constructor(t, e, i = 1, s = 1) { this.x = t, this.y = e, this.width = i, this.height = s, this.highlight = !1, this.type = 2, this.neighboor = {} } toggleHighlight() { this.highlight = !this.highlight } }
const yt = { linear: t => t, easeIn: t => t ** 2, easeOut: t => 1 - (1 - t) ** 2, easeInOut: t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, easeInBack: t => 2.70158 * t ** 3 - 1.70158 * t ** 2, easeOutBack: t => 1 + 1.70158 * Math.pow(t - 1, 3) + 2.70158 * Math.pow(t - 1, 2), easeInOutBack: t => t < .5 ? Math.pow(2 * t, 2) * (7.189819 * t - 2.5949095) / 2 : (Math.pow(2 * t - 2, 2) * (3.5949095 * (2 * t - 2) + 2.5949095) + 2) / 2 },
    bt = { autostart: !1, loop: !1 };
class Zt { constructor(t, e, i, s = yt.linear, n = {}) { if (this.hasStarted = !1, this.isPaused = !1, this.isEnded = !1, this.isReversed = !1, this.from = t, this.to = e, this.duration = i, s instanceof Function) this.easing = s;
        else { if ("string" != typeof s || !(s in yt)) throw new Y("Unknow easing parameter", "animation");
            this.easing = yt[s] } this.options = o(o({}, bt), n), this.value = this.from, this.speed = (this.to - this.from) / this.duration, this.isReversed = !1, this.lastT = 0, f.add(this) } start() { this.isEnded = !1, this.hasStarted = !0 } reset() { this.lastT = 0, this.isPaused = !1 } toggle(t) { void 0 !== t && (t ? this.pause() : this.resume()), this.isPaused ? this.resume() : this.pause() } pause() { this.isPaused = !0 } resume() { this.isPaused = !1 } update(t) { if (!this.hasStarted || this.isPaused) return; let e = m(0, this.lastT + t * this.speed / Math.abs(this.to - this.from), 1); if (e >= 1 || e <= 0) { if (!this.options.loop) return this.isEnded = !0, void(this.lastT = 1);
            this.speed *= -1, this.isReversed = !this.isReversed } this.lastT = e, this.value = this.from + (this.to - this.from) * this.easing(e) } }
const gt = {},
    xt = "0.4.6";
export { Zt as Animation, mt as Cell, gt as Config, dt as Cooldown, yt as Easing, g as Event, nt as Game, at as GameEnvironement, lt as GameObject, pt as Grid, tt as Interface, O as OffscreenRenderer, ct as Particle, rt as ParticuleGenerator, ot as PlayerObject, h as Point, c as Random, U as Renderer, A as Texture, xt as VERSION, u as V_NULL, p as V_UNIT, r as Vector2, C as adaptCanvasToDevicePixelRatio, m as clamp, v as createCanvas, L as getCanvasDimensions, S as getWindowDimensions, y as inRange, k as insertCanvas };