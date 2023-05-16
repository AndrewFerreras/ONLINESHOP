export const searchProducts = async (search)=>{
  if (search === '') return null
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${search.search}`);
    const result = await response.json();
    const products = result.products;
    return products?.map(product => ({
      id: product.id,
      title: product.title,
      image: product.thumbnail
    }))
  } catch (error) {
    throw new Error("Lo sentimos, no encontramos los productos")
  }
}

