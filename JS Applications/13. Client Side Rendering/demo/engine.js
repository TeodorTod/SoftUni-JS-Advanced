export function renderTemplate(templateAsString, data) {
    const patern = /{{(.+?)}}/gm;
    
    return templateAsString.replace(patern, (match, propName) => {
        return data[propName];
    });
}
