<template>
    <div class="bg-bg-secondary flex flex-col gap-[50px] py-10 ">
        <div class="custom-wrapper flex justify-between  lg:flex-row flex-col gap-[30px]">
            <Community/>
            <Explore />
            <Digest />
        </div>

        <div class="custom-wrapper border-t-solid border-t-2 border-grey flex items-end">
            <p class="font-serrat font-normal text-xs text-[#CCCCCC] mt-[10px]">
                Ⓒ NFT Market. Use this template freely.
            </p>
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