import Map from "@/components/elements/map/Map";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-grow flex-col">
      <Link href={'/new'}> ثبت آگهی</Link>
      <Link href={'/auth'}> ورود / ثبت نام</Link>
      <Map />
    </div>
  );
}
