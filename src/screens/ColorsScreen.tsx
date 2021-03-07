import React, { useState } from "react"
import { Text, View, Button, StyleSheet, FlatList } from "react-native"

const ColorsScreen = () => {
    const [colors, setColor] = useState([getRandomRGB()])
    return (
        <View style={{ margin: 32 }}>
            <Button title={"Change Colour"} onPress={() => setColor([...colors, getRandomRGB()])} />
            <FlatList
                data={colors}
                renderItem={({item}) => {
                    return (<View style={{ height: 100, width: 100, backgroundColor: item }} />)
                }}
            />

        </View>
    )
}

const getRandomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
    },
    counter: {
        fontSize: 20
    },
    colorBox: {
        width: 100,
        height: 100,
        backgroundColor: "rgb(0, 128, 0)"
    }
})

export default ColorsScreen