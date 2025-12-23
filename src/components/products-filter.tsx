"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductsFilter({
  categories,
  searchParams,
  minPrice,
  maxPrice,
  categoryId,
}: any) {
  const router = useRouter();

  const updateParams = (key: string, value?: string) => {
    const newSearchParams = new URLSearchParams(Object.entries(searchParams));
    if (value && value !== "all") newSearchParams.set(key, value);
    else newSearchParams.delete(key);
    newSearchParams.set("page", "1");
    router.replace(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="flex-1">
        <Label htmlFor="category">Category</Label>
        <Select
          onValueChange={(value) => updateParams("categoryId", value)}
          value={categoryId?.toString() || "all"}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat: any) => (
              <SelectItem key={cat.id} value={cat.id.toString()}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <Label htmlFor="minPrice">Min Price</Label>
        <Input
          id="minPrice"
          type="number"
          value={minPrice || ""}
          onChange={(e) => updateParams("minPrice", e.target.value)}
        />
      </div>

      <div className="flex-1">
        <Label htmlFor="maxPrice">Max Price</Label>
        <Input
          id="maxPrice"
          type="number"
          value={maxPrice || ""}
          onChange={(e) => updateParams("maxPrice", e.target.value)}
        />
      </div>
    </div>
  );
}
