var app = new Vue({
    el: '#app',
    data: {     //dati
        dataIndex: null,
        inputValue: '',
        nameComponent: '',//variabile a cui assegnare il valore dell'input nel search
        contacts: [
            {
            name: 'Stefan',
            visible: true, 
            avatar: 'https://segre.to/a/shouts/44mQkPQ2Eny7jgnNwEk/vNa65RWyVrQKXgjJ7dJ_hq.jpg',
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'yo',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'yo',
                    status: 'received',
                    },
                    {
                    date: '10/01/2020 16:15:22',
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
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    },
                    {
                    date: '20/03/2020 16:35:00',
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
                    date: '28/03/2020 10:10:40',
                    text: 'Caccole',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'AHAHAHAHAHAH 🤣',
                    status: 'received',
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'puzzole',
                    status: 'sent',
                    },
                    {
                    date: '28/03/2020 16:15:22',
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
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    }
                ],
            },
        ]           
    }, 
    methods: {
        addAndClean: function(){
            if(this.inputValue = null){
            this.sendMessage()
            }else{
            this.emptyMessage()
            }
        },

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

        sendMessage: function(){
            this.contacts[this.dataIndex].messages.push({
                            
            text: this.inputValue,
            status: 'sent',
            
            });

            this.inputValue = "";
            setTimeout(() => {
            this.contacts[this.dataIndex].messages.push({
            
                date: '',
                text: 'vab',
                status: 'received',
                
            });
            }, 1000)
        },

        emptyMessage: function(){
            alert('Il messaggio che stai tentando di inviare non contiente testo! Verrai, pertanto, punito con la morte.')
        },
        
    }
})
