import { Product } from "../../types"
import * as S from "./styles"

interface ProductCardProps {
    product: Product
}

const ProductCard = ({product}: ProductCardProps) => {
    return (
        <S.CardContainer>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </S.CardContainer>
    )
}

export default ProductCard