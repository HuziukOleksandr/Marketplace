export function getHeroTitleStyles(){
    return this.locale === 'EN' ? 
        'leading-[74px] text-[67px]' : 
        'leading-[50px] text-[49px]';
}

export function getHeroTextStyles(){
    return this.locale === 'EN' ? 
        'leading-[30px]' : 
        'leading-[35px]';
}

export function getFooterTitleStyles(){
    return this.locale === 'EN' ? 
        'font-normal text-2xl' : 
        'text-[16px]';
}

export function getTitleClasses(){
    return this.locale === 'EN' ? 
        'leading-[74px] font-normal text-[67px]' : 
        'leading-[50px] font-normal text-[49px]';
}


export function getSubTitleClasses() { 
    return {
        'english-subTitle': this.locale === 'EN',
        'ukrainian-subTitle': this.locale === 'UA'
    };
}



export function getTextClasses(){
    return {
        'english-text': this.locale === 'EN',
        'ukrainian-text': this.locale === 'UA'
    };
}