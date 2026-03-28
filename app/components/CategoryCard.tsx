import Link from "next/dist/client/link";

type CategoryCardProps = {
    title: string;
    description: string;
    price?: number;
    imageUrl: string;
    href?: string;
    variant?: "category" | "product"

};

export default function ProductCard({ title, description, price, imageUrl, href, variant }: CategoryCardProps) {
    return (
        <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-xl transition-all duration-500">
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 product-glow"
                    data-alt="fresh strawberries with clouds of thick sweet cream in a tall glass, vibrant red and white contrast, editorial food photography"
                    src={imageUrl}
                />
                {price && variant === "category" ? (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                    Desde ${price.toFixed(2)}
                  </div>
                ) : (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                        ${price!.toFixed(2)}
                    </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline text-xl font-bold text-on-surface">{title}</h4>
                <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="auto_awesome"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <p className="text-secondary text-sm mb-6 leading-relaxed">
                {description}
              </p>
                {/* <span className="material-symbols-outlined text-xl" data-icon="shopping_bag">
                  shopping_bag
                </span>
                Agregar a la bolsa */}
                    {/* ver en el menú esta categoria */}
                    {variant === "category" ?(
                        <Link
                            href={href ?? "/menu"}
                            className="w-full py-4 rounded-full border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            Ver categoría
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </Link>
                    ) :  (
                        <button className="w-full py-4 rounded-full border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-xl">shopping_bag</span>
                            Agregar a la bolsa
                        </button>
                    )}
            </div>
    );
}