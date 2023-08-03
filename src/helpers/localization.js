export function getTitleClasses(){
    return {
        'english-title': this.locale === 'EN',
        'ukrainian-title': this.locale === 'UA'
    };
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