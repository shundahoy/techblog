import { perPage } from "@/const";
import Link from "next/link";

interface PaginationProps {
  totalCount: number;
  nowPage: number;
  tagId: string;
}

export const TagsPagination = ({
  totalCount,
  nowPage,
  tagId,
}: PaginationProps) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex items-center justify-center gap-2">
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li
          key={index}
          className={`
          ${
            nowPage - 1 === index
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          <Link
            className="px-4 py-2 flex items-center justify-center rounded"
            href={`/tag/${tagId}/${number}`}
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};
