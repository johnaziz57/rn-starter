import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const COLOR_DELTA = 5


const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)


    return (<View style={styles.mainContainer}>
        <ColorAdjuster
            title={"Red"}
            colorValue={red}
            onDecrease={() => setRed(setColor(red, -COLOR_DELTA))}
            onIncrease={() => setRed(setColor(red, COLOR_DELTA))} />
        <ColorAdjuster
            title={"Green"}
            colorValue={green}
            onDecrease={() => setGreen(setColor(green, -COLOR_DELTA))}
            onIncrease={() => setGreen(setColor(green, COLOR_DELTA))} />
        <ColorAdjuster
            title={"Blue"}
            colorValue={blue}
            onDecrease={() => setBlue(setColor(blue, -COLOR_DELTA))}
            onIncrease={() => setBlue(setColor(blue, COLOR_DELTA))} />


        <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>)
}

const setColor = (currentValue: number, delta: number): number => {
    if (currentValue + delta < 0 || currentValue + delta > 255) return currentValue
    return currentValue + delta
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        alignContent: "center"
    }
})

export default SquareScreen