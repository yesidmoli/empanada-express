import { Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Product {
  name: string;
  price: number;
  image?: string;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  return (
    <div className="py-4">
      <h2 className="text-lg font-bold text-secondary mb-3 px-4">{title}</h2>
      <Carousel>
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-4 basis-[150px]">
              <div className="relative bg-white rounded-lg shadow-sm h-[180px] w-[150px]">
                <div className="relative">
                  <img src={product.image} className="h-[120px] w-[120px] mx-auto mt-2 bg-surface rounded-lg" />
                  <button 
                    className="absolute top-2 right-2 w-[30px] h-[30px] bg-[#3BBF5C] rounded-full flex items-center justify-center hover:brightness-95 active:scale-95 transition-all"
                    onClick={() => console.log('Add to cart:', product.name)}
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="px-2 mt-2">
                  <h3 className="text-sm font-medium text-secondary line-clamp-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-base font-semibold text-secondary text-center mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};