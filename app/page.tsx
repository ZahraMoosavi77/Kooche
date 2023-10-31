import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
    
      <Link href={'/new'}> ثبت آگهی</Link>
      
      <Link href={'/auth'}> ورود / ثبت نام</Link>
    </div>
  );
}
