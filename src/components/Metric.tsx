import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string | undefined;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  isAuthor,
}: Props) => {
  const imgContent = imgUrl ? (
    <Image
      src={imgUrl}
      alt={alt}
      width={16}
      height={16}
      className={`rounded-full object-contain ${imgStyles}`}
    />
  ) : (
    ""
  );

  const metricContent = (
    <>
      {imgContent}
      <p className={`${textStyles} flex items-center`}>
        {value}
        <span
          className={`ps-1 small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
