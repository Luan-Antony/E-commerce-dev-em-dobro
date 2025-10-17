import logo from '/logo.png'
import cart from '/icon-cart.png'
export const Header = () => {
    return (
        <header className='border-b border-[#6528D3] py-[1rem]'>
            <section className="max-w-[1450px] m-auto px-8">
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="Logo" />

                    <nav>
                        <ul className='flex gap-[2rem]'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Perguntas frequêntes</a></li>
                            <li><a href="#">Fale conosco</a></li>
                        </ul>
                    </nav>
                    <div className='flex items-center gap-[1rem]'>
                        <a className='px-[2rem] py-[1rem] bg-[#6528D3] rounded-[0.2rem]'>Entrar ou Cadastre-se</a>
                        <a>
                            <img src={cart} alt="Cart" />
                        </a>
                    </div>
                </div>
            </section>
        </header>
    )
}   