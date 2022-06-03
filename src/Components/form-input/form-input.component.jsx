import { Fragment } from 'react';

import './form-input.style.scss';

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      <Fragment>
        {label && (
          <label
            className={`${
              inputOptions.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </Fragment>
    </div>
  );
};

export default FormInput;
