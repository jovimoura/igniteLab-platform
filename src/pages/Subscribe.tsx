import { gql, useMutation } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import imgMock from '../assets/images/group7735.png'
import reactLogo from '../assets/images/react-icon.png'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscribe($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export default function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <img
          src={reactLogo}
          className="mt-10 absolute"
          alt=""
        />
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto flex-col md:flex-row p-5 md:p-0">
          <div className="max-w-[640px] md:w-full">
            <div className="flex justify-center md:block">
              <Logo />
            </div>
            <h1 className="mt-8 text-[2.5rem] leading-tight text-center md:text-left">
              Construa uma
              <strong className="text-blue-500"> aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-center md:text-left">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded md:relative">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className=" bg-gray-900 rounded px-5 h-14"
                placeholder="Seu nome completo"
                type="text"
                onChange={e => setName(e.target.value)}
              />
              <input
                className=" bg-gray-900 rounded px-5 h-14"
                placeholder="Digite seu e-mail"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />

              <button
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                type="submit"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={imgMock} className="mt-10" alt="mock" />
      </div>
      <Footer />
    </>
  )
}
