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
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simulação de autenticação
__turbopack_context__.s([
    "authService",
    ()=>authService
]);
const authService = {
    async login (email, password) {
        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                throw new Error('Falha no login');
            }
            return await response.json();
        } catch (error) {
            console.error('Erro de autenticação:', error);
            // Fallback para demo se a API não estiver rodando
            if (email === 'demo@noponto.com' && password === '123456') {
                return {
                    access_token: 'mock_token_jwt',
                    user: {
                        id: 1,
                        name: 'João Silva',
                        email: 'demo@noponto.com',
                        role: 'EMPLOYEE'
                    }
                };
            }
            throw error;
        }
    },
    logout () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/auth.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const MobileMirror = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/MobileMirror.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/MobileMirror.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-8 flex items-center justify-center text-xs text-slate-500",
            children: "Carregando espelho..."
        }, void 0, false, {
            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MobileMirror;
const MobileGeofenceMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/MobileGeofenceMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/MobileGeofenceMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-64 flex items-center justify-center text-xs text-slate-500",
            children: "Carregando mapa..."
        }, void 0, false, {
            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = MobileGeofenceMap;
function MobilePontoPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Localizando...");
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ponto');
    const [dailySummary, setDailySummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Shared State
    const [employeeId, setEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showHistorySheet, setShowHistorySheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMapSheet, setShowMapSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historySheetFilter, setHistorySheetFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // Camera State
    const [cameraOpen, setCameraOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingType, setPendingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchDailyStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobilePontoPage.useCallback[fetchDailyStatus]": async ()=>{
            if (!employeeId) return;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/ponto/hoje', {
                    params: {
                        employeeId
                    }
                });
                const data = res.data;
                setDailySummary(data);
                // Update history from backend data
                if (data.punches) {
                    setHistory(data.punches.map({
                        "MobilePontoPage.useCallback[fetchDailyStatus]": (p)=>{
                            const timeLabel = new Date(p.timestamp).toLocaleTimeString("pt-BR", {
                                hour: '2-digit',
                                minute: '2-digit'
                            });
                            const locationParts = [];
                            if (p.address) {
                                locationParts.push(p.address);
                            }
                            if (typeof p.latitude === 'number' && typeof p.longitude === 'number') {
                                locationParts.push(`${p.latitude.toFixed(5)}, ${p.longitude.toFixed(5)}`);
                            }
                            const locationLabel = locationParts.join(" • ");
                            const geofence = !!p.isGeofenceViolation;
                            let variant = 'success';
                            let statusLabel = 'Aprovado';
                            if (p.status === 'PENDENTE') {
                                variant = 'warning';
                                statusLabel = 'Pendente';
                            }
                            if (geofence) {
                                variant = 'warning';
                                statusLabel = 'Fora do posto';
                            }
                            if (p.status === 'REJEITADO') {
                                variant = 'destructive';
                                statusLabel = 'Rejeitado';
                            }
                            return {
                                type: p.type,
                                time: timeLabel,
                                status: statusLabel,
                                variant,
                                location: locationLabel || undefined,
                                geofence,
                                distanceFromLocationMeters: typeof p.distanceFromLocationMeters === 'number' ? p.distanceFromLocationMeters : undefined
                            };
                        }
                    }["MobilePontoPage.useCallback[fetchDailyStatus]"]));
                }
            } catch (e) {
                console.error(e);
            }
        }
    }["MobilePontoPage.useCallback[fetchDailyStatus]"], [
        employeeId
    ]);
    const getLocation = (onSuccess, onError)=>{
        const handleFallback = async (originalError)=>{
            try {
                const supportsAbortController = typeof AbortController !== "undefined";
                const controller = supportsAbortController ? new AbortController() : null;
                const timeoutId = supportsAbortController ? setTimeout(()=>controller?.abort(), 7000) : null;
                const response = await fetch("https://ipapi.co/json/", {
                    signal: controller ? controller.signal : undefined
                });
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                if (!response.ok) {
                    throw new Error("IP geolocation error");
                }
                const data = await response.json();
                if (data && typeof data.latitude === "number" && typeof data.longitude === "number") {
                    const fakePos = {
                        coords: {
                            latitude: data.latitude,
                            longitude: data.longitude,
                            accuracy: typeof data.accuracy === "number" ? data.accuracy : 1000,
                            altitude: null,
                            altitudeAccuracy: null,
                            heading: null,
                            speed: null
                        },
                        timestamp: Date.now()
                    };
                    onSuccess(fakePos);
                    return;
                }
                throw new Error("Invalid IP geolocation data");
            } catch  {
                onError(originalError);
            }
        };
        if (!navigator.geolocation) {
            const fallbackError = {
                code: 0,
                message: "Geolocalização não suportada",
                PERMISSION_DENIED: 1,
                POSITION_UNAVAILABLE: 2,
                TIMEOUT: 3
            };
            handleFallback(fallbackError);
            return;
        }
        const optionsHigh = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };
        const optionsLow = {
            enableHighAccuracy: false,
            timeout: 12000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(onSuccess, (errorHigh)=>{
            navigator.geolocation.getCurrentPosition(onSuccess, (errorLow)=>{
                handleFallback(errorLow);
            }, optionsLow);
        }, optionsHigh);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobilePontoPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const token = localStorage.getItem("auth_token");
            const userRaw = localStorage.getItem("user_data");
            if (!token || !userRaw) {
                setIsAuthenticated(false);
                return;
            }
            try {
                const user = JSON.parse(userRaw);
                if (user.role !== "EMPLOYEE" && user.role !== "COLABORADOR") {
                    setIsAuthenticated(false);
                    return;
                }
                if (typeof user.name === "string" && user.name.trim().length > 0) {
                    setUserName(user.name);
                } else {
                    setUserName(null);
                }
                if (typeof user.employeeId === "string" && user.employeeId.trim().length > 0) {
                    setEmployeeId(user.employeeId);
                }
                setIsAuthenticated(true);
            } catch  {
                setIsAuthenticated(false);
            }
        }
    }["MobilePontoPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobilePontoPage.useEffect": ()=>{
            if (!isAuthenticated || activeTab !== 'ponto') return;
            setCurrentTime(new Date());
            const timer = setInterval({
                "MobilePontoPage.useEffect.timer": ()=>{
                    setCurrentTime(new Date());
                }
            }["MobilePontoPage.useEffect.timer"], 1000);
            // Tenta obter localização real ao iniciar (silencioso)
            getLocation({
                "MobilePontoPage.useEffect": (position)=>{
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    const acc = position.coords.accuracy;
                    setCoords({
                        lat,
                        long,
                        acc
                    });
                    setLocation(`${lat.toFixed(5)}, ${long.toFixed(5)}`);
                }
            }["MobilePontoPage.useEffect"], {
                "MobilePontoPage.useEffect": (error)=>{
                    console.warn("Erro ao obter localização inicial:", error.message);
                    setLocation("Localização indisponível");
                }
            }["MobilePontoPage.useEffect"]);
            return ({
                "MobilePontoPage.useEffect": ()=>clearInterval(timer)
            })["MobilePontoPage.useEffect"];
        }
    }["MobilePontoPage.useEffect"], [
        isAuthenticated,
        activeTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobilePontoPage.useEffect": ()=>{
            if (employeeId) {
                fetchDailyStatus();
            }
        }
    }["MobilePontoPage.useEffect"], [
        employeeId,
        fetchDailyStatus
    ]);
    const handleRegister = async (type, photoBlob)=>{
        if (!currentTime || !employeeId) return;
        const formData = new FormData();
        formData.append('employeeId', employeeId);
        formData.append('type', type);
        formData.append('latitude', String(coords?.lat || 0));
        formData.append('longitude', String(coords?.long || 0));
        formData.append('accuracy', String(coords?.acc || 0));
        formData.append('file', photoBlob, 'selfie.jpg');
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/ponto/registrar', formData);
            if (res.status === 201 || res.status === 200) {
                alert(`${type} registrada com sucesso!`);
                fetchDailyStatus(); // Refresh status
            } else {
                alert('Erro ao registrar ponto.');
            }
        } catch (e) {
            console.error(e);
            alert('Erro de conexão.');
        }
    };
    const startRegisterFlow = async (type)=>{
        // 1. Request Location
        setLocation("Obtendo GPS...");
        getLocation((position)=>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const acc = position.coords.accuracy;
            setCoords({
                lat,
                long,
                acc
            });
            setLocation(`${lat.toFixed(5)}, ${long.toFixed(5)} (±${Math.round(acc)}m)`);
            setPendingType(type);
            setCameraOpen(true);
            startCamera();
        }, (error)=>{
            alert("Erro ao obter localização: " + error.message + "\nVerifique se o GPS está ativado.");
            setLocation("Localização indisponível");
        });
    };
    const startCamera = async ()=>{
        try {
            // Verifica se existe suporte a mediaDevices
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("API de câmera não suportada neste navegador");
            }
            // Tenta primeiro com preferência para câmera frontal (celular)
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user'
                }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.warn("Erro ao acessar câmera frontal, tentando câmera padrão...", err);
            // Verifica erro específico de dispositivo não encontrado
            if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                // Fallback para Upload de Arquivo se não houver câmera
                setCameraOpen(false); // Fecha modal da câmera
                // Dispara input de arquivo invisível
                document.getElementById('file-upload-fallback')?.click();
                return;
            }
            try {
                // Fallback para qualquer câmera disponível (PC/Webcam)
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err2) {
                console.error("Erro ao acessar câmera (fallback):", err2);
                // Se falhar também, oferece upload
                setCameraOpen(false);
                const confirmUpload = window.confirm("Câmera não encontrada. Deseja enviar uma foto do arquivo?");
                if (confirmUpload) {
                    document.getElementById('file-upload-fallback')?.click();
                }
            }
        }
    };
    const stopCamera = ()=>{
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            stream.getTracks().forEach((track)=>track.stop());
            videoRef.current.srcObject = null;
        }
    };
    const handleCancelCamera = ()=>{
        stopCamera();
        setCameraOpen(false);
        setPendingType(null);
    };
    const handleCaptureAndRegister = ()=>{
        if (!videoRef.current || !canvasRef.current || !pendingType) return;
        const context = canvasRef.current.getContext('2d');
        if (context) {
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0);
            canvasRef.current.toBlob((blob)=>{
                if (blob) {
                    handleRegister(pendingType, blob);
                }
            }, 'image/jpeg', 0.8);
            stopCamera();
            setCameraOpen(false);
            setPendingType(null);
        }
    };
    const formatTime = (date)=>{
        return date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    };
    const formatDate = (date)=>{
        return date.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
    };
    const handleFileUpload = (e)=>{
        if (e.target.files && e.target.files[0] && pendingType) {
            handleRegister(pendingType, e.target.files[0]);
            setPendingType(null);
        }
    };
    if (isAuthenticated === false) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-sm shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl text-center",
                            children: "App Mobile - Colaborador"
                        }, void 0, false, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4 text-center text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Faça login para acessar o seu espelho de ponto pelo app mobile."
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                onClick: ()=>router.push("/login"),
                                children: "Ir para tela de login"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
            lineNumber: 411,
            columnNumber: 7
        }, this);
    }
    if (!currentTime) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-20 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: "file-upload-fallback",
                accept: "image/*",
                capture: "environment",
                className: "hidden",
                onChange: handleFileUpload
            }, void 0, false, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            activeTab !== 'espelho' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#1E40AF] text-white p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary-foreground/80 text-sm",
                                        children: userName ? `Olá, ${userName}` : "Olá"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold mt-1",
                                        children: activeTab === 'ponto' ? 'Bom trabalho! 👋' : 'Meus Espelhos'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "text-primary-foreground hover:bg-primary/20",
                                onClick: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logout();
                                    router.push("/login");
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 443,
                        columnNumber: 13
                    }, this),
                    activeTab === 'ponto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 text-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary-foreground/80 text-sm capitalize",
                                        children: formatDate(currentTime)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-bold tracking-wider font-mono mt-2",
                                        children: formatTime(currentTime)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 467,
                                columnNumber: 21
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
                                            lineNumber: 475,
                                            columnNumber: 29
                                        }, this),
                                        location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 473,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `px-4 relative z-20 space-y-4 ${activeTab === 'ponto' ? '-mt-6' : 'mt-4'} pb-24`,
                children: [
                    activeTab === 'ponto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "shadow-xl border-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 flex flex-col items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowMapSheet(true),
                                            className: "w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden group border-2 border-dashed border-slate-300 hover:border-primary transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-slate-200/50 flex flex-col items-center justify-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500 font-medium",
                                                            children: "Mapa / Geofence"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: "Toque para visualizar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-20 bg-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 23
                                                }, this),
                                                dailySummary?.lastPunch?.isGeofenceViolation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 right-2 flex items-center gap-1 rounded-full bg-red-600 text-white text-[10px] px-2 py-0.5 shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Fora do posto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "w-full h-14 text-lg bg-green-600 hover:bg-green-700 shadow-green-200 shadow-lg",
                                                    onClick: ()=>startRegisterFlow('Entrada'),
                                                    children: "Entrada"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "destructive",
                                                    className: "w-full h-14 text-lg shadow-red-200 shadow-lg",
                                                    onClick: ()=>startRegisterFlow('Saída'),
                                                    children: "Saída"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs text-muted-foreground mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Selfie obrigatória neste posto"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 487,
                                columnNumber: 17
                            }, this),
                            cameraOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            autoPlay: true,
                                            playsInline: true,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: canvasRef,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4 right-4 flex justify-between items-center z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold",
                                                    children: [
                                                        "Registrando: ",
                                                        pendingType
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "text-white hover:bg-white/20",
                                                    onClick: handleCancelCamera,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4 p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                className: "h-20 w-20 rounded-full bg-white border-4 border-gray-300 hover:bg-gray-100 flex items-center justify-center shadow-2xl",
                                                onClick: handleCaptureAndRegister,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-16 w-16 rounded-full bg-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-32 left-0 right-0 text-center text-white/80 text-sm",
                                            children: "Toque para capturar e confirmar"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 525,
                                columnNumber: 21
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
                                                    lineNumber: 559,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-lg",
                                                    children: "08:45h"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 558,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 557,
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
                                                    lineNumber: 565,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "success",
                                                    className: "bg-green-100 text-green-700 hover:bg-green-200",
                                                    children: "+00:15h"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 556,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-4 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-lg text-gray-800",
                                        children: "Histórico de Hoje"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "link",
                                        size: "sm",
                                        className: "text-[#1E40AF]",
                                        onClick: ()=>setShowHistorySheet(true),
                                        children: "Ver completo"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 571,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: history.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-l-4 border-l-blue-600 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-full ${item.type === 'Entrada' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-gray-800",
                                                                    children: item.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: item.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-gray-400 flex items-center gap-1 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate max-w-[180px]",
                                                                            children: item.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                            lineNumber: 597,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 31
                                                                }, this),
                                                                typeof item.distanceFromLocationMeters === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-[11px] mt-1 ${item.distanceFromLocationMeters < 10 ? 'text-green-600' : item.distanceFromLocationMeters <= 50 ? 'text-yellow-600' : 'text-red-600'}`,
                                                                    children: [
                                                                        item.distanceFromLocationMeters,
                                                                        " m do posto"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: item.variant === 'success' ? 'bg-green-100 text-green-700 border-green-200' : item.variant === 'warning' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-red-100 text-red-700 border-red-200',
                                                    children: item.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 25
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 583,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    activeTab === 'espelho' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileMirror, {
                        employeeId: employeeId
                    }, void 0, false, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            showHistorySheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-end justify-center sm:items-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-sm rounded-t-xl sm:rounded-xl p-6 space-y-4 animate-in slide-in-from-bottom-10 max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg",
                                    children: "Pontos de hoje"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowHistorySheet(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 645,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: historySheetFilter === 'all' ? 'default' : 'outline',
                                    onClick: ()=>setHistorySheetFilter('all'),
                                    children: "Todas"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 652,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: historySheetFilter === 'violations' ? 'default' : 'outline',
                                    onClick: ()=>setHistorySheetFilter('violations'),
                                    children: "Só violações"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const filteredHistory = historySheetFilter === 'violations' ? history.filter((item)=>item.geofence) : history;
                            if (filteredHistory.length === 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-sm text-muted-foreground py-8",
                                    children: [
                                        "Nenhum ponto",
                                        historySheetFilter === 'violations' ? ' com violação' : '',
                                        " registrado hoje."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 675,
                                    columnNumber: 19
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: filteredHistory.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-full ${item.type === 'Entrada' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-gray-800",
                                                                    children: item.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: item.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-gray-400 flex items-center gap-1 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                            lineNumber: 702,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate max-w-[190px]",
                                                                            children: item.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 701,
                                                                    columnNumber: 31
                                                                }, this),
                                                                typeof item.distanceFromLocationMeters === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-[11px] mt-1 ${item.geofence ? 'text-red-600' : item.distanceFromLocationMeters < 10 ? 'text-green-600' : item.distanceFromLocationMeters <= 50 ? 'text-yellow-600' : 'text-red-600'}`,
                                                                    children: [
                                                                        item.distanceFromLocationMeters,
                                                                        " m do posto"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 31
                                                                }, this),
                                                                item.geofence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-red-600 flex items-center gap-1 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                            lineNumber: 723,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        "Fora do posto"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: item.variant === 'success' ? 'bg-green-100 text-green-700 border-green-200' : item.variant === 'warning' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-red-100 text-red-700 border-red-200',
                                                    children: item.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 23
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 683,
                                columnNumber: 17
                            }, this);
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                    lineNumber: 644,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, this),
            showMapSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-end justify-center sm:items-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-sm rounded-t-xl sm:rounded-xl p-4 space-y-3 animate-in slide-in-from-bottom-10 max-h-[80vh] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg",
                                    children: "Mapa do posto"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowMapSheet(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 754,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-64 rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileGeofenceMap, {
                                employeeCoords: coords,
                                workLocation: dailySummary?.workLocation
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 761,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-muted-foreground",
                            children: "Círculo indica a área configurada do posto. Marcadores mostram posto e sua posição aproximada."
                        }, void 0, false, {
                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                            lineNumber: 766,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                    lineNumber: 753,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 752,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6 flex justify-around items-center z-40 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('ponto'),
                        className: `flex flex-col items-center gap-1 ${activeTab === 'ponto' ? 'text-[#1E40AF]' : 'text-gray-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-1.5 rounded-full ${activeTab === 'ponto' ? 'bg-blue-50' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium",
                                children: "Bater Ponto"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 777,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('espelho'),
                        className: `flex flex-col items-center gap-1 ${activeTab === 'espelho' ? 'text-[#1E40AF]' : 'text-gray-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-1.5 rounded-full ${activeTab === 'espelho' ? 'bg-blue-50' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 791,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium",
                                children: "Espelho"
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                                lineNumber: 794,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/mobile/page.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
}
_s(MobilePontoPage, "puL4aWrhsm1Z8QGQNBAb1b5cxq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = MobilePontoPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MobileMirror");
__turbopack_context__.k.register(_c1, "MobileGeofenceMap");
__turbopack_context__.k.register(_c2, "MobilePontoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_trae_projects_NO%20PONTO_apps_web_src_f3ddbbda._.js.map