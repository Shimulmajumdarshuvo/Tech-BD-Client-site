import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        fetch('https://shrouded-springs-63285.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [load]);
    return { products, setProducts, load, setLoad };
}
export default useProducts;