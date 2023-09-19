<template>
    <div class="w-[100%] max-w-[510px] h-[75px] flex justify-between">
        <div class="item">
            <div class="number custom-text-lg-sec">
                {{ stats.volume }}+
            </div>
            <div class="text custom-text-nm">
                {{ $t("Artist.volume") }}
            </div>
        </div>

        <div class="item">
            <div class="number custom-text-lg-sec">
                {{ stats.sold }}+
            </div>
            <div class="text custom-text-nm">
                {{ $t("Artist.sold") }}
            </div>
        </div>

        <div class="item">
            <div class="number custom-text-lg-sec">
                {{ stats.followers }}+
            </div>
            <div class="text custom-text-nm">
                {{ $t("Artist.followers") }}
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            stats: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

.item {
    @apply w-[155px]
}

.number {
    @apply text-2xl sm:text-base
}

.text {
    @apply text-xl sm:text-base
}

</style>