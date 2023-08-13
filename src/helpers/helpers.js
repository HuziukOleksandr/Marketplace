export function getSlidesNumber(){
    if(window.innerWidth < 768 && window.innerWidth < 1280){
        return 1;
    } else if(window.innerWidth > 768 && window.innerWidth < 1280){
        return 2;
    } else {
        return 3;
    }
}

export function getImageUrl(name) {  
    return new URL(`../assets/images/Cards/${name}.png`, import.meta.url).href;
}

export function getUserImageUrl(name) {
    return new URL(`../assets/images/Avatars/${name}.svg`, import.meta.url).href;
}

export function getCategoryImageUrl(name) {
    return new URL(`../assets/images/Categories/${name}.png`, import.meta.url).href;
} 

export function getCategoryIconUrl(name) {
    return new URL(`../assets/images/Categories/Icon/${name}.svg`, import.meta.url).href;
}

export function getWorkImageUrl(name){
    return new URL(`../assets/images/Work/${name}.svg`, import.meta.url).href;
}

export function getUserBackgroundUrl(name){
    
    return new URL(`../assets/images/Background/${name}.png`, import.meta.url).href;
}

export const scrollTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
} 
