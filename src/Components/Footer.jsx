import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return <footer className="py-12 px-4 border-t mt-12 pt-8 flex flex-wrap justify-between items-center">
        
        <p className="text-sm text-muted-foreground "> &copy; {new  Date().getFullYear()} Klearn20.co, All rights reserved. 

        </p>

        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary ">
            <ArrowUp size={20} />
        </a>
    </footer>
} 