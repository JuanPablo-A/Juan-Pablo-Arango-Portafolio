import Image from "next/image";

// components/molecules/PortfolioCard.tsx
interface PortfolioCardProps {
    imageUrl: string;
    title: string;
    description ?: string;
    link?: string;
  }
  
  const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageUrl, title, description}) => {
    return (
      <div className="bg-white rounded-lg shadow-lg w-full h-auto">
        <div className="flex flex-col justify-center items-center">
            <Image src={imageUrl} alt={title} width={300} height={200} className="rounded-lg" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            {/* <a href={link} className="text-yellow-500 hover:underline mt-4 block">
                Learn More &raquo;
            </a> */}
        </div>
      </div>
    );
  };
  
  export default PortfolioCard;
  
