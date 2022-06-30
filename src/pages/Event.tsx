import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'
import { Welcome } from '../components/Welcome'

export default function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [hideMenu, setHideMenu] = useState(true)

  return (
    <div className="flex flex-col h-screen">
      <Header toggleMenu={() => setHideMenu((state) => !state)} isMenuHidden={hideMenu}/>
      <main className="flex flex-1 min-h-0">
        <div className={`flex-1 h-full overflow-y-auto flex-col ${!hideMenu ? 'hidden md:flex' : 'flex'}`}>
          {slug ? <Player lessonSlug={slug} /> : <Welcome />}
        </div>
        <Sidebar hideMenu={hideMenu}/>
      </main>
    </div>
  )
}
