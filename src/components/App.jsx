import React, { Component } from 'react';
import { Container, Card, Grid, Loader } from 'semantic-ui-react';

import { Menu, Wine } from './';

class App extends Component {
  componentDidMount() {
    const { fetchWines } = this.props;
    fetchWines();
  }

  render() {
    const {
      items,
      isLoading,
      addToCart,
      removeFromCart,
      cartItems,
      getCartItem
    } = this.props;
    return (
      <Container>
        <Menu items={cartItems} />

        <Grid className="wrapper">
          <Grid.Column width={12}>
            {isLoading && !items ? (
              <Loader active inline="centered" content="Загрузка..." />
            ) : (
              <Card.Group itemsPerRow={3}>
                {items.map((wineProps, i) => (
                  <Wine
                    {...wineProps}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    key={i}
                    cartItem={getCartItem(cartItems, wineProps.id)}
                  />
                ))}
              </Card.Group>
            )}

          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
