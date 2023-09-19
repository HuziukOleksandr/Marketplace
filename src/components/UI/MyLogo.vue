<template>
    <div 
        class="flex gap-[10px] items-center" 
        @click="this.$router.push({name: 'Main'})">
            <img 
                src="../../assets/images/svg/favicon.svg" 
                alt="icon" 
                class="transition duration-200 hover:cursor-pointer hover:scale-102 sm:w-[24px]">
            <img 
                src="../../assets/images/svg/logo-title.svg" 
                alt="title"
                class="transition duration-200 hover:cursor-pointer hover:scale-102 sm:h-[18px]">
    </div>
</template>

<script>
    export default {
        name: "my-logo"
    }
</script>
