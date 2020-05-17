# Tensor

This is a Tensor library (ndarray) for deno.js

## Import

```ts
import * as T from "https://ccc-js.github.io/tensor/mod.ts";
```

## Usage

File : tensor1.ts

```ts
import * as T from "https://ccc-js.github.io/tensor/mod.ts";

let a = [1,2,3], b = [1,1,1]
console.log('add(a,b) = ', T.add(a,b));

```

Run

```
$ deno run tensor1.ts
Compile file:///D:/ccc/code/deno/use/tensor1.ts
T.add(a,b)= [ 2, 3, 4 ]
```

## Issues

For any bug reports or feature requests, please create an [issue on GitHub](https://github.com/ccc-js/tensor/issues).
