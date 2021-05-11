import {
    getWindowDimensions,
    Renderer,
    Game,
    Point,
    GameEnvironement
} from './unrail-engine/unrail-engine.es.js'

const ANGLE_VELOCITY = 0.015
const POINT_VELOCITY = 4
const POINT_AMOUNT = 100
let lapCount = 0

class Swatch extends GameEnvironement {
    constructor(width, height) {
        super(width, height)
        this.width = width
        this.height = height
        this.angle = 0
        this.center = new Point(this.width / 2, this.height / 2)
        this.radius = Math.min(this.width / 3, this.height / 3)
        this.pointArray = new Array(POINT_AMOUNT).fill(null).map((el, i) => {
            return {
                limitAngle: 2 * Math.PI / POINT_AMOUNT * i,
                dist: this.radius - this.radius / POINT_AMOUNT * i,
                point: this.center.add(new Point(this.dist * Math.cos(this.angle), this.dist * Math.sin(this.angle)))
            }
        })
    }


    update() {
        this.angle = (this.angle + ANGLE_VELOCITY) % (2 * Math.PI)
        if (this.angle < ANGLE_VELOCITY) {
            lapCount++
            if (lapCount % 2 == 0) this.pointArray.forEach(el => el.dist = this.radius - el.dist)
        }
        const dir = lapCount % 2 == 0 ? 1 : -1
        this.pointArray.forEach((el, i) => {
            const initialRadius = this.radius / POINT_AMOUNT * i
            const limitAngle = el.limitAngle
            if (this.angle * dir < limitAngle * dir) {
                el.point = this.center.add(new Point(el.dist * Math.cos(this.angle), el.dist * Math.sin(this.angle)))
                if (dir == -1 && el.dist > initialRadius) el.dist -= POINT_VELOCITY
            } else {
                if (-dir * el.dist < -dir * this.radius) el.dist += -dir * POINT_VELOCITY
                if (dir * el.dist < dir * this.radius) el.dist += dir * POINT_VELOCITY
                if (dir && Math.abs(el.dist - this.radius) < POINT_VELOCITY) el.dist = this.radius
                el.point = this.center.add(new Point(el.dist * Math.cos(limitAngle), el.dist * Math.sin(limitAngle)))
            }
        })
        this.render()
    }

    render() {
        Renderer.clear('#0d47a1')
        this.pointArray.forEach(el => Renderer.circle(el.point.x, el.point.y, 2, {
            strokeStyle: ' #cfd8dc',
            lineWidth: 4,
            globalAlpha: .8
        }))
        // Renderer.circle(this.center.x, this.center.y, this.radius + 10)
    }
}


const { width, height } = getWindowDimensions()
const canvas = Renderer.create(width, height)
document.querySelector('main').appendChild(canvas)
const swatch = new Swatch(width, height)
const game = new Game('StyledSwatch', swatch)
game.setMainLoop(() => swatch.update())
game.toggleStats(false)
game.start()