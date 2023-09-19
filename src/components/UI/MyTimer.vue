<template>
    <div class=" w-[100%] rounded-[20px] flex flex-col gap-[10px] p-[30px] bg-timer-bg">
        
        <p class="text-sm custom-text-nm-sec">{{ $t("Timer.title") }}</p>
        
        <div class="max-w-[235px] w-[100%] h-[65px] flex justify-between">
            <div class="w-[53px]">
                <h2 class="text-2xl custom-text-lg-sec">{{time.hours}}</h2>
                <p class="text-xs custom-text-nm-sec">{{ $t("Timer.hours") }}</p>
            </div>
            <h2 class="w-[18px] text-2xl custom-text-lg-sec">:</h2>
            <div class="w-[53px]">
                <h2 class="text-2xl custom-text-lg-sec">{{time.minutes}}</h2>
                <p class="text-xs custom-text-nm-sec">{{ $t("Timer.minutes") }}</p>
            </div>
            <h2 class="w-[18px] text-2xl custom-text-lg-sec">:</h2>
            <div class="w-[53px]">
                <h2 class="text-2xl custom-text-lg-sec">{{time.seconds}}</h2>
                <p class="text-xs custom-text-nm-sec">{{ $t("Timer.seconds") }}</p>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
import moment from 'moment';

    export default {
        name: "my-timer",

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