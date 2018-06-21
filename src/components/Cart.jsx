import React from 'react';
import { Button, List, Label } from 'semantic-ui-react';

const Cart = ({ items, remove }) => (
  <List divided verticalAlign="middle">
    {items.map(o => (
      <List.Item>
        <List.Content floated="right">
          <Button onClick={remove.bind(this, o.id)} color="red">
            Удалить
          </Button>
        </List.Content>
		{/*<Image className="image-wine-incart" src={o.image} />*/}
		
        <List.Content>
          {o.title}
          &nbsp;
          <Label>{o.count}</Label>
        </List.Content>
		
      </List.Item>
    ))}
  </List>
);

export default Cart;
