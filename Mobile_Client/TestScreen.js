import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TestScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.box}>
                <View style={styles.boxA}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }} contentContainerStyle={{ gap: 10, marginLeft: 30 }}>
                        {[1, 2, 3].map((el, idx) => (
                            <TouchableOpacity key={idx} >
                                <Image
                                    source={require('./Assets/github.png')}
                                    style={{ width: 80, height: 80, borderRadius: 20 }}
                                />
                            </TouchableOpacity>
                        ))}

                    </ScrollView>
                </View>
                <View style={styles.boxB}>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TestScreen

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 20
    },
    boxA: {
        flex: 1,
        height: 100,
        backgroundColor: 'crimson'
    },
    boxB: {
        flex: 1,
        backgroundColor: 'teal'
    },
})