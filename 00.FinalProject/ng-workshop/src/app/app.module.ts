import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { HeaderComponent } from "./header/header.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ImageUploadComponent } from "./pictures/image-upload/image-upload.component";
import { ImageDetailsComponent } from "./pictures/image-details/image-details.component";
import { ImageEditComponent } from "./pictures/image-edit/image-edit.component";
import { ImageListComponent } from "./pictures/image-list/image-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DropZoneDirective } from "./drop-zone.directive";
import { keyValueFilterPipe } from "./key-value-filter.pipe";
import { ImageDeleteComponent } from "./pictures/image-delete/image-delete.component";
import { ImageConvertComponent } from "./pictures/image-converter/image-converter.component";
import { PublicImagesComponent } from "./pictures/public-images/public-images.component";
import { AdminComponent } from "./admin/admin.component";
import { UserImagesComponent } from "./pictures/user-images/user-images.component";
import { ImageService } from "./pictures/image.service";
import { AuthService } from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    SignupComponent,
    ImageUploadComponent,
    ImageDetailsComponent,
    ImageEditComponent,
    ImageListComponent,
    ImageConvertComponent,
    WelcomeComponent,
    ImageDeleteComponent,
    DropZoneDirective,
    keyValueFilterPipe,
    PublicImagesComponent,
    AdminComponent,
    UserImagesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
