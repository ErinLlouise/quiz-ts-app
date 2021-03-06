export interface Questions {
    id: number
    question: string
    options: Options[]
    answer: string
}

export interface Options {
    type: string
    option: string
    isCorrect: boolean
}

export const QuestionData:Array<Questions> = [
    {
        "id": 1,
        "question": "ANZAC Day is held on?",
        "options": [
            {
                "type": "a",
                "option": "24 April",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "25 April",
                "isCorrect": true
            },
            {
                "type": "c",
                "option": "26 April",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "27 April",
                "isCorrect": false
            }
        ],
        "answer": "b"
    },
    {
        "id": 2,
        "question": "The first ANZAC Day commemoration occurred in?",
        "options": [
            {
                "type": "a",
                "option": "1915",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "1916",
                "isCorrect": true
            },
            {
                "type": "c",
                "option": "1939",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "1990",
                "isCorrect": false
            }
        ],
        "answer": "b"
    },
    {
        "id": 3,
        "question": "ANZAC stands for?",
        "options": [
            {
                "type": "a",
                "option": "Australian and New Zealand Army Corps",
                "isCorrect": true
            },
            {
                "type": "b",
                "option": "Australian and New Zealand Artillery Company",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "American and New Zealand Army Corps",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "Australian and New Zealand Army Club",
                "isCorrect": false
            }
        ],
        "answer": "a"
    },
    {
        "id": 4,
        "question": "A symbol commonly associated with ANZAC Day is?",
        "options": [
            {
                "type": "a",
                "option": "A Kiwi",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "A Silver Fern",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "A red Poppy",
                "isCorrect": true
            },
            {
                "type": "d",
                "option": "A Yellow Rose",
                "isCorrect": false
            }
        ],
        "answer": "c"
    },
    {
        "id": 5,
        "question": "Apart from the poppy what plant holds special significance on ANZAC Day?",
        "options": [
            {
                "type": "a",
                "option": "Oregano",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "Rosemary",
                "isCorrect": true
            },
            {
                "type": "c",
                "option": "Basil",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "Thyme",
                "isCorrect": false
            }
        ],
        "answer": "b"
    },
    {
        "id": 6,
        "question": "What is the Gallipoli Campaign also known as?",
        "options": [
            {
                "type": "a",
                "option": "Battle of Passchendaele",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "Somme Offensive",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "Champagne-Marne",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "Dardanelles Campaign",
                "isCorrect": true
            }
        ],
        "answer": "d"
    },
    {
        "id": 7,
        "question": "How long did the battle at Gallipoli last?",
        "options": [
            {
                "type": "a",
                "option": "2 months",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "6 months",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "10 months",
                "isCorrect": true
            },
            {
                "type": "d",
                "option": "18 months",
                "isCorrect": false
            }
        ],
        "answer": "c"
    },
    {
        "id": 8,
        "question": "Te Papa???s famous Gallipoli exhibition is called what?",
        "options": [
            {
                "type": "a",
                "option": "Gallipoli: The Scale of our War",
                "isCorrect": true
            },
            {
                "type": "b",
                "option": "The ANZAC's and Gallipoli",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "New Zealand in World War I",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "War and the Aftermath",
                "isCorrect": false
            }
        ],
        "answer": "a"
    },
    {
        "id": 9,
        "question": "What is the Last Post?",
        "options": [
            {
                "type": "a",
                "option": "A poem",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "A bugle call",
                "isCorrect": true
            },
            {
                "type": "c",
                "option": "A book",
                "isCorrect": false
            },
            {
                "type": "d",
                "option": "A campaign",
                "isCorrect": false
            }
        ],
        "answer": "b"
    },
    {
        "id": 10,
        "question": "Who wrote the poem, 'For the Fallen'?",
        "options": [
            {
                "type": "a",
                "option": "Edgar Allan Poe",
                "isCorrect": false
            },
            {
                "type": "b",
                "option": "John Greenleaf Whittier",
                "isCorrect": false
            },
            {
                "type": "c",
                "option": "Laurence Binyon",
                "isCorrect": true
            },
            {
                "type": "d",
                "option": "Emily Dickinson",
                "isCorrect": false
            }
        ],
        "answer": "c"
    }
]