# ngp-signature-generator

Signature generator allows you to create cursive font style signature in a base64 format.

Table of contents
=================

  * [Features](#features)
  * [Getting started](#getting-started)
  * [Usage](#usage-sample)
  * [API](#api)

## Features
- [x] Allow you to specify the text for signature.
- [x] Show the options based on settings.
- [x] Allow to specify image height and width.
- [x] Image will be received as base64 string.
- [x] Accessibility.

## Getting started
### Step 1: Install `ngp-signature-generator`:

#### NPM
```shell
npm i ngp-signature-generator
```
### Step 2: Import the SignatureGeneratorModule:
```js
import {SignatureGeneratorModule} from 'ngp-signature-generator';

@NgModule({
  declarations: [AppComponent],
  imports: [SignatureGeneratorModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
### Usage sample

```html
<app-signature-generator
[Text]="SignatureText"
[ShowSignature]="true"
[ImageHeight]="150"
[ImageWidth]="250"
[DataSource]="dataSource"
(SignatureAsBase64)="getBase64Signature($event)"
>
</app-signature-generator>

<button class="ngp-mcq-mybutton" (click)="generateSignatures()">Generate</button>

```
```javascript

constructor() {
    this.SignatureText = "Ganesh Prabhu N";
    this.dataSource = [
      {
        FontFamily: "Cedarville Cursive",
        FontSize: "20px",
        FontWeight: "bold"
      },
      {
        FontFamily: "Indie Flower",
        FontSize: "30px",
        FontWeight: "bold"
      },
      {
        FontFamily: "Kristi",
        FontSize: "30px",
        FontWeight: "bold"
      },
      {
        FontFamily: "Grand Hotel",
        FontSize: "30px",
        FontWeight: "bold"
      },
      {
        FontFamily: "Mrs Saint Delafield",
        FontSize: "30px",
        FontWeight: "bold"
      }
    ];
  }
  getBase64Signature(event) {
    console.log("Signature" + event);
  }
```

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [Text] | `string`  | `null` | yes | Text to be converted as image |
| ShowSignature | `boolean` |  `false` | no | This will hide the Signature Image On Disable and Viceversa |
| ImageHeight  | `string` | `200` | no |  Allow to specify signature image height  |
| ImageWidth | `string` | `200` | no | Allow to specify signature image width |
| DataSource | `Array` | `_` | yes | Array of font type / varients for signature generation |

### Outputs
| Output  | Description |
| ------------- | ------------- |
| (SignatureAsBase64) | Event is emitted when selected signature is generated. |

### Author
* [Ganesh Prabhu N](https://in.linkedin.com/in/ganeshprabhun23)


## License

MIT
