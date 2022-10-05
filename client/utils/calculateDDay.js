import * as convertDateForm from './convertDateForm.js';
export default function calculateDDay(dateString) {
    const convertedDate = dateString.includes('-')
        ? dateString
        : convertDateForm.toStandard(dateString);
    const dDate = new Date(convertedDate + 'T00:00:00');
    const nowDate = new Date();
    const diff = Number(nowDate) - Number(dDate);
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    let dDayText;
    if (diffDay === 0) {
        dDayText = 'D-Day';
    }
    else if (diffDay > 0) {
        dDayText = `D+${diffDay}`;
    }
    else {
        dDayText = `D${diffDay}`;
    }
    return dDayText;
}
