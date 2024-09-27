// components/atoms/Avatar.tsx
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="relative w-36 h-36 rounded-full overflow-hidden">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Avatar;