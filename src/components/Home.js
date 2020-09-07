import React, {Component} from 'react';
import './style.css';
import { IonSlides, IonSlide, IonContent, IonButton } from '@ionic/react';
import { IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ReactCardFlip from 'react-card-flip';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: "The Statue Of Liberty", address: "New York, USA", src: "https://images.unsplash.com/photo-1580789741916-afeda0185992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",id: 1 },
                { name: "Sardar VallabhBhai Patel Statue", address: "Surat, India", src:"https://images.unsplash.com/photo-1582899123786-d7123573fe89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",id: 2 },
                { name: "Effil Tower", address: "Paris, France", src:"https://images.unsplash.com/photo-1546237769-58c2846e87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 3 },
                { name: "The Taj Mahal", address: "Agra, India", src:"https://images.unsplash.com/photo-1598369267975-0eb3f5a57412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 4 },
                { name: "Humayun's Tomb", address: "Delhi, India", src:"https://images.unsplash.com/photo-1591084342994-674571d333eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 5 },
                { name: "The Big Ben", address: "London, UK", src: "https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 6},
                { name: "Machu Pichu", address: "Cusco, Peru", src: "https://images.unsplash.com/photo-1553622171-38c67a4f824d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 7},
                { name: "The Great Wall", address: "China", src: "https://images.unsplash.com/photo-1510332981392-36692ea3a195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", id: 8},
                { name: "CN Tower", address: "Toronto, Canada", src: "https://images.unsplash.com/photo-1528904981278-e75c7d6d5d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80", id: 9},
                { name: "Burj Khalifa", address: "Dubai, UAE", src: "https://images.unsplash.com/photo-1537776440785-82040d409f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=830&q=80", id: 10}
            ],
            count: 0,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    changeHandler() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    render(){
        const slideOpts = {
            initialSlide: 0,
            speed: 0
        };
        return(
            <IonContent>
                <IonSlides pager={true} options={slideOpts}>
                    {
                        this.state.data.map(data =>  (
                            <IonSlide>
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                                    <IonCard id="card"key={data.id} >
                                        <IonImg src={data.src} onClick={this.handleClick}/>
                                        <IonCardHeader>
                                            <IonCardTitle>{data.name}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <IonCardSubtitle>Can you guess the location?</IonCardSubtitle>
                                            <IonButton shape="round" color="dark" onclick={() => this.changeHandler()}>YES</IonButton>
                                            <IonButton shape="round" color="light">NO</IonButton>
                                        </IonCardContent>
                                    </IonCard>
                                    <IonCard id="card"key={data.id} >
                                        <IonImg src={data.src} onClick={this.handleClick}/>
                                        <IonCardHeader>
                                            <IonCardTitle>{data.name}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <IonCardSubtitle>{data.address}</IonCardSubtitle>
                                        </IonCardContent>
                                    </IonCard>
                                </ReactCardFlip>
                            </IonSlide>
                        ))
                    }
                    <IonSlide>
                       <IonCard>
                                <IonCardContent>
                                    <IonCardTitle>Your score</IonCardTitle>
                                    <IonCardTitle>{this.state.count} / {this.state.data.length}</IonCardTitle>
                                </IonCardContent>
                        </IonCard>
                    </IonSlide>
                </IonSlides>
            </IonContent>
            
        );
    }
} 
export default Home;
