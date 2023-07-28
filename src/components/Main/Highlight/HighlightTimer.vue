<template>
    <div class="timer">
        <!-- Title Start -->
        <p class="title">{{ $t("Highlight.title") }}</p>
        <!-- Title End -->

        <!-- Time Start -->
        <div class="time">
            <div class="item">
                <h2 class="number">{{time.hours}}</h2>
                <p class="text">{{ $t("Highlight.hours") }}</p>
            </div>
            <h2 class="point">:</h2>
            <div class="item">
                <h2 class="number">{{time.minutes}}</h2>
                <p class="text">{{ $t("Highlight.minutes") }}</p>
            </div>
            <h2 class="point">:</h2>
            <div class="item">
                <h2 class="number">{{time.seconds}}</h2>
                <p class="text">{{ $t("Highlight.seconds") }}</p>
            </div>
        </div>
        <!-- Time End -->
    </div>
</template>

<script>
import moment from 'moment';

    export default {
        props:{
            endtime:{
                type: Date,
                reqired: true
            }
        },

        data(){
            return{
                time: ''
            }
        },

        methods:{
            getTimeRemaining(endtime) {
                const endMoment = moment(endtime);
                const currentMoment = moment();
                const duration = moment.duration(endMoment.diff(currentMoment));
                let days = duration.days();
                let hours = duration.hours() + days*24;
                let minutes = duration.minutes();
                let seconds = duration.seconds();

                if(hours < 10){
                    hours = '0'+ hours;
                }
                if(minutes < 10){
                    minutes = '0'+ minutes;
                }
                if(seconds < 10){
                    seconds = '0'+ seconds;
                }

                return {
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                }
            },

            start() {
                this.updateClock();
                this.timeInterval = setInterval(this.updateClock, 1000);
            },

            updateClock() {
                const remainingTime = this.getTimeRemaining(this.endtime);
                this.time = remainingTime;

                if (remainingTime.hours < 0) {
                    clearInterval(this.timeInterval);
                }
            }
        },

        mounted(){
            this.start()    
        }
    }
</script>

<style scoped>

/* Main Styles Start */

.timer{
    max-width: 295px;
    width: 100%;
    height: 147px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    border: none;
    background-color: var(--timer-background);
    align-self: flex-end;
}

/* Main Styles End */

/* Title Styles Start */

.title{
    font-family: 'SpaceMono', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: var(--text-color-white);
}

/* Title Styles End */

/* Time Styles Start */

.time{
    max-width: 235px;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
}

.point{
    width: 18px;
    font-family: "SpaceMono", sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    color: var(--text-color-white);
}

.item{
    width: 53px;
}
.number{
    font-family: "SpaceMono", sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 45px;
    color: var(--text-color-white);
}

.text{
    font-family: 'SpaceMono', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: var(--text-color-white);
}

/* Time Styles End */

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) { 
    .timer{
        max-width: 315px;
    }
}
    
</style>