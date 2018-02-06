import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
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
        uncheckedIcon: 'circle-o'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
