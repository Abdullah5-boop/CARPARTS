import { useEffect, useState } from "react"

const ProductHook = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setproduct(data))
            .catch(error => console.log(error))
    }, [])
    return [product, setproduct]
}
export default ProductHook;