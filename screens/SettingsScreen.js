import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{
                    width:200,
                    height:200,
                    marginBottom:100,
                    padding:50,
                    alignItems: 'center',
                    uri:"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                }}
                />
            </View>
            <Text style={styles.Test}>Name</Text>
                <Text style={styles.Test}>Age</Text>
                <Text style={styles.editTest}>Date of Birth - </Text>
                <Text style={styles.editTest}>Email -</Text>
                <Text style={styles.editTest}>Country -</Text>
                <Text style={styles.editTest}>Proffesion -</Text>

                <Text style={styles.edit}>Edit Profile</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    image:{
        alignItems:'center',
        marginTop: 50,
    },
    editTest:{
        color: 'black',
        marginTop:20,
        fontSize:17,
        paddingLeft: 20,
    },
    Test:{
        color:'darkred',
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold'
    },
    edit : {
        textAlign: 'center',
        fontSize: 15,
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 40
    }
    });