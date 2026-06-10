"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().optional(),
  motivo: z.string().min(1, "Seleccioná un motivo de consulta"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  privacidad: z.literal(true, {
    error: "Debés aceptar la política de privacidad",
  }),
});

type FormData = z.infer<typeof schema>;

const motivoOptions = [
  { value: "", label: "Seleccioná un motivo" },
  { value: "nutricion-intestinal", label: "Nutrición y salud intestinal" },
  { value: "lactancia", label: "Lactancia materna" },
  { value: "maternidad", label: "Acompañamiento en maternidad" },
  { value: "educacion", label: "Educación nutricional" },
  { value: "otro", label: "Otro" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // TODO: Replace mailto fallback with Resend or Formspree for production use
  const onSubmit = async (data: FormData) => {
    const subject = encodeURIComponent(`Consulta: ${data.motivo} — ${data.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono || "No indicado"}\nMotivo: ${data.motivo}\n\nMensaje:\n${data.mensaje}`
    );
    window.location.href = `mailto:hola@solealvarez.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#23433f]/10 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-[#23433f]" />
        </div>
        <h3 className="text-xl font-semibold text-[#1a1a1a]">¡Mensaje enviado!</h3>
        <p className="text-[#5c5c5c] max-w-sm">
          Gracias por escribirme. Te respondo a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nombre completo" error={errors.nombre?.message} required>
          <input
            {...register("nombre")}
            type="text"
            id="nombre"
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClass(!!errors.nombre)}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input
            {...register("email")}
            type="email"
            id="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Teléfono" error={errors.telefono?.message}>
          <input
            {...register("telefono")}
            type="tel"
            id="telefono"
            autoComplete="tel"
            placeholder="+34 000 000 000"
            className={inputClass(false)}
          />
        </Field>
        <Field label="Motivo de consulta" error={errors.motivo?.message} required>
          <select {...register("motivo")} id="motivo" className={inputClass(!!errors.motivo)}>
            {motivoOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Cuéntame qué necesitás" error={errors.mensaje?.message} required>
        <textarea
          {...register("mensaje")}
          id="mensaje"
          rows={5}
          placeholder="Contame en qué te puedo acompañar..."
          className={`${inputClass(!!errors.mensaje)} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("privacidad")}
            type="checkbox"
            id="privacidad"
            className="mt-1 w-4 h-4 rounded accent-[#23433f] shrink-0"
          />
          <span className="text-sm text-[#5c5c5c]">
            Acepto la{" "}
            <button type="button" className="underline hover:text-[#23433f] transition-colors">
              política de privacidad
            </button>
          </span>
        </label>
        {errors.privacidad && (
          <p className="text-xs text-red-500 pl-7">{errors.privacidad.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-[#1a1a1a]">
        {label}
        {required && <span className="text-[#23433f] ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm text-[#1a1a1a] bg-white placeholder:text-[#9ca3af] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#23433f]/30 focus:border-[#23433f] ${
    hasError ? "border-red-400" : "border-[#e5e7eb]"
  }`;
}
