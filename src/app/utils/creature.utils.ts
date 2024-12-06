export enum CreatureType {
    BLUE = "blue",
    RED = "red",
    BLACK = "black",
    WHITE = "white",
    GREEN = "green",
    COLORLESS = "colorless",
    MULTI = "multi"
}

export interface iCreatureProperties {
    imageURL : string;
    color : string;
    icon : string;
}

export const creatureTypeProperties : {[key : string] : iCreatureProperties} = {
    [CreatureType.BLUE] : {
        imageURL : "/img/horror.avif",
        color : "rgb(37, 150, 190)",
        icon : "/img/U.webp"
    },
    [CreatureType.RED] : {
        imageURL : "/img/Imodane.webp",
        color : "rgba(214,117,88,255)",
        icon : "/img/R.webp"
    },
    [CreatureType.BLACK] : {
        imageURL : "/img/sheoldred.webp",
        color : "rgba(57,59,57,255)",
        icon : "/img/B.webp"
    },
    [CreatureType.WHITE] : {
        imageURL : "/img/Heliod.webp",
        color : "rgba(244,245,236,255)",
        icon : "/img/W.webp"
    },
    [CreatureType.GREEN] : {
        imageURL : "/img/Ghalta.webp",
        color : "rgba(87,153,113,255)",
        icon : "/img/G.webp"
    },
    [CreatureType.COLORLESS] : {
        imageURL : "/img/kozilek.jpg",
        color : "rgba(218,215,213,255)",
        icon : "/img/cl.png"
    },
    [CreatureType.MULTI] : {
        imageURL : "/img/aragorn.jpg",
        color : "rgba(231,209,122,255)",
        icon : "/img/mc.png"
    },

}