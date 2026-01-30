import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py:-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mí" subtitle="Conóceme" />
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center ">
                    <Carousel 
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent
                        className="-mt-1 h-[200px]"
                        >
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="image" width={250} 
                                        height={400} 
                                        className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl 
                        p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2"> {data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">
                    Egresado de Ingeniería en Computación con formación en desarrollo de software y creciente interés en el área de
                    Soporte Técnico. Durante mi formación adquirí bases en diagnóstico de problemas técnicos, análisis de errores y
                    manejo de sistemas Windows y Linux, así como experiencia en proyectos académicos. Busco iniciar mi desarrollo
                    profesional en un área de soporte donde pueda aprender, apoyar a usuarios y fortalecer mis habilidades técnicas en
                    entornos reales.
                    Me considero una persona proactiva, con ganas de aprender y crecer profesionalmente, siempre dispuesto a enfrentar nuevos
                    retos y contribuir al éxito del equipo.
                    </p>
                    <Button>
                        <Phone size={20} className="mr-2" href="#contact"/> Hablamos
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;