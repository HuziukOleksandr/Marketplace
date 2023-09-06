<template>
    <div class="pt-[10px] flex flex-col bg-bg-color">
        <router-view name="Header"/>
        <router-view name="default"/>
        <router-view name="Footer"/>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

    export default {
        components: {
            RouterView
        }
    }
</script>