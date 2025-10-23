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
        <div className="flex flex-wrap justify-between gap-[50px]">
            {products.map(product => (

                <div key={product.id} className="bg-[#130234] flex flex-col gap-[1rem] w-[26rem] overflow-hidden rounded-t-[20px]">
                    <img src={product.image} alt={product.name} className="w-full "/>

                    <div className="py-[20px] px-[15px] flex flex-col gap-[0.5rem]">
                        <p className="font-semibold">{product.name}</p>

                        <div className="text-sm text-gray-300">
                            <p>{product.description}</p>
                            <p>{product.size}</p>
                        </div>

                        <p className="text-lg font-bold">R${product.price}</p>
                        <button type="button" className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
