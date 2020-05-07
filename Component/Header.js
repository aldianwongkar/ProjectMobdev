import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
        <Text style = {textStyle}>Data Covid-19 Global & Indonesia</Text>
        </View>
    );
};


const styles = {
    textStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Header;