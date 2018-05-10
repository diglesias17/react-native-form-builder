import {toNumber} from 'lodash';

import isEmptyAnswer from './isEmptyAnswer';

const handleEndEditingNumber = ({name, allowZero}, answer, onChange) => {
    const parsedAnswer = toNumber(answer);
    return onChange({
        [name]: isEmptyAnswer(allowZero, answer, parsedAnswer) ? undefined : parsedAnswer
    });
};

export default handleEndEditingNumber;
