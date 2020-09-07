import React from 'react';
import {IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem} from '@ionic/react';
import { cashOutline, cardOutline} from 'ionicons/icons';

const Footer = () => {
    return(
            <IonTabBar slot="bottom"> 
                <IonTabButton tab="schedule">
                        <IonItem>
                            <IonIcon icon={cashOutline} />
                            <IonLabel>Quiz</IonLabel>
                        </IonItem>
                </IonTabButton >
                
                <IonTabButton tab="speakers">
                        <IonItem>
                            <IonIcon icon={cardOutline} />
                            <IonLabel>Score</IonLabel>
                        </IonItem>
                </IonTabButton>

            </IonTabBar>
  )
};

export default Footer;