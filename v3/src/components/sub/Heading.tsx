import React from 'react';

interface propTypes {
  text: string;
}

const Heading: React.FC<propTypes> = ({ text }) => {
  return <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start block">{text}</h1>;
};

export default Heading;