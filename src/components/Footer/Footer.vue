<template>
    <div class="bg-bg-secondary flex flex-col gap-[50px] py-10 ">
        <div class="w-[1050px] m-auto flex justify-between md:flex-col md:gap-[30px] md:w-[690px] sm:w-[315px] sm:flex-col sm:gap-[30px]">
            <Community/>
            <Explore />
            <Digest />
        </div>

        <div class="min-h-[35px] w-[1050px] m-auto  border-t-solid border-t-2 border-grey flex items-end md:w-[690px] sm:w-[315px]">
            <p class="font-serrat font-normal text-xs text-[#CCCCCC]">Ⓒ NFT Market. Use this template freely.</p>
        </div>
    </div>
</template>

<script>
import Digest from './Digest.vue'
import Explore from './Explore.vue'
import Community from './Community.vue'

    export default {
        components: {
            Digest, Explore, Community
        }
    }
</script>