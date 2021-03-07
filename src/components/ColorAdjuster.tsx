import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

interface ColorAdjusterProps {
    readonly title: string
    readonly colorValue: number
    onIncrease(): void
    onDecrease(): void
}

const ColorAdjuster = ({ title: name, colorValue: color, onIncrease, onDecrease }: ColorAdjusterProps) => {
    return (<View style={styles.view}>
        <Button title={`More ${name}`} onPress={() => onIncrease()} />
        <Button title={`Less ${name}`} onPress={() => onDecrease()} />
    </View>)
}

const styles = StyleSheet.create({
    view: {
        margin: 32
    }
})

export default ColorAdjuster