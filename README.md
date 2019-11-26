# Problem

Before introduction of the type schema the empty `linked_items` returned empty array, after the schema definition introduction (implemented in ), there is a `null`. Customer is using js object destructing which fails when there is null instead of empty array, so i was wondering whether the default value could be changed.

In [plugins/@kentico/gatsby-source-kontent/src/typeNodesSchema.js#L30](plugins/@kentico/gatsby-source-kontent/src/typeNodesSchema.js#L30) I have added a code for logging and proving, that the value passed to the element is really empty array`[]` not null, but on [index page](src/pages/index.js), I am getting null for `allKontentItemTestModel` query.

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
