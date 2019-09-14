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

    GameType() {
        var Mode = this.props.navigation.state.params.Mode;
        return <View style={{alignItems : "center"}}>
            <Text style={{fontSize : 27,  color : "white", marginBottom : 40, fontWeight : "bold"}}> Select Game Type </Text>
            <TouchableOpacity onPress={() => this.props.navigation.push("StartGame", { GameType: "Paragraph", Mode: Mode })}>
                <View style={{
                    backgroundColor: '#8f112d', alignItems: 'center',
                    justifyContent: 'center', width: 210, height: 45,
                    flexDirection: "row", borderWidth: 2, margin: 5
                }}
                >
                    <Text style={{ color: 'white' }}>Paragraph Typing</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push("StartGame", { GameType: "WordsTyping", Mode: Mode })}>
                <View style={{
                    backgroundColor: '#8f112d', alignItems: 'center',
                    justifyContent: 'center', width: 210, height: 45,
                    flexDirection: "row", borderWidth: 2, margin: 5
                }}
                >
                    <Text style={{ color: 'white' }}>Words Typing</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push("HomePage")}>
                <View style={{
                    backgroundColor: '#8f112d', alignItems: 'center',
                    justifyContent: 'center', width: 210, height: 45,
                    flexDirection: "row", borderWidth: 2, margin: 5
                }}
                >
                    <Text style={{ color: 'white' }}>Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    }



    render() {
        return (
            <View style={{ backgroundColor: "black", flex: 1, width: '100%' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {this.GameType()}
                </View>
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

});


// Comment Work of this file is here

{/* <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("StartGame", { GameType: "Paragraph", Mode: Mode })}><Text>Paragraph Typing</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("StartGame", { GameType: "WordsTyping", Mode: Mode })}><Text>Words Typing</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("HomePage")}><Text>Back</Text></TouchableOpacity> */}

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