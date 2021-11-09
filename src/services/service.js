
export default class Service {

    data = [
        { 
            id: 1,
            name: 'Nago',
            description: 'Nice site near Garda lake',
            photo : 'https://www.forestryengland.uk/sites/default/files/styles/list_image_large_2x/public/media/Black%20Rocks.jpg?h=fa6a7806&itok=YrIgJWwZ'
        },
        {
            id: 2,
            name: 'Massone',
            description: 'Nice site near Garda lake',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Black_Rocks_%28Derbyshire%29.JPG'
        },
        {
            id: 3,
            name: 'Zoo',
            description: 'Nice site near the Zoo camping',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5Mze7Y6vA18Ya88RlETjsYs6Lf3EZiolPdiYEUjQ9oDnGPRvngF6DuziUbFFiGzMLOc&usqp=CAU'
        }
    ];

    getCrags() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        });
    }
}