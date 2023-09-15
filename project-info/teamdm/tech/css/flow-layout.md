(done)DM: todoMM: great! rename this flow-layout.md and put some searchable(ok) 
howtocss: keyword: keyword:: more info
above each useful solution, just like we've done elsewhere with howtojs

# flow layout

## width algorithms

* Block elements have a default width value of `auto`, not `100%`. `width: auto` works very similar to `margin: auto`
  
  ***howtocss: width: measurement-based values(100%)***:: 
    ```js
    <style>
    h1 {
      width: 100%;
      margin: 0 16px;
      background-color: chartreuse;
    }
  </style>
  <h1>
    Hello World!
  </h1>
    ```

### keyword values

* there are two kinds of values we can specify for width:
  
  1. Measurements (`100%`, `200px`, `5rem`) : Measurement-based values are either completely explicit (eg. 200px), or relative to the parent's available space (eg. 50%).
   
  2. Keywords (`auto`, `fit-content`): Keywords, on the other hand, let us specify different sorts of behaviours depending on the context.

### min-content

When we set `width: min-content`, ***we're specifying that we want our element to become as narrow as it can***, based on the child contents. This is a totally different perspective: we aren't sizing based on the space made available by the parent, we're sizing based on the element's children!

***howtocss: width:: to make an element as narrow as possible, use width: min-content; - the width will be based on the child contents***:
  ```js
  style>
    h1 {
      width: min-content;
      background-color: fuchsia;
    }
  </style>

  <h1>
    This heading is shrunk down.
  </h1>
  ```
### max-content

This value is similar in principle, but it takes an opposite strategy: it never adds any line-breaks. The element's width will be the smallest value that contains the content, without breaking it up:

***howtocss: width: max-content :: element's width will be the smallest value that contains the content***:
  ```js
  <style>
    h1 {
      width: max-content;
      background-color: mediumspringgreen;
    }
  </style>

  <h1>
    This heading is constrained using max-content, which causes the line to extend far longer than it otherwise would!
  </h1>
  ```
  **Unlike with auto, max-content doesn't fill the available space. If we want to add a background color only around the letters, this would be a neat way to do it!**

### fit-content

The way `fit-content` works is as follow: like `min-content` and `max-content`, the `width` is based on the size of the children. If that width can fit within the parent container, it behaves just like `max-content`, not adding any line-breaks.

If the content is too wide to fit in the parent, however, it adds line-breaks as-needed to ensure it never exceeds the available space. It behaves just like `width: auto`.

***howtocss: width: fit-content :: based adding line-breaks as-needed***:
  ```js
  <style>
    h2 {
      width: fit-content;
      background-color: peachpuff;
      margin-bottom: 16px;
      padding: 8px;
    }
  </style>

  <h2>Short</h2>
  <h2>A mid-length heading</h2>
  <h2>The longest heading you've ever seen in your life, will it ever end, ahhhhh ohmigod 😬😬😬😬😬😬😬</h2>
  ```

### Min and max widths

We can add constraints to an element's size using min-width and max-width.

***howtocss: min/max-width :: adding constraints to an element's size***:
```js
  <style>
    .box {
      width: 50%;
      min-width: 170px;
      max-width: 300px;
      margin: 0 auto;
      border: solid hotpink;
    }
  </style>

  <div class="box">
    Hello World
  </div>
  ```
  ***The particularly exciting thing about min-width and max-width is that they let us mix units. We can specify constraints in pixels, but set a percentage width.***

### figures and captions

The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element. The HTML <figcaption> tag is used to define the caption for a figure. It is placed as a child element of the <figure> tag along with the content.

***howtocss: <figcaption> caption for a figure element:: child element of the <figure> tag along with the content***:
  ```js
  <figure>
    <img
      src="/graph.jpg"
      alt="A bar graph showing the number of cats per capita"
    />
    <figcaption>
      Source: Cat Scientists Ltd.
    </figcaption>
  </figure>
  ```

## Height Algorithms

In some ways, both Width and Height work the same way. Setting an element to have a height of 50% will force that item to take up half of the parent element's content area: no more, no less.

In other ways, they're quite different. The default `width` behavior of a block-level element is to fill all the available width, whereas the default `height` behavior is to be ***as small as possible while fitting all of the element's content***; it's closer to `width: min-content` than `width: auto`!

## Margin Collapse

Margin collapsing is when the top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal)

### margin collapse rules
  1.  **only vertical margins collapse**.
***howtocss: margin collapse:: combine two margins in a single one***:
      ```js
      <style>
        p {
          margin-top: 24px;
          margin-bottom: 24px;
        }
      </style>

      <p>Paragraph One</p>
      <p>Paragraph Two</p>
     ```

  2. **Margins only collapse in Flow layout**: margin collapse is unique to `Flow layout`. If you have children inside a `display: flex` parent, those children's margins will never collapse.
   
  3. **Only adjacent elements collapse**

***howtocss: margin collapse:: only adjacent margins collapse***:
      ```js
    <style>
     p {
       margin-top: 32px;
       margin-bottom: 32px;
     }
   </style>

   <p>Paragraph One</p>
   <br />
   <p>Paragraph Two</p>
      ```

 4. The bigger margin wins: this happens when margins are asymmetrical which means, the top element has 72px of space below, while the bottom element only has 24px for example.
   
  5. Margins can collapse in the same direction:  all the examples we've seen involve adjacent opposite margins: the bottom of one element overlaps with the top of the next element. Surprisingly, margins can collapse even in the same direction.
   
***howtocss: margin collapse:: collapsing in the same direction***:
  ```js
  <style>
    .parent {
      margin-top: 72px;
    }

    .child {
      margin-top: 24px;
    }
  </style>

  <div class="parent">
    <p class="child">Paragraph One</p>
  </div>
  
  ```

