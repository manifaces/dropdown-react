import React from 'react';

import s from './Tag.module.scss';

type TagI = {
  text: string;
  id: string;
  toggleTags: (id: string, value: string) => void;
  checkItem: (item: string) => void;
}

export const Tag: React.FC<TagI> = ({ text, id, toggleTags, checkItem }) => {
  const handleClick = () => {
    toggleTags(id, text);
    checkItem(id);
  };

  return (
    <div className={s.Tag}>
      {text}
      <div className={s.Tag__close} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3.91235 4L11.9128 12.0004M12.0843 4L4.08392 12.0004" stroke="#07000F" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};