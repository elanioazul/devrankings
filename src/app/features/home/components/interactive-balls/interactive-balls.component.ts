import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
	nodeElements: any;
	simulation!: d3.Simulation<any, any>;
	svg!: d3.Selection<any, any, any, any>;
	quadTree!: d3.Quadtree<any>;

	@ViewChild("chartContainer", { static: true }) chartContainer!: ElementRef;

	constructor() {}

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
			};
		});
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
			.selectAll("circle")
			.data(this.nodes.slice(1))
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
			.force(
				"collide",
				d3
					.forceCollide()
					.strength(0.05)
					.radius((d: any) => {
						return d.radius;
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

	runSimulation() {
		const particles = d3
			.select(this.chartContainer.nativeElement)
			.selectAll(".particle");
		function update() {
			particles.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);

			requestAnimationFrame(update);
		}

		update();
	}
}
