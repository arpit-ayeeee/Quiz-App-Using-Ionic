import React from 'react';
import { IonHeader, IonToolbar, IonTitle} from '@ionic/react';

 const Header = () =>{
   return(
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle><iontext><h1>DestQuiz</h1></iontext></IonTitle>
      </IonToolbar>
    </IonHeader>
    )
};
export default Header;