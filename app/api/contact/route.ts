import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100),

  email: z
    .string()
    .email(),

  business: z
    .string()
    .min(2)
    .max(100),

  service: z
    .string()
    .min(1),

  message: z
    .string()
    .min(10)
    .max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Los datos enviados no son válidos.",
        },
        {
          status: 400,
        }
      );
    }

    const data = result.data;

    console.log("Nuevo contacto:", data);

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error al procesar el formulario.",
      },
      {
        status: 500,
      }
    );
  }
}