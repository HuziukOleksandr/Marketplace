    <template>
    <div class="custom-frame-styles">
        <!-- Header Start -->
        <div class="w-[100%] flex justify-between items-end">
            <div class="max-w-[700px] w-[100%] md:w-[400px]">
                <h2 class="custom-title mb-[10px]">
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
        <div class="custom-grid-creators">
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

<style scoped>

.custom-grid-creators {
    @apply w-[100%]
    grid 
    grid-cols-4 
    md:grid-cols-2 
    sm:grid-cols-1
    gap-[30px]
}

</style>