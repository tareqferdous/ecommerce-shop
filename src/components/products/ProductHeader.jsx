const ProductHeader = ({ handleSort, sortType }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Your Products</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
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
