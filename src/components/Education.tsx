import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    year: "2015 - 2019",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    description:
      "Graduated with honors, specializing in software development and cloud computing.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    year: "2019 - 2021",
    degree: "Master of Science in Cloud Computing",
    institution: "Tech University",
    description:
      "Focused on advanced cloud architectures, DevOps, and distributed systems.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-primary/10 transform -translate-x-1/2"></div>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center gap-8 mb-12`}
            >
              <div className="w-1/2">
                <div className="p-6 bg-background border rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    {edu.icon}
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                  <p className="mt-4 text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div> {/* Spacer */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
