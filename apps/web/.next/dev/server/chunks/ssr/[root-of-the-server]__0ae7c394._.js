module.exports = [
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`,
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCell",
    ()=>TableCell,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: `w-full caption-bottom text-sm ${className || ''}`,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
            lineNumber: 8,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: `[&_tr]:border-b ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: `[&_tr:last-child]:border-0 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableBody.displayName = "TableBody";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: `border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: `h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: `p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableCell.displayName = "TableCell";
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmployeeProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/apps/web/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/file-down.js [app-ssr] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/pen-square.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/lucide-react/dist/esm/icons/user-x.js [app-ssr] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/trae_projects/NO PONTO/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
;
function EmployeeProfilePage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const [employee, setEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("personal");
    // States for Point tab
    const [timeRecords, setTimeRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingRecords, setLoadingRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // States for Audit tab
    const [auditLogs, setAuditLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAudit, setLoadingAudit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // States for Legal tab
    const [cltSummary, setCltSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (id) {
            fetchEmployee();
            fetchCltSummary();
        }
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab === 'point') {
            fetchTimeRecords();
        } else if (activeTab === 'audit') {
            fetchAuditLogs();
        }
    }, [
        activeTab
    ]);
    const fetchEmployee = async ()=>{
        try {
            const res = await fetch(`http://localhost:4000/colaboradores/${id}`);
            if (!res.ok) throw new Error("Failed to fetch employee");
            const data = await res.json();
            setEmployee(data);
        } catch (e) {
            console.error(e);
        } finally{
            setLoading(false);
        }
    };
    const fetchCltSummary = async ()=>{
        try {
            const res = await fetch(`http://localhost:4000/colaboradores/${id}/clt/resumo`);
            if (res.ok) {
                const data = await res.json();
                setCltSummary(data);
            }
        } catch (e) {
            console.error("Failed to fetch CLT summary", e);
        }
    };
    const fetchTimeRecords = async ()=>{
        setLoadingRecords(true);
        try {
            const res = await fetch(`http://localhost:4000/colaboradores/${id}/pontos`);
            if (res.ok) {
                const data = await res.json();
                setTimeRecords(data);
            }
        } catch (e) {
            console.error("Failed to fetch time records", e);
        } finally{
            setLoadingRecords(false);
        }
    };
    const handleInactivate = async ()=>{
        if (!confirm("Tem certeza que deseja inativar este colaborador?")) return;
        try {
            const res = await fetch(`http://localhost:4000/colaboradores/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'INATIVO'
                })
            });
            if (res.ok) {
                alert("Colaborador inativado com sucesso");
                fetchEmployee(); // Refresh data
            } else {
                alert("Erro ao inativar colaborador");
            }
        } catch (e) {
            console.error(e);
            alert("Erro de conexão");
        }
    };
    const fetchAuditLogs = async ()=>{
        setLoadingAudit(true);
        try {
            const res = await fetch(`http://localhost:4000/colaboradores/${id}/auditoria`);
            const data = await res.json();
            setAuditLogs(data);
        } catch (e) {
            console.error("Failed to fetch audit logs", e);
        } finally{
            setLoadingAudit(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-center",
        children: "Carregando..."
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
        lineNumber: 120,
        columnNumber: 25
    }, this);
    if (!employee) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-center",
        children: "Colaborador não encontrado"
    }, void 0, false, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
        lineNumber: 121,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-4 border-b mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/colaboradores",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        children: employee.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 text-sm text-muted-foreground items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: employee.status === 'ATIVO' ? 'default' : 'secondary',
                                                className: employee.status === 'ATIVO' ? 'bg-green-600' : '',
                                                children: employee.status || 'ATIVO'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: employee.position
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Matrícula: ",
                                                    employee.matricula || '-'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2",
                                title: "Ver Espelho de Ponto",
                                onClick: ()=>setActiveTab('point'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Espelho"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2",
                                title: "Histórico de Alterações",
                                onClick: ()=>setActiveTab('audit'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Histórico"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "gap-2",
                                title: "Editar Dados",
                                onClick: ()=>alert('Funcionalidade de edição em breve'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this),
                            employee.status !== 'INATIVO' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "destructive",
                                size: "icon",
                                title: "Inativar Colaborador",
                                onClick: handleInactivate,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 158,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 border-b overflow-x-auto pb-0",
                        children: [
                            'personal',
                            'professional',
                            'schedule',
                            'point',
                            'documents',
                            'legal',
                            'audit'
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: `px-4 py-3 text-sm font-medium rounded-t-lg transition-colors border-b-2 ${activeTab === tab ? 'bg-white border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`,
                                children: [
                                    tab === 'personal' && 'Dados Pessoais',
                                    tab === 'professional' && 'Dados Profissionais',
                                    tab === 'schedule' && 'Jornada',
                                    tab === 'point' && 'Ponto',
                                    tab === 'documents' && 'Documentos',
                                    tab === 'legal' && 'Resumo Legal',
                                    tab === 'audit' && 'Auditoria'
                                ]
                            }, tab, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-b-lg rounded-tr-lg border shadow-sm min-h-[400px]",
                        children: [
                            activeTab === 'personal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Nome Completo"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.name,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "CPF"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.cpf,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "RG"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.rg || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Data de Nascimento"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.birthDate ? new Date(employee.birthDate).toLocaleDateString() : '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Telefone"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.phone || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "E-mail Pessoal"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.email || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Endereço"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.address || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, this),
                            activeTab === 'professional' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Empresa / Cliente"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.contract?.client?.name || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Contrato"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.contract?.name || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Cargo"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.position,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Função"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.function || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Departamento"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: employee.department || '-',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Data de Admissão"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: new Date(employee.admissionDate).toLocaleDateString(),
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, this),
                            activeTab === 'schedule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        children: "Nome da Escala"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: employee.schedule?.name || 'Padrão',
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        children: "Tipo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: employee.schedule?.type || '-',
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground uppercase font-bold",
                                                        children: "Entrada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-lg",
                                                        children: employee.schedule?.startTime || '08:00'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground uppercase font-bold",
                                                        children: "Saída Almoço"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-lg",
                                                        children: employee.schedule?.lunchStart || '12:00'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground uppercase font-bold",
                                                        children: "Volta Almoço"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-lg",
                                                        children: employee.schedule?.lunchEnd || '13:00'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground uppercase font-bold",
                                                        children: "Saída"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-lg",
                                                        children: employee.schedule?.endTime || '17:00'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 p-3 bg-slate-50 rounded border",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        className: "h-4 w-4 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Exigir Foto: ",
                                                            employee.requirePhoto ? 'Sim' : 'Não'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 p-3 bg-slate-50 rounded border",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-4 w-4 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Exigir GPS: ",
                                                            employee.requireGPS ? 'Sim' : 'Não'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 253,
                                columnNumber: 26
                            }, this),
                            activeTab === 'point' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium",
                                                children: "Histórico de Registros"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                children: "Exportar Relatório"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Data/Hora"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Tipo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Localização"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Precisão"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Evidência"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    children: loadingRecords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            colSpan: 6,
                                                            className: "text-center py-8",
                                                            children: "Carregando registros..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 45
                                                    }, this) : timeRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            colSpan: 6,
                                                            className: "text-center py-8",
                                                            children: "Nenhum registro encontrado."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 45
                                                    }, this) : timeRecords.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-mono",
                                                                    children: new Date(record.timestamp).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        children: record.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate max-w-[200px]",
                                                                                title: record.address,
                                                                                children: record.address || 'Sem endereço'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                                lineNumber: 330,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground",
                                                                                children: [
                                                                                    record.latitude?.toFixed(5),
                                                                                    ", ",
                                                                                    record.longitude?.toFixed(5)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                                lineNumber: 331,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: record.accuracy ? `${Math.round(record.accuracy)}m` : '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: record.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                                            className: "h-4 w-4 text-blue-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                            lineNumber: 340,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 61
                                                                    }, this) : '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        className: record.status === 'APROVADO' ? 'bg-green-600' : record.status === 'PENDENTE' ? 'bg-yellow-600' : record.status === 'FORA_DA_AREA' ? 'bg-red-600' : 'bg-slate-600',
                                                                        children: record.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, record.id, true, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 296,
                                columnNumber: 25
                            }, this),
                            activeTab === 'documents' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium",
                                                children: "Documentos Digitais"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Upload de Documento"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 29
                                    }, this),
                                    employee.documents && employee.documents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: employee.documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border rounded-lg flex items-start gap-4 hover:bg-slate-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-blue-100 rounded text-blue-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium truncate",
                                                                title: doc.name,
                                                                children: doc.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: doc.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: new Date(doc.createdAt).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        title: "Baixar",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                            className: "h-4 w-4 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, doc.id, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-12 text-slate-400 border-2 border-dashed rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "h-12 w-12 mb-4 opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Nenhum documento anexado."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "mt-4",
                                                children: "Upload de Documento"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 363,
                                columnNumber: 25
                            }, this),
                            activeTab === 'legal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium mb-4",
                                        children: "Resumo Legal & Inconsistências"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-slate-50 border rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Horas Trabalhadas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: [
                                                            cltSummary?.horas_trabalhadas || 0,
                                                            "h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-green-600",
                                                        children: "No período atual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-slate-50 border rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Horas Extras"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-orange-600",
                                                        children: [
                                                            cltSummary?.horas_extras || 0,
                                                            "h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "50% e 100%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-slate-50 border rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Atrasos / Faltas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-red-600",
                                                        children: [
                                                            cltSummary ? cltSummary.faltas + cltSummary.atrasos : 0,
                                                            "h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-green-600",
                                                        children: "Regular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-slate-50 border rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Banco de Horas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: [
                                                            cltSummary?.banco_horas_saldo > 0 ? '+' : '',
                                                            cltSummary?.banco_horas_saldo || 0,
                                                            "h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Saldo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-sm text-muted-foreground uppercase",
                                                children: "Status de Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "h-5 w-5 text-green-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Documentação Obrigatória"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: "bg-green-600",
                                                                children: "Em dia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "h-5 w-5 text-green-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 437,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Jornada de Trabalho"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: "bg-green-600",
                                                                children: "Regular"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "h-5 w-5 text-yellow-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Intervalo Interjornada"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: "bg-yellow-600",
                                                                children: "Atenção"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 400,
                                columnNumber: 25
                            }, this),
                            activeTab === 'audit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium mb-4",
                                        children: "Logs de Auditoria"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Data/Hora"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Usuário"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Ação"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Detalhes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    children: loadingAudit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            colSpan: 4,
                                                            className: "text-center py-8",
                                                            children: "Carregando logs..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 45
                                                    }, this) : auditLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            colSpan: 4,
                                                            className: "text-center py-8 text-muted-foreground",
                                                            children: "Nenhum registro encontrado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 45
                                                    }, this) : auditLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-mono text-sm",
                                                                    children: new Date(log.createdAt || log.timestamp).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-medium",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                                lineNumber: 480,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            log.user?.name || 'Sistema'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        children: log.action
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$trae_projects$2f$NO__PONTO$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-muted-foreground",
                                                                    children: log.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, log.id, true, {
                                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                                lineNumber: 455,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/trae_projects/NO PONTO/apps/web/src/app/admin/colaboradores/[id]/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ae7c394._.js.map