import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Image } from 'react-native';

export default class ModePage extends React.Component {

    constructor() {
        super();

        this.state = {
            radioBtnsData: ['Easy', 'Medium', 'Hard'],
            checked: 0
        }
    }

    static navigationOptions = {
        header: null,
    }

    ModeSelection() {
        return <View>
            {this.state.radioBtnsData.map((data, key) => {
                return <View key={key}>
                    {this.state.checked == key ?
                        <TouchableOpacity style={styles.btn}>
                            <Image style={styles.img} source={require("../images/Kn8zA.png")} />
                            <Text>{data}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { this.setState({ checked: key }); this.props.navigation.push("HomePage", { Mode: data }) }} style={styles.btn}>
                            <Image style={styles.img} source={require("../images/OWcpX.png")} />
                            <Text>{data}</Text>
                        </TouchableOpacity>
                    }
                </View>
            })}
            {/* <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("HomePage", { Mode: "Easy" })}><Text>Easy</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("HomePage", { Mode: "Medium" })}><Text>Medium</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("HomePage", { Mode: "Hard" })}><Text>Hard</Text></TouchableOpacity> */}
        </View>
    }


    render() {
        return (
            <View style={styles.container}>
                {this.ModeSelection()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        height:20,
        width: 20
    },
    btn:{
        flexDirection: 'row'
    }
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
