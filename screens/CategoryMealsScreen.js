import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button title="Go to Meal Details!" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
                // Alternatively -> you can write props.navigation.navigate({'CategoryMeals'})
            }} />
            < Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen