# Problem

## :bulb: Fixed

> SHOULD BEE FIXED IN GATSBY ^2.18.11 - https://github.com/gatsbyjs/gatsby/pull/20068

Before introduction of the type schema the empty `linked_items` returned empty array, after the schema definition introduction (implemented in ), there is a `null`. Customer is using js object destructing which fails when there is null instead of empty array, so i was wondering whether the default value could be changed.

In [plugins/@kentico/gatsby-source-kontent/src/typeNodesSchema.js#L30](plugins/@kentico/gatsby-source-kontent/src/typeNodesSchema.js#L30) - [commit](https://github.com/Simply007/gatsby-null-instead-of-array/commit/4281908c1952c3df2a6338243aabe4e88600d9c3) I have added a code for logging and proving, that the value passed to the element is really empty array`[]` not null, but on [index page](src/pages/index.js), I am getting null for `allKontentItemTestModel` query.

## Reproduce

```sh
  npm install
  npm run prepare
  npm run develop
```

In log you will see:

```plain
***
Placing [] to Linked & element field.
Placing ["049be403-5ca5-5678-8c6d-92b64ceee550","95ef13b6-74e4-5388-98f2-fd006ea5adeb"] to Linked & element field.
Placing ["049be403-5ca5-5678-8c6d-92b64ceee550"] to Linked & element field.
Placing [] to Linked Items field.
***
```

## Example of the data js destruction that breaks

```js
const item = {
  system: {
    codename: "test"
  },
  elements: {
    product_line: {
      linked_items: [
        {
          system: {
            codename: "product_line"
          }
        }
      ]
    }
  }
};

const [product_line] = item.elements.product_line.linked_items
```
