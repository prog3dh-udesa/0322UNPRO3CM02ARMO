import React, { Component } from "react";
import { View, FlatList, StyleSheet, Image } from 'react-native';
import Card from "../components/Card";
import Loader from "../components/Loader";

class Home extends Component {
    constructor() {
        super()
        this.state= {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => this.setState({ data: data.results, loading: false }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <View>
                {
                    this.state.loading ? 
                    <Loader/> :
                    <View>
                        <FlatList
                            data={ this.state.data }
                            keyExtractor={ (item) => item.id.toString() }
                            renderItem={ ({item}) =>  <Card name={ item.name }/>}
                        />
                    </View> 
                }
          </View>
        )
    }
};

const styles = StyleSheet.create({
    img: {
      width: 200,
      height: 200
    }
  });

export default Home;