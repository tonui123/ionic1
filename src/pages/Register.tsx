import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{Register}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
            ลงทะเบียน
      </IonContent>
    </IonPage>
  );
};

export default Register;