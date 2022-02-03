import { DateTime } from "luxon";

export const createDateText = (timestamps) => {
    for (let i = 0; i < timestamps.length; i++){
        const date = DateTime.fromSeconds(timestamps[i]);
        console.log(date);
    }
}