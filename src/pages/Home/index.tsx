import { CardProducts } from "../../components/CardProducts"
import { products } from "../../mocks"

export const Home = () => {
    return (
        <div className="max-w-[1450px] m-auto px-8">
            <h1>Produtos</h1>
            <CardProducts products={products} />
        </div>
    )
}