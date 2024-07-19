import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-700">
      <div className="max-w-[1440px] px-8 py-10 2xl:mx-auto">
        <div className="mx-auto max-w-[26rem] space-y-10">
          <form className="space-y-5">
            <h5 className="text-center font-lexend text-xl font-bold">
              Contato
            </h5>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 shadow-default placeholder:text-neutral-700"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="name" className="block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 shadow-default placeholder:text-neutral-700"
                  placeholder="Digite o seu email"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-neutral-100 px-5 py-2.5 shadow-default placeholder:text-neutral-700"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="block">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="h-[9.5rem] w-full resize-none rounded-md border border-neutral-100 px-5 py-2.5 shadow-default placeholder:text-neutral-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-5 py-2.5 text-white"
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
              <FaInstagram className="size-[1.875rem]" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="size-[1.875rem]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="size-[1.875rem]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-[1.875rem]" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-[1.875rem]" />
            </a>
          </div>
          <div className="mx-auto max-w-[26rem] space-y-5 pb-[5.75rem] text-center">
            <h5 className="font-bold">Título Evento</h5>
            <span className="block">
              Universidade Federal de Minas Gerais <br />
              Av. Antônio Carlos, 6627, Pampulha | Belo Horizonte | MG | CEP:
              31270-901
            </span>
            <span className="block text-sm underline">
              Desenvolvido no Cedecom UFMG
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
