module.exports = {

"[project]/data/charities.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "charities": (()=>charities)
});
const charities = [
    {
        id: '1',
        title: "St. Jude Children's Research Hospital",
        description: 'Treats and defeats childhood cancer and other life-threatening diseases.',
        category: 'Children',
        image: 'st-judes.jpg',
        website: 'https://www.stjude.org/',
        donateLink: 'https://www.stjude.org/donate'
    },
    {
        id: '2',
        title: 'Doctors Without Borders USA (MSF)',
        description: 'Provides medical humanitarian aid in areas affected by conflict, epidemics, or disasters.',
        category: 'International',
        image: 'doctors-without-borders.jpg',
        website: 'https://www.doctorswithoutborders.org/',
        donateLink: 'https://donate.doctorswithoutborders.org/'
    },
    {
        id: '3',
        title: 'Feeding America',
        description: 'A nationwide network of food banks feeding the hungry in the United States.',
        category: 'Domestic',
        image: 'feeding-america.jpg',
        website: 'https://www.feedingamerica.org/',
        donateLink: 'https://www.feedingamerica.org/take-action/campaigns/fund-the-fight/donate'
    },
    {
        id: '4',
        title: 'The Nature Conservancy',
        description: 'Works to conserve the lands and waters on which all life depends.',
        category: 'Environment',
        image: 'nature-conservancy.jpg',
        website: 'https://www.nature.org/',
        donateLink: 'https://www.nature.org/en-us/get-involved/how-to-help/donate/'
    },
    {
        id: '5',
        title: "Alzheimer's Association",
        description: "Leads the way to end Alzheimer's and all other dementia by accelerating global research.",
        category: 'Health',
        image: 'alzheimers-association.jpg',
        website: 'https://www.alz.org/',
        donateLink: 'https://www.alz.org/get-involved-now/donate'
    },
    {
        id: '6',
        title: 'Habitat for Humanity International',
        description: 'Builds and improves homes in partnership with families in need.',
        category: 'Housing',
        image: 'habit-for-humanity.jpg',
        website: 'https://www.habitat.org/',
        donateLink: 'https://www.habitat.org/donate'
    },
    {
        id: '7',
        title: 'World Wildlife Fund (WWF)',
        description: 'Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth.',
        category: 'Animals',
        image: 'world-wildlife-fund.jpg',
        website: 'https://www.worldwildlife.org/',
        donateLink: 'https://support.worldwildlife.org/site/Donation2?df_id=14603&14603.donation=form1'
    },
    {
        id: '8',
        title: 'United Way Worldwide',
        description: 'Improves lives by mobilizing the caring power of communities around the world.',
        category: 'Community',
        image: 'united-way-worldwide.jpg',
        website: 'https://www.unitedway.org/',
        donateLink: 'https://www.unitedway.org/how-you-can-help/why-donate/make-a-gift'
    },
    {
        id: '9',
        title: 'Boys & Girls Clubs of America',
        description: 'Enables all young people, especially those who need them most, to reach their full potential.',
        category: 'Children',
        image: 'big-brothers-big-sisters.jpg',
        website: 'https://www.bgca.org/',
        donateLink: 'https://www.bgca.org/ways-to-give/donate'
    },
    {
        id: '10',
        title: 'American Red Cross',
        description: 'Prevents and alleviates human suffering in the face of emergencies.',
        category: 'Disaster Relief',
        image: 'red-cross.jpeg',
        website: 'https://www.redcross.org/',
        donateLink: 'https://www.redcross.org/donate/donation.html'
    },
    {
        id: '11',
        title: 'Direct Relief',
        description: 'Delivers essential medical resources to communities affected by poverty or disaster.',
        category: 'International',
        image: 'direct-relief.jpg',
        website: 'https://www.directrelief.org/',
        donateLink: 'https://www.directrelief.org/donate'
    },
    {
        id: '12',
        title: 'Save the Children',
        description: 'Gives children a healthy start, the opportunity to learn, and protection from harm.',
        category: 'Children',
        image: 'save-the-children.jpg',
        website: 'https://www.savethechildren.org/',
        donateLink: 'https://www.savethechildren.org/us/ways-to-help/ways-to-give'
    },
    {
        id: '13',
        title: "Palestine Children's Relief Fund (PCRF)",
        description: 'Provides free medical care for injured and ill children in the Middle East, including through sending volunteer medical teams to Palestine.',
        category: 'International',
        image: 'pcrf.jpg',
        website: 'https://www.pcrf.net/',
        donateLink: 'https://www.pcrf.net/donate'
    },
    {
        id: '14',
        title: 'Smithsonian Institution',
        description: 'Increases and diffuses knowledge through its museums, research, and educational programs.',
        category: 'Arts & Culture',
        image: 'smithsonian-istitution.jpg',
        website: 'https://www.si.edu/',
        donateLink: 'https://www.si.edu/support'
    },
    {
        id: '15',
        title: 'Leukemia & Lymphoma Society',
        description: 'Fights blood cancers through research, education, and patient services.',
        category: 'Health',
        image: 'leukemia-and-lymphoma-society.jpg',
        website: 'https://www.lls.org/',
        donateLink: 'https://bloodcancerunited.org/get-involved/ways-to-give'
    },
    {
        id: '16',
        title: 'Wikimedia Foundation',
        description: 'Supports Wikipedia and other free knowledge projects globally.',
        category: 'Education',
        image: 'wikimedia-foundation.jpg',
        website: 'https://wikimediafoundation.org/',
        donateLink: 'https://wikimediafoundation.org/wiki/Ways_to_Give'
    },
    {
        id: '17',
        title: 'ASPCA',
        description: 'Works to prevent animal cruelty and provide support to animals in need.',
        category: 'Animals',
        image: 'aspca.jpg',
        website: 'https://www.aspca.org/',
        donateLink: 'https://www.aspca.org/donate'
    },
    {
        id: '18',
        title: 'Make-A-Wish Foundation of America',
        description: 'Creates life-changing wishes for children with critical illnesses.',
        category: 'Children',
        image: 'make-a-wish-foundation.jpg',
        website: 'https://wish.org/',
        donateLink: 'https://wish.org/ways-to-help'
    },
    {
        id: '19',
        title: 'Planned Parenthood Federation of America',
        description: 'Provides reproductive health care, sex education, and advocacy.',
        category: 'Health',
        image: 'planned-parenthood.jpg',
        website: 'https://www.plannedparenthood.org/',
        donateLink: 'https://www.weareplannedparenthood.org/onlineactions/2U7UN1iNhESWUfDs4gDPNg2'
    },
    {
        id: '20',
        title: 'American Heart Association',
        description: 'Funds cardiovascular medical research, educates consumers, and advocates for public health.',
        category: 'Health',
        image: 'american-heart-association.jpg',
        website: 'https://www.heart.org/',
        donateLink: 'https://www2.heart.org/site/SPageNavigator/donatenow_red.html'
    },
    {
        id: '21',
        title: 'CARE',
        description: 'Fights global poverty by empowering women and girls worldwide.',
        category: 'International',
        image: 'care.jpg',
        website: 'https://www.care.org/',
        donateLink: 'https://www.care.org/donate/'
    },
    {
        id: '22',
        title: 'American Civil Liberties Union (ACLU) Foundation',
        description: 'Works to defend and preserve the individual rights and liberties guaranteed to every person.',
        category: 'Civil Rights',
        image: 'aclu.jpg',
        website: 'https://www.aclu.org/',
        donateLink: 'https://action.aclu.org/give/now'
    },
    {
        id: '23',
        title: 'City of Hope',
        description: 'A comprehensive cancer center and a leader in research and treatment of cancer and diabetes.',
        category: 'Health',
        image: 'city-of-hope.jpg',
        website: 'https://www.cityofhope.org/',
        donateLink: 'https://www.cityofhope.org/giving'
    },
    {
        id: '24',
        title: 'Good360',
        description: 'Distributes donated goods to charities working with people in need.',
        category: 'Domestic',
        image: 'good360.jpg',
        website: 'https://good360.org/',
        donateLink: 'https://good360.org/donate'
    },
    {
        id: '25',
        title: 'Grameen Foundation',
        description: 'Works to end poverty and hunger by helping the world’s poor, especially women, achieve their potential.',
        category: 'Economic Development',
        image: 'grameen-foundation.jpg',
        website: 'https://grameenfoundation.org/',
        donateLink: 'https://grameenfoundation.org/take-action/donate'
    },
    {
        id: '26',
        title: 'Water.org',
        description: 'Brings safe water and sanitation to the world through access to small, affordable loans.',
        category: 'International',
        image: 'water-dot-org.jpg',
        website: 'https://water.org/',
        donateLink: 'https://water.org/donate'
    },
    {
        id: '27',
        title: 'National Public Radio (NPR)',
        description: 'Produces and distributes news, analysis, and cultural programming.',
        category: 'Arts & Culture',
        image: 'npr.jpg',
        website: 'https://www.npr.org/',
        donateLink: 'https://www.npr.org/donations/support'
    },
    {
        id: '28',
        title: 'National Geographic Society',
        description: 'Uses science, exploration, education, and storytelling to illuminate and protect the wonder of our world.',
        category: 'Environment',
        image: 'national-geographic-society.jpg',
        website: 'https://www.nationalgeographic.org/',
        donateLink: 'https://www.nationalgeographic.org/give'
    },
    {
        id: '29',
        title: 'Environmental Defense Fund',
        description: 'Finds practical, lasting solutions to the most serious environmental problems.',
        category: 'Environment',
        image: 'environmental-defense-fund.jpg',
        website: 'https://www.edf.org/',
        donateLink: 'https://www.edf.org/donate'
    },
    {
        id: '30',
        title: 'Canine Companions',
        description: 'Provides highly-trained service dogs for people with disabilities free of charge.',
        category: 'Animals',
        image: 'canine-companions.jpg',
        website: 'https://canine.org/',
        donateLink: 'https://canine.org/donate-now'
    },
    {
        id: '31',
        title: 'Teach for America',
        description: 'Finds, develops, and supports equity-oriented leaders to transform education.',
        category: 'Education',
        image: 'teach-for-america.jpg',
        website: 'https://www.teachforamerica.org/',
        donateLink: 'https://www.teachforamerica.org/donate'
    },
    {
        id: '32',
        title: 'Human Rights Watch',
        description: 'Investigates and reports on abuses happening all around the world.',
        category: 'Civil Rights',
        image: 'human-rights-watch.jpg',
        website: 'https://www.hrw.org/',
        donateLink: 'https://www.hrw.org/donate'
    },
    {
        id: '33',
        title: 'World Central Kitchen',
        description: 'Provides meals in response to humanitarian, climate, and community crises.',
        category: 'Disaster Relief',
        image: 'world-central-kitchen.jpg',
        website: 'https://wck.org/',
        donateLink: 'https://wck.org/donate'
    },
    {
        id: '34',
        title: "Michael J. Fox Foundation for Parkinson's Research",
        description: "Dedicated to finding a cure for Parkinson's disease through an aggressively funded research agenda.",
        category: 'Health',
        image: 'michael-j-fox-foundation.jpg',
        website: 'https://www.michaeljfox.org/',
        donateLink: 'https://www.michaeljfox.org/donate'
    },
    {
        id: '35',
        title: 'First Book',
        description: 'Provides new, high-quality books and resources to children in need.',
        category: 'Education',
        image: 'first-book.jpg',
        website: 'https://www.firstbook.org/',
        donateLink: 'https://www.firstbook.org/donate'
    },
    {
        id: '36',
        title: 'International Rescue Committee (IRC)',
        description: 'Helps people affected by humanitarian crises—including the climate crisis—to survive, recover, and rebuild their lives.',
        category: 'International',
        image: 'irc.jpg',
        website: 'https://www.rescue.org/',
        donateLink: 'https://www.rescue.org/donate'
    },
    {
        id: '37',
        title: 'Goodwill Industries International',
        description: 'Provides job training, employment placement services, and other community-based programs.',
        category: 'Domestic',
        image: 'goodwill.jpg',
        website: 'https://www.goodwill.org/',
        donateLink: 'https://www.goodwill.org/donors/'
    },
    {
        id: '38',
        title: 'Kiva',
        description: 'A non-profit that allows people to lend money to low-income entrepreneurs and students.',
        category: 'Economic Development',
        image: 'kiva.jpg',
        website: 'https://www.kiva.org/',
        donateLink: 'https://www.kiva.org/donate'
    },
    {
        id: '39',
        title: 'National Alliance on Mental Illness (NAMI)',
        description: 'Dedicated to improving the lives of individuals and families affected by mental illness.',
        category: 'Health',
        image: 'nami.jpg',
        website: 'https://www.nami.org/',
        donateLink: 'https://www.nami.org/About-NAMI/Donate-to-NAMI'
    },
    {
        id: '40',
        title: 'Malaria Consortium',
        description: 'Works to prevent, control, and treat malaria and other communicable diseases in Africa and Asia.',
        category: 'International',
        image: 'malaria-consortium.jpg',
        website: 'https://www.malariaconsortium.org/',
        donateLink: 'https://www.malariaconsortium.org/donate-to-malaria-consortium'
    },
    {
        id: '41',
        title: 'Big Brothers Big Sisters of America',
        description: 'Creates and supports one-to-one mentoring relationships that ignite the power and promise of youth.',
        category: 'Children',
        image: 'big-brothers-big-sisters.jpg',
        website: 'https://www.bbbs.org/',
        donateLink: 'https://www.bbbs.org/donate'
    },
    {
        id: '42',
        title: 'PETA',
        description: 'Establish and defend the rights of all animals.',
        category: 'Animals',
        image: 'peta.jpg',
        website: 'https://www.peta.org/',
        donateLink: 'https://www.peta.org/donate'
    },
    {
        id: '43',
        title: 'Trust for Public Land',
        description: 'Creates parks and protects land for people to enjoy, ensuring livable, healthy communities for all.',
        category: 'Environment',
        image: 'trust-for-public-land.jpg',
        website: 'https://www.tpl.org/',
        donateLink: 'https://www.tpl.org/donate'
    },
    {
        id: '44',
        title: 'Equal Justice Initiative (EJI)',
        description: 'Works to end mass incarceration and excessive punishment in the United States.',
        category: 'Civil Rights',
        image: 'eji.jpg',
        website: 'https://eji.org/',
        donateLink: 'https://eji.org/take-action/donate/'
    },
    {
        id: '45',
        title: 'The Trevor Project',
        description: 'Provides crisis intervention and suicide prevention services to LGBTQ young people.',
        category: 'Children',
        image: 'the-trevor-project.jpg',
        website: 'https://www.thetrevorproject.org/',
        donateLink: 'https://www.thetrevorproject.org/donate'
    },
    {
        id: '46',
        title: 'Shriners Hospitals for Children',
        description: 'Provides specialized medical care to children with orthopaedic conditions, burns, spinal cord injuries, and cleft lip and palate.',
        category: 'Health',
        image: 'shriners-hospitals-for-children.jpg',
        website: 'https://www.shrinerschildrens.org/',
        donateLink: 'https://www.shrinerschildrens.org/en/support-us/ways-to-give/donate-now'
    },
    {
        id: '47',
        title: 'Covenant House',
        description: 'Provides housing and supportive services to young people facing homelessness.',
        category: 'Housing',
        image: 'covenant-house.jpg',
        website: 'https://www.covenanthouse.org/',
        donateLink: 'https://www.covenanthouse.org/get-involved/ways-to-give/donate-now'
    },
    {
        id: '48',
        title: 'Rainforest Alliance',
        description: 'Works at the intersection of business, agriculture, and forests to make responsible business the new normal.',
        category: 'Environment',
        image: 'rainforest-alliance.jpg',
        website: 'https://www.rainforest-alliance.org/',
        donateLink: 'https://www.rainforest-alliance.org/donate'
    },
    {
        id: '49',
        title: 'Americares',
        description: 'Delivers medicines and medical supplies to health programs around the world and in the U.S.',
        category: 'Disaster Relief',
        image: 'americares.jpg',
        website: 'https://www.americares.org/',
        donateLink: 'https://www.americares.org/donate'
    },
    {
        id: '50',
        title: 'Wildcat Ridge Sanctuary',
        description: 'Preventing and alleviating cruelty to animals which are abandoned or were subject to deprivation or neglect, by providing care and boarding.',
        category: 'Animals',
        image: 'wildcat-ridge-sanctuary.jpg',
        website: 'https://www.wildanimalsanctuary.org/',
        donateLink: 'https://www.wildanimalsanctuary.org/ways-to-help'
    },
    {
        id: '51',
        title: 'UNRWA (The United Nations Relief and Works Agency)',
        description: 'Provides essential services (education, healthcare, relief) to Palestine Refugees in Gaza, West Bank, Jordan, Lebanon, and Syria.',
        category: 'International',
        image: 'unrwa.jpg',
        website: 'https://www.unrwa.org/',
        donateLink: 'https://www.unrwausa.org/donate'
    },
    {
        id: '52',
        title: 'Medical Aid for Palestinians (MAP)',
        description: 'Provides health and medical care to Palestinians affected by conflict, displacement, and occupation.',
        category: 'International',
        image: 'map.jpg',
        website: 'https://www.map.org.uk/',
        donateLink: 'https://www.map.org.uk/donate'
    },
    {
        id: '53',
        title: 'International Committee of the Red Cross (ICRC)',
        description: 'Works to protect and assist victims of armed conflict and other situations of violence, upholding international humanitarian law.',
        category: 'International',
        image: 'icrc.jpg',
        website: 'https://www.icrc.org/',
        donateLink: 'https://www.icrc.org/en/donate'
    },
    {
        id: '54',
        title: 'Syria Relief',
        description: 'A large UK-based charity providing critical aid, including food, shelter, and medical support, primarily inside Syria.',
        category: 'International',
        image: 'syria-relief.jpg',
        website: 'https://syriarelief.org.uk/',
        donateLink: 'https://syriarelief.org.uk/donate/'
    },
    {
        id: '55',
        title: 'UNICEF',
        description: 'Focused on the rights and well-being of children worldwide, including in Syria and Yemen, providing emergency support and protection.',
        category: 'Children',
        image: 'unicef.jpg',
        website: 'https://www.unicef.org/',
        donateLink: 'https://www.unicefusa.org/donate'
    },
    {
        id: '56',
        title: 'Mercy Corps',
        description: 'Responds to global conflict and crises, working in countries like Yemen to provide food, water, and economic opportunity.',
        category: 'International',
        image: 'mercy-corps.jpg',
        website: 'https://www.mercycorps.org/',
        donateLink: 'https://www.mercycorps.org/donate'
    },
    {
        id: '57',
        title: 'World Food Programme (WFP)',
        description: "The world's largest humanitarian organization addressing hunger, providing food assistance in crises like those in Yemen and Palestine.",
        category: 'Disaster Relief',
        image: 'wfp.jpg',
        website: 'https://www.wfp.org/',
        donateLink: 'https://secure.wfpusa.org/donate/1'
    },
    {
        id: '58',
        title: 'National Breast Cancer Foundation',
        description: 'Providing help and inspire hope to those affected by breast cancer through early detection, education, and support services.',
        category: 'Health',
        image: 'national-breast-cancer-foundation.jpg',
        website: 'https://www.nationalbreastcancer.org/',
        donateLink: 'https://www.nationalbreastcancer.org/donate'
    },
    {
        id: '59',
        title: 'International Rescue Committee (IRC)',
        description: 'Helps people whose lives have been shattered by conflict and disaster, with major operations in Syria, Ukraine, and other war zones.',
        category: 'International',
        image: 'irc.jpg',
        website: 'https://www.rescue.org/',
        donateLink: 'https://www.rescue.org/donate'
    },
    {
        id: '60',
        title: 'Cat Tales Wildlife Center',
        description: 'A unique wildlife shelter dedicated to providing exceptional care and second chances for animals in need.',
        category: 'Animals',
        image: 'cat-tales-wildlife-center.jpg',
        website: 'https://www.cattales.org/',
        donateLink: 'https://www.cattales.org/donate'
    }
];
}}),
"[project]/lib/charities.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "charities": (()=>charities),
    "getAllCategories": (()=>getAllCategories),
    "getAllCharities": (()=>getAllCharities),
    "getCharitiesByCategory": (()=>getCharitiesByCategory),
    "getCharityById": (()=>getCharityById),
    "getSafeDonateLink": (()=>getSafeDonateLink),
    "validateCharityUrl": (()=>validateCharityUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/charities.ts [app-ssr] (ecmascript)");
;
const charities = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charities"];
// Allowed charity domains
const ALLOWED_DOMAINS = [
    'stjude.org',
    'doctorswithoutborders.org',
    'feedingamerica.org',
    'nature.org',
    'alz.org',
    'habitat.org',
    'worldwildlife.org',
    'unitedway.org',
    'bgca.org',
    'redcross.org',
    'directrelief.org',
    'savethechildren.org',
    'pcrf.net',
    'si.edu',
    'lls.org',
    'wikimedia.org',
    'donate.wikimedia.org',
    'aspca.org',
    'wish.org',
    'plannedparenthood.org',
    'weareplannedparenthood.org',
    'heart.org',
    'care.org',
    'aclu.org',
    'cityofhope.org',
    'good360.org',
    'grameenfoundation.org',
    'water.org',
    'npr.org',
    'nationalgeographic.org',
    'edf.org',
    'canine.org',
    'teachforamerica.org',
    'hrw.org',
    'wck.org',
    'michaeljfox.org',
    'firstbook.org',
    'rescue.org',
    'goodwill.org',
    'kiva.org',
    'nami.org',
    'malariaconsortium.org',
    'bbbs.org',
    'peta.org',
    'tpl.org',
    'eji.org',
    'thetrevorproject.org',
    'shrinerschildrens.org',
    'covenanthouse.org',
    'rainforest-alliance.org',
    'americares.org',
    'wildanimalsanctuary.org',
    'unrwa.org',
    'unrwausa.org',
    'map.org.uk',
    'icrc.org',
    'syriarelief.org.uk',
    'unicef.org',
    'unicefusa.org',
    'mercycorps.org',
    'wfp.org',
    'nationalbreastcancer.org',
    'cattales.org',
    'give-usa.keela.co'
];
function validateCharityUrl(url) {
    try {
        const urlObj = new URL(url);
        return ALLOWED_DOMAINS.some((domain)=>urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
    } catch  {
        return false;
    }
}
function getSafeDonateLink(charity) {
    if (validateCharityUrl(charity.donateLink)) {
        return charity.donateLink;
    }
    console.warn(`Invalid donate link for ${charity.title}: ${charity.donateLink}`);
    return null;
}
function getAllCharities() {
    return charities;
}
function getCharityById(id) {
    return charities.find((charity)=>charity.id === id);
}
function getCharitiesByCategory(category) {
    return charities.filter((charity)=>charity.category === category);
}
function getAllCategories() {
    return [
        ...new Set(charities.map((charity)=>charity.category))
    ];
}
}}),
"[project]/src/theme/colors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": (()=>colors)
});
const colors = {
    text: {
        primary: '#525252',
        secondary: '#616161',
        disabled: '#9e9e9e',
        dark: '#212121'
    },
    primary: '#82AB9B',
    primaryShadow: '#82AB9B14',
    secondary: '#5C3167',
    secondaryLight: '#7A4B86',
    secondaryTextLight: '#845F8E',
    secondaryPale: '#FBF5FF',
    'dark-text': '#1C1C1C',
    'dark-grey': '#323232',
    shadow: '#F0F0F0',
    white: '#FFFFFF',
    pastel: {
        yellow: {
            light: '#CFC27B',
            dark: '#B3A76A'
        },
        blue: {
            light: '#BFCEEC',
            dark: '#96A6C5'
        },
        pink: {
            light: '#EAC1DD',
            dark: '#D5A4C4'
        },
        green: {
            light: '#82AB9B',
            dark: '#618074'
        },
        purple: {
            light: '#ACACE6',
            dark: '#8585B3'
        }
    }
};
}}),
"[project]/src/theme/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
;
}}),
"[project]/src/theme/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/content/text.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"home\":{\"greeting\":{\"title\":\"Welcome patron!\",\"together\":\"Let's make a positive difference together...\"},\"description\":\"Help make a difference by donating to causes that matter. Your support changes lives.\",\"search\":\"Search Charities\",\"notFound\":\"No charities found\",\"adjustSearch\":\"Try adjusting your search\"},\"bottomNavigation\":{\"home\":\"Home\",\"favorites\":\"My Favorites\",\"profile\":\"Profile\"},\"details\":{\"copied\":\"Link copied to clipboard!\",\"cancelled\":\"Share cancelled\",\"details\":\"Details\",\"share\":\"Share\",\"removeFavorite\":\"Remove from Favorites\",\"addFavorite\":\"Add to Favorites\",\"donateNow\":\"Donate Now\",\"linkUnavailable\":\"Donation Link Unavailable\",\"visitSite\":\"Visit Official Website\",\"disclaimer\":\"By clicking \\\"Donate Now\\\", you will be redirected to the charity's official donation page. We do not process payments directly.\"},\"footer\":{},\"profile\":{},\"favorites\":{}}"));}}),
"[project]/src/components/features/charity-details-content/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$OpenInNew$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/OpenInNew.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/charities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/content/text.json (json)");
'use client';
;
;
;
;
;
;
;
const CharityDetailsContent = ({ charity })=>{
    const isDonationLinkValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCharityUrl"])(charity.donateLink);
    const isWebsiteLinkValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCharityUrl"])(charity.website);
    //TODO: Find and add more details about charities in data file
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflowY: 'auto',
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    py: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            position: 'relative',
                            width: '100%',
                            height: {
                                xs: 250,
                                sm: 300,
                                md: 350
                            },
                            borderRadius: 4,
                            overflow: 'hidden',
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].secondaryPale,
                            mb: 3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: `/images/foundations/${charity.image}`,
                            alt: charity.title,
                            fill: true,
                            style: {
                                objectFit: 'contain'
                            },
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                            label: charity.category,
                            sx: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].white,
                                fontSize: '12px',
                                height: {
                                    xs: 20,
                                    sm: 24
                                },
                                borderRadius: 2.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h4",
                        sx: {
                            fontWeight: 700,
                            mb: 1.5,
                            fontSize: '20px',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].text.primary,
                            lineHeight: 1.2
                        },
                        children: charity.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body1",
                        sx: {
                            mb: 4,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].text.secondary,
                            fontSize: '14px'
                        },
                        children: charity.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    py: 2,
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].white,
                    boxShadow: '0 -4px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: [
                    isDonationLinkValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        size: "small",
                        href: charity.donateLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$OpenInNew$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                            lineNumber: 109,
                            columnNumber: 22
                        }, void 0),
                        sx: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].white,
                            textTransform: 'none',
                            fontSize: '16px',
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].pastel.green.dark,
                                boxShadow: 4
                            }
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].details.donateNow
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        size: "small",
                        disabled: true,
                        sx: {
                            textTransform: 'none',
                            fontSize: '16px',
                            py: 1.5,
                            borderRadius: 3
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].details.linkUnavailable
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    isWebsiteLinkValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outlined",
                        size: "medium",
                        href: charity.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$OpenInNew$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                            lineNumber: 149,
                            columnNumber: 22
                        }, void 0),
                        sx: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary,
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary,
                            textTransform: 'none',
                            fontSize: '16px',
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 500,
                            borderWidth: '2px',
                            '&:hover': {
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary,
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primaryShadow
                            }
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].details.visitSite
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            mt: 2,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].text.disabled,
                            lineHeight: 1.5
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].details.disclaimer
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/charity-details-content/index.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/charity-details-content/index.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CharityDetailsContent;
}}),

};

//# sourceMappingURL=_41d8a80b._.js.map