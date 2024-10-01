import Image from "next/image";

// components/molecules/PortfolioCard.tsx
/**
 * Props for the PortfolioCard component.
 * @typedef {Object} PortfolioCardProps
 * @property {string} imageUrl - The URL of the image to display.
 * @property {string} title - The title of the portfolio card.
 * @property {string} [description] - The description of the portfolio card.
 * @property {string} [link] - The link associated with the portfolio card.
 */
interface PortfolioCardProps {
    imageUrl: string;
    title: string;
    description ?: string;
    link?: string;
  }
  
  /**
 * A card component to display portfolio items.
 * 
 * @param {PortfolioCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered portfolio card component.
 */
  const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageUrl, title, description}) => {
    return (
      <div className="bg-white rounded-lg shadow-lg w-full h-auto">
        <div className="flex flex-col justify-center items-center">
            <Image src={imageUrl} alt={title} width={300} height={200} className="rounded-lg" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default PortfolioCard;
  
