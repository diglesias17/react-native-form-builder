import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column'
            },
            inputUnit: {
                flex: 1
            },
            field: {
                flex: 3,
                height: 40,
                width: 250
            },
            wrapper: {
                paddingTop: 5,
                position: 'relative'
            },
            label: {
                height: 50,
                marginTop: -15
            },
            checkBox: {
                flex: 1,
                width: 20
            }
        }),
        highlightColor: '#ff4281'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
