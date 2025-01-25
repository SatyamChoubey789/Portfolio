import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 border-t bg-gradient-to-r from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Satyam Choubey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/SatyamChoubey789/"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/satyamchoubey987/"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/SatyamChoubey77/"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
