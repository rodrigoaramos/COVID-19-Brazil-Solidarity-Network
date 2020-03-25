import React, { Component } from 'react';
import { StyleSheet, View, Button as Rbutton  } from 'react-native';
import { Card, Button, Text, Input, Image } from 'react-native-elements';

class ImageSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View>
                <View style={{

                }}>
                    <Text>Logo</Text>
                    <Text>
                        Informe a imagem para logo da Empresa, se houver.
                        Melhor resultado é obtido com um arquivo de extensão JPG/PNG,
                        com resolução de 72 DPI e tamanho máximo de 150 x 220 (L x A).
                    </Text>
                    <Image
                        source={{ uri: '' }}
                        style={{ width: 150, height: 220 }}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                        }}
                    >
                        <Button
                            title="Selecionar"
                            width='100px'
                        ></Button>
                        <Button
                            title="Remover"
                            width='100px'
                        ></Button>
                    </View>
                </View>
            </View>
        );
    }
}
 
export default ImageSelection;