import { PropsWithChildren } from 'react';
import { IonContent, IonPage } from '@ionic/react';

export function Page({ children }: PropsWithChildren) {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">{children}</div>
      </IonContent>
    </IonPage>
  );
}
