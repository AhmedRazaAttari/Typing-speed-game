import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '../images/logo2.png';

export default class MainPage extends React.Component {

    constructor() {
        super();

        this.state = {
            render: false,
        }
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        var _ = this;
        setTimeout(function () {
            _.setState({ render: true })
        }.bind(this), 3000)
    }

    logoPage() {
        return <View>
            <Image source={Logo} width="130px" height="130px"/>
        </View>
    }


    render() {
        const { render } = this.state;
        console.log(this.state)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
                {!render && this.logoPage()}
                {render && this.props.navigation.push("LoginComp")}
            </View>

        );
    }
}
