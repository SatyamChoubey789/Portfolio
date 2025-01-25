import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I’m a passionate Software Development Engineer currently working
              at Microsoft, with a strong background in cloud engineering from
              my time at Amazon.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With expertise in cloud technologies, full-stack development, and
              DevOps, I love solving complex problems and delivering
              high-quality solutions.
            </p>
            <Button asChild>
              <Link href="#contact">Let’s Connect</Link>
            </Button>
          </div>
          <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-primary to-secondary p-1 hover:scale-105 transition-transform">
            <div className="relative h-full w-full bg-background rounded-full">
              <Image
                src="/photo.jpg" // Replace with your image path
                alt="About Me"
                width={320} // Set the width of the image
                height={320} // Set the height of the image
                className="object-cover rounded-full"
                loading="lazy" // Lazy load the image
                quality={75} // Reduce image quality for better performance
                priority={false} // Set to true if the image is above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
