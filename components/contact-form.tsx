"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

const ContactForm = () => {
    const { toast } = useToast()

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(values)
            })
            
            if (response.status === 200) {
                toast({
                    title: "¡Éxito!",
                    description: "Tu mensaje ha sido enviado correctamente ✌🏽",
                    variant: "default",
                })
                form.reset()
            } else {
                toast({
                    title: "Error",
                    description: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Ocurrió un error inesperado. Por favor, intenta más tarde.",
                variant: "destructive",
            })
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Tu nombre"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Tu correo"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Escribe tu mensaje..."
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </Form>
            <Toaster/>
        </>
    );
}

export default ContactForm;