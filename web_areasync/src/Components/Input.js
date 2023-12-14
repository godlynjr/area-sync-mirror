import React from 'react';

const CustomInput = ({ text, styles}) => {
  const getBackgroundColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'white':
            return 'bg-white-500 hover:bg-white-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <button style=
      onClick={onClick}
      className={`flex mx-auto sm:w-full py-3 my-3 items-center justify-center rounded-2xl  focus:outline-none text-white ${getBackgroundColor()}`}
    >
      {logo && <img src={logo} alt="Logo" className="mr-2 h-6 w-6" />}
      <span>{description}</span>
    </button>
  );
};

export default CustomButton;
