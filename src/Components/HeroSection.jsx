import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-2">
                    <span className="opacity-0 animate-fade-in">
                        Hello, I'm
                    </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        John Kim Carlo
                    </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                        Sarcia
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                     I'm a fresh Information Systems graduate passionate about coding and eager to start my journey as a junior developer.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};