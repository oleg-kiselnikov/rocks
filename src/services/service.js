
export default class Service {

    data = [
        { 
            cragId: 1,
            cragName: 'Nago',
            cragDescription: 'Nice site near Garda lake',
            cragPhoto : 'https://www.forestryengland.uk/sites/default/files/styles/list_image_large_2x/public/media/Black%20Rocks.jpg?h=fa6a7806&itok=YrIgJWwZ'
        },
        {
            cragId: 2,
            cragName: 'Massone',
            cragDescription: 'Nice site near Garda lake',
            cragPhoto: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Black_Rocks_%28Derbyshire%29.JPG'
        },
        {
            cragId: 3,
            cragName: 'Zoo',
            cragDescription: 'Nice site near the Zoo camping',
            cragPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5Mze7Y6vA18Ya88RlETjsYs6Lf3EZiolPdiYEUjQ9oDnGPRvngF6DuziUbFFiGzMLOc&usqp=CAU'
        }
    ];

    getCrags() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}