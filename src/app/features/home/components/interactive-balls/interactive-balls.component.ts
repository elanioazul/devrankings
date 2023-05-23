import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";
@Component({
	selector: "app-interactive-balls",
	templateUrl: "./interactive-balls.component.html",
	styleUrls: ["./interactive-balls.component.scss"],
})
export class InteractiveBallsComponent implements OnInit {
	width = 960;
	height = 500;
	numNodes = 200;
	nodes: any;
	root: any;
	force: any;
	simulation!: d3.Simulation<any, any>;
	svg!: d3.Selection<any, any, any, any>;
	quadTree!: d3.Quadtree<any>;

	constructor() {}

	ngOnInit() {
		this.mountNodes();

		this.svgSetUp();

		this.setSimulation();
	}

	mountNodes() {
		this.nodes = d3.range(this.numNodes).map(() => {
			return { radius: Math.random() * 15 + 4 };
		});
		this.root = this.nodes[0];
		this.root.radius = 0;
		this.root.radius.toFixed();
	}

	setSimulation() {
		this.simulation = d3
			.forceSimulation()
			.nodes(this.nodes)
			.force("charge", (i) => {
				return i ? 0 : -2000;
			})
			.force("center", d3.forceCenter(this.width / 2, this.height / 2))
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.05)
					.radius((d: any) => {
						return d.radius;
					})
			)
			.on("tick", () => this.tick());
	}

	tick() {
		this.quadTree = d3.quadtree(this.nodes);
		let i = 0;
		let n = this.nodes.length;
		while (++i < n) this.quadTree.visit(this.collide(this.nodes[i]));

		this.svg
			.selectAll("circle")
			.attr("cx", (d: any) => {
				return d.x;
			})
			.attr("cy", (d: any) => {
				return d.y;
			});
	}

	svgSetUp() {
		this.svg = d3
			.select(".content")
			.append("svg")
			.attr("width", this.width)
			.attr("height", this.height)
			.on("mousemove", (e) => {
				let coords = d3.pointer(e);
				this.root.px = coords[0];
				this.root.py = coords[1];
				this.simulation.restart();
			});

		this.svg
			.selectAll("circle")
			.data(this.nodes.slice(1))
			.enter()
			.append("circle")
			.attr("r", (d: any) => {
				return d.radius;
			})
			.style("fill", "#e3ff37");
	}

	collide(node: any) {
		let r = node.radius + 16;
		let nx1 = node.x - r;
		let nx2 = node.x + r;
		let ny1 = node.y - r;
		let ny2 = node.y + r;
		return function (quad: any, x1: any, y1: any, x2: any, y2: any) {
			if (quad.point && quad.point !== node) {
				let x = node.x - quad.point.x;
				let y = node.y - quad.point.y;
				let l = Math.sqrt(x * x + y * y);
				let r = node.radius + quad.point.radius;
				if (l < r) {
					l = ((l - r) / l) * 0.5;
					node.x -= x *= l;
					node.y -= y *= l;
					quad.point.x += x;
					quad.point.y += y;
				}
			}
			return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
		};
	}
}
