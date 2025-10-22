interface Products {
    id: number;
    name: string;
    color: string;
    price: number;
    image: string;
    size: string | null;
    description: string;
}
interface CardProductsProps {
    products: Products[]
}
export const CardProducts = ({ products }: CardProductsProps) => {
    return (
        <>
            {products.map(product => (
            <div>
                <img src={product.image} alt={product.name} />
                <div>
                    <p>{product.name}</p>

                    <div>
                        <p>{product.description}</p>
                        <p>{product.size}</p>
                    </div>

                    <p>R${product.price}</p>
                    <button type='button'>Adicionar ao carrinho</button>
                </div>
            </div>
            ))}
        </>
    )
}