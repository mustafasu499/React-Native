import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import Card_Section from './Card_Section';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiData();
  }, []);
  const apiData = async () => {
    const response = await fetch('https://fakestoreapi.com/products/').then(
      res => res.json(),
    );
    setProducts(response);
  };

  return (
    <ScrollView>
      <View>
        {products.map((e, i) => {
          return (
            <View style={{margin: 10}} key={i}>
              <Card_Section
                title={e.title}
                desc={e.description.slice(0, 50)}
                img={e.image}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Products;
