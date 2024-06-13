import moment from "moment-timezone";

export default function Time() {
    const londonTime = moment().tz('Europe/London').format('HH:mm');
    const NYTime = moment().tz('America/New_York').format('HH:mm');
    const tokyoTime = moment().tz('Asia/Tokyo').format('HH:mm');

    return (

        <div>
            <ul>
                <p>The time in London is: {londonTime} </p>
                <p>The time in Boston is: {NYTime} </p>
                <p>The time in Tokyo is: {tokyoTime} </p>
            </ul>
        </div>
    )
}