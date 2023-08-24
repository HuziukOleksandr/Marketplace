<template>
    <div class="section">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Marketplace.title") }}</h2>
            <h2 class="sub-title">{{ $t("Marketplace.subTitle") }}</h2>
            <my-search 
                class="input" 
                :placeholder='$t("Marketplace.input")'
                v-model:value="name">
                    <template #image>
                        <img src="../../assets/images/svg/MagnifyingGlass.svg" alt="MagnifyingGlass" />
                    </template>
            </my-search>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="container">
            <div class="content-header">
                <div class="items">
                    <div 
                        class="item" 
                        :class="{ active: this.active === 'NFT' }" 
                        @click="changeTabs('NFT')">
                            <div class="link">{{ $t("Marketplace.NFT") }}</div>
                            <div class="number">{{ cards.length }}</div>
                    </div>
                    <div
                        class="item"   
                        @click="changeTabs('Collection')" 
                        :class="{ active: this.active === 'Collection' }">
                        <div href="" class="link" >{{ $t("Marketplace.collection") }}</div>
                        <div class="number">{{ Object.keys(collections).length }}</div>
                    </div>
                </div>
            </div>
            <div class="content-bgr">
                <div class="content">
                    <div 
                        v-for="card in searchCard(cards)"
                        v-if="this.active === 'NFT'">
                            <my-card 
                                :card="card"
                                :background="background"/>
                    </div>
                    <div 
                        v-for="collection in searchCard(collections)"
                        v-if="this.active === 'Collection'">
                            <my-collection 
                                :collection="collection"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import axios from 'axios'

    export default {

        data() {
        
            return {
                active: "NFT",
                cards: [],
                collections: [],
                name: '',
                background: 'var(--background-color)'
            }
        },

        methods: {
            changeTabs(type) {
                this.active = type;
                this.name = ''
            },

            searchCard(array){
                if( this.name === '' || this.name == null){
                    return array
                } else {
                    return array.filter(elem =>
                        elem.name.toLowerCase().includes(this.name.toLowerCase())
                    );
                }
            } 
        },

        async mounted() {
            await axios
                .get('/data/Cards.json')
                .then(response =>  {
                    this.cards = response.data.Cards;
            });
            
            await axios
                .get('/data/Collections.json')
                .then(response =>  {
                    this.collections = response.data.Collections;
            });
        }
    }
</script>

<style scoped>

.section {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.header {
    max-width: 1050px;
    width: 100%; 
    margin: 0 auto;  
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 56px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.sub-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
    margin-bottom: 30px;
}

.input {
    width: 100%;
}

.content-header {
    width: 100%;
    height: 70px;
    border-top: 1px solid var(--background-secondary);
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.items {
    max-width: 1050px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
}

.item {
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.item:hover {
    cursor: pointer;
}

.item:hover > .link {
    cursor: pointer;
    color: var(--text-color-white);
}

.link {
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--text-color-secondary);
    transition: 0.4s;
}

.number {
    padding: 5px 10px;
    background-color: var(--text-color-secondary);
    color: var(--text-color-white);
    border-radius: 20px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
}

.content-bgr {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
    background-color: var(--background-secondary);
    border-bottom: 2px solid var(--background-color);
    display: flex;
    justify-content: center;
    padding: 60px 0 60px 0;
}

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.active > .link {
    color: var(--text-color-white);
}
.active {
    border-bottom: 3px solid var(--text-color-secondary);
}



/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .header {
        max-width: 690px;  
    }

    .title {
        font-size: 38px;
        line-height: 45px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    .items {
        max-width: 690px;
    }

    .content {
        max-width: 690px;
        grid-template-columns: repeat(2, 1fr);
    }

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .header {
        max-width: 315px;  
    }

    .title {
        font-size: 28px;
        line-height: 35px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    .content-bgr {
        padding: 40px 0 40px 0;
    
    }

    .items {
        max-width: 315px;
    }

    .content {
        max-width: 315px;
        grid-template-columns: repeat(1, 1fr);
    }

    .link {
        font-size: 16px;
        line-height: 22px;
    }

    .number {
        display: none;
    }

}
</style>