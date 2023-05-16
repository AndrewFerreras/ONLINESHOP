export const searchProducts = async (search)=>{
 console.log(search)
  if (search === '') return null
  try {
    const response = await fetch(`https://dummyjson.com/products/${search}`);
    const result = await response.json();
    const products = result;
    return products
  } catch (error) {
    throw new Error("Lo sentimos, no encontramos los productos")
  }
}

