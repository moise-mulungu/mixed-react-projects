<!--
DM: FYI, I can't validate CSS terminology for you like I can JS, so I can only advise you to
* use authoritative web sites
* revisit each vocab item later, when you know more
* compare the vocab of 2 authoritative sites (sometimes helps for clarity, completeness)

MDN is authoritative and offers glossaries.

For howto articles:
CSS Tricks website is good, but usually there are found articles on specific topics.
Comeau is also good on CSS.
 -->

## selector

A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them.
There are five groups of selectors in css(`attribute`, `class`, `id`, `pseudo-class` and `pseudo-elements`, `combinator`)

## rule

is a grouping of one or more CSS properties which are to be applied to one or more target HTML elements

## property

Properties in CSS are the attributes you can specify values for, like `color` and `font-size`.

## value

CSS value definition syntax, a formal grammar, is used for defining the set of valid values for a CSS property or function.

## unit

A CSS unit determines the size of a property you're setting for an element or its content(e.g: `px`, `%`, `rem`).

## media query

Image result for media query in cs
Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport, but they can also be used to detect other things about the environment your site is running on,

## declaration

A declaration is a combination of a property and a value. THere can be as many declarations as possible in a rule; the first declaration is the first property and a value of a rule.

## CSS data types

CSS data types define typical values (including keywords and units) accepted by CSS properties and functions. They are a special kind of component value type. The most commonly-used types are defined in the CSS Values and Units specification.

## color formats

In CSS color formats, is a way of representing colors. There are four types of color formats

- named-colors(`red`, `green`, `blue`) or keyword colors
- rgb colors (`255`, `255`, `255`), stands for `red`, `green` , `blue`
- hsl colors (`0deg 100% 50% / 0.5`), stands for `hue`, `saturation`, and `lightness`
- hex colors (`#ff0000`) hexadecimal color system

## inheritance

inheritance refers to the relationship between HTML tags (think parent and children tags) and how certain CSS styles can apply to a tag even though there aren’t any CSS rules directly applied to it.

- Note : most of the properties that inherit are typography-related, like `color`, `font-size`, `text-shadow`
