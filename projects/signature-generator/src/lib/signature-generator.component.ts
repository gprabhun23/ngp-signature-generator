import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: 'ngp-signature-generator',
  templateUrl: 'signature-generator.component.html',
  styleUrls: ['signature-generator.component.css']
})
export class SignatureGeneratorComponent implements AfterViewInit {
  @ViewChild("canvasEl", { static: false }) canvasEl: ElementRef;
  public base64Image = "";
  private context: CanvasRenderingContext2D;
  @Input("Text") SignatureText = "";
  @Input("DataSource") DataSource: any[] = [];
  @Input("ImageHeight") imageHeight: string = "200";
  @Input("ImageWidth") imageWidth: string = "200";
  @Input("ShowSignature") ShowSignature: boolean = false;
  @Output() SignatureAsBase64: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngAfterViewInit() {

  }

  applyStyles(data) {
    const obj = {
      "font-family": data.FontFamily
    };
    return obj;
  }

  onSignatureSelection(data) {
    this.GenerateSignature(data.FontSize, data.FontFamily, data.FontWeight);
  }

  private GenerateSignature(
    fontSize: string,
    fontFamily: string,
    fontWeight: string
  ) {
    this.context = (this.canvasEl
      .nativeElement as HTMLCanvasElement).getContext("2d");
    this.context.font = ` ${fontSize} ${fontFamily}`;
    this.context.textBaseline = "middle";
    this.context.textAlign = "center";
    this.context.imageSmoothingQuality = "high";
    this.context.imageSmoothingEnabled = true;
    this.context.lineWidth = 15;
    this.context.fillStyle = "black";
    const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText(this.SignatureText, x, y);
    if(this.context){
      this.base64Image = (this.canvasEl
        .nativeElement as HTMLCanvasElement).toDataURL("image/png");
      const canvasWidth = (this.canvasEl.nativeElement as HTMLCanvasElement)
        .width;
      const canvasHeight = (this.canvasEl.nativeElement as HTMLCanvasElement)
        .height;
      this.context.clearRect(0, 0, canvasWidth, canvasHeight);
      this.SignatureAsBase64.emit(this.base64Image);

    }
  }

}
