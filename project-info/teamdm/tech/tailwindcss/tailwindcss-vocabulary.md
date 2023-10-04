# utility classes (a predefined design system)

1. flexbox: `flex`, `shrink-0`
2. padding: `p-6`
3. max-width: `max-w-sm`
4. margin: `mx-auto`
5. background color: `bg-white`
6. border-radius: `rounded-xl`
7. box-shadow: `shadow-lg`
8. width and height: `w-12` `h-12`
9. space-between: `space-x-4`
10. font-size: `text-xl`
11. text-color: `text-black`
12. font-weight: `font-medium`

Utilities are simple HTML classes typically scoped to a single CSS property, like border-style or background-color . Utilities can be used additively to style an object from scratch or to override a style defined in component CSS

- Duncan's opinion: inline CSS (or TW utility classes) is better than separate .css files, because you don't have to look back and forth from .css file to .js file in order to see what each CSS class means - it's right there in the JSX.

## responsive utility designs

Five breakpoints by default:

1. `sm` 640px `@media (min-width: 640px) { ... }`
2. `md` 768px `@media (min-width: 768px) { ... }`
3. `lg` 1024px `@media (min-width: 1024px) { ... }`
4. `xl` 1280px `@media (min-width: 1280px) { ... }`
5. `2xl` 1536px `@media (min-width: 1536px) { ... }`
