import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, BackHandler, Text } from 'react-native';

export default class PlayPage extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    static navigationOptions = {
        header: null,
    }
    
    

    render() {
        var Mode = this.props.navigation.state.params.Mode;
        var GameType = this.props.navigation.state.params.GameType;
        return (
            <View style={styles.container}>
                <Text>Game Is Running</Text>
                <Text>GameMode is {Mode}</Text>
                <Text>GameType is {GameType}</Text>
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
