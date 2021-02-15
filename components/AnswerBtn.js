import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AnswerBtn = ({getQ, title, onCheckWin}) => {
    
    const clickyStuff = () => {
        onCheckWin();
        
    }

    return (
        <View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={clickyStuff}
            >
            <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        textAlign: 'center',
        margin: 10,
        width: 80,
        height: 40,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5
    }
})

export default AnswerBtn;