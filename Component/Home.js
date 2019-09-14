import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, BackHandler, Text, Dimensions, Image, ImageBackgroundComponent } from 'react-native';
import Logo from '../images/logo2.png';
// import BackImage from '../images/images.jpg';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

export default class HomePage extends React.Component {

    constructor() {
        super();

        this.state = {
            Mode: "Normal",
            isloading: true
        }
    }

    static navigationOptions = {
        header: null,
    }

    WholePage() {
        try {
            // this.setState({ isloading: true })
            console.log(this.props.navigation.state.params.Mode)
            const Mode = this.props.navigation.state.params.Mode
            if (this.state.isloading) {
                this.setState({ Mode: Mode, isloading: false })
            }
        } catch (error) {
            console.log("not found")
            if (this.state.isloading) {
                this.setState({ isloading: false })
            }
        }
        if (!this.state.isloading) {
            return <View>
                <TouchableOpacity onPress={() => this.props.navigation.push("PlayPage", { Mode: this.state.Mode })}>
                    <View style={{
                        backgroundColor: '#db674d', alignItems: 'center',
                        justifyContent: 'center', width: 210, height: 45,
                        flexDirection: "row", borderWidth: 2, margin: 5
                    }}
                    >
                        <Text style={{ color: 'white' }}>Play</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push("ModePage")}>
                    <View style={{
                        backgroundColor: '#db674d', alignItems: 'center',
                        justifyContent: 'center', width: 210, height: 45,
                        flexDirection: "row", borderWidth: 2, margin: 5
                    }}
                    >
                        <Text style={{ color: 'white' }}>Mode</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push("HighScore")}>
                    <View style={{
                        backgroundColor: '#db674d', alignItems: 'center',
                        justifyContent: 'center', width: 210, height: 45,
                        flexDirection: "row", borderWidth: 2, margin: 5
                    }}
                    >
                        <Text style={{ color: 'white' }}>High Score</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Exit}>
                    <View style={{
                        backgroundColor: '#db674d', alignItems: 'center',
                        justifyContent: 'center', width: 210, height: 45,
                        flexDirection: "row", borderWidth: 2, margin: 5
                    }}
                    >
                        <Text style={{ color: 'white' }}>Exit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }

    }

    Exit() {
        BackHandler.exitApp();
    }

    render() {
        return (
            <View style={{backgroundColor : "black", flex : 1, width : '100%'}}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", marginBottom: 40 }}>
                    <Image source={Logo} width="80px" height="80px" style={{marginBottom : 80}}/>
                    {this.WholePage()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDesign: {
        width: 50,
        height: 30,
        backgroundColor: 'brown',
        borderRadius: 6,
        textAlign: "center",
        fontSize: 17,
        color: "white",
    },
    

});



// *******Comment Works of this file here*********


{/* <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("PlayPage", { Mode: this.state.Mode })}><Text>Play</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("ModePage")}><Text>Mode</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign} onPress={() => this.props.navigation.push("HighScore")}><Text>High Score</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign} onPress={this.Exit}><Text>Exit</Text></TouchableOpacity> */}


                 // TextInput: {
    //     width : 160,
    //     height : 30,
    //     borderRadius : 5,
    //     borderWidth : 0,
    //     backgroundColor : "grey",
    // },