import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; /* para isso necessário instalar: expo install expo-constants */

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},

headerText: {
    fontSize: 15,
    color: '#737380'
},

headerTextBold: {
    fontWeight: 'bold',
},

title: {
    fontSize: 22,
    marginBottom: 12,
    marginTop: 44,
    color: '#e02041',
    fontWeight: 'bold'
},

description: {
    fontSize: 14,
    lineHeight: 29,
    color: '#737380' 
},


incidentList: {
    marginTop: 32,
},

incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
},

incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
},

incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
},

detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
},

detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
},

});
