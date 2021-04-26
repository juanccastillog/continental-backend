import React from 'react';
import { Spacer } from '../../components/Spacer';
import styleClasses from './AddNameForm.module.less';

export const AddNameForm = ({ label, onAddName }) => {

    const [name, setName] = React.useState('');
    const handleSubmit = (event) => {
      onAddName(name);
      setName('');
      event.preventDefault();
    }
    const handleChange = (event) => {
      setName(event.target.value);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label className={styleClasses.formLabel}>
          {label}
          <Spacer width="30px" />
          <input type="text" onChange={handleChange} placeholder="Player name" value={name} />
        </label>
      </form>
    );
  }