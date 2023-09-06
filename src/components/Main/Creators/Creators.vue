    <template>
    <div class="min-h-[840px] m-auto flex flex-col items-center gap-[15px] py-20 md:max-w-[690px] sm:max-w-[315px]">
        <!-- Header Start -->
        <div class="max-w-[1050px] w-[100%] flex justify-between items-end md:max-w-[690px] sm:max-w-[315px]">
            <div class="max-w-[700px] w-[100%] flex flex-col gap-[10px] md:w-[400px]">
                <h2 class="custom-title">
                    {{ $t("Creators.title") }}
                </h2>

                <h3 class="custom-sub-title">
                    {{ $t("Creators.subTitle") }}
                </h3>
            </div>
            
            <my-button
                class="custom-empty-btn sm:hidden"
                @click="this.$router.push( {name: 'Ranking'} )"
            >
                <img 
                    src="../../../assets/images/Buttons/RocketLaunch.svg" 
                    alt="RocketLaunch"
                >
                    {{ $t("Creators.button") }}
            </my-button>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="max-w-[1050px] w-[100%] m-auto grid gap-[30px] grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <Card :cards="artists.slice(0, 12)" />
        </div>
        <!-- Content End -->
        
        <my-button
                class="custom-empty-btn hidden sm:flex w-[100%] justify-center"
                @click="this.$router.push({name: 'Ranking'})"
            >
                <img 
                    src="../../../assets/images/Buttons/RocketLaunch.svg" 
                    alt="RocketLaunch"
                >
                    {{ $t("Creators.button") }}
        </my-button>
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
                artists: ''
            }
        },

        async mounted() {

            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artists = response.data.Artists
            });
        }
    }
</script>