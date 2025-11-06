import { useHTTP } from "./hooks/useHTTP";
import { ProductItem } from "./ProductItem";

const requestConfig = {};

export function Products() {
  const {
    data: loadedProducts,
    isLoading,
    error,
  } = useHTTP("https://dummyjson.com/products", requestConfig, {});

  if (isLoading) {
    return <p className="center">Fetching Products.....</p>;
  }

  if (error) {
    <div className="w-full p-4 text-center bg-red-100 text-red-700 rounded-md">
      Failed to Fetch Meals — {error}
    </div>;
  }

  console.log(loadedProducts);

  return (
    <div>
      {loadedProducts.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
