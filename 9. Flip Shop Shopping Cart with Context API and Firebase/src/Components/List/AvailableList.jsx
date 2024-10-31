import React, { useState, useEffect, useCallback } from 'react';
import styles from './AvailableList.module.css'
import Card from '../UI/Card'
import ListItem from './ListItem/ListItem'

const AvailableList = () => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchListsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://flipshop-3c29e-default-rtdb.firebaseio.com/lists.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedLists = [];

      for(const key in data){
        loadedLists.push({
          id: key,
          name: data[key].title,
          description: data[key].description,
          price: parseFloat(data[key].asset_type_id)
        })
      }

      // console.log(loadedLists);

      setLists(loadedLists);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchListsHandler();
  }, [fetchListsHandler]);

  let content = <p>Found no Lists.</p>;

  if (lists.length > 0) {
    content = <ul>
      {lists.map(list => <ListItem id = {list.id} key = {list.id} name = {list.name} description={list.description} price={list.price}/> )}
    </ul>
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return(<section className  = {styles.meals}>
    <Card>
    {content}
    </Card>
  </section>)
}
export default AvailableList;
