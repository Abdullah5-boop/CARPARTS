import { useEffect, useState } from "react"

const ProductHook = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch('https://shielded-beyond-16866.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setproduct(data))
            .catch(error => console.log(error))
    }, [])
    return [product, setproduct]
}
export default ProductHook;