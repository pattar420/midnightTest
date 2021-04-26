

export const headerCards = [
            {
                "body": "Events",
                "link": "/events"
            },

            {
                "body": "Services",
                "link": "/services"
            },

            {
                "body": "Projects",
                "link": "/projects"
            },

            {
                "body": "Sponsors",
                "link": "/sponsors"
            },

            {
                "body": "Contact us",
                "link": "/contact"
            }
    ];


export const social = [
    {"name": "facebook", "link": "https://www.facebook.com/midnightwestproductions"},
    {"name": "instagram", "link":  "https://www.instagram.com/midnightwestproductions/"},
    {"name": "youtube", "link": "https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw/videos"}
];

export const sponsors = [
    {"name": "filmfreeway", "link": "https://www.filmfreeway.com/", "logo": ''}
];

export const eventCards = [
    {}
];


export const projectCards = [
    {"name": "Mothers and Sons", "src": "midnightmothers.jpg"},
    {"name": "It's a wonderful life", "src": "midnightwonder.jpg"},
    {"name": "Midnight Zombie Fest", "src": "midnightZfest.jpg"}
]


export const setProjectCards = (action, card='', name='') => {
    if(action === 'add'){
        projectCards = [...projectCards, card]
    } else if(action === 'remove'){
        for(let c of projectCards){
            if(c[name] === name){
                projectCards.pop(c)
            }
        }
    }
}