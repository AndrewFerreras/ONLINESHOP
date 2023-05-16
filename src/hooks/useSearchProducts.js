import { useRef, useState, useEffect } from "react";

export function useSearchProducts() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const searchInput = useRef(true);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("se debe suministrar un valor para buscar un producto.");
      return;
    }
    if (search.length > 4){
      
      setError("el producto debe tener un valor mayor a 4 caracteres. ")
    }
  }, [search]);
 return{search, updateSearch, error}
}
