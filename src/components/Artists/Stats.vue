<template>
    <div class="stats">
        <div class="item">
            <div class="number">
                {{ stats.volume }}+
            </div>
            <div class="text">
                {{ $t("Artist.volume") }}
            </div>
        </div>

        <div class="item">
            <div class="number">
                {{ stats.sold }}+
            </div>
            <div class="text">
                {{ $t("Artist.sold") }}
            </div>
        </div>

        <div class="item">
            <div class="number">
                {{ stats.followers }}+
            </div>
            <div class="text">
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

/* Main Styles Start */

.stats {
    max-width: 510px;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
}

.number {
    font-family: "SpaceMono", sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 39px;
    color: var(--text-color-white);
}

.text {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
}

/* Main Styles End */

</style>