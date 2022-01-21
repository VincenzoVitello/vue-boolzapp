var app = new Vue({
    el: '#app',
    data: {     //dati
        dataIndex: null,
        inputValue: '', //variabile a cui assegno valore equivalente a ciò che scrivo nell'input della chat
        nameComponent: '',//variabile a cui assegnare il valore dell'input nel search
        contacts: [
            {
            name: 'Stefan',
            visible: true, 
            avatar: 'https://segre.to/a/shouts/44mQkPQ2Eny7jgnNwEk/vNa65RWyVrQKXgjJ7dJ_hq.jpg',
            messages: [
                    {
                    date: '10/01/2020 15:30',
                    text: 'yo',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50',
                    text: 'yo',
                    status: 'received',
                    },
                    {
                    date: '10/01/2020 16:15',
                    text: 'Ricordati di darti da mangiare!',
                    status: 'sent',
                    }
                ],
            },
            {
            name: 'Simone Bruno',
            visible: true,
            avatar: 'https://picsum.photos/136/351',
            messages: [
                    {
                    date: '20/03/2020 16:30',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    },
                    {
                    date: '20/03/2020 16:30',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    },
                    {
                    date: '20/03/2020 16:35',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    }
                ],
            },
            {
            name: 'Matteo Salvalaggio',
            visible: true,
            avatar: 'https://images.mubicdn.net/images/cast_member/34722/cache-613789-1606465093/image-w856.jpg?size=800x',
            messages: [
                    {
                    date: '28/03/2020 10:10',
                    text: 'Caccole',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 10:20',
                    text: 'AHAHAHAHAHAH 🤣',
                    status: 'received',
                    },
                    {
                    date: '28/03/2020 16:15',
                    text: 'Ah scusa!',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 16:15',
                    text: 'puzzole',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 16:15',
                    text: '🤣🤣🤣',
                    status: 'received',
                    }
                ],
            },
            {
            name: 'Luiso',
            visible: true,
            avatar: 'https://picsum.photos/532/334',
            messages: [
                    {
                    date: '10/01/2020 15:30',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    }
                ],
            },
        ]           
    }, //chiusura data
    updated: function() {  //imposto lo scroll automatico, all'aggiornamento del dom
        const chat = document.querySelector('.current_chat');
        chat.scrollTop = chat.scrollHeight;
        console.log(this.dataIndex)
    },

        methods: {

            verifyName: function(){
                for (let index = 0; index < this.contacts.length; index++) {
                    const element = this.contacts[index];
                    if(!element.name.toLowerCase().includes(this.nameComponent.toLowerCase())){
                        element.visible = false; 
                    }else{
                        element.visible = true; 
                    } 
                }
            },
            replyMessage: function(contactIndex){
                this.contacts[contactIndex].messages.push({
                    date: dayjs().format("DD/MM/YYYY HH:mm"),
                    text: 'vab',
                    status: 'received',
                    
                });
                
            },

            sendMessage: function(){
            if(this.inputValue != ''){
                    this.contacts[this.dataIndex].messages.push({
                    date: dayjs().format("DD/MM/YYYY HH:mm"),           
                    text: this.inputValue,
                    status: 'sent',
                    
                    });
                    
                    const contactIndex = this.dataIndex;
        
                    this.inputValue = "";

                    setTimeout(() => {
                    this.replyMessage(contactIndex)
                    }, 3000);
                    ;
                    
            }else{
                alert('Il messaggio che stai tentando di inviare non contiente testo! Verrai, pertanto, punito con la morte.')
            }
            }//chiusura funzione sendMessage
     
    }//Chiusura methods
}) //chiusura appVue
