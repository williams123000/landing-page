import { dataTestimonials } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
    return (
        <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto" id="testimonials">
            <Title title="Certificaciones" subtitle="Certificaciones" />
            <Carousel 
                className="mt-6 w-full max-w-xs md:max-w-full mx-auto" // Ajustado el ancho para móviles
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {dataTestimonials.map((testimonial) => (
                        <CarouselItem 
                            key={testimonial.id}
                            className="pl-2 md:pl-4 basis-full md:basis-1/3" // Ajustado para mostrar 1 item en móvil
                        >
                            <div className="p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg h-full">
                                <Avatar className="w-16 h-16 md:w-20 md:h-20"> {/* Tamaño ajustado del avatar */}
                                    <AvatarImage
                                        src={testimonial.imageUrl}
                                        alt="Profile avatar"
                                        className="object-cover"
                                    />
                                    <AvatarFallback>
                                        CN
                                    </AvatarFallback>
                                </Avatar>
                                <div className="mt-4 space-y-2">
                                    <p className="text-xl md:text-2xl font-medium">{testimonial.name}</p>
                                    <p className="text-sm md:text-base">{testimonial.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" /> {/* Oculto en móviles */}
                <CarouselNext className="hidden md:flex" /> {/* Oculto en móviles */}
            </Carousel>
        </div>
    );
}

export default Testimonials;