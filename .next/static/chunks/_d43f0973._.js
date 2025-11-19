(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/favorites.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAVORITES_KEY": (()=>FAVORITES_KEY),
    "addFavorite": (()=>addFavorite),
    "getFavorites": (()=>getFavorites),
    "isFavorite": (()=>isFavorite),
    "removeFavorite": (()=>removeFavorite),
    "toggleFavorite": (()=>toggleFavorite)
});
'use client';
const FAVORITES_KEY = 'charity_favorites';
function getFavorites() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        const favorites = localStorage.getItem(FAVORITES_KEY);
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Error Getting Favorites:', error);
        return [];
    }
}
function addFavorite(charityId) {
    const favorites = getFavorites();
    if (!favorites.includes(charityId)) {
        favorites.push(charityId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
}
function removeFavorite(charityId) {
    const favorites = getFavorites();
    const updated = favorites.filter((id)=>id !== charityId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}
function isFavorite(charityId) {
    return getFavorites().includes(charityId);
}
function toggleFavorite(charityId) {
    const favorites = getFavorites();
    const isFav = favorites.includes(charityId);
    if (isFav) {
        removeFavorite(charityId);
    } else {
        addFavorite(charityId);
    }
    return !isFav;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/features/home/charity-card/styles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StyledCharityCard": (()=>StyledCharityCard),
    "classes": (()=>classes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-client] (ecmascript)");
;
;
;
const classes = {
    favoriteIconComponent: 'favoriteIconComponent',
    favoriteIconEnabled: 'favoriteIconEnabled',
    favoriteIconDisabled: 'favoriteIconDisabled',
    mainOuterBox: 'mainOuterBox',
    chip: 'chip',
    imageBox: 'imageBox',
    cardContent: 'cardContent',
    cardContentText: 'cardContentText',
    cardContentDesc: 'cardContentDesc'
};
const StyledCharityCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"])(({ theme })=>({
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: 32,
        position: 'relative',
        '&:hover': {
            boxShadow: theme.shadows[6],
            transform: 'translateY(-4px)'
        },
        [`& .${classes.favoriteIconComponent}`]: {
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 10,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
                transform: 'scale(1.1)'
            },
            transition: 'all 0.2s ease'
        },
        [`& .${classes.favoriteIconEnabled}`]: {
            fontSize: 20,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary
        },
        [`& .${classes.favoriteIconDisabled}`]: {
            fontSize: 20,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
        },
        [`& .${classes.mainOuterBox}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 8,
            flexShrink: 0
        },
        [`& .${classes.chip}`]: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
            fontSize: 12,
            height: 20,
            borderRadius: 10,
            [theme.breakpoints.up('sm')]: {
                height: 24
            }
        },
        [`& .${classes.imageBox}`]: {
            position: 'relative',
            width: 80,
            height: 80,
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].secondaryPale,
            [theme.breakpoints.up('sm')]: {
                width: 100,
                height: 100
            },
            [theme.breakpoints.up('md')]: {
                width: 120,
                height: 120
            }
        },
        [`& .${classes.cardContent}`]: {
            alignSelf: 'center',
            flex: 1,
            padding: 0,
            paddingRight: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            '&:last-child': {
                paddingBottom: 0
            }
        },
        [`& .${classes.cardContentText}`]: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
        },
        [`& .${classes.cardContentDesc}`]: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary,
            fontSize: 12,
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            [theme.breakpoints.up('sm')]: {
                WebkitLineClamp: 3
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/features/home/charity-card/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Favorite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FavoriteBorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/favorites.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/home/charity-card/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const CharityCard = ({ charity })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isFav, setIsFav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharityCard.useEffect": ()=>{
            setIsFav((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFavorite"])(charity.id));
        }
    }["CharityCard.useEffect"], [
        charity.id
    ]);
    const handleClick = ()=>router.push(`/charities/${charity.id}`);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        const newState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleFavorite"])(charity.id);
        setIsFav(newState);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledCharityCard"], {
        onClick: handleClick,
        variant: "elevation",
        elevation: 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                onClick: handleFavoriteClick,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].favoriteIconComponent,
                size: "small",
                children: isFav ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].favoriteIconEnabled
                }, void 0, false, {
                    fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].favoriteIconDisabled
                }, void 0, false, {
                    fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].mainOuterBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                        label: charity.category,
                        size: "small",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].chip
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].imageBox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `/images/foundations/${charity.image}`,
                            alt: charity.title,
                            fill: true,
                            priority: parseInt(charity.id) <= 6,
                            style: {
                                objectFit: 'contain'
                            },
                            sizes: "(max-width: 600px) 80px, (max-width: 900px) 100px, 120px"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].cardContentText,
                        children: charity.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].cardContentDesc,
                        children: charity.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/home/charity-card/index.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/home/charity-card/index.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(CharityCard, "9p4aw0yPBNdqfr97Z77wWOhGEdI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CharityCard;
const __TURBOPACK__default__export__ = CharityCard;
var _c;
__turbopack_context__.k.register(_c, "CharityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$bottom$2d$navigation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/bottom-navigation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pull$2d$to$2d$refresh$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/pull-to-refresh/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$bottom$2d$navigation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/bottom-navigation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pull$2d$to$2d$refresh$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/pull-to-refresh/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/shared/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/shared/index.ts [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BottomNavigation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$bottom$2d$navigation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "PullToRefresh": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pull$2d$to$2d$refresh$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "SimpleHeader": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$bottom$2d$navigation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/bottom-navigation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pull$2d$to$2d$refresh$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/pull-to-refresh/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/shared/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/data/charities.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/charities.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$charities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/charities.ts [app-client] (ecmascript)");
;
const charities = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$charities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charities"];
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript) <export default as SimpleHeader>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SimpleHeader": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript)");
}}),
"[project]/src/theme/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/theme/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/features/favorites/styles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StyledFavoritesBox": (()=>StyledFavoritesBox),
    "classes": (()=>classes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-client] (ecmascript)");
;
;
;
const classes = {
    innerBoxWithData: 'innerBox',
    innerBoxWithoutData: 'innerBoxWithoutData',
    favoriteBorder: 'FavoriteBorder',
    noFavoritesText: 'noFavoritesText',
    noFavoritesDesc: 'noFavoritesDesc'
};
const StyledFavoritesBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        [`& .${classes.innerBoxWithData}`]: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            flexGrow: 1,
            padding: '16px 16px 72px 16px'
        },
        [`& .${classes.innerBoxWithoutData}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            marginBottom: '30vh',
            padding: 16
        },
        [`& .${classes.favoriteBorder}`]: {
            fontSize: 80,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.disabled,
            marginBottom: theme.spacing(2)
        },
        [`& .${classes.noFavoritesText}`]: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary,
            marginBottom: theme.spacing(1)
        },
        [`& .${classes.noFavoritesDesc}`]: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.disabled
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/content/text.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"home\":{\"greeting\":{\"title\":\"Welcome patron!\",\"together\":\"Let's make a positive difference together...\"},\"description\":\"Help make a difference by donating to causes that matter. Your support changes lives.\",\"search\":\"Search Charities\",\"notFound\":\"No charities found\",\"adjustSearch\":\"Try adjusting your search\"},\"bottomNavigation\":{\"home\":\"Home\",\"favorites\":\"My Favorites\",\"profile\":\"Profile\"},\"details\":{\"copied\":\"Link copied to clipboard!\",\"cancelled\":\"Share cancelled\",\"details\":\"Details\",\"share\":\"Share\",\"removeFavorite\":\"Remove from Favorites\",\"addFavorite\":\"Add to Favorites\",\"donateNow\":\"Donate Now\",\"linkUnavailable\":\"Donation Link Unavailable\",\"visitSite\":\"Visit Official Website\",\"disclaimer\":\"By clicking \\\"Donate Now\\\", you will be redirected to the charity's official donation page. We do not process payments directly.\"},\"favorites\":{\"favoriteTitle\":\"Favorites\",\"noFavorites\":\"No Favorites Yet!\",\"noFavoritesDesc\":\" Favorite the charities that resonate with you the most to see them here.\"},\"pullToRefresh\":{\"pull\":\"Pull to Refresh\",\"release\":\"Release to Refresh\",\"refreshing\":\"Refreshing...\"},\"profile\":{}}"));}}),
"[project]/src/components/features/favorites/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FavoriteBorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/home/charity-card/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/shared/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/src/components/shared/index.ts [app-client] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$charities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/charities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/favorites.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SimpleHeader$3e$__ = __turbopack_context__.i("[project]/src/components/shared/simple-header/index.tsx [app-client] (ecmascript) <export default as SimpleHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/favorites/styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/content/text.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const Favorites = ()=>{
    _s();
    const [favoriteCharities, setFavoriteCharities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadFavorites = ()=>{
        const favoriteIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFavorites"])();
        const allCharities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$charities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCharities"])();
        const favorites = allCharities.filter((charity)=>favoriteIds.includes(charity.id));
        setFavoriteCharities(favorites);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Favorites.useEffect": ()=>{
            loadFavorites();
            setIsLoading(false);
        }
    }["Favorites.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Favorites.useEffect": ()=>{
            const handleFocus = {
                "Favorites.useEffect.handleFocus": ()=>{
                    loadFavorites();
                }
            }["Favorites.useEffect.handleFocus"];
            window.addEventListener('focus', handleFocus);
            return ({
                "Favorites.useEffect": ()=>window.removeEventListener('focus', handleFocus)
            })["Favorites.useEffect"];
        }
    }["Favorites.useEffect"], []);
    const handleRefresh = async ()=>{
        loadFavorites();
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledFavoritesBox"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SimpleHeader$3e$__["SimpleHeader"], {
                    pageTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].favorites.favoriteTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/features/favorites/index.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/favorites/index.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/favorites/index.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/favorites/index.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledFavoritesBox"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$simple$2d$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SimpleHeader$3e$__["SimpleHeader"], {
                pageTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].favorites.favoriteTitle
            }, void 0, false, {
                fileName: "[project]/src/components/features/favorites/index.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"], {
                    onRefresh: handleRefresh,
                    indicatorColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary,
                    indicatorBgColor: "rgba(255, 255, 255, 0.95)",
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary,
                    pullText: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].pullToRefresh.pull,
                    releaseText: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].pullToRefresh.release,
                    refreshingText: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].pullToRefresh.refreshing,
                    children: favoriteCharities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].innerBoxWithData,
                        children: favoriteCharities.map((charity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$home$2f$charity$2d$card$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                charity: charity
                            }, charity.id, false, {
                                fileName: "[project]/src/components/features/favorites/index.tsx",
                                lineNumber: 75,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/favorites/index.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].innerBoxWithoutData,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].favoriteBorder
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/favorites/index.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].noFavoritesText,
                                textAlign: "center",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].favorites.noFavorites
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/favorites/index.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$favorites$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classes"].noFavoritesDesc,
                                textAlign: "center",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$text$2e$json__$28$json$29$__["default"].favorites.noFavoritesDesc
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/favorites/index.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/favorites/index.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/favorites/index.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/favorites/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/favorites/index.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Favorites, "KFUat5xBu7l1PLz5RXAsuB0i2dU=");
_c = Favorites;
const __TURBOPACK__default__export__ = Favorites;
var _c;
__turbopack_context__.k.register(_c, "Favorites");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d43f0973._.js.map