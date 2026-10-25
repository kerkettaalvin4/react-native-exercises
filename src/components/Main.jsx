import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
});

const main = () => {
   return(
    <View style={styles.container}>
        <Text>Rate Repository App</Text>
    </View>
   )
}
export default main