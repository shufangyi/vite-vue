# vite-vue

## Use both vue-composable and any cjs module (such as vuedraggable)  in vite, resulting in an error!


In [vue-composable.esm-bundler.js]

if change

```
import {...} from '@vue/runtime-core';
```

to
```
import {...} from 'vue';
```

then
```
yarn dev --force
```

this error will be solved!
