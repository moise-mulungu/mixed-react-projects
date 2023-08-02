# reference

https://tailwindcss.com/docs/display

https://tailwindui.com/components/application-ui/navigation/navbars
login userId: duncan's email, password: sent separately
(partially done)

## width utilities

### fixed widths

Use `w-{number}`or `w-px` to set an element to a fixed width.
e.g: <div class="w-96 ...">96px width</div>

### percentage widths

Use `w-{fraction}` or `w-full` to set an element to a percentage based width.
e.g: <div class="flex ..."> <div class="w-1/2 ... ">Half width</div> </div>

### viewport width

Use `w-screen` to make an element span the entire width of the viewport.
e.g: <div class="w-screen"> <!-- ... --></div>

### resetting the width

The `w-auto` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular breakpoint: e.g: <div class="w-full md:w-auto"><!-- ... --></div>

### Hover, focus, and other states

Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:w-full` to only apply the `w-full` utility on hover.
e.g: <div class="w-1/2 hover:w-full"><!-- ... --></div>


