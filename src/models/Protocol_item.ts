import { AppConstants } from '../app/app.constants';

export class ProtocolItem {

  private _imageUrl = AppConstants.imageUrl;
  private _previewUrl = AppConstants.videoPreviewUrl;
  private _iconUrl = AppConstants.iconUrl;
  private _videoUrl = AppConstants.videoUrl;
  private _alt = AppConstants.alt;

  icon_url: string;
  meida_url: string;
  note: string;
  order: number;
  _viewed: boolean;

  constructor() {

  }

  deserialize(input: any): ProtocolItem {
    Object.assign(this, input);
    return this;
  }

  iconUrl() {
    return this._iconUrl;
  }

  mediaUrl() {
    return this.canShowVideo() ? this._videoUrl + this._videoUrl + this._alt: this._videoUrl + this._imageUrl + this._alt;
  }

  videoPreviewUrl() {
    return this._previewUrl + this.icon_url + this._alt;
  }

  descriptionNote() {
    return this.note;
  }

  canShowVideo() {
    return this.meida_url.endsWith("mp4");
  }

  canShowImage() {
    return !this.meida_url.endsWith("mp4");
  }

  viewed() {
    return this._viewed || false;
  }

  markViewed() {
    if (!this.viewed()) {
      this._viewed = true;
    }
  }

}
