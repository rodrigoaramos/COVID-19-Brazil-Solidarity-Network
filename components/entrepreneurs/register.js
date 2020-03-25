import React, { Component } from 'react';
import { StyleSheet, View, Button as Rbutton  } from 'react-native';
import { Card, Button, Text, Input, Image } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';
// map-marker-off

class RegisterEnterpreuners extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return <View>
            <Card
                title='Fornecedor / Prestador'
                titleStyle={{ fontSize: '12pt' }}>
                <Input
                    label='Usuário (iG)'
                    placeholder='Nome curto'
                    leftIcon={{ type: 'material-community', name: 'account' }}
                    leftIconContainerStyle={{ marginRight: '10px' }}
                />
                <Input
                    label='Nome'
                    placeholder='Nome empresa/profissional'
                    leftIcon={{ type: 'material-community', name: 'account-box-outline' }}
                    leftIconContainerStyle={{ marginRight: '10px' }}
                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginVertical: '10px'
                    }}
                >
                    <Button
                        title="Localização"
                        titleStyle={{ fontSize: '12pt' }}
                        style={{
                            width: 150,
                            marginVertical: 8
                        }}
                        icon={{
                          name: "map-marker",
                          size: 20,
                          type: "material-community",
                          color: 'white'
                        }}
                        leftIconContainerStyle={{ marginLeft: '20px' }}
                        iconRight
                    />
                </View>
            </Card>
        </View>;
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default RegisterEnterpreuners