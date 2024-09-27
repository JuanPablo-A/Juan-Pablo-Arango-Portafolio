import React from 'react';

const TitlePrincipal = ({ title }: { title: string }) => {
  return (
    <h1 className='font-inter font-light text-5xl text-center text-tertiary sm:text-6xl sm:text-left'>
      {title}
    </h1>
  );
};

const TitleSecondary = ({ title }: { title: string }) => {
  return (
    <h2 className='font-inter font-light text-3xl text-center text-tertiary sm:text-4xl sm:text-left '>
      {title}
    </h2>
  );
};

const TitleTertiary = ({ title }: { title: string }) => {
  return (
    <h3 className='font-inter font-light text-lg text-center text-tertiary sm:text-2xl sm:text-left '>
      {title}
    </h3>
  );
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className='font-roboto text-center text-lg md:text-base sm:text-left'>{text}</p>;
};

const TextPrincipalBold = ({ text }: { text: string }) => {
  return <p className='font-roboto font-bold text-center text-lg md:text-base sm:text-left'>{text}</p>;
};

const TextSecondary = ({ text }: { text: string }) => {
  return <p className='font-roboto text-muted text-center text-lg md:text-base sm:text-left'>{text}</p>;
};

export { TitlePrincipal, TitleSecondary, TitleTertiary, TextPrincipal, TextSecondary, TextPrincipalBold };
