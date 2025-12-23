"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  totalProducts,
  totalPages,
  currentPage,
  searchParams,
}: {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  searchParams: object;
}) {
  return (
    totalProducts > 0 && (
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/products?${(() => {
                const params = new URLSearchParams(
                  Object.entries(searchParams)
                );
                params.set("page", Math.max(1, currentPage - 1).toString());
                return params.toString();
              })()}`}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={`/products?${(() => {
                  const params = new URLSearchParams(
                    Object.entries(searchParams)
                  );
                  params.set("page", (i + 1).toString());
                  return params.toString();
                })()}`}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={`/products?${(() => {
                const params = new URLSearchParams(
                  Object.entries(searchParams)
                );
                params.set(
                  "page",
                  Math.min(totalPages, currentPage + 1).toString()
                );
                return params.toString();
              })()}`}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
}
