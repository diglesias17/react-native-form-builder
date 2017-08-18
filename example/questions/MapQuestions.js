/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import CheckBox from './CheckBox';
import InputNumber from './InputNumber';
import InputText from './InputText';
import Select from './Select';
import Radio from './Radio';
import RadioTable from './RadioTable';
import Title from './Title';
import YesNoQuestion from './YesNoQuestion';
import {types} from '../constants/constants';
import InputTextWithIgnore from "./InputTextWithIgnore";
import InputNumberWithIgnore from "./InputNumberWithIgnore";

const change = (event, callback) => callback(event);

const MapQuestions = ({chapter, question, onChange}) => {
    let section = chapter;
    if (question.subSection) {
        section = chapter[question.subSection];
    }
    if (!section) {
        section = {};
    }
    return (
        <View>
            {question.type === types.LABEL && <View>
                <Text>
                    {question.text}
                </Text>
            </View>}
            {question.type === types.TITLE && <Title question={question}/>}
            {question.type === types.YES_NO && <YesNoQuestion
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.RADIO && <Radio
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.RADIO_TABLE && <RadioTable
                section={section}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.CHECKBOX && <CheckBox
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.SELECT && <Select
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.TEXT && <InputText
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.NUMBER && <InputNumber
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.TEXT_WITH_IGNORE && <InputTextWithIgnore
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
            {question.type === types.NUMBER_WITH_IGNORE && <InputNumberWithIgnore
                answer={section[question.name]}
                onChange={e => change(e, onChange)}
                question={question}
            />}
        </View>
    );
};

MapQuestions.propTypes = {
    chapter: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

export default MapQuestions;
