import Footer from './Footer'
import { RocketIcon } from './RocketIcon'

export function Welcome() {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-around gap-80 p-2 relative `}
    >
      <div>
        <h2 className="text-xl md:text-3xl text-gray-200 z-10 cursor-default pointer-events-none text-center relative">
          Bem vindo ao Ignite Lab
          <span className="inline-flex absolute rigth-0 -bottom-1 animate-bounce m-2">
            <RocketIcon />
          </span>
        </h2>

        <p className="text-base md:text-lg text-gray-200 z-10 cursor-default pointer-events-none text-center">
          Comece a evolução selecionando alguma aula ao lado!
        </p>

        <p className="text-base md:text-lg text-gray-200 z-10 cursor-default pointer-events-none text-center">
          Lembrando que esse projeto é apenas um clone da plataforma de ensino da Rocketseat, ou seja, não se trata do evento de programação com aulas da Rocketseat.
        </p>
      </div>

      <Footer />
    </div>
  )
}
