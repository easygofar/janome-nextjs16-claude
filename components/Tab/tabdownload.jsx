"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TabDownload({ tab }) {
  const pathname = usePathname();
  const eng = pathname.includes("/en") ? true : false;
  const { images, data, name } = tab;

  const catImages = images.map((imge) => {
    return (
      <div key={imge}>
        <img
          alt={imge}
          width={150}
          height={200}
          src={`/images/download/${imge}`}
          className="border p-2"
          style={{ cursor: "default" }}
        />
        &nbsp;&nbsp;&nbsp;
      </div>
    );
  });

  return (
    <ul className="list-group list-group-flush px-0 pt-3">
      <li className="list-group-item text-center mb-3 d-flex justify-content-center">
        {catImages}
      </li>
      <li className="list-group-item text-center p-4">
        <a href={`/download/${data[0]}`} download className="btn btn-danger">
          {eng ? "Download" : "دانلود کاتالوگ"}
        </a>
      </li>
    </ul>
  );
}
