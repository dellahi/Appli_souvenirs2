import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-nouveau-souvenir',
  templateUrl: './nouveau-souvenir.page.html',
  styleUrls: ['./nouveau-souvenir.page.scss'],
})
export class NouveauSouvenirPage implements OnInit {
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';

  constructor(
    private camera: Camera
  ) { 
    
  }
  async addPhoto() {
    const libraryImage = await this.openLibrary();
    this.image = 'data:image/jpg;base64,' + libraryImage;
  }
  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  ngOnInit() {
  }

}
