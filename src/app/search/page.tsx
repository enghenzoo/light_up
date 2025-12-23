import { ProductCard } from "@/components/product-card";
import { getAllCategories } from "@/models/categories";
import ProductsFilter from "@/components/products-filter";
import { headers } from "next/headers";
import PaginationComponent from "@/components/pagination";

interface ProductsPageProps {
  searchParams: {
    page?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

const PRODUCTS_PER_PAGE = 8;

export default async function SearchPage(props: ProductsPageProps) {
  const { searchParams } = props;
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const currentPage = Number(searchParams.page || 1);
  const categoryId = searchParams.categoryId
    ? Number(searchParams.categoryId)
    : undefined;
  const minPrice = searchParams.minPrice
    ? Number(searchParams.minPrice)
    : undefined;
  const maxPrice = searchParams.maxPrice
    ? Number(searchParams.maxPrice)
    : undefined;

  const queryParams = new URLSearchParams();
  if (categoryId) queryParams.set("categoryId", categoryId.toString());
  if (minPrice) queryParams.set("minPrice", minPrice.toString());
  if (maxPrice) queryParams.set("maxPrice", maxPrice.toString());
  queryParams.set("limit", PRODUCTS_PER_PAGE.toString());
  queryParams.set("offset", ((currentPage - 1) * PRODUCTS_PER_PAGE).toString());

  const res = await fetch(`${baseUrl}/api/products?${queryParams.toString()}`, {
    cache: "no-store",
  });
  const products = await res.json();

  const categories = await getAllCategories();

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of natural skincare
          </p>
        </div>

        <ProductsFilter
          categories={categories}
          searchParams={searchParams}
          minPrice={minPrice}
          maxPrice={maxPrice}
          categoryId={categoryId}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <PaginationComponent
          totalProducts={totalProducts}
          totalPages={totalPages}
          currentPage={currentPage}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
