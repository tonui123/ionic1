import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{Home}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
            หน้าหลัก
      </IonContent>
    </IonPage>
  );
};

export default Home;