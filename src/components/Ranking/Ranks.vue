<template>
    <div class="section">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Ranking.title") }}</h2>
            <h2 class="sub-title">{{ $t("Ranking.subTitle") }}</h2>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="container">
            <div class="content-header">
                <div class="items">
                    <div 
                        class="item" 
                        :class="{active: this.active === 'day'}"
                        @click="changeTabs('day')">
                            <div href="" class="link">{{ day }}</div>
                    </div>
                    <div 
                        class="item"
                        :class="{active: this.active === 'week'}"
                        @click="changeTabs('week')">
                            <div href="" class="link">{{ week }}</div>
                    </div>
                    <div 
                        class="item"
                        :class="{active: this.active === 'month'}"
                        @click="changeTabs('month')">
                            <div href="" class="link">{{ month }}</div>
                    </div>
                    <div 
                        class="item"
                        :class="{active: this.active === 'allTime'}"
                        @click="changeTabs('allTime')">
                            <div href="" class="link">{{ $t("Ranking.time") }}</div>
                    </div>
                </div>
            </div>
            <div class="content">
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

/* .section {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.header {
    max-width: 1050px;
    width: 100%; 
    margin: 0 auto;  
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 56px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.sub-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
    margin-bottom: 30px;
}

.content-header {
    width: 100%;
    height: 70px;
    border-top: 1px solid var(--background-secondary);
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.items {
    max-width: 1050px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
}

.item {
    width: 25%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.item:hover {
    cursor: pointer;
}

.item:hover > .link {
    cursor: pointer;
    color: var(--text-color-white);
}

.link {
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--text-color-secondary);
}

.active > .link {
    color: var(--text-color-white);
}

.active {
    border-bottom: 3px solid var(--text-color-secondary);
}

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 100vh;
    margin: 30px auto;
} */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    /* .header {
        max-width: 690px;  
    }

    .title {
        font-size: 38px;
        line-height: 45px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    .items {
        max-width: 690px;
    }

    .content {
        max-width: 690px;
    } */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* .header {
        max-width: 315px;  
    }

    .title {
        font-size: 28px;
        line-height: 35px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    .content-bgr {
        padding: 40px 0 40px 0;

    }

    .items {
        max-width: 315px;
    }

    .content {
        max-width: 315px;
        grid-template-columns: repeat(1, 1fr);
    }

    .link {
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
        
        transition: 0.4s;
    }

    .number {
        display: none;
    } */
}
</style>