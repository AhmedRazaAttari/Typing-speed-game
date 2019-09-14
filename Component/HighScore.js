import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class HighScore extends React.Component {

    constructor() {
        super();

        this.state = {
            
        }
    }

    static navigationOptions = {
        header: null,
    }

    HighScores(){
        <View style={styles.container}>
            <Text>HighScore Page</Text>
        </View>
    }


    render() {
        return (
            <View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // TextInput: {
    //     width : 160,
    //     height : 30,
    //     borderRadius : 5,
    //     borderWidth : 0,
    //     backgroundColor : "grey",
    // },
    // buttonDesign : {
    //     width : 50,
    //     height : 30,
    //     backgroundColor : 'brown',
    //     borderRadius : 6,
    //     textAlign : "center",
    //     fontSize : 17,
    //     color : "white",
    // }

});
