import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Row, Touch, Title, Detail, Text} from './styles';
import Modal from '../../components/Modal';

export default function Details({route, navigation}) {
    const {product} = route.params;

    function handleBackButton() {
        navigation.goBack();
    }

    function handleCloseButton() {
        navigation.popToTop();
    }

    return (
        <Container>
            <Modal>
                <Row>
                    <Touch onPress={handleBackButton}>
                        <Icon name="arrow-back" size={30} color="#9e9e9e" />
                    </Touch>
                    <Touch onPress={handleCloseButton}>
                        <Icon name="close" size={30} color="#9e9e9e" />
                    </Touch>
                </Row>
                <Title>{product.title}</Title>
                {product &&
                    product.observations.map(p => {
                        const [name, des] = p.split(':');
                        return (
                            <Detail>
                                <Text color="#f57c00">{name}</Text>
                                <Text>{des}</Text>
                            </Detail>
                        );
                    })}
            </Modal>
        </Container>
    );
}
