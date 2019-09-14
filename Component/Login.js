import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
// import { updateUser } from '../Redux/action/authAction'
// import { connect } from 'react-redux';

// import store from '../Redux/store'
// import { Provider } from 'react-redux'

export default class LoginPage extends React.Component {

    constructor() {
        super();

        this.state = {
            FirstName: "",
            LastName: "",
        }
    }

    static navigationOptions = {
        header: null,
    }

    loginForm() {
        return <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Welcome to Typing Speed Game</Text>
            <Text>Enter your name to continue</Text>
            <TextInput placeholder="Enter Name" style={styles.TextInput} value={this.state.searchtext}
                onChangeText={(searchtext) => this.setState({ FirstName: searchtext })} />
            {/* <TextInput placeholder="Enter Last Name" style={styles.TextInput} onChange={(e) => this.setState({ LastName: e.target.value })} /> */}
            <TouchableOpacity onPress={this.login}>
                <View style={{
                    backgroundColor: '#5485f0', alignItems: 'center',
                    justifyContent: 'center', width: 240, height: 40,
                    flexDirection: "row", marginTop: 5
                }}
                >
                    <Text style={{ color: 'white' }}>Continue -></Text>
                </View>
            </TouchableOpacity>
        </View>
    }


    login = () => {
        const { FirstName } = this.state
        console.log(FirstName)
        if (FirstName !== "") {
            fetch("https://typing-speedd.herokuapp.com/users/addUser", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    Name: FirstName,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log('response object:', responseJson)
                    this.props.navigation.push("HomePage", { Name : FirstName})
                })
                .catch((error) => {
                    alert("this Username already exists")
                });
        }
        else {
            alert("Please Write Name")
        }
    }

    render() {
        return (
            // <Provider store={store}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {this.loginForm()}
                </View>
            // </Provider>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.authReducers.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateUser: (user) => dispatch(updateUser(user))
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        width: 240,
        margin: 10,
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 15,
        paddingLeft: 10,
        color: "rgb(38, 46, 49)",
        marginBottom: 20
    },
    buttonDesign: {
        width: 50,
        height: 30,
        backgroundColor: 'skyblue',
        borderRadius: 6,
        textAlign: "center",
        fontSize: 17,
        color: "white",
    }

});
