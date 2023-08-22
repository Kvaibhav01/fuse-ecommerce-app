"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // Look what is in the current URL
    const current = qs.parse(searchParams.toString());

    // Add the new filter to the URL
    const query = {
      ...current,
      [valueKey]: id,
    };

    // Remove the filter
    if (current[valueKey] === id) {
      // User clicked on the filter that's currently active. So user wants to remove that filter
      query[valueKey] = null;
    }

    // Create the new `url` for filter with the current `href` + the `query`
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      // Skip keys with `null` as their value
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-800",
                selectedValue === filter.id && "bg-black text-white",
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
