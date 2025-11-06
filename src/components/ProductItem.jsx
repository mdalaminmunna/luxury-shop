export function ProductItem({ products }) {
  return (
    <li>
      <article>
        <img
          src={`https://dummyjson.com/${products.thumnail}`}
          alt={products.title}
        />
        <div>
          <h3>{products.title}</h3>
          <p>{currenctFormatter.format(products.price)}</p>
          <p>{products.description}</p>
        </div>
        <p>
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
