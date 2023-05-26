import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as d3 from "d3";
@Component({
	selector: "app-interactive-balls",
	templateUrl: "./interactive-balls.component.html",
	styleUrls: ["./interactive-balls.component.scss"],
})
export class InteractiveBallsComponent implements OnInit {
	width: number;
	height: number;
	numNodes = 200;
	nodes: any;
	nodeElements: any;
	simulation!: d3.Simulation<any, any>;
	svg!: d3.Selection<any, any, any, any>;
	quadTree!: d3.Quadtree<any>;

	@ViewChild("chartContainer", { static: true }) chartContainer!: ElementRef;

	constructor() {
		this.height = window.innerHeight;
		this.width = window.innerWidth;
	}

	ngOnInit() {
		this.createParticles();
		this.setSvg();
		this.setSimulation();
	}

	createParticles() {
		this.nodes = d3.range(this.numNodes).map(() => {
			return {
				radius: Math.random() * 15 + 4,
				x: Math.random() * this.width,
				y: Math.random() * this.height,
				vx: Math.random() - 0.5,
				vy: Math.random() - 0.5,
			};
		});
		this.quadTree = d3.quadtree(
			this.nodes,
			(d) => d.x,
			(d) => d.y
		);
	}

	setSvg() {
		this.svg = d3
			.select(this.chartContainer.nativeElement)
			.append("svg")
			.attr("width", this.width)
			.attr("height", this.height)
			.on("mousemove", (e) => {
				this.simulation.restart();
			});

		this.nodeElements = this.svg
			.selectAll(".particle")
			.data(this.nodes)
			.enter()
			.append("circle")
			.attr("class", "particle")
			.attr("r", (d: any) => {
				return d.radius;
			})
			.style("fill", "#e3ff37");
	}

	setSimulation() {
		this.simulation = d3
			.forceSimulation(this.nodes)
			.alphaTarget(0.3) // stay hot
			.velocityDecay(0.1) // low friction
			.force("x", d3.forceX(this.width / 2).strength(0.001))
			.force("y", d3.forceY(this.height / 2).strength(0.001))
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.05)
					.radius((d: any) => {
						return d.radius;
					})
			)
			.force("quadtree", () =>
				this.quadTree.visit((node, x1, y1, x2, y2) => {
					if (!node.length) {
						do {
							const particle = (node as any).data;
							const dx = particle.x - (node as any).x;
							const dy = particle.y - (node as any).y;
							const distance = Math.sqrt(dx * dx + dy * dy);
							const minDistance = 2 * 5;

							if (distance < minDistance) {
								const angle = Math.atan2(dy, dx);
								const force = (minDistance - distance) / distance;

								particle.vx += Math.cos(angle) * force;
								particle.vy += Math.sin(angle) * force;
							}
						} while ((node = (node as any).next));
					}
					return x1 > this.width || y1 > this.height || x2 < 0 || y2 < 0;
				})
			)
			.on("tick", () => {
				this.nodeElements
					.attr("cx", (d: any) => d.x)
					.attr("cy", (d: any) => d.y);
			});

		d3.select(this.chartContainer.nativeElement).on("mousemove", (e) => {
			const [mouseX, mouseY] = d3.pointer(e);
			this.simulation.force("repel", () => {
				this.nodes.forEach((particle: any) => {
					const dx = particle.x - mouseX;
					const dy = particle.y - mouseY;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const minDistance = 100;

					if (distance < minDistance) {
						const angle = Math.atan2(dy, dx);
						const force = (minDistance - distance) / minDistance;

						particle.vx += Math.cos(angle) * force;
						particle.vy += Math.sin(angle) * force;
					}
				});
			});
		});
	}
}
