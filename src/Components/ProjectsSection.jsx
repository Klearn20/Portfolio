import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = () => [
    {
        id: 1,
        title: "Project One",
        description: "This is the first project.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind, CSS", "Superbase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is the Second project.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind, CSS", "Superbase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is the Third project.",
        image: "/projects/project3.png",
        tags: ["React", "Tailwind, CSS", "Superbase"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4-xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity.
                    Each project is a unique solution to a problem or a creative endeavor that I am proud of.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects().map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                            key={key}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="" className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank">
                        Check my Github <ArrowRight size={16}/>
                    </a>
                </div>  
            </div>
        </section>
    );
};