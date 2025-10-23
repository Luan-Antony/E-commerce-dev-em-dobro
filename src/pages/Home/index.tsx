import { CardProducts } from "../../components/CardProducts"
import { products } from "../../mocks"

export const Home = () => {
    return (
        <div className="max-w-[1350px] m-auto px-8">
            <div className="">
                <h1 className="w-full">Produtos</h1>
                <CardProducts products={products} />
            </div>
        </div>
    )
}