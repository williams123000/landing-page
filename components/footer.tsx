import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 text-center md:text-left md:my-0">
                        Williams
                    </h4>
                </div>
                <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <Link className="hover:text-primary transition-colors" href="#about-me">Sobre mi</Link>
                    <Link className="hover:text-primary transition-colors" href="#skills">Habilidades</Link>
                    <Link className="hover:text-primary transition-colors" href="#services">Servicios</Link>
                    <Link className="hover:text-primary transition-colors" href="#portfolio">Portafolio</Link>
                    <Link className="hover:text-primary transition-colors" href="#testimonials">Certificaciones</Link>
                    <Link className="hover:text-primary transition-colors" href="#contact">Contacto</Link>
                </nav>
            </div>
            <Separator className="my-4"/>
            <div>
                <p className="text-center py-4 text-sm md:text-base">
                    © 2021 Williams. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;