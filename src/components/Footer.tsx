import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="w-full h-14 flex justify-between bg-gray-900 text-gray-300 leading-relaxed items-center p-5 border-t border-gray-500 flex-col sm:flex-row">
      <div className="flex gap-5 flex-col items-center py-5 sm:flex-row sm:py-0">
        <Icon />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <div className="flex gap-2 py-5 sm:py-0">
        <span>Desenvolvido por </span>
        <a className='hover:text-blue-500 transition-colors' href="https://github.com/jovimoura" target="blank">
          João Victor Moura
        </a>
      </div>
    </footer>
  )
}
