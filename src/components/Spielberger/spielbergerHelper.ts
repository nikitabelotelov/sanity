export const Questions = [
    "Я спокоен",
    "Мне ничто не угрожает",
    "Я нахожусь в напряжении",
    "Я внутренне скован",
    "Я чувствую себя свободно",
    "Я расстроен",
    "Меня волнуют возможные неудачи",
    "Я ощущаю душевный покой",
    "Я встревожен",
    "Я испытываю чувство внутреннего удовлетворения",
    "Я уверен в себе",
    "Я нервничаю",
    "Я не нахожу себе места",
    "Я взвинчен",
    "Я не чувствую скованности, напряжения",
    "Я доволен",
    "Я озабочен",
    "Я слишком возбужден и мне не по себе",
    "Мне радостно",
    "Мне приятно",
    "У меня бывает приподнятое настроение",
    "Я бываю раздражительным",
    "Я легко расстраиваюсь",
    "Я хотел бы быть таким же удачливым, как и другие",
    "Я сильно переживаю неприятности и долго не могу о них забыть",
    "Я чувствую прилив сил и желание работать",
    "Я спокоен, хладнокровен и собран",
    "Меня тревожат возможные трудности",
    "Я слишком переживаю из-за пустяков",
    "Я бываю вполне счастлив",
    "Я все принимаю близко к сердцу",
    "Мне не хватает уверенности в себе",
    "Я чувствую себя беззащитным",
    "Я стараюсь избегать критических ситуаций и трудностей",
    "У меня бывает хандра",
    "Я бываю доволен",
    "Всякие пустяки отвлекают и волнуют меня",
    "Бывает, что я чувствую себя неудачником",
    "Я уравновешенный человек",
    "Меня охватывает беспокойство, когда я думаю о своих делах и заботах"
]

export const AnswersCurrent: { [key: string]: string } = {
    "1": "Точно нет",
    "2": "Скорее нет",
    "3": "Скорее да",
    "4": "Точно да",
}

export const AnswersCommon: { [key: string]: string } = {
    "1": "Никогда",
    "2": "Почти никогда",
    "3": "Часто",
    "4": "Почти всегда",
}

export interface IAnxietyResult {
    reactive: number
    personal: number
}

const ReactiveStraight = [2, 3, 5, 6, 8, 11, 13, 14, 16, 17]
const ReactiveReversed = [0, 1, 4, 7, 9, 10, 12, 15, 18, 19]
const PersonalStraight = [21, 22, 23, 24, 27, 28, 30, 31, 33, 34, 36, 37, 39]
const PersonalReversed = [20, 25, 26, 29, 32, 35, 38]

export function calculateAnxiety(answers: number[]): IAnxietyResult {
    const rStraight = ReactiveStraight.reduce((res, el) => res + answers[el], 0)
    const rReversed = ReactiveReversed.reduce((res, el) => res + answers[el], 0)
    const pStraight = PersonalStraight.reduce((res, el) => res + answers[el], 0)
    const pReversed = PersonalReversed.reduce((res, el) => res + answers[el], 0)
    return {
        reactive: rStraight - rReversed + 50,
        personal: pStraight - pReversed + 35
    }
}