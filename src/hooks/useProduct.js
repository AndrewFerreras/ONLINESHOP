import { useRef, useState, useCallback } from "react";
import { searchProducts } from "../services/product";

export function useProduct(search) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getProduct = useCallback(async ( search ) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newProducts = await searchProducts(search);
      setProducts(newProducts);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
return {products,getProduct,error,loading}
}
