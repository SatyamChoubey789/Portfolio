import { Code, Cloud, Database, Server } from "lucide-react";

const skills = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Full-Stack Development",
    description:
      "Building scalable and efficient web applications using modern technologies.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Engineering",
    description:
      "Designing and deploying cloud infrastructure on AWS and Azure.",
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Database Management",
    description:
      "Working with SQL and NoSQL databases for data storage and retrieval.",
  },
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "DevOps",
    description:
      "Implementing CI/CD pipelines and automating deployment processes.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-background border rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
