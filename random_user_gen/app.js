// console.log('Hello Vue')

/////////////////////////////////////////////
const app = Vue.createApp({
    // template: '<h1>Hello VueJS</h1>',
    // template: '<h1>Hello {{ firstName }}</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            // gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        // getUser() {
        //     // console.log('a random user generated')
        //     // console.log(`a random user ${this.firstName} ${this.lastName}`)
        //
        //     //////////////////////////////////////////////////////////////////
        //     // Hard Code
        //     // this.firstName = 'Jane',
        //     // this.lastName = 'Smith',
        //     // this.email = 'jane@gmail.com',
        //     // this.gender = 'female',
        //     // this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        //
        //     //////////////////////////////////////////////////////////////////
        //     // Fetch API: Promise
        //     fetch('https://randomuser.me/api')
        //         .then(res => res.json())
        //         .then(data => {
        //             // console.log(data)
        //             this.firstName = data.results[0].name.first,
        //             this.lastName = data.results[0].name.last,
        //             this.email = data.results[0].email,
        //             this.gender = data.results[0].gender,
        //             this.picture = data.results[0].picture.large
        //         })
        // },
        async getUser() {
            // Fetch API: async await
            const res = await fetch('https://randomuser.me/api')
            // console.log(res)
            const data = await res.json()
            // console.log(data)
            this.firstName = data.results[0].name.first,
            this.lastName = data.results[0].name.last,
            this.email = data.results[0].email,
            this.gender = data.results[0].gender,
            this.picture = data.results[0].picture.large
        }
    }
})

app.mount('#app')