// components/CustomImage.tsx
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string; // 圖片的 URL，類型是 string
  alt?: string; // 可選的 alt 屬性
  width?: number; // 可選的寬度
  height?: number; // 可選的高度
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt || "Image"}
      width={width}
      height={height}
      layout="intrinsic"
      {...props} // 傳遞其他圖片屬性
    />
  );
};

export default CustomImage;
