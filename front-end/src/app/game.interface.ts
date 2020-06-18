export interface GameInfo  {
    averageweight?: number;
    // TODO: remove the word boardgame
    boardgamecategory?: Property[];
    boardgamemechanic?: Property[];
    boardgamesubdomain?: Property[];
    fancyTitle?: string;
    link?: string;
    // TODO: convert these to be numbers
    maxplayers?: string;
    maxplaytime?: string;
    minplayers?: string;
    minplaytime?: string;
    name?: string;
    playerage?: string;
    rankinfo?: rankInfo[];
}

export interface Property {
    href: string;
    itemstate: string;
    name: string;
    objectid: string;
    objecttype: string;
    primarylink: number;
}

export interface rankInfo {
    baverage: string;
    prettyname: string;
    rank: string;
    rankobjectid: number;
    rankobjecttype: string;
    shortprettyname: string;
    subdomain: string | null;
    veryshortprettyname: string;
}
