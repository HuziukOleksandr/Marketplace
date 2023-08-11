    <template>
    <div class="artists">
        <!-- Header Start -->
        <div class="header">
            <div class="left-side">
                <h2 class="title">{{ $t("Creators.title") }}</h2>
            <h3 class="sub-title">{{ $t("Creators.subTitle") }}</h3>
            </div>
            <div class="right-side">
                <my-button
                    class="button">
                    <img src="../../../assets/images/Buttons/RocketLaunch.svg" alt="RocketLaunch">
                    {{ $t("Creators.button") }}
                </my-button>
            </div>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="content">
            <Card v-if="shouldDisplayFullArray" :cards="artists.slice(0, 12)" />
            <Card v-else-if="shouldDisplayForTablet" :cards="artists.slice(0, 6)" />
            <Card v-else :cards="artists.slice(0, 5)"/>
        </div>
        <!-- Content End -->
        <div class="bottom">
            <my-button
                    class="button">
                    <img src="../../../assets/images/Buttons/RocketLaunch.svg" alt="RocketLaunch">
                {{ $t("Artists.button") }}
            </my-button>
        </div>
    </div>
</template>

<script>
import Card from './CreatorsCard.vue'
import axios from 'axios'


    export default {
        components: {
            Card
        }, 

        data(){
            return {    
                shouldDisplayFullArray: true,
                shouldDisplayForTablet: true,
                artists: ''
            }
        },

        methods: {
            handleResize() {
                this.shouldDisplayFullArray = window.innerWidth >= 1280;
                this.shouldDisplayForTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
            }
        },

        async mounted() {

            const storedWidth = localStorage.getItem('screenWidth');
            if (storedWidth && parseInt(storedWidth) === window.innerWidth) {
                this.shouldDisplayFullArray = localStorage.getItem('shouldDisplayFullArray') === 'true';
            } else {
                this.shouldDisplayFullArray = window.innerWidth >= 1280;
                this.shouldDisplayForTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
                localStorage.setItem('screenWidth', window.innerWidth);
                localStorage.setItem('shouldDisplayFullArray', this.shouldDisplayFullArray);
            }
            
            window.addEventListener('resize', this.handleResize);
            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artists = response.data.Artists
                });
        },

        beforeUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style  scoped>

/* Main Styles Start */

.artists {
    min-height: 840px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 80px 0;
}

/* Main Styles End */

/* Header Styles Start */

.header {
    max-width: 1050px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.left-side {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    text-align: start;
}

.sub-title {
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    text-align: start;
}

.right {
    display: flex;
    justify-content: end;
    align-items: end;
}

.button {
    height: 60px;
    padding: 0 50px;
    background-color: var(--background-color);
    border: 2px solid var(--button-background-color);
    color: var(--text-color-white);
}

/* Header Styles End */

/* Content Styles Start */

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 775px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

/* Content Styles End */

.bottom {
    display: none;
}


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    /* Main Styles Start */

    .artists {
        min-height: 570px;
        padding: 40px 0;
    }

    /* Main Styles End */
    
    /* Header Styles Start */

    .header {
        max-width: 690px;
    }

    .left-side {
        max-width: 343px;
    }

    .title {
        font-size: 28px;
        line-height: 39px;
    }
    
    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content {
        max-width: 690px;
        min-height: 360px;
        grid-template-columns: repeat(2, 1fr);
    }

    /* Content Styles End */
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    /* Main Styles Start */

    .artists {
        min-height: 570px;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header {
        max-width: 315px;
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }

    .left-side {
        max-width: 343px;
    }

    .title {
        font-size: 28px;
        line-height: 39px;
    }
    
    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    .right-side {
        display: none;
    }
    
    .button {
        width: 315px;
        justify-content: center;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content {
        max-width: 315px;
        min-height: 360px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    /* Content Styles End */

    .bottom {
        display: block;
    }
}

</style>