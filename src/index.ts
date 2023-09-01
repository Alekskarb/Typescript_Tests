// ======== 1 Test Typescript ======

interface ILoan {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}

const totalPrice = (object: ILoan): number => {
    if (object.isInstallment) {
        return (object.price / object.months) * (1 - object.discount / 100);
    }
    return (object.price / object.months);
};

const price = totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12});
console.log(price);

// ======== 2 Test Typescript ======

interface IPost {
    id: string,
    title: string,
    body: string
}

const posts: IPost[] = [
    {
        id: '62e69d5a5458aac0ed320b35',
        title: 'id labore ex et quam laborum',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
    },
    {
        id: '62e69d5a5458aac0ed320b1c',
        title: 'quo vero reiciendis velit similique earum',
        body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
    },
    {
        id: '62e69d5a5458aac0ed320b32',
        title: 'odio adipisci rerum aut animi',
        body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
        id: '62e69d5a5458aac0ed320b39',
        title: 'alias odio sit',
        body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
    },
    {
        id: '62e69d5a5458aac0ed320b53',
        title: 'vero eaque aliquid doloribus et culpa',
        body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
    },
    {
        id: '62e69d5a5458aac0ed320b19',
        title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
    },
    {
        id: '62e69d5a5458aac0ed320b25',
        title: 'repellat consequatur praesentium vel minus molestias voluptatum',
        body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
    }
];

interface INewPost {
    byId: { [key: string]: IPost },
    allIds: string[]
}
// function normalizeData<T, R>(a: T extends string, b: R): { byId: T } & { allIds: R } {
function normalizeData(value: IPost[]): any {
    let x = value.map(e => e.id);
       return Object.assign( {byId: value} as Object, {allIds: x})
}
console.log(normalizeData(posts));

// ======== 3 Test Typescript ======

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IDataURL {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const getData = async function (url: string): Promise<IDataURL[]> {
   return await (await fetch(url)).json()
}

getData(COMMENTS_URL)
    .then(data => {
        console.log(data)
        data.forEach((item: IDataURL) => {
            console.log( `ID:  ${item.id}`, `Email: ${item.email}`)
        });
    });