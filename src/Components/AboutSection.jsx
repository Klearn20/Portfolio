import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Programmer</h3>

                        <p className="text-muted-foreground">
                            During my internship, I helped debug and test the functionalities of a dating web app. After that, I joined the Government Internship Program (GIP) under DOLE, where I gained 6 months of experience in clerical tasks such as encoding, documentation, and assisting clients. I later worked as IT Support for another 6 months, handling both technical and administrative duties. I also hold a TESDA NC III in Java Programming and am now seeking an entry-level role in programming.
                        </p>
                        <p className="text-muted-foreground">
                            In my free time, I enjoy exploring new frameworks and staying updated with web development trends. I have hands-on experience with React.js, Node.js, Angular, Spring Boot, Tailwind CSS, Bootstrap, as well as database tools like XAMPP and MySQL. I'm confident working on both front-end and back-end tasks. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Developer</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT Support & Admin</h4>
                                    <p className="text-muted-foreground">
                                        Experience in technical support, documentation, and client assistance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        Exposure to government operations and real-world tech support tasks through GIP and on-site roles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}