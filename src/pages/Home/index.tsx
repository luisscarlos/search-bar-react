import React, { useState } from 'react';
import Input from '../../components/Input';
import { stations } from '../../data/stations';
import removeAccent from '../../util/remove-accent';
import { Content, Title, ListContainer } from './styles';

export default function Home(): JSX.Element {

  const [search, setSearch] = useState('');

  const lowerSearch = search.toLocaleLowerCase();
 
  const filteredStation = stations
     .sort()
     .filter(station => removeAccent(station.toLocaleLowerCase()).includes(removeAccent(lowerSearch)));

  return (
    <>
      <Content>
        <Title>Portugal train stations list</Title>

        <Input value={search} onInputChange={setSearch}/>

        <ListContainer>
          <ul>
            {filteredStation.map(station => (
                <li key={station}>{station}</li>
            ))}
          </ul>
        </ListContainer>

      </Content>
    </>
  );
}
