import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({length: 3}).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
