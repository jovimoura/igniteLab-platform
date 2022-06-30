import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
  CircleNotch
} from 'phosphor-react'
import { DefaultUi, Player, Youtube } from '@vime/react'
import { gql, useQuery } from '@apollo/client'

import '@vime/core/themes/default.css'
import Footer from './Footer'

interface PlayerProps {
  lessonSlug: string
}

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      teacher {
        bio
        avatarURL
        name
      }
      description
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

export default function PlayerComponent({ lessonSlug }: PlayerProps) {
  const { data, error } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug
    }
  })

  if (error) {
    return (
      <div className="flex items-center justify-center flex-1">
        <p className="text-gray-200">Falha ao carregar, verifique sua internet, ou troque de aula!</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center flex-1">
        <p className="text-gray-200">Carregando...</p>
      </div>
    )
  }

  if (!data.lesson) {
    return (
      <div className="flex items-center justify-center flex-1">
        <p className="text-gray-200">Aula não encontrada, verifique a URL, ou selecione uma aula no menu lateral!</p>
      </div>
    )
  }
  

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="Teacher Picture"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              comunidade do discord
            </a>

            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid xl:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
