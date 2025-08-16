export const valideURLConvert = (name)=>{
        const url = name?.toString().replaceAll("&","-")
        return url
    }