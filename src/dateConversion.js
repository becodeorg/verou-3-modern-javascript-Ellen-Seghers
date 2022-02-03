import { DateTime } from "luxon";

export const createDateText = (timestamps) => {
    let textDate = [];
    for (let i = 0; i < timestamps.length; i++){
        const date = DateTime.fromSeconds(timestamps[i]);
        textDate.push(date.toFormat("cccc dd'-'LL"));
    }
    console.log(textDate);
    return textDate;
}