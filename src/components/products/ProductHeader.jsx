const ProductHeader = ({ sortProducts, setSortProducts }) => {
  return (
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">Your Products</h2>
      <div class="flex items-center space-x-2">
        <span class="text-sm">Sort by:</span>
        <select
          value={sortProducts}
          onChange={(e) => setSortProducts(e.target.value)}
          class="border rounded-md px-2 py-1 text-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductHeader;
