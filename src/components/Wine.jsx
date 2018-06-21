import React from 'react';
import '../css.css';

import {Card,Grid,Image,Button,Label,Rating} from 'semantic-ui-react';

const wine = ({id,image,title,produce,country,price,rating,addToCart,cartItem}) => (
  <Card>
    <Image 
	className="image-wine"
	src={image} 
  />
	
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <p className="produce">
	  <small>производитель:</small> {produce}
	  
		  <Image 
			className="image-country"
			src={country} 
		  />
	  
	  </p>
	  {/*<p><small>цвет</small></p>*/}
	  {/*<p><small>сахар</small></p>*/}
    </Card.Content>
	
    <Card.Content extra>
      <Grid divided>
        <Grid.Row stretched>
          <Grid.Column width={cartItem && 12}>
            <Button
              onClick={addToCart.bind(this, id)}
              content="Купить"
              color={cartItem ? 'green' : 'blue'}
              fluid
            />
          </Grid.Column>
          {cartItem && (
            <Grid.Column width={4}>
              <Label color="green">{cartItem.count}</Label>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Card.Content>
    <Card.Content extra>
      <div>
        <small>цена:</small> {price} руб.
      </div>
      <div>
        Рейтинг: &nbsp;
        <Rating icon="star" rating={rating} maxRating={5} />
      </div>
    </Card.Content>
  </Card>
);

export default wine;
