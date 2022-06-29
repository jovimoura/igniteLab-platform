import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'
import { Welcome } from '../components/Welcome'

export default function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Player lessonSlug={slug} /> : <Welcome />}
        <Sidebar />
      </main>
    </div>
  )
}
