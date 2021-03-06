import {StyleSheet} from 'react-native';

export default {
    component: StyleSheet.create({
        container: {
            padding: 8,
            flex: 1,
            flexDirection: 'column'
        },
        rowLabel: {
            paddingTop: 15
        },
        row: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {},
        column: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        checkBoxContainer: {
            borderWidth: 0,
            backgroundColor: null
        }
    }),
    checkedIcon: 'dot-circle-o',
    uncheckedIcon: 'circle-o',
    infoAfterText: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#8b8b8b',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            alignItems: 'center',
            backgroundColor: '#e3e3e3'
        },
        text: {
            color: '#333'
        }
    })
};
