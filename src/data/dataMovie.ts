import {IMainBanner, IMovie, IMovieCreator, IMovieReview, TSorting} from '../models/Movie'
import {IFilterType} from "../models/Movies";

export const dataReviews: IMovieReview[] = [
    { id: 1, parentId: 0, author: 'Елена', content: 'Очень хороший сериал, необычная развязка, в духе скандинавких детективов - мрачно, загадочно, необычно. Понравилось, что в конце фильма все стало понятно :).', date: new Date('14.09.2021 00:00:000'), vote: 6 },
    { id: 2, parentId: 0, author: 'EE', content: 'угрюмоватый, не тянет на 9,4 совсем, 6 поставила', date: new Date('14.09.2021 00:00:000'), vote: 6 },
]

export const dataCreators: IMovieCreator[] = [
    {
        id: 1,
        name: { rus: 'Карлос Морено', eng: 'Carlos Moreno' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage9/contents/3/c/79fc89c396a2b94844bf3dcdeaae22.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 2,
        name: { rus: 'Михаил Черняк', eng: 'Mikhail Chernyak' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/8/2/7446fac40d54f51e263118abf1f257.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 3,
        name: { rus: 'Обри Плаза', eng: 'Aubrey Plaza' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/7/4/2831f6e3751b9caa0e02407660cc2b.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 4,
        name: { rus: 'Джош Хартнетт', eng: 'Josh Hartnett' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage3/contents/6/c/98bb1feac87b7cd7e9896472cad096.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 5,
        name: { rus: 'Хью Грант', eng: 'Hugh Grant' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage26/contents/f/2/1c0871b6193e7e74ce998966c973a5.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 6,
        name: { rus: 'Кэри Элвес', eng: 'Cary Elwes' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage15/contents/c/1/144e1266b9ede4ae0c26c49c5f1fd9.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 7,
        name: { rus: 'Багзи Мэлоун', eng: 'Bugzy Malone' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/3/b/3c30f943c81de8bec1cc1762182465.jpeg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 8,
        name: { rus: 'Питер Фердинандо', eng: 'Peter Ferdinando' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage2/contents/c/f/8254cc0890e80c744e095d71c5e73b.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 9,
        name: { rus: 'Эдди Марсан', eng: 'Eddie Marsan' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/0/6/6566fb8c8f0ab579a32c4cd20b171c.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 10,
        name: { rus: 'Лурдес Фаберес', eng: 'Lourdes Faberes' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage30/contents/b/4/c8ee9ec314b909d92548807e4bc13a.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 11,
        name: { rus: 'Макс Бисли', eng: 'Max Beesley' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage5/contents/f/7/c9157b74e3409917cf802ea48a1095.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
    {
        id: 12,
        name: { rus: 'Евгения Кузьмина', eng: 'Eugenia Kuzmina' },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid aut blanditiis dignissimos dolore doloribus dolorum eos error eveniet id libero quidem recusandae repudiandae, voluptas?',
        poster: 'https://thumbs.dfs.ivi.ru/storage31/contents/a/3/dcb16785295731ec5ea35261dad0b3.jpg/120x144/?q=85',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum est fugit ipsa libero provident quos unde. Culpa ex id illum labore mollitia odit officia officiis, pariatur quam quasi rem repudiandae, sit ut voluptas voluptate. Aut, consectetur corporis cum cupiditate deleniti distinctio hic impedit laudantium natus obcaecati possimus quae quibusdam repellat repudiandae rerum sapiente soluta tenetur totam voluptate voluptatibus. Aut?'
    },
]

export const dataMoviesTop: { movie: IMovie, logo: string }[] = [
    {
        movie: {
            id: 1,
            name: 'И снова здравствуйте!',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/2/c/3b8e2a957b926355725e1237e188bf.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/7/a/f1fdf81472f76cc5950e0f4ef30060.png/x200/?q=85'
    },
    {
        movie: {
            id: 2,
            name: 'Шпион',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/f/2/7e50d51661b729863f8584ee559242.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/?q=85'
    },
    {
        movie: {
            id: 3,
            name: 'Праведник',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/9/09f0b7761bcd8ceb9c42bb93f4806c.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage28/contents/e/e/2b49a5aa4d8ab07304588192853bee.png/x200/?q=85'
    },
    {
        movie: {
            id: 4,
            name: 'Здоровый человек',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/9/f92d6d3965cfcb7b7e1878eaa56f05.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/?q=85'
    },
    {
        movie: {
            id: 5,
            name: 'Семья',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/d/e/f3afc43a0709ea1ebf35cdf142cc46.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/e/14ad136916cb3797041ef18a0b6149.png/x200/?q=85'
    },
    {
        movie: {
            id: 6,
            name: 'Против всех',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage26/contents/a/1/56b0cedeb8dd5890ee46ab947c1207.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/0/5a82ac6f5942eeea490540feca0a62.png/x200/?q=85'
    },
    {
        movie: {
            id: 7,
            name: 'Непослушная',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage29/contents/1/9/2475ddbdc646eb062cc61cb73db2a8.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage28/contents/f/4/9d0d6b3e5fd0cd0a35080f6950d1c6.png/x200/?q=85'
    },
    {
        movie: {
            id: 8,
            name: 'Операция «Фортуна»: Искусство побеждать',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/0/86ca0a529c83b35c0b0f2b29a0fa57.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/0/7/c29756fa4d94a6ba334836e7820b3a.png/x200/?q=85'
    },
    {
        movie: {
            id: 9,
            name: 'Марлоу',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/d/a/72ba96f61d3d5b70905a35cad1c309.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage4/contents/e/1/701622d611211cc2e765049cd61492.png/x200/?q=85'
    },
    {
        movie: {
            id: 10,
            name: 'Чекаго',
            engName: '',
            movieType: 'Мультфильмы',
            genres: [{ id: 1, name: 'Развивающие' }],
            yearRelease: { start: 2010, finish: 2020 },
            duration: '1 сезон',
            ageLimit: 0,
            quality: [],
            voice: [{ id: 1, voiceType: 'voice', language: 'Рус' }],
            rating: { valueInt: 8, valueFract: 4 },
            votes: 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: 'https://dfs-linx-7.dfs.ivi.ru/mp4-hd720/pkl4blNmWnIe44vHLXCQGw,1682102329/storage6/contents/5/8/a104cfed768f3d378e5c29acc0ee58.mp4?redirected=1&redirected_total=1',
            poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/6/1/8d92b15c9499d9fc600768110e842a.jpg//304x620//?q=85',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus deleniti dolor dolore est ex impedit magnam maiores nobis obcaecati perferendis porro provident quaerat ratione recusandae repudiandae sapiente tempora temporibus, totam ullam vel voluptas voluptates. Cum praesentium quos sit?',
            country: [{ id: 1, name: 'Россия' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [
                { id: 1, creator: dataCreators[0], role: 'Режиссёр' },
                { id: 2, creator: dataCreators[1], role: 'Актёр' },
                { id: 3, creator: dataCreators[2], role: 'Актёр' },
                { id: 4, creator: dataCreators[3], role: 'Актёр' },
                { id: 5, creator: dataCreators[4], role: 'Актёр' },
                { id: 6, creator: dataCreators[5], role: 'Актёр' },
                { id: 7, creator: dataCreators[6], role: 'Актёр дубляжа' },
            ],
            reviews: [],
            lookWith: []
        },
        logo: 'https://thumbs.dfs.ivi.ru/storage4/contents/0/1/87189c6689c7ebbdcf6355b1cd3381.png/x200/?q=85'
    },
]

export const mainSliders: IMainBanner[] = [
    {
        id: 1,
        banner: {
            wide: 'https://thumbs.dfs.ivi.ru/storage2/contents/c/1/3547c3e97e8297c3275433cf3655f1.jpg/1216x524/?q=85',
            narrow: 'https://thumbs.dfs.ivi.ru/storage9/contents/9/0/e9449ff18cefa5f93364ee931b0f41.jpg/1216x1358/?q=85',
            logo: 'https://thumbs.dfs.ivi.ru/storage15/contents/8/e/c1f2d911e1e6e39a1e5233de3389cf.png/x200/'
        },
        title: 'Богатые тоже плачут',
        desc: 'Бедная девушка борется за счастье в мире богатства и влияния. Перезапуск знаменитого сериала',
        link: '/watch/bogatyie-tozhe-plachut'
    },
    {
        id: 2,
        banner: {
            wide: 'https://thumbs.dfs.ivi.ru/storage37/contents/f/e/d24b46d43bbefee99858932808bb25.jpg/1216x524/?q=85',
            narrow: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            logo: 'https://thumbs.dfs.ivi.ru/storage8/contents/c/1/0a58d141a9b11b3367e63628ca3769.png/x200/'
        },
        title: 'Эскортница',
        desc: 'Старшенбаум и Нагиев в откровенной драме о тёмных тайнах Дубая. Основано на реальных историях',
        link: '/watch/506055'
    },
    {
        id: 3,
        banner: {
            wide: 'https://thumbs.dfs.ivi.ru/storage38/contents/3/1/e5d84280c3ab43434b3851803326c6.jpg/1216x524/?q=85',
            narrow: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/0/7/c29756fa4d94a6ba334836e7820b3a.png/x200/'
        },
        title: 'Операция «Фортуна»: Искусство побеждать',
        desc: 'Ваши любимые Джейсон Стэйтем и Хью Грант спасают мир в шпионской комедии вашего любимого Гая Ричи',
        link: '#'
    },
]

export const listGenres: { id: number, icon: string, name: string }[] = [
    { id: 1, icon: 'nbl-icon_genre_drama_32', name: 'драма' },
    { id: 2, icon: 'nbl-icon_genre_comedy_32', name: 'комедия' },
    { id: 3, icon: 'nbl-icon_genre_action_32', name: 'боевик' },
    { id: 4, icon: 'nbl-icon_genre_triller_32', name: 'триллер' },
    { id: 5, icon: 'nbl-icon_genre_adventure_32', name: 'приключения' },
    { id: 6, icon: 'nbl-icon_genre_foreign_32', name: 'зарубежные' },
    { id: 7, icon: 'nbl-icon_genre_melodrama_32', name: 'мелодрама' },
    { id: 8, icon: 'nbl-icon_genre_fantastic_32', name: 'фантастика' },
    { id: 9, icon: 'nbl-icon_genre_fantasy_32', name: 'фэнтези' },
    { id: 10, icon: 'nbl-icon_genre_family_32', name: 'семейный' },
    { id: 11, icon: 'nbl-icon_genre_detective_32', name: 'детектив' },
    { id: 12, icon: 'nbl-icon_genre_horror_32', name: 'ужасы' },
    { id: 13, icon: 'nbl-icon_genre_soviet_32', name: 'советские' },
    { id: 14, icon: 'nbl-icon_genre_military_32', name: 'военный' },
    { id: 15, icon: 'nbl-icon_genre_russian_32', name: 'русские' },
    { id: 16, icon: 'nbl-icon_genre_historical_32', name: 'история' },
    { id: 17, icon: 'nbl-icon_genre_kids_32', name: 'детский' },
    { id: 18, icon: 'nbl-icon_genre_comics_32', name: 'аниме' },
    { id: 19, icon: 'nbl-icon_genre_disaster_32', name: 'катастрофы' },
    { id: 20, icon: 'nbl-icon_genre_arthouse_32', name: 'артхаус' },
    { id: 21, icon: 'nbl-icon_genre_mystic_32', name: 'мистические' },
    { id: 22, icon: 'nbl-icon_genre_criminal_32', name: 'криминал' },
    { id: 23, icon: 'nbl-icon_genre_sport_32', name: 'спорт' },
    { id: 24, icon: 'nbl-icon_genre_biography_32', name: 'биография' },
    { id: 25, icon: 'nbl-icon_genre_western_32', name: 'вестерн' },
    { id: 26, icon: 'nbl-icon_genre_music_32', name: 'мюзикл' }
]

export const suggestions: { id: number, name: string, type: IFilterType, value: string }[] = [
    { id: 1, name: '2022 год', type: 'years', value: '2022' },
    { id: 2, name: '2021 год', type: 'years', value: '2021' },
    { id: 3, name: '2020 год', type: 'years', value: '2020' },
    { id: 4, name: '2019 год', type: 'years', value: '2019' },
    { id: 5, name: '2018 год', type: 'years', value: '2018' },
    { id: 6, name: 'Русские фильмы', type: 'countries', value: 'Россия' },
    { id: 7, name: 'Американские фильмы', type: 'countries', value: 'США' },
    { id: 8, name: 'Индийские фильмы', type: 'countries', value: 'Индия' },
    { id: 9, name: 'Индийские фильмы', type: 'genres', value: 'комедия' },
    { id: 10, name: 'Ужасы', type: 'genres', value: 'ужасы' },
    { id: 11, name: 'Фантастические', type: 'genres', value: 'фантастика' },
    { id: 12, name: 'Мелодрамы', type: 'genres', value: 'мелодрама' },
    { id: 13, name: 'Триллеры', type: 'genres', value: 'триллер' },
]

export const dataSorting: { id: number, name: string, type: TSorting }[] = [
    { id: 1, name: 'По количеству оценок', type: 'vote' },
    { id: 2, name: 'По рейтингу', type: 'rating' },
    { id: 3, name: 'По дате выхода', type: 'date' },
    { id: 4, name: 'По алфавиту', type: 'name' },
]