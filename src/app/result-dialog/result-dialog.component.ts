import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  filename: string;
  url: string;
}

@Component({
  selector: 'qpp-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements AfterViewInit {

  loaded = false;
  rawObjectUrl: string;
  imageObjectUrl: SafeUrl;
  file: File;
  fileImage: HTMLImageElement;

  @ViewChild('dream', {static: true})
  dream: ElementRef<HTMLImageElement>;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngAfterViewInit() {
    // ロード完了後に画像を表示する
    this.dream.nativeElement.addEventListener('load', () => {
      this.loaded = true;

      // 幅と高さを設定
      const img = this.dream.nativeElement;
      const canvas = this.canvas.nativeElement;
      canvas.width = img.width;
      canvas.height = img.height;

      this.updateCanvas();
    });
  }

  onFileChange() {
    // FileをFileReaderで読み取り、dataURLをImageにセット
    // Imageの読み込み完了を待ってcanvasを更新する
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.addEventListener('load', () => {
      this.fileImage = new Image();
      this.fileImage.src = reader.result as string;
      this.fileImage.addEventListener('load', () => this.updateCanvas());
    });
  }

  updateCanvas() {
    const img = this.dream.nativeElement;
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    // クリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 重ね合わせる画像(選択済みの場合)
    if (this.fileImage) {
      ctx.drawImage(this.fileImage, 0, 0);
    }

    // canvasにimageを描画
    ctx.drawImage(img, 0, 0);

    // BlobのObjectURLを作成してa hrefに設定
    // Canvas.toDataURL()だとサイズ制限があるためこちらを使用
    if (this.rawObjectUrl) {
      URL.revokeObjectURL(this.rawObjectUrl);
    }
    this.rawObjectUrl = null;
    this.imageObjectUrl = null;
    canvas.toBlob(blob => {
      this.rawObjectUrl = URL.createObjectURL(blob);
      this.imageObjectUrl = this.sanitizer.bypassSecurityTrustUrl(this.rawObjectUrl);
    });
  }

  closeDialog() {
    if (this.rawObjectUrl) {
      URL.revokeObjectURL(this.rawObjectUrl);
    }
    this.dialogRef.close();
  }

}
