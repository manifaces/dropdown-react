import { v4 as uuidv4 } from 'uuid';

export type DataI = {
  tab: string;
  list: {
      id: any;
      text: string;
      isSelect: boolean;
  }[];
}[];

export const data: DataI = [
  {
    tab: 'ЖК',
    list: [
      {
        id: uuidv4(), 
        text: 'Академический',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Басманный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Измайлово',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Люблино',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Замоскворечье',
        isSelect: false,
      },
    ]
  },
  {
    tab: 'Округ',
    list: [
      {
        id: uuidv4(), 
        text: 'Центральный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Северный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Северо-Восточный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Восточный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Юго-Восточный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Южный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Юго-Западный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Западный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Северо-Западный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Зеленоградский',
        isSelect: false,
      },
    ]
  },
  {
    tab: 'Район',
    list: [
      {
        id: uuidv4(), 
        text: 'Басманный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Левобережный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Бутырский',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Восточный',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Рязанский',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Донской',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Ломоносовский',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Можайский',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Строгино',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Силино',
        isSelect: false,
      },
    ]
  },
  {
    tab: 'Метро',
    list: [
      {
        id: uuidv4(), 
        text: 'Беговая',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Кольцевая',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Каховская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Филёвская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Курская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Арбатская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Пушкинская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Тульская',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Речной вокзал',
        isSelect: false,
      },
      {
        id: uuidv4(), 
        text: 'Ясенево',
        isSelect: false,
      },
    ]
  }
];