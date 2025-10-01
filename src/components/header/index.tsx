import logo from '/logo.png'
import cart from '/icon-cart.png'
export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Perguntas frequêntes</a></li>
                    <li><a href="#">Fale conosco</a></li>
                </ul>

                <div>
                    <a>Entrar ou Cadastre-se</a>
                    <a>
                        <img src={cart} alt="Cart" />
                    </a>
                </div>
            </nav>
        </header>
    )
}   