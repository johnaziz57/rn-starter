import React, { useState } from "react"
import { Text, View, Button, StyleSheet } from "react-native"

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View style={{ margin: 32 }}>
            <Button title={"Increase"} onPress={() => { setCounter(counter + 1) }} />
            <Button title={"Decreaase"} onPress={() => { setCounter(counter - 1) }} />
            <Text style={styles.title}>CurrentCount</Text>
            <Text style={styles.counterStyle}>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
    },
    counterStyle: {
        fontSize: 20
    }
})

export default CounterScreen