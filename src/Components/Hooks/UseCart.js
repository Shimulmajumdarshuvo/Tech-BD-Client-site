import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-springs-63285.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
}
export default useProducts;