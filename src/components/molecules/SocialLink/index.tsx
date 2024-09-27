// components/molecules/SocialLinks.tsx
import { TextPrincipalBold } from '@/components/atoms/Titles';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com" },
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
  { icon: <FaDribbble />, link: "https://dribbble.com" },
];

const SocialLinks = () => {
  return (
    <div className="fixed top-20 flex flex-col justify-center items-center space-y-4">
      <TextPrincipalBold text='Links'/>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-3 rounded-full text-black shadow-md hover:bg-yellow-600 transition duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
