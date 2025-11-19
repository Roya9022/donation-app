module.exports = {

"[project]/src/content/text.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"home\":{\"greeting\":{\"title\":\"Welcome patron!\",\"together\":\"Let's make a positive difference together...\"},\"description\":\"Help make a difference by donating to causes that matter. Your support changes lives.\"},\"bottomNavigation\":{\"home\":\"Home\",\"favorites\":\"My Favorites\",\"profile\":\"Profile\"},\"footer\":{},\"profile\":{},\"favorites\":{}}"));}}),
"[project]/src/utils/getGreeting.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGreeting": (()=>getGreeting)
});
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 5) return 'Good night 🌙';
    if (hour < 12) return 'Good morning ☀️';
    if (hour < 17) return 'Good afternoon 🌤️';
    return 'Good evening 🌙';
}
}}),
"[project]/src/components/features/home/Greeting.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/content/text.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getGreeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getGreeting.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Greeting = ()=>{
    const greeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getGreeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGreeting"])();
    // TODO: replace username with name from auth
    const userFirstName = null;
    const displayGreeting = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : greeting;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-4 bg-white rounded-b-[12px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                fontWeight: 600,
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary
                },
                children: displayGreeting
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/Greeting.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body2",
                fontWeight: 600,
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].text.secondary
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].home.greeting.together
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/Greeting.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/home/Greeting.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Greeting;
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
        category: 'Health',
        image: 'st-judes.jpg',
        website: 'https://www.stjude.org/',
        donateLink: 'https://www.stjude.org/donate'
    },
    {
        id: '2',
        title: 'Doctors Without Borders USA (MSF)',
        description: 'Provides medical humanitarian aid in areas affected by conflict, epidemics, or disasters.',
        category: 'International Aid',
        image: 'doctors-without-borders.jpg',
        website: 'https://www.doctorswithoutborders.org/',
        donateLink: 'https://donate.doctorswithoutborders.org/'
    },
    {
        id: '3',
        title: 'Feeding America',
        description: 'A nationwide network of food banks feeding the hungry in the United States.',
        category: 'Domestic Needs',
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
        category: 'Housing & Aid',
        image: 'habit-for-humanity.jpg',
        website: 'https://www.habitat.org/',
        donateLink: 'https://www.habitat.org/donate'
    },
    {
        id: '7',
        title: 'World Wildlife Fund (WWF)',
        description: 'Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth.',
        category: 'Animals & Wildlife',
        image: 'world-wildlife-fund.jpg',
        website: 'https://www.worldwildlife.org/',
        donateLink: 'https://support.worldwildlife.org/site/Donation2?df_id=14603&14603.donation=form1'
    },
    {
        id: '8',
        title: 'United Way Worldwide',
        description: 'Improves lives by mobilizing the caring power of communities around the world.',
        category: 'Community Development',
        image: 'united-way-worldwide.jpg',
        website: 'https://www.unitedway.org/',
        donateLink: 'https://www.unitedway.org/how-you-can-help/why-donate/make-a-gift'
    },
    {
        id: '9',
        title: 'Boys & Girls Clubs of America',
        description: 'Enables all young people, especially those who need them most, to reach their full potential.',
        category: 'Youth & Education',
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
        category: 'International Aid',
        image: 'direct-relief.jpg',
        website: 'https://www.directrelief.org/',
        donateLink: 'https://www.directrelief.org/donate'
    },
    {
        id: '12',
        title: 'Save the Children',
        description: 'Gives children a healthy start, the opportunity to learn, and protection from harm.',
        category: 'Children & Youth',
        image: 'save-the-children.jpg',
        website: 'https://www.savethechildren.org/',
        donateLink: 'https://www.savethechildren.org/us/ways-to-help/ways-to-give'
    },
    {
        id: '13',
        title: "Palestine Children's Relief Fund (PCRF)",
        description: 'Provides free medical care for injured and ill children in the Middle East, including through sending volunteer medical teams to Palestine.',
        category: 'International Aid',
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
        category: 'Education & Technology',
        image: 'wikimedia-foundation.jpg',
        website: 'https://wikimediafoundation.org/',
        donateLink: 'https://wikimediafoundation.org/wiki/Ways_to_Give'
    },
    {
        id: '17',
        title: 'ASPCA',
        description: 'Works to prevent animal cruelty and provide support to animals in need.',
        category: 'Animals & Wildlife',
        image: 'aspca.jpg',
        website: 'https://www.aspca.org/',
        donateLink: 'https://www.aspca.org/donate'
    },
    {
        id: '18',
        title: 'Make-A-Wish Foundation of America',
        description: 'Creates life-changing wishes for children with critical illnesses.',
        category: 'Children & Youth',
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
        category: 'International Aid',
        image: 'care.jpg',
        website: 'https://www.care.org/',
        donateLink: 'https://www.care.org/donate/'
    },
    {
        id: '22',
        title: 'American Civil Liberties Union (ACLU) Foundation',
        description: 'Works to defend and preserve the individual rights and liberties guaranteed to every person.',
        category: 'Civil Rights & Advocacy',
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
        category: 'Domestic Needs',
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
        category: 'International Aid',
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
        category: 'Animals & Disabilities',
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
        category: 'Civil Rights & Advocacy',
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
        category: 'International Aid',
        image: 'irc.jpg',
        website: 'https://www.rescue.org/',
        donateLink: 'https://www.rescue.org/donate'
    },
    {
        id: '37',
        title: 'Goodwill Industries International',
        description: 'Provides job training, employment placement services, and other community-based programs.',
        category: 'Domestic Needs',
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
        category: 'International Aid',
        image: 'malaria-consortium.jpg',
        website: 'https://www.malariaconsortium.org/',
        donateLink: 'https://www.malariaconsortium.org/donate-to-malaria-consortium'
    },
    {
        id: '41',
        title: 'Big Brothers Big Sisters of America',
        description: 'Creates and supports one-to-one mentoring relationships that ignite the power and promise of youth.',
        category: 'Youth & Education',
        image: 'big-brothers-big-sisters.jpg',
        website: 'https://www.bbbs.org/',
        donateLink: 'https://www.bbbs.org/donate'
    },
    {
        id: '42',
        title: 'PETA',
        description: 'Establish and defend the rights of all animals.',
        category: 'Animals & Wildlife',
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
        category: 'Civil Rights & Advocacy',
        image: 'eji.jpg',
        website: 'https://eji.org/',
        donateLink: 'https://eji.org/take-action/donate/'
    },
    {
        id: '45',
        title: 'The Trevor Project',
        description: 'Provides crisis intervention and suicide prevention services to LGBTQ young people.',
        category: 'Youth & Health',
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
        category: 'Housing & Aid',
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
        category: 'Animals & Wildlife',
        image: 'wildcat-ridge-sanctuary.jpg',
        website: 'https://www.wildanimalsanctuary.org/',
        donateLink: 'https://www.wildanimalsanctuary.org/ways-to-help'
    },
    {
        id: '51',
        title: 'UNRWA (The United Nations Relief and Works Agency)',
        description: 'Provides essential services (education, healthcare, relief) to Palestine Refugees in Gaza, West Bank, Jordan, Lebanon, and Syria.',
        category: 'International Aid',
        image: 'unrwa.jpg',
        website: 'https://www.unrwa.org/',
        donateLink: 'https://www.unrwausa.org/donate'
    },
    {
        id: '52',
        title: 'Medical Aid for Palestinians (MAP)',
        description: 'Provides health and medical care to Palestinians affected by conflict, displacement, and occupation.',
        category: 'International Aid',
        image: 'map.jpg',
        website: 'https://www.map.org.uk/',
        donateLink: 'https://www.map.org.uk/donate'
    },
    {
        id: '53',
        title: 'International Committee of the Red Cross (ICRC)',
        description: 'Works to protect and assist victims of armed conflict and other situations of violence, upholding international humanitarian law.',
        category: 'International Aid',
        image: 'icrc.jpg',
        website: 'https://www.icrc.org/',
        donateLink: 'https://www.icrc.org/en/donate'
    },
    {
        id: '54',
        title: 'Syria Relief',
        description: 'A large UK-based charity providing critical aid, including food, shelter, and medical support, primarily inside Syria.',
        category: 'International Aid',
        image: 'syria-relief.jpg',
        website: 'https://syriarelief.org.uk/',
        donateLink: 'https://syriarelief.org.uk/donate/'
    },
    {
        id: '55',
        title: 'UNICEF',
        description: 'Focused on the rights and well-being of children worldwide, including in Syria and Yemen, providing emergency support and protection.',
        category: 'Children & Youth',
        image: 'unicef.jpg',
        website: 'https://www.unicef.org/',
        donateLink: 'https://www.unicefusa.org/donate'
    },
    {
        id: '56',
        title: 'Mercy Corps',
        description: 'Responds to global conflict and crises, working in countries like Yemen to provide food, water, and economic opportunity.',
        category: 'International Aid (Yemen)',
        image: 'mercy-corps.jpg',
        website: 'https://www.mercycorps.org/',
        donateLink: 'https://www.mercycorps.org/donate'
    },
    {
        id: '57',
        title: 'World Food Programme (WFP)',
        description: "The world's largest humanitarian organization addressing hunger, providing food assistance in crises like those in Yemen and Palestine.",
        category: 'Food & Hunger',
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
        category: 'Refugee Support',
        image: 'irc.jpg',
        website: 'https://www.rescue.org/',
        donateLink: 'https://www.rescue.org/donate'
    },
    {
        id: '60',
        title: 'Cat Tales Wildlife Center',
        description: 'A unique wildlife shelter dedicated to providing exceptional care and second chances for animals in need.',
        category: 'Animals & Wildlife',
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
"[project]/src/components/features/home/CharityCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/charities.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const CharityCard = ({ charity })=>{
    const isDonationLinkValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCharityUrl"])(charity.donateLink);
    const isWebsiteLinkValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$charities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCharityUrl"])(charity.website);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        className: "flex gap-2 p-1 w-full",
        variant: "outlined",
        children: [
            charity.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: `/images/foundations/${charity.image}`,
                alt: charity.title,
                width: 120,
                height: 120,
                className: " p-2 opacity-[0.92] saturate-[0.9] contrast-[0.95]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/CharityCard.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                sx: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body1",
                        gutterBottom: true,
                        sx: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].text.primary,
                            fontWeight: 600
                        },
                        children: charity.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/CharityCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                        label: charity.category,
                        size: "small",
                        sx: {
                            mb: 1,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].pastel.purple.light,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].white
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/CharityCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        sx: {
                            mb: 1
                        },
                        children: charity.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/CharityCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/home/CharityCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/home/CharityCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CharityCard;
}}),
"[project]/src/components/features/home/CharitiesList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$CharityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/home/CharityCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CharitiesList = ({ charities })=>{
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const filtered = charities.filter((c)=>c.title.toLowerCase().includes(filter.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                label: "Search charities...",
                variant: "outlined",
                fullWidth: true,
                value: filter,
                onChange: (e)=>setFilter(e.target.value),
                className: "mb-4"
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/CharitiesList.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-start gap-2",
                children: filtered.map((charity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$CharityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        charity: charity
                    }, charity.id, false, {
                        fileName: "[project]/src/components/features/home/CharitiesList.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/CharitiesList.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/home/CharitiesList.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CharitiesList;
}}),

};

//# sourceMappingURL=_b0bc7137._.js.map