import { Button } from "./ui/button";
import Link from "next/link";



export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-primary">Satyam Choubey</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Software Development Engineer at Microsoft | Former Cloud Engineer at
          Amazon
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
