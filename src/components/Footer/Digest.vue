<template>
    <div class="max-w-[420px] w-[100%] flex flex-col ">
        <h2 
            class="text-xl custom-text-lg-sec mb-[25px]"
        >
            {{ $t("Footer.title") }}
        </h2>

        <p class="text-base font-serrat font-semibold text-grey mb-[20px]">
            {{ $t("Footer.sub-title") }}
        </p>

        <div class="relative flex sm:block sm:h-[105px]">
            <my-input 
                class="max-w-[420px] w-[100%] h-[60px] rounded-[20px] sm:mb-[15px] sm:h-[45px]" 
                :placeholder="$t('Footer.input')"
            />
            <my-button class="absolute custom-btn right-0 sm:h-[45px] sm:w-[100%] sm:justify-center">
                <img 
                    src="../../assets/images/Buttons/EnvelopeSimple.svg" 
                    alt="EnvelopeSimple"
                >
                {{ $t("Footer.button") }}
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>