import React from 'react';

import s from './Checkbox.module.scss';

type CheckboxI = {
  isSelect?: boolean;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxI> = ({ isSelect = false, disabled }) => {
  return (
    <div className={`${s.Checkbox} ${isSelect ? s.Checkbox_active : ''} ${disabled ? s.Checkbox_disabled : ''}`}>
      {isSelect && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 5.72727L4.82353 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
};