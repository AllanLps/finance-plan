import { Button } from "/components/ui/button";
import { MoveRight } from 'lucide-react';
import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
        {/* Coluna de informações */}
        <section className="bg-blue-500 text-white flex flex-col justify-center items-start p-10">
          <h2 className="text-5xl font-bold mb-4">
            Boas-vinda ao <span className={`${caveat.className}`}>FinancePlan</span>
          </h2>
          <p className="text-2xl mb-6">
            O seu primeiro passo em direção à organização financeira!
          </p>
        </section>

        {/* Coluna de Login */}
        <section className="flex flex-col justify-center items-start p-24 min-h-screen">
        <h2 className="text-3xl font-bold text-left mb-4">Sign In</h2>

        <div className="flex text-left mb-4">
          <p className="text-gray-600 mr-1 text-sm">É novo por aqui?</p>
          <Link href="/dashboard" className="text-blue-500 text-sm">Crie sua conta</Link>
        </div>

        {/* Formulário de login */}
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-left">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2 text-left">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </section>

      </section>
    </>
  );
}
