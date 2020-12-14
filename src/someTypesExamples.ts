// ДЖЕНЕРИКИ
const mergeObjects = <T extends object, R extends object>(x: T, y: R) => {
  return Object.assign({}, x, y)
};

const firstMerger = mergeObjects({ teamName: 'uteam' }, { teamMembersNumber: 5 });
// const secondMerger = mergeObjects({ teamName: 'uteam' }, 'my team');
// в примере с secondMerger mergeObjects не выполнится, потому что параметр 'my team' не соответствует типу R



// НЕКОТОРЫЕ УТИЛИТАРНЫЕ ТИПЫ

// Readonly
type Cartoon = {
  name: string;
}

const сartoon: Readonly<Cartoon> = {
  name: 'Унесённая призраками',
};
// сartoon.name = 'Порко Россо';
// значение name не изменится, т.к. объект сartoon предназначен только для чтения

// Partial
type Application = {
  teamName: string,
  cash: number,
}

const createNewYearsApplication = (teamName: string, expenses: number): Application  => {
  const application: Partial<Application> = {};

  if (teamName === 'uteam') {
    application.teamName = teamName;
  }

  if (expenses < 40000) {
    application.cash = expenses;
  }

  return application as Application;
};

createNewYearsApplication('uteam', 35000);

// Required
type Props  = {
  temperature?: number;
  city?: string;
}

const firstForecast: Props = { temperature: 1, city: 'Санкт-Петербург' };
// const secondForecast: Required<Props> = { temperature: 24 };
// в secondForecast будет ошибка, т.к. свойство 'city' отсутствует в типе '{ city: number; }'
// но обязательно должно быть



// ПРОСТРАНСТВА ИМЁН
// Совмещение нейимспейса с енумом например
enum Team {
  UTEAM = 1,
  BDSM = 2,
  DEVOPS = 3,
  PLATFORM = 4,
}

namespace Team {
  export function getTeamByStallNumber(stallNumber: number) {
    if (stallNumber === 1) {
      return Team.UTEAM;
    } else if (stallNumber === 2) {
      return Team.BDSM;
    } else if (stallNumber === 3) {
      return Team.DEVOPS;
    } else if (stallNumber === 4) {
      return Team.PLATFORM;
    }
  }
}

// namespace AdsterraDeveloper объявляет объект, содержащий разные сущности, в том числе типы
declare namespace AdsterraDeveloper {
  let age: number;
  const name: string;
  function work(): void;
  type T = number | string;
}

// Внешние пространства имён используются для интеграции со сторонними js-библиотеками
declare namespace MyCoolLib {
  export interface Targets {
    convertionType: string;
    minPayout: number;
  }

  export interface Base extends Targets {
    affiliateName: string;
  }
}

declare var myCoolLib: MyCoolLib.Base;



// СОВМЕЩЕНИЕ ДЕКЛАРАЦИЙ И РАСШИРЕНИЕ МОДУЛЕЙ
// Совмещение нейимспейсов
namespace Teams {
  export class Uteam {}
}

namespace Teams {
  export interface Members {
    membersNumber: number;
  }
  export class BDSM {}
}


// Совмещение интерфейсов
interface Developer {
  name: string;
  age: number;
}

interface Developer {
  specialization: string;
}

const developer: Developer = { name: 'Maria', age: 27, specialization: 'QA' };


// Класс, объявленный в модуле доступен и за пределами этого модуля, т.к. используем export:
module Vehicle {
  export class CoolCar {
    constructor (
      public make: string,
      public model: string) { }
  }

  const teslaCar = new CoolCar('Tesla"', 'S');
}

const fordCar = new Vehicle.CoolCar('Jaguar', 'F-type');
