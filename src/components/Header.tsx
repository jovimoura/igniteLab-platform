import { Link } from 'react-router-dom'
import { List, X } from 'phosphor-react'
import { MouseEventHandler } from 'react'
import Logo from './Logo'

interface HeaderProps {
  toggleMenu: MouseEventHandler
  isMenuHidden: boolean
}


export default function Header({ toggleMenu, isMenuHidden }: HeaderProps) {
  return (
    <header className="w-full p-4 md:p-5 flex items-center md:justify-center justify-between bg-gray-700 border-b border-gray-600">
      <Link to='/event' className="w-[167px] md:w-[237px]">
        <Logo />
      </Link>
      <div className="flex items-center gap-2 md:hidden hover:cursor-pointer" onClick={toggleMenu}>
        <span className="leading-relaxed select-none">Aulas</span>
        {isMenuHidden ? <List size={32} color={'#81D8F7'} /> : <X size={32} color={'#81D8F7'} />}
      </div>
      
    </header>
  )
}
