"use client"


import {Pagination} from "@heroui/react";
import { useEffect } from "react";

export default function PaginationComponent({page , total , set}) {
  useEffect(()=>{console.log(total)},[])
  return <Pagination showShadow color="warning" page={page} onChange={set} total={total} />;
}