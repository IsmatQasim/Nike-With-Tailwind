import { headerLogo } from '/assets/images';
import { hamburger } from '/assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className='padding-x
    py-2 absolute z-10 w-full'>
        <nav className='flex justify-between 
        items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo}
                alt='Logo'
                width={80}
                height={20}
                />
            </a>
            <ul className='flex-1 flex
            justify-center items-center
            gap-16 max-lg:hidden'>
                {navLinks.map((item) =>(
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className='font-monts
                        errat leading-normal
                        text-lg
                        text-slate-gray
                        hover:border-b-2 border-blue-500
                       hover:text-black'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img
                src={hamburger}
                alt='HamBurger'
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav