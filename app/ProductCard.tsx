import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {formatPrice} from "@/lib/utils";
import {Product} from "@prisma/client";
import Image from "next/image";

export default function ProductCart({product}: {product: Product}) {
  return (
    <Card className="pt-0 overflow-hidden">
      <div className="relative aspect-video">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>{formatPrice(product.price)}</CardFooter>
    </Card>
  );
}
