import {Pagination} from "@heroui/react";

export default function Pagination({page , total , set}) {
  return <Pagination showShadow color="warning" page={page} onChange={set} total={total} />;
}