import React from 'react';

type titlesProps = {
  title: string;
  span?: string;
};

const TitlePrincipal = ({ title, span }: titlesProps) => {
  return (
    <h1 className='font-inter font-bold text-5xl text-black text-center sm:text-6xl sm:text-left'>
      {title}
      <span className='text-primary'>{span}</span>
    </h1>
  );
};

const TitleSecondary = ({ title, span }: titlesProps) => {
  return (
    <h2 className='font-inter font-bold text-3xl text-black text-center sm:text-4xl sm:text-left '>
      {title}
      <span className='text-primary'>{span}</span>
    </h2>
  );
};

const TitleTertiary = ({ title }: titlesProps) => {
  return (
    <h3 className='font-inter font-medium text-lg text-black text-center sm:text-2xl sm:text-left'>
      {title}
    </h3>
  );
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className='font-roboto text-center text-lg text-black md:text-base sm:text-left'>{text}</p>;
};

const TextPrincipalBold = ({ text }: { text: string }) => {
  return <p className='font-roboto font-bold text-black text-center text-lg md:text-base sm:text-left'>{text}</p>;
};

const TextPrincipalFill = ({ text }: { text: string }) => {
  return <p className='font-roboto font-bold text-white bg-primary text-center text-lg md:text-base sm:text-left p-2'>{text}</p>;
};

const TextSecondary = ({ text }: { text: string }) => {
  return <p className='font-roboto text-popover text-center text-lg md:text-base sm:text-left'>{text}</p>;
};

export { TitlePrincipal, TitleSecondary, TitleTertiary, TextPrincipal, TextSecondary, TextPrincipalBold, TextPrincipalFill};
