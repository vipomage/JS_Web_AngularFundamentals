# **https://colorsnow.online**
  //NOTICE Image Colorization not Working on the builded version //
  //Headers don't get appended for some reason ..//

  **admin.service**
  
    getUsers() -
      returns ref to every user collection in firebase.database;
    
    getAllImages() -
      returns ref to userCollections collection in firebase.database;
    
    getUserImages(uid) -
      returns ref to exact user's collection in firebase.database;
  
  **_auth_**
  
  `components`: 
    
      signup,
      login 
    
  _**auth.service**_ :{
    
    signUp(email,password) - 
      Captures user input and creates user;
    
    signIn(email,password) - 
      Captures user input and signs in the user callback to authHandler();
    
    googleOauth() - 
      returns popup window for login with Google credentials callback to authHandler();
    
    authHandler(redirectUrl) - 
      1 :Checks if user is disabled -> if so returns null;
      2 :Gets user idToken passes it to public token variable and redirects to $redirectUrl calling success;          
    
    uploadUserToDb() - 
      adds user with custom props to users collection in firebase.database;
    
    logout() - 
      signs out from all firebase modules clearing tokens and current active user then redirects to signIn;
    
    getCurrentUser() - 
      returns currently logged in user in the app as provided from google; 
    
    isAuthenticated() - 
      fast / immediate user status : boolean;
    
    retrieveUser() - 
      returns Ref to currentUser can be used to call [.on/.once/.update/.set] e.x.;
    
    userRef(uid) - 
      returns the exact user from provided UID from users collection firebase.database;
    
   
   **_pictures_**
   
     components:
     
       image-converter -
          Component for uploading and colorizing images
          
       image-delete -
          Component for confirming action DELETE
          
       image-details -
          Componet for image details
          
       image-edit - 
          Component for image editing
          
       image-list -
          Component for listing [userImageCollection]
          
       image-upload - 
          Component for regular Upload without colorizing
          
       public-images - 
          Component for listing [publicImages]
          
       user-images -
          Component for listing specific User's [imageCollection]
     

  **_image.service_**
      
    getCollection(uid) - 
      returns ref to specific user's collection with optional param uid without the UID --
      firebase.rules apply before returning data check for admin or owner of requested Object;
    
    getPublicImages() - 
      returns ref to whole userCollections collection in firebase.database;
    
    colorizeLocalImg(file) - 
      makes an http.post to https://deepai.org/ 's API which returns converted B/W image colorized;
    
    getImage(imageId,uid?) - 
      returns ref to currentUsers image by Id or specific when passed UID;
    
    updateImage(id,newObj) - 
      updates the contents of image found by Id with new passed parameter;
    
    deleteImageFromStorage(imageUrl) - 
      returns ref to exact image finding it by the imageUrl param for deletion in firebase.storage;
    
    deleteImage(imgId,uid?) - 
      returns ref to specific image found by id or (with specific user image found by UID) for deletion in firebase.database;
  
       
  **_models_** 
  
    {User:interface} - {displayName: string, email: string,isAdmin: boolean,uid: string,disabled?: boolean};    
 
  
    
    app.component:{ 
        has router-outlet and controls animations on routes}
    
    fade.animations.ts 
      - holds animations on enter <-> leave of router-outlet
    
    key-value-filter.pipe 
      - custom pipe for iterating over Object<Object>
    
    assets:{
      holds: bootstrap_boostwatch_theme
    }
    
    environment.ts:{
      firebase.config
    }
   
   
