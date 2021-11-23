import React, { useState, useCallback } from 'react';
import { Container } from './styles';

import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface InputProps {
 value: string;
 onInputChange: Dispatch<SetStateAction<string>>
}

export default function Input(props: InputProps): JSX.Element {

 const [isFocused, setIsFocused] = useState(false);

 const handleInputFocus = useCallback(() => {
  setIsFocused(true);
 }, []);

 const handleInputBlur = useCallback(() => {
   setIsFocused(false); 

 }, []);

 const handleInputChange = useCallback((evt) => {
  props.onInputChange(evt.target.value);
 }, [props]);

 return (
  <Container isFocused={isFocused}>
    <input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      type="text" 
      value={props.value}
      onChange={handleInputChange}
    />
  </Container>
 );
}