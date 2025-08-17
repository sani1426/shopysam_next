"use client"

import {Button, Pagination} from "@heroui/react";

export default function PaginationComponent({page , set , total}) {
  return (
    <div>

      <Pagination
      onChange={set}
      page={page}
        classNames={{
          wrapper: "gap-0 overflow-visible h-8 rounded-sm border border-divider",
          item: "w-8 h-8 text-small rounded-none bg-transparent",
          cursor:
            "bg-linear-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
        }}
        total={total}
      />
       <div className="flex gap-2">
        <Button
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => set((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => set((prev) => (prev < total ? prev + 1 : prev))}
        >
          Next
        </Button>
    </div>
    </div>
  );
}
