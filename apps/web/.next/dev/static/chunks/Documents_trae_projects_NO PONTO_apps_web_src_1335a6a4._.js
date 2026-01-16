(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pontoStorage",
    ()=>pontoStorage
]);
const STORAGE_KEY = 'noponto_records';
const pontoStorage = {
    getAll: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },
    add: (record)=>{
        const records = pontoStorage.getAll();
        const newRecord = {
            ...record,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString()
        };
        // Adiciona no início
        records.unshift(newRecord);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        return newRecord;
    },
    // Mock inicial para não ficar vazio
    seed: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!localStorage.getItem(STORAGE_KEY)) {
            const mockData = [
                {
                    id: '1',
                    userId: '1',
                    userName: 'João Silva',
                    client: 'Google Brasil',
                    timestamp: new Date().toISOString(),
                    type: 'Entrada',
                    status: 'ok',
                    location: 'Av. Paulista, 1000'
                },
                {
                    id: '2',
                    userId: '1',
                    userName: 'João Silva',
                    client: 'Google Brasil',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
                    type: 'Saída Almoço',
                    status: 'ok',
                    location: 'Av. Paulista, 1000'
                },
                {
                    id: '3',
                    userId: '1',
                    userName: 'João Silva',
                    client: 'Google Brasil',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
                    type: 'Volta Almoço',
                    status: 'ok',
                    location: 'Av. Paulista, 1000'
                },
                {
                    id: '4',
                    userId: '1',
                    userName: 'João Silva',
                    client: 'Google Brasil',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
                    type: 'Saída',
                    status: 'pending',
                    location: 'Av. Paulista, 1000'
                }
            ].sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()); // Mais recente primeiro
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobilePontoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MobilePontoPage() {
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Localizando...");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobilePontoPage.useEffect": ()=>{
            // Evitar erro de hidratação setando a data apenas no cliente
            setCurrentTime(new Date());
            // Carrega histórico inicial
            const records = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontoStorage"].getAll();
            if (records.length === 0) __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontoStorage"].seed();
            updateHistory();
            const timer = setInterval({
                "MobilePontoPage.useEffect.timer": ()=>{
                    setCurrentTime(new Date());
                }
            }["MobilePontoPage.useEffect.timer"], 1000);
            // Simulação de geolocalização
            setTimeout({
                "MobilePontoPage.useEffect": ()=>{
                    setLocation("Av. Paulista, 1000 - São Paulo, SP");
                }
            }["MobilePontoPage.useEffect"], 2000);
            return ({
                "MobilePontoPage.useEffect": ()=>clearInterval(timer)
            })["MobilePontoPage.useEffect"];
        }
    }["MobilePontoPage.useEffect"], []);
    const updateHistory = ()=>{
        const records = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontoStorage"].getAll().slice(0, 3);
        setHistory(records.map((r)=>({
                type: r.type,
                time: new Date(r.timestamp).toLocaleTimeString("pt-BR", {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                status: r.status === 'ok' ? 'Aprovado' : r.status === 'pending' ? 'Pendente' : 'Atraso',
                variant: r.status === 'ok' ? 'success' : r.status === 'pending' ? 'warning' : 'destructive'
            })));
    };
    const playSuccessSound = ()=>{
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const audioCtx = new AudioContext();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            // Efeito de "ding" agradável
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // Começa em 800Hz
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1); // Sobe para 1200Hz
            // Volume envelope (fade out rápido)
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.5);
        } catch (e) {
            console.error("Erro ao tocar som:", e);
        }
    };
    const handleRegister = (type)=>{
        if (!currentTime) return;
        playSuccessSound(); // Toca o som de sucesso
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontoStorage"].add({
            userId: '1',
            userName: 'João Silva',
            client: 'Google Brasil',
            type: type,
            status: 'pending',
            location: location
        });
        updateHistory();
        alert(`${type} registrada com sucesso!`);
    };
    // Formatação de hora
    const formatTime = (date)=>{
        return date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    };
    // Formatação de data
    const formatDate = (date)=>{
        return date.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
    };
    if (!currentTime) return null; // Ou um loading spinner
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-primary text-primary-foreground p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary-foreground/80 text-sm",
                                        children: "Olá, João Silva"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold mt-1",
                                        children: "Bom trabalho! 👋"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "text-primary-foreground hover:bg-primary/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary-foreground/80 text-sm capitalize",
                                children: formatDate(currentTime)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl font-bold tracking-wider font-mono mt-2",
                                children: formatTime(currentTime)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "px-4 -mt-6 relative z-20 space-y-4 pb-24",
                children: [
                    activeTab === 'ponto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "shadow-xl border-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 flex flex-col items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer border-2 border-dashed border-slate-300 hover:border-primary transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-slate-200/50 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium",
                                                        children: "Mapa / Geofence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-20 bg-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "w-full h-14 text-lg bg-green-600 hover:bg-green-700 shadow-green-200 shadow-lg",
                                                    onClick: ()=>handleRegister('Entrada'),
                                                    children: "Entrada"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "destructive",
                                                    className: "w-full h-14 text-lg shadow-red-200 shadow-lg",
                                                    onClick: ()=>handleRegister('Saída'),
                                                    children: "Saída"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs text-muted-foreground mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Selfie obrigatória neste posto"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 flex flex-col items-center justify-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: "Jornada"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-lg",
                                                    children: "08:45h"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 flex flex-col items-center justify-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: "Saldo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "success",
                                                    className: "bg-green-100 text-green-700 hover:bg-green-200",
                                                    children: "+00:15h"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Últimos Registros"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "link",
                                                    className: "text-xs h-auto p-0",
                                                    children: "Ver todos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                history.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between py-2 border-b last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-2 h-2 rounded-full ${item.type.includes("Entrada") || item.type.includes("Volta") ? "bg-green-500" : "bg-red-500"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium",
                                                                                children: item.type
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                                lineNumber: 215,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "Hoje"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-mono font-bold",
                                                                        children: item.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: item.variant,
                                                                        className: "text-[10px] h-5 px-1.5",
                                                                        children: item.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 25
                                                    }, this)),
                                                history.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-muted-foreground text-sm py-4",
                                                    children: "Nenhum registro hoje."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 198,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    activeTab === 'espelho' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-lg flex justify-between items-center",
                                            children: [
                                                "Espelho de Ponto",
                                                mirror && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: mirror.status === 'APROVADO' ? 'bg-green-600' : 'bg-yellow-600',
                                                    children: mirror.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Mês Atual"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-4",
                                    children: loadingMirror ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: "Carregando..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 29
                                    }, this) : mirror ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Trabalhadas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-green-700",
                                                                children: [
                                                                    Number(mirror.workedHours).toFixed(2),
                                                                    "h"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Extras"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-orange-700",
                                                                children: [
                                                                    Number(mirror.overtimeHours).toFixed(2),
                                                                    "h"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Faltas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-red-700",
                                                                children: [
                                                                    Number(mirror.absenceHours).toFixed(2),
                                                                    "h"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Atrasos"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-yellow-700",
                                                                children: [
                                                                    Number(mirror.lateHours).toFixed(2),
                                                                    "h"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full",
                                                variant: "outline",
                                                onClick: handleDownloadPdf,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Download, {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Baixar PDF Oficial"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 33
                                            }, this),
                                            mirror.status !== 'APROVADO' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full bg-green-600 hover:bg-green-700",
                                                onClick: handleConfirmMirror,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle, {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Estou Ciente / Confirmar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-50 text-green-800 p-3 rounded text-center text-sm border border-green-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle, {
                                                        className: "inline-block mr-1 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Espelho confirmado em ",
                                                    format(new Date(), 'dd/MM/yyyy')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertTriangle, {
                                                className: "mx-auto h-8 w-8 mb-2 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 33
                                            }, this),
                                            "Não foi possível carregar o espelho."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 240,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6 flex justify-between items-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'ponto' ? 'text-primary' : 'text-muted-foreground'}`,
                        onClick: ()=>setActiveTab('ponto'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium",
                                children: "Ponto"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'espelho' ? 'text-primary' : 'text-muted-foreground'}`,
                        onClick: ()=>setActiveTab('espelho'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileText, {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium",
                                children: "Espelho"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'postos' ? 'text-primary' : 'text-muted-foreground'}`,
                        onClick: ()=>setActiveTab('postos'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium",
                                children: "Postos"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(MobilePontoPage, "9SbHBUugrUQRB8OjytMf0C50j3w=");
_c = MobilePontoPage;
var _c;
__turbopack_context__.k.register(_c, "MobilePontoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_trae_projects_NO%20PONTO_apps_web_src_1335a6a4._.js.map