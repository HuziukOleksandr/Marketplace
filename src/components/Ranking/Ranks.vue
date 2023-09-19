<template>
    <div>
        <!-- Header Start -->
        <div 
            class="custom-wrapper py-[80px] md:py-[40px] sm:py-[30px]"
        >
            <h2 class="custom-text-lg mb-[20px] text-5xl  md:text-4xl sm:text-2xl">
                {{ $t("Ranking.title") }}
            </h2>
            
            <h2 class="custom-sub-title mb-[30px]">
                {{ $t("Ranking.subTitle") }}
            </h2>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="w-[100%]">
            <div class="container-header h-[70px] sm:h-[60px]">
                <div class="custom-wrapper flex">
                    <div 
                        class="item" 
                        :class="{active: this.active === 'day'}"
                        @click="changeTabs('day')"
                    >
                        <div class="link">
                            {{ day }}
                        </div>
                    </div>

                    <div 
                        class="item"
                        :class="{active: this.active === 'week'}"
                        @click="changeTabs('week')"
                    >
                        <div href="" class="link">
                            {{ week }}
                        </div>
                    </div>

                    <div 
                        class="item"
                        :class="{active: this.active === 'month'}"
                        @click="changeTabs('month')"
                    >
                        <div class="link">
                            {{ month }}
                        </div>
                    </div>

                    <div 
                        class="item"
                        :class="{active: this.active === 'allTime'}"
                        @click="changeTabs('allTime')"
                    >
                        <div class="link">
                            {{ $t("Ranking.time") }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="custom-wrapper mt-[40px] ">
                <Table :period="active"/>
            </div>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Table from './Table.vue'

    export default {
        components: {
            Table
        },

        setup() {
            const {t, locale} = useI18n()
            return {
                t, locale
            }
        },

        data() {
        
            return {
                active: "day",
                day : this.$t("Ranking.today"),
                week: this.$t("Ranking.week"),
                month: this.$t("Ranking.month")
            }
        },

        methods: {
            udaptedText(){
                if(window.innerWidth < 768) {
                    this.day = this.$t("Ranking.todayShort")
                    this.week = this.$t("Ranking.weekShort")
                    this.month = this.$t("Ranking.monthShort")
                } else {
                    this.day = this.$t("Ranking.today")
                    this.week = this.$t("Ranking.week")
                    this.month = this.$t("Ranking.month")
                }
            },

            changeTabs(type) {
                this.active = type;
            }
        },

        mounted() {
            this.udaptedText()
            window.addEventListener('resize',  this.udaptedText)
        },

        beforeUnmount(){
            window.removeEventListener('resize',  this.udaptedText)
        },

        watch: {
            locale(){
                this.udaptedText()
            }
        }

    }
</script>

<style scoped>

.container-header {
    @apply 
    border-t-2 border-solid border-bg-secondary
    flex flex-col justify-end
}

.item {
    @apply w-[50%] h-[60px] flex justify-center items-center gap-[15px]
    hover:cursor-pointer
    transition duration-1000
}

.link {
    @apply font-serrat font-semibold text-grey lg:text-2xl text-base 
}

.item:hover > .link {
    @apply hover:cursor-pointer hover:text-white
}
.active > .link {
    @apply text-white
}

.active {
    @apply border-b-2 border-solid border-grey
}

</style>