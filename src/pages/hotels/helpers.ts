import { IHotel } from './hotels';

export const getHotels = (): IHotel[] => {
    return [
        {
            imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
            title: 'Будапешт',
            description: 'Московский отель "Будапешт"',
            roomCost: 5000,
            hasParking: true,
            address: 'Москва, ул. Петровские Линии, 2',
            phone: '8 (495) 729-35-01'
        },
        {
            imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
            title: 'Космос',
            description: 'Гостиница "Космос"',
            roomCost: 3000,
            hasParking: true,
            address: 'Москва, пр-т Мира, 150',
            phone: '8 (495) 234-12-06'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/7f/49/4a/room-view.jpg',
            title: 'Азимут',
            description: 'Отель "Азимут"',
            roomCost: 6000,
            hasParking: true,
            address: 'Москва, ул. Смоленская, 30',
            phone: '8 (495) 432-17-01'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-o/0c/12/89/c3/fasad.jpg',
            title: 'Петровский Путевой Дворец',
            description: 'Отель "Петровский Путевой Дворец"',
            roomCost: 4500,
            hasParking: false,
            address: 'Москва, пр-т Мира, 150',
            phone: '8 (495) 271-00-09'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-o/09/b4/04/a2/palmira-business-club.jpg',
            title: 'Пальмира',
            description: 'Пальмира Бизнес Клуб',
            roomCost: 2500,
            hasParking: false,
            address: 'Москва, ул. Мира, 11',
            phone: '8 (495) 123-14-96'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/6a/04/b9/swissotel-krasnye-holmy.jpg',
            title: 'Красные Холмы',
            description: 'Свиссотель Красные Холмы',
            roomCost: 1500,
            hasParking: true,
            address: 'Москва, пр-т Мира, 150',
            phone: '8 (495) 942-11-77'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4e/98/3e/exterior.jpg',
            title: 'Марриотт',
            description: 'Марриотт Гранд Отель"',
            roomCost: 2000,
            hasParking: true,
            address: 'Москва, ул. Труда, 86',
            phone: '8 (495) 594-68-52'
        }
    ];
}