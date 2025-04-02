import React from 'react';

interface MyButtonProps {
  count: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton: React.FC<MyButtonProps> = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
};

export default MyButton;
