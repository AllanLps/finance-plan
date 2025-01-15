import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
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
      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-screen justify-center">
        {/* Coluna de informações */}
        <section className="bg-blue-500 text-white flex flex-col justify-center items-start p-10">
          <h2 className="text-5xl font-bold mb-4">
            Bem vindo ao <span className={`${caveat.className}`}>FinancePlan</span>
          </h2>
          <p className="text-2xl mb-6">
            O seu primeiro passo em direção à organização financeira!
          </p>
        </section>

        {/* Coluna de Login */}
        <section className="flex flex-col justify-center items-center m-auto w-full">
        

        <div className="flex flex-col items-start text-left mb-4  w-[400px]">
          <h2 className="text-3xl font-bold text-left mb-4">Sign In</h2>
          <div className="flex gap-1">
            <p className="text-gray-600 mr-1 text-sm">É novo por aqui?</p>
            <Link href="/dashboard" className="text-blue-500 text-sm">Crie sua conta</Link>
          </div>
          
        </div>

        {/* Formulário de login */}
        <form className="w-[400px]">
          <div className="mb-4">
            <Label htmlFor="email" className="font-bold">E-mail</Label>
            <Input type="email" id="email" placeholder="E-mail"></Input>
          </div>

          <div className="mb-6">
            <Label className="font-bold">Senha</Label>
            <Input type="password" id="password" placeholder="password" ></Input>
            <Link className="text-gray-500 hover:text-red-500 text-sm mb-1" href="/trocarSenha">Esqueci minha senha</Link>
          </div>

          <Button
            type="submit"
            className=""
          >
            Entrar
          </Button>
        </form>
      </section>

      </section>
    </>
  );
}
