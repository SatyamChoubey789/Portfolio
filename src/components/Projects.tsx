import { Code, Cloud, Database } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const projects = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Migration Tool",
    description:
      "A tool for migrating on-premise applications to AWS with minimal downtime.",
    link: "https://github.com/yourusername/cloud-migration-tool",
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Real-Time Analytics Dashboard",
    description:
      "A real-time dashboard for monitoring system performance using Kafka and Elasticsearch.",
    link: "https://github.com/yourusername/analytics-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-background border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Button asChild variant="outline">
                <Link href={project.link} target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
