# Axis IIIF

An experimental UI for interacting with IIIF Change Discovery API.

[**Demo**](https://mathewjordan.github.io/axis-iiif/) | [**Code**](https://github.com/mathewjordan/axis-iiif)

![image](https://user-images.githubusercontent.com/7376450/193591174-c0a7f291-65b8-4456-9718-1108f0b23bf0.png)

## Usage

Axis allows for consuming applications to be returned an array of IIIF Presentation API resources by their `id` URI. From this array, a consuming application would be able to update local resources compatible with Manifest or Collection shapes.

### Cart Callback

Example on using `cartCallback` to return to your consuming application the active canvas ID. This will return as a string.

```jsx
const id = "https://example.org/iiif/change-discovery.json";

const handleCartCallback = (resources) => {
  if (resources) console.log(resources);

  /**
   * Output:
   *
   * Array [ "https://example.org/iiif/...", "https://example.org/iiif/...." ]
   *  0: "https://example.org/iiif/manifest/821"
   *  1: "https://example.org/iiif/manifest/1187"
   *  length: 2
   */
};

return <AxisIIIF id={id} cartCallback={handleCartCallback} />;
```

## Development

### Environment

This will open up a local dev server with live reloading.

```shell
npm install
npm run dev
```

### Build

This will build and package the component

```shell
npm run build
```

This will create a static version of the site to the `/static` directory

```shell
npm run build:static
```
