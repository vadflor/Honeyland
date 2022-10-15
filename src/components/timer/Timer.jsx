import './timer.scss';
import { useEffect, useState } from 'react';


const Timer = ({ endDate }) => {
    // console.log(endDate)
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');


    let interval;
    const d = new Date(endDate);
    const month = d.toLocaleString('default', { month: 'short' });
    const date = d.getDate();
    let hour = d.getHours();
    let minutes = (d.getMinutes()<10?'0':'') + d.getMinutes();

    const nth = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    
    let string = `${month} ${date}${nth(date)} ${hour}:${minutes}`;

    const startTimer = () => {
        const countDownDate = new Date(endDate).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                //stop timer
                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        })
    }

    useEffect(() => {
        startTimer();
    })

    return (
        <div className="header-counter">
            <div className="counter-box">
                <div className="counter-box-item">
                    <div className="box-number">{timerDays}</div>
                    <div className="box-text">Days</div>
                </div>
                <div className="counter-box-item">
                    <div className="box-number">{timerHours}</div>
                    <div className="box-text">Hours</div>
                </div>
                <div className="counter-box-item">
                    <div className="box-number">{timerMinutes}</div>
                    <div className="box-text">Minutes</div>
                </div>
                <div className="counter-box-item">
                    <div className="box-number">{timerSeconds}</div>
                    <div className="box-text">Seconds</div>
                </div>
            </div>
            <div className="header-counter-text">
                Campaign ends on <span className='header-counter-text-date'>{string} CET</span>
            </div>
        </div>
    )
}

export default Timer