import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Campo Nome é obrigatório'),
  email: z.string().email('Digite um email válido'),
  subject: z.string().min(1, 'Campo Assunto é obrigatório'),
  message: z.string().min(1, 'Campo Mensagem é obrigatório'),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  function handleContactForm(data: ContactFormSchema) {
    console.log(data)
  }

  return (
    <footer className="bg-neutral-100 text-neutral-700">
      <div className="max-w-[1440px] px-8 py-10 2xl:mx-auto">
        <div className="mx-auto max-w-[26rem] space-y-10">
          <form
            onSubmit={handleSubmit(handleContactForm)}
            className="space-y-5"
          >
            <h5 className="text-center font-lexend text-xl font-bold">
              Contato
            </h5>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm md:text-base">
                  Nome *
                </label>
                <input
                  type="text"
                  {...register('name')}
                  id="name"
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 text-sm shadow-default placeholder:text-neutral-700 md:text-base"
                  placeholder="Digite seu nome"
                />
                {errors.name && (
                  <span className="block text-xs text-primary">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm md:text-base">
                  Email *
                </label>
                <input
                  type="text"
                  {...register('email')}
                  id="email"
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 text-sm shadow-default placeholder:text-neutral-700 md:text-base"
                  placeholder="Digite o seu email"
                />
                {errors.email && (
                  <span className="block text-xs text-primary">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-sm md:text-base">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 text-sm shadow-default placeholder:text-neutral-700 md:text-base"
                />
                {errors.subject && (
                  <span className="block text-xs text-primary">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm md:text-base">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  className="h-[9.5rem] w-full resize-none rounded-md border border-neutral-100 px-5 py-2.5 text-sm shadow-default placeholder:text-neutral-700 md:text-base"
                />
                {errors.message && (
                  <span className="block text-xs text-primary">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-5 py-2.5 text-sm text-white md:text-base"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-9">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="size-6 md:size-[1.875rem]" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="size-6 md:size-[1.875rem]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="size-6 md:size-[1.875rem]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-6 md:size-[1.875rem]" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-6 md:size-[1.875rem]" />
            </a>
          </div>
          <div className="mx-auto max-w-[26rem] space-y-5 text-center text-sm md:pb-[5.75rem] md:text-base">
            <h5 className="font-bold">Título Evento</h5>
            <span className="block">
              Universidade Federal de Minas Gerais <br />
              Av. Antônio Carlos, 6627, Pampulha | Belo Horizonte | MG | CEP:
              31270-901
            </span>
            <span className="block text-xs underline md:text-sm">
              Desenvolvido no Cedecom UFMG
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
