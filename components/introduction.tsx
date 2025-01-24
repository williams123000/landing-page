import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container >
            <div className="text-center " id="home">
                <h3 className="text-xl mb-3">Hola, Soy Williams Chan Pescador</h3>
                <h1 className="text-4xl font-bold mb-3"> Williams 🧑‍💻</h1>
                <h2 className="text-2xl text-gray-400">Estudiante de Ingeniería en Computación </h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contactame
                        </Link>

                        <Link className={buttonVariants({ variant: 'secondary' })} href="/Williams.pdf" target="_blank">
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>
                <Image
                    src="/williams.png"
                    alt="Profile pic"
                    width={300}
                    height={300}
                    className="mx-auto mt-8" // Esto centra la imagen horizontalmente y añade margen superior
                />
            </div>
        </Container>
    )
}

export default Introduction;