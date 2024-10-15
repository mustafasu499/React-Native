import React from 'react';

import {Card, Text} from 'react-native-paper';

const Card_Section = ({title, desc, img}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Cover source={{uri: img}} />
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{desc}</Text>
      </Card.Content>
    </Card>
  );
};

export default Card_Section;
