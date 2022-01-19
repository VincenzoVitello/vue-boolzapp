var app = new Vue({
    el: '#app',
    data: {     //dati
        dataIndex: 0,
        contacts: [
            {
            name: 'Michele',
            avatar: 'https://unsplash.it/50/50?image=11',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    dropdownActive: false,
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    dropdownActive: false,
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    dropdownActive: false,
                    }
                ],
            },
            {
            name: 'Fabio',
            avatar: 'https://unsplash.it/50/50?image=15',
            visible: true,
            messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    dropdownActive: false,
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    dropdownActive: false,
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    dropdownActive: false,
                    }
                ],
            },
            {
            name: 'Massimo',
            avatar: 'https://unsplash.it/50/50?image=13',
            visible: true,
            messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received',
                    dropdownActive: false,
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    dropdownActive: false,
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received',
                    dropdownActive: false,
                    }
                ],
            },
            {
            name: 'Luiso',
            avatar: 'https://unsplash.it/50/50?image=16',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    dropdownActive: false,
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    dropdownActive: false,
                    }
                ],
            },
        ]            
    }, 
})