export const QUESTIONS = [
    // 1. БАЗОВЫЕ ТИПЫ
    {
        id: 1,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Какой результат выдаст TypeScript при компиляции этого кода?",
            en: "What will TypeScript output when compiling this code?",
            ka: "რა შედეგს მოგვცემს TypeScript ამ კოდის კომპილაციისას?"
        },
        code: `<span class="kw">let</span> x: <span class="type">number</span> = <span class="num">42</span>;
x = <span class="str">"hello"</span>;`,
        options: [
            { ru: "Скомпилируется без ошибок", en: "Compiles without errors", ka: "დაკომპილირდება შეცდომის გარეშე" },
            { ru: "Ошибка типа: нельзя присвоить string к number", en: "Type error: cannot assign string to number", ka: "ტიპის შეცდომა: string-ის მინიჭება number-ზე შეუძლებელია" },
            { ru: "Переменная автоматически станет типа string", en: "Variable automatically becomes string type", ka: "ცვლადი ავტომატურად გახდება string ტიპის" },
            { ru: "Предупреждение, но код выполнится", en: "Warning only, code still runs", ka: "მხოლოდ გაფრთხილება, კოდი მაინც გაეშვება" },
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript выдаст статическую ошибку компиляции, так как переменная 'x' строго типизирована как number, а строка 'hello' несовместима с этим типом. Вариант со сменой типа невозможен, так как в TS тип привязывается при объявлении. Однако помните: компилятор TS по умолчанию всё равно сгенерирует JS-файл, где эта строка запишется в переменную, так как в самом JS типизация динамическая.",
            en: "TypeScript will emit a static compile error because 'x' is strictly typed as a number, and 'hello' is a string literal. TS does not automatically widen or change types upon reassignment like python or dynamic JS does. Note: TS will still emit the final JavaScript code by default unless 'noEmitOnError' is enabled, meaning the code can technically run in runtime but fails compilation.",
            ka: "TypeScript გამოიტანს კომპილაციის შეცდომას, რადგან ცვლადი 'x' მკაცრად არის ტიპიზირებული როგორც number, ხოლო სტრიქონი 'hello' შეუთავსებელია ამ ტიპთან. ტიპის ავტომატური შეცვლა შეუძლებელია. გაითვალისწინეთ, რომ TS კომპილატორი მაინც შექმნის JS ფაილს, სადაც ეს მნიშვნელობა ჩაიწერება, რადგან JS-ს დინამიური ტიპიზაცია აქვს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean",
        docLabel: "Primitive Types — Handbook"
    },
    {
        id: 2,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Чем отличается тип unknown от any?",
            en: "What is the difference between unknown and any?",
            ka: "რით განსხვავდება unknown ტიპი any-სგან?"
        },
        code: `<span class="kw">let</span> a: <span class="type">any</span> = <span class="num">10</span>;
a.<span class="fn">toUpperCase</span>();

<span class="kw">let</span> b: <span class="type">unknown</span> = <span class="num">10</span>;
b.<span class="fn">toUpperCase</span>();`,
        options: [
            { ru: "Нет разницы, оба отключают проверку типов", en: "No difference, both disable type checking", ka: "განსხვავება არ არის, ორივე თიშავს ტიპების შემოწმებას" },
            { ru: "unknown безопаснее — нельзя использовать без проверки типа", en: "unknown is safer — can't use without type narrowing", ka: "unknown უფრო უსაფრთხოა — მისი გამოყენება ტიპის შემოწმების გარეშე შეუძლებელია" },
            { ru: "unknown работает только со строками", en: "unknown only works with strings", ka: "unknown მუშაობს მხოლოდ სტრიქონებზე" },
            { ru: "any строже чем unknown", en: "any is stricter than unknown", ka: "any უფრო მკაცრია ვიდრე unknown" },
        ],
        correct: 1,
        explanation: {
            ru: "Тип 'any' полностью отключает проверку типов: вы можете вызывать любые методы, и TS поверит вам на слово, что приведет к ошибке в рантайме. Тип 'unknown' говорит: 'Здесь может быть что угодно, поэтому я запрещаю тебе делать с этим переменной что-либо, пока ты явно не сузишь её тип с помощью typeof, instanceof или кастомного Type Guard'. Это делает unknown безопасной альтернативой any.",
            en: "'any' completely shuts down the type checker, allowing you to access any properties or methods, which risks runtime crashes. 'unknown' is the type-safe counterpart; it tells the compiler that the value could be anything, so you are legally blocked from doing anything with it until you perform type narrowing (like checking 'typeof b === \"string\"').",
            ka: "'any' ტიპი მთლიანად თიშავს შემოწმებას: შეგიძლიათ გამოიძახოთ ნებისმიერი მეთოდი, რაც გამოიწვევს შეცდომას runtime-ში. 'unknown' ტიპი კი გვეუბნება, რომ მასში შეიძლება ნებისმიერი რამ იყოს, ამიტომ კომპილატორი გვიკრძალავს მოქმედებებს, სანამ ტიპს მკაფიოდ არ შევამცირებთ (მაგ. typeof-ის გამოყენებით)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
        docLabel: "unknown vs any — Handbook"
    },
    {
        id: 3,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Что такое тип never в TypeScript?",
            en: "What is the never type in TypeScript?",
            ka: "რა არის never ტიპი TypeScript-ში?"
        },
        code: `<span class="kw">function</span> <span class="fn">throwError</span>(msg: <span class="type">string</span>): <span class="type">never</span> {
  <span class="kw">throw new</span> <span class="fn">Error</span>(msg);
}`,
        options: [
            { ru: "Тип для значений, которые никогда не появятся", en: "Type for values that never occur", ka: "ტიპი მნიშვნელობებისთვის, რომლებიც არასდროს იარსებებს" },
            { ru: "То же самое что void", en: "Same as void", ka: "იგივეა რაც void" },
            { ru: "Тип для null и undefined", en: "Type for null and undefined", ka: "ტიპი null და undefined-სთვის" },
            { ru: "Базовый тип всех типов", en: "The base type of all types", ka: "ყველა ტიპის საბაზისო ტიპი" },
        ],
        correct: 0,
        explanation: {
            ru: "Тип 'never' представляет значения, которые никогда не могут возникнуть. Если функция всегда выбрасывает ошибку или имеет бесконечный цикл, она никогда не дойдет до оператора return, а значит, возвращает 'never'. Это корневой тип дна (bottom type) в TS. Он отличается от void: void означает, что функция завершилась успешно, но ничего полезного не вернула.",
            en: "'never' represents a value that can never legally exist. A function that triggers a loop forever or always crashes via an exception returns 'never' because control flow never leaves the block normally. Void means the function executed successfully to completion but returned nothing, whereas never means completion is impossible.",
            ka: "'never' წარმოადგენს მნიშვნელობებს, რომლებიც არასდროს იარსებებს. თუ ფუნქცია ყოველთვის აგდებს შეცდომას ან უსასრულო ციკლშია, ის არასდროს მიაღწევს return-ს, შესაბამისად აბრუნებს 'never'-ს. ის განსხვავდება void-სგან: void ნიშნავს, რომ ფუნქცია წარმატებით დასრულდა, მაგრამ არაფერი დააბრუნა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type",
        docLabel: "The never type — Handbook"
    },
    {
        id: 4,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "В чем разница между объявлением массива и кортежа (Tuple)?",
            en: "What is the difference between declaring an array and a tuple?",
            ka: "რა განსხვავებაა მასივისა და კორტეჟის (Tuple) გამოცხადებას შორის?"
        },
        code: `<span class="kw">let</span> a: <span class="type">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>];
<span class="kw">let</span> b: [<span class="type">number</span>, <span class="type">string</span>] = [<span class="num">1</span>, <span class="str">"two"</span>];`,
        options: [
            { ru: "Массив имеет фиксированную длину и типы на конкретных позициях, кортеж — нет", en: "Array has a fixed length and types at specific positions, tuple does not", ka: "მასივს აქვს ფიქსირებული სიგრძე და ტიპები კონკრეტულ პოზიციებზე, კორტეჟს — არა" },
            { ru: "Кортеж фиксирует количество и порядок типов элементов, массив — только тип данных", en: "Tuple fixes the number and order of element types, array only fixes the data type", ka: "კორტეჟი აფიქსირებს ელემენტების ტიპების რაოდენობასა და თანმიმდევრობას, მასივი — მხოლოდ მონაცემთა ტიპს" },
            { ru: "Кортежи могут содержать только неизменяемые (readonly) данные", en: "Tuples can only contain immutable (readonly) data", ka: "კორტეჟები შეიძლება შეიცავდეს მხოლოდ უცვლელ (readonly) მონაცემებს" },
            { ru: "В JavaScript нет разницы, поэтому для TS они полностью идентичны", en: "There is no difference in JavaScript, so they are completely identical for TS", ka: "JavaScript-ში განსხვავება არ არის, ამიტომ TS-სთვის ისინი სრულიად იდენტურია" }
        ],
        correct: 1,
        explanation: {
            ru: "Кортеж (Tuple) — это массив с фиксированным количеством элементов, где каждый элемент имеет строго определённый тип на своей позиции. Обычный массив `number[]` может содержать любое количество чисел.",
            en: "A Tuple is an array with a fixed number of elements where each element has a strictly defined type at its specific index. A regular array like `number[]` can hold an arbitrary number of elements.",
            ka: "კორტეჟი (Tuple) არის მასივი ელემენტების ფიქსირებული რაოდენობით, სადაც თითოეულ ელემენტს აქვს მკაცრად განსაზღვრული ტიპი თავის პოზიციაზე. ჩვეულებრივი მასივი `number[]` კი შეიძლება შეიცავდეს ნებისმიერი რაოდენობის რიცხვს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Types — Handbook"
    },
    {
        id: 5,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Разрешит ли TypeScript выполнить метод .push() для данного кортежа?",
            en: "Will TypeScript allow executing the .push() method on this tuple?",
            ka: "ნება მისცემს თუ არა TypeScript ამ კორტეჟზე .push() მეთოდის შესრულებას?"
        },
        code: `<span class="kw">let</span> point: [<span class="type">number</span>, <span class="type">number</span>] = [<span class="num">10</span>, <span class="num">20</span>];
point.<span class="fn">push</span>(<span class="num">30</span>);`,
        options: [
            { ru: "Ошибка компиляции: длина кортежа строго фиксирована", en: "Compile error: tuple length is strictly fixed", ka: "კომპილაციის შეცდომა: კორტეჟის სიგრძე მკაცრად ფიქსირებულია" },
            { ru: "Скомпилируется без ошибок, так как методы массивов доступны кортежам", en: "Compiles without errors because array methods are available to tuples", ka: "დაკომპილირდება შეცდომის გარეშე, რადგან მასივის მეთოდები ხელმისაწვდომია კორტეჟებისთვის" },
            { ru: "Ошибка типа: в метод push можно передавать только строки", en: "Type error: push method only accepts strings", ka: "ტიპის შეცდომა: push მეთოდში მხოლოდ სტრიქონების გადაცემაა შესაძლებელი" },
            { ru: "Вызовет ошибку только в рантайме (Runtime Error)", en: "Will only throw an error at runtime (Runtime Error)", ka: "შეცდომას გამოიწვევს მხოლოდ გაშვებისას (Runtime Error)" }
        ],
        correct: 1,
        explanation: {
            ru: "Исторический нюанс TS: кортежи компилируются в обычные JS-массивы. Хотя TS знает точную структуру кортежа, он разрешает использовать мутирующие методы типа .push(), если добавляемый тип соответствует объединению типов элементов кортежа. Чтобы запретить это, нужно объявить кортеж как `readonly`.",
            en: "A historical quirk of TS: tuples are just regular JS arrays under the hood. While TS enforces the shape upon initialization, it allows mutating methods like `.push()` if the value matches the union of the tuple's element types. To prevent this, use a `readonly` tuple.",
            ka: "TS-ის ისტორიული ნიუანსი: კორტეჟები ჩვეულებრივ JS-მასივებად კომპილირდება. მიუხედავად იმისა, რომ TS-მა იცის კორტეჟის ზუსტი სტრუქტურა, ის ნებას რთავს ისეთი მუტაციური მეთოდების გამოყენებას, როგორიცაა .push(). ამის ასაკრძალად საჭიროა კორტეჟის `readonly`-ად გამოცხადება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-tuple-types",
        docLabel: "Readonly Tuple Types — Handbook"
    },
    {
        id: 6,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Какие числовые значения будут присвоены элементам Direction по умолчанию?",
            en: "What numeric values will be assigned to the Direction members by default?",
            ka: "რა რიცხვითი მნიშვნელობები მიენიჭება Direction-ის ელემენტებს ნაგულისხმევად?"
        },
        code: `<span class="kw">enum</span> Direction { Up, Down, Left, Right }`,
        options: [
            { ru: "Up: 1, Down: 2, Left: 3, Right: 4", en: "Up: 1, Down: 2, Left: 3, Right: 4", ka: "Up: 1, Down: 2, Left: 3, Right: 4" },
            { ru: "Все элементы получат значение undefined", en: "All members will get undefined", ka: "ყველა ელემენტი მიიღებს მნიშვნელობას undefined" },
            { ru: "Up: 0, Down: 1, Left: 2, Right: 3", en: "Up: 0, Down: 1, Left: 2, Right: 3", ka: "Up: 0, Down: 1, Left: 2, Right: 3" },
            { ru: "Каждый элемент получит случайное уникальное число", en: "Each member will get a random unique number", ka: "თითოეული ელემენტი მიიღებს შემთხვევით უნიკალურ რიცხვს" }
        ],
        correct: 2,
        explanation: {
            ru: "По умолчанию числовые перечисления (Numeric Enums) в TypeScript начинают отсчет с 0 и авто-инкрементируются для каждого последующего элемента.",
            en: "By default, numeric enums in TypeScript start initializing elements from 0, and automatically increment by 1 for each subsequent member.",
            ka: "ნაგულისხმევად, რიცხვითი ჩამონათვალი (Numeric Enums) TypeScript-ში იწყებს ათვლას 0-დან და ავტომატურად იზრდება 1-ით თითოეული შემდგომი ელემენტისთვის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums",
        docLabel: "Numeric Enums — Handbook"
    },
    {
        id: 7,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Скомпилируется ли код, если опустить значение для элемента 'Green' в строковом Enum?",
            en: "Will the code compile if the value for 'Green' is omitted in a string Enum?",
            ka: "დაკომპილირდება თუ არა კოდი, თუ გამოვტოვებთ მნიშვნელობას 'Green' ელემენტისთვის სტრიქონულ Enum-ში?"
        },
        code: `<span class="kw">enum</span> Colors {
  Red = <span class="str">"RED"</span>,
  Green,
  Blue = <span class="str">"BLUE"</span>
}`,
        options: [
            { ru: "Да, Green автоматически получит строку 'Green'", en: "Yes, Green will automatically get the string 'Green'", ka: "დიახ, Green ავტომატურად მიიღებს სტრიქონს 'Green'" },
            { ru: "Нет, ошибка компиляции: строковые enum требуют явных значений для всех последующих элементов", en: "No, compile error: string enum members must be explicitly initialized if they follow string members", ka: "არა, კომპილაციის შეცდომა: სტრიქონული enum მოითხოვს მკაფიო მნიშვნელობებს ყველა მომდევნო ელემენტისთვის" },
            { ru: "Да, Green получит числовое значение 0", en: "Yes, Green will get a numeric value of 0", ka: "დიახ, Green მიიღებს რიცხვით მნიშვნელობას 0" },
            { ru: "Да, но Green станет типа undefined", en: "Yes, but Green will become undefined type", ka: "დიახ, მაგრამ Green გახდება undefined ტიპის" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript, если элемент перечисления идет сразу за строковым элементом, он обязан иметь явную инициализацию. Авто-инкремент работает только для чисел.",
            en: "In TypeScript, enum members that follow string-initialized members must be explicitly initialized. Auto-increment features only apply to numeric values.",
            ka: "TypeScript-ში, თუ ჩამონათვალის ელემენტი მოსდევს სტრიქონულ ელემენტს, ის აუცილებლად მოითხოვს მკაფიო ინიციალიზაციას. ავტო-ინკრემენტი მუშაობს მხოლოდ რიცხვებზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#string-enums",
        docLabel: "String Enums — Handbook"
    },
    {
        id: 8,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "В чем главное преимущество использования 'const enum' по сравнению с обычным 'enum'?",
            en: "What is the primary benefit of using a 'const enum' over a regular 'enum'?",
            ka: "რა არის 'const enum'-ის გამოყენების მთავარი უპირატესობა ჩვეულებრივ 'enum'-თან შედარებით?"
        },
        code: `<span class="kw">const enum</span> Status { Active, Inactive }
<span class="kw">let</span> s = Status.Active;`,
        options: [
            { ru: "const enum позволяет изменять значения в процессе выполнения", en: "const enum allows modifying values at runtime", ka: "const enum საშუალებას იძლევა შევცვალოთ მნიშვნელობები შესრულების პროცესში" },
            { ru: "const enum полностью удаляется при компиляции, а его значения подставляются инлайново", en: "const enum is completely removed during compilation, and its values are inlined", ka: "const enum მთლიანად იშლება კომპილაციისას, ხოლო მისი მნიშვნელობები ჩაინლაინდება" },
            { ru: "const enum работает быстрее в рантайме, так как создает скрытый JS-класс", en: "const enum runs faster because it creates a hidden JS class", ka: "const enum მუშაობს უფრო სწრაფად, რადგან ქმნის ფარულ JS-კლასს" },
            { ru: "const enum запрещает использовать числовые значения", en: "const enum forbids using numeric values", ka: "const enum კრძალავს რიცხვითი მნიშვნელობების გამოყენებას" }
        ],
        correct: 1,
        explanation: {
            ru: "`const enum` не генерирует объект в финальном JavaScript-коде. Вместо этого компилятор подставляет конкретные значения (inline литералы) везде, где использовалось перечисление, что уменьшает размер бандла.",
            en: "`const enum` does not emit any runtime JavaScript object. Instead, the compiler completely inlines the raw values wherever the enum members are used, reducing the final bundle size.",
            ka: "`const enum` არ აგენერირებს ობიექტს საბოლოო JavaScript კოდში. ამის ნაცვლად, კომპილატორი ჩასვამს კონკრეტულ მნიშვნელობებს (inline ლიტერალებს) ყველგან, სადაც ეს ჩამონათვალი იყო გამოყენებული."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#const-enums",
        docLabel: "Const Enums — Handbook"
    },
    {
        id: 9,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Какой тип данных получит переменная 'action' в данном примере?",
            en: "What data type will the 'action' variable have in this example?",
            ka: "მონაცემთა რა ტიპს მიიღებს 'action' ცვლადი მოცემულ მაგალითში?"
        },
        code: `<span class="kw">const</span> action = <span class="str">"click"</span>;`,
        options: [
            { ru: "Тип string", en: "Type string", ka: "string ტიპი" },
            { ru: "Литеральный тип \"click\"", en: "Literal type \"click\"", ka: "ლიტერალური ტიპი \"click\"" },
            { ru: "Тип any", en: "Type any", ka: "any ტიპი" },
            { ru: "Тип unknown", en: "Type unknown", ka: "unknown ტიპი" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку переменная объявлена через `const`, её значение не может измениться. TypeScript сужает тип до конкретного литерала — `\"click\"`. Если бы использовался `let`, тип автоматически расширился бы до `string`.",
            en: "Since the variable is declared with `const`, its value cannot change. TypeScript narrows its type to the specific string literal `\"click\"`. If `let` was used, it would widen to `string`.",
            ka: "ვინაიდან ცვლადი გამოცხადებულია `const`-ით, მისი მნიშვნელობა ვერ შეიცვლება. TypeScript ავიწროებს მის ტიპს კონკრეტულ ლიტერალამდე — `\"click\"`. `let`- ის გამოყენების შემთხვევაში ტიპი გაფართოვდებოდა `string`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types",
        docLabel: "Literal Types — Handbook"
    },
    {
        id: 10,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Что фактически возвращает функция, если её возвращаемый тип указан как void?",
            en: "What does a function actually return at runtime if its return type is specified as void?",
            ka: "რას აბრუნებს რეალურად ფუნქცია, თუ მისი დაბრუნების ტიპად მითითებულია void?"
        },
        code: `<span class="kw">function</span> <span class="fn">logMessage</span>(): <span class="type">void</span> {
  console.<span class="fn">log</span>(<span class="str">"Done"</span>);
}`,
        options: [
            { ru: "Специальное значение void", en: "A special value called void", ka: "სპეციალურ მნიშვნელობას void" },
            { ru: "null", en: "null", ka: "null" },
            { ru: "undefined", en: "undefined", ka: "undefined" },
            { ru: "Ничего, выполнение прерывается", en: "Nothing, execution is aborted", ka: "არაფერს, შესრულება წყდება" }
        ],
        correct: 2,
        explanation: {
            ru: "В JavaScript функции, которые не имеют оператора `return` (или возвращают пустой `return;`), всегда возвращают значение `undefined` в процессе выполнения. В TS `void` — это тип, указывающий, что возвращаемое значение не должно использоваться.",
            en: "In JavaScript, a function that doesn't explicitly return a value returns `undefined` at runtime. In TS, `void` is a type-level signifier meaning the return value shouldn't be observed or used.",
            ka: "JavaScript-ში ფუნქციები, რომლებსაც არ აქვთ `return` ოპერატორი, ყოველთვის აბრუნებენ `undefined`-ს შესრულებისას. TS-ში `void` არის ტიპი, რომელიც მიუთითებს, რომ დასაბრუნებელი მნიშვნელობა არ უნდა იქნას გამოყენებული."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#void",
        docLabel: "void type — Handbook"
    },
    {
        id: 11,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Что произойдет при попытке присвоить null переменной типа string при ВКЛЮЧЕННОЙ опции strictNullChecks?",
            en: "What happens when trying to assign null to a string variable with strictNullChecks ENABLED?",
            ka: "რა მოხდება string ტიპის ცვლადზე null-ის მინიჭების მცდელობისას, როცა strictNullChecks ოპცია ჩართულია?"
        },
        code: `<span class="kw">let</span> username: <span class="type">string</span> = <span class="num">null</span>;`,
        options: [
            { ru: "Код успешно скомпилируется", en: "Code compiles successfully", ka: "კოდი წარმატებით დაკომპილირდება" },
            { ru: "Ошибка компиляции: тип null нельзя присвоить типу string", en: "Compile error: type 'null' is not assignable to type 'string'", ka: "კომპილაციის შეცდომა: null ტიპის მინიჭება string ტიპზე შეუძლებელია" },
            { ru: "Переменная username автоматически поменяет тип на null", en: "The username variable will automatically change its type to null", ka: "username ცვლადი ავტომატურად შეიცვლის ტიპს null-ზე" },
            { ru: "Значение превратится в пустую строку \"\"", en: "The value converts into an empty string \"\"", ka: "მნიშვნელობა გადაიქცევა ცარიელ სტრიქონად \"\"" }
        ],
        correct: 1,
        explanation: {
            ru: "Когда флаг `strictNullChecks` включен, значения `null` и `undefined` имеют свои собственные обособленные типы и не могут быть присвоены другим типам вроде `string` или `number` без использования объединений (Union).",
            en: "When `strictNullChecks` is enabled, `null` and `undefined` get their own distinct types and cannot be assigned to other types like `string` or `number` unless explicitly typed as a union.",
            ka: "როდესაც `strictNullChecks` ჩართულია, `null` და `undefined` მნიშვნელობებს აქვთ თავიანთი განცალკევებული ტიპები და არ შეიძლება მიენიჭოთ სხვა ტიპებს (მაგ. string ან number) გაერთიანების (Union) გარეშე."
        },
        docLink: "https://www.typescriptlang.org/tsconfig/#strictNullChecks",
        docLabel: "strictNullChecks — TSConfig Reference"
    },
    {
        id: 12,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "К каким методам и свойствам аргумента 'id' дает доступ TypeScript без предварительного сужения типа?",
            en: "Which methods and properties of the 'id' argument can be accessed without prior type narrowing?",
            ka: "არგუმენტ 'id'-ის რომელ მეთოდებსა და თვისებებზე გვაძლევს TS წვდომას ტიპის წინასწარი შევიწროების გარეშე?"
        },
        code: `<span class="kw">function</span> <span class="fn">printId</span>(id: <span class="type">string</span> | <span class="type">number</span>) {
  <span class="kw">let</span> result = id.<span class="fn">...</span>
}`,
        options: [
            { ru: "К любым методам строк и чисел", en: "To any methods belonging to strings or numbers", ka: "სტრიქონებისა და რიცხვების ნებისმიერ მეთოდზე" },
            { ru: "Только к методам, которые являются общими для обоих типов (например, .toString())", en: "Only to methods that are common to both types (e.g., .toString())", ka: "მხოლოდ იმ მეთოდებზე, რომლებიც საერთოა ორივე ტიპისთვის (მაგალითად, .toString())" },
            { ru: "Ни к каким, будет ошибка компиляции на любую попытку вызова", en: "To none, any property access will throw a compile error", ka: "არცერთზე, კომპილაციის შეცდომა იქნება გამოძახების ნებისმიერ მცდელობაზე" },
            { ru: "Только к методам чисел, так как number идет вторым", en: "Only to number methods since number is listed second", ka: "მხოლოდ რიცხვების მეთოდებზე, რადგან number მითითებულია მეორე ადგილზე" }
        ],
        correct: 1,
        explanation: {
            ru: "При работе с объединением типов (Union), TypeScript позволяет безопасно обращаться только к тем членам типа, которые присутствуют во ВСЕХ типах данного объединения. Для специфических методов (например, `.toUpperCase()`) необходимо сузить тип.",
            en: "When working with a Union type, TypeScript only allows you to access properties or methods that are common to all members of the union. For type-specific methods, narrowing is required.",
            ka: "გაერთიანებულ ტიპებთან (Union) მუშაობისას, TS ნებას გვაძლევს უსაფრთხოდ მივმართოთ მხოლოდ იმ თვისებებს ან მეთოდებს, რომლებიც არსებობს ამ გაერთიანების ყველა წევრში. სპეციფიკური მეთოდებისთვის საჭიროა ტიპის შევიწროება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types",
        docLabel: "Working with Union Types — Handbook"
    },
    {
        id: 13,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Каким свойствами должен обладать объект переменной 'obj'?",
            en: "What properties must the 'obj' variable possess?",
            ka: "რა თვისებები უნდა ჰქონდეს 'obj' ცვლადის ობიექტს?"
        },
        code: `<span class="kw">type</span> Foo = { foo: <span class="type">number</span> };
<span class="kw">type</span> Bar = { bar: <span class="type">string</span> };
<span class="kw">let</span> obj: Foo & Bar;`,
        options: [
            { ru: "Либо свойством foo, либо свойством bar", en: "Either the foo property, or the bar property", ka: "ან foo თვისება, ან bar თვისება" },
            { ru: "Только одним свойством на выбор, но тип должен совпадать", en: "Only one property of choice, but types must match", ka: "მხოლოდ ერთი თვისება არჩევით, მაგრამ ტიპი უნდა ემთხვეოდეს" },
            { ru: "Обязательно должен содержать одновременно и foo, и bar", en: "Must contain both foo and bar properties simultaneously", ka: "აუცილებლად უნდა შეიცავდეს ერთდროულად foo-საც და bar-საც" },
            { ru: "Этот код вызовет ошибку типа never, так как объекты нельзя пересекать через &", en: "This code will result in a 'never' type because objects cannot be intersected with &", ka: "ეს კოდი გამოიწვევს never ტიპის შეცდომას, რადგან ობიექტების გადაკვეთა &-ით შეუძლებელია" }
        ],
        correct: 2,
        explanation: {
            ru: "Пересечение типов (&) объединяет требования нескольких типов в один. Объект типа `Foo & Bar` обязан иметь абсолютно все свойства из обоих типов.",
            en: "An intersection type (&) combines multiple types into one. An object assigned to a `Foo & Bar` type must satisfy and contain all properties from both definitions.",
            ka: "ტიპების გადაკვეთა (&) აერთიანებს რამდენიმე ტიპის მოთხოვნებს ერთში. `Foo & Bar` ტიპის ობიექტი ვალდებულია შეიცავდეს აბსოლუტურად ყველა თვისებას ორივე ტიპიდან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Intersection Types — Handbook"
    },
    {
        id: 14,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Какое ключевое отличие между интерфейсом (interface) и типом-алиасом (type alias)?",
            en: "What is a key difference between an interface and a type alias?",
            ka: "რა არის ძირითადი განსხვავება ინტერფეისსა (interface) და ტიპის ალიასს (type alias) შორის?"
        },
        code: `<span class="kw">interface</span> User { name: <span class="type">string</span> }
<span class="kw">type</span> Person = { name: <span class="type">string</span> };`,
        options: [
            { ru: "Интерфейсы поддерживают декларативное слияние (declaration merging), а типы — нет", en: "Interfaces support declaration merging, while type aliases do not", ka: "ინტერფეისები მხარს უჭერენ დეკლარაციულ შერწყმას (declaration merging), ხოლო ტიპები — არა" },
            { ru: "Типы компилируются в JS-код, а интерфейсы полностью стираются", en: "Types compile into JS code, while interfaces are completely erased", ka: "ტიპები კომპილირდება JS კოდში, ხოლო ინტერფეისები მთლიანად იშლება" },
            { ru: "Интерфейсы нельзя расширять с помощью наследования", en: "Interfaces cannot be extended using inheritance", ka: "ინტერფეისების გაფართოება მემკვიდრეობითობით შეუძლებელია" },
            { ru: "Тип-алиас применим только к примитивным значениям", en: "Type aliases can only be applied to primitive values", ka: "ტიპის ალიასი გამოიყენება მხოლოდ პრიმიტიულ მნიშვნელობებზე" }
        ],
        correct: 0,
        explanation: {
            ru: "Интерфейсы могут быть объявлены несколько раз с одинаковым именем в одной области видимости — TypeScript автоматически объединит их свойства (Declaration Merging). Тип (type alias) продублировать нельзя, возникнет ошибка.",
            en: "Interfaces can be declared multiple times with the same name in the same scope; TypeScript will merge their definitions automatically. Type aliases cannot be reopened or changed after definition.",
            ka: "ინტერფეისები შეიძლება გამოცხადდეს რამდენჯერმე ერთი და იმავე სახელით ერთსა და იმავე ხილვადობის არეში — TS ავტომატურად გააერთიანებს მათ თვისებებს (Declaration Merging). ტიპის (type alias) დუბლირება კი შეუძლებელია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",
        docLabel: "Differences Between Type Aliases and Interfaces — Handbook"
    },
    {
        id: 15,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Как правильно описать сигнатуру типа для стрелочной функции, принимающей число и возвращающей строку?",
            en: "How do you correctly write a type signature for an arrow function that accepts a number and returns a string?",
            ka: "როგორ უნდა აღიწეროს სწორად ისეთი ისრიანი ფუნქციის ტიპის სიგნატურა, რომელიც იღებს რიცხვს და აბრუნებს სტრიქონს?"
        },
        code: `<span class="kw">type</span> MyFunc = <span class="fn">...</span>;`,
        options: [
            { ru: "(x: number) => string", en: "(x: number) => string", ka: "(x: number) => string" },
            { ru: "(x: number): string", en: "(x: number): string", ka: "(x: number): string" },
            { ru: "function(x: number) -> string", en: "function(x: number) -> string", ka: "function(x: number) -> string" },
            { ru: "ArrowFunction<number, string>", en: "ArrowFunction<number, string>", ka: "ArrowFunction<number, string>" }
        ],
        correct: 0,
        explanation: {
            ru: "При описании сигнатур типов функций вне контекста объектов используется синтаксис стрелки `=>` для отделения списка аргументов от возвращаемого типа.",
            en: "When writing function type signatures standalone (not inside an object literal or interface), the fat arrow `=>` syntax is used to separate parameters from the return type.",
            ka: "ფუნქციის ტიპის სიგნატურის ცალკე აღწერისას (ობიექტების კონტექსტის მიღმა) გამოიყენება ისრის `=>` სინტაქსი არგუმენტების სიის დასაბრუნებელი ტიპისგან გამოსაყოფად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions",
        docLabel: "Function Type Expressions — Handbook"
    },
    {
        id: 16,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Что означает строчный тип 'object' (с маленькой буквы) в TypeScript?",
            en: "What does the lowercase 'object' type represent in TypeScript?",
            ka: "რას ნიშნავს პატარა ასოთი დაწერილი 'object' ტიპი TypeScript-ში?"
        },
        code: `<span class="kw">let</span> config: <span class="type">object</span>;`,
        options: [
            { ru: "Абсолютно любой тип данных, включая числа и строки", en: "Absolutely any data type, including numbers and strings", ka: "აბსოლუტურად ნებისმიერ მონაცემთა ტიპს, რიცხვებისა და სტრიქონების ჩათვლით" },
            { ru: "Любой не-примитивный тип (все, что не string, number, boolean, symbol, null, undefined)", en: "Any non-primitive type (anything that is not a string, number, boolean, symbol, null, or undefined)", ka: "ნებისმიერ არაპრიმიტიულ ტიპს (ყველაფერს, რაც არ არის string, number, boolean, symbol, null, undefined)" },
            { ru: "Только пустой объект без свойств {}", en: "Only an empty object literal with no properties {}", ka: "მხოლოდ ცარიელ ობიექტს თვისებების გარეშე {}" },
            { ru: "Экземпляр встроенного JS-класса globalThis.Object", en: "An instance of the built-in JS class globalThis.Object", ka: "ჩაშენებული JS კლასის globalThis.Object-ის ეგზემპლარს" }
        ],
        correct: 1,
        explanation: {
            ru: "Тип `object` (с маленькой буквы) представляет любой не-примитивный тип. Переменной такого типа нельзя присвоить `42` или `\"hello\"`, но можно присвоить массивы, функции или обычные объекты.",
            en: "The lowercase `object` type represents any value that is not a primitive. You cannot assign primitive constants like `42` or `\"hello\"` to it, but objects, arrays, and functions are allowed.",
            ka: "პატარა ასოთი დაწერილი `object` ტიპი წარმოადგენს ნებისმიერ არაპრიმიტიულ ტიპს. ასეთი ტიპის ცვლადს ვერ მივანიჭებთ `42`-ს ან `\"hello\"`-ს, მაგრამ შეგვიძლია მივანიჭოთ მასივები, ფუნქციები ან ჩვეულებრივი ობიექტები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types",
        docLabel: "Object Types — Handbook"
    },
    {
        id: 17,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Какой тип будет иметь свойство 'age', если оно помечено знаком вопроса?",
            en: "What type will the 'age' property have when marked with a question mark?",
            ka: "რა ტიპი ექნება 'age' თვისებას, თუ ის მონიშნულია კითხვის ნიშნით?"
        },
        code: `<span class="kw">interface</span> Profile {
  age?: <span class="type">number</span>;
}`,
        options: [
            { ru: "number | null", en: "number | null", ka: "number | null" },
            { ru: "number | undefined", en: "number | undefined", ka: "number | undefined" },
            { ru: "Только number, но свойство можно удалить", en: "Only number, but the property can be safely deleted", ka: "მხოლოდ number, მაგრამ თვისების წაშლა შესაძლებელია" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript знак вопроса в определении свойства объекта указывает на то, что это свойство может отсутствовать. Тип свойства неявно расширяется объединением с `undefined`.",
            en: "In TypeScript, a question mark on an object property indicates that the property is optional. Its compiler-inferred type automatically becomes a union with `undefined`.",
            ka: "TypeScript-ში კითხვის ნიშანი ობიექტის თვისების აღწერისას მიუთითებს იმაზე, რომ ეს თვისება შეიძლება არ არსებობდეს. თვისების ტიპი ავტომატურად ფართოვდება `undefined`-თან გაერთიანებით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties",
        docLabel: "Optional Properties — Handbook"
    },
    {
        id: 18,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Как правильно объявить тип массива, который может содержать и числа, и строки одновременно?",
            en: "How do you correctly declare an array type that can contain both numbers and strings simultaneously?",
            ka: "როგორ უნდა გამოცხადდეს სწორად იმ მასივის ტიპი, რომელიც შეიძლება შეიცავდეს როგორც რიცხვებს, ასევე სტრიქონებს ერთდროულად?"
        },
        code: `<span class="kw">let</span> list: <span class="type">...</span> = [<span class="num">1</span>, <span class="str">"two"</span>, <span class="num">3</span>];`,
        options: [
            { ru: "number | string[]", en: "number | string[]", ka: "number | string[]" },
            { ru: "(number | string)[]", en: "(number | string)[]", ka: "(number | string)[]" },
            { ru: "[number, string]", en: "[number, string]", ka: "[number, string]" },
            { ru: "Array<number & string>", en: "Array<number & string>", ka: "Array<number & string>" }
        ],
        correct: 1,
        explanation: {
            ru: "Вариант `(number | string)[]` означает массив, элементами которого могут быть как числа, так и строки. Вариант без круглых скобок `number | string[]` означал бы, что переменная является либо одиночным числом, либо массивом строк.",
            en: "`(number | string)[]` means an array whose items can be either a number or a string. Writing `number | string[]` without parentheses creates a union between a single number and an array of strings.",
            ka: "ვარიანტი `(number | string)[]` ნიშნავს მასივს, რომლის ელემენტებიც შეიძლება იყოს როგორც რიცხვი, ასევე სტრიქონი. ფრჩხილების გარეშე `number | string[]` ნიშნავს, რომ ცვლადი არის ან ერთი რიცხვი, ან სტრიქონების მასივი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays",
        docLabel: "Arrays — Handbook"
    },
    {
        id: 19,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Каким типом должен быть аннотирован rest-параметр в аргументах функции?",
            en: "What type must a rest parameter be annotated with in function arguments?",
            ka: "რა ტიპით უნდა დაანოტირდეს rest-პარამეტრი ფუნქციის არგუმენტებში?"
        },
        code: `<span class="kw">function</span> <span class="fn">sum</span>(...numbers: <span class="type">...</span>) { /* ... */ }`,
        options: [
            { ru: "Обязательно типом-массивом (например, number[])", en: "Must strictly be an array type (e.g., number[])", ka: "აუცილებლად მასივის ტიპით (მაგალითად, number[])" },
            { ru: "Одиночным примитивным типом number", en: "A single primitive type like number", ka: "ცალკეული პრიმიტიული number ტიპით" },
            { ru: "Типом any, так как количество аргументов неизвестно", en: "Type any, because the argument count is unknown", ka: "any ტიპით, რადგან არგუმენტების რაოდენობა უცნობია" },
            { ru: "Объектом типа { [key: string]: number }", en: "An object type like { [key: string]: number }", ka: "ობიექტის ტიპით { [key: string]: number }" }
        ],
        correct: 0,
        explanation: {
            ru: "Поскольку rest-параметры собирают все переданные аргументы в реальный JavaScript-массив, их тип в TypeScript всегда должен быть массивом (`T[]` или `Array<T>`) или кортежем.",
            en: "Since rest parameters gather all remaining arguments into a real JavaScript array, their type annotation in TypeScript must always be an array type (`T[]` or `Array<T>`) or a tuple type.",
            ka: "ვინაიდან rest-პარამეტრები აგროვებს ყველა გადაცემულ არგუმენტს რეალურ JavaScript მასივში, მათი ტიპი TS-ში ყოველთვის უნდა იყოს მასივი (`T[]` ან `Array<T>`) ან კორტეჟი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments",
        docLabel: "Rest Parameters — Handbook"
    },
    {
        id: 20,
        category: { ru: "Базовые типы", en: "Basic Types", ka: "საბაზისო ტიპები" },
        tag: "basic-types",
        question: {
            ru: "Скомпилируется ли следующий код, сравнивающий два символа?",
            en: "Will the following code comparing two symbols compile successfully?",
            ka: "დაკომპილირდება თუ არა შემდეგი კოდი, რომელიც ორ სიმბოლოს (Symbol) ადარებს?"
        },
        code: `<span class="kw">const</span> sym1: <span class="type">unique symbol</span> = Symbol(<span class="str">"key"</span>);
<span class="kw">const</span> sym2: <span class="type">unique symbol</span> = Symbol(<span class="str">"key"</span>);
<span class="kw">if</span> (sym1 === sym2) { /* ... */ }`,
        options: [
            { ru: "Да, так как их описания одинаковы (\"key\")", en: "Yes, because their string descriptions are identical (\"key\")", ka: "დიახ, რადგან მათი აღწერილობები იდენტურია (\"key\")" },
            { ru: "Ошибка компиляции: типы unique symbol не могут сравниваться друг с другом", en: "Compile error: types of 'unique symbol' cannot be compared to each other", ka: "კომპილაციის შეცდომა: unique symbol ტიპების ერთმანეთთან შედარება შეუძლებელია" },
            { ru: "Да, но это вызовет ошибку в рантайме", en: "Yes, but it will throw a runtime error", ka: "დიახ, მაგრამ ეს გამოიწვევს შეცდომას გაშვებისას" },
            { ru: "Да, и условие if всегда будет истинным (true)", en: "Yes, and the if condition will always evaluate to true", ka: "დიახ, და if პირობა ყოველთვის ჭეშმარიტი (true) იქნება" }
        ],
        correct: 1,
        explanation: {
            ru: "Тип `unique symbol` указывает компилятору, что этот символ уникален в рамках всей программы. TypeScript знает, что два разных `unique symbol` никогда не могут быть равны друг другу, поэтому запрещает их статическое сравнение.",
            en: "The `unique symbol` type tells the compiler that this specific reference is completely unique. TypeScript knows that two distinct `unique symbol` types can never overlap or be equal, thus strictly forbidding their static comparison.",
            ka: "ტიპი `unique symbol` მიუთითებს კომპილატორს, რომ ეს სიმბოლო უნიკალურია მთელი პროგრამის ფარგლებში. TS-მა იცის, რომ ორი განსხვავებული `unique symbol` ტიპი არასდროს იქნება ერთმანეთის ტოლი, ამიტომ კრძალავს მათ სტატიკურ შედარებას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol",
        docLabel: "unique symbol — Handbook"
    },

    // 2. ИНТЕРФЕЙСЫ
    {
        id: 21,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какое поведение описывает знак вопроса (?) рядом со свойством интерфейса?",
            en: "What behavior does the question mark (?) specify near an interface property?",
            ka: "რა ქცევას აღწერს კითხვის ნიშანი (?) ინტერფეისის თვისებასთან?"
        },
        code: `<span class="kw">interface</span> <span class="type">Config</span> {
  host: <span class="type">string</span>;
  port?: <span class="type">number</span>;
}`,
        options: [
            { ru: "Свойство port обязательно, но может быть равен null", en: "The port property is required but can be null", ka: "port თვისება სავალდებულოა, მაგრამ შეიძლება იყოს null" },
            { ru: "Свойство port является необязательным и может принимать значение undefined", en: "The port property is optional and can accept an undefined value", ka: "port თვისება არასავალდებულოა და შეიძლება მიიღოს undefined მნიშვნელობა" },
            { ru: "Свойство port доступно только для чтения", en: "The port property is read-only", ka: "port თვისება ხელმისაწვდომია მხოლოდ წასაკითხად" },
            { ru: "port — это динамический метод интерфейса", en: "port is a dynamic method of the interface", ka: "port არის ინტერფეისის დინამიური მეთოდი" }
        ],
        correct: 1,
        explanation: {
            ru: "Необязательные свойства (Optional Properties) позволяют объектам интерфейса опускать эти поля при инициализации. Тип такого свойства автоматически становится `T | undefined`.",
            en: "Optional properties allow objects implementing the interface to omit these fields during initialization. The inferred type of such a property implicitly becomes `T | undefined`.",
            ka: "არასავალდებულო თვისებები (Optional Properties) საშუალებას აძლევს ინტერფეისის ობიექტებს გამოტოვონ ეს ველები ინიციალიზაციისას. ასეთი თვისების ტიპი ავტომატურად ხდება `T | undefined`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties",
        docLabel: "Optional Properties — Handbook"
    },

    {
        id: 22,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Каким требованиям должен соответствовать объект типа Dictionary?",
            en: "What requirements must an object of type Dictionary satisfy?",
            ka: "რა მოთხოვნებს უნდა აკმაყოფილებდეს Dictionary ტიპის ობიექტი?"
        },
        code: `<span class="kw">interface</span> <span class="type">Dictionary</span> {
  [key: <span class="type">string</span>]: <span class="type">boolean</span>;
}`,
        options: [
            { ru: "Объект может содержать только одно свойство с именем 'key'", en: "The object can only contain a single property named 'key'", ka: "ობიექტი შეიძლება შეიცავდეს მხოლოდ ერთ თვისებას სახელით 'key'" },
            { ru: "Объект может иметь любые строковые ключи, но их значения должны быть строго boolean", en: "The object can have any string keys, but their values must strictly be boolean", ka: "ობიექტს შეიძლება ჰქონდეს ნებისმიერი სტრიქონული გასაღები, მაგრამ მათი მნიშვნელობები მკაცრად boolean უნდა იყოს" },
            { ru: "Это синтаксис массива, состоящего из логических значений", en: "This is the syntax for an array consisting of boolean values", ka: "ეს არის ლოგიკური მნიშვნელობებისგან შემდგარი მასივის სინტაქსი" },
            { ru: "Интерфейс запрещает добавлять свойства в объект", en: "The interface forbids adding any properties to the object", ka: "ინტერფეისი კრძალავს ობიექტში თვისებების დამატებას" }
        ],
        correct: 1,
        explanation: {
            ru: "Индексная сигнатура `[key: string]: boolean` описывает объект, у которого имена свойств являются строками, а значения имеют тип `boolean`. Это позволяет создавать динамические словари / мапы.",
            en: "An index signature like `[key: string]: boolean` states that when the object is indexed with a string, it will return a boolean. This is ideal for describing dynamic dictionaries or maps.",
            ka: "ინდექსური სიგნატურა `[key: string]: boolean` აღწერს ობიექტს, რომლის თვისებების სახელები არის სტრიქონები, ხოლო მნიშვნელობებს აქვთ `boolean` ტიპი. ეს მოსახერხებელია დინამიური ლექსიკონების შესაქმნელად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
        docLabel: "Index Signatures — Handbook"
    },

    {
        id: 23,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какими свойствами будет обладать объект типа Сar после наследования через extends?",
            en: "What properties will an object of type Car possess after inheriting via extends?",
            ka: "რა თვისებები ექნება Car ტიპის ობიექტს extends-ით მემკვიდრეობითობის მიღების შემდეგ?"
        },
        code: `<span class="kw">interface</span> <span class="type">Vehicle</span> { wheels: <span class="type">number</span>; }
<span class="kw">interface</span> <span class="type">Car</span> <span class="kw">extends</span> <span class="type">Vehicle</span> { brand: <span class="type">string</span>; }`,
        options: [
            { ru: "Только свойством brand", en: "Only the brand property", ka: "მხოლოდ brand თვისება" },
            { ru: "Только свойством wheels", en: "Only the wheels property", ka: "მხოლოდ wheels თვისება" },
            { ru: "И свойством wheels, и свойством brand", en: "Both wheels and brand properties", ka: "როგორც wheels, ასევე brand თვისებები" },
            { ru: "Произойдет ошибка: интерфейсы не могут наследоваться", en: "An error occurs: interfaces cannot inherit from each other", ka: "მოხდება შეცდომა: ინტერფეისები ვერ მიიღებენ მემკვიდრეობითობას" }
        ],
        correct: 2,
        explanation: {
            ru: "Ключевое слово `extends` позволяет копировать члены из других интерфейсов. Интерфейс `Car` наследует свойство `wheels` от `Vehicle` и добавляет свое собственное свойство `brand`.",
            en: "The `extends` keyword allows an interface to copy members of other named interfaces. The `Car` interface inherits `wheels` from `Vehicle` while adding its own `brand` property.",
            ka: "საკვანძო სიტყვა `extends` საშუალებას იძლევა მოახდინოს სხვა ინტერფეისების წევრების კოპირება. `Car` ინტერფეისი აიღებს `wheels` თვისებას `Vehicle`-სგან და დაამატებს თავის საკუთარ `brand` თვისებას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types",
        docLabel: "Extending Types — Handbook"
    },

    {
        id: 24,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какую структуру описывает данный интерфейс MathFunc?",
            en: "What kind of structure does this MathFunc interface describe?",
            ka: "რა სახის სტრუქტურას აღწერს მოცემული MathFunc ინტერფეისი?"
        },
        code: `<span class="kw">interface</span> <span class="type">MathFunc</span> {
  (num1: <span class="type">number</span>, num2: <span class="type">number</span>): <span class="type">number</span>;
}`,
        options: [
            { ru: "Объект с методом по умолчанию", en: "An object with a default method", ka: "ობიექტს ნაგულისხმევი მეთოდით" },
            { ru: "Функцию (вызываемый объект), принимающую два числа и возвращающую число", en: "A function (callable object) that accepts two numbers and returns a number", ka: "ფუნქციას (გამოძახებად ობიექტს), რომელიც იღებს ორ რიცხვს და აბრუნებს რიცხვს" },
            { ru: "Массив, содержащий пары чисел", en: "An array containing pairs of numbers", ka: "რიცხვების წყვილებისგან შემდგარ მასივს" },
            { ru: "Конструктор класса", en: "A class constructor", ka: "კლასის კონსტრუქტორს" }
        ],
        correct: 1,
        explanation: {
            ru: "Интерфейсы в TypeScript могут описывать не только обычные объекты, но и функции с помощью сигнатур вызова (Call Signatures). В коде выше описан тип для функции.",
            en: "Interfaces can describe not just plain object shapes, but also functions using Call Signatures. The code snippet above defines a type definition for a callable function.",
            ka: "TypeScript-ში ინტერფეისებს შეუძლიათ აღწერონ არა მხოლოდ ჩვეულებრივი ობიექტები, არამედ ფუნქციებიც გამოძახების სიგნატურების (Call Signatures) მეშვეობით. ზემოთ მოცემული კოდი აღწერს ფუნქციის ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures",
        docLabel: "Call Signatures — Handbook"
    },

    {
        id: 25,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Что произойдет при попытке скомпилировать класс, реализующий интерфейс, если в классе пропущено свойство?",
            en: "What will happen when trying to compile a class implementing an interface if a property is missing in the class?",
            ka: "რა მოხდება ინტერფეისის იმპლემენტაციის მქონე კლასის კომპილაციის მცდელობისას, თუ კლასში გამოტოვებულია თვისება?"
        },
        code: `<span class="kw">interface</span> <span class="type">Pingable</span> { ping(): <span class="type">void</span>; }
<span class="kw">class</span> <span class="type">Ball</span> <span class="kw">implements</span> <span class="type">Pingable</span> {}`,
        options: [
            { ru: "Класс автоматически сгенерирует пустой метод ping()", en: "The class will automatically generate an empty ping() method", ka: "კლასი ავტომატურად დააგენერირებს ცარიელ ping() მეთოდს" },
            { ru: "Ошибка компиляции: Class 'Ball' incorrectly implements interface 'Pingable'", en: "Compile error: Class 'Ball' incorrectly implements interface 'Pingable'", ka: "კომპილაციის შეცდომა: Class 'Ball' incorrectly implements interface 'Pingable'" },
            { ru: "Код скомпилируется, но упадет при попытке создать экземпляр класса через new", en: "Code compiles but crashes when attempting to instantiate the class via new", ka: "კოდი დაკომპილირდება, მაგრამ შეიცვლება შეცდომით კლასის ეგზემპლარის new-ით შექმნისას" },
            { ru: "Интерфейс проигнорируется, так как implements работает только как комментарий", en: "The interface is ignored because implements only acts as a comment", ka: "ინტერფეისი დააიგნორდება, რადგან implements მუშაობს მხოლოდ როგორც კომენტარი" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово `implements` обязывает класс строго соответствовать контракту интерфейса. Если класс не реализует объявленный в интерфейсе метод или свойство, TS выдаст статическую ошибку.",
            en: "The `implements` keyword enforces that a class satisfies the structural contract of an interface. Missing any required method or property triggers a compiler error.",
            ka: "საკვანძო სიტყვა `implements` ავალდებულებს კლასს მკაცრად შეესაბამებოდეს ინტერფეისის კონტრაქტს. თუ კლასი არ ახდენს ინტერფეისში გამოცხადებული მეთოდის ან თვისების რეალიზებას, TS გამოიტანს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses",
        docLabel: "Implements Clauses — Handbook"
    },

    {
        id: 26,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Почему TypeScript выдает ошибку при прямом присвоении литерала объекта, содержащего лишнее поле 'age'?",
            en: "Why does TypeScript throw an error on a direct object literal assignment containing an excess 'age' field?",
            ka: "რატომ გამოაქვს TypeScript-ს შეცდომა ზედმეტი 'age' ველის მქონე ობიექტის ლიტერალის პირდაპირი მინიჭებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">User</span> { name: <span class="type">string</span>; }
<span class="kw">const</span> person: <span class="type">User</span> = { name: <span class="str">"Alice"</span>, age: <span class="num">25</span> };`,
        options: [
            { ru: "Потому что типы name и age несовместимы", en: "Because the types of name and age are incompatible", ka: "იმიტომ, რომ name და age ტიპები შეუთავსებელია" },
            { ru: "Включается проверка избыточных свойств (Excess Property Checking) для объектных литералов", en: "Excess Property Checking is triggered for raw object literals", ka: "ობიექტის ლიტერალებისთვის ირთვება ზედმეტი თვისებების შემოწმება (Excess Property Checking)" },
            { ru: "В интерфейсах запрещено использовать строковые значения", en: "Interfaces forbid the use of string values", ka: "ინტერფეისებში აკრძალულია სტრიქონული მნიშვნელობების გამოყენება" },
            { ru: "Ошибки нет, код полностью валиден", en: "There is no error, the code is fully valid", ka: "შეცდომა არ არის, კოდი სრულიად ვალიდურია" }
        ],
        correct: 1,
        explanation: {
            ru: "При проверке типов TS применяет 'Excess Property Checking' к свежим литералам объектов, если они присваиваются напрямую переменной или передаются аргументом. Это защищает от опечаток в именах свойств.",
            en: "TypeScript triggers 'Excess Property Checking' when an object literal is assigned directly to a typed variable or passed as an argument, helping catch typos in property names.",
            ka: "ტიპების შემოწმებისას TS იყენებს 'Excess Property Checking'-ს ახალი ობიექტის ლიტერალების მიმართ, თუ ისინი პირდაპირ ენიჭებათ ცვლადს. ეს გვიცავს თვისებების სახელებში შეცდომებისგან (ოпечаტკებისგან)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks",
        docLabel: "Excess Property Checks — Handbook"
    },

    {
        id: 27,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Скомпилируется ли этот код без ошибок при использовании промежуточной переменной 'temp'?",
            en: "Will this code compile without errors when using an intermediate 'temp' variable?",
            ka: "დაკომპილირდება თუ არა ეს კოდი შეცდომების გარეშე შუალედური 'temp' ცვლადის გამოყენებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">User</span> { name: <span class="type">string</span>; }
<span class="kw">const</span> temp = { name: <span class="str">"Alice"</span>, age: <span class="num">25</span> };
<span class="kw">const</span> person: <span class="type">User</span> = temp;`,
        options: [
            { ru: "Нет, ошибка компиляции останется", en: "No, the compilation error persists", ka: "არა, კომპილაციის შეცდომა დარჩება" },
            { ru: "Да, так как проверка избыточных свойств не срабатывает при косвенном присвоении", en: "Yes, because excess property checking is bypassed during indirect assignment", ka: "დიახ, რადგან ზედმეტი თვისებების შემოწმება არ მუშაობს არაპირდაპირი მინიჭებისას" },
            { ru: "Нет, упадет в рантайме", en: "No, it will crash at runtime", ka: "არა, გაშვებისას (runtime) გაფუჭდება" },
            { ru: "Да, но свойство age удалится из объекта автоматически", en: "Yes, but the age property will be stripped automatically", ka: "დიახ, მაგრამ age თვისება ავტომატურად წაიშლება ობიექტიდან" }
        ],
        correct: 1,
        explanation: {
            ru: "Проверка избыточных свойств отключается, если объект присваивается сначала промежуточной переменной `temp`. Поскольку у `temp` есть свойство `name` (структурная совместимость соблюдена), присвоение разрешено.",
            en: "Excess property checking is bypassed if the object is passed through an intermediate reference variable. Since `temp` satisfies the structural requirements of `User`, the assignment is clean.",
            ka: "ზედმეტი თვისებების შემოწმება ითიშება, თუ ობიექტი ჯერ მიენიჭება შუალედურ `temp` ცვლადს. ვინაიდან `temp`-ს აქვს `name` თვისება (სტრუქტურული თავსებადობა დაცულია), მინიჭება ნებადართულია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks",
        docLabel: "Bypassing Property Checks — Handbook"
    },

    {
        id: 28,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Можно ли в TypeScript наследовать один интерфейс от нескольких других одновременно?",
            en: "Can an interface in TypeScript extend multiple other interfaces at the same time?",
            ka: "შესაძლებელია თუ არა TypeScript-ში ერთი ინტერფეისის რამდენიმე სხვა ინტერფეისისგან ერთდროულად მემკვიდრეობითობა?"
        },
        code: `<span class="kw">interface</span> <span class="type">CanWalk</span> { walk(): <span class="type">void</span>; }
<span class="kw">interface</span> <span class="type">CanSwim</span> { swim(): <span class="type">void</span>; }
<span class="kw">interface</span> <span class="type">Amphibian</span> <span class="kw">extends</span> <span class="type">CanWalk</span>, <span class="type">CanSwim</span> {}`,
        options: [
            { ru: "Нет, разрешено наследование только от одного интерфейса", en: "No, an interface can only extend one other interface", ka: "არა, ნებადართულია მემკვიდრეობითობა მხოლოდ ერთი ინტერფეისისგან" },
            { ru: "Да, через запятую можно указать сколько угодно родительских интерфейсов", en: "Yes, you can list as many parent interfaces as you want separated by commas", ka: "დიახ, მძიმით გამოყოფით შეგიძლიათ მიუთითოთ რამდენი მშობელი ინტერფეისიც გსურთ" },
            { ru: "Да, но только если они не содержат методов", en: "Yes, but only if they do not contain any methods", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ისინი არ შეიცავენ მეთოდებს" },
            { ru: "Нет, множественное наследование заменено пересечениями (&)", en: "No, multiple inheritance is superseded by intersection types (&)", ka: "არა, მრავალჯერადი მემკვიდრეობითობა ჩანაცვლებულია გადაკვეთებით (&)" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от классов во многих языках программирования, интерфейсы в TypeScript поддерживают полноценное множественное наследование через ключевое слово `extends` и перечисление родителей через запятую.",
            en: "Unlike classes in many OOP languages, interfaces in TypeScript can extend multiple interfaces simultaneously. You simply list the target interfaces in a comma-separated list.",
            ka: "ბევრ პროგრამირების ენაში არსებული კლასებისგან განსხვავებით, ინტერფეისები TypeScript-ში მხარს უჭერენ სრულფასოვან მრავალჯერად მემკვიდრეობითობას `extends` საკვანძო სიტყვისა და მშობლების მძიმით გამოყოფის მეშვეობით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types",
        docLabel: "Multiple Inheritance — Handbook"
    },

    {
        id: 29,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Что произойдет, если интерфейс попытается переопределить родительское свойство с несовместимым типом данных?",
            en: "What happens if an interface attempts to override a parent property with an incompatible data type?",
            ka: "რა მოხდება, თუ ინტერფეისი შეეცდება მშობლის თვისების გადაფარვას შეუთავსებელი მონაცემთა ტიპით?"
        },
        code: `<span class="kw">interface</span> <span class="type">A</span> { id: <span class="type">string</span>; }
<span class="kw">interface</span> <span class="type">B</span> <span class="kw">extends</span> <span class="type">A</span> { id: <span class="type">number</span>; }`,
        options: [
            { ru: "Свойство id автоматически станет типом string | number", en: "The id property automatically becomes string | number", ka: "id თვისება ავტომატურად გახდება string | number ტიპის" },
            { ru: "Ошибка компиляции: Interface 'B' incorrectly extends interface 'A'", en: "Compile error: Interface 'B' incorrectly extends interface 'A'", ka: "კომპილაციის შეცდომა: Interface 'B' incorrectly extends interface 'A'" },
            { ru: "Тип из дочернего интерфейса (number) полностью заменит родительский тип", en: "The child interface type (number) overrides the parent type completely", ka: "შვილის ინტერფეისის ტიპი (number) მთლიანად ჩაანაცვლებს მშობლის ტიპს" },
            { ru: "Свойство id примет специальный тип never", en: "The id property evaluates to type never", ka: "id თვისება მიიღებს სპეციალურ never ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "При наследовании интерфейсов дочерний интерфейс может уточнять типы свойств, но только если они совместимы с родительскими. Попытка заменить `string` на `number` вызовет ошибку компиляции.",
            en: "When extending interfaces, the child interface can only override properties if the new type is assignable to/compatible with the parent's property. Overriding `string` with `number` triggers an error.",
            ka: "ინტერფეისების მემკვიდრეობითობისას შვილობილ ინტერფეისს შეუძლია დააზუსტოს თვისებების ტიპები, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ისინი თავსებადია მშობლის ტიპებთან. `string`- ის შეცვლის მცდელობა `number`-ით გამოიწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types",
        docLabel: "Overriding Properties — Handbook"
    },

    {
        id: 30,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Запретит ли TypeScript мутацию самого массива (например, метод .push()), если свойство помечено как readonly?",
            en: "Will TypeScript block array mutation (e.g., calling .push()) if the array property itself is marked as readonly?",
            ka: "აკრძალავს თუ არა TypeScript თავად მასივის მუტაციას (მაგალითად, .push() მეთოდს), თუ თვისება მონიშნულია როგორც readonly?"
        },
        code: `<span class="kw">interface</span> <span class="type">Data</span> {
  <span class="kw">readonly</span> list: <span class="type">number</span>[];
}
<span class="kw">const</span> obj: <span class="type">Data</span> = { list: [<span class="num">1</span>, <span class="num">2</span>] };
obj.list.<span class="fn">push</span>(<span class="num">3</span>);`,
        options: [
            { ru: "Да, будет вызвана ошибка компиляции", en: "Yes, it will cause a compilation error", ka: "დიახ, გამოიწვევს კომპილაციის შეცდომას" },
            { ru: "Нет, ошибка возникнет только если перезаписать свойство obj.list = [...]", en: "No, an error only shows up if you reassign the property obj.list = [...]", ka: "არა, შეცდომა გამოჩნდება მხოლოდ იმ შემთხვევაში, თუ თავად თვისებას გადავწერთ: obj.list = [...]" },
            { ru: "Мутация массива вызовет ошибку во время выполнения (Runtime)", en: "Array mutation triggers a runtime crash", ka: "მასივის მუტაცია გამოიწვევს შეცდომას გაშვებისას (Runtime)" },
            { ru: "Метод push автоматически замораживается компилятором", en: "The push method is frozen automatically by the compiler", ka: "push მეთოდი ავტომატურად იყინება კომპილატორის მიერ" }
        ],
        correct: 1,
        explanation: {
            ru: "`readonly` на свойстве объекта делает защищенной от записи только саму ссылку на массив. Содержимое массива менять можно. Чтобы запретить мутацию элементов, тип должен быть объявлен как `readonly number[]` или `ReadonlyArray<number>`.",
            en: "Marking an object property as `readonly` only guards the reference itself from reassignment. The array itself remains mutable. To protect the array items, use `readonly number[]` or `ReadonlyArray<number>`.",
            ka: "ობიექტის თვისებაზე `readonly` იცავს მხოლოდ თავად მასივის რეფერენსს (ბმულს) გადაწერისგან. მასივის შიგთავსის შეცვლა კი შესაძლებელია. ელემენტების მუტაციის ასაკრძალად ტიპი უნდა გამოცხადდეს როგორც `readonly number[]`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties",
        docLabel: "Readonly Array Properties — Handbook"
    },

    {
        id: 31,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какое ключевое слово используется внутри интерфейса для описания сигнатуры конструктора класса (создание через new)?",
            en: "What keyword is used inside an interface to specify a class construct signature (creation via new)?",
            ka: "რა საკვანძო სიტყვა გამოიყენება ინტერფеისის შიგნით კლასის კონსტრუქტორის სიგნატურის აღსაწერად (new-ით შექმნა)?"
        },
        code: `<span class="kw">interface</span> <span class="type">ClockConstructor</span> {
  <span class="kw">...</span> (hour: <span class="type">number</span>, minute: <span class="type">number</span>);
}`,
        options: [
            { ru: "constructor", en: "constructor", ka: "constructor" },
            { ru: "new", en: "new", ka: "new" },
            { ru: "create", en: "create", ka: "create" },
            { ru: "init", en: "init", ka: "init" }
        ],
        correct: 1,
        explanation: {
            ru: "Для описания конструкторов (функций, которые можно вызвать через оператор `new`), используется ключевое слово `new` в начале сигнатуры интерфейса.",
            en: "To describe a constructor function (something that can be instantiated using the `new` operator), you use the `new` keyword at the beginning of the interface signature.",
            ka: "კონსტრუქტორების აღსაწერად (ფუნქციები, რომელთა გამოძახებაც შესაძლებელია `new` ოპერატორით), გამოიყენება საკვანძო სიტყვა `new` ინტერფეისის სიგნატურის დასაწყისში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures",
        docLabel: "Construct Signatures — Handbook"
    },

    {
        id: 32,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Может ли интерфейс наследоваться (extends) от обычного типа-алиаса (type alias)?",
            en: "Can an interface extend a standard type alias?",
            ka: "შეიძლება თუ არა ინტერფეისმა მიიღოს მემკვიდრეობითობა (extends) ჩვეულებრივი ტიპის ალიასისგან (type alias)?"
        },
        code: `<span class="kw">type</span> PartialUser = { id: <span class="type">number</span> };
<span class="kw">interface</span> <span class="type">FullUser</span> <span class="kw">extends</span> <span class="type">PartialUser</span> { name: <span class="type">string</span>; }`,
        options: [
            { ru: "Нет, интерфейсы наследуются только от других интерфейсов", en: "No, interfaces can only extend other interfaces", ka: "არა, ინტერფეისები მემკვიდრეობითობას იღებენ მხოლოდ სხვა ინტერფეისებისგან" },
            { ru: "Да, если тип-алиас описывает объектную структуру или статически известный тип", en: "Yes, provided that the type alias defines an object structure or a statically known type shape", ka: "დიახ, თუ ტიპის ალიასი აღწერს ობიექტის სტრუქტურას ან სტატიკურად ცნობილ ფორმას" },
            { ru: "Да, но только если у типа нет обязательных свойств", en: "Yes, but only if the type has no required fields", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ტიპს არ აქვს სავალдებულო ველები" },
            { ru: "Нет, это вызовет ошибку дублирования идентификатора", en: "No, it triggers a duplicate identifier runtime crash", ka: "არა, ეს გამოიწვევს იდენტიფიკატორის დუბლირების შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript интерфейс может свободно наследоваться от типа-алиаса через `extends`, если этот тип описывает объектную форму или пересечение объектов. Однако интерфейс не может расширить динамический или неявный Union-тип.",
            en: "An interface can extend an object-based type alias or intersection of types via `extends`. However, an interface cannot extend a dynamic union type description.",
            ka: "TypeScript-ში ინტერფეისს თავისუფლად შეუძლია მიიღოს მემკვიდრეობითობა ტიპის ალიასისგან `extends`- ის საშუალებით, თუ ეს ტიპი აღწერს ობიექტურ სტრუქტურას. თუმცა ინტერფეისი ვერ გააფართოებს Union ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",
        docLabel: "Extending Type Aliases — Handbook"
    },

    {
        id: 33,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერфეისები" },
        tag: "interfaces",
        question: {
            ru: "Что произойдет при слиянии деклараций (Declaration Merging), если два одноименных интерфейса содержат свойство с одинаковым именем, но разными типами?",
            en: "What occurs during declaration merging if two identical interfaces contain properties with the same name but different types?",
            ka: "რა მოხდება დეკლარაციების შერწყმისას (Declaration Merging), თუ ორი ერთნაირი სახელის მქონე ინტერფეისი შეიცავს ერთსა და იმავე თვისებას სხვადასხვა ტიპით?"
        },
        code: `<span class="kw">interface</span> <span class="type">Item</span> { val: <span class="type">string</span>; }
<span class="kw">interface</span> <span class="type">Item</span> { val: <span class="type">number</span>; }`,
        options: [
            { ru: "Свойство val автоматически получит тип string | number", en: "The val property automatically receives the type string | number", ka: "val თვისება ავტომატურად მიიღებს string | number ტიპს" },
            { ru: "Второй тип полностью перепишет первый", en: "The second type completely overrides the first design", ka: "მეორე ტიპი მთლიანად გადაწერს პირველს" },
            { ru: "Ошибка компиляции: Subsequent property declarations must have the same type", en: "Compile error: Subsequent property declarations must have the same type", ka: "კომპილაციის შეცდომა: Subsequent property declarations must have the same type" },
            { ru: "Свойство val превратится в тип never", en: "The val property evaluates into a never type assignment", ka: "val თვისება გადაიქცევა never ტიპად" }
        ],
        correct: 2,
        explanation: {
            ru: "При слиянии деклараций (Declaration Merging) свойства не-функциональных типов должны быть строго уникальными или иметь идентичный тип. Несовпадающие типы вызывают ошибку компиляции.",
            en: "When merging identical interfaces, non-function properties must have the exact same type. Having conflicting types for the same property name causes a compilation error.",
            ka: "დეკლარაციების შერწყმისას (Declaration Merging) არაფუნქციური თვისებები უნდა იყოს მკაცრად იდენტური ტიპის. შეუსაბამო ტიპები იწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces",
        docLabel: "Merging Interfaces — Handbook"
    },

    {
        id: 34,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Как TypeScript обработает слияние одинаковых методов с разными сигнатурами при Declaration Merging?",
            en: "How does TypeScript process merging identical method names with different signatures during Declaration Merging?",
            ka: "როგორ ამუშავებს TypeScript ერთნაირი მეთოდების სხვადასხვა სიგნატურების შერწყმას Declaration Merging-ის დროს?"
        },
        code: `<span class="kw">interface</span> <span class="type">Logger</span> { log(msg: <span class="type">string</span>): <span class="type">void</span>; }
<span class="kw">interface</span> <span class="type">Logger</span> { log(id: <span class="type">number</span>): <span class="type">void</span>; }`,
        options: [
            { ru: "Вызовет ошибку дублирования метода", en: "Triggers a duplicate method compile error", ka: "გამოიწვევს მეთოდის დუბლირების შეცდომას" },
            { ru: "Методы объединяются как перегрузки (Overloads) одной и той же функции", en: "The methods are merged together as overloads of the same function", ka: "მეთოდები გაერთიანდება როგორც ერთი და იმავე ფუნქციის გადატვირთვები (Overloads)" },
            { ru: "Второй метод сотрет первый", en: "The second declaration overwrites the first method context", ka: "მეორე მეთოდი წაშლის პირველს" },
            { ru: "Интерфейс Logger расколется на Logger_1 и Logger_2", en: "The Logger interface splits apart into Logger_1 and Logger_2", ka: "Logger ინტერფეისი გაიყოფა Logger_1 და Logger_2-ად" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от обычных свойств, одинаковые методы при слиянии интерфейсов трактуются как перегрузки (Overloads). Функция `log` сможет безопасно принимать и строку, и число.",
            en: "Unlike traditional properties, method members sharing identical names in merged interfaces act as function overloads, allowing the resulting method to handle multiple invocation variants safely.",
            ka: "ჩვეულებრივი თვისებებისგან განსხვავებით, ერთნაირი მეთოდები ინტერფეისების შერწყმისას განიხილება როგორც გადატვირთვები (Overloads). `log` ფუნქციას შეეძლება უსაფრთხოდ მიიღოს როგორც სტრიქონი, ასევე რიცხვი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces",
        docLabel: "Method Overloads Merging — Handbook"
    },

    {
        id: 35,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Скомпилируется ли этот код, учитывая, что объект 'ball' явно не объявлял реализацию интерфейса Named?",
            en: "Will this code compile successfully, given that the 'ball' object does not explicitly implement the Named interface?",
            ka: "დაკომпილირდება თუ არა ეს კოდი იმის გათვალისწინებით, რომ 'ball' ობიექტს აშკარად არ გამოუცხადებია Named ინტერფეისის რეალიზაცია?"
        },
        code: `<span class="kw">interface</span> <span class="type">Named</span> { name: <span class="type">string</span>; }
<span class="kw">function</span> <span class="fn">sayName</span>(obj: <span class="type">Named</span>) { console.<span class="fn">log</span>(obj.name); }

<span class="kw">const</span> ball = { name: <span class="str">"Basketball"</span>, radius: <span class="num">10</span> };
<span class="fn">sayName</span>(ball);`,
        options: [
            { ru: "Нет, ошибка: ball не реализует интерфейс Named через implements", en: "No, error: ball does not inherit from Named via an implements clause", ka: "არა, შეცდომა: ball არ ახდენს Named ინტერფეისის რეალიზებას implements-ით" },
            { ru: "Да, так как TypeScript использует структурную типизацию (совпадение по форме)", en: "Yes, because TypeScript uses structural typing (shape-matching checks)", ka: "დიახ, რადგან TypeScript იყენებს სტრუქტურულ ტიპიზაციას (ფორმების დამთხვევას)" },
            { ru: "Нет, так как у объекта ball есть лишнее свойство radius", en: "No, because the ball object contains an excess radius property", ka: "არა, რადგან ball ობიექტს აქვს ზედმეტი თვისება radius" },
            { ru: "Да, но в функции sayName свойство radius превратится в undefined", en: "Yes, but inside sayName, the radius property converts into undefined", ka: "დიახ, მაგრამ sayName ფუნქციაში radius თვისება გადაიქცევა undefined-ად" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript работает на основе структурной типизации («утиная типизация»). Поскольку объект `ball` имеет свойство `name: string`, он удовлетворяет требованиям интерфейса `Named`. Наличие свойства `radius` проверку не ломает (так как это косвенное присвоение через переменную).",
            en: "TypeScript uses structural typing ('duck typing'). Since the `ball` object contains a `name` property of type `string`, it satisfies the structure required by `Named`. Extra properties do not violate the contract here.",
            ka: "TypeScript მუშაობს სტრუქტურული ტიპიზაციის საფუძველზე («duck typing»). ვინაიდან `ball` ობიექტს აქვს თვისება `name: string`, ის აკმაყოფილებს `Named` ინტერფეისის მოთხოვნებს. `radius` თვისების არსებობა ხელს არ უშლის შემოწმებას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html",
        docLabel: "Type Compatibility — Handbook"
    },

    {
        id: 36,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Что можно присвоить переменной, тип которой объявлен как пустой интерфейс?",
            en: "What values can be assigned to a variable typed as an empty interface?",
            ka: "რა შეიძლება მიენიჭოს ცვლადს, რომლის ტიპიც გამოცხადებულია როგორც ცარიელი ინტერფეისი?"
        },
        code: `<span class="kw">interface</span> <span class="type">Empty</span> {}
<span class="kw">let</span> item: <span class="type">Empty</span>;`,
        options: [
            { ru: "Только абсолютно пустой объект {}", en: "Only an absolutely empty object literal {}", ka: "მხოლოდ აბსოლუტურად ცარიელი ობიექტი {}" },
            { ru: "Любое значение, кроме null и undefined", en: "Any value except null and undefined", ka: "ნებისმიერი მნიშვნელობა, გარდა null-ისა და undefined-ისა" },
            { ru: "Вообще любое значение, включая null и undefined", en: "Absolutely any value, including null and undefined", ka: "საერთოდ ნებისმიერი მნიშვნელობა, null-ისა და undefined-ის ჩათვლით" },
            { ru: "Ничего, этот интерфейс эквивалентен типу never", en: "Nothing, this interface is effectively evaluated as a never type", ka: "არაფერი, ეს ინტერფეისი ეკვივალენტურია never ტიპის" }
        ],
        correct: 1,
        explanation: {
            ru: "Пустой интерфейс `Empty` ведет себя так же, как глобальный тип `Object`. Ему можно присвоить любое значение (строки, числа, объекты), у которого есть какие-либо свойства JavaScript. Исключениями являются только `null` и `undefined`.",
            en: "An empty interface behaves similarly to the global `Object` type. Any value that can be indexed or boxed into an object (strings, numbers, objects) fits, excluding only `null` and `undefined`.",
            ka: "ცარიელი ინტერფეისი იქცევა ისევე, როგორც გლობალური `Object` ტიპი. მას შეიძლება მიენიჭოს ნებისმიერი მნიშვნელობა (სტრიქონები, რიცხვები, ობიექტები), რომლებსაც აქვთ რაიმე თვისება. გამონაკლისია მხოლოდ `null` და `undefined`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types",
        docLabel: "Empty Objects — Handbook"
    },

    {
        id: 37,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერфეისები" },
        tag: "interfaces",
        question: {
            ru: "Что происходит, когда интерфейс наследует (extends) структуру класса?",
            en: "What happens when an interface extends a class definition?",
            ka: "რა ხდება, როდესაც ინტერფეისი იღებს მემკვიდრეობითობას (extends) კლასის სტრუქტურისგან?"
        },
        code: `<span class="kw">class</span> <span class="type">Control</span> { <span class="kw">private</span> state: <span class="type">any</span>; }
<span class="kw">interface</span> <span class="type">SelectableControl</span> <span class="kw">extends</span> <span class="type">Control</span> { select(): <span class="type">void</span>; }`,
        options: [
            { ru: "Интерфейс копирует только публичные методы класса", en: "The interface only copies the public methods of the class", ka: "ინტერფეისი აკოპირებს მხოლოდ კლასის საჯარო (public) მეთოდებს" },
            { ru: "Интерфейс копирует всю структуру класса, включая приватные (private) и защищенные поля", en: "The interface copies the entire structural layout of the class, including private and protected fields", ka: "ინტერფეისი აკოპირებს კლასის მთელ სტრუქტურას, მათ შორის პრივატულ (private) და დაცულ (protected) ველებს" },
            { ru: "Произойдет ошибка: интерфейсы не могут наследоваться от классов", en: "A compile error occurs: interfaces cannot extend classes", ka: "მოხდება შეცდომა: ინტერფეისები ვერ მიიღებენ მემკვიდრეობითობას კლასებისგან" },
            { ru: "Класс Control автоматически превращается в интерфейс", en: "The Control class gets automatically transformed into an interface shape", ka: "Control კლასი ავტომატურად გადაიქცევა ინტერფეისად" }
        ],
        correct: 1,
        explanation: {
            ru: "Специфическая особенность TS: интерфейс может расширять класс. При этом он копирует даже `private` и `protected` поля. Такой интерфейс может быть реализован (`implements`) только этим классом или его прямыми потомками.",
            en: "A distinct feature of TS: interfaces can extend classes. When they do, they pull in all public, private, and protected members. Such an interface can only be implemented by that class or its subclasses.",
            ka: "TS-ის სპეციფიკური თვისება: ინტერფეისს შეუძლია გააფართოოს კლასი. ამ დროს ის აკოპირებს `private` და `protected` ველებსაც კი. ასეთი ინტერფეისის იმპლემენტაცია შეიძლება მოხდეს მხოლოდ ამ კლასის ან მისი შვილების მიერ."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#intersections-between-modules",
        docLabel: "Interfaces Extending Classes — Handbook"
    },

    {
        id: 38,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какую структуру описывает данный интерфейс StringArray?",
            en: "What design pattern does this StringArray interface describe?",
            ka: "რა სახის სტრუქტურას აღწერს მოცემული StringArray ინტერფეისი?"
        },
        code: `<span class="kw">interface</span> <span class="type">StringArray</span> {
  [index: <span class="type">number</span>]: <span class="type">string</span>;
}`,
        options: [
            { ru: "Объект, у которого ключами могут быть только строки", en: "An object whose keys can only be string descriptions", ka: "ობიექტს, რომლის გასაღებებიც შეიძლება იყოს მხოლოდ სტრიქონები" },
            { ru: "Индексируемый тип, соответствующий массиву строк, где ключ — числовой индекс", en: "An indexable type representing an array of strings accessed via numeric indexes", ka: "ინდექსირებად ტიპს, რომელიც შეესაბამება სტრიქონების მასივს, სადაც გასაღები რიცხვითი ინდექსია" },
            { ru: "Двумерный массив данных", en: "A multi-dimensional array grid setup", ka: "ორგანზომილებიან მონაცემთა მასივს" },
            { ru: "Функцию, возвращающую массив строк", en: "A function designed to return an array of strings", ka: "ფუნქციას, რომელიც აბრუნებს სტრიქონების მასივს" }
        ],
        correct: 1,
        explanation: {
            ru: "Интерфейсы с индексной сигнатурой `[index: number]: string` описывают структуры данных, в которые можно передавать числовой индекс для получения строки (массивы или подобные им объекты).",
            en: "Interfaces containing an index signature like `[index: number]: string` define indexable layouts where indexing the item with a number returns a string, matching array behaviors.",
            ka: "ინტერფეისები ინდექსური სიგნატურით `[index: number]: string` აღწერენ მონაცემთა სტრუქტურებს, სადაც რიცხვითი ინდექსის გადაცემით მიიღება სტრიქონი (მასივები ან მათი მსგავსი ობიექტები)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
        docLabel: "Indexable Types — Handbook"
    },
    {
        id: 39,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Какую структуру описывает данный интерфейс Counter?",
            en: "What kind of structure does this Counter interface describe?",
            ka: "რა სახის სტრუქტურას აღწერს მოცემული Counter ინტერფეისი?"
        },
        code: `<span class="kw">interface</span> <span class="type">Counter</span> {
  (start: <span class="type">number</span>): <span class="type">string</span>;
  interval: <span class="type">number</span>;
  <span class="fn">reset</span>(): <span class="type">void</span>;
}`,
        options: [
            { ru: "Обычный класс с конструктором", en: "A standard class with a constructor", ka: "ჩვეულებრივ კლასს კონსტრუქტორით" },
            { ru: "Гибридный тип: функцию, которая одновременно ведет себя как объект со свойствами и методами", en: "A hybrid type: a function that simultaneously acts as an object with properties and methods", ka: "ჰიბრიდულ ტიპს: ფუნქციას, რომელიც ერთდროულად იქცევა როგორც ობიექტი თვისებებითა და მეთოდებით" },
            { ru: "Массив, содержащий функции и числа", en: "An array containing functions and numbers", ka: "მასივს, რომელიც შეიცავს ფუნქციებსა და რიცხვებს" },
            { ru: "Данный синтаксис вызовет ошибку компиляции", en: "This syntax will cause a compilation error", ka: "მოცემული სინტაქსი გამოიწვევს კომპილაციის შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "В JavaScript функции являются объектами и могут иметь собственные свойства. TypeScript позволяет описывать такие паттерны через гибридные интерфейсы (Hybrid Types), где в одном месте сочетаются сигнатура вызова функции и свойства обычного объекта.",
            en: "In JavaScript, functions are first-class objects and can hold their own custom properties. TypeScript allows modeling these runtime patterns using Hybrid Interfaces, combining callable signatures with traditional object properties.",
            ka: "JavaScript-ში ფუნქციები ობიექტებია და შეიძლება ჰქონდეთ თავიანთი თვისებები. TS საშუალებას იძლევა აღვწეროთ ასეთი პატერნები ჰიბრიდული ინტერფეისების (Hybrid Types) მეშვეობით, სადაც ერთად არის შერწყმული ფუნქციის გამოძახების სიგნატურა და ობიექტის თვისებები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function",
        docLabel: "Hybrid Types — Handbook"
    },

    {
        id: 40,
        category: { ru: "Интерфейсы", en: "Interfaces", ka: "ინტერფეისები" },
        tag: "interfaces",
        question: {
            ru: "Можно ли в интерфейсе явно указать ключевые слова get или set для свойств?",
            en: "Can you explicitly use get or set keywords for properties inside an interface?",
            ka: "შესაძლებელია თუ არა ინტერფეისში თვისებებისთვის get ან set საკვანძო სიტყვების მკაფიოდ მითითება?"
        },
        code: `<span class="kw">interface</span> <span class="type">Person</span> {
  <span class="kw">get</span> fullName(): <span class="type">string</span>;
}`,
        options: [
            { ru: "Да, это валидный синтаксис для описания геттеров", en: "Yes, this is valid syntax for describing getters", ka: "დიახ, ეს ვალიდური სინტაქსია გეტერების აღსაწერად" },
            { ru: "Нет, интерфейсы описывают только форму данных; ключевые слова get/set там запрещены", en: "No, interfaces only describe the shape of data; get/set keywords are strictly forbidden there", ka: "არა, ინტერფეისები აღწერენ მხოლოდ მონაცემთა ფორმას; get/set საკვანძო სიტყვები იქ აკრძალულია" },
            { ru: "Можно использовать get, но нельзя использовать set", en: "You can use get, but you cannot use set", ka: "get-ის გამოყენება შეიძლება, მაგრამ set-ის არა" },
            { ru: "get/set можно использовать только если интерфейс расширяет класс", en: "get/set can only be used if the interface extends a class", ka: "get/set-ის გამოყენება შეიძლება მხოლოდ იმ შემთხვევაში, თუ ინტერფეისი აფართოებს კლასს" }
        ],
        correct: 1,
        explanation: {
            ru: "Интерфейсы в TypeScript описывают внешнюю структуру (контракт) объекта, но не детали его реализации. Ключевые слова `get` и `set` запрещены в интерфейсах. Геттер описывается как обычное свойство `fullName: string`, а то, как оно реализовано (через свойство или геттер), решает сам объект или класс.",
            en: "Interfaces in TypeScript describe the public contract and shape of an object, not its internal implementation details. Modifiers like `get` and `set` are forbidden inside interfaces. A getter is simply typed as a regular property `fullName: string`.",
            ka: "TS-ში ინტერფეისები აღწერენ ობიექტის გარე სტრუქტურას (კონტრაქტს), მაგრამ არა მისი რეალიზაციის დეტალებს. `get` და `set` საკვანძო სიტყვები აკრძალულია ინტერფეისებში. გეტერი აღიწერება როგორც ჩვეულებრივი თვისება `fullName: string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#object-types",
        docLabel: "Property Signatures — Handbook"
    },

    // 3. ДЖЕНЕРИКИ
    {
        id: 41,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какое ограничение накладывает конструкция K extends keyof T в функции getProperty?",
            en: "What constraint does the K extends keyof T construct enforce in the getProperty function?",
            ka: "რა შეზღუდვას აწესებს კონსტრუქცია K extends keyof T getProperty ფუნქციაში?"
        },
        code: `<span class="kw">function</span> <span class="fn">getProperty</span>&lt;<span class="type">T</span>, <span class="type">K</span> <span class="kw">extends</span> <span class="kw">keyof</span> <span class="type">T</span>&gt;(obj: <span class="type">T</span>, key: <span class="type">K</span>) {
  <span class="kw">return</span> obj[key];
}`,
        options: [
            { ru: "K должен быть строковым литералом, равным 'keyof'", en: "K must be a string literal equal to 'keyof'", ka: "K უნდა იყოს სტრიქონული ლიტერალი, რომელიც უდრის 'keyof'-ს" },
            { ru: "K может быть любым свойством, гарантированно существующим в объекте T", en: "K must strictly be a key that is guaranteed to exist on object T", ka: "K შეიძლება იყოს ნებისმიერი თვისება, რომელიც გარანტირებულად არსებობს T ობიექტში" },
            { ru: "T должен быть массивом, а K — его числовым индексом", en: "T must be an array, and K must be its numeric index", ka: "T უნდა იყოს მასივი, ხოლო K — მისი რიცხვითი ინდექსი" },
            { ru: "Конструкция преобразует все ключи объекта T в тип K", en: "The construct transforms all keys of object T into type K", ka: "კონსტრუქცია გარდაქმნის T ობიექტის ყველა გასაღებს K ტიპად" }
        ],
        correct: 1,
        explanation: {
            ru: "Использование `K extends keyof T` гарантирует, что компилятор выдаст ошибку, если в функцию будет передан ключ, которого нет в структуре объекта `T`. Это обеспечивает полную безопасность при динамическом доступе к свойствам.",
            en: "Using `K extends keyof T` ensures the compiler will flag an error if you pass a key parameter that does not actually exist on the object `T`. This delivers absolute type safety for dynamic property lookups.",
            ka: "`K extends keyof T`-ს გამოყენება უზრუნველყოფს, რომ კომპილატორი გამოიტანს შეცდომას, თუ ფუნქციას გადაეცემა გასაღები, რომელიც არ არსებობს `T` ობიექტის სტრუქტურაში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints",
        docLabel: "Using Type Parameters in Generic Constraints — Handbook"
    },

    {
        id: 42,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Каким образом необходимо указывать тип данных при использовании дженерик-интерфейса Box?",
            en: "How must the data type be specified when using the generic Box interface?",
            ka: "როგორ უნდა მიეთითოს მონაცემთა ტიპი Box ჯენერიკ-ინტერფეისის გამოყენებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">Box</span>&lt;<span class="type">T</span>&gt; { contents: <span class="type">T</span>; }
<span class="kw">const</span> stringBox: <span class="type">Box</span>&lt;<span class="type">string</span>&gt; = { contents: <span class="str">"Hello"</span> };`,
        options: [
            { ru: "Тип данных передается в угловых скобках <T> при объявлении переменной", en: "The type argument must be explicitly provided in angle brackets <T> during variable declaration", ka: "მონაცემთა ტიპი გადაეცემა კუთხოვან ფრჩხილებში <T> ცვლადის გამოცხადებისას" },
            { ru: "Тип выводится автоматически из названия переменной", en: "The type is automatically inferred from the variable name layout", ka: "ტიპი ავტომატურად განისაზღვრება ცვლადის სახელიდან" },
            { ru: "Интерфейсы не поддерживают передачу типов, код ошибочен", en: "Interfaces do not support type parameters; this code is invalid", ka: "ინტერფეისები არ უჭერენ მხარს ტიპების გადაცემას, კოდი მცდარია" },
            { ru: "Тип T всегда по умолчанию равен any", en: "The type T always defaults to any unconditionally", ka: "T ტიპი ნაგულისხმევად ყოველთვის any-ის ტოლია" }
        ],
        correct: 0,
        explanation: {
            ru: "В отличие от дженерик-функций, где тип часто выводится сам, при объявлении типов переменных с дженерик-интерфейсами разработчик должен явно передать тип-аргумент в угловых скобках.",
            en: "Unlike generic functions where type inference can guess the type, declaring variables with a generic interface requires you to pass the target type argument explicitly inside angle brackets.",
            ka: "ჯენერიკ-ფუნქციებისგან განსხვავებით, სადაც ტიპი ხშირად ავტომატურად განისაზღვრება, ჯენერიკ-ინტერფეისების მქონე ცვლადების გამოცხადებისას დეველოპერმა მკაფიოდ უნდა გადასცეს ტიპი კუთხოვან ფრჩხილებში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types",
        docLabel: "Generic Object Types — Handbook"
    },

    {
        id: 43,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какой тип примет свойство data, если не передать аргумент типа при инициализации объекта?",
            en: "What type will the data property resolve to if no type argument is explicitly provided?",
            ka: "რა ტიპს მიიღებს data თვისება, თუ ობიექტის ინიციალიზაციისას ტიპის არგუმენტს არ გადავცემთ?"
        },
        code: `<span class="kw">interface</span> <span class="type">Container</span>&lt;<span class="type">T</span> = <span class="type">string</span>&gt; { data: <span class="type">T</span>; }
<span class="kw">const</span> holder: <span class="type">Container</span> = { data: <span class="str">"test"</span> };`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "Будет вызвана ошибка компиляции", en: "It triggers an immediate compilation error", ka: "გამოიწვევს კომპილაციის შეცდომას" }
        ],
        correct: 2,
        explanation: {
            ru: "В TypeScript можно указывать дефолтные типы для параметров дженериков с помощью знака `=`. Если тип не передан явно и его невозможно вывести, применится дефолтный тип (в данном случае `string`).",
            en: "TypeScript lets you declare default type parameters using the `=` operator. If a type parameter is omitted and cannot be inferred, the default type (here, `string`) is substituted.",
            ka: "TypeScript-ში შესაძლებელია ჯენერიკების პარამეტრებისთვის ნაგულისხმევი ტიპების მითითება `=` ნიშნის დახმარებით. თუ ტიპი მკაფიოდ არ არის გადაცემული, გამოყენებული იქნება ნაგულისხმევი ტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults",
        docLabel: "Generic Parameter Defaults — Handbook"
    },

    {
        id: 44,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какая часть класса НЕ может использовать дженерик-параметры, объявленные на уровне класса?",
            en: "Which part of a class CANNOT use generic type parameters defined at the class level?",
            ka: "კლასის რომელ ნაწილს არ შეუძლია კლასის დონეზე გამოცხადებული ჯენერიკ-პარამეტრების გამოყენება?"
        },
        code: `<span class="kw">class</span> <span class="type">Box</span>&lt;<span class="type">T</span>&gt; {
  value: <span class="type">T</span>;
  <span class="kw">static</span> <span class="fn">log</span>(item: <span class="type">T</span>) {}
}`,
        options: [
            { ru: "Обычные свойства экземпляра класса (value)", en: "Instance properties of the class (value)", ka: "კლასის ეგზემპლარის ჩვეულებრივი თვისებები (value)" },
            { ru: "Статические члены класса (static)", en: "Static members of the class (static)", ka: "კლასის სტატიკური წევრები (static)" },
            { ru: "Методы экземпляра класса", en: "Instance methods of the class", ka: "კლასის ეგზემპლარის მეთოდები" },
            { ru: "Конструктор класса", en: "The class constructor", ka: "კლასის კონსტრუქტორი" }
        ],
        correct: 1,
        explanation: {
            ru: "Статические члены класса принадлежат самому классу, а не его экземплярам. Поскольку дженерик-тип `T` определяется в момент создания конкретного экземпляра через `new`, статические члены (`static`) не имеют к нему доступа.",
            en: "Static members belong to the class constructor function rather than class instances. Because the generic type `T` is specified upon instance allocation, static members cannot utilize it.",
            ka: "კლასის სტატიკური წევრები ეკუთვნის თავად კლასს და არა მის ეგზემპლარებს. ვინაიდან `T` ჯენერიკ-ტიპი განისაზღვრება კონკრეტული ეგზემპლარის შექმნის მომენტში, სტატიკურ წევრებს მასზე წვდომა არ აქვთ."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#generic-classes",
        docLabel: "Generic Classes — Handbook"
    },

    {
        id: 45,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Можно ли использовать несколько независимых параметров типов в одной дженерик-функции?",
            en: "Is it possible to use multiple independent type parameters in a single generic function?",
            ka: "შესაძლებელია თუ არა რამდენიმე დამოუკიდებელი ტიპის პარამეტრის გამოყენება ერთ ჯენერიკ-ფუნქციაში?"
        },
        code: `<span class="kw">function</span> <span class="fn">makePair</span>&lt;<span class="type">T</span>, <span class="type">U</span>&gt;(first: <span class="type">T</span>, second: <span class="type">U</span>) {
  <span class="kw">return</span> { first, second };
}`,
        options: [
            { ru: "Нет, дженерик принимает строго один параметр T", en: "No, a generic function can strictly accept exactly one parameter T", ka: "არა, ჯენერიკი იღებს მკაცრად ერთ T პარამეტრს" },
            { ru: "Да, параметры перечисляются через запятую в угловых скобках", en: "Yes, type parameters are provided as a comma-separated list inside angle brackets", ka: "დიახ, პარამეტრები მიეთითება მძიმით გამოყოფით კუთხოვან ფрჩხილებში" },
            { ru: "Да, но только если они имеют одинаковый базовый тип", en: "Yes, but only if they share an identical underlying base type constraint", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ მათ აქვთ ერთნაირი საბაზისო ტიპი" },
            { ru: "Нет, это приведет к ошибке дублирования типов", en: "No, this layout will trigger a duplicate type resolution error", ka: "არა, ეს გამოიწვევს ტიპების დუბლირების შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript дженерики могут принимать несколько параметров типов (например, `<T, U, V>`), что позволяет описывать сложные взаимосвязи между аргументами функции разных типов.",
            en: "Generic declarations can define multiple distinct type parameters simultaneously (e.g., `<T, U, V>`). This allows mapping type relationships across multiple disparate parameters.",
            ka: "TypeScript-ში ჯენერიკებს შეუძლიათ მიიღონ რამდენიმე ტიპის პარამეტრი (მაგალითად, `<T, U>`), რაც საშუალებას იძლევა აღვწეროთ სხვადასხვა ტიპის არგუმენტებს შორის რთული კავშირები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
        docLabel: "Multi-parameter Generics — Handbook"
    },

    {
        id: 46,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Каков правильный синтаксис объявления дженерика для стрелочной функции?",
            en: "What is the correct syntax to declare a generic type parameter on an arrow function?",
            ka: "როგორია ისრიანი ფუნქციისთვის (arrow function) ჯენერიკის გამოცხადების სწორი სინტაქსი?"
        },
        code: `<span class="kw">const</span> identity = &lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>): <span class="type">T</span> =&gt; arg;`,
        options: [
            { ru: "Параметр <T> ставится непосредственно перед круглыми скобками аргументов", en: "The <T> parameter is placed immediately before the argument parentheses", ka: "<T> პარამეტრი იწერება უშუალოდ არგუმენტების ფრჩხილების წინ" },
            { ru: "Параметр <T> ставится после знака =>", en: "The <T> parameter is appended following the => operator", ka: "<T> პარამეტრი იწერება => ნიშნის შემდეგ" },
            { ru: "Стрелочные функции не поддерживают дженерики", en: "Arrow functions do not support generic assignments in TypeScript", ka: "ისრიანი ფუნქციები არ უჭერენ მხარს ჯენერიკებს" },
            { ru: "Параметр <T> пишется вместо круглых скобок", en: "The <T> token replaces the argument parentheses completely", ka: "<T> პარამეტრი იწერება მრგვალი ფრჩხილების ნაცვლად" }
        ],
        correct: 0,
        explanation: {
            ru: "Для стрелочных функций дженерик-параметр `<T>` размещается прямо перед списком аргументов. Примечание: в `.tsx` файлах синтаксис `<T>` может конфликтовать с JSX-тегами, поэтому часто пишут `<T extends {}>` или `<T,>`.",
            en: "In arrow functions, the generic parameter definition `<T>` sits right before the formal arguments list. Note: in `.tsx` files, a lone `<T>` conflicts with JSX tags, requiring a trailing comma like `<T,>`.",
            ka: "ისრიანი ფუნქციებისთვის ჯენერიკ-პარამეტრი `<T>` თავსდება პირდაპირ არგუმენტების სიის წინ. გაითვალისწინეთ, რომ `.tsx` ფაილებში მარტოხელა `<T>` შეიძლება შევიდეს კონფლიქტში JSX ტეგებთან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions",
        docLabel: "Generic Arrow Functions — Handbook"
    },

    {
        id: 47,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Как правильно переписать тип функции IdentityFn в виде отдельного type alias?",
            en: "How do you define a standalone generic type alias for the IdentityFn function type?",
            ka: "როგორ უნდა ჩაიწეროს სწორად IdentityFn ფუნქციის ტიპი ცალკეული type alias-ის სახით?"
        },
        code: `<span class="kw">type</span> IdentityFn = &lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>) =&gt; <span class="type">T</span>;`,
        options: [
            { ru: "Это полностью валидный синтаксис для описания типа дженерик-функции", en: "This is a completely valid syntax for describing a generic function type signature", ka: "ეს სრულიად ვალიდური სინტაქსია ჯენერიკ-ფუნქციის ტიპის აღსაწერად" },
            { ru: "В алиасах типов запрещено использовать стрелочный синтаксис", en: "Arrow syntax is strictly banned inside standalone type aliases", ka: "ტიპების ალიასებში ისრიანი სინტაქსის გამოყენება აკრძალულია" },
            { ru: "Параметр <T> должен стоять перед словом type", en: "The <T> token must precede the type keyword boundary", ka: "<T> პარამეტრი უნდა იწერებოდეს სიტყვა type-ის წინ" },
            { ru: "Такой тип сделает функцию применимой только для any", en: "This signature format defaults the target execution scope to any", ka: "ასეთი ტიპი ფუნქციას ხელმისაწვდომს გახდის მხოლოდ any ტიპისთვის" }
        ],
        correct: 0,
        explanation: {
            ru: "Данный синтаксис создает тип «дженерик-функции». Важно отличать его от дженерик-алиаса `type IdentityFn<T> = (arg: T) => T;`. В первом случае тип определяется при вызове функции, во втором — при объявлении переменной.",
            en: "This syntax creates a specific 'generic function type'. It differs from `type IdentityFn<T> = (arg: T) => T;` because here, the type parameter is evaluated during function execution, not during allocation.",
            ka: "მოცემული სინტაქსი ქმნის „ჯენერიკ-ფუნქციის“ ტიპს. მნიშვნელოვანია მისი განსხვავება `type IdentityFn<T> = (arg: T) => T;`-სგან, სადაც პარამეტრი ალიასის დონეზეა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types",
        docLabel: "Generic Types — Handbook"
    },

    {
        id: 48,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какие типы данных сможет принять функция processData согласно установленному ограничению?",
            en: "Which data types will the processData function accept based on its generic constraint?",
            ka: "რა ტიპის მონაცემების მიღებას შეძლებს processData ფუნქცია დაწესებული შეზღუდვის მიხედვით?"
        },
        code: `<span class="kw">function</span> <span class="fn">processData</span>&lt;<span class="type">T</span> <span class="kw">extends</span> <span class="type">string</span> | <span class="type">number</span>&gt;(val: <span class="type">T</span>) {
  <span class="kw">return</span> val;
}`,
        options: [
            { ru: "Строки, числа, а также их литеральные типы (например, 'hello' или 42)", en: "Strings, numbers, and their literal refinements (like 'hello' or 42)", ka: "სტრიქონებს, რიცხვებს, ასევე მათ ლიტერალურ ტიპებს (მაგალითად, 'hello' ან 42)" },
            { ru: "Только массив строк или массив чисел", en: "Strictly an array of strings or an array of numbers", ka: "მხოლოდ სტრიქონების მასივს ან რიცხვების მასივს" },
            { ru: "Абсолютно любые объекты, содержащие строковые ключи", en: "Absolutely any object layouts housing string keys", ka: "საერთოდ ნებისმიერ ობიექტს, რომელიც შეიცავს სტრიქონულ გასაღებებს" },
            { ru: "Логические значения (boolean)", en: "Boolean values", ka: "ლოგიკურ მნიშვნელობებს (boolean)" }
        ],
        correct: 0,
        explanation: {
            ru: "Ограничения дженериков поддерживают Union-типы. Конструкция `T extends string | number` означает, что `T` должен быть подтипом строки или числа. Литералы вроде `42` или \"admin\" являются легитимными подтипами.",
            en: "Generic constraints work smoothly with union types. Declaring `T extends string | number` requires `T` to be assignable to either string or number primitives, including literal values.",
            ka: "ჯენერიკების შეზღუდვები მხარს უჭერს Union ტიპებს. კონსტრუქცია `T extends string | number` ნიშნავს, რომ `T` უნდა იყოს სტრიქონის ან რიცხვის ქვეტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
        docLabel: "Union Constraints — Handbook"
    },

    {
        id: 49,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какие встроенные типы в TypeScript по своей природе являются дженериками?",
            en: "Which built-in TypeScript types are inherently generics?",
            ka: "რომელი ჩაშენებული ტიპებია TypeScript-ში თავისი ბუნებით ჯენერიკები?"
        },
        code: `<span class="kw">const</span> a: <span class="type">Array</span>&lt;<span class="type">number</span>&gt; = [<span class="num">1</span>, <span class="num">2</span>];
<span class="kw">const</span> p: <span class="type">Promise</span>&lt;<span class="type">string</span>&gt; = <span class="type">Promise</span>.<span class="fn">resolve</span>(<span class="str">"ok"</span>);`,
        options: [
            { ru: "Только Array, Promise не является дженериком", en: "Only Array; Promise does not implement generic signatures", ka: "მხოლოდ Array, Promise არ არის ჯენერიკი" },
            { ru: "Оба типа являются встроенными дженериками (Built-in Generics)", en: "Both structures are core built-in generics in TypeScript", ka: "ორივე ტიპი არის ჩაშენებული ჯენერიკი (Built-in Generics)" },
            { ru: "Ни один из них, это стандартные примитивы JS", en: "Neither; these represent standard JavaScript structural primitives", ka: "არცერთი მათგანი, ეს არის JS-ის სტანდარტული პრიმიტივები" },
            { ru: "Дженериком является только Promise", en: "Only Promise behaves as a generic entity", ka: "ჯენერიკია მხოლოდ Promise" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript множество глобальных конструкций типизированы с помощью дженериков. `Array<T>` описывает массив элементов типа T, а `Promise<T>` описывает асинхронное значение, которое в будущем разрешится в тип T.",
            en: "Many built-in runtime entities are mapped as global generics in TypeScript. `Array<T>` outlines an array holding type T elements, and `Promise<T>` specifies an asynchronous value returning type T.",
            ka: "TypeScript-ში მრავალი გლობალური კონსტრუქცია ტიპიზებულია ჯენერიკების დახმარებით. `Array<T>` აღწერს T ტიპის ელემენტების მასივს, ხოლო `Promise<T>` — ასინქრონულ მნიშვნელობას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
        docLabel: "Built-in Generics — Handbook"
    },

    {
        id: 50,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "В чем ключевое отличие использования дженерика <T> от использования типа any в качестве аргумента и возвращаемого значения?",
            en: "What is the core operational difference between using a generic <T> versus using any for arguments and return values?",
            ka: "რა არის მთავარი განსხვავება ჯენერიკ <T>-ის გამოყენებასა და any ტიპის არგუმენტად და დაბრუნებულ მნიშვნელობად გამოყენებას შორის?"
        },
        code: `<span class="kw">function</span> <span class="fn">withAny</span>(arg: <span class="type">any</span>): <span class="type">any</span> { <span class="kw">return</span> arg; }
<span class="kw">function</span> <span class="fn">withGeneric</span>&lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>): <span class="type">T</span> { <span class="kw">return</span> arg; }`,
        options: [
            { ru: "Отличий нет, компилятор обрабатывает их идентично", en: "There is no difference; the compiler flags both structures identically", ka: "განსხვავება არ არის, კომპილატორი მათ იდენტურად ამუშავებს" },
            { ru: "any полностью отключает проверку типов и теряет связь между входом и выходом, а дженерик сохраняет точный тип данных", en: "any disables type checking and drops input/output correlation, while generics maintain the exact data type relationship", ka: "any სრულიად თიშავს ტიპების შემოწმებას და კარგავს კავშირს შესავალსა და გამოსავალს შორის, ჯენერიკი კი ინარჩუნებს ზუსტ ტიპს" },
            { ru: "withGeneric работает медленнее в рантайме", en: "withGeneric introduces significant runtime performance overhead", ka: "withGeneric უფრო ნელა მუშაობს runtime-ში" },
            { ru: "withAny запрещено использовать с объектами", en: "withAny is restricted and cannot accept object literals", ka: "withAny-ის გამოყენება აკრძალულია ობიექტებთან" }
        ],
        correct: 1,
        explanation: {
            ru: "Тип `any` заставляет компилятор забыть о проверке типов. Если передать строку в `withAny`, на выходе мы получим `any`, и автодополнение IDE пропадет. `withGeneric` фиксирует переданный тип и гарантирует, что тип возвращаемого значения равен типу аргумента.",
            en: "The `any` assignment forces the compiler to abandon type tracking. Passing a string to `withAny` returns `any`, rendering IDE intellisense useless. `withGeneric` captures and locks the exact input type definition.",
            ka: "`any` ტიპი აიძულებს კომპილატორს დაივიწყოს ტიპების შემოწმება. `withGeneric` კი აფიქსირებს გადაცემულ ტიპს და იძლევა გარანტიას, რომ დაბრუნებული მნიშვნელობის ტიპი არგუმენტის ტიპის ტოლია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics",
        docLabel: "Generics vs Any — Handbook"
    },

    {
        id: 51,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Что означает конструкция <T, U extends T> в объявлении типов?",
            en: "What does the <T, U extends T> construct specify in a generic signature?",
            ka: "რას ნიშნავს კონსტრუქცია <T, U extends T> ტიპების გამოცხადებისას?"
        },
        code: `<span class="kw">function</span> <span class="fn">merge</span>&lt;<span class="type">T</span>, <span class="type">U</span> <span class="kw">extends</span> <span class="type">T</span>&gt;(base: <span class="type">T</span>, extension: <span class="type">U</span>) {}`,
        options: [
            { ru: "U должен иметь структуру, которая полностью совместима с T (содержит как минимум все свойства T)", en: "U must have a structural contract completely compatible with T (containing at least all fields of T)", ka: "U-ს უნდა ჰქონდეს სტრუქტურა, რომელიც სრულიად თავსებადია T-სთან (შეიცავს T-ს ყველა თვისებას მაინც)" },
            { ru: "T и U должны быть абсолютно одинаковыми типами", en: "T and U must evaluate to the exact same primitive type", ka: "T და U აუცილებლად აბსოლუტურად ერთნაირი ტიპები უნდა იყოს" },
            { ru: "Тип T расширяет свойства типа U в рантайме", en: "Type T inherits properties from type U dynamically at runtime", ka: "T ტიპი აფართოებს U ტიპის თვისებებს runtime-ში" },
            { ru: "Это синтаксический синоним оператора ИЛИ (|)", en: "This acts as a syntax shortcut for the union OR operator (|)", ka: "ეს არის ან (|) ოპერატორის სინტაქსური სინონიმი" }
        ],
        correct: 0,
        explanation: {
            ru: "Вы можете ограничивать один параметр типа другим параметром типа. Ограничение `U extends T` требует, чтобы тип `U` структурно наследовал или соответствовал типу `T` (был его подтипом).",
            en: "You can constrain a type parameter with another type parameter. Declaring `U extends T` states that type `U` must structurally satisfy at least the complete shape contract of type `T`.",
            ka: "თქვენ შეგიძლიათ შეზღუდოთ ერთი ტიპის პარამეტრი მეორე ტიპის პარამეტრით. შეზღუდვა `U extends T` მოითხოვს, რომ `U` ტიპი სტრუქტურულად შეესაბამებოდეს `T` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints",
        docLabel: "Type Parameters in Constraints — Handbook"
    },

    {
        id: 52,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какой тип данных выведет TypeScript для переменной elem в данном примере?",
            en: "What type will TypeScript infer for the elem variable in this code pattern?",
            ka: "რა ტიპს მიანიჭებს ავტომატურად TypeScript elem ცვლადს მოცემულ მაგალითში?"
        },
        code: `<span class="kw">function</span> <span class="fn">getFirst</span>&lt;<span class="type">T</span>&gt;(arr: <span class="type">T</span>[]): <span class="type">T</span> { <span class="kw">return</span> arr[<span class="num">0</span>]; }
<span class="kw">const</span> elem = <span class="fn">getFirst</span>([<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>]);`,
        options: [
            { ru: "number[]", en: "number[]", ka: "number[]" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку функция принимает массив `T[]`, а мы передаем массив чисел `number[]`, компилятор сопоставляет структуру и понимает, что `T` — это одиночный тип `number`. Метод возвращает `T`, следовательно, `elem` получает тип `number`.",
            en: "Because the signature requires an array of `T[]` and we pass a `number[]` array literal, TypeScript matches the shapes, deduces that `T` represents a `number`, and marks `elem` as a `number` type.",
            ka: "ვინაიდან ფუნქცია იღებს `T[]` მასივს, ხოლო ჩვენ გადავცემთ რიცხვების მასივს `number[]`, კომპილატორი ხვდება, რომ `T` არის `number`. შესაბამისად, `elem` მიიღებს `number` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
        docLabel: "Generic Array Inference — Handbook"
    },

    {
        id: 53,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Будет ли синтаксической ошибкой явное указание типа <string | number> при вызове дженерик-функции?",
            en: "Is it a syntax error to explicitly provide a type argument like <string | number> during a generic function call?",
            ka: "იქნება თუ არა სინტაქსური შეცდომა ჯენერიკ-ფუნქციის გამოძახებისას ტიპის <string | number> მკაფიოდ მითითება?"
        },
        code: `<span class="kw">function</span> <span class="fn">fillArray</span>&lt;<span class="type">T</span>&gt;(item: <span class="type">T</span>): <span class="type">T</span>[] { <span class="kw">return</span> [item]; }
<span class="kw">const</span> res = fillArray&lt;<span class="type">string</span> | <span class="type">number</span>&gt;(<span class="str">"test"</span>);`,
        options: [
            { ru: "Да, явные скобки <...> разрешены только при объявлении типов", en: "Yes, explicit <...> arguments are only legal inside type definitions", ka: "დიახ, მკაფიო <...> ფრჩხილები ნებადართულია მხოლოდ ტიპების გამოცხადებისას" },
            { ru: "Нет, это валидный синтаксис, переопределяющий автоматическое выведение типов", en: "No, this is completely valid syntax that overrides standard automatic type inference", ka: "არა, ეს ვალიდური სინტაქსია, რომელიც გადაფარავს ტიპების ავტომატურ განსაზღვრას" },
            { ru: "Да, так как переданный аргумент 'test' не соответствует типу number", en: "Yes, because the 'test' value argument fails to satisfy the number type", ka: "დიახ, რადგან გადაცემული არგუმენტი 'test' არ შეესაბამება number ტიპს" },
            { ru: "Код валиден, но тип переменной res все равно останется string[]", en: "The code is valid, but the variable res will stubbornly evaluate to string[]", ka: "კოდი ვალიდურია, მაგრამ res ცვლადის ტიპი მაინც string[] დარჩება" }
        ],
        correct: 1,
        explanation: {
            ru: "Явное указание типа в угловых скобках при вызове функции абсолютно валидно. Оно необходимо, когда компилятор не может сам догадаться о сложном типе или когда нам нужно форсировать более широкий тип (например, `string | number` вместо одиночной строки).",
            en: "Explicitly passing type parameters inside angle brackets during function invocations is completely valid. It is vital when inference fails or when forcing a wider type union assignment.",
            ka: "ფუნქციის გამოძახებისას კუთხოვან ფრჩხილებში ტიპის მკაფიოდ მითითება სრულიად ვალიდურია. ეს საჭიროა მაშინ, როდესაც გვინდა უფრო ფართო ტიპის (მაგალითად, `string | number`) იძულებითი გამოყენება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics",
        docLabel: "Explicit Generic Arguments — Handbook"
    },

    {
        id: 54,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Может ли обычный не-дженерик класс содержать в себе метод, который является дженериком?",
            en: "Can a standard non-generic class contain an instance method that is itself generic?",
            ka: "შეიძლება თუ არა ჩვეულებრივი არაჯენერიკ კლასი შეიცავდეს მეთოდს, რომელიც თავად არის ჯენერიკი?"
        },
        code: `<span class="kw">class</span> <span class="type">Utility</span> {
  <span class="fn">merge</span>&lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>): <span class="type">T</span> { <span class="kw">return</span> arg; }
}`,
        options: [
            { ru: "Нет, дженерик-методы разрешены только внутри дженерик-классов", en: "No, generic methods are strictly confined to generic class environments", ka: "არა, ჯენერიკ-მეთოდები ნებადართულია მხოლოდ ჯენერიკ-კლასების შიგნით" },
            { ru: "Да, методы могут объявлять свои собственные параметры типов, независимые от класса", en: "Yes, instance methods can declare their own standalone type parameters completely independent of the class layout", ka: "დიახ, მეთოდებს შეუძლიათ გამოაცხადონ თავიანთი საკუთარი ტიპის პარამეტრები, რომლებიც დამოუკიდებელია კლასისგან" },
            { ru: "Да, но метод merge() можно будет вызвать только один раз", en: "Yes, but the merge() method can only be invoked a single time during runtime", ka: "დიახ, მაგრამ merge() მეთოდის გამოძახება შესაძლებელი იქნება მხოლოდ ერთხელ" },
            { ru: "Нет, этот синтаксис зарезервирован для абстрактных классов", en: "No, this syntax pattern is explicitly reserved for abstract classes only", ka: "არა, ეს სინტაქსი რეზერვირებულია მხოლოდ აბსტრაქტული კლასებისთვის" }
        ],
        correct: 1,
        explanation: {
            ru: "Методы классов ведут себя так же, как и обычные функции. Любой метод в любом классе (даже в обычном) может иметь свои собственные параметры дженериков, которые определяются непосредственно в момент вызова метода.",
            en: "Class methods behave exactly like standalone functions. Any method inside any class (generic or not) can introduce its own local generic type arguments scoped strictly to that method execution.",
            ka: "კლასის მეთოდები იქცევიან ისევე, როგორც ჩვეულებრივი ფუნქციები. ნებისმიერ მეთოდს ნებისმიერ კლასში შეიძლება ჰქონდეს თავისი საკუთარი ჯენერიკ-პარამეტრები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#generic-classes",
        docLabel: "Generic Methods in Classes — Handbook"
    },

    {
        id: 55,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Что гарантирует ограничение c: { new(): T } в аргументах функции createInstance?",
            en: "What constraint does the c: { new(): T } signature enforce on the c parameter inside createInstance?",
            ka: "რას უზრუნველყოფს შეზღუდვა c: { new(): T } createInstance ფუნქციის არგუმენტებში?"
        },
        code: `<span class="kw">function</span> <span class="fn">createInstance</span>&lt;<span class="type">T</span>&gt;(c: { <span class="kw">new</span>(): <span class="type">T</span> }): <span class="type">T</span> {
  <span class="kw">return</span> <span class="kw">new</span> <span class="fn">c</span>();
}`,
        options: [
            { ru: "Функция принимает любой объект, у которого есть метод с именем new", en: "The function accepts any object that contains a method named new", ka: "ფუნქცია იღებს ნებისმიერ ობიექტს, რომელსაც აქვს მეთოდი სახელით new" },
            { ru: "Аргумент c обязан быть классом или функцией-конструктором, которую можно вызвать через оператор new", en: "The c parameter must strictly be a class constructor or object that can be instantiated using the new keyword", ka: "c არგუმენტი აუცილებლად უნდა იყოს კლასი ან კონსტრუქტორი-ფუნქცია, რომლის გამოძახებაც შესაძლებელია new ოპერატორით" },
            { ru: "Функция возвращает пустой объект {}", en: "The function forcefully returns a blank object literal {}", ka: "ფუნქცია აბრუნებს ცარიელ ობიექტს {}" },
            { ru: "Аргумент c должен быть массивом конструкторов", en: "The c argument must be an array of constructor assignments", ka: "c არგუმენტი უნდა იყოს კონსტრუქტორების მასივი" }
        ],
        correct: 1,
        explanation: {
            ru: "Конструкция `{ new(): T }` описывает тип класса (или функции-конструктора), который при создании через оператор `new` возвращает объект типа `T`. Это часто используется в паттернах Factory (Фабрика).",
            en: "The `{ new(): T }` shape outlines a construct signature representing a class or constructor function that, when instantiated via `new`, delivers an instance conforming to type `T`.",
            ka: "კონსტრუქცია `{ new(): T }` აღწერს კლასის (ან კონსტრუქტორი-ფუნქციის) ტიპს, რომელიც `new` ოპერატორით შექმნისას აბრუნებს `T` ტიპის ობიექტს. ეს ხშირად გამოიყენება Factory პატერნში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics",
        docLabel: "Class Types in Generics — Handbook"
    },

    {
        id: 56,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "К какому результату приведет попытка установить ограничение дженерика пересечением (&) несовместимых примитивов string & number?",
            en: "What is the outcome of trying to constrain a generic parameter with an intersection (&) of incompatible primitives like string & number?",
            ka: "რა შედეგამდე მიგვიყვანს ჯენერიკის შეზღუდვის მცდელობა შეუთავსებელი პრიმიტივების გადაკვეთით (&) string & number?"
        },
        code: `<span class="kw">function</span> <span class="fn">invalidConstraint</span>&lt;<span class="type">T</span> <span class="kw">extends</span> <span class="type">string</span> &amp; <span class="type">number</span>&gt;(arg: <span class="type">T</span>) {}`,
        options: [
            { ru: "T автоматически примет тип any", en: "T evaluates to any type automatically", ka: "T ავტომატურად მიიღებს any ტიპს" },
            { ru: "Тип T свернется в never, и в эту функцию нельзя будет передать ни одно значение", en: "The type T reduces to never, making it impossible to safely pass any argument to this function", ka: "T ტიპი გადაიქცევა never-ად და ამ ფუნქციაში ვერანაირ მნიშვნელობას ვერ გადავცემთ" },
            { ru: "Код вызовет синтаксическую ошибку на этапе парсинга скобок", en: "The layout triggers a hard syntax parser crash at compilation", ka: "კოდი გამოიწვევს სინტაქსურ შეცდომას ფრჩხილების პარსინგის ეტაპზე" },
            { ru: "T станет работать как обычный union тип string | number", en: "T reverts to performing like a standard string | number union type", ka: "T დაიწყებს მუშაობას როგორც ჩვეულებრივი union ტიპი string | number" }
        ],
        correct: 1,
        explanation: {
            ru: "Пересечение `string & number` невозможно, так как ни одно значение в JS не может быть одновременно строкой и числом. TS сворачивает это ограничение в тип `never`. Функция становится «невызываемой», поскольку валидный аргумент для нее подобрать невозможно.",
            en: "An intersection of `string & number` is physically impossible. TypeScript reduces this logically unresolvable shape to the `never` type, making the function completely un-callable.",
            ka: "`string & number` გადაკვეთა შეუძლებელია, რადგან JS-ში არცერთი მნიშვნელობა არ შეიძლება იყოს ერთდროულად სტრიქონიც და რიცხვიც. TS ამ შეზღუდვას `never` ტიპამდე დაიყვანს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#unions",
        docLabel: "Impossible Constraints — Handbook"
    },

    {
        id: 57,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Каким типом станет ResponseData после подстановки аргумента User?",
            en: "What explicit structure does the ResponseData type evaluate to after receiving the User argument?",
            ka: "რა ტიპის სტრუქტურად გადაიქცევა ResponseData User არგუმენტის გადაცემის შემდეგ?"
        },
        code: `<span class="kw">type</span> ResponseData&lt;<span class="type">Data</span>&gt; = { status: <span class="type">number</span>; payload: <span class="type">Data</span>; };
<span class="kw">type</span> User = { name: <span class="type">string</span> };
<span class="kw">type</span> UserResponse = ResponseData&lt;<span class="type">User</span>&gt;;`,
        options: [
            { ru: "{ status: number; payload: { name: string } }", en: "{ status: number; payload: { name: string } }", ka: "{ status: number; payload: { name: string } }" },
            { ru: "{ status: number; payload: User[] }", en: "{ status: number; payload: User[] }", ka: "{ status: number; payload: User[] }" },
            { ru: "User", en: "User", ka: "User" },
            { ru: "Ошибка: алиасы типов (type) не могут принимать параметры", en: "Error: type aliases are strictly forbidden from accepting generic parameters", ka: "შეცდომა: ტიპების ალიასებს (type) არ შეუძლიათ პარამეტრების მიღება" }
        ],
        correct: 0,
        explanation: {
            ru: "Дженерики отлично работают с `type alias`. При создании `UserResponse` параметр `Data` заменяется типом `User`. В итоге получается вложенная структура, где поле `payload` имеет тип `{ name: string }`.",
            en: "Generics combine seamlessly with type aliases. When defining `UserResponse`, the `Data` parameter slot gets filled by `User`, successfully producing a nested `{ status: number; payload: User }` structural map.",
            ka: "ჯენერიკები შესანიშნავად მუშაობენ `type alias`-თან. `UserResponse`-ის შექმნისას `Data` პარამეტრი ჩანაცვლდება `User` ტიპით. შედეგად მიიღება სტრუქტურა, სადაც `payload` ველს აქვს `{ name: string }` ტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases",
        docLabel: "Generic Type Aliases — Handbook"
    },

    {
        id: 58,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какое поведение демонстрирует этот пример касательно области видимости (scope) параметров дженериков?",
            en: "What scoping behavior do the generic type parameters demonstrate in this nested function example?",
            ka: "რა ქცევას აჩვენებს ეს მაგალითი ჯენერიკების პარამეტრების ხილვადობის არესთან (scope) დაკავშირებით?"
        },
        code: `<span class="kw">function</span> <span class="fn">outer</span>&lt;<span class="type">T</span>&gt;(x: <span class="type">T</span>) {
  <span class="kw">return</span> <span class="kw">function</span> <span class="fn">inner</span>&lt;<span class="type">U</span>&gt;(y: <span class="type">U</span>) {
    <span class="kw">const</span> a: <span class="type">T</span> = x;
    <span class="kw">const</span> b: <span class="type">U</span> = y;
  };
}`,
        options: [
            { ru: "Ошибка компиляции: внутри inner недоступен тип T", en: "Compile error: type parameter T is completely inaccessible inside the inner function scope", ka: "კომპილაციის შეცდომა: inner-ის შიგნით T ტიპი მიუწვდომელია" },
            { ru: "Тип T доступен внутри функции inner благодаря замыканию областей видимости типов", en: "Type parameter T remains perfectly accessible inside inner due to lexical scope closures of type arguments", ka: "T ტიპი ხელმისაწვდომია inner ფუნქციის შიგნით ტიპების ხილვადობის არეების ჩაკეტვის (closure) წყალობით" },
            { ru: "Типы T и U автоматически сливаются в один тип any", en: "Type variables T and U collapse into a single broad any assignment automatically", ka: "T და U ტიპები ავტომატურად ერთიანდებიან ერთ any ტიპში" },
            { ru: "Внутренняя функция inner обязана использовать только тип T", en: "The inner function declaration is strictly required to only use type variable T", ka: "შიდა inner ფუნქცია ვალდებულია გამოიყენოს მხოლოდ T ტიპი" }
        ],
        correct: 1,
        explanation: {
            ru: "Параметры типов в TypeScript подчиняются правилам лексической области видимости (лексического замыкания), аналогично переменным в JavaScript. Внутренняя функция `inner` имеет полный доступ к типу `T`, объявленному во внешней функции `outer`.",
            en: "Type parameters obey lexical scoping rules identical to standard JavaScript runtime variables. The nested `inner` function maintains absolute visibility over type `T` declared on the parent function block.",
            ka: "TypeScript-ში ტიპების პარამეტრები ემორჩილება ლექსიკური ხილვადობის არეს წესებს. შიდა `inner` ფუნქციას აქვს სრული წვდომა `T` ტიპზე, რომელიც გამოცხადებულია გარე `outer` ფუნქციაში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html",
        docLabel: "Generic Lexical Scoping — Handbook"
    },

    {
        id: 59,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "Какую ошибку выдаст TypeScript при вызове функции logLength с обычным числом?",
            en: "What error will TypeScript surface if you invoke the logLength function with a plain number primitive?",
            ka: "რა შეცდომას გამოიტანს TypeScript logLength ფუნქციის ჩვეულებრივი რიცხვით გამოძახებისას?"
        },
        code: `<span class="kw">function</span> <span class="fn">logLength</span>&lt;<span class="type">T</span> <span class="kw">extends</span> { length: <span class="type">number</span> }&gt;(item: <span class="type">T</span>) {
  console.<span class="fn">log</span>(item.length);
}
<span class="fn">logLength</span>(<span class="num">123</span>);`,
        options: [
            { ru: "Argument of type 'number' is not assignable to parameter of type '{ length: number; }'", en: "Argument of type 'number' is not assignable to parameter of type '{ length: number; }'", ka: "Argument of type 'number' is not assignable to parameter of type '{ length: number; }'" },
            { ru: "Type 'number' is missing the 'toString' property", en: "Type 'number' is missing the 'toString' property", ka: "Type 'number' is missing the 'toString' property" },
            { ru: "Ошибки не будет, так как у чисел есть неявная длина", en: "No error; numbers implicitly satisfy a length evaluation check at compile-time", ka: "შეცდომა არ იქნება, რადგან რიცხვებს აქვთ არაპირდაპირი სიგრძე" },
            { ru: "В рантайме вернется значение undefined", en: "It compiles clean but returns undefined gracefully at runtime", ka: "Runtime-ში დაბრუნდება undefined მნიშვნელობა" }
        ],
        correct: 0,
        explanation: {
            ru: "Так как для параметра типа `T` установлено ограничение `extends { length: number }`, TypeScript требует, чтобы передаваемый аргумент структурно содержал свойство `length`. У примитивного типа `number` такого свойства нет, поэтому компилятор заблокирует сборку.",
            en: "Because the type parameter `T` is strictly constrained via `extends { length: number }`, TypeScript mandates that the resolved value structurally exposes a `length` field. Primitive numbers fail this requirement, triggering a compilation block.",
            ka: "ვინაიდან `T` ტიპის პარამეტრისთვის დაწესებულია შეზღუდვა `extends { length: number }`, TypeScript მოითხოვს, რომ გადაცემული არგუმენტი სტრუქტურულად შეიცავდეს `length` თვისებას. პრიმიტიულ `number` ტიპს ეს თვისება არ აქვს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
        docLabel: "Generic Constraints — Handbook"
    },

    {
        id: 60,
        category: { ru: "Дженерики", en: "Generics", ka: "ჯენერიკები" },
        tag: "generics",
        question: {
            ru: "К какому результату приведет попытка изменить элемент массива внутри функции freezeAndLog?",
            en: "What happens if you attempt to mutate an array element inside the freezeAndLog function?",
            ka: "რა შედეგამდე მიგვიყვანს მასივის ელემენტის შეცვლის მცდელობა freezeAndLog ფუნქციის შიგნით?"
        },
        code: `<span class="kw">function</span> <span class="fn">freezeAndLog</span>&lt;<span class="type">T</span>&gt;(arr: <span class="kw">readonly</span> <span class="type">T</span>[]) {
  arr[<span class="num">0</span>] = arr[<span class="num">1</span>];
}`,
        options: [
            { ru: "Массив успешно изменится, модификатор readonly игнорируется в функциях", en: "The array mutates successfully; the readonly modifier is bypassed in functions", ka: "მასივი წარმატებით შეიცვლება, readonly მოდიფიკატორი იგნორირებულია ფუნქციებში" },
            { ru: "Ошибка: 'Index signature in type 'readonly T[]' only permits reading'", en: "Error: 'Index signature in type 'readonly T[]' only permits reading'", ka: "შეცდომა: 'Index signature in type 'readonly T[]' only permits reading'" },
            { ru: "Ошибка возникнет только в рантайме", en: "The application passes compilation but crashes instantly at runtime", ka: "შეცდომა წარმოიქმნება მხოლოდ runtime-ში" },
            { ru: "Изменится только копия массива, переданного в аргумент", en: "Only a shallow replica copy of the passed array parameter is mutated", ka: "შეცვლა მხოლოდ არგუმენტში გადაცემული მასივის ასლს შეეხება" }
        ],
        correct: 1,
        explanation: {
            ru: "Модификатор `readonly` перед объявлением дженерик-массива `T[]` запрещает любые операции мутации (запись по индексу, push, pop и т.д.). Попытка перезаписать элемент по индексу вызовет ошибку компиляции.",
            en: "Prefixing a generic `T[]` definition with the `readonly` modifier safely locks down the collection, preventing index assignments and mutator APIs (like push or pop) directly at the compilation phase.",
            ka: "`readonly` მოდიფიკატორი `T[]` ჯენერიკ-მასივის წინ კრძალავს ნებისმიერ მუტაციას (ინდექსით ჩაწერას, push, pop და ა.შ.). ინდექსით ელემენტის გადაწერის მცდელობა გამოიწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type",
        docLabel: "The ReadonlyArray Type — Handbook"
    },

    // 4. UTILITY TYPES
    {
        id: 61,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каким образом встроенная утилита Partial<T> трансформирует исходный тип?",
            en: "How does the built-in utility Partial<T> transform a type?",
            ka: "როგორ ცვლის საწყის ტიპს ჩაშენებული Partial<T> უტილიტა?"
        },
        code: `<span class="kw">interface</span> <span class="type">User</span> { id: <span class="type">number</span>; name: <span class="type">string</span>; }
<span class="kw">type</span> <span class="type">PartialUser</span> = <span class="type">Partial</span>&lt;<span class="type">User</span>&gt;;`,
        options: [
            { ru: "Превращает все свойства объекта в необязательные (?)", en: "Makes all object properties optional (?)", ka: "ობიექტის ყველა თვისებას ხდის არასავალდებულოს (?)" },
            { ru: "Замораживает свойства, добавляя им модификатор readonly", en: "Adds a readonly modifier to all properties", ka: "ყველა თვისებას უმატებს readonly მოდიფიკატორს" },
            { ru: "Исключает все свойства, превращая тип в пустой объект", en: "Removes all properties, generating an empty object", ka: "აშორებს ყველა თვისებას და ტოვებს ცარიელ ობიექტს" },
            { ru: "Делает все свойства строго обязательными", en: "Makes all properties strictly required", ka: "ყველა თვისებას ხდის მკაცრად სავალდებულოს" },
        ],
        correct: 0,
        explanation: {
            ru: "Утилита Partial<T> под капотом использует Mapped Type, который проходит по всем ключам интерфейса T и добавляет к ним знак '?'. Это делает все поля необязательными. Очень удобно использовать в PATCH-запросах или функциях обновления данных, когда нужно передать лишь часть полей объекта. Противоположная утилита — Required<T>.",
            en: "Under the hood, Partial<T> loops through every available key of 'T' via a mapped type operation and appends the '?' operator next to it. This maps the interface fields to optional values. It's heavily utilized in update pipelines (like HTTP PATCH operations) where you only expect partial state payloads.",
            ka: "Partial<T> უტილიტა შიგნიდან იყენებს Mapped Type-ს, რომელიც გადის T ინტერფეისის ყველა გასაღებზე და უმატებს '?' ნიშანს. ეს ყველა ველს არასავალდებულოს ხდის. მოსახერხებელია PATCH მოთხოვნების დროს. საპირისპირო უტილიტაა Required<T>."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",
        docLabel: "Partial<T> — Utility Types"
    },
    {
        id: 62,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каков практический результат применения утилиты Pick<T, K>?",
            en: "What is the practical outcome of using the Pick<T, K> utility?",
            ka: "რა არის Pick<T, K> უტილიტას გამოყენების პრაქტიკული შედეგი?"
        },
        code: `<span class="kw">interface</span> <span class="type">Post</span> { id: <span class="type">number</span>; title: <span class="type">string</span>; text: <span class="type">string</span>; }
<span class="kw">type</span> <span class="type">Preview</span> = <span class="type">Pick</span>&lt;<span class="type">Post</span>, <span class="str">'id'</span> | <span class="str">'title'</span>&gt;;`,
        options: [
            { ru: "Формирует новый тип, содержащий исключительно явно перечисленные ключи", en: "Constructs a type picking only the explicitly listed keys", ka: "ქმნის ახალ ტიპს, რომელიც შეიცავს მხოლოდ მითითებულ გასაღებებს" },
            { ru: "Удаляет указанные ключи из исходной структуры, оставляя остальные", en: "Excludes selected keys from the structure, keeping the rest", ka: "აშორებს მითითებულ გასაღებებს სტრუქტურიდან და ტოვებს დანარჩენს" },
            { ru: "Создаёт кортеж из значений выбранных свойств", en: "Generates a tuple based on the values of targeted fields", ka: "ქმნის ტაპლს (tuple) მითითებული თვისებების მნიშვნელობებისგან" },
            { ru: "Превращает типы выбранных полей в union", en: "Converts targeted fields into a type union", ka: "მითითებული ველების ტიპებს აქცევს union-ად" },
        ],
        correct: 0,
        explanation: {
            ru: "Pick<T, K> принимает исходный тип T и строку или объединение строк K (которые должны быть ключами T). Результатом будет новый тип, у которого будут только эти ключи. Идеально для создания компактных DTO или превью-версий больших моделей. Если вам нужно наоборот исключить пару ключей, а остальные оставить — используйте Omit<T, K>.",
            en: "Pick<T, K> constructs an isolated type by taking a baseline shape 'T' and scraping out only the keys mapped inside the union argument 'K'. The resulting structure holds exclusively those picked keys. If you want the inverted behavior—rejecting specific properties while keeping everything else—use Omit<T, K> instead.",
            ka: "Pick<T, K> იღებს საწყის T ტიპს და გასაღებების K სიას. შედეგად იქმნება ახალი ტიპი, რომელსაც ექნება მხოლოდ ეს გასაღებები. იდეალურია კომპაქტური მოდელების (DTO) შესაქმნელად. თუ პირიქით, გსურთ რამდენიმე ველის წაშლა და სხვების დატოვება, გამოიყენეთ Omit<T, K>."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys",
        docLabel: "Pick<T, K> — Utility Types"
    },
    {
        id: 63,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Для чего используется служебный тип ReturnType<T>?",
            en: "What is the utility type ReturnType<T> used for?",
            ka: "რისთვის გამოიყენება ReturnType<T> ტიპი?"
        },
        code: `<span class="kw">function</span> <span class="fn">getData</span>() { <span class="kw">return</span> { status: <span class="num">200</span> }; }
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">ReturnType</span>&lt;<span class="kw">typeof</span> getData&gt;;`,
        options: [
            { ru: "Извлекает тип возвращаемого значения функционального типа T", en: "Extracts the return type of a function type T", ka: "ამოაქვს ფუნქციის მიერ დაბრუნებული მნიშვნელობის ტიპი" },
            { ru: "Позволяет узнать типы входных аргументов функции", en: "Extracts input parameter types of a function", ka: "გვაძლევს ფუნქციის არგუმენტების ტიპებს" },
            { ru: "Определяет тип контекста execution context (this)", en: "Identifies the contextual type of execution context (this)", ka: "განსაზღვრავს კონტექსტის (this) ტიპს" },
            { ru: "Оборачивает возвращаемое значение функции в Promise", en: "Wraps a generic output type inside a Promise wrapper", ka: "ფუნქციის დაბრუნებულ ტიპს აბავებს Promise-ში" },
        ],
        correct: 0,
        explanation: {
            ru: "ReturnType<T> принимает именно *тип функции* (не саму функцию, поэтому мы пишем typeof getData) и вычисляет, какой тип данных она возвращает при выполнении. В примере выше Result станет типом '{ status: number }'. Это крайне полезно при интеграции со сторонними библиотеками, когда авторы не экспортировали типы результатов функций напрямую.",
            en: "ReturnType<T> evaluates a raw function type signature 'T' and extracts its output declaration. Note that it works on type signatures, which is why we must prefix JavaScript function identifiers with the 'typeof' keyword. This lets you auto-generate interface responses derived directly from function execution definitions.",
            ka: "ReturnType<T> იღებს სწორედ *ფუნქციის ტიპს* (არა თავად ფუნქციას, ამიტომ ვწერთ typeof getData) და ადგენს თუ რა ტიპის მონაცემს აბრუნებს ის. მოცემულ მაგალითში Result გახდება '{ status: number }'. ეს ძალიან გამოსადეგია გარე ბიბლიოთეკებთან მუშაობისას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype",
        docLabel: "ReturnType<T> — Utility Types"
    },
    {
        id: 64,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каким образом утилита Omit<T, K> формирует результирующий тип?",
            en: "How does the Omit<T, K> utility construct its resulting type?",
            ka: "როგორ აყალიბებს საბოლოო ტიპს Omit<T, K> უტილიტა?"
        },
        code: `<span class="kw">interface</span> <span class="type">Todo</span> { id: <span class="type">number</span>; title: <span class="type">string</span>; completed: <span class="type">boolean</span>; }
<span class="kw">type</span> <span class="type">TodoPreview</span> = <span class="type">Omit</span>&lt;<span class="type">Todo</span>, <span class="str">'completed'</span>&gt;;`,
        options: [
            { ru: "Удаляет указанные ключи K из исходного типа T", en: "Removes specified keys K from the original type T", ka: "აშორებს მითითებულ K გასაღებებს საწყისი T ტიპიდან" },
            { ru: "Выбирает только указанные ключи K, игнорируя остальные", en: "Selects only the specified keys K, ignoring the rest", ka: "ირჩევს მხოლოდ მითითებულ K გასაღებებს, სხვებს კი აიგნორირებს" },
            { ru: "Делает свойства K необязательными в типе T", en: "Makes properties K optional inside the type T", ka: "K თვისებებს ხდის არასავალდებულოს T ტიპში" },
            { ru: "Превращает значения ключей K в тип null", en: "Changes the value types of keys K to null", ka: "K გასაღებების მნიშვნელობების ტიპებს ცვლის null-ით" },
        ],
        correct: 0,
        explanation: {
            ru: "Omit<T, K> является противоположностью Pick<T, K>. Она конструирует тип, копируя все свойства из T, кроме тех, чьи ключи явно перечислены в объединении K. Это идеальный инструмент, когда нужно отсечь лишние служебные поля (например, id или timestamps) перед отправкой данных.",
            en: "Omit<T, K> acts as the strict inverse of Pick<T, K>. It constructs a type by lifting all properties from 'T' and then systematically dropping the keys specified in 'K'. It's highly useful when cleaning up operational model shapes before passing data onward.",
            ka: "Omit<T, K> წარმოადგენს Pick<T, K>-ის საპირისპირო უტილიტას. იგი ქმნის ახალ ტიპს, რომელიც შეიცავს T ტიპის ყველა ველს, გარდა K სიაში მითითებული გასაღებებისა. იდეალურია ზედმეტი სერვისული ველების მოსაშორებლად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",
        docLabel: "Omit<T, K> — Utility Types"
    },
    {
        id: 65,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Какое поведение гарантирует применение служебного типа Readonly<T>?",
            en: "What behavior is guaranteed when applying the Readonly<T> utility type?",
            ka: "რა ქცევას უზრუნველყოფს Readonly<T> სერვისული ტიპის გამოყენება?"
        },
        code: `<span class="kw">interface</span> <span class="type">Config</span> { host: <span class="type">string</span>; }
<span class="kw">const</span> <span class="obj">cnf</span>: <span class="type">Readonly</span>&lt;<span class="type">Config</span>&gt; = { host: <span class="str">"localhost"</span> };
<span class="obj">cnf</span>.host = <span class="str">"127.0.0.1"</span>; <span class="com">// ?</span>`,
        options: [
            { ru: "Вызовет ошибку компиляции, так как свойства объекта нельзя перезаписать", en: "Triggers a compile error because properties of the object cannot be reassigned", ka: "გამოიწვევს კომპილაციის შეცდომას, რადგან ობიექტის თვისებების გადაწერა აკრძალულია" },
            { ru: "Автоматически заморозит объект в рантайме через Object.freeze()", en: "Automatically freezes the object at runtime via Object.freeze()", ka: "ავტომატურად გაყინავს ობიექტს runtime-ში Object.freeze()-ის მეშვეობით" },
            { ru: "Сделает все свойства объекта типа string", en: "Forces all fields of the object to resolve to a string type", ka: "ობიექტის ყველა თვისებას გადააქცევს string ტიპად" },
            { ru: "Разрешит мутацию только через специальные геттеры", en: "Allows mutations exclusively through explicit getter methods", ka: "მუტაციის ნებას დართავს მხოლოდ სპეციალური გეტერების საშუალებით" },
        ],
        correct: 0,
        explanation: {
            ru: "Readonly<T> итерирует по свойствам типа T и добавляет к каждому из них модификатор readonly. Это предотвращает повторное присвоение значений свойствам на этапе компиляции. Важно помнить, что это сугубо проверка TypeScript, которая исчезает в рантайме и сама по себе не вызывает Object.freeze().",
            en: "Readonly<T> iterates across the properties of 'T' and appends a 'readonly' modifier to each item. This prevents direct re-assignment of fields at compile-time. Keep in mind that this is purely static enforcement; it does not introduce actual runtime overhead like Object.freeze().",
            ka: "Readonly<T> გადის T ტიპის ყველა თვისებაზე და თითოეულ მათგანს უმატებს readonly მოდიფიკატორს. ეს კრძალავს მნიშვნელობების ხელახალ მინიჭებას კომპილაციის ეტაპზე. გაითვალისწინეთ, რომ ეს არის მხოლოდ TS-ის შემოწმება და runtime-ში Object.freeze()-ს არ იძახებს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype",
        docLabel: "Readonly<T> — Utility Types"
    },
    {
        id: 66,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "В чем заключается задача утилиты Record<K, T>?",
            en: "What is the primary objective of the Record<K, T> utility?",
            ka: "რაში მდგომარეობს Record<K, T> უტილიტას მთავარი ამოცანა?"
        },
        code: `<span class="kw">type</span> <span class="type">Pages</span> = <span class="str">'home'</span> | <span class="str">'about'</span>;
<span class="kw">type</span> <span class="type">Nav</span> = <span class="type">Record</span>&lt;<span class="type">Pages</span>, { url: <span class="type">string</span> }&gt;;`,
        options: [
            { ru: "Создает тип объекта, где ключами являются элементы K, а значениями — тип T", en: "Constructs an object type with property keys of type K and value definitions of type T", ka: "ქმნის ობიექტის ტიპს, სადაც გასაღებებია K-ს ელემენტები, ხოლო მნიშვნელობები — T ტიპის" },
            { ru: "Фильтрует тип K, оставляя только те свойства, которые совместимы с T", en: "Filters keys inside K, preserving only properties structurally compliant with T", ka: "ფილტრავს K ტიპს და ტოვებს მხოლოდ იმ თვისებებს, რომლებიც თავსებადია T-სთან" },
            { ru: "Превращает массив значений типа T в индексируемый кортеж", en: "Maps an array collection of T into an indexed tuple design", ka: "T ტიპის მნიშვნელობების მასივს აქცევს ინდექსირებად ტაპლად (tuple)" },
            { ru: "Записывает историю изменений типа в специальный лог-тип", en: "Logs historical state variations of types into a metadata container", ka: "ტიპის ცვლილებების ისტორიას ინახავს სპეციალურ ლოგ-ტიპში" },
        ],
        correct: 0,
        explanation: {
            ru: "Record<K, T> — это отличный способ описать словарь (dictionary) или карту (map). Первым аргументом K передаются будущие ключи (обычно это union строк/чисел или string/number), а вторым аргументом T — тип значения, которое будет лежать по каждому из этих ключей.",
            en: "Record<K, T> is a powerful shorthand for declaring structural dictionaries or maps. It accepts a string/number union 'K' to designate the complete key landscape, and pairs each element with the static value payload shape 'T'.",
            ka: "Record<K, T> არის საუკეთესო გზა ლექსიკონის (dictionary) ან map სტრუქტურის აღსაწერად. პირველ არგუმენტად (K) გადაეცემა მომავალი გასაღებები (ჩვეულებრივ string/number union), ხოლო მეორე არგუმენტად (T) — მნიშვნელობის ტიპი, რომელიც ჩაიწერება თითოეულ გასაღებში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",
        docLabel: "Record<K, T> — Utility Types"
    },
    {
        id: 67,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Как утилита Required<T> преобразует переданный в неё тип?",
            en: "How does the Required<T> utility transform the type passed into it?",
            ka: "როგორ გარდაქმნის გადაცემულ ტიპს Required<T> უტილიტა?"
        },
        code: `<span class="kw">interface</span> <span class="type">Props</span> { id?: <span class="type">number</span>; name?: <span class="type">string</span>; }
<span class="kw">type</span> <span class="type">StrictProps</span> = <span class="type">Required</span>&lt;<span class="type">Props</span>&gt;;`,
        options: [
            { ru: "Удаляет модификатор необязательности (?) у всех свойств, делая их строго обязательными", en: "Removes the optional modifier (?) from all properties, making them strictly mandatory", ka: "ყველა თვისებას აშორებს არასავალდებულოობის (?) ნიშანს და ხდის მათ სავალდებულოს" },
            { ru: "Добавляет к типу требование о наличии хотя бы одного заполненного поля", en: "Enforces a condition where at least one field must be populated within the type", ka: "ტიპს უყენებს მოთხოვნას, რომ მინიმუმ ერთი ველი მაინც იყოს შევსებული" },
            { ru: "Предотвращает добавление динамических свойств через индексные сигнатуры", en: "Locks the structure from adopting dynamic properties through index signatures", ka: "კრძალავს დინამიური თვისებების დამატებას ინდექსური სიგნატურების საშუალებით" },
            { ru: "Исключает значения null и undefined из типов всех свойств", en: "Excludes null and undefined variants from every individual property definition", ka: "ყველა თვისების ტიპიდან შლის null და undefined მნიშვნელობებს" },
        ],
        correct: 0,
        explanation: {
            ru: "Required<T> выполняет операцию, строго противоположную Partial<T>. Под капотом она использует сопоставленный тип с синтаксисом '-?', который явно удаляет знак вопроса у каждого свойства интерфейса, делая их заполнение абсолютно обязательным.",
            en: "Required<T> performs the exact opposite operation of Partial<T>. Under the hood, it applies a mapped type configured with a '-?' prefix syntax, which explicitly strips away optional flags from all properties, ensuring they must be defined.",
            ka: "Required<T> ასრულებს Partial<T>-ის აბსოლუტურად საპირისპირო ოპერაციას. შიგნიდან ის იყენებს mapped type-ს '-?' სინტაქსით, რაც ნიშნავს თითოეული თვისებიდან კითხვის ნიშნის წაშლას და მათ მკაცრად სავალდებულოდ ქცევას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype",
        docLabel: "Required<T> — Utility Types"
    },
    {
        id: 68,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каким образом утилита Exclude<UnionType, ExcludedMembers> фильтрует переданный Union?",
            en: "How does the Exclude<UnionType, ExcludedMembers> utility filter the provided Union?",
            ka: "როგორ ფილტრავს გადაცემულ Union-ს Exclude<UnionType, ExcludedMembers> უტილიტა?"
        },
        code: `<span class="kw">type</span> <span class="type">T0</span> = <span class="type">Exclude</span>&lt;<span class="str">"a"</span> | <span class="str">"b"</span> | <span class="str">"c"</span>, <span class="str">"a"</span> | <span class="str">"b"</span>&gt;;`,
        options: [
            { ru: "Исключает из UnionType все типы, которые можно присвоить ExcludedMembers", en: "Excludes from UnionType all types that are assignable to ExcludedMembers", ka: "UnionType-დან შლის ყველა იმ ტიპს, რომელთა მინიჭებაც შესაძლებელია ExcludedMembers-ისთვის" },
            { ru: "Оставляет только те члены, которые пересекаются в обоих списках", en: "Retains only the subset of members that intersect across both arguments", ka: "ტოვებს მხოლოდ იმ წევრებს, რომლებიც მეორდება ორივე სიაში" },
            { ru: "Удаляет строковые литералы, заменяя их базовым типом string", en: "Flattens string literal unions down to the generic base string type", ka: "აშორებს სტრინგულ ლიტერალებს და ცვლის მათ ბაზისური string ტიპით" },
            { ru: "Превращает Union-тип в пересечение (Intersection type)", en: "Mutates the union framework into a standard intersection type layout", ka: "Union ტიპს გარდაქმნის გადაკვეთის (Intersection) ტიპად" },
        ],
        correct: 0,
        explanation: {
            ru: "Exclude<T, U> работает на уровне объединений (Unions). Она берет каждый член из первого союза T и проверяет, можно ли его присвоить типу U. Если да — этот член выбрасывается. В примере выше останется только литерал 'c'.",
            en: "Exclude<T, U> operates strictly at the union level. It reviews each individual constituent inside 'T' and tests if it can match or assign to 'U'. If it fits, that member is dropped. In the code above, only 'c' remains.",
            ka: "Exclude<T, U> მუშაობს გაერთიანებების (Unions) დონეზე. ის იღებს პირველი T გაერთიანების თითოეულ წევრს და ამოწმებს, შესაძლებელია თუ არა მისი მინიჭება U ტიპისთვის. თუ კი, ეს წევრი იშლება. მოცემულ მაგალითში დარჩება მხოლოდ 'c'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeelementtype-excludedmembers",
        docLabel: "Exclude<T, U> — Utility Types"
    },
    {
        id: 69,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "В чем отличие утилиты Extract<Type, Union> от утилиты Exclude?",
            en: "What makes the Extract<Type, Union> utility different from the Exclude utility?",
            ka: "რით განსხვავდება Extract<Type, Union> უტილიტა Exclude უტილიტასგან?"
        },
        code: `<span class="kw">type</span> <span class="type">T0</span> = <span class="type">Extract</span>&lt;<span class="str">"a"</span> | <span class="str">"b"</span> | <span class="str">"c"</span>, <span class="str">"a"</span> | <span class="str">"f"</span>&gt;;`,
        options: [
            { ru: "Она извлекает (оставляет) только те члены, которые можно присвоить Union", en: "It extracts (retains) only those members that are assignable to Union", ka: "იგი ამოიღებს (ტოვებს) მხოლოდ იმ წევრებს, რომელთა მინიჭებაც შესაძლებელია Union-ისთვის" },
            { ru: "Она работает только со свойствами интерфейсов, а не с Union-типами", en: "It works exclusively on interface property trees rather than generic union structures", ka: "იგი მუშაობს მხოლოდ ინტერფეისების თვისებებზე და არა Union ტიპებზე" },
            { ru: "Она возвращает массив строк в рантайме", en: "It outputs a standard JavaScript string array at application runtime", ka: "იგი აბრუნებს სტრინგების მასივს runtime-ში" },
            { ru: "Она извлекает только приватные методы классов", en: "It filters and uncovers private class methods exclusively", ka: "იგი ამოიღებს მხოლოდ კლასების პრივატულ მეთოდებს" },
        ],
        correct: 0,
        explanation: {
            ru: "Extract<T, U> — это смысловая противоположность Exclude. Она конструирует тип, выбирая из T те члены, которые присутствуют (совместимы) в U. В примере выше результатом будет только литерал 'a', так как это единственное пересечение.",
            en: "Extract<T, U> represents the direct conceptual inverse of Exclude. It builds an isolated type by pulling elements out of 'T' that are also assignable to 'U'. In our example, the resulting type simplifies purely to 'a'.",
            ka: "Extract<T, U> არის Exclude-ის ლოგიკური საპირისპირო ვარიანტი. იგი ქმნის ახალ ტიპს T-დან მხოლოდ იმ წევრების არჩევით, რომლებიც თავსებადია U-სთან. მოცემულ მაგალითში შედეგი იქნება მხოლოდ 'a'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union",
        docLabel: "Extract<Type, Union> — Utility Types"
    },
    {
        id: 70,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каким будет результат применения утилиты NonNullable<T> к типу, содержащему null или undefined?",
            en: "What is the result of applying the NonNullable<T> utility to a type containing null or undefined?",
            ka: "რა იქნება NonNullable<T> უტილიტას გამოყენების შედეგი ტიპზე, რომელიც შეიცავს null-ს ან undefined-ს?"
        },
        code: `<span class="kw">type</span> <span class="type">Data</span> = <span class="type">string</span> | <span class="type">null</span> | <span class="type">undefined</span>;
<span class="kw">type</span> <span class="type">CleanData</span> = <span class="type">NonNullable</span>&lt;<span class="type">Data</span>&gt;;`,
        options: [
            { ru: "Из типа исключаются null и undefined", en: "Excludes null and undefined values from the type constellation", ka: "ტიპიდან გამოირიცხება null და undefined" },
            { ru: "Тип автоматически преобразуется в пустую строку", en: "The entire definition defaults implicitly down to an empty string", ka: "ტიპი ავტომატურად გადაიქცევა ცარიელ სტრინგად" },
            { ru: "Все поля типа становятся необязательными", en: "Forces all target fields across the architecture to become optional", ka: "ტიპის ყველა ველი ხდება არასავალდებულო" },
            { ru: "Генерируется ошибка компиляции из-за попытки очистить базовые типы", en: "Generates a compile error due to filtering baseline primitives", ka: "იწვევს კომპილაციის შეცდომას ბაზისური ტიპების გასუფთავების მცდელობის გამო" },
        ],
        correct: 0,
        explanation: {
            ru: "Утилита NonNullable<T> фильтрует union-тип T, полностью убирая из него типы null и undefined. Это чрезвычайно полезно при включенной опции компилятора strictNullChecks, когда нужно гарантировать, что переменная содержит реальные данные.",
            en: "The NonNullable<T> utility screens a union type 'T', stripping away null and undefined options. It is incredibly useful when strictNullChecks is active, validating that a variable holds true data payloads.",
            ka: "NonNullable<T> უტილიტა ფილტრავს T union-ტიპს და მთლიანად აშორებს მისგან null და undefined მნიშვნელობებს. ეს განსაკუთრებით გამოსადეგია ჩართული strictNullChecks ოფციის დროს, რათა გარანტირებული იყოს რეალური მონაცემების არსებობა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype",
        docLabel: "NonNullable<T> — Utility Types"
    },
    {
        id: 71,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Какую информацию извлекает служебный тип Parameters<T>?",
            en: "What specific information does the Parameters<T> utility type extract?",
            ka: "რა სპეციფიკურ ინფორმაციას ამოიღებს Parameters<T> სერვისული ტიპი?"
        },
        code: `<span class="kw">function</span> <span class="fn">log</span>(id: <span class="type">number</span>, msg: <span class="type">string</span>) {}
<span class="kw">type</span> <span class="type">Args</span> = <span class="type">Parameters</span>&lt;<span class="kw">typeof</span> log&gt;;`,
        options: [
            { ru: "Типы аргументов функции в виде кортежа (Tuple)", en: "The argument types of a function represented within a Tuple structure", ka: "ფუნქციის არგუმენტების ტიპებს ტაპლის (Tuple) სახით" },
            { ru: "Общее количество параметров, возвращая литеральное число", en: "The aggregate count of parameters, returning a numeric literal type", ka: "პარამეტრების საერთო რაოდენობას რიცხვითი ლიტერალის სახით" },
            { ru: "Тип объекта, где ключами выступают имена аргументов", en: "An object type where individual argument identifiers act as keys", ka: "ობიექტის ტიპს, სადაც გასაღებებია არგუმენტების სახელები" },
            { ru: "Только тип первого переданного аргумента функции", en: "Captures exclusively the first declared argument type of the function", ka: "მხოლოდ ფუნქციის პირველი გადაცემული არგუმენტის ტიპს" },
        ],
        correct: 0,
        explanation: {
            ru: "Parameters<T> принимает именно тип функции и конструирует кортеж (Tuple) из типов её параметров. В коде выше тип Args превратится в кортеж [number, string]. Это позволяет гибко прокидывать аргументы в другие функции-обёртки.",
            en: "Parameters<T> evaluates a raw function type signature and compiles a tuple out of its formal parameters. In the snippet above, 'Args' resolves directly into a [number, string] tuple, providing structural reuse for higher-order wrappers.",
            ka: "Parameters<T> იღებს ფუნქციის ტიპს და ქმნის ტაპლს (Tuple) მისი პარამეტრების ტიპებისგან. მოცემულ კოდში Args გახდება [number, string]. ეს მოსახერхებელია არგუმენტების სხვა ფუნქციებში გადასაწოდებლად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype",
        docLabel: "Parameters<T> — Utility Types"
    },
    {
        id: 72,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Для чего предназначен встроенный тип ConstructorParameters<T>?",
            en: "What is the built-in ConstructorParameters<T> type designed for?",
            ka: "რისთვის არის განკუთვნილი ჩაშენებული ConstructorParameters<T> ტიპი?"
        },
        code: `<span class="kw">class</span> <span class="type">User</span> { constructor(id: <span class="type">number</span>) {} }
<span class="kw">type</span> <span class="type">Params</span> = <span class="type">ConstructorParameters</span>&lt;<span class="kw">typeof</span> <span class="type">User</span>&gt;;`,
        options: [
            { ru: "Извлекает типы аргументов конструктора класса в виде кортежа", en: "Extracts the parameter types of a class constructor function as a tuple", ka: "ამოაქვს კლასის კონსტრუქტორის არგუმენტების ტიპები ტაპლის სახით" },
            { ru: "Извлекает все публичные свойства, объявленные внутри класса", en: "Extracts all public instance properties mapped inside the class framework", ka: "ამოაქვს კლასის შიგნით გამოცხადებული ყველა საჯარო (public) თვისება" },
            { ru: "Создает новый экземпляр класса на уровне системы типов", en: "Spawns a fresh instance blueprint of the class inside the type system", ka: "ქმნის კლასის ახალ ეგზემპლარს ტიპების სისტემის დონეზე" },
            { ru: "Извлекает только типы статических методов класса", en: "Isolates and grabs exclusively static class method signatures", ka: "ამოაქვს კლასის მხოლოდ სტატიკური მეთოდების ტიპები" },
        ],
        correct: 0,
        explanation: {
            ru: "ConstructorParameters<T> принимает тип функции-конструктора (или класса) и извлекает типы параметров его конструктора в виде кортежа. Обратите внимание, что передается именно typeof User, так как нам нужен тип самого класса-конструктора, а не тип его экземпляра.",
            en: "ConstructorParameters<T> evaluates a constructor function type (or class declaration) and builds a tuple of its construction arguments. Note the usage of 'typeof User' to targets the static class constructor construct itself.",
            ka: "ConstructorParameters<T> იღებს კონსტრუქტორი ფუნქციის (ან კლასის) ტიპს და ამოაქვს მისი კონსტრუქტორის პარამეტრების ტიპები ტაპლის სახით. გაითვალისწინეთ, რომ გადაეცემა სწორედ typeof User, რადგან გვჭირდება თავად კლასის ტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype",
        docLabel: "ConstructorParameters<T> — Utility Types"
    },
    {
        id: 73,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Какую задачу выполняет служебный тип InstanceType<T>?",
            en: "What structural task does the InstanceType<T> utility type perform?",
            ka: "რა ამოცანას ასრულებს სერვისული ტიპი InstanceType<T>?"
        },
        code: `<span class="kw">class</span> <span class="type">Car</span> {}
<span class="kw">type</span> <span class="type">CarInstance</span> = <span class="type">InstanceType</span>&lt;<span class="kw">typeof</span> <span class="type">Car</span>&gt;;`,
        options: [
            { ru: "Извлекает тип экземпляра, создаваемого функцией-конструктором или классом", en: "Extracts the instance type generated by a constructor function or class definition", ka: "ამოაქვს ეგზემპლარის (instance) ტიპი, რომელიც იქმნება კონსტრუქტორი ფუნქციის ან კლასის მიერ" },
            { ru: "Превращает класс в синглтон на уровне типов", en: "Enforces a strict singleton structural design on the class at the type level", ka: "კლასს აქცევს სინგლტონად ტიპების დონეზე" },
            { ru: "Возвращает строковое имя переданного класса", en: "Returns the evaluation of the literal string name of the target class", ka: "აბრუნებს გადაცემული კლასის სტრინგულ სახელს" },
            { ru: "Извлекает типы только тех свойств, которые инициализированы через new", en: "Filters properties initialized exclusively via the runtime 'new' keyword", ka: "ამოაქვს მხოლოდ იმ თვისებების ტიპები, რომლებიც ინიციალიზებულია new-ს საშუალებით" },
        ],
        correct: 0,
        explanation: {
            ru: "InstanceType<T> берет тип функции-конструктора (класса) и возвращает тип создаваемого им объекта (экземпляра). Это бывает крайне необходимо при создании динамических фабрик классов или фабричных функций, возвращающих инстансы.",
            en: "InstanceType<T> takes a formal class constructor function shape and yields the design of the instance it returns. This is particularly handy when engineering dynamic factory methods that instantiate class representations.",
            ka: "InstanceType<T> იღებს კონსტრუქტორი ფუნქციის (კლასის) ტიპს და აბრუნებს მის მიერ შექმნილი ობიექტის (ეგზემპლარის) ტიპს. ეს ძალიან საჭიროა დინამიური ფაბრიკების (factory functions) შექმნისას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype",
        docLabel: "InstanceType<T> — Utility Types"
    },
    {
        id: 74,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "В чем смысл использования утилиты ThisParameterType<T>?",
            en: "What is the architectural purpose of using the ThisParameterType<T> utility?",
            ka: "რა არის ThisParameterType<T> უტილიტას გამოყენების აზრი?"
        },
        code: `<span class="kw">function</span> <span class="fn">toHex</span>(<span class="kw">this</span>: <span class="type">Number</span>) { <span class="kw">return</span> <span class="kw">this</span>.toString(<span class="num">16</span>); }
<span class="kw">type</span> <span class="type">Context</span> = <span class="type">ThisParameterType</span>&lt;<span class="kw">typeof</span> toHex&gt;;`,
        options: [
            { ru: "Извлекает тип параметра 'this' для функции, или unknown, если тип не указан", en: "Extracts the declared 'this' parameter type for a function, or unknown if none exists", ka: "ამოაქვს ფუნქციის 'this' პარამეტრის ტიპი, ან unknown, თუ ტიპი არ არის მითითებული" },
            { ru: "Принудительно связывает функцию с глобальным контекстом window", en: "Forcibly binds the active function architecture down to the global window scope", ka: "ფუნქციას იძულებით აბამს window გლობალურ კონტექსტთან" },
            { ru: "Превращает все аргументы функции в свойства контекста", en: "Converts all standard function arguments into runtime contextual properties", ka: "ფუნქციის ყველა არგუმენტს აქცევს კონტექსტის თვისებებად" },
            { ru: "Проверяет, вызывалась ли функция через метод .bind()", en: "Validates statically if the function was executed via a .bind() modifier", ka: "ამოწმებს, იქნა თუ არა ფუნქცია გამოძახებული .bind() მეთოდის საშუალებით" },
        ],
        correct: 0,
        explanation: {
            ru: "Если в первой позиции параметров функции явно объявлен псевдо-параметр 'this' (для типизации контекста выполнения), ThisParameterType<T> сможет извлечь его тип. Если же контекст внутри функции не типизирован явным образом, утилита вернет тип unknown.",
            en: "If a function utilizes an explicit pseudo 'this' parameter to safely type-check its runtime execution context, ThisParameterType<T> isolates that type. If no explicit context is present, it returns unknown.",
            ka: "თუ ფუნქციის პარამეტრებში პირველ პოზიციაზე გამოცხადებულია ფსევდო-პარამეტრი 'this' (კონტექსტის ტიპიზაციისთვის), ThisParameterType<T> ამოიღებს მის ტიპს. ხოლო თუ კონტექსტი არაა მითითებული, უტილიტა დააბრუნებს unknown-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype",
        docLabel: "ThisParameterType<T> — Utility Types"
    },
    {
        id: 75,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Что делает служебный тип OmitThisParameter<T>?",
            en: "What structural operation does the OmitThisParameter<T> utility type perform?",
            ka: "რას აკეთებს სერვისული ტიპი OmitThisParameter<T>?"
        },
        code: `<span class="kw">function</span> <span class="fn">log</span>(<span class="kw">this</span>: <span class="type">Console</span>, msg: <span class="type">string</span>) {}
<span class="kw">type</span> <span class="type">SimpleLog</span> = <span class="type">OmitThisParameter</span>&lt;<span class="kw">typeof</span> log&gt;;`,
        options: [
            { ru: "Удаляет параметр 'this' из сигнатуры типа функции", en: "Strips the explicit 'this' parameter completely from the function type signature", ka: "აშორებს 'this' პარამეტრს ფუნქციის ტიპის სიგნატურიდან" },
            { ru: "Заменяет исходный контекст 'this' на тип any", en: "Substitutes the original explicit 'this' declaration with an 'any' type override", ka: "საწყის 'this' კონტექსტს ანაცვლებს any ტიპით" },
            { ru: "Удаляет все параметры функции, оставляя только контекст", en: "Drops all incoming arguments from the function signature, keeping only 'this'", ka: "აშორებს ფუნქციის ყველა პარამეტრს და ტოვებს მხოლოდ კონტექსტს" },
            { ru: "Вызывает ошибку, если у функции изначально не было параметра this", en: "Throws a compile warning if the source function lacked a designated 'this' parameter", ka: "აგდებს შეცდომას, თუ ფუნქციას თავიდანვე არ ჰქონდა this პარამეტრი" },
        ],
        correct: 0,
        explanation: {
            ru: "OmitThisParameter<T> удаляет явное объявление типа 'this' из сигнатуры функции, возвращая чистый тип функции с обычными аргументами. Это крайне полезно после использования методов вроде JS function.bind(), когда контекст фиксируется и больше не должен указываться снаружи.",
            en: "OmitThisParameter<T> clears out explicit 'this' parameter declarations from a function signature, returning a clean functional layout. This is crucial after leveraging tools like function.bind() where the context becomes locked.",
            ka: "OmitThisParameter<T> აშორებს 'this' ტიპის გამოცხადებას ფუნქციის სიგნატურიდან და აბრუნებს სუფთა ფუნქციის ტიპს ჩვეულებრივი არგუმენტებით. ეს სასარგებლოა function.bind()-ის გამოყენების შემდეგ, როდესაც კონტექსტი უკვე ფიქსირებულია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype",
        docLabel: "OmitThisParameter<T> — Utility Types"
    },
    {
        id: 76,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Как утилита Uppercase<StringType> трансформирует строковый литеральный тип?",
            en: "How does the Uppercase<StringType> utility transform a string literal type?",
            ka: "როგორ გარდაქმნის Uppercase<StringType> უტილიტა სტრინგულ ლიტერალურ ტიპს?"
        },
        code: `<span class="kw">type</span> <span class="type">Status</span> = <span class="str">"pending"</span>;
<span class="kw">type</span> <span class="type">Upper</span> = <span class="type">Uppercase</span>&lt;<span class="type">Status</span>&gt;;`,
        options: [
            { ru: "Переводит все символы строки-литерала в верхний регистр", en: "Converts all characters of the string literal type to uppercase characters", ka: "სტრინგ-ლიტერალის ყველა სიმბოლოს გადააქვს მაღალ რეგისტრში (დიდ ასოებში)" },
            { ru: "Делает заглавной только первую букву в переданной строке", en: "Capitalizes exclusively the first initial letter of the target string value", ka: "დიდ ასოდ აქცევს მხოლოდ გადაცემული სტრინგის პირველ ასოს" },
            { ru: "Добавляет префикс 'UPPER_' к значению литерала", en: "Appends a hardcoded 'UPPER_' identifier string prefix to the literal definition", ka: "ლიტერალის მნიშვნელობას უმატებს პრეფიქსს 'UPPER_'" },
            { ru: "Трансформирует строку в массив её символов", en: "Deconstructs the literal string out into a structured array of individual character items", ka: "სტრინგს გარდაქმნის მისივე სიმბოლოების მასივად" },
        ],
        correct: 0,
        explanation: {
            ru: "Uppercase<StringType> — это один из встроенных макро-типов манипуляции строками. Он берет строковый литерал и переводит его в верхний регистр на уровне типов. Тип Upper станет равен строго строке 'PENDING'.",
            en: "Uppercase<StringType> is an intrinsic template literal manipulation utility. It grabs the text string literal compile target and shifts it entirely to uppercase. In this case, 'Upper' translates strictly to the type 'PENDING'.",
            ka: "Uppercase<StringType> არის სტრინგებზე მანიპულაციისთვის განკუთვნილი ერთ-ერთი ჩაშენებული მაკრო-ტიპი. მას ტიპების დონეზე გადააქვს სტრინგ-ლიტერალი დიდ ასოებში. Upper ტიპი გახდება ზუსტად 'PENDING'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype",
        docLabel: "Uppercase<StringType> — Utility Types"
    },
    {
        id: 77,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каков результат работы встроенного строкового типа Lowercase<StringType>?",
            en: "What is the operational output of the intrinsic Lowercase<StringType> utility type?",
            ka: "რა არის ჩაშენებული სტრინგული ტიპის Lowercase<StringType> მუშაობის შედეგი?"
        },
        code: `<span class="kw">type</span> <span class="type">Role</span> = <span class="str">"ADMIN"</span>;
<span class="kw">type</span> <span class="type">LowRole</span> = <span class="type">Lowercase</span>&lt;<span class="type">Role</span>&gt;;`,
        options: [
            { ru: "Конвертирует все символы строки-литерала в нижний регистр", en: "Converts every character of the string literal sequence into lowercase formatting", ka: "სტრინგ-ლიტერალის ყველა სიმბოლოს გადააქვს დაბალ რეგისტრში (პატარა ასოებში)" },
            { ru: "Удаляет все заглавные буквы из исходной строки", en: "Removes all capital letters from the source string, shortening the shape", ka: "აშორებს ყველა დიდ ასოს საწყისი სტრინგიდან" },
            { ru: "Проверяет, написана ли строка маленькими буквами, возвращая boolean", en: "Statically checks if the string is lowercase, resolving to a boolean type outcome", ka: "ამოწმებს, არის თუ არა სტრინგი დაწერილი პატარა ასოებით და აბრუნებს boolean-ს" },
            { ru: "Заменяет пробелы на дефисы внутри литерала", en: "Replaces empty whitespace intervals with explicit dash separators inside the literal", ka: "სტრინგში არსებულ გამოტოვებებს (spaces) ანაცვლებს დეფისებით" },
        ],
        correct: 0,
        explanation: {
            ru: "Аналогично Uppercase, утилита Lowercase<StringType> берет строковый литерал и переводит все его символы в нижний регистр. В данном случае LowRole преобразуется в литеральный тип 'admin'.",
            en: "Identical in behavior to Uppercase, Lowercase<StringType> accepts an active template string literal and converts every symbol down to lower-case. Here, 'LowRole' resolves perfectly into the type literal 'admin'.",
            ka: "Uppercase-ის მსგავსად, Lowercase<StringType> უტილიტა იღებს სტრინგულ ლიტერალს და მის ყველა სიმბოლოს გადააქვს პატარა ასოებში. მოცემულ შემთხვევაში LowRole გახდება 'admin' ტიპის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype",
        docLabel: "Lowercase<StringType> — Utility Types"
    },
    {
        id: 78,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Какое преобразование совершает утилита Capitalize<StringType>?",
            en: "What transformation does the Capitalize<StringType> utility perform?",
            ka: "რა გარდაქმნას ახორციელებს Capitalize<StringType> უტილიტა?"
        },
        code: `<span class="kw">type</span> <span class="type">UserTag</span> = <span class="str">"hello"</span>;
<span class="kw">type</span> <span class="type">CapTag</span> = <span class="type">Capitalize</span>&lt;<span class="type">UserTag</span>&gt;;`,
        options: [
            { ru: "Преобразует первый символ строкового литерала в верхний регистр", en: "Converts the very first character of the string literal into an uppercase symbol", ka: "სტრინგ-ლიტერალის მხოლოდ პირველ სიმბოლოს გადააქვს მაღალ რეგისტრში (დიდ ასოში)" },
            { ru: "Переводит всю строку в верхний регистр", en: "Translates the entirety of the targeted string content into full uppercase character notation", ka: "მთლიან სტრინგს გადააქვს მაღალ რეგისტრში" },
            { ru: "Оборачивает строку в теги CamelCase", en: "Wraps and formats the textual representation into standard CamelCase architecture", ka: "სტრინგს აქცევს CamelCase ფორმატში" },
            { ru: "Добавляет точку в конце строки-литерала", en: "Appends a terminal period punctuation dot onto the end of the literal string shape", ka: "სტრინგის ბოლოში ამატებს წერტილს" },
        ],
        correct: 0,
        explanation: {
            ru: "Служебный тип Capitalize<StringType> берет строковый литерал и изменяет регистр исключительно его первого символа на заглавный. Тип CapTag превратится в литерал 'Hello'. Очень удобно при автогенерации названий геттеров (например, get + Capitalize<Property>).",
            en: "The Capitalize<StringType> helper updates a string literal by shifting specifically the first character into its uppercase equivalent. 'CapTag' yields 'Hello', which is excellent for programmatic generation of getter signatures.",
            ka: "სერვისული ტიპი Capitalize<StringType> იღებს სტრინგულ ლიტერალს და ცვლის მხოლოდ მისი პირველი სიმბოლოს რეგისტრს დიდ ასოზე. CapTag გახდება 'Hello'. მოსახერხებელია გეტერების სახელების ავტოგენერაციისთვის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype",
        docLabel: "Capitalize<StringType> — Utility Types"
    },
    {
        id: 79,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Каков результат трансформации строки типом Uncapitalize<StringType>?",
            en: "What is the outcome of a string transformation via the Uncapitalize<StringType> type?",
            ka: "რა არის სტრინგის გარდაქმნის შედეგი Uncapitalize<StringType> ტიპის მიერ?"
        },
        code: `<span class="kw">type</span> <span class="type">Event</span> = <span class="str">"OnClick"</span>;
<span class="kw">type</span> <span class="type">LowEvent</span> = <span class="type">Uncapitalize</span>&lt;<span class="type">Event</span>&gt;;`,
        options: [
            { ru: "Преобразует первый символ строкового литерала в нижний регистр", en: "Converts the first character of the string literal value into its lowercase form", ka: "სტრინგ-ლიტერალის პირველ სიმბოლოს გადააქვს დაბალ რეგისტრში (პატარა ასოში)" },
            { ru: "Удаляет все заглавные буквы, где бы они ни находились", en: "Strips down all capital characters regardless of position inside the literal string", ka: "აშორებს ყველა დიდ ასოს, მიუხედავად იმისა, თუ სად იმყოფებიან ისინი" },
            { ru: "Делает маленькими буквами только последний символ строки", en: "Forces strictly the final trailing character of the target string to become lowercase", ka: "პატარა ასოდ აქცევს სტრინგის მხოლოდ ბოლო სიმბოლოს" },
            { ru: "Превращает строку в числовой хэш", en: "Processes the literal structure and compiles it down into a basic numeric hash key", ka: "სტრინგს გარდაქმნის რიცხვით ჰეშად" },
        ],
        correct: 0,
        explanation: {
            ru: "Утилита Uncapitalize<StringType> противоположна Capitalize. Она берет строку-литерал и переводит исключительно её первую букву в нижний регистр. В примере выше LowEvent станет равен типу 'onClick'.",
            en: "The Uncapitalize<StringType> built-in functions as the inverse of Capitalize. It processes a literal layout, pulling down only the initial letter into lowercase. In our example, 'LowEvent' equates strictly to 'onClick'.",
            ka: "Uncapitalize<StringType> უტილიტა არის Capitalize-ის საპირისპირო. იგი იღებს სტრინგ-ლიტერალს და მხოლოდ მის პირველ ასოს გადააქვს პატარა ასოში. მოცემულ მაგალითში LowEvent გახდება 'onClick'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#uncapitalizestringtype",
        docLabel: "Uncapitalize<StringType> — Utility Types"
    },
    {
        id: 80,
        category: { ru: "Utility Types", en: "Utility Types", ka: "Utility ტიპები" },
        tag: "utility-types",
        question: {
            ru: "Как утилита NonNullable ведет себя при обработке типов союзов (Unions), включающих в себя массивы или объекты?",
            en: "How does the NonNullable utility behave when filtering union types that include arrays or objects?",
            ka: "როგორ იქცევა NonNullable უტილიტა გაერთიანების (Union) ტიპების დამუშავებისას, რომლებიც შეიცავენ მასივებს ან ობიექტებს?"
        },
        code: `<span class="kw">type</span> <span class="type">Sample</span> = <span class="type">string</span>[] | <span class="type">null</span> | { id: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">NonNullable</span>&lt;<span class="type">Sample</span>&gt;;`,
        options: [
            { ru: "Удаляет только null, оставляя массивы и объекты нетронутыми", en: "Removes only null, leaving arrays and object structural shapes completely intact", ka: "აშორებს მხოლოდ null-ს, ხოლო მასივებსა და ობიექტებს ტოვებს ხელუხლებლად" },
            { ru: "Рекурсивно делает все свойства объектов внутри союза non-nullable", en: "Recursively processes and forces all inner object fields inside the union to be non-nullable", ka: "რეკურსიულად ხდის გაერთიანების შიგნით არსებული ობიექტების ყველა თვისებას non-nullable-ს" },
            { ru: "Превращает весь тип в пустой массив строк string[]", en: "Flattens and reduces the entire structural type down into a simple string[] array", ka: "მთლიან ტიპს გარდაქმნის სტრინგების ცარიელ მასივად string[]" },
            { ru: "Вызывает синтаксическую ошибку, так как работает только с примитивами", en: "Triggers a syntax error because it is technically restricted to processing primitives", ka: "იწვევს სინტაქსურ შეცდომას, რადგან მუშაობს მხოლოდ პრიმიტივებზე" },
        ],
        correct: 0,
        explanation: {
            ru: "NonNullable<T> работает поверхностно на уровне элементов Union. Она не заглядывает внутрь сложных структур вроде объектов или массивов. Она просто отсекает null и undefined верхнего уровня, поэтому тип Result станет равен 'string[] | { id: number }'.",
            en: "NonNullable<T> operates flatly across the top-most union layers. It does not map recursively into nested objects or array items. It safely strips away high-level null/undefined targets, converting 'Result' into 'string[] | { id: number }'.",
            ka: "NonNullable<T> მუშაობს ზედაპირულად, Union-ის ელემენტების დონეზე. იგი არ იხედება რეკურსიულად ობიექტების ან მასივების შიგნით. იგი უბრალოდ შლის ზედა დონის null-სა და undefined-ს, ამიტომ Result გახდება 'string[] | { id: number }'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype",
        docLabel: "NonNullable<T> — Utility Types"
    },

    // 5. UNION & INTERSECTION
    {
        id: 81,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Что представляет собой концепция Discriminated Union (размеченное объединение)?",
            en: "What is a Discriminated Union pattern?",
            ka: "რას წარმოადგენს Discriminated Union (მონიშნული გაერთიანება) კონცეფცია?"
        },
        code: `<span class="kw">type</span> <span class="type">Response</span> =
  | { status: <span class="str">'success'</span>; data: <span class="type">string</span> }
  | { status: <span class="str">'error'</span>; message: <span class="type">string</span> };`,
        options: [
            { ru: "Объединение объектов, имеющих общее поле с уникальными литеральными значениями", en: "A union of object shapes sharing a common property containing distinct literal values", ka: "ობიექტების გაერთიანება, რომელთაც აქვთ საერთო ველი უნიკალური ლიტერალური მნიშვნელობებით" },
            { ru: "Комбинация строк и чисел через оператор амперсанда (&)", en: "A logical mix of strings and digits bound by an ampersand (&)", ka: "სტრიქონებისა და რიცხვების კომბინაცია ამპერსანდის (&) ოპერატორით" },
            { ru: "Тип данных, автоматически проверяющий сетевые ответы", en: "An automation framework parsing server JSON arrays", ka: "მონაცემთა ტიპი, რომელიც ავტომატურად ამოწმებს ქსელურ პასუხებს" },
            { ru: "Массив, содержащий исключительно разные примитивы", en: "An array capturing multiple primitive structures", ka: "მასივი, რომელიც შეიცავს განსხვავებულ პრიმიტივებს" },
        ],
        correct: 0,
        explanation: {
            ru: "Discriminated Union — мощнейший паттерн TypeScript. Это объединение (Union) объектов, у каждого из которых есть общее свойство (дискриминант, разметка), содержащее уникальный строковый или числовой литерал (в примере это status: 'success' и status: 'error'). Обнаружив проверку этого поля (через if или switch), компилятор TypeScript мгновенно понимает, какая именно структура находится перед ним, и открывает доступ к специфичным полям вроде data или message.",
            en: "A Discriminated Union is an algebraic data type pattern. It requires a group of objects inside a union type signature to contain an identical structural property key (the discriminant) initialized to explicit literal variations (e.g., status: 'success' vs 'error'). When code filters this exact discriminator using an 'if' or 'switch', TS safely narrows the object down.",
            ka: "Discriminated Union არის TypeScript-ის უძლიერესი პატერნი. ეს არის ობიექტების გაერთიანება (Union), სადაც თითოეულს აქვს საერთო ველი (დისკრიმინანტი), რომელიც შეიცავს უნიკალურ ლიტერალს (მაგალითში status: 'success' და 'error'). ამ ველის შემოწმებისას (if ან switch-ით), TS ხვდება თუ რომელი სტრუქტურაა მასთან და გვაძლევს წვდომას შესაბამის ველებზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
        docLabel: "Discriminated Unions — Handbook"
    },

    {
        id: 82,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Какую структуру будет иметь объект типа С, созданный через оператор пересечения (&)?",
            en: "What structural shape will an object of type C have when built using the intersection operator (&)?",
            ka: "რა სტრუქტურა ექნება C ტიპის ობიექტს, რომელიც შექმნილია გადაკვეთის (&) ოპერატორით?"
        },
        code: `<span class="kw">type</span> <span class="type">A</span> = { foo: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">B</span> = { bar: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">C</span> = <span class="type">A</span> &amp; <span class="type">B</span>;`,
        options: [
            { ru: "Объект должен содержать И свойство foo, И свойство bar одновременно", en: "The object must simultaneously contain BOTH the foo property AND the bar property", ka: "ობიექტი ერთდროულად უნდა შეიცავდეს როგორც foo, ასევე bar თვისებას" },
            { ru: "Объект может содержать либо foo, либо bar, но не оба сразу", en: "The object can contain either foo or bar, but strictly not both together", ka: "ობიექტი შეიძლება შეიცავდეს ან foo-ს, ან bar-ს, მაგრამ არა ორივეს ერთად" },
            { ru: "Свойства foo и bar становятся необязательными (optional)", en: "Both foo and bar fields automatically become optional modifiers", ka: "foo და bar თვისებები ავტომატურად ხდება არასავალდებულო (optional)" },
            { ru: "Такой синтаксис вызовет ошибку компиляции", en: "This syntax pattern triggers an immediate compilation failure", ka: "ასეთი სინტაქსი გამოიწვევს კომპილაციის შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор пересечения `&` (Intersection) объединяет несколько типов в один. Объект результирующего типа `C` обязан удовлетворять контрактам обоих исходных типов, то есть содержать все поля из `A` и все поля из `B`.",
            en: "The intersection operator `&` merges multiple type definitions into one. A value of the resulting type `C` is strictly required to satisfy the contracts of all combined shapes, meaning it must hold every property from both `A` and `B`.",
            ka: "გადაკვეთის `&` ოპერატორი აერთიანებს რამდენიმე ტიპს ერთში. მიღებული `C` ტიპის ობიექტი ვალდებულია აკმაყოფილებდეს ორივე საწყისი ტიპის კონტრაქტს, ანუ შეიცავდეს ყველა ველს `A`-დან და `B`-დან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Intersection Types — Handbook"
    },

    {
        id: 83,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "В какой тип превратится свойство id в результате пересечения этих двух объектов?",
            en: "What type will the id property evaluate to as a result of intersecting these two object types?",
            ka: "რა ტიპად გადაიქცევა id თვისება ამ ორი ობიექტის გადაკვეთის შედეგად?"
        },
        code: `<span class="kw">type</span> <span class="type">X</span> = { id: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Y</span> = { id: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Z</span> = <span class="type">X</span> &amp; <span class="type">Y</span>;`,
        options: [
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 2,
        explanation: {
            ru: "При пересечении (`&`) объектов их одноименные свойства также пересекаются. Поскольку свойство `id` пытается быть одновременно и `string`, и `number`, а пересечение несовместимых примитивов невозможно, TypeScript превращает тип поля `id` в `never`.",
            en: "When intersecting (`&`) objects, properties with matching keys are intersected as well. Because `id` attempts to resolve as both a `string` and a `number` simultaneously—which is impossible for primitives—TypeScript collapses the field type to `never`.",
            ka: "ობიექტების გადაკვეთისას (`&`) მათი ერთნაირი სახელის მქონე თვისებებიც იკვეთება. ვინაიდან `id` თვისება ცდილობს ერთდროულად იყოს `string`-იც და `number`-იც, TS ამ ველის ტიპს გარდაქმნის `never`-ად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Intersection Types — Handbook"
    },

    {
        id: 84,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "К каким свойствам аргумента obj позволит обратиться TypeScript БЕЗ предварительного сужения (narrowing) типа?",
            en: "Which properties of the obj argument will TypeScript allow access to WITHOUT prior type narrowing?",
            ka: "არგუმენტ obj-ის რომელ თვისებებთან დაუშვებს TypeScript წვდომას ტიპის წინასწარი შევიწროების (narrowing) გარეშე?"
        },
        code: `<span class="kw">type</span> <span class="type">Bird</span> = { fly: <span class="fn">()</span> =&gt; <span class="type">void</span>; name: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Fish</span> = { swim: <span class="fn">()</span> =&gt; <span class="type">void</span>; name: <span class="type">string</span> };
<span class="kw">function</span> <span class="fn">move</span>(obj: <span class="type">Bird</span> | <span class="type">Fish</span>) {
  <span class="c">// К какому полю есть прямой доступ?</span>
}`,
        options: [
            { ru: "К любому свойству: fly, swim или name", en: "To any property: fly, swim, or name interchangeably", ka: "ნებისმიერ თვისებასთან: fly, swim ან name" },
            { ru: "Только к общим свойствам, которые есть во всех членах объединения (name)", en: "Strictly to shared properties present across all union members (name)", ka: "მხოლოდ საერთო თვისებებთან, რომლებიც გაერთიანების ყველა წევრშია (name)" },
            { ru: "Ни к одному, сначала обязателен оператор typeof", en: "To none; using the typeof operator is strictly mandatory first", ka: "არცერთთან, თავიდან აუცილებელია typeof ოპერატორი" },
            { ru: "Только к методам fly и swim", en: "Exclusively to the fly and swim method closures", ka: "მხოლოდ fly და swim მეთოდებთან" }
        ],
        correct: 1,
        explanation: {
            ru: "Для Union-типов (`|`) без сужения доступно только то, что является общим «знаменателем». TypeScript гарантирует безопасность: так как у нас может оказаться либо птица, либо рыба, мы можем без рисков прочитать только общее поле `name`.",
            en: "For union types (`|`), you can only access properties that are common to all members of the union without narrowing first. TypeScript enforces this to guarantee safety, as accessing `fly` on a `Fish` would crash at runtime.",
            ka: "Union ტიპებისთვის (`|`) შევიწროების გარეშე ხელმისაწვდომია მხოლოდ ის თვისებები, რომლებიც საერთოა გაერთიანების ყველა წევრისთვის. ჩვენ შეგვიძლია უსაფრთხოდ წავიკითხოთ მხოლოდ საერთო ველი `name`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types",
        docLabel: "Working with Union Types — Handbook"
    },

    {
        id: 85,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Какой тип данных будет иметь переменная pet внутри блока if после проверки оператором in?",
            en: "What data type will the pet variable resolve to inside the if block after the in operator check?",
            ka: "რა ტიპის მონაცემი იქნება pet ცვლადი if ბლოკის შიგნით in ოპერატორით შემოწმების შემდეგ?"
        },
        code: `<span class="kw">type</span> <span class="type">Cat</span> = { meow: <span class="fn">()</span> =&gt; <span class="type">void</span> };
<span class="kw">type</span> <span class="type">Dog</span> = { bark: <span class="fn">()</span> =&gt; <span class="type">void</span> };
<span class="kw">function</span> <span class="fn">speak</span>(pet: <span class="type">Cat</span> | <span class="type">Dog</span>) {
  <span class="kw">if</span> (<span class="str">'meow'</span> <span class="kw">in</span> pet) {
    <span class="c">// Какой тип у pet здесь?</span>
  }
}`,
        options: [
            { ru: "Cat", en: "Cat", ka: "Cat" },
            { ru: "Dog", en: "Dog", ka: "Dog" },
            { ru: "Cat | Dog (тип не изменится)", en: "Cat | Dog (the type remains unaltered)", ka: "Cat | Dog (ტიპი არ შეიცვლება)" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор JavaScript `in` проверяет наличие свойства в объекте. TypeScript умеет использовать его в качестве Type Guard (защитника типа). Так как свойство `meow` принадлежит только типу `Cat`, внутри блока `if` тип переменной успешно сужается до `Cat`.",
            en: "The JavaScript `in` operator checks if a property exists on an object. TypeScript leverages this as a powerful type guard. Since the `meow` field belongs strictly to the `Cat` shape, the compiler narrows `pet` to `Cat` inside the `if` block.",
            ka: "JavaScript-ის `in` ოპერატორი ამოწმებს თვისების არსებობას ობიექტში. TS მას იყენებს როგორც Type Guard-ს. რადგან `meow` თვისება მხოლოდ `Cat` ტიპს ეკუთვნის, if ბლოკში ცვლადი ვიწროვდება `Cat`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing",
        docLabel: "The in operator narrowing — Handbook"
    },

    {
        id: 86,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Можно ли присвоить какое-либо значение переменной obj, объявленной как пересечение двух примитивов string & boolean?",
            en: "Can you assign any value to a variable obj declared as an intersection of two primitives string & boolean?",
            ka: "შესაძლებელია თუ არა რაიმე მნიშვნელობის მინიჭება obj ცვლადისთვის, რომელიც გამოცხადებულია როგორც ორი პრიმიტივის გადაკვეთა string & boolean?"
        },
        code: `<span class="kw">let</span> obj: <span class="type">string</span> &amp; <span class="type">boolean</span>;`,
        options: [
            { ru: "Да, строку, приведенную к булеву типу", en: "Yes, any string explicitly cast to a boolean representation", ka: "დიახ, ბულევანურ ტიპამდე მიყვანილ სტრიქონს" },
            { ru: "Нет, такое пересечение невозможно, тип превращается в never, и ему нельзя ничего присвоить", en: "No, such an intersection is impossible; the type evaluates to never, making assignments impossible", ka: "არა, ასეთი გადაკვეთა შეუძლებელია, ტიპი ხდება never და მას ვერაფერს მივანიჭებთ" },
            { ru: "Да, значения true или false", en: "Yes, either true or false boolean literals directly", ka: "დიახ, მნიშვნელობებს true ან false" },
            { ru: "Да, только null или undefined", en: "Yes, strictly null or undefined primitives if permitted", ka: "დიახ, მხოლოდ null ან undefined-ს" }
        ],
        correct: 1,
        explanation: {
            ru: "Примитивные типы данных в JavaScript взаимно исключают друг друга. Переменная не может быть строкой и логическим значением одновременно, поэтому пересечение `string & boolean` дает тип `never`, которому невозможно присвоить значение.",
            en: "Primitive types are mutually exclusive. A runtime value cannot simultaneously be a string and a boolean. Therefore, intersecting `string & boolean` yields the empty type `never`, meaning no values can ever be assigned to it.",
            ka: "JavaScript-ში პრიმიტიული ტიპები ურთიერთგამომრიცხავია. მნიშვნელობა ვერ იქნება ერთდროულად სტრიქონიც და ბულევანიც. ამიტომ `string & boolean` გვაძლევს `never` ტიპს, რომელსაც ვერაფერს მივანიჭებთ."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#unions",
        docLabel: "Intersection of Primitives — Handbook"
    },

    {
        id: 87,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "В чем главное отличие в поведении при обработке конфликтов имЕН между extends в интерфейсах и & в алиасах типов?",
            en: "What is the principal behavioral difference in error handling between interface extends and type intersection (&) during property naming conflicts?",
            ka: "რა არის მთავარი განსხვავება ქცევაში ინტერფეისების extends-სა და ტიპების ალიასების &-ს შორის სახელების კონფლიქტის დამუშავებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">A</span> { id: <span class="type">number</span> }
<span class="kw">interface</span> <span class="type">B</span> <span class="kw">extends</span> <span class="type">A</span> { id: <span class="type">string</span> } <span class="c">// Что будет тут?</span>`,
        options: [
            { ru: "Интерфейс выдаст ошибку компиляции при несовместимости типов, а пересечение (&) молча создаст тип never", en: "The interface will instantly trigger a compile error on incompatible types, while intersection (&) silently produces never", ka: "ინტერფეისი გამოიტანს კომპილაციის შეცდომას, ხოლო გადაკვეთა (&) ჩუმად შექმნის never ტიპს" },
            { ru: "Пересечение (&) выдаст ошибку, а интерфейс автоматически приведет типы", en: "Intersection (&) flags a hard error, while interfaces automatically cast fields smoothly", ka: "გადაკვეთა (&) გამოიტანს შეცდომას, ხოლო ინტერფეისი ავტომატურად მიიყვანს ტიპებს" },
            { ru: "Оба синтаксиса ведут себя абсолютно одинаково", en: "Both syntaxes behave identically across all compilation scenarios", ka: "ორივე სინტაქსი აბსოლუტურად ერთნაირად იქცევა" },
            { ru: "Интерфейсы запрещено расширять другими интерфейсами", en: "Interfaces are fundamentally barred from extending alternative interfaces", ka: "ინтерფეისების გაფართოება სხვა ინტერფეისებით აკრძალულია" }
        ],
        correct: 0,
        explanation: {
            ru: "Интерфейсы проверяют совместимость при наследовании: если тип переопределяемого поля несовместим с базовым, TypeScript сразу выдаст ошибку. Алиасы типов через `&` ошибки не выдают, они просто создают пересечение, которое для несовместимых полей превратится в `never`.",
            en: "Interfaces detect conflicts early during inheritance; if you override a field with an incompatible signature, TS flags a compile error. Type intersections via `&` never crash; they silently merge the fields, collapsing collisions to `never`.",
            ka: "ინტერფეისები მემკვიდრეობითობისას მკაცრად ამოწმებენ თავსებადობას და შეუსაბამობისას გამოაქვთ შეცდომა. ტიპების ალიასები კი `&`-ით შეცდომას არ აჩვენებენ, ისინი უბრალოდ ქმნიან გადაკვეთას, რომელიც შეუთავსებლობისას `never` გახდება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",
        docLabel: "Differences Between Types and Interfaces — Handbook"
    },

    {
        id: 88,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Какой тип данных автоматически выведет TypeScript для массива mixedItems?",
            en: "What combined type will TypeScript automatically infer for the mixedItems array variable?",
            ka: "რა ტიპის მონაცემს განსაზღვრავს ავტომატურად TypeScript mixedItems მასივისთვის?"
        },
        code: `<span class="kw">const</span> mixedItems = [<span class="num">1</span>, <span class="str">"apple"</span>, <span class="num">3</span>];`,
        options: [
            { ru: "any[]", en: "any[]", ka: "any[]" },
            { ru: "(string | number)[]", en: "(string | number)[]", ka: "(string | number)[]" },
            { ru: "unknown[]", en: "unknown[]", ka: "unknown[]" },
            { ru: "[number, string, number]", en: "[number, string, number]", ka: "[number, string, number]" }
        ],
        correct: 1,
        explanation: {
            ru: "Когда массив содержит элементы разных типов, TypeScript применяет алгоритм Best Common Type и выводит Union тип для элементов массива. В данном случае это массив, содержащий элементы типа `string` или `number` — `(string | number)[]`.",
            en: "When an array literal expression hosts mixed types, TypeScript executes its 'Best Common Type' resolution algorithm, producing a union of the elements. Here, it deduces an array of strings or numbers: `(string | number)[]`.",
            ka: "როდესაც მასივი შეიცავს სხვადასხვა ტიპის ელემენტებს, TS იყენებს Best Common Type ალგორითმს და გამოაქვს Union ტიპი მასივის ელემენტებისთვის. ამ შემთხვევაში ეს არის `(string | number)[]`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/type-inference.html#best-common-type",
        docLabel: "Best Common Type — Handbook"
    },

    {
        id: 89,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Каким образом строгое сравнение (===) влияет на тип переменной из Union-объединения?",
            en: "How does a strict equality comparison (===) affect a variable sourced from a Union type?",
            ka: "როგორ მოქმედებს მკაცრი შედარება (===) Union გაერთიანებიდან აღებულ ცვლადზე?"
        },
        code: `<span class="kw">function</span> <span class="fn">check</span>(padding: <span class="type">string</span> | <span class="type">number</span>) {
  <span class="kw">if</span> (padding === <span class="num">10</span>) {
    <span class="c">// Какой точный тип у padding здесь?</span>
  }
}`,
        options: [
            { ru: "Литеральный тип 10 (суженный из number)", en: "The literal type 10 (narrowed down from number)", ka: "ლიტერალური ტიპი 10 (შევიწროებული number-იდან)" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript проверки равенства через `===` или `!==` работают как мощный механизм сужения типов (Equivalence Narrowing). Компилятор понимает, что если условие выполнено, `padding` гарантированно равен числу `10`, сужая тип до литерального числового значения.",
            en: "In TypeScript, conditional checks using strict equality `===` or `!==` act as an equivalence narrowing mechanism. The compiler reasons that if the branch executes, `padding` must evaluate strictly to the numeric literal `10`.",
            ka: "TypeScript-ში ტოლობის შემოწმება `===` ან `!==` ოპერატორებით მუშაობს როგორც ტიპების შევიწროების მექანიზმი. კომპილატორი ხვდება, რომ თუ პირობა სრულდება, `padding` გარანტირებულად ლიტერალური `10`-ია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing",
        docLabel: "Equality Narrowing — Handbook"
    },

    {
        id: 90,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Какой результирующий тип получит переменная с благодаря оператору ??",
            en: "What final type will the variable c resolve to thanks to the evaluation of the ?? operator?",
            ka: "რა საბოლოო ტიპს მიიღებს c ცვლადი ?? ოპერატორის წყალობით?"
        },
        code: `<span class="kw">let</span> a: <span class="type">string</span> | <span class="type">null</span> = <span class="kw">null</span>;
<span class="kw">let</span> c = a ?? <span class="str">"default"</span>;`,
        options: [
            { ru: "string | null", en: "string | null", ka: "string | null" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "void", en: "void", ka: "void" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор Nullish Coalescing (`??`) возвращает правый операнд только в том случае, если левый равен `null` или `undefined`. TypeScript знает об этом поведении рантайма, поэтому исключает `null` из Union-типа переменной `a`, присваивая `c` чистый тип `string`.",
            en: "The nullish coalescing operator (`??`) falls back to the right-hand operand only when the left side resolves to `null` or `undefined`. TypeScript mirrors this runtime rule, stripping `null` from the union to infer a clean `string` type for `c`.",
            ka: "Nullish Coalescing (`??`) ოპერატორი აბრუნებს მარჯვენა ოპერანდს მხოლოდ მაშინ, როდესაც მარცხენა არის `null` ან `undefined`. TS ითვალისწინებს ამას და გამორიცხავს `null`-ს, რითაც `c`-ს ანიჭებს სუფთა `string` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined",
        docLabel: "Nullish Coalescing — Handbook"
    },

    {
        id: 91,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Что описывает тип CustomType, полученный путем пересечения структуры с индексной сигнатурой и конкретного объекта?",
            en: "What does the CustomType type describe, constructed by intersecting an index signature layout with an explicit object shape?",
            ka: "რას აღწერს CustomType ტიპი, რომელიც მიღებულია ინდექსური სიგნატურის მქონე სტრუქტურისა და კონკრეტული ობიექტის გადაკვეთით?"
        },
        code: `<span class="kw">type</span> <span class="type">Dictionary</span> = { [key: <span class="type">string</span>]: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Extra</span> = { version: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">CustomType</span> = <span class="type">Dictionary</span> &amp; <span class="type">Extra</span>;`,
        options: [
            { ru: "Объект, у которого все динамические ключи должны возвращать number, и обязательно присутствует числовое поле version", en: "An object where all dynamic keys must return a number, and a numeric version field is strictly required", ka: "ობიექტს, სადაც ყველა დინამიკური გასაღები უნდა აბრუნებდეს number-ს და აუცილებლად არსებობს რიცხვითი ველი version" },
            { ru: "Массив чисел, содержащий один элемент со строковым именем version", en: "An array of numbers holding exactly one item tagged with a string version label", ka: "რიცხვების მასივს, რომელიც შეიცავს ერთ ელემენტს სტრიქონული სახელით version" },
            { ru: "Тип данных, полностью эквивалентный any", en: "A dynamic data structure completely equivalent to the broad any fallback", ka: "მონაცემთა ტიპს, რომელიც სრულიად ეკვივალენტურია any ტიპის" },
            { ru: "Код вызовет ошибку, так как нельзя пересекать индексные сигнатуры", en: "This syntax produces a compile error because intersecting index signatures is forbidden", ka: "კოდი გამოიწვევს შეცდომას, რადგან ინდექსური სიგნატურების გადაკვეთა აკრძალულია" }
        ],
        correct: 0,
        explanation: {
            ru: "Пересечение успешно объединяет требования обеих структур. `CustomType` описывает словарь, в котором могут быть любые строковые ключи со значениями типа `number`, но при этом поле `version` гарантированно обязано присутствовать.",
            en: "The intersection successfully merges the rules of both structures. `CustomType` describes a dictionary that can safely house arbitrary string keys mapping to `number` values, while guaranteeing that a numeric `version` field is explicitly defined.",
            ka: "გადაკვეთა წარმატებით აერთიანებს ორივე სტრუქტურის მოთხოვნებს. `CustomType` აღწერს ლექსიკონს, სადაც ნებისმიერი სტრიქონული გასაღები აბრუნებს `number`-ს, და ამასთანავე `version` ველი გარანტირებულად უნდა არსებობდეს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
        docLabel: "Index Signatures — Handbook"
    },

    {
        id: 92,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Как ведет себя встроенная утилита Exclude при работе с Union-типом T?",
            en: "How does the built-in Exclude utility behave when filtering a Union type T?",
            ka: "როგორ იქცევა ჩაშენებული Exclude უტილიტა T Union-ტიპთან მუშაობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">All</span> = <span class="str">"click"</span> | <span class="str">"hover"</span> | <span class="str">"scroll"</span>;
<span class="kw">type</span> <span class="type">Filtered</span> = <span class="type">Exclude</span>&lt;<span class="type">All</span>, <span class="str">"scroll"</span>&gt;;`,
        options: [
            { ru: '"click" | "hover"', en: '"click" | "hover"', ka: '"click" | "hover"' },
            { ru: '"scroll"', en: '"scroll"', ka: '"scroll"' },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Утилита `Exclude<T, U>` создана для работы с Union-типами. Она последовательно обходит все члены объединения `T` и убирает из него те, которые могут быть присвоены типу `U`. В данном случае она убирает литерал `'scroll'`, оставляя остальные два.",
            en: "The utility `Exclude<T, U>` is tailored specifically for union distribution. It steps through each member of union `T` and filters out any item that is assignable to `U`. Here, it expels `'scroll'`, leaving a union of \"click\" | \"hover\".",
            ka: "`Exclude<T, U>` უტილიტა შექმნილია Union ტიპებთან მუშაობისთვის. იგი სათითაოდ გადის `T` გაერთიანების წევრებს და აშორებს მათ, ვინც თავსებადია `U` ტიპთან. მოცемულ მაგალითში იგი აშორებს `'scroll'` ლიტერალს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#excludet-u",
        docLabel: "Exclude Utility Type — Handbook"
    },

    {
        id: 93,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Для каких сущностей применим оператор instanceof при сужении типов в TypeScript?",
            en: "For which entities can the instanceof operator be applied to perform type narrowing in TypeScript?",
            ka: "რომელი ერთეულებისთვისაა გამოყენებადი instanceof ოპერატორი TypeScript-ში ტიპების შევიწროებისას?"
        },
        code: `<span class="kw">class</span> <span class="type">Manager</span> {}
<span class="kw">function</span> <span class="fn">process</span>(obj: <span class="type">Manager</span> | <span class="type">string</span>) {
  <span class="kw">if</span> (obj <span class="kw">instanceof</span> <span class="type">Manager</span>) { <span class="c">/* ... */</span> }
}`,
        options: [
            { ru: "Только для классов и функций-конструкторов, существующих в JavaScript рантайме", en: "Strictly for classes and constructor functions that exist at runtime in JavaScript", ka: "მხოლოდ კლასებისთვის და კონსტრუქტორი-ფუნქციებისთვის, რომლებიც არსებობენ JavaScript runtime-ში" },
            { ru: "Для любых интерфейсов TypeScript", en: "For any TypeScript interface constructs universally", ka: "ნებისმიერი TypeScript ინტერფეისისთვის" },
            { ru: "Для проверки примитивных типов вроде string и number", en: "For checking primitive scalar types like string and number directly", ka: "პრიმიტიული ტიპების შესამოწმებლად, როგორიცაა string და number" },
            { ru: "instanceof запрещен в TypeScript и заменен на typeof", en: "instanceof is deprecated in TypeScript and completely replaced by typeof", ka: "instanceof აკრძალულია TS-ში და ჩანაცვლებულია typeof-ით" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `instanceof` проверяет цепочку прототипов объекта в реальном рантайме JS. Поскольку интерфейсы и алиасы типов TypeScript исчезают после компиляции, `instanceof` можно использовать только с классами или встроенными объектами (Date, RegExp, Array).",
            en: "The `instanceof` operator evaluates an object's prototype chain live at runtime. Because TypeScript interfaces and type aliases are erased during compilation, `instanceof` can only be configured with actual classes or native runtime objects (like Date or Error).",
            ka: "`instanceof` ოპერატორი ამოწმებს ობიექტის პროტოტიპების ჯაჭვს რეალურ JS runtime-ში. ვინაიდან ინტერფეისები კომპილაციის შემდეგ ქრება, `instanceof`-ის გამოყენება შეიძლება მხოლოდ კლასებთან ან ჩაშენებულ ობიექტებთან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing",
        docLabel: "instanceof narrowing — Handbook"
    },

    {
        id: 94,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Какое требование предъявляет TypeScript к аргументам при вызове функции, являющейся Union-объединением двух сигнатур?",
            en: "What requirement does TypeScript enforce on function arguments when executing a function that is a Union of two call signatures?",
            ka: "რა მოთხოვნას აყენებს TypeScript არგუმენტების მიმართ ისეთი ფუნქციის გამოძახებისას, რომელიც წარმოადგენს ორი სიგნატურის Union გაერთიანებას?"
        },
        code: `<span class="kw">type</span> <span class="type">Fx</span> = ((a: <span class="type">string</span>) =&gt; <span class="type">void</span>) | ((a: <span class="type">number</span>) =&gt; <span class="type">void</span>);
<span class="kw">function</span> <span class="fn">run</span>(f: <span class="type">Fx</span>) {
  <span class="c">// Как правильно вызвать f?</span>
}`,
        options: [
            { ru: "В функцию нельзя передать ничего без предварительного сужения", en: "You cannot pass anything to the call without performing prior narrowing steps", ka: "ფუნქციაში ვერაფერს გადავცემთ ტიპის წინასწარი შევიწროების გარეშე" },
            { ru: "Можно передать пересечение типов аргументов (в данном случае string & number, что дает never)", en: "You can only pass an intersection of the parameter types (here string & number, which yields never)", ka: "შესაძლებელია არგუმენტების ტიპების გადაკვეთის გადაცემა (ამ შემთხვევაში string & number, რაც გვაძლევს never-ს)" },
            { ru: "Можно передать либо string, либо number в любой ситуации", en: "You can safely pass either a string or a number in any scenario untracked", ka: "ნებისმიერ სიტუაციაში შეიძლება გადაეცეს ან string, ან number" },
            { ru: "Функция автоматически принимает тип any", en: "The function parameter signature silently defaults to the any type layout", ka: "ფუნქცია ავტომატურად იღებს any ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "При вызове объединения функций параметры должны пересекаться (`&`). Так как аргумент первой требует `string`, а второй `number`, их пересечение превращается в `string & number` (`never`). Вызвать такую функцию напрямую без сужения типа нельзя.",
            en: "When calling a union of function types, the parameter contracts must intersect (`&`). Since one signature demands a `string` and the other a `number`, their intersection yields `never`. Direct invocation is blocked until the union is narrowed down.",
            ka: "ფუნქციების გაერთიანების გამოძახებისას პარამეტრები უნდა იკვეთებოდეს (`&`). ვინაიდან პირველი ითხოვს `string`-ს, მეორე კი `number`-ს, მათი გადაკვეთა ხდება `never`. ასეთი ფუნქციის პირდაპირ გამოძახება შევიწროების გარეშე შეუძლებელია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html",
        docLabel: "Unions of Functions — Handbook"
    },

    {
        id: 95,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Можно ли с помощью оператора пересечения (&) объединить интерфейс и алиас типа?",
            en: "Is it completely legal to intersect an interface and a type alias together using the intersection operator (&)?",
            ka: "შესაძლებელია თუ არა გადაკვეთის ოპერატორით (&) ინტერფეისისა და ტიპის ალიასის გაერთიანება?"
        },
        code: `<span class="kw">interface</span> <span class="type">IUser</span> { name: <span class="type">string</span> }
<span class="kw">type</span> <span class="type">TStatus</span> = { active: <span class="type">boolean</span> };
<span class="kw">type</span> <span class="type">FullProfile</span> = <span class="type">IUser</span> &amp; <span class="type">TStatus</span>;`,
        options: [
            { ru: "Да, оператор & может свободно пересекать любые объектные структуры, включая интерфейсы и типы", en: "Yes, the & operator can freely intersect any object structures, combining interfaces and types seamlessly", ka: "დიახ, & ოპერატორს თავისუფლად შეუძლია ნებისმიერი ობიექტური სტრუქტურის გადაკვეთა, ინტერფეისებისა და ტიპების ჩათვლით" },
            { ru: "Нет, пересекать можно только типы, созданные через ключевое слово type", en: "No, the intersection engine is restricted strictly to aliases created via the type keyword", ka: "არა, გადაკვეთა შეიძლება მხოლოდ type საკვანძო სიტყვით შექმნილი ტიპების" },
            { ru: "Код скомпилируется, но свойство active сотрется", en: "It compiles successfully, but the active field property is stripped from the contract", ka: "კოდი დაკომპილირდება, მაგრამ active თვისება წაიშლება" },
            { ru: "Интерфейсы разрешено комбинировать только через ключевое слово union", en: "Interfaces can only be combined utilizing an explicit union keyword modifier", ka: "ინტერფეისების კომბინირება ნებადართულია მხოლოდ union საკვანძო სიტყვით" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор пересечения `&` в TypeScript работает со структурами данных. Ему не важно, как именно была объявлена форма объекта — через `interface` или через `type alias`. Он успешно создаст новый тип, содержащий поля обоих контрактов.",
            en: "The intersection operator `&` evaluates structural contracts. It does not care whether a shape was originally declared using an `interface` or a `type alias`. It successfully merges them into a composite type enforcing fields from both contracts.",
            ka: "გადაკвეთის `&` ოპერატორი TypeScript-ში მუშაობს მონაცემთა სტრუქტურებთან. მისთვის მნიშვნელობა არ აქვს, თუ როგორ იქნა აღწერილი ობიექტის ფორმა — `interface`-ით თუ `type alias`-ით. იგი წარმატებით შექმნის ახალ ტიპს ორივე ველის შემცველობით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Intersection Types — Handbook"
    },

    {
        id: 96,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Что означает конструкция input is string в качестве возвращаемого значения функции-гарда?",
            en: "What does the input is string construct specify when used as the return type of a guard function?",
            ka: "რას ნიშნავს კონსტრუქცია input is string გარდ-ფუნქციის დაბრუნებული მნიშვნელობის სახით გამოყენებისას?"
        },
        code: `<span class="kw">function</span> <span class="fn">isString</span>(input: <span class="type">any</span>): input <span class="kw">is</span> <span class="type">string</span> {
  <span class="kw">return</span> <span class="kw">typeof</span> input === <span class="str">"string"</span>;
}`,
        options: [
            { ru: "Это предикат типа, который сообщает TypeScript, что при возврате true переменная input гарантированно является строкой", en: "It is a type predicate telling TypeScript that if true is returned, the input variable is guaranteed to be a string", ka: "ეს არის ტიპის პრედიკატი, რომელიც ეუბნება TS-ს, რომ true-ს დაბრუნებისას input ცვლადი გარანტირებულად სტრიქონია" },
            { ru: "Функция возвращает текстовую строку 'true' или 'false'", en: "The function is converted to return a literal text string holding 'true' or 'false'", ka: "ფუნქცია აბრუნებს ტექსტურ სტრიქონს 'true' ან 'false'" },
            { ru: "Конструкция заменяет стандартный вызов оператора return в JavaScript", en: "The statement acts as a custom syntax alternative replacing native runtime return logic", ka: "კონსტრუქცია ცვლის JavaScript-ში return ოპერატორის სტანდარტულ გამოძახებას" },
            { ru: "Предикаты можно использовать только внутри классов", en: "Type predicates are tightly scoped and can only be declared inside class blocks", ka: "პრედიკატების გამოყენება შესაძლებელია მხოლოდ კლასების შიგნით" }
        ],
        correct: 0,
        explanation: {
            ru: "Конструкция `parameterName is Type` называется пользовательским предикатом типа (User-Defined Type Guard). Она позволяет создавать кастомные функции проверки, после вызова которых в блоках `if` TypeScript автоматически сужает типы.",
            en: "The `parameterName is Type` construct defines a user-defined type guard. It allows building custom checking routines. When evaluated inside conditional branches, TypeScript uses it to confidently narrow down union types.",
            ka: "კონსტრუქციას `parameterName is Type` ეწოდება მომხმარებლის მიერ განსაზღვრული ტიპის პრედიკატი (User-Defined Type Guard). იგი საშუალებას იძლევა შევქმნათ შემოწმების ფუნქციები, რომელთა გამოძახების შემდეგ TS ავტომატურად ავიწროებს ტიპებს if ბლოკებში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
        docLabel: "Using type predicates — Handbook"
    },

    {
        id: 97,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Как вызов Array.isArray() влияет на переменную типа string | string[] внутри условного оператора?",
            en: "How does executing an Array.isArray() check affect a string | string[] union variable inside a conditional branch?",
            ka: "როგორ მოქმედებს Array.isArray()-ის გამოძახება string | string[] Union ტიპის ცვლადზე პირობითი ოპერატორის შიგნით?"
        },
        code: `<span class="kw">function</span> <span class="fn">process</span>(data: <span class="type">string</span> | <span class="type">string</span>[]) {
  <span class="kw">if</span> (<span class="type">Array</span>.<span class="fn">isArray</span>(data)) {
    <span class="c">// Какой тип у data здесь?</span>
  }
}`,
        options: [
            { ru: "string[]", en: "string[]", ka: "string[]" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "any[]", en: "any[]", ka: "any[]" },
            { ru: "Тип останется без изменений: string | string[]", en: "The type engine refuses to filter the value, leaving string | string[]", ka: "ტიპი დარჩება ცვლილებების გარეშე: string | string[]" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript встроенные глобальные методы JavaScript, такие как `Array.isArray`, имеют предопределенные сигнатуры с предикатами типов. Благодаря этому компилятор безошибочно сужает тип `data` до чистого массива `string[]` внутри блока if.",
            en: "In TypeScript, core global JavaScript APIs like `Array.isArray` are pre-typed with built-in type predicates. This allows the compiler to seamlessly narrow the union down to a clean `string[]` array inside the `if` block context.",
            ka: "TypeScript-ში ჩაშენებულ გლობალურ მეთოდებს, როგორიცაა `Array.isArray`, აქვთ წინასწარ განსაზღვრული სიგნატურები ტიპების პრედიკატებით. ამის წყალობით, კომპილატორი უშეცდომოდ ავიწროებს `data` ტიპს `string[]` მასივამდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
        docLabel: "Built-in Guard Narrowing — Handbook"
    },

    {
        id: 98,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Для чего используется присвоение переменной типа never в ветке default при проверке Discriminated Union?",
            en: "Why is a fallback assignment to a never type variable applied inside the default block during Discriminated Union exhaustive testing?",
            ka: "რისთვის გამოიყენება default შტოში never ტიპის ცვლადისთვის მნიშვნელობის მინიჭება Discriminated Union-ის შემოწმებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Shape</span> = { kind: <span class="str">'circle'</span> } | { kind: <span class="str">'square'</span> };
<span class="kw">function</span> <span class="fn">getArea</span>(s: <span class="type">Shape</span>) {
  <span class="kw">switch</span> (s.kind) {
    <span class="kw">case</span> <span class="str">'circle'</span>: <span class="kw">return</span> <span class="num">1</span>;
    <span class="kw">case</span> <span class="str">'square'</span>: <span class="kw">return</span> <span class="num">2</span>;
    <span class="kw">default</span>: <span class="kw">const</span> _exhaustiveCheck: <span class="type">never</span> = s;
  }
}`,
        options: [
            { ru: "Для исчерпывающей проверки (Exhaustiveness Checking): если в Shape добавят новый тип, код выдаст ошибку компиляции на строке default", en: "To guarantee exhaustiveness checking: if a new shape variant is introduced to Shape later, TS flags a compile error at the default line", ka: "სრული შემოწმებისთვის (Exhaustiveness Checking): თუ Shape-ში დაამატებენ ახალ ტიპს, კოდი გამოიტანს კომპილაციის შეცდომას default ხაზზე" },
            { ru: "Это требование JavaScript для ускорения работы switch-кейсов", en: "It represents a native JavaScript engine optimization rule accelerating switch routines", ka: "ეს არის JavaScript-ის მოთხოვნა switch-кейс-ების მუშაობის დასაჩქარებლად" },
            { ru: "Конструкция очищает оперативную память от объекта s", en: "The code expression targets memory allocation cleanup for the s object reference", ka: "კონსტრუქცია ასუფთავებს ოპერატიულ მეხსიერებას s ობიექტისგან" },
            { ru: "Код содержит ошибку, так как типу never нельзя присвоить объект", en: "The snippet is broken because an object layout can never satisfy a never type target", ka: "კოდი შეიცავს შეცდომას, რადგან never ტიპს ობიექტი ვერ მიენიჭება" }
        ],
        correct: 0,
        explanation: {
            ru: "Это паттерн 'исчерпывающей проверки'. Если мы обработали все кейсы Union-типа, в секции `default` тип переменной `s` сужается до `never`. Если в будущем в тип `Shape` добавят `{ kind: 'triangle' }`, но забудут добавить `case`, в ветку `default` придет объект типа 'triangle', возникнет ошибка компиляции (попытка присвоить triangle в never), что спасет от багов.",
            en: "This implements 'exhaustiveness checking'. When all union members are handled by earlier cases, the type of `s` in the `default` block reduces to `never`. If a `'triangle'` variant is added to `Shape` later but omitted in the switch, it hits `default`, failing the `never` assignment and alerting the engineer at compile-time.",
            ka: "ეს არის 'ამომწურავი შემოწმების' (Exhaustiveness Checking) პატერნი. თუ ჩვენ დავამუშავეთ Union ტიპის ყველა ქისი, `default` სექციაში `s`-ს ტიპი დავიწროვდება `never`-მდე. თუ მომავალში `Shape`-ში დაემატება ახალი ვარიანტი, მაგრამ switch-ში მის დამატებას დაივიწყებენ, default შტოში მოხდება შეცდომა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking",
        docLabel: "Exhaustiveness checking — Handbook"
    },

    {
        id: 99,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Что произойдет в рантайме JavaScript, если попытаться создать инстанс через оператор new от пересечения двух классов ClassA & ClassB?",
            en: "What occurs at runtime in JavaScript if you attempt to instantiate an object via the new operator from an intersection of two classes ClassA & ClassB?",
            ka: "რა მოხდება JavaScript runtime-ში, თუ ვეცდებით ობიექტის შექმნას new ოპერატორით ორი კლასის ClassA & ClassB გადაკვეთიდან?"
        },
        code: `<span class="kw">class</span> <span class="type">ClassA</span> {}
<span class="kw">class</span> <span class="type">ClassB</span> {}
<span class="kw">type</span> <span class="type">Intersected</span> = <span class="type">ClassA</span> &amp; <span class="type">ClassB</span>;
<span class="c">// Попытка создать инстанс в коде</span>`,
        options: [
            { ru: "Будет создан объект, содержащий методы обоих классов", en: "A hybrid object is instantiated containing prototype methods from both classes", ka: "შეიქმნება ობიექტი, რომელიც შეიცავს ორივე კლასის მეთოდებს" },
            { ru: "Произойдет ошибка компиляции, так как & — это чисто статический тип, конструктора в рантайме для него не существует", en: "A compile/runtime fault occurs; & represents a purely static type construct, meaning no unified runtime constructor exists", ka: "მოხდება შეცდომა; რადგან & არის წმინდად სტატიკური ტიპი, runtime-ში მისთვის ერთიანი კონსტრუქტორი არ არსებობს" },
            { ru: "Создастся пустой объект {}", en: "A simple blank object literal layout {} is constructed safely", ka: "შეიქმნება ცარიელი ობიექტი {}" },
            { ru: "Объект примет свойства только первого класса ClassA", en: "The allocated object instances only the fields bound to the first ClassA target", ka: "ობიექტი მიიღებს მხოლოდ პირველი კლასის ClassA თვისებებს" }
        ],
        correct: 1,
        explanation: {
            ru: "Пересечение `&` — это чисто виртуальная концепция системы типов TypeScript. В реальном скомпилированном JavaScript не существует механизма множественного наследования классов «из коробки». Вы не можете вызвать `new Intersected()`, так как `Intersected` — это тип, а не реальная функция-конструктор.",
            en: "The intersection operator `&` is an entirely static, virtual feature within TypeScript's type space. Compiled JavaScript does not support native multi-class inheritance out of the box. You cannot execute `new Intersected()` because `Intersected` is erased to a type declaration, leaving no actual executable constructor at runtime.",
            ka: "გადაკვეთა `&` არის TS-ის ტიპების სისტემის წმინდად ვირტუალური კონცეფცია. რეალურ, დაკომპილირებულ JavaScript-ში კლასების მრავალჯერადი მემკვიდრეობითობის მექანიზმი არ არსებობს. თქვენ ვერ გამოიძახებთ `new Intersected()`, რადგან ეს არის ტიპი და არა რეალური ფუნქცია-კონსტრუქტორი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Intersection Limitations — Handbook"
    },

    {
        id: 100,
        category: { ru: "Union & Intersection", en: "Union & Intersection", ka: "Union & Intersection" },
        tag: "union-intersection",
        question: {
            ru: "Каким станет поле id, если объединить через Union (|) объект с обязательным полем и объект, где этого поля нет вообще?",
            en: "What does the id property type resolve to if you Union (|) an object containing a required id field with an object layout where that field does not exist at all?",
            ka: "როგორი გახდება id ველი, თუ Union-ით (|) გავაერთიანებთ ობიექტს სავალდებულო id ველით და ობიექტს, სადაც ეს ველი საერთოდ არ არის?"
        },
        code: `<span class="kw">type</span> <span class="type">First</span> = { id: <span class="type">string</span>; name: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Second</span> = { name: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">UnionType</span> = <span class="type">First</span> | <span class="type">Second</span>;`,
        options: [
            { ru: "Поле id станет необязательным (optional), с типом string | undefined", en: "The id property becomes optional, implicit typed as string | undefined", ka: "id ველი გახდება არასავალდებულო (optional), ტიპით string | undefined" },
            { ru: "Поле id полностью удалится из типа UnionType", en: "The id property is forcefully expunged from the resulting UnionType contract completely", ka: "id ველი მთლიანად წაიშლება UnionType ტიპიდან" },
            { ru: "Поле id останется строго обязательным для обоих объектов", en: "The id property remains strictly mandatory across both compliant structures", ka: "id ველი დარჩება მკაცრად სავალდებულო ორივე ობიექტისთვის" },
            { ru: "Возникнет ошибка циклической зависимости типов", en: "The declaration triggers a critical circular reference type error", ka: "წარმოიქმნება ტიპების ციკლური დამოკიდებულების შეცდომა" }
        ],
        correct: 0,
        explanation: {
            ru: "В Union-типе объект может соответствовать либо первому, либо второму контракту. Поскольку во втором контракте поля `id` нет, TypeScript трактует его наличие в общем типе `UnionType` как необязательное свойство. Прямой доступ к нему вернет `string | undefined`.",
            en: "In a union type, a value can satisfy either the first or second contract shape. Because the second contract completely omits the `id` key, TypeScript models its presence on the combined `UnionType` as optional, resolving its naked property type lookup to `string | undefined`.",
            ka: "Union ტიპში ობიექტი შეიძლება შეესაბამებოდეს ან პირველ, ან მეორე კონტრაქტს. ვინაიდან მეორე კონტრაქტში `id` ველი საერთოდ არ არის, TS საერთო `UnionType` ტიპში მის არსებობას განიხილავს როგორც არასავალდებულოს, და მასზე პირდაპირი წვდომა დააბრუნებს `string | undefined`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types",
        docLabel: "Optional Fields in Unions — Handbook"
    },

    // 6. TYPE NARROWING
    {
        id: 101,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Как работает пользовательский Type Guard с предикатом типа (type predicate)?",
            en: "How does a custom Type Guard utilizing a type predicate operate?",
            ka: "როგორ მუშაობს მომხმარებლის მიერ შექმნილი Type Guard ტიპის პრედიკატით (type predicate)?"
        },
        code: `<span class="kw">function</span> <span class="fn">isString</span>(val: <span class="type">unknown</span>): val <span class="kw">is</span> <span class="type">string</span> {
  <span class="kw">return typeof</span> val === <span class="str">'string'</span>;
}`,
        options: [
            { ru: "При возврате true компилятор сужает тип аргумента до указанного в блоке условия", en: "When returning true, the compiler forces type narrowing onto the targeted parameter inside that conditional block", ka: "true-ს დაბრუნებისას კომპილატორი ავიწროებს არგუმენტის ტიპს მითითებულ ტიპამდე" },
            { ru: "Это синтаксис принудительного каста типов, аналогичный 'as string'", en: "It represents a standard casting assignment equivalent to 'as string'", ka: "ეს არის ტიპის იძულებითი მინიჭების სინტაქსი, 'as string'-ის ანალოგი" },
            { ru: "Функция шифрует рантайм-данные для предотвращения утечек типов", en: "It encrypts variable spaces to guard memory allocation leaks", ka: "ფუნქცია შიფრავს runtime მონაცემებს უსაფრთხоებისთვის" },
            { ru: "Ограничивает вызовы функции только строковыми аргументами", en: "It throws immediate validation roadblocks prohibiting numeric parameters", ka: "ზღუდავს ფუნქციის გამოძახებას მხოლოდ სტრიქონული არგუმენტებით" },
        ],
        correct: 0,
        explanation: {
            ru: "Конструкция 'val is string' — это тип возвращаемого значения, называемый предикатом. Обычная функция возвращает просто boolean, который ни на что не влияет. Но предикат сообщает компилятору: 'Если функция вернула true, это железобетонно означает, что переменная val имеет тип string'. Внутри условного оператора if, где вызвана эта функция, TS автоматически разрешит использовать строковые методы.",
            en: "The specialized declaration 'val is string' is a custom type predicate. While a normal boolean return leaves TS blind to conditional logic branches, a predicate signal directly informs the type checker: 'If this execution yields true, assume with total certainty that the tested parameter is structurally a string.' Inside that local scope, string operators become legal.",
            ka: "კონსტრუქცია 'val is string' არის დაბრუნებული ტიპის სპეციალური სახეობა, რომელსაც პრედიკატი ეწოდება. ჩვეულებრივი ფუნქცია აბრუნებს უბრალო boolean-ს, რაც ტიპზე არ მოქმედებს. პრედიკატი კი ეუბნება კომპილატორს: 'თუ ფუნქციამ დააბრუნა true, ეს ნიშნავს რომ val ნამდვილად string ტიპისაა'. შესაბამისად if ბლოკში ხელმისაწვდომი იქნება სტრიქონის მეთოდები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
        docLabel: "Type Predicates — Handbook"
    },
    {
        id: 102,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "К какому типу сузит переменную padding TypeScript в ветке else?",
            en: "What type will TypeScript infer for the padding variable inside the else branch?",
            ka: "რა ტიპამდე შეავიწროებს padding ცვლადს TypeScript else შტოში?"
        },
        code: `<span class="kw">function</span> <span class="fn">padLeft</span>(padding: <span class="type">number</span> | <span class="type">string</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> padding === <span class="str">'number'</span>) {
    <span class="kw">return</span> <span class="num">0</span>;
  } <span class="kw">else</span> {
    <span class="c">// Какой тип у padding здесь?</span>
  }
}`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "number | string", en: "number | string", ka: "number | string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript понимает базовые проверки JavaScript. Полноценный анализ потока управления (Control Flow Analysis) видит, что если тип не `number`, то в рамках объединения `number | string` в блоке `else` единственным оставшимся вариантом является `string`.",
            en: "TypeScript deeply understands JavaScript's native execution flows. Control Flow Analysis automatically deduces that if a value from a `number | string` union fails a `typeof === 'number'` test, it must resolve cleanly as a `string` in the alternative `else` logic scope.",
            ka: "TypeScript კარგად აანალიზებს კოდის შესრულების ნაკადს (Control Flow Analysis). თუ გაერთიანებიდან `number | string` ცვლადი არ არის `number`, `else` ბლოკში დარჩენილი ერთადერთი გზა არის `string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards",
        docLabel: "typeof type guards — Handbook"
    },
    {
        id: 103,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Как проверка на «истинность» (truthiness) сужает тип аргумента users в данном условии?",
            en: "How does the truthiness evaluation filter the type signature of the users argument in this branch?",
            ka: "როგორ შეავიწროებს „ჭეშმარიტებაზე“ (truthiness) შემოწმება users არგუმენტის ტიპს მოცემულ პირობაში?"
        },
        code: `<span class="kw">function</span> <span class="fn">printUsers</span>(users: <span class="type">string</span>[] | <span class="kw">null</span> | <span class="type">undefined</span>) {
  <span class="kw">if</span> (users) {
    <span class="c">// Какой тип у users здесь?</span>
  }
}`,
        options: [
            { ru: "string[]", en: "string[]", ka: "string[]" },
            { ru: "string[] | null", en: "string[] | null", ka: "string[] | null" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "undefined", en: "undefined", ka: "undefined" }
        ],
        correct: 0,
        explanation: {
            ru: "В JavaScript `null` и `undefined` являются ложными значениями (falsy). Проверка `if (users)` отсекает все falsy варианты, поэтому внутри блока `if` тип переменной сужается до `string[]`, гарантируя безопасность вызовов методов массива.",
            en: "In JavaScript, values like `null` and `undefined` are implicitly falsy. Placing `users` straight inside an `if` condition filters out all falsy types from the union signature, safely narrowing the scoped variable strictly down to `string[]`.",
            ka: "JavaScript-ში `null` და `undefined` წარმოადგენენ ყალბ (falsy) მნიშვნელობებს. პირობა `if (users)` ფილტრავს ყველა ასეთ ვარიანტს, რის გამოც if ბლოკში ტიპი ვიწროვდება `string[]`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing",
        docLabel: "Truthiness narrowing — Handbook"
    },
    {
        id: 104,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какой тип будет определен компилятором для переменной account в блоке проверки свойства?",
            en: "What type will the compiler map onto the account variable inside the dynamic property evaluation block?",
            ka: "რა ტიპს განსაზღვრავს კომპილატორი account ცვლადისთვის თვისების შემოწმების ბლოკში?"
        },
        code: `<span class="kw">type</span> <span class="type">User</span> = { name: <span class="type">string</span>; login: <span class="fn">()</span> =&gt; <span class="type">void</span> };
<span class="kw">type</span> <span class="type">Guest</span> = { name: <span class="type">string</span>; register: <span class="fn">()</span> =&gt; <span class="type">void</span> };
<span class="kw">function</span> <span class="fn">auth</span>(account: <span class="type">User</span> | <span class="type">Guest</span>) {
  <span class="kw">if</span> (<span class="str">'login'</span> <span class="kw">in</span> account) {
    <span class="c">// Какой тип у account здесь?</span>
  }
}`,
        options: [
            { ru: "User", en: "User", ka: "User" },
            { ru: "Guest", en: "Guest", ka: "Guest" },
            { ru: "User | Guest", en: "User | Guest", ka: "User | Guest" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `in` проверяет существование свойства в объекте. Так как свойство `login` явно перечислено как обязательное только в типе `User`, TypeScript сужает тип `account` до `User` внутри этого блока условий.",
            en: "The native JavaScript `in` operator checks if a specific property exists explicitly on an object instance. Because the `login` field is present solely on the `User` contract definition, TypeScript narrows the union directly to `User` inside the statement.",
            ka: "`in` ოპერატორი ამოწმებს ობიექტში თვისების არსებობას. ვინაიდან `login` თვისება სავალდებულოა მხოლოდ `User` ტიპისთვის, TS ამ ბლოკში account ცვლადის ტიპს ავიწროებს `User`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing",
        docLabel: "The in operator narrowing — Handbook"
    },
    {
        id: 105,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какой тип получит переменная x после прохождения проверки через оператор instanceof?",
            en: "What type identity is given to variable x after validating through the instanceof operation block?",
            ka: "რა ტიპს მიიღებს x ცვლადი instanceof ოპერატორით შემოწმების გავლის შემდეგ?"
        },
        code: `<span class="kw">function</span> <span class="fn">logDate</span>(x: <span class="type">Date</span> | <span class="type">string</span>) {
  <span class="kw">if</span> (x <span class="kw">instanceof</span> <span class="type">Date</span>) {
    <span class="c">// Какой тип у x здесь?</span>
  }
}`,
        options: [
            { ru: "Date", en: "Date", ka: "Date" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "Date & string", en: "Date & string", ka: "Date & string" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `instanceof` проверяет, является ли объект экземпляром конкретного класса (или конструктора). TypeScript распознает это выражение как защитник типа и сужает `x` до типа `Date`.",
            en: "The JavaScript `instanceof` check looks up prototype hierarchies to verify if an object references a constructor function. TypeScript mirrors this validation mechanic, filtering out the primitive `string` option to treat `x` safely as a `Date` instance.",
            ka: "`instanceof` ოპერატორი ამოწმებს, არის თუ არა ობიექტი კონკრეტული კლასის ეგზემპლარი. TS ცნობს ამ გამოსახულებას და ავიწროებს `x`-ს `Date` ტიპამდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing",
        docLabel: "instanceof narrowing — Handbook"
    },
    {
        id: 106,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Почему TypeScript разрешает вызывать метод toFixed на переменной x в самом конце функции без блока else?",
            en: "Why does TypeScript allow calling the toFixed method on variable x at the end of the function without an explicit else block?",
            ka: "რატომ გვრთავს ნებას TypeScript გამოვიძახოთ toFixed მეთოდი x ცვლადზე ფუნქციის ბოლოში else ბლოკის გარეშე?"
        },
        code: `<span class="kw">function</span> <span class="fn">process</span>(x: <span class="type">string</span> | <span class="type">number</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">'string'</span>) {
    <span class="kw">return</span>;
  }
  x.<span class="fn">toFixed</span>();
}`,
        options: [
            { ru: "Потому что анализ потока управления (Control Flow) понимает, что строковые значения завершают выполнение функции через return", en: "Because Control Flow Analysis realizes that string instances abort early via return, leaving only numbers for the remaining block", ka: "რადგან კოდის ნაკადის ანალიზი ხვდება, რომ სტრიქონული მნიშვნელობები ასრულებენ ფუნქციას return-ით და რჩება მხოლოდ რიცხვები" },
            { ru: "Метод toFixed неявно доступен и у строк", en: "The toFixed method interface is implicitly exposed on string objects under the hood", ka: "toFixed მეთოდი არაპირდაპირ ხელმისაწვდომია სტრიქონებისთვისაც" },
            { ru: "Это баг компилятора TypeScript", en: "This is a known bug inside the legacy TypeScript compiler architecture", ka: "ეს არის TypeScript კომპილატორის შეცდომა (bug)" },
            { ru: "Тип x принудительно приводится к any", en: "The variable x gets automatically forced into the loose any classification", ka: "x-ის ტიპი იძულებით მიყვანილია any ტიპამდე" }
        ],
        correct: 0,
        explanation: {
            ru: "Анализ потока управления (Control Flow Analysis) отслеживает недостижимый код. Так как из-за оператора `return` выполнение функции прекращается, если `x` был строкой, код ниже строки с `return` гарантированно выполняется только в том случае, если `x` — `number`.",
            en: "TypeScript uses Control Flow Analysis to parse the reachability of statements. Since the `if` block triggers an early return termination when `x` is tracked as a `string`, any code paths below that point are mathematically unreachable by strings, narrowing `x` to `number`.",
            ka: "Control Flow Analysis თვალს ადევნებს მიუღწევად კოდს. ვინაიდან `return` ოპერატორის გამო ფუნქციის შესრულება წყდება თუ `x` იყო სტრიქონი, ქვედა ხაზებზე კოდი გარანტირებულად სრულდება მხოლოდ მაშინ, როდესაც `x` არის `number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis",
        docLabel: "Control Flow Analysis — Handbook"
    },
    {
        id: 107,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Каким станет тип переменных x и y внутри условного блока if (x === y)?",
            en: "What type will variables x and y hold inside the conditional statement block if (x === y)?",
            ka: "რა ტიპის გახდება x და y ცვლადები პირობით ბლოკში if (x === y)?"
        },
        code: `<span class="kw">function</span> <span class="fn">compare</span>(x: <span class="type">string</span> | <span class="type">number</span>, y: <span class="type">string</span> | <span class="type">boolean</span>) {
  <span class="kw">if</span> (x === y) {
    <span class="c">// Какой общий тип у x и y здесь?</span>
  }
}`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Это сужение по эквивалентности (Equivalence Narrowing). Если `x` и `y` строго равны, они должны иметь один и тот же тип. Единственным общим пересечением между их Union-типами является тип `string`, поэтому внутри блока они оба сужаются до `string`.",
            en: "This showcases equivalence narrowing. If `x` and `y` evaluate as strictly equal, they must structurally share a runtime type representation. Since `string` is the sole overlapping type option between both unions, TS filters both down to `string`.",
            ka: "ეს არის ტოლობით შევიწროება (Equivalence Narrowing). თუ `x` და `y` მკაცრად ტოლია, მათ ერთი და იგივე ტიპი უნდა ჰქონდეთ. მათ შორის ერთადერთი საერთო გადაკვეთა არის `string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing",
        docLabel: "Equality Narrowing — Handbook"
    },
    {
        id: 108,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какое свойство объектов в коде служит дискриминантом (маркером) для безопасного сужения типа?",
            en: "Which object property key in the provided snippet serves as the explicit discriminator field for type narrowing?",
            ka: "ობიექტების რომელი თვისება ასრულებს დისკრიმინანტის (მარკერის) როლს ტიპის უსაფრთხო შევიწროებისთვის?"
        },
        code: `<span class="kw">type</span> <span class="type">Circle</span> = { type: <span class="str">'circle'</span>; radius: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Square</span> = { type: <span class="str">'square'</span>; side: <span class="type">number</span> };

<span class="kw">function</span> <span class="fn">getArea</span>(shape: <span class="type">Circle</span> | <span class="type">Square</span>) {
  <span class="kw">if</span> (shape.type === <span class="str">'circle'</span>) {
    <span class="kw">return</span> <span class="type">Math</span>.PI * shape.radius ** <span class="num">2</span>;
  }
}`,
        options: [
            { ru: "Свойство type, содержащее уникальные строковые литералы", en: "The type key, which registers unique string literal types", ka: "type თვისება, რომელიც შეიცავს უნიკალურ სტრიქონულ ლიტერალებს" },
            { ru: "Свойства radius и side", en: "The distinct numeric radius and side object fields", ka: "radius და side თვისებები" },
            { ru: "Имя аргумента shape", en: "The lexical structural naming of the shape argument identifier", ka: "shape არგუმენტის სახელი" },
            { ru: "В коде нет разметки, сужение происходит случайно", en: "There is no formal pattern here; the narrowing executes dynamically by chance", ka: "კოდში მარკერი არ არის, შევიწროება შემთხვევით ხდება" }
        ],
        correct: 0,
        explanation: {
            ru: "Поле `type` является дискриминантом (разметкой). Каждый объект в объединении имеет это свойство, но с уникальным литеральным значением. Проверяя `shape.type`, мы позволяем TypeScript мгновенно отсечь неподходящие структуры.",
            en: "The `type` literal property serves as a formal discriminator. Every member in the union shares this property key but holds a distinct literal definition. Inspecting `shape.type` enables TypeScript to instantly drop mismatched shapes from the scope context.",
            ka: "`type` ველი არის დისკრიმინანტი. გაერთიანების თითოეულ ობიექტს აქვს ეს თვისება, მაგრამ უნიკალური ლიტერალური მნიშვნელობით. `shape.type`-ს შემოწმებით TS-ს ვაძლევთ საშუალებას გამორიცხოს სხვა სტრუქტურები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
        docLabel: "Discriminated Unions — Handbook"
    },
    {
        id: 109,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Каким будет выведенный тип для переменной толькоСтроки, если передать обычную стрелочную коллбек-функцию без предиката типа в метод filter?",
            en: "What inferred type will variables hold if you pass a basic arrow shorthand return statement without an explicit type predicate into Array.prototype.filter?",
            ka: "რა ტიპი განისაზღვრება მხოლოდСтроки ცვლადისთვის, თუ filter მეთოდში გადავცემთ ჩვეულებრივ ქოლბექს ტიპის პრედიკატის გარეშე?"
        },
        code: `<span class="kw">const</span> arr: (<span class="type">string</span> | <span class="kw">null</span>)[] = [<span class="str">"a"</span>, <span class="kw">null</span>, <span class="str">"b"</span>];
<span class="kw">const</span> filtered = arr.<span class="fn">filter</span>(x =&gt; x !== <span class="kw">null</span>);`,
        options: [
            { ru: "(string | null)[] (TypeScript не сможет автоматически убрать null без type predicate)", en: "(string | null)[] (TypeScript cannot auto-strip null from collection signatures without a type predicate callback)", ka: "(string | null)[] (TypeScript ვერ შეძლებს ავტომატურად null-ის მოცილებას ტიპის პრედიკატის გარეშე)" },
            { ru: "string[]", en: "string[]", ka: "string[]" },
            { ru: "never[]", en: "never[]", ka: "never[]" },
            { ru: "unknown[]", en: "unknown[]", ka: "unknown[]" }
        ],
        correct: 0,
        explanation: {
            ru: "Стандартный метод `Array.prototype.filter` возвращает массив того же типа, если его функция-коллбек возвращает просто `boolean`. TypeScript не заглядывает внутрь логики стрелочной функции для изменения типа массива, если не используется предикат `x is string`.",
            en: "The native `Array.prototype.filter` API resolves to the original collection element type signature when combined with a vanilla `boolean` closure return. TypeScript's compiler doesn't auto-infer array modifications unless bound to a strict `x is string` predicate.",
            ka: "სტანდარტული `Array.prototype.filter` მეთოდი აბრუნებს იმავე ტიპის მასივს, თუ ქოლბექი აბრუნებს უბრალო `boolean`-ს. TS ვერ ხვდება მასივის ტიპის შეცვლას, თუ არ გამოვიყენებთ პრედიკატს `x is string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
        docLabel: "Type Predicates in Arrays — Handbook"
    },
    {
        id: 110,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какую роль играет ключевое слово asserts в сигнатуре возвращаемого значения функции?",
            en: "What structural operation does the asserts keyword declare when integrated within a function's return signature?",
            ka: "რა როლს ასრულებს asserts საკვანძო სიტყვა ფუნქციის დაბრუნებული მნიშვნელობის სიგნატურაში?"
        },
        code: `<span class="kw">function</span> <span class="fn">assertIsString</span>(val: <span class="type">unknown</span>): <span class="kw">asserts</span> val <span class="kw">is</span> <span class="type">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> val !== <span class="str">'string'</span>) <span class="kw">throw</span> <span class="kw">new</span> <span class="type">Error</span>(<span class="str">"Not a string"</span>);
}`,
        options: [
            { ru: "Оно гарантирует компилятору, что если функция завершилась без ошибок, аргумент val имеет тип string для всего последующего кода", en: "It guarantees to the compiler that if the execution exits cleanly, the target parameter matches the string type for all trailing code blocks", ka: "იგი გარანტიას აძლევს კომპილატორს, რომ თუ ფუნქცია დასრულდა შეცდომის გარეშე, არგუმენტი val არის string შემდგომი კოდისთვის" },
            { ru: "Оно заставляет функцию автоматически возвращать строку", en: "It forces the execution algorithm to implicitly return a string cast value", ka: "იგი აიძულებს ფუნქციას ავტომატურად დააბრუნოს სტრიქონი" },
            { ru: "Это декоратор, проверяющий скорость выполнения кода", en: "It acts as a metadata decorator tracing benchmark execution velocity profiles", ka: "ეს არის დეკორატორი, რომელიც ამოწმებს კოდის შესრულების სიჩქარეს" },
            { ru: "asserts работает исключительно в асинхронных функциях", en: "The asserts token is restricted exclusively to asynchronous async promise functions", ka: "asserts მუშაობს მხოლოდ ასინქრონულ ფუნქციებში" }
        ],
        correct: 0,
        explanation: {
            ru: "Функции утверждений (`Assertion Functions`) используют синтаксис `asserts condition`. Они сообщают компилятору, что если вызов не вызвал `throw`, текущее состояние типа изменилось для всего последующего потока выполнения (в отличие от обычных Type Guard, работающих только внутри `if`).",
            en: "Assertion functions introduce the specific `asserts condition` signature pattern. They instruct TypeScript that instead of checking inside isolated conditional blocks, if a routine returns cleanly without throwing, the parameter type updates for the remainder of the scope.",
            ka: "უტილიტური ფუნქციები (`Assertion Functions`) იყენებენ `asserts condition` სინტაქსს. ისინი ეუბნებიან კომპილატორს, რომ თუ კოდმა არ ისროლა `throw`, ტიპი შეიცვალა მთელი შემდგომი კოდისთვის (განსხვავებით ჩვეულებრივი Type Guard-ისგან, რომელიც მხოლოდ if-ში მუშაობს)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions",
        docLabel: "Assertion Functions — Release Notes"
    },
    {
        id: 111,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Сузит ли проверку типа обычный вызов через опциональную цепочку параметров (?.)?",
            en: "Does wrapping a parameter invocation inside a standard optional chaining block (?.) trigger strict type narrowing?",
            ka: "შეავიწროებს თუ არა ტიპს ჩვეულებრივი გამოძახება არასავალდებულო ჯაჭვით (?.)?"
        },
        code: `<span class="kw">function</span> <span class="fn">run</span>(callback?: <span class="fn">()</span> =&gt; <span class="type">void</span>) {
  callback?.();
  <span class="c">// Сузился ли тип callback на следующей строке до обязательного?</span>
}`,
        options: [
            { ru: "Нет, опциональная цепочка не сужает тип для последующего кода, тип остается () => void | undefined", en: "No, optional chaining does not isolate or narrow the type footprint for trailing lines; it remains () => void | undefined", ka: "არა, არასავალდებულო ჯაჭვი არ ავიწროებს ტიპს შემდგომი კოდისთვის, ტიპი რჩება () => void | undefined" },
            { ru: "Да, тип превращается в гарантированную функцию", en: "Yes, the type expression drops the optionality to resolve strictly as a safe function", ka: "დიახ, ტიპი გარდაიქმნება გარანტირებულ ფუნქციად" },
            { ru: "Да, но только если функция была вызвана в строгом режиме 'use strict'", en: "Yes, but strictly provided the parent execution was compiled under a 'use strict' flag", ka: "დიახ, მაგრამ მხოლოდ მაშინ, თუ ფუნქცია გამოძახებული იყო 'use strict' რეჟიმში" },
            { ru: "callback превратится в тип never", en: "The callback parameter evaluates immediately into the empty never universe", ka: "callback გარდაიქმნება never ტიპად" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `?.` (Optional Chaining) просто предотвращает падение в рантайме, если переменная равна `null` или `undefined`. Он не меняет поток выполнения и не отсекает типы, поэтому на следующей строке `callback` по-прежнему может быть `undefined`.",
            en: "The short-circuiting optional chaining operator `?.` simply prevents runtime lookup crashes if a value is nullish. It does not re-route control flow or filter type definitions, meaning on subsequent lines `callback` remains typed with `undefined` included.",
            ka: "`?.` ოპერატორი (Optional Chaining) უბრალოდ აცილებს თავიდან runtime შეცდომას, თუ ცვლადი არის `null` ან `undefined`. იგი არ ცვლის კოდის ნაკადს, ამიტომ მომდევნო ხაზზე `callback` ისევ შეიძლება იყოს `undefined`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
        docLabel: "Optional Chaining Behavior — Handbook"
    },
    {
        id: 112,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "К какому литеральному типу сузится переменная action внутри блока условий при проверке через неравенство (!==)?",
            en: "What specific literal type will the action parameter filter to inside the logic scope triggered by an inequality (!==) test?",
            ka: "რა ლიტერალურ ტიპამდე შეავიწროებს action ცვლადს პირობითი ბლოკის შიგნით არატოლობის (!==) შემოწმება?"
        },
        code: `<span class="kw">function</span> <span class="fn">handle</span>(action: <span class="str">"view"</span> | <span class="str">"edit"</span>) {
  <span class="kw">if</span> (action !== <span class="str">"view"</span>) {
    <span class="c">// Какой тип у action тут?</span>
  }
}`,
        options: [
            { ru: '"edit"', en: '"edit"', ka: '"edit"' },
            { ru: '"view"', en: '"view"', ka: '"view"' },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript умеет сужать литеральные типы не только через прямое равенство, но и через исключение. Если переменная `action` могла быть только `'view'` или `'edit'`, а проверка гарантирует, что она не `'view'`, компилятор оставляет единственный логичный тип — `'edit'`.",
            en: "TypeScript tracks literal constraints via elimination logic. If the input signature restricts `action` strictly to a binary selection of \"view\" | \"edit\", checking that it does not equal \"view\" prompts the system to evaluate it as \"edit\" within that scope.",
            ka: "TypeScript-ს შეუძლია ლიტერალური ტიპების შევიწროება არა მხოლოდ პირდაპირი ტოლობით, არამედ გამორიცხვითაც. თუ `action` შეიძლება ყოფილიყო მხოლოდ `'view'` ან `'edit'`, ხოლო შემოწმება ამბობს, რომ ის არ არის `'view'`, რჩება მხოლოდ `'edit'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing",
        docLabel: "Equality Narrowing — Handbook"
    },
    {
        id: 113,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какой тип будет иметь переменная x на последней строчке функции, если в блоке if мы отфильтровали только тип string?",
            en: "What type identity will variable x take on the final execution line if our conditional statement isolated only the string subset?",
            ka: "რა ტიპის იქნება x ცვლადი ფუნქციის ბოლო ხაზზე, თუ if ბლოკში გავფილტრეთ მხოლოდ string ტიპი?"
        },
        code: `<span class="kw">function</span> <span class="fn">check</span>(x: <span class="type">string</span> | <span class="type">null</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">'string'</span>) {
    <span class="kw">return</span>;
  }
  <span class="c">// Какой тип у x здесь?</span>
}`,
        options: [
            { ru: "null", en: "null", ka: "null" },
            { ru: "string | null", en: "string | null", ka: "string | null" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В режиме `strictNullChecks` типы `string` и `null` строго разделены. Поскольку тип `string` полностью вышел из функции на этапе `return`, на выходе из условия компилятор оставляет для `x` единственный оставшийся тип — `null`.",
            en: "Under strict `strictNullChecks` rules, `string` and `null` operate as distinct types. Since the `string` subset exits the execution stream early due to the conditional return keyword, the residual type evaluated for `x` settles strictly as `null`.",
            ka: "`strictNullChecks` რეჟიმში `string` და `null` მკაცრად განცალკევებულია. ვინაიდან `string` ტიპმა დატოვა ფუნქცია return-ის ეტაპზე, კომპილატორი `x`-ისთვის ტოვებს ერთადერთ დარჩენილ ტიპს — `null`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis",
        docLabel: "Control Flow Analysis with Nulls — Handbook"
    },
    {
        id: 114,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შეвиწროება" },
        tag: "narrowing",
        question: {
            ru: "Сохраняется ли сужение типа переменной x, выполненное во внешней функции, внутри вложенного асинхронного коллбека?",
            en: "Does a type narrowing resolution performed on variable x in an outer scope persist inside a nested asynchronous callback loop?",
            ka: "ინარჩუნებს თუ არა გარე ფუნქციაში შესრულებული x ცვლადის ტიპის შევიწროება თავის ძალას შიდა ასინქრონულ ქოლბექში?"
        },
        code: `<span class="kw">function</span> <span class="fn">process</span>(x: <span class="type">string</span> | <span class="kw">null</span>) {
  <span class="kw">if</span> (x !== <span class="kw">null</span>) {
    <span class="fn">setTimeout</span>(<span class="fn">()</span> =&gt; {
      <span class="c">// Безопасно ли тут читать x как string? Сбросит ли TS сужение?</span>
    }, <span class="num">1000</span>);
  }
}`,
        options: [
            { ru: "ТС сбрасывает сужение обратно до string | null, так как коллбек вызовется позже, и переменная (если это let) могла измениться", en: "TypeScript resets the narrowing back to string | null because closure execution happens later, and mutable outer references could change", ka: "TS აბრუნებს შევიწროებას string | null-მდе, რადგან ქოლბექი მოგვიანებით გამოიძახება და ცვლადი (თუ let-ია) შეიძლება შეიცვალოს" },
            { ru: "Да, сужение сохраняется железно в любых замыканиях", en: "Yes, the narrowed type definition is permanently locked inside all nested closure instances", ka: "დიახ, შევიწროება მკაცრად ნარჩუნდება ნებისმიერ ჩაკეტვაში (closure)" },
            { ru: "Тип x автоматически превращается в unknown", en: "The scoped reference of x is immediately re-mapped to an unknown placeholder type", ka: "x-ის ტიპი ავტომატურად გარდაიქმნება unknown-ად" },
            { ru: "Код вызовет синтаксическую ошибку на этапе компиляции", en: "The syntax structure triggers an unrecoverable crash during compilation", ka: "კოდი გამოიწვევს სინტაქსურ შეცდომას კომპილაციის ეტაპზე" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript анализ потока управления сбрасывает сужение типов для изменяемых переменных внутри замыканий/коллбеков. Так как функция `setTimeout` асинхронна, компилятор перестраховывается, подозревая, что значение переменной могло быть перезаписано до выполнения коллбека.",
            en: "TypeScript's Control Flow Analysis intentionally invalidates type narrowings for mutable references captured within closures. Because callbacks execute asynchronously, the compiler takes a defensive stance, assuming the out-of-scope variable might switch types before execution.",
            ka: "TypeScript-ში კოდის ნაკადის ანალიზი აუქმებს ტიპის შევიწროებას ცვლადებისთვის შიდა ქოლბექებში. რადგან `setTimeout` ასინქრონულია, კომპილატორი იზღვევს თავს იმ ვარაუდით, რომ ცვლადის მნიშვნელობა შეიძლება შეიცვალოს ქოლბექის შესრულებამდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis",
        docLabel: "Control Flow Inside Closures — Handbook"
    },

    {
        id: 115,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "К какому полю объекта response разрешит обратиться TypeScript внутри блока if?",
            en: "Which specific property field of the response object will TypeScript grant access to within the if scope?",
            ka: "response ობიექტის რომელ ველთან დაუშვებს TypeScript წვდომას if ბლოკის შიგნით?"
        },
        code: `<span class="kw">type</span> <span class="type">Success</span> = { status: <span class="num">200</span>; data: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Fail</span> = { status: <span class="num">400</span>; error: <span class="type">string</span> };
<span class="kw">function</span> <span class="fn">handle</span>(response: <span class="type">Success</span> | <span class="type">Fail</span>) {
  <span class="kw">if</span> (response.status === <span class="num">200</span>) {
    <span class="c">// К чему есть доступ?</span>
  }
}`,
        options: [
            { ru: "К полям status и data", en: "To the status and data fields exclusively", ka: "მხოლოდ status და data ველებთან" },
            { ru: "К полям status и error", en: "To the status and error properties directly", ka: "status და error ველებთან" },
            { ru: "К любому полю, включая data и error без ограничений", en: "To all properties across both signatures without any compilation bottlenecks", ka: "ნებისმიერ ველთან, data-სა და error-ის ჩათვლით შეზღუდვების გარეშე" },
            { ru: "Доступа не будет ни к чему, числа нельзя использовать как дискриминанты", en: "Access is denied; numeric values are prohibited from acting as valid discriminants", ka: "წვდომა არაფერთან იქნება, რიცხვების გამოყენება დისკრიმინანტებად აკრძალულია" }
        ],
        correct: 0,
        explanation: {
            ru: "Числовые литералы (например, `200` и `400`) могут выступать полноценными дискриминантами в разметке объединений точно так же, как и строковые. Проверка `status === 200` успешно сужает тип ответа до структуры `Success`.",
            en: "Numeric literal definitions (like `200` or `400`) act as perfectly valid object discriminants within union shapes, identical to string literals. Evaluating `status === 200` narrows the entity safely to the matching `Success` type definition.",
            ka: "რიცხვითი ლიტერალები (მაგალითად `200` და `400`) სრულფასოვნად ასრულებენ დისკრიმინანტის როლს გაერთიანებებში. `status === 200` შემოწმება წარმატებით ავიწროებს პასუხის ტიპს `Success` სტრუქტურამდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
        docLabel: "Discriminated Unions — Handbook"
    },
    {
        id: 116,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какой тип будет иметь аргумент val в правой части логического выражения И (&&) после проверки typeof?",
            en: "What type will the val argument assume on the right-hand side of the logical AND (&&) expression following the typeof evaluation?",
            ka: "რა ტიპის იქნება val არგუმენტი ლოგიკური „და“ (&&) ოპერატორის მარჯვენა მხარეს typeof შემოწმების შემდეგ?"
        },
        code: `<span class="kw">function</span> <span class="fn">parse</span>(val: <span class="type">string</span> | <span class="type">null</span>) {
  <span class="kw">const</span> valid = typeof val === <span class="str">'string'</span> &amp;&amp; val.<span class="fn">length</span> &gt; <span class="num">0</span>;
}`,
        options: [
            { ru: "string (в правой части оператора && левая часть уже подтвердила тип)", en: "string (the right side benefits from the left side already validating the type path)", ka: "string (&& ოპერატორის მარჯვენა მხარეს მარცხენამ უკვე დაადასტურა ტიპი)" },
            { ru: "string | null", en: "string | null", ka: "string | null" },
            { ru: "null", en: "null", ka: "null" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В JavaScript логический оператор `&&` выполняется слева направо по принципу короткого замыкания. TypeScript знает, что правая часть выражения вычислится только в том случае, если левая вернула `true`. Поэтому в правой части `val` уже гарантированно является строкой.",
            en: "JavaScript evaluates the logical `&&` operator from left to right using short-circuit mechanics. TypeScript leverages this sequence rule: the right-hand operand code executes only if the left-hand condition checks out as `true`. Thus, `val` is safely inferred as a `string`.",
            ka: "JavaScript-ში `&&` ოპერატორი სრულდება მარცხნიდან მარჯვნივ. TS ითვალისწინებს ამას: მარჯვენა მხარე შესრულდება მხოლოდ მაშინ, თუ მარცხენამ დააბრუნა `true`. შესაბამისად, მარჯვენა მხარეს `val` გარანტირებულად `string`-ია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing",
        docLabel: "Short-circuit Narrowing — Handbook"
    },
    {
        id: 117,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Можно ли использовать сужение типа (например, typeof) на параметре универсального типа (дженерике) T?",
            en: "Is it fully valid to invoke type narrowing mechanisms (like typeof) on an un-evaluated generic type parameter T?",
            ka: "შესაძლებელია თუ არა ტიპის შევიწროების (მაგალითად typeof-ის) გამოყენება ჯენერიკ T პარამეტრზე?"
        },
        code: `<span class="kw">function</span> <span class="fn">processGeneric</span>&lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> arg === <span class="str">'string'</span>) {
    <span class="c">// Разрешено ли это в TS?</span>
  }
}`,
        options: [
            { ru: "Да, TypeScript успешно сузит тип аргумента arg до типа string внутри блока условий", en: "Yes, TypeScript will successfully narrow the arg variable signature down to a string inside that scope block", ka: "დიახ, TypeScript წარმატებით შეავიწროებს arg არგუმენტის ტიპს string-მდე პირობით ბლოკში" },
            { ru: "Нет, дженерики запрещено проверять через typeof", en: "No, generic type tokens are explicitly blacklisted from being evaluated via typeof expressions", ka: "არა, ჯენერიკების შემოწმება typeof-ით აკრძალულია" },
            { ru: "Да, но тип изменится на string & T", en: "Yes, but the resulting compilation type merges into an intersection layout: string & T", ka: "დიახ, მაგრამ ტიპი შეიცვლება string & T-ად" },
            { ru: "Дженерик автоматически сбросится в тип any", en: "The generic context forces an immediate and silent fallback to the loose any abstraction", ka: "ჯენერიკი ავტომატურად ჩამოქვეითდება any ტიპამდე" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript отлично справляется с сужением переменных, тип которых завязан на дженерики. Внутри блока `if` компилятор понимает, что в данном конкретном вызове под `T` скрывается строка, и активирует для `arg` все возможности работы со строками.",
            en: "TypeScript handles type narrowing seamlessly even when variables are defined via raw generic variables. Inside the conditional `if` context, the compiler safely infers that the actual runtime replacement for `T` evaluates as a string, enabling string APIs.",
            ka: "TypeScript შესანიშნავად ართმევს თავს ჯენერიკებზე დამოკიდებული ცვლადების შევიწროებას. if ბლოკის შიგნით კომპილატორი ხვდება, რომ მოცემულ კონკრეტულ შემთხვევაში `T`-ს ქვეშ სტრიქონი იმალება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
        docLabel: "Generics and Narrowing — Handbook"
    },
    {
        id: 118,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Какой тип имеет переменная error в блоке catch по умолчанию в современных версиях TypeScript, и как безопасно прочитать её сообщение?",
            en: "What type does the catch block error variable default to in modern TypeScript, and how do you safely parse its message?",
            ka: "რა ტიპისაა error ცვლადი catch ბლოკში ნაგულისხმევად თანამედროვე TS-ში და როგორ წავიკითხოთ მისი message უსაფრთხოდ?"
        },
        code: `<span class="kw">try</span> {
  <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">"Crash"</span>);
} <span class="kw">catch</span> (error) {
  <span class="c">// Какой тип у error и как сузить?</span>
}`,
        options: [
            { ru: "Тип unknown; для безопасного чтения нужно сузить тип через error instanceof Error", en: "The unknown type; to access fields safely you must perform narrowing using error instanceof Error", ka: "unknown ტიპი; უსაფრთხო წვდომისთვის საჭიროა ტიპის შევიწროება error instanceof Error-ით" },
            { ru: "Тип any; можно сразу читать error.message без проверок", en: "The any type; enabling you to read error.message straight away without validation safeguards", ka: "any ტიპი; შეგვიძლია პირდაპირ წავიკითხოთ error.message შემოწმების გარეშე" },
            { ru: "Тип Error; компилятор автоматически знает, что там ошибка", en: "The explicit Error class type; the compiler infers the error identity natively", ka: "Error ტიპი; კომპილატორმა ავტომატურად იცის, რომ იქ შეცდომაა" },
            { ru: "Тип never; в блок catch нельзя попасть", en: "The empty never type signature; because catching runtime rejections is blocked", ka: "never ტიპი; catch ბლოკში მოხვედრა შეუძლებელია" }
        ],
        correct: 0,
        explanation: {
            ru: "В современном TypeScript (при флаге useUnknownInCatchVariables) переменная ошибки в `catch` имеет тип `unknown`, так как в JS можно выбросить через `throw` абсолютно любую сущность (строку, число, объект). Для безопасного обращения к `.message` необходимо применить сужение через `instanceof Error`.",
            en: "In modern TypeScript configurations, catch variables default strictly to `unknown`. Because JavaScript permits throwing literally any runtime object (strings, numbers, objects), TS blocks direct key usage until you narrow the target via `instanceof Error`.",
            ka: "თანამედროვე TypeScript-ში `catch` ბლოკის შეცდომის ცვლადს აქვს `unknown` ტიპი, რადგან JS-ში `throw`-ით შეგვიძლია ნებისმიერი რამის სროლა. `.message`-თან უსაფრთხო წვდომისთვის აუცილებელია შევიწროება `instanceof Error`-ით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#useunknownincatchvariables",
        docLabel: "Unknown in Catch Blocks — Release Notes"
    },
    {
        id: 119,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Как сработает кастомный Type Guard из вопроса 101 (isString), если вызвать его внутри инвертированного условия с оператором НЕ (!)?",
            en: "How does a custom Type Guard respond if executed inside a negated conditional expression using the logical NOT (!) operator?",
            ka: "როგორ იმუშავებს მომხმარებლის მიერ შექმნილი Type Guard (isString), თუ მას გამოვიძახებთ ინვერტირებულ პირობაში არა (!) ოპერატორით?"
        },
        code: `<span class="kw">function</span> <span class="fn">process</span>(val: <span class="type">string</span> | <span class="type">number</span>) {
  <span class="kw">if</span> (!<span class="fn">isString</span>(val)) {
    <span class="c">// Какой тип у val внутри этого блока if?</span>
  }
}`,
        options: [
            { ru: "number (TypeScript понимает инверсию предиката и оставляет противоположный тип)", en: "number (TypeScript safely evaluates the predicate inversion, leaving the alternate option active)", ka: "number (TypeScript ხვდება პრედიკატის ინვერსიას და ტოვებს საპირისპირო ტიპს)" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript полностью поддерживает булеву логику инверсии. Если функция `isString(val)` утверждает, что при `true` тип равен `string`, то логическое отрицание `!` говорит компилятору: 'Если вернулся false, значит тип точно НЕ string'. В результате тип сужается до `number`.",
            en: "TypeScript natively evaluates boolean inversion mechanics. If a routine like `isString(val)` confirms a `string` signature upon returning `true`, prefixing it with a logical `!` tells the type checker: 'If false, filter out string.' The compiler maps `val` to `number`.",
            ka: "TypeScript სრულად უჭერს მხარს ინვერსიის ლოგიკას. თუ `isString(val)` აბრუნებს true-ს როცა ცვლადი არის string, უარყოფის ოპერატორი `!` კომპილატორს ეუბნება: 'თუ დაბრუნდა false, ცვლადი ნამდვილად არ არის string'. შედეგად ტიპი ვიწროვდება `number`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
        docLabel: "Type Predicates Inversion — Handbook"
    },
    {
        id: 120,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Способен ли TypeScript автоматически сузить тип ВСЕГО родительского объекта, если мы проверяем через typeof глубоко вложенное свойство?",
            en: "Can TypeScript automatically narrow the type of an ENTIRE parent object container when validating a deeply nested sub-property via typeof?",
            ka: "შეუძლია თუ არა TypeScript-ს ავტომატურად შეავიწროოს მთლიანი მშობელი ობიექტის ტიპი, როდესაც ვამოწმებთ ღრმად ჩაწერილ თვისებას typeof-ით?"
        },
        code: `<span class="kw">type</span> <span class="type">Container</span> = { info: { payload: <span class="type">string</span> | <span class="type">number</span> } };
<span class="kw">function</span> <span class="fn">inspect</span>(c: <span class="type">Container</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> c.info.payload === <span class="str">'string'</span>) {
    <span class="c">// Будет ли c.info.payload распознан как строка?</span>
  }
}`,
        options: [
            { ru: "Да, TypeScript отслеживает пути свойств и сузит тип c.info.payload до string внутри блока", en: "Yes, TypeScript tracks deep path links and narrows c.info.payload to a clean string inside the block scope", ka: "დიახ, TypeScript თვალს ადევნებს თვისებების გზებს და შეავიწროებს c.info.payload-ს string-მდე ბლოკის შიგნით" },
            { ru: "Нет, сужение работает только на переменных первого уровня вложенности", en: "No, type narrowing mechanisms strictly fail unless performed on top-level root variables directly", ka: "არა, შევიწროება მუშაობს მხოლოდ პირველი დონის ცვლადებზე" },
            { ru: "Да, но весь объект Container сотрется до типа any", en: "Yes, but the entire root Container object definition undergoes a destructive collapse to any", ka: "დიახ, მაგრამ მთლიანი Container ობიექტი წაიშლება any ტიპამდე" },
            { ru: "Произойдет краш компилятора из-за сложности дерева путей", en: "The path evaluation triggers a memory overload causing a compiler thread crash", ka: "გზების ხის სირთულის გამო მოხდება კომპილატორის შეცდომა" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript обладает мощным графом отслеживания путей обращения к свойствам объектов (Property Path Tracking). Проверка `typeof c.info.payload === 'string'` успешно сужает тип этой конкретной вложенной цепочки, обеспечивая строгую типизацию без создания промежуточных переменных.",
            en: "TypeScript features deep property path tracking graph analysis. Executing a `typeof c.info.payload === 'string'` condition successfully registers and filters that isolated sub-path, enabling safe usage inside the local branch without helper steps.",
            ka: "TypeScript-ს აქვს თვისებებთან წვდომის გზების თვალყურის დევნების ძლიერი მექანიზმი (Property Path Tracking). `typeof c.info.payload === 'string'` შემოწმება წარმატებით ავიწროებს ამ კონკრეტულ ჩაშენებულ ჯაჭვს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
        docLabel: "Property Path Narrowing — Handbook"
    },

    // 7. КЛАССЫ
    {
        id: 121,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Каковы особенности поведения модификатора private в классах TypeScript?",
            en: "What are the core behavioral traits of the private modifier in TypeScript classes?",
            ka: "რა თავისებურება აქვს private მოდიფიკატორს TypeScript-ის კლასებში?"
        },
        code: `<span class="kw">class</span> <span class="type">User</span> { <span class="kw">private</span> age: <span class="type">number</span> = <span class="num">30</span>; }
<span class="kw">const</span> u = <span class="kw">new</span> <span class="type">User</span>(); u.age;`,
        options: [
            { ru: "Вызывает ошибку компиляции TS, но в рантайме свойство доступно в JS", en: "Triggers a TS compilation error, but the property remains accessible in native JS runtime", ka: "იწვევს TS კომპილაციის შეცდომას, თუმცა runtime-ში თვისება ხელმისაწვდომია JS-ში" },
            { ru: "Полностью блокирует чтение и запись как на этапе компиляции, так и в рантайме", en: "Blocks data mutations comprehensively across both build and native engine runtime", ka: "სრულად ბლოკავს კითხვას და ჩაწერას როგორც კომპილაციისას, ისე runtime-ში" },
            { ru: "Автоматически превращает свойство в константный read-only геттер", en: "Transforms the variable into a read-only immutable constant pattern", ka: "ავტომატურად აქცევს თვისებას მუდმივ read-only გეტერად" },
            { ru: "Разрешает доступ к свойству только дочерним подклассам", en: "Expands exposure strictly bounded onto extending child subclasses", ka: "წვდომას აძლევს თვისებაზე მხოლოდ შვილობილ კლასებს" },
        ],
        correct: 0,
        explanation: {
            ru: "Модификатор 'private' в TypeScript является исключительно 'мягким' ограничением времени компиляции (compile-time check). Компилятор TS выдаст ошибку, если вы попытаетесь прочитать u.age извне. Однако после превращения кода в стандартный JavaScript, этот модификатор бесследно исчезнет, и свойство превратится в обычное публичное поле. Если вам нужна абсолютная приватность на уровне движка JS, используйте современный синтаксис приватных полей ES2022 с решеткой: '#age'.",
            en: "The 'private' modifier in TS represents soft syntactic sugar checked during compilation only. The build compiler will throw an error if external modules touch 'u.age', but once compiled into target JavaScript, the security vanishes and the property is open. For concrete, hardware-level engine encryption in runtime, use native ES2022 private fields prefixing keys with a hash symbol: '#age'.",
            ka: "'private' მოდიფიკატორი TypeScript-ში არის მხოლოდ კომპილაციის დროის შეზღუდვა. TS კომპილატორი გამოიტანს შეცდომას, თუ შეეცდებით u.age-ის გარედან წაკითხვას. თუმცა, სტანდარტულ JavaScript-ში გადათარგმნის შემდეგ, ეს მოდიფიკატორი გაქრება და თვისება ჩვეულებრივ ხელმისაწვდომი გახდება. ნამდვილი პრივატულობისთვის გამოიყენეთ ES2022-ის ჰეშ (#) სინტაქსი: '#age'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility",
        docLabel: "Class Member Visibility — Handbook"
    },
    {
        id: 122,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "В чем разница между модификаторами private и protected?",
            en: "What is the key difference between private and protected modifiers?",
            ka: "რა არის მთავარი განსხვავება private და protected მოდიფიკატორებს შორის?"
        },
        code: `<span class="kw">class</span> <span class="type">Base</span> { <span class="kw">protected</span> x = <span class="num">1</span>; }
<span class="kw">class</span> <span class="type">Derived</span> <span class="kw">extends</span> <span class="type">Base</span> { f() { <span class="kw">this</span>.x; } }`,
        options: [
            { ru: "protected запрещает доступ везде, кроме статических методов", en: "protected bans access everywhere except static methods", ka: "protected კრძალავს წვდომას ყველგან, სტატიკური მეთოდების გარდა" },
            { ru: "Свойства protected доступны внутри класса и в его подклассах, а private — только внутри самого класса", en: "protected elements are accessible within the class and its subclasses, while private only inside the declaring class", ka: "protected თვისებები ხელმისაწვდომია კლასში და მის ქვეკლასებში, ხოლო private — მხოლოდ თავად კლასში" },
            { ru: "private компилируется в приватные поля #, а protected удаляется", en: "private compiles into # fields, while protected is completely stripped", ka: "private კომპილირდება # ველებად, ხოლო protected იშლება" },
            { ru: "Между ними нет разницы, это синонимы", en: "There is no actual difference, they are strict aliases", ka: "მათ შორის განსხვავება არ არის, ისინი სინონიმებია" }
        ],
        correct: 1,
        explanation: {
            ru: "Модификатор 'protected' делает члены класса видимыми для подклассов (наследников), которые расширяют базовый класс. В то же время 'private' полностью закрывает доступ к свойству для любых внешних сущностей, включая дочерние классы.",
            en: "The 'protected' modifier extends visibility exclusively to classes that inherit from the parent. 'private' strictly restricts access to the declaring body alone, causing sub-classes to fail compilation if they access it.",
            ka: "'protected' მოდიფიკატორი ხილვადს ხდის კლასის წევრებს იმ ქვეკლასებისთვის, რომლებიც აფართოებენ ბაზურ კლასს. 'private' კი სრულად კეტავს წვდომას ნებისმიერი გარე სუბიექტისთვის, მათ შორის შვილობილი კლასებისთვისაც."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#protected",
        docLabel: "Protected Visibility — Handbook"
    },
    {
        id: 123,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что такое Parameter Properties (параметрические свойства) в конструкторе?",
            en: "What are Parameter Properties in a class constructor?",
            ka: "რა არის Parameter Properties (პარამეტრული თვისებები) კონსტრუქტორში?"
        },
        code: `<span class="kw">class</span> <span class="type">User</span> { <span class="kw">constructor</span>(<span class="kw">public</span> name: <span class="type">string</span>) {} }`,
        options: [
            { ru: "Способ объявить и инициализировать свойство класса прямо в параметрах конструктора", en: "A shorthand to declare and initialize a class property directly via constructor signatures", ka: "კლასის თვისების გამოცხადებისა და ინიციალიზაციის მოკლე გზა პირდაპირ კონსტრუქტორის პარამეტრებში" },
            { ru: "Специальный синтаксис для передачи конфигурации в декораторы", en: "A specialized structural syntax built for initializing class level decorators", ka: "სპეციალური სინტაქსი დეკორატორებში კონფიგურაციის გადასაცემად" },
            { ru: "Устаревший синтаксис, который генерирует синтаксическую ошибку в строгом режиме", en: "A deprecated legacy syntax layout that throws engine syntax exceptions in strict modes", ka: "მოძველებული სინტაქსი, რომელიც მკაცრ რეჟიმში იწვევს შეცდომას" },
            { ru: "Свойства, доступные только для чтения метаданных типа", en: "Properties intended solely for inspecting types metadata via reflections", ka: "თვისებები, რომლებიც ხელმისაწვდომია მხოლოდ ტიპის მეტამონაცემების წასაკითხად" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript предоставляет удобный синтаксис (shorthand): если перед аргументом конструктора указать модификатор видимости (public, private, protected) или readonly, TS автоматически создаст одноименное поле класса и присвоит ему переданное значение при инициализации.",
            en: "Parameter properties allow you to create and initialize a class member in a single place. Prefixing a constructor argument with public, private, protected, or readonly tells TS to auto-assign it behind the scenes.",
            ka: "TypeScript გვაძლევს მოსახერხებელ სინტაქსს: თუ კონსტრუქტორის არგუმენტის წინ მივუთითებთ ხილვადობის მოდიფიკატორს (public, private, protected) ან readonly-ს, TS ავტომატურად შექმნის კლასის შესაბამის ველს და მიანიჭებს მას გადაცემულ მნიშვნელობას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties",
        docLabel: "Parameter Properties — Handbook"
    },
    {
        id: 124,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что произойдет, если в наследнике переопределить метод без ключевого слова override при включенном флаге noImplicitOverride?",
            en: "What happens if a method is overridden without the 'override' keyword when 'noImplicitOverride' is enabled?",
            ka: "რა მოხდება, თუ შვილობილ კლასში გადავწერთ მეთოდს 'override' საკვანძო სიტყვის გარეშე, როცა ჩართულია 'noImplicitOverride' ფლაგი?"
        },
        code: `<span class="kw">class</span> <span class="type">Parent</span> { greet() {} }
<span class="kw">class</span> <span class="type">Child</span> <span class="kw">extends</span> <span class="type">Parent</span> { greet() {} }`,
        options: [
            { ru: "Код скомпилируется нормально, это поведение по умолчанию", en: "The code compiles normally, as it is standard behavior", ka: "კოდი ჩვეულებრივ კომპილირდება, ეს ნაგულისხმევი ქცევაა" },
            { ru: "Компилятор выдаст ошибку, требуя явно указать модификатор override", en: "The compiler will raise an error, demanding an explicit 'override' modifier", ka: "კომპილატორი გამოიტანს შეცდომას და მოითხოვს override მოდიფიკატორის მითითებას" },
            { ru: "Метод родительского класса выполнится вместо метода наследника в рантайме", en: "The parent class method will execute instead of the child method at runtime", ka: "parent კლასის მეთოდი შესრულდება child მეთოდის ნაცვლად runtime-ში" },
            { ru: "Свойство greet станет статическим методом", en: "The greet property changes structural scopes into static methods", ka: "greet თვისება გახდება სტატიკური მეთოდი" }
        ],
        correct: 1,
        explanation: {
            ru: "Флаг 'noImplicitOverride' страхует от случайного переопределения методов родительского класса. Если флаг включен, вы обязаны явно написать 'override greet() {}', иначе компилятор выдаст ошибку.",
            en: "The 'noImplicitOverride' flag protects against accidental structural shadowing. When active, you must explicitly declare 'override greet()' to signal intentional polymorphism, preventing silent bugs.",
            ka: "'noImplicitOverride' ფლაგი გვიცავს მშობელი კლასის მეთოდების შემთხვევითი გადაწერისგან. თუ ეს ფლაგი ჩართულია, ვალდებულები ხართ დაწეროთ 'override greet() {}', წინააღმდეგ შემთხვევაში კომპილატორი აჩვენებს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#override",
        docLabel: "Override Keywords — Handbook"
    },
    {
        id: 125,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Можно ли создать экземпляр абстрактного класса с помощью ключевого слова new?",
            en: "Can you directly instantiate an abstract class using the new keyword?",
            ka: "შესაძლებელია თუ არა აბსტრაქტული კლასის ეგზემპლარის შექმნა new საკვანძო სიტყვით?"
        },
        code: `<span class="kw">abstract class</span> <span class="type">Machine</span> {}
<span class="kw">const</span> myMachine = <span class="kw">new</span> <span class="type">Machine</span>();`,
        options: [
            { ru: "Да, если в абстрактном классе нет абстрактных методов", en: "Yes, provided the abstract class contains no abstract methods", ka: "დიახ, თუ აბსტრაქტულ კლასში არ არის აბსტრაქტული მეთოდები" },
            { ru: "Нет, абстрактные классы нельзя инициализировать напрямую через new", en: "No, abstract classes cannot be directly initialized via the new keyword", ka: "არა, აბსტრაქტული კლასების პირდაპირი ინიციალიზაცია new-ით შეუძლებელია" },
            { ru: "Да, но только если передать все аргументы в конструктор по умолчанию", en: "Yes, but only if you pass all generic defaults into the constructor signatures", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ გადასცემთ ყველა არგუმენტს" },
            { ru: "Да, абстрактные классы ничем не отличаются от обычных классов в TS", en: "Yes, abstract classes bear no core differences from regular classes in TS", ka: "დიახ, აბსტრაქტული კლასები არაფრით განსხვავდება ჩვეულებრივი კლასებისგან" }
        ],
        correct: 1,
        explanation: {
            ru: "Абстрактные классы служат исключительно в качестве базовых классов для наследования. Создавать их экземпляры напрямую запрещено компилятором TypeScript.",
            en: "Abstract classes are blueprints meant solely for extending. TypeScript blocks instantiation of abstract designs to ensure implementation sub-classes fill structural requirements first.",
            ka: "აბსტრაქტული კლასები გამოიყენება მხოლოდ როგორც ბაზური კლასები მემკვიდრეობისთვის. TypeScript კომპილატორი კრძალავს მათ პირდაპირ ინიციალიზაციას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members",
        docLabel: "Abstract Classes — Handbook"
    },
    {
        id: 126,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Какое ключевое слово используется для реализации интерфейса классом?",
            en: "Which keyword is used by a class to implement a specific interface?",
            ka: "რომელი საკვანძო სიტყვა გამოიყენება კლასის მიერ ინტერფეისის იმპლემენტაციისთვის?"
        },
        code: `<span class="kw">interface</span> <span class="type">Pingable</span> { ping(): <span class="type">void</span>; }
<span class="kw">class</span> <span class="type">Sonar</span> <span class="kw">___</span> <span class="type">Pingable</span> { ping() {} }`,
        options: [
            { ru: "extends", en: "extends", ka: "extends" },
            { ru: "implements", en: "implements", ka: "implements" },
            { ru: "instanceof", en: "instanceof", ka: "instanceof" },
            { ru: "uses", en: "uses", ka: "uses" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово 'implements' используется для того, чтобы заставить класс соответствовать контракту, заданному интерфейсом. Если класс не реализует все методы интерфейса, компилятор выдаст ошибку.",
            en: "The 'implements' keyword enforces structural compatibility with an interface contract. Missing properties or structural deviations trigger compile-time type-safety errors.",
            ka: "'implements' საკვანძო სიტყვა გამოიყენება იმისთვის, რომ კლასმა შეასრულოს ინტერფეისით განსაზღვრული კონტრაქტი. თუ კლასი არ მოახდენს ყველა მეთოდის რეალიზებას, კომპილატორი აჩვენებს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses",
        docLabel: "Implements Clauses — Handbook"
    },
    {
        id: 127,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что произойдет, если в геттере указать тип возвращаемого значения, а в сеттере — другой тип?",
            en: "What happens if a getter has a return type, and its matching setter takes a completely different type?",
            ka: "რა მოხდება, თუ გეტერში მივუთითებთ ერთ ტიპს, ხოლო შესაბამის სეტერში სხვა ტიპს?"
        },
        code: `<span class="kw">class</span> <span class="type">Box</span> {
    <span class="kw">get</span> size(): <span class="type">number</span> { <span class="kw">return</span> <span class="num">10</span>; }
    <span class="kw">set</span> size(value: <span class="type">string</span>) {} 
}`,
        options: [
            { ru: "Это вызовет ошибку компиляции (начиная с TS 4.3 типы могут отличаться, но тип сеттера должен включать тип геттера)", en: "It triggers a compilation error (since TS 4.3 types can differ, but setter type must accommodate getter type broadness)", ka: "ეს გამოიწვევს კომპილაციის შეცდომას (TS 4.3-დან ტიპები შეიძლება განსხვავდებოდეს, მაგრამ სეტერის ტიპი უნდა მოიცავდეს გეტერის ტიპს)" },
            { ru: "Это абсолютно легально для любых непересекающихся типов в любой версии TS", en: "This is completely legal across any unrelated disjoint types within any version of TS", ka: "ეს სრულიად დაშვებულია ნებისმიერი ტიპისთვის TS-ის ნებისმიერ ვერსიაში" },
            { ru: "Сеттер будет автоматически проигнорирован компилятором", en: "The structural setter block is silently discarded by compilation steps", ka: "სეტერი ავტომატურად იგნორირებული იქნება კომპილატორის მიერ" },
            { ru: "Геттер преобразует возвращаемое значение в строку автоматически", en: "The getter will cast returns into string structures automatically in runtime", ka: "გეტერი ავტომატურად გარდაქმნის დაბრუნებულ მნიშვნელობას სტრიქონად" }
        ],
        correct: 0,
        explanation: {
            ru: "Начиная с версии TS 4.3, типы геттера и сеттера могут отличаться, но тип, принимаемый сеттером, обязательно должен включать в себя (быть супертипом) тип, возвращаемый геттером. Полностью несвязанные типы вызовут ошибку.",
            en: "Since TS 4.3, getter/setter pairs can have distinct types, but the setter's parameter type must be wide enough to encompass the getter's return value. Unrelated types fail safety checks.",
            ka: "TS 4.3 ვერსიიდან, გეტერისა და სეტერის ტიპები შეიძლება განსხვავდებოდეს, თუმცა სეტერის მიერ მიღებული ტიპი აუცილებლად უნდა მოიცავდეს (იყოს სუპერტიპი) გეტერის მიერ დაბრუნებულ ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters",
        docLabel: "Getters and Setters — Handbook"
    },
    {
        id: 128,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Какое поведение гарантирует модификатор readonly для свойства класса?",
            en: "What guarantee does the readonly modifier provide for a class property?",
            ka: "რა ქცევას უზრუნველყოფს readonly მოდიფიკატორი კლასის თვისებისთვის?"
        },
        code: `<span class="kw">class</span> <span class="type">Config</span> { <span class="kw">readonly</span> api: <span class="type">string</span> = <span class="str">"/v1"</span>; }`,
        options: [
            { ru: "Свойство можно перезаписать только внутри конструктора класса", en: "The property can only be assigned or mutated inside the class constructor", ka: "თვისების გადაწერა შესაძლებელია მხოლოდ კლასის კონსტრუქტორში" },
            { ru: "Свойство невозможно изменить даже внутри конструктора", en: "The property prevents assignment anywhere, including constructor declarations", ka: "თვისების შეცვლა შეუძლებელია თვით კონსტრუქტორშიც კი" },
            { ru: "Свойство автоматически становится приватным и статическим", en: "The property turns into a hidden private static structure inherently", ka: "თვისება ავტომატურად ხდება პრივატული და სტატიკური" },
            { ru: "Делает объект по ссылке полностью глубоко замороженным (deep freeze)", en: "Forces runtime deep-freezing optimizations across downstream objects", ka: "ობიექტს აქცევს სრულად გაყინულ (deep freeze) სტრუქტურად" }
        ],
        correct: 0,
        explanation: {
            ru: "Модификатор 'readonly' запрещает перезаписывать свойство за пределами конструктора. Присвоить ему значение можно либо при объявлении, либо внутри тела `constructor`.",
            en: "'readonly' locks mutation behaviors outside structural assignment phases. You are allowed to write to it only within field declarations or inside the active constructor scope.",
            ka: "'readonly' მოდიფიკატორი კრძალავს თვისების გადაწერას კონსტრუქტორის ფარგლებს გარეთ. მნიშვნელობის მინიჭება შესაძლებელია ან გამოცხადებისას, ან `constructor`-ში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly",
        docLabel: "Readonly Members — Handbook"
    },
    {
        id: 129,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Обязательно ли вызывать super() в конструкторе производного класса, если у родителя есть конструктор?",
            en: "Is it mandatory to invoke super() within a derived class constructor if the base class defines one?",
            ka: "სავალდებულოა თუ არა super()-ის გამოძახება შვილობილ კლასში, თუ მშობელ კლასს აქვს კონსტრუქტორი?"
        },
        code: `<span class="kw">class</span> <span class="type">A</span> { <span class="kw">constructor</span>() {} }
<span class="kw">class</span> <span class="type">B</span> <span class="kw">extends</span> <span class="type">A</span> { <span class="kw">constructor</span>() { <span class="kw">___</span> } }`,
        options: [
            { ru: "Необязательно, TS сделает это автоматически", en: "No, TS engines inject super calls behind the scenes automatically", ka: "არ არის სავალდებულო, TS ამას ავტომატურად გააკეთებს" },
            { ru: "Да, и вызов super() должен быть осуществлен до обращения к 'this'", en: "Yes, and the super() call must happen before accessing 'this'", ka: "დიახ, და super()-ის გამოძახება უნდა მოხდეს 'this'-ის გამოყენებამდე" },
            { ru: "Обязательно, но только если у родительского конструктора есть параметры", en: "Mandatory only if the base constructor expects positional parameters", ka: "სავალდებულოა, მაგრამ მხოლოდ იმ შემთხვევაში, თუ მშობელ კონსტრუქტორს აქვს პარამეტრები" },
            { ru: "Нет, вызов super() запрещен в TypeScript", en: "No, explicitly invoking super operations is banned in modern TypeScript", ka: "არა, super()-ის გამოძახება აკრძალულია TypeScript-ში" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript (как и в ES6 JS), если класс является наследником, вы обязаны вызвать `super()` в его конструкторе перед тем, как использовать ключевое слово `this`. Несоблюдение этого правила вызовет ошибку компиляции.",
            en: "Derived classes containing constructors must issue a 'super()' initialization run. Accessing 'this' pointers before satisfying base dependencies is a core syntax violation.",
            ka: "TypeScript-ში (ისევე როგორც ES6 JS-ში), თუ კლასი შვილობილია, ვალდებულები ხართ გამოიძახოთ `super()` მის კონსტრუქტორში `this`-ზე წვდომამდე. წინააღმდეგ შემთხვევაში მიიღებთ შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors",
        docLabel: "Constructors and Super — Handbook"
    },
    {
        id: 130,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Каким образом ведут себя статические (static) члены класса при наследовании?",
            en: "How do static class members behave during inheritance?",
            ka: "როგორ იქცევიან კლასის სტატიკური (static) წევრები მემკვიდრეობისას?"
        },
        code: `<span class="kw">class</span> <span class="type">A</span> { <span class="kw">static</span> id = <span class="str">"1"</span>; }
<span class="kw">class</span> <span class="type">B</span> <span class="kw">extends</span> <span class="type">A</span> {}`,
        options: [
            { ru: "Статические члены не наследуются дочерними классами", en: "Static elements do not cascade down to extending child classes", ka: "სტატიკური წევრები არ გადაეცემათ შვილობილ კლასებს მემკვიდრეობით" },
            { ru: "Статические члены наследуются и доступны через имя дочернего класса (B.id)", en: "Static members are inherited and can be accessed via the child class name (B.id)", ka: "სტატიკური წევრები გადაეცემათ მემკვიდრეობით და ხელმისაწვდომია შვილობილი კლასის სახელით (B.id)" },
            { ru: "Статические свойства переходят только в прототип экземпляров", en: "Static structures shift target bindings into instance prototype contexts", ka: "სტატიკური თვისებები გადადის მხოლოდ ეგზემპლარების პროტოტიპში" },
            { ru: "Они вызывают конфликт имен и ошибку сборки", en: "They generate implicit namespace collisions and immediate build breaks", ka: "ისინი იწვევენ სახელების კონფლიქტს და შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "В JavaScript и TypeScript статические свойства и методы базового класса также наследуются дочерними классами. Таким образом, обращение к `B.id` будет валидным и вернет значение из класса `A`.",
            en: "Static operations and properties map directly over prototypes during inheritance lines. Calling 'B.id' safely extracts the initial reference initialized upstream inside 'A'.",
            ka: "JavaScript-სა და TypeScript-ში ბაზური კლასის სტატიკური თვისებები და მეთოდები ასევე გადაეცემა მემკვიდრეობით შვილობილ კლასებს. შესაბამისად, `B.id` იქნება ვალიდური."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members",
        docLabel: "Static Members — Handbook"
    },
    {
        id: 131,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что означает использование встроенного типа-предиката 'this is X' в качестве возвращаемого значения метода класса?",
            en: "What does using a 'this is X' type predicate as a class method return type mean?",
            ka: "რას ნიშნავს ჩაშენებული ტიპის პრედიკატის 'this is X' გამოყენება კლასის მეთოდის დასაბრუნებელ ტიპად?"
        },
        code: `<span class="kw">class</span> <span class="type">File</span> {
    isNetworkFile(): <span class="kw">this is</span> <span class="type">NetworkFile</span> { <span class="kw">return this</span> <span class="kw">instanceof</span> <span class="type">NetworkFile</span>; }
}`,
        options: [
            { ru: "Позволяет сужать тип текущего экземпляра класса при использовании метода в условиях (Type Guard)", en: "Allows narrowing the specific instance type when utilizing conditional guard expressions", ka: "საშუალებას იძლევა შევიწროვდეს კლასის მიმდინარე ეგზემპლარის ტიპი პირობით კონსტრუქციებში (Type Guard)" },
            { ru: "Принудительно перезаписывает контекст выполнения 'this' на объект X", en: "Forces a binding override targeting runtime contexts directly onto shape X", ka: "იძულებით გადაწერს 'this' კონტექსტს X ობიექტზე" },
            { ru: "Динамически превращает текущий класс в интерфейс во время выполнения", en: "Transforms the compiling class blueprint dynamically into an interface format", ka: "დინამიურად აქცევს მიმდინარე კლასს ინტერფეისად runtime-ში" },
            { ru: "Это некорректный синтаксис, вызывающий ошибку компиляции", en: "This represents corrupted invalid token sequences that fail compiler routines", ka: "ეს არის არაკორექტული სინტაქსი, რომელიც იწვევს შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Возвращаемое значение вида `this is X` называется 'user-defined type guard' на уровне класса. Когда метод вызывается внутри блока `if`, компилятор TS автоматически сужает тип переменной до `NetworkFile` внутри этого блока.",
            en: "Using 'this is X' unlocks class-level guards. If a guard method resolves true in an 'if' clause, the compiler safely narrows down downstream types to the matched target layout.",
            ka: "`this is X` ტიპის დაბრუნება არის კლასის დონის 'user-defined type guard'. როდესაც მეთოდი გამოიძახება `if` ბლოკში, TS ავტომატურად ავიწროებს ცვლადის ტიპს `NetworkFile`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards",
        docLabel: "This-based Type Guards — Handbook"
    },
    {
        id: 132,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Какое ключевое слово позволяет методу класса ссылаться на тип самого класса-наследника, а не базового класса?",
            en: "Which keyword allows a method to reference the type of the current derived class rather than the base class?",
            ka: "რომელი საკვანძო სიტყვა აძლევს კლასის მეთოდს საშუალებას მიუთითოს თავად შვილობილი კлასის ტიპზე და არა ბაზურზე?"
        },
        code: `<span class="kw">class</span> <span class="type">Builder</span> {
    setTheme(): <span class="kw">this</span> { <span class="kw">return this</span>; }
}`,
        options: [
            { ru: "self", en: "self", ka: "self" },
            { ru: "this", en: "this", ka: "this" },
            { ru: "typeof", en: "typeof", ka: "typeof" },
            { ru: "super", en: "super", ka: "super" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript `this` может использоваться как тип данных (polymorphic this type). Он динамически представляет тип текущего класса, что очень удобно для построения цепочек методов (Fluent API / Method Chaining) в иерархиях наследования.",
            en: "The polymorphic 'this' type acts as a fluid reference representing the exact active class type shape. It enables seamless method chaining APIs without losing subclass accuracy.",
            ka: "TypeScript-ში `this` შეიძლება გამოყენებულ იქნას როგორც მონაცემთა ტიპი (polymorphic this type). ის დინამიურად ასახავს მიმდინარე კლასის ტიპს, რაც მოსახერხებელია მეთოდების ჯაჭვისთვის (Fluent API)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types",
        docLabel: "This Types — Handbook"
    },
    {
        id: 133,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Можно ли использовать обобщенные типы (Generics) в определении классов?",
            en: "Is it possible to utilize generic parameters within class definitions?",
            ka: "შესაძლებელია თუ არა უნივერსალური ტიპების (Generics) გამოყენება კლასების განსაზღვრაში?"
        },
        code: `<span class="kw">class</span> <span class="type">Box</span>&lt;<span class="type">T</span>&gt; { contents: <span class="type">T</span>; }`,
        options: [
            { ru: "Да, классы могут иметь параметры типа, аналогично интерфейсам и функциям", en: "Yes, classes can take type arguments similarly to interfaces and functions", ka: "დიახ, კლასებს შეუძლიათ ჰქონდეთ ტიპის პარამეტრები ინტერფეისებისა და ფუნქციების მსგავსად" },
            { ru: "Нет, обобщения работают только с функциями и типами-алиасами", en: "No, generic parameters support only pure function scopes or type aliases", ka: "არა, ჯენერიკები მუშაობს მხოლოდ ფუნქციებთან და ტიპების ალიასებთან" },
            { ru: "Да, но только для статических (static) полей и методов", en: "Yes, but accessibility is locked exclusively onto static members", ka: "დიახ, მაგრამ მხოლოდ სტატიკური ველებისა და მეთოდებისთვის" },
            { ru: "Да, но класс должен обязательно наследоваться от другого класса", en: "Yes, provided the generic structure strictly inherits from a secondary object", ka: "დიახ, მაგრამ კლასი აუცილებლად უნდა აფართოებდეს სხვა კლასს" }
        ],
        correct: 0,
        explanation: {
            ru: "Классы в TypeScript могут быть обобщенными (Generic Classes). Параметр типа `T` доступен для свойств экземпляра и аргументов методов. Однако, важно помнить: статические (static) члены класса не могут использовать параметры типа класса.",
            en: "Generic classes introduce reusable structural variations. Type parameters apply comprehensively across instances, but cannot blend into static members due to runtime context isolation.",
            ka: "TypeScript-ში კლასები შეიძლება იყოს ჯენერიკები (Generic Classes). ტიპის პარამეტრი `T` ხელმისაწვდომია ეგზემპლარის თვისებებისა და მეთოდებისთვის. თუმცა სტატიკური წევრები ვერ გამოიყენებენ მას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#generic-classes",
        docLabel: "Generic Classes — Handbook"
    },
    {
        id: 134,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что будет результатом компиляции пустого класса без методов и свойств?",
            en: "What is the compilation output of an empty class containing no structural elements?",
            ka: "რა იქნება მეთოდებისა და თვისებების გარეშე ცარიელი კლასის კომპილაციის შედეგი?"
        },
        code: `<span class="kw">class</span> <span class="type">Empty</span> {}`,
        options: [
            { ru: "Пустой объект {}, так как TS удаляет пустые декларации", en: "A blank literal object {} because TS prunes hollow blueprints", ka: "ცარიელი ობიექტი {}, რადგან TS შლის ცარიელ დეკლარაციებს" },
            { ru: "Обычная JS-функция конструктора (или IIFE / class синтаксис в зависимости от target)", en: "A standard JS constructor function or ES6 class depending on compilation target settings", ka: "ჩვეულებრივი JS კონსტრუქტორ-ფუნქცია (ან ES6 კლასი target-ის მიხედვით)" },
            { ru: "В JS файле ничего не сгенерируется, строка сотрется", en: "The compiled file leaves no traceable footprint and remains empty", ka: "JS ფაილში არაფერი გენერირდება, ხაზი წაიშლება" },
            { ru: "Компилятор выбросит критическое предупреждение", en: "The compiler architecture generates fatal structural optimization alerts", ka: "კომპილატორი გამოიტანს კრიტიკულ შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "Классы в TS имеют реальное рантайм-представление. Даже пустой класс превратится в функцию-конструктор или ES6 `class {}` в итоговом JavaScript. В отличие от интерфейсов, которые полностью удаляются.",
            en: "Unlike interfaces, classes are full-fledged JavaScript runtime entities. Compiling an empty class outputs an active JS constructor matching your specified target environment configuration.",
            ka: "კლასებს TS-ში აქვთ რეალური რანთაიმ წარმოდგენა. ცარიელი კლასიც კი გადაიქცევა კონსტრუქტორ-ფუნქციად ან ES6 კლასად საბოლოო JS ფაილში, განსხვავებით ინტერფეისებისგან, რომლებიც სრულად იშლება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html",
        docLabel: "Classes Introduction — Handbook"
    },
    {
        id: 135,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Какое поведение демонстрирует TypeScript при наличии статического блока инициализации (static initialization blocks)?",
            en: "How do static initialization blocks behave in TypeScript classes?",
            ka: "როგორ იქცევა სტატიკური ინიციალიზაციის ბლოკი (static initialization blocks) TypeScript კლასებში?"
        },
        code: `<span class="kw">class</span> <span class="type">Foo</span> {
    <span class="kw">static</span> count = <span class="num">0</span>;
    <span class="kw">static</span> { <span class="kw">this</span>.count = <span class="num">10</span>; }
}`,
        options: [
            { ru: "Позволяет выполнять сложную логику настройки статических полей при загрузке класса", en: "Allows execution of complex setup sequences tailored for static fields during initial class evaluations", ka: "საშუალებას იძლევა შესრულდეს სტატიკური ველების კონფიგურაციის რთული ლოგიკა კლასის ჩატვირთვისას" },
            { ru: "Вызывает синтаксическую ошибку компиляции, блоки не поддерживаются", en: "Generates strict token breakdown exceptions as initialization blocks fail support criteria", ka: "იწვევს სინტაქსურ შეცდომას, ბლოკები არ არის მხარდაჭერილი" },
            { ru: "Этот код выполняется каждый раз при вызове оператора new", en: "This block fires repeatedly upon every instantiation triggered via the new operator", ka: "ეს კოდი სრულდება ყოველ ჯერზე, როცა გამოიძახება new ოპერატორი" },
            { ru: "Блок выполняется асинхронно после загрузки всего приложения", en: "The engine queues the block to resolve asynchronously once standard entry points finish", ka: "ბლოკი სრულდება ასინქრონულად მთელი აპლიკაციის ჩატვირთვის შემდეგ" }
        ],
        correct: 0,
        explanation: {
            ru: "Статические блоки инициализации (введенные в ES2022 и поддерживаемые в TS) позволяют писать полноценный связный код для настройки статических свойств, включая доступ к приватным статическим полям.",
            en: "Static initialization blocks introduce formal environments for configuring shared fields. They possess native access rights into class scopes and run exactly once upon type registration.",
            ka: "სტატიკური ინიციალიზაციის ბლოკები (შემოტანილი ES2022-ში და მხარდაჭერილი TS-ში) საშუალებას გვაძლევს დავწეროთ სრულფასოვანი კოდი სტატიკური თვისებების მოსამზადებლად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#static-initialization-blocks",
        docLabel: "Static Initialization Blocks — Handbook"
    },
    {
        id: 136,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Каким модификатором по умолчанию обладают все свойства и методы класса, если он не указан явно?",
            en: "Which visibility level is assigned to class elements by default if omitted?",
            ka: "რომელი ნაგულისხმევი მოდიფიკატორი აქვთ კლასის ველებსა და მეთოდებს, თუ ის აშკარად არ არის მითითებული?"
        },
        code: `<span class="kw">class</span> <span class="type">User</span> { name: <span class="type">string</span>; }`,
        options: [
            { ru: "private", en: "private", ka: "private" },
            { ru: "protected", en: "protected", ka: "protected" },
            { ru: "public", en: "public", ka: "public" },
            { ru: "internal", en: "internal", ka: "internal" }
        ],
        correct: 2,
        explanation: {
            ru: "В TypeScript все члены класса по умолчанию являются публичными (`public`), что соответствует стандартному поведению JavaScript объектов. Указывать ключевое слово `public` необязательно.",
            en: "All class properties or methods drop into public visibility domains by default. Explicitly writing out 'public' tokens is purely descriptive and structural style choice.",
            ka: "TypeScript-ში კლასის ყველა წევრი ნაგულისხმევად არის საჯარო (`public`), რაც შეესაბამება JavaScript ობიექტების სტანდარტულ ქცევას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/classes.html#public",
        docLabel: "Public Modifier — Handbook"
    },
    {
        id: 137,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что проверяет оператор instanceof применительно к классам в рантайме?",
            en: "What does the instanceof operator verify regarding classes at runtime?",
            ka: "რას ამოწმებს instanceof ოპერატორი კლასებთან მიმართებაში runtime-ში?"
        },
        code: `<span class="kw">const</span> isUser = u <span class="kw">instanceof</span> <span class="type">User</span>;`,
        options: [
            { ru: "Проверяет наличие имени класса в строковом метафайле проекта", en: "Validates string token representations within compiled manifest structures", ka: "ამოწმებს კლასის სახელს პროექტის მეტაფაილში" },
            { ru: "Проверяет, присутствует ли свойство prototype класса в цепочке прототипов объекта", en: "Checks if the class constructor prototype property exists within the object chain of prototypes", ka: "ამოწმებს, არის თუ არა კლასის prototype თვისება ობიექტის პროტოტიპების ჯაჭვში" },
            { ru: "Сравнивает хеш-суммы структуры типов во время компиляции", en: "Compares structural type shape hash signatures compiled during validation passes", ka: "ადარებს ტიპების სტრუქტურის ჰეშ-ჯამებს კომპილაციის დროს" },
            { ru: "Проверяет исключительно наличие публичных методов у проверяемого объекта", en: "Inspects shape interfaces looking strictly for matching methods exposures", ka: "ამოწმებს მხოლოდ საჯარო მეთოდების არსებობას შესამოწმებელ ობიექტში" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор `instanceof` — это стандартный JS оператор. Он проверяет связь объекта с функцией-конструктором через цепочку прототипов (prototype chain). Он работает исключительно в рантайме и ничего не знает о типах TS.",
            en: "The native 'instanceof' utility traverses JavaScript prototype structures in runtime. It evaluates constructor ancestry and is totally independent of structural TypeScript typing rules.",
            ka: "`instanceof` ოპერატორი არის სტანდარტული JS ოპერატორი. ის ამოწმებს ობიექტის კავშირს კონსტრუქტორთან პროტოტიპების ჯაჭვის (prototype chain) მეშვეობით."
        },
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",
        docLabel: "instanceof MDN Web Docs"
    },
    {
        id: 138,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Как можно предотвратить наследование от класса или переопределение конкретного метода?",
            en: "How can you completely block class expansion or override actions on specific methods?",
            ka: "როგორ შეგვიძლია თავიდან ავიცილოთ კლასისგან მემკვიდრეობის მიღება ან კონკრეტული მეთოდის გადაწერა?"
        },
        code: `<span class="comment">// Требуется запретить расширение класса</span>`,
        options: [
            { ru: "Использовать ключевое слово final, как в Java", en: "Append the Java-like 'final' access keyword modifiers", ka: "გამოვიყენოთ საკვანძო სიტყვა final, როგორც Java-ში" },
            { ru: "В TypeScript нет нативного ключевого слова final; для этого используются декораторы или приватные конструкторы", en: "TypeScript lacks a native 'final' keyword; you must implement decorators or secure private constructor paths", ka: "TypeScript-ში არ არის ნატიური final საკვანძო სიტყვა; ამისთვის გამოიყენება დეკორატორები ან პრივატული კონსტრუქტორები" },
            { ru: "Добавить модификатор static перед объявлением класса", en: "Prepend structural 'static' keywords right onto class heads directly", ka: "დავამატოთ static მოდიფიკატორი კლასის გამოცხადების წინ" },
            { ru: "Пометить класс ключевым словом const", en: "Mark the entire targeted class layout via immutable 'const' prefixes", ka: "მოვნიშნოთ კლასი const საკვანძო სიტყვით" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript отсутствует зарезервированное слово `final` для классов. Ограничить наследование можно, сделав конструктор `private` (тогда создавать экземпляры придется через статические фабричные методы) или используя специальные декораторы рантайма.",
            en: "TypeScript currently does not offer native keyword blockers like 'final'. Immutability patterns require restrictive engineering layout designs, such as isolating signatures using private constructors.",
            ka: "TypeScript-ში არ არსებობს რეზერვირებული სიტყვა `final`. მემკვიდრეობის შეზღუდვა შესაძლებელია კონსტრუქტორის `private`-ად აქციით ან სპეციალური დეკორატორების გამოყენებით."
        },
        docLink: "https://github.com/microsoft/TypeScript/issues/8306",
        docLabel: "Issue: Feature request 'final' classes — GitHub"
    },
    {
        id: 139,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Как типизировать конструктор класса, принимаемый в качестве аргумента функции?",
            en: "How do you specify a class constructor signature expected as a functional parameter?",
            ka: "როგორ განვსაზღვროთ კლასის კონსტრუქტორის ტიპი, რომელიც გადაეცემა ფუნქციას არგუმენტად?"
        },
        code: `<span class="kw">function</span> createInstance(ctor: <span class="kw">___</span>) { <span class="kw">return new</span> ctor(); }`,
        options: [
            { ru: "ctor: object", en: "ctor: object", ka: "ctor: object" },
            { ru: "ctor: new () => any", en: "ctor: new () => any", ka: "ctor: new () => any" },
            { ru: "ctor: Function", en: "ctor: Function", ka: "ctor: Function" },
            { ru: "ctor: typeof Class", en: "ctor: typeof Class", ka: "ctor: typeof Class" }
        ],
        correct: 1,
        explanation: {
            ru: "Для описания типа самого класса (его конструктора), готового к инстанцированию через `new`, используется специальный синтаксис сигнатуры конструктора: `new (...args: any[]) => T`.",
            en: "To declare a constructable signature type constraint, specify syntax mapping constructor forms: `new () => InstanceType`. Generic shapes require invocation permissions.",
            ka: "თავად კლასის (მისი კონსტრუქტორის) ტიპის აღსაწერად, რომელიც მზად არის `new`-ით გამოსაძახებლად, გამოიყენება კონსტრუქტორის ხელმოწერის სინტაქსი: `new () => any`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics",
        docLabel: "Using Class Types in Generics — Handbook"
    },
    {
        id: 140,
        category: { ru: "Классы", en: "Classes", ka: "კლასები" },
        tag: "classes",
        question: {
            ru: "Что такое структурная типизация (structural typing) в контексте сравнения классов?",
            en: "What is structural typing in the context of class instances comparison?",
            ka: "რა არის სტრუქტურული ტიპიზაცია (structural typing) კლასების შედარების კონტექსტში?"
        },
        code: `<span class="kw">class</span> <span class="type">Point</span> { x = <span class="num">0</span>; y = <span class="num">0</span>; }
<span class="kw">class</span> <span class="type">Size</span> { x = <span class="num">0</span>; y = <span class="num">0</span>; }
<span class="kw">const</span> p: <span class="type">Point</span> = <span class="kw">new</span> <span class="type">Size</span>();`,
        options: [
            { ru: "Это вызовет ошибку, так как имена классов Point и Size различаются (номинативная типизация)", en: "This causes errors because names 'Point' and 'Size' conflict under strict nominal laws", ka: "ეს გამოიწვევს შეცდომას, რადგან Point და Size კლასის სახელები განსხვავებულია" },
            { ru: "Код скомпилируется без ошибок, так как TS сравнивает структуру свойств и их типы, а не имена классов", en: "The code compiles perfectly because TS verifies the structural shapes of properties rather than class identifier titles", ka: "კოდი კომპილირდება შეცდომის გარეშე, რადგან TS ადარებს თვისებების სტრუქტურას და არა კლასების სახელებს" },
            { ru: "Классы можно сравнивать только в том случае, если они унаследованы от одного родителя", en: "Class comparison checks only pass if they align underneath shared heritage extensions", ka: "კლასების შედარება შესაძლებელია მხოლოდ იმ შემთხვევაში, თუ ისინი ერთი მშობლისგან არიან ნაწარმოები" },
            { ru: "Операция разрешена только при отключенном режиме strict", en: "The assignment operation passes compiler checks only when disabling strict mode configurations", ka: "ოპერაცია დაშვებულია მხოლოდ მაშინ, როცა strict რეჟიმი გამორთულია" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript использует структурную систему типов ('утиную типизацию'). Если два класса имеют одинаковую форму (набор свойств одного типа), их экземпляры взаимозаменяемы с точки зрения компилятора, даже если у них разные имена.",
            en: "TypeScript runs on structural typing foundations. If independent classes layout perfectly identical properties and shapes, their instances are highly compatible across operations regardless of explicit naming designations.",
            ka: "TypeScript იყენებს სტრუქტურულ ტიპიზაციას. თუ ორ სხვადასხვა კლასს აქვს იდენტური თვისებები და ტიპები, მათი ეგზემპლარები ურთიერთჩანაცვლებადია, მიუხედავად განსხვავებული სახელებისა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html",
        docLabel: "Type Compatibility — Handbook"
    },

    // 8. ДЕКОРАТОРЫ
    {
        id: 141,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Что по сути представляет собой декоратор в архитектуре TypeScript?",
            en: "What structurally is a decorator within TypeScript architecture?",
            ka: "რას წარმოადგენს თავისი არსით დეკორატორი TypeScript-ის არქიტექტურაში?"
        },
        code: `@<span class="fn">frozen</span>
<span class="kw">class</span> <span class="type">Ice</span> {}`,
        options: [
            { ru: "Обычная функция, которая вызывается с метаданными о декорируемой сущности", en: "A standard function invoked automatically with metadata regarding the targeted entity", ka: "ჩვეულებრივი ფუნქცია, რომელიც გამოიძახება დეკორირებული ერთეულის მეტამონაცემებით" },
            { ru: "Макрос компилятора, внедряющий дополнительный бинарный код", en: "A custom macro processing raw binary layout formats", ka: "კომპილატორის მაკროსი, რომელსაც შეაქვს დამატებითი ბინარული კოდი" },
            { ru: "Специальный интерфейс для описания системных файлов логирования", en: "An interface blueprint tracking microservice telemetry logging blueprints", ka: "სპეციალური ინტერფეისი სისტემური ლოგირების ფაილების აღსაწერად" },
            { ru: "Конструкция для асинхронного импорта внешних JS-модулей", en: "An asynchronous tool fetching remote dependency scripts during runtime execution", ka: "კონსტრუქცია გარე JS მოდულების ასინქრონული იმპორტისთვის" },
        ],
        correct: 0,
        explanation: {
            ru: "Декоратор — это просто функция высшего порядка, которая автоматически вызывается средой выполнения JavaScript при инициализации класса. Она принимает параметры в зависимости от того, куда подвешена (сам класс, его метод, свойство или аргумент). Декоратор может изменить поведение сущности, логировать вызовы, подменять логику или навешивать метаданные. Напоминание: старые декораторы требуют флага experimentalDecorators, новые соответствуют стандарту ECMAScript Stage 3.",
            en: "A decorator is essentially a high-order function invoked by the JS runtime engine during prototype declaration setup. Depending on its attachment metadata point (a class, parameter, accessor, or method), it receives specific references allowing it to intercept, alter, log, wrap, or inject custom runtime functionality. Experimental versions require specific tsconfig variables, whereas modern iterations follow Stage 3 specs.",
            ka: "დეკორატორი არის უბრალოდ მაღალი შეკვეთის ფუნქცია, რომელიც ავტომატურად გამოიძახება JS-ის მიერ კლასის ინიციალიზაციისას. ის იღებს პარამეტრებს იმის მიხედვით, თუ რაზეა მიბმული (თავად კლასი, მეთოდი, თვისება თუ არგუმენტი). მას შეუძლია შეცვალოს კლასის ქცევა. ძველ ვერსიებს სჭირდება experimentalDecorators ფლაგი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html",
        docLabel: "Decorators — Handbook"
    },
    {
        id: 142,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Что такое фабрика декораторов (Decorator Factory)?",
            en: "What is a Decorator Factory?",
            ka: "რა არის დეკორატორის ფაბრიკა (Decorator Factory)?"
        },
        code: `<span class="kw">function</span> color(value: <span class="type">string</span>) {
    <span class="kw">return function</span> (target: <span class="type">any</span>) { <span class="comment">// ... </span> };
}
@color(<span class="str">"red"</span>) <span class="kw">class</span> <span class="type">Car</span> {}`,
        options: [
            { ru: "Паттерн для асинхронного создания инстансов декоратора", en: "A creational pattern engineered to instantiate generic decorators asynchronously", ka: "პატერნი დეკორატორის ინსტანციების ასინქრონული შექმნისთვის" },
            { ru: "Функция, которая принимает аргументы и возвращает сам декоратор, позволяя кастомизировать его поведение", en: "A function that accepts arguments and returns the actual decorator function, enabling runtime customization", ka: "ფუნქცია, რომელიც იღებს არგუმენტებს და აბრუნებს თავად დეკორატორს, რაც საშუალებას გვაძლევს მოვახდინოთ მისი ქცევის კონფიგურაცია" },
            { ru: "Встроенный класс TypeScript для генерации метаданных", en: "An internal core TypeScript class utility designed for generating metadata properties", ka: "TypeScript-ის ჩაშენებული კლასი მეტამონაცემების გენერირებისთვის" },
            { ru: "Специальный синтаксис для внедрения зависимостей в Angular", en: "A unique structural wrapper targeted for dependency injections in Angular frameworks", ka: "სპეციალური სინტაქსი Angular-ში დამოკიდებულებების ინექციისთვის (Dependency Injection)" }
        ],
        correct: 1,
        explanation: {
            ru: "Фабрика декораторов — это обычная функция, возвращающая выражение, которое и будет вызвано декоратором во время выполнения. С помощью фабрик мы можем передавать параметры в декораторы (например, `@color('red')`), настраивая их логику 'на лету'.",
            en: "A Decorator Factory is simply a function that returns a decorator expression. This wrapping layer allows developers to pass configuration options or parameters directly into the decorator call syntax.",
            ka: "დეკორატორის ფაბრიკა არის ჩვეულებრივი ფუნქცია, რომელიც აბრუნებს გამოსახულებას, რომელსაც გამოიძახებს დეკორატორი runtime-ში. ფაბრიკების დახმარებით ჩვენ შეგვიძლია გადავცეთ პარამეტრები დეკორატორებს (მაგალითად, `@color('red')`)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories",
        docLabel: "Decorator Factories — Handbook"
    },
    {
        id: 143,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Какой флаг в tsconfig.json отвечает за включение старой (legacy) экспериментальной поддержки декораторов?",
            en: "Which tsconfig.json flag enables the legacy experimental decorator support?",
            ka: "tsconfig.json-ის რომელი ფლაგი რთავს დეკორატორების ძველ (legacy) ექსპერიმენტულ მხარდაჭერას?"
        },
        code: `{ <span class="str">"compilerOptions"</span>: { <span class="str">"___________"</span>: <span class="num">true</span> } }`,
        options: [
            { ru: "enableDecorators", en: "enableDecorators", ka: "enableDecorators" },
            { ru: "experimentalDecorators", en: "experimentalDecorators", ka: "experimentalDecorators" },
            { ru: "useDecoratorsStage3", en: "useDecoratorsStage3", ka: "useDecoratorsStage3" },
            { ru: "emitDecoratorMetadata", en: "emitDecoratorMetadata", ka: "emitDecoratorMetadata" }
        ],
        correct: 1,
        explanation: {
            ru: "Исторически в TS декораторы были экспериментальной фичей, требующей флага 'experimentalDecorators'. Начиная с TS 5.0, по умолчанию поддерживаются новые стандартные декораторы ECMAScript Stage 3, для которых этот флаг больше НЕ нужен.",
            en: "The 'experimentalDecorators' compiler flag is explicitly bound to legacy Stage 2 implementations. Modern ECMAScript Stage 3 specifications introduced in TS 5.0 execute natively without requiring this setting.",
            ka: "ისტორიულად TS-ში დეკორატორები იყო ექსპერიმენტული ფუნქცია, რომელიც მოითხოვდა ფლაგს 'experimentalDecorators'. TS 5.0-დან მხარდაჭერილია ECMAScript Stage 3 სტანდარტის დეკორატორები, რომლებსაც ეს ფლაგი აღარ სჭირდებათ."
        },
        docLink: "https://www.typescriptlang.org/tsconfig#experimentalDecorators",
        docLabel: "experimentalDecorators — TSConfig Reference"
    },
    {
        id: 144,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "В каком порядке выполняются несколько декораторов, примененных к одной сущности (композиция декораторов)?",
            en: "In what order are multiple decorators executed when applied to a single entity (decorator composition)?",
            ka: "რა თანმიმდევრობით სრულდება ერთ ერთეულზე გამოყენებული რამდენიმე დეკორატორი (დეკორატორების კომპოზიცია)?"
        },
        code: `@f @g <span class="kw">class</span> <span class="type">X</span> {}`,
        options: [
            { ru: "Сверху вниз / Слева направо: сначала f, затем g", en: "Top-to-bottom / Left-to-right: first f, then g evaluates and runs", ka: "ზემოდან ქვემოთ / მარცხნიდან მარჯვნივ: ჯერ f, შემდეგ g" },
            { ru: "Снизу вверх / Справа налево: выражения оцениваются сверху вниз, но вызываются снизу вверх (сначала g, потом f)", en: "Bottom-to-top / Right-to-left: expressions are evaluated top-to-bottom, but executed bottom-to-top (first g, then f)", ka: "ქვემოდან ზემოთ / მარჯვნიდან მარცხნივ: გამოსახულებები ფასდება ზემოდან ქვემოთ, მაგრამ გამოიძახება ქვემოდან ზემოთ (ჯერ g, შემდეგ f)" },
            { ru: "Они выполняются строго одновременно асинхронно через Promise.all", en: "They run strictly concurrently wrapped inside internal Promise.all calls", ka: "ისინი სრულდებიან მკაცრად ერთდროულად ასინქრონულად Promise.all-ის მეშვეობით" },
            { ru: "Порядок определяется случайным образом в рантайме", en: "The execution sequence is completely randomized by the JS compilation order", ka: "თანმიმდევრობა განისაზღვრება შემთხვევითად რანთაიმში" }
        ],
        correct: 1,
        explanation: {
            ru: "Композиция декораторов работает аналогично композиции функций в математике. Оценка выражений фабрик идет сверху вниз, но сам вызов функций-декораторов происходит снизу вверх: f(g(x)). Сначала отработает `@g`, а результат передастся в `@f`.",
            en: "Decorator composition mimics mathematical function nesting f(g(x)). Evaluating step sequences run top-to-bottom, while the practical execution loops back bottom-to-top, handling the closest decorator first.",
            ka: "დეკორატორების კომპოზიცია მუშაობს მათემატიკური ფუნქციების კომპოზიციის მსგავსად. ფაბრიკების შეფასება ხდება ზემოდან ქვემოთ, მაგრამ თავად დეკორატორი ფუნქციების გამოძახება ხდება ქვემოდან ზემოთ: f(g(x)). ჯერ შესრულდება `@g`, ხოლო შედეგი გადაეცემა `@f`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-composition",
        docLabel: "Decorator Composition — Handbook"
    },
    {
        id: 145,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Какое количество аргументов принимает классический (legacy) декоратор класса?",
            en: "How many arguments does a classic (legacy) class decorator accept?",
            ka: "რამდენ არგუმენტს იღებს კლასის კლასიკური (legacy) დეკორატორი?"
        },
        code: `<span class="kw">function</span> MyClassDecorator(target: <span class="type">any</span>) {}`,
        options: [
            { ru: "Один аргумент: сам конструктор класса", en: "Exactly one argument: the constructor function of the class itself", ka: "ერთ არგუმენტს: თავად კლასის კონსტრუქტორს" },
            { ru: "Два аргумента: конструктор класса и объект метаданных context", en: "Two arguments: the class constructor and a dedicated context metadata object", ka: "ორ არგუმენტს: კლასის კონსტრუქტორს და context მეტამონაცემების ობიექტს" },
            { ru: "Три аргумента: прототип, имя метода и дескриптор", en: "Three arguments: prototype reference, method key name, and descriptor layout", ka: "სამ არგუმენტს: პროტოტიპს, მეთოდის სახელს და დესკრიპტორს" },
            { ru: "Ни одного, он оперирует глобальным контекстом", en: "Zero, it mutates execution streams purely via global configurations", ka: "არცერთს, ის ოპერირებს გლობალური კონტექსტით" }
        ],
        correct: 0,
        explanation: {
            ru: "В экспериментальном (legacy) режиме декоратор класса принимает ровно один аргумент — функцию-конструктор (`target`) декорируемого класса. В новом стандарте Stage 3 вторым параметром добавляется объект `context`.",
            en: "Under legacy experimental rules, a class decorator accepts only a single argument: the constructor function target. This varies from modern Stage 3 designs which enforce a secondary context map.",
            ka: "ექსპერიმენტულ (legacy) რეჟიმში კლასის დეკორატორი იღებს ზუსტად ერთ არგუმენტს — დეკორირებული კლასის კონსტრუქტორ ფუნქციას (`target`). Stage 3 სტანდარტში კი მეორე პარამეტრად ემატება `context` ობიექტი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators",
        docLabel: "Class Decorators — Handbook"
    },
    {
        id: 146,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Что принимает классический (legacy) декоратор метода в качестве аргументов?",
            en: "What arguments does a classic (legacy) method decorator receive?",
            ka: "რას იღებს მეთოდის კლასიკური (legacy) დეკორატორი არგუმენტებად?"
        },
        code: `<span class="kw">function</span> MethodDec(target: <span class="type">any</span>, propertyKey: <span class="type">string</span>, descriptor: <span class="type">PropertyDescriptor</span>) {}`,
        options: [
            { ru: "Только саму функцию метода", en: "Exclusively the target method function declaration itself", ka: "მხოლოდ თავად მეთოდის ფუნქციას" },
            { ru: "Три аргумента: прототип класса (или конструктор), имя метода и дескриптор свойства", en: "Three arguments: class prototype (or constructor), method name, and the property descriptor", ka: "სამ არგუმენტს: კლასის პროტოტიპს (ან კონსტრუქტორს), მეთოდის სახელს და თვისების დესკრიპტორს (descriptor)" },
            { ru: "Два аргумента: инстанс класса и возвращаемое значение", en: "Two arguments: the instanced class target and the returned value mapping", ka: "ორ არგუმენტს: კლასის ინსტანცს და დასაბრუნებელ მნიშვნელობას" },
            { ru: "Четыре аргумента, включая массив переданных аргументов", en: "Four parameters, tracking positions down to the actual arguments array passed", ka: "ოთხ არგუმენტს, გადაცემული არგუმენტების მასივის ჩათვლით" }
        ],
        correct: 1,
        explanation: {
            ru: "Классический декоратор метода в TS принимает 3 параметра: `target` (прототип для обычного метода или конструктор для статического), `propertyKey` (имя метода) и `descriptor` (объект дескриптора свойства JS, позволяющий перехватить `value` — саму функцию).",
            en: "A legacy method decorator processes three parameters: target prototype, the method name string, and the PropertyDescriptor. The descriptor gives access to modify or replace the underlying method value.",
            ka: "მეთოდის კლასიკური დეკორატორი TS-ში იღებს 3 პარამეტრს: `target` (კლასის პროტოტიპი ან კონსტრუქტორი), `propertyKey` (მეთოდის სახელი) და `descriptor` (თვისების დესკრიპტორის ობიექტი, რომელიც საშუალებას გვაძლევს შევცვალოთ მეთოდის ქცევა)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators",
        docLabel: "Method Decorators — Handbook"
    },
    {
        id: 147,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "В чем главное концептуальное отличие новых декораторов (Stage 3, TS 5.0+) от старых (experimental)?",
            en: "What is the primary conceptual difference between modern (Stage 3, TS 5.0+) and legacy (experimental) decorators?",
            ka: "რა არის მთავარი კონცეპტუალური განსხვავება ახალ (Stage 3, TS 5.0+) და ძველ (experimental) დეკორატორებს შორის?"
        },
        code: `<span class="comment">// Поведение в новых версиях TS</span>`,
        options: [
            { ru: "Новые декораторы работают быстрее в рантайме, так как компилируются в бинарный код WASM", en: "Modern decorators execute faster because they map into binary WASM formats", ka: "ახალი დეკორატორები უფრო სწრაფად მუშაობენ, რადგან კომპილირდებიან WASM ბინარულ კოდში" },
            { ru: "Новые декораторы стандартизированы в TC39, не требуют флага компилятора и вместо дескриптора принимают типизированный объект context", en: "Modern decorators match TC39 standards, run natively without flags, and receive a strongly-typed 'context' object instead of raw JS descriptors", ka: "ახალი დეკორატორები სტანდარტიზებულია TC39-ის მიერ, არ საჭიროებენ კომპილატორის ფლაგს და დესკრიპტორის ნაცვლად იღებენ ტიპიზებულ context ობიექტს" },
            { ru: "Новые декораторы могут применяться только к стрелочным функциям", en: "Modern specifications shift decorator access exclusively onto arrow functions", ka: "ახალი დეკორატორების გამოყენება შესაძლებელია მხოლოდ ისრიან (arrow) ფუნქციებზე" },
            { ru: "Старые декораторы изменяли классы, а новые могут изменять только интерфейсы", en: "Legacy versions adjusted classes, whereas modern alternatives target interfaces only", ka: "ძველი დეკорატორები ცვლიდნენ კლასებს, ხოლო ახლებს შეუძლიათ შეცვალონ მხოლოდ ინტერფეისები" }
        ],
        correct: 1,
        explanation: {
            ru: "Новые декораторы Stage 3 (TS 5.0+) — это официальный стандарт JavaScript. Они принимают саму сущность и объект `ClassMemberDecoratorContext`, содержащий полезные метаданные (имя, приватное ли свойство, статический ли метод и т.д.). Они не поддерживают декораторы параметров, в отличие от экспериментальной версии.",
            en: "Stage 3 decorators mark standard native JS integration. The outdated PropertyDescriptor signature is replaced by an explicit context structure (`ClassMemberDecoratorContext`). Parameter decorators are dropped in this spec version.",
            ka: "ახალი Stage 3 დეკორატორები (TS 5.0+) არის JavaScript-ის ოფიციალური სტანდარტი. ისინი დესკრიპტორის ნაცვლად იღებენ `ClassMemberDecoratorContext` ობიექტს, რომელიც შეიცავს მეტამონაცემებს (სახელი, არის თუ არა პრივატული და ა.შ.)."
        },
        docLink: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators",
        docLabel: "Decorators in TypeScript 5.0 — DevBlogs"
    },
    {
        id: 148,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Какая библиотека обычно используется вместе со старыми декораторами для сохранения и чтения метаданных типов?",
            en: "Which library is commonly paired with legacy decorators to read and store type metadata?",
            ka: "რომელი ბიბლიოთეკა გამოიყენება ჩვეულებრივ ძველ დეკორატორებთან ერთად ტიპების მეტამონაცემების შესანახად და წასაკითხად?"
        },
        code: `<span class="kw">import</span> <span class="str">"___________"</span>;`,
        options: [
            { ru: "rxjs", en: "rxjs", ka: "rxjs" },
            { ru: "reflect-metadata", en: "reflect-metadata", ka: "reflect-metadata" },
            { ru: "tslib", en: "tslib", ka: "tslib" },
            { ru: "lodash-es", en: "lodash-es", ka: "lodash-es" }
        ],
        correct: 1,
        explanation: {
            ru: "Полифил `reflect-metadata` расширяет глобальный объект `Reflect` методами для работы с метаданными (например, `Reflect.defineMetadata`, `Reflect.getMetadata`). Это критически важно для работы Dependency Injection фреймворков (NestJS, InversifyJS, Angular с legacy-опциями).",
            en: "The `reflect-metadata` polyfill enhances the runtime `Reflect` engine. It provides specialized read/write APIs utilized heavily by enterprise dependency injection architectures like NestJS.",
            ka: "`reflect-metadata` პოლიფილი აფართოებს გლობალურ `Reflect` ობიექტს მეთოდებით მეტამონაცემებთან სამუშაოდ (მაგალითად: `Reflect.getMetadata`). ეს კრიტიკულად მნიშვნელოვანია ისეთი ფრეიმვორკებისთვის, როგორიცაა NestJS."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#metadata",
        docLabel: "Metadata Extension — Handbook"
    },
    {
        id: 149,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Что произойдет, если классический (legacy) декоратор метода возвращает какое-то значение?",
            en: "What happens if a classic (legacy) method decorator returns a value?",
            ka: "რა მოხდება, თუ მეთოდის კლასიკური (legacy) დეკორატორი აბრუნებს რაიმე მნიშვნელობას?"
        },
        code: `<span class="kw">function</span> log(t: <span class="type">any</span>, k: <span class="type">string</span>, d: <span class="type">PropertyDescriptor</span>) {
    <span class="kw">return</span> { ...d, writable: <span class="num">false</span> };
}`,
        options: [
            { ru: "Возвращаемое значение полностью игнорируется компилятором", en: "The returned token is completely bypassed and ignored by the build engine", ka: "დაბრუნებული მნიშვნელობა სრულად იგნორირებული იქნება კომპილატორის მიერ" },
            { ru: "Возвращенное значение используется в качестве нового дескриптора свойства для этого метода", en: "The returned object overrides and replaces the current property descriptor configuration for the method", ka: "დაბრუნებული მნიშვნელობა გამოყენებული იქნება როგორც მეთოდის ახალი თვისების დესკრიპტორი (Property Descriptor)" },
            { ru: "Это приводит к мгновенной синтаксической ошибке в рантайме", en: "It forces the application to collapse with an instant runtime syntax error", ka: "ეს გამოიწვევს მყისიერ სინტაქსურ შეცდომას runtime-ში" },
            { ru: "Метод преобразуется в асинхронный промис автоматически", en: "The runtime engine automatically converts the method into an asynchronous Promise", ka: "მეთოდი ავტომატურად გარდაიქმნება ასინქრონულ პრომისად" }
        ],
        correct: 1,
        explanation: {
            ru: "Если декоратор метода возвращает значение, оно будет использовано движком в качестве нового дескриптора свойства (Property Descriptor). Это позволяет, например, переопределить свойства `writable`, `enumerable`, `configurable` или подменить `value`.",
            en: "When a method decorator passes back an object return statement, TypeScript accepts it as a clean replacement for the active PropertyDescriptor, enabling straightforward method overwrites.",
            ka: "თუ მეთოდის დეკორატორი აბრუნებს მნიშვნელობას, ის გამოყენებული იქნება როგორც ახალი Property Descriptor. ეს საშუალებას გვაძლევს შევცვალოთ `writable`, `enumerable` ან თავად მეთოდის მნიშვნელობა (`value`)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators",
        docLabel: "Method Decorator Returns — Handbook"
    },
    {
        id: 150,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "К каким элементам класса НЕЛЬЗЯ применить декораторы?",
            en: "Which class components CANNOT be targeted by decorators?",
            ka: "კლასის რომელ ელემენტებზე არ შეიძლება დეკორატორების გამოყენება?"
        },
        code: `<span class="kw">class</span> <span class="type">Example</span> {
    <span class="kw">constructor</span>() {} <span class="comment">// Можно ли задекорировать сам конструктор напрямую?</span>
}`,
        options: [
            { ru: "К методам экземпляра класса", en: "Instance methods on a class structure", ka: "კლასის ეგზემპლარის მეთოდებზე" },
            { ru: "К статическим свойствам", en: "Static fields configured on classes", ka: "სტატიკურ თვისებებზე" },
            { ru: "К самому блоку конструктора напрямую (через @dec constructor)", en: "Directly to the constructor block itself (via @dec constructor)", ka: "უშუალოდ კონსტრუქტორის ბლოკზე (სინტაქსით @dec constructor)" },
            { ru: "К геттерам и сеттерам", en: "Getters and property accessors", ka: "გეტერებსა და სეტერებზე" }
        ],
        correct: 2,
        explanation: {
            ru: "Декораторы можно вешать на сам класс, на его методы, свойства, аксессоры (геттеры/сеттеры) и параметры. Однако синтаксис `@Decorator constructor()` является невалидным — задекорировать сам конструктор отдельно нельзя (только весь класс целиком).",
            en: "Decorators apply smoothly to classes, fields, methods, and accessors. However, appending decoration markers directly targeting a standalone `constructor()` signature is an invalid syntax.",
            ka: "დეკორატორების გამოყენება შეიძლება კლასზე, მეთოდებზე, ველებზე, გეტერებზე/სეტერებზე. თუმცა სინტაქსი `@Decorator constructor()` არის არავალიდური — კონსტრუქტორის ცალკე დეკორირება შეუძლებელია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html",
        docLabel: "Decorator Targets — Handbook"
    },
    {
        id: 151,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "В какой последовательности инициализируются декораторы разных типов внутри класса (порядок применения)?",
            en: "In what sequence are different types of decorators evaluated and executed within a class declaration?",
            ka: "რა თანმიმდევრობით ინიციალიზდება სხვადასხვა ტიპის დეკორატორები კლასის შიგნით?"
        },
        code: `<span class="comment">// Порядок для: параметров, методов, свойств, классов</span>`,
        options: [
            { ru: "Сначала класс, затем методы, затем свойства, и в конце параметры", en: "First class decorators, then methods, then properties, and parameters at the very end", ka: "ჯერ კლასი, შემდეგ მეთოდები, შემდეგ თვისებები და ბოლოს პარამეტრები" },
            { ru: "Сначала свойства, затем параметры методов, методы, и в самом конце — сам класс", en: "Instance properties/parameters first, followed by method elements, and the class decorator executes last", ka: "ჯერ თვისებები, შემდეგ მეთოდების პარამეტრები, მეთოდები და ბოლოს — თავად კლასი" },
            { ru: "Порядок полностью зависит от алфавитного написания имен декораторов", en: "The resolution sequence maps strictly alphabetically depending on decorator names", ka: "თანმიმდევრობა მთლიანად დამოკიდებულია დეკორატორების სახელების ანბანურ რიგზე" },
            { ru: "Все типы декораторов обрабатываются параллельно", en: "All decorator execution pipelines run simultaneously in a parallel runtime thread", ka: "ყველა ტიპის დეკორატორი მუშავდება პარალელურად" }
        ],
        correct: 1,
        explanation: {
            ru: "Внутри класса экспериментальные декораторы применяются в строгом порядке: 1. Свойства экземпляров и параметры методов. 2. Статические свойства и параметры статических методов. 3. Конструктор/Класс применяется в самом конце, когда прототип полностью сформирован.",
            en: "Inside a class, evaluation flows up from internal members to the top declaration level. Members (properties, parameters, methods) wrap and process first, leaving the class decorator to execute last.",
            ka: "კლასის შიგნით ექსპერიმენტული დეკორატორები სრულდება მკაცრი თანმიმდევრობით: 1. ეგზემპლარის თვისებები და მეთოდების პარამეტრები. 2. სტატიკური თვისებები/პარამეტრები. 3. თავად კლასის დეკორატორი სრულდება ყველაზე ბოლოს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-ordering",
        docLabel: "Decorator Ordering — Handbook"
    },
    {
        id: 152,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Что принимает классический декоратор свойства (Property Decorator) в TypeScript?",
            en: "What arguments does a classic Property Decorator receive?",
            ka: "რას იღებს თვისების კლასიკური დეკორატორი (Property Decorator) TypeScript-ში?"
        },
        code: `<span class="kw">function</span> PropDec(target: <span class="type">any</span>, propertyKey: <span class="type">string</span>) {}`,
        options: [
            { ru: "Два аргумента: прототип класса и имя свойства. Дескриптор свойства НЕ передается", en: "Two arguments: class prototype and the property name string. Property descriptor is NOT provided", ka: "ორ არგუმენტს: კლასის პროტოტიპს და თვისების სახელს. დესკრიპტორი მას არ გადაეცემა" },
            { ru: "Три аргумента, включая PropertyDescriptor свойства", en: "Three arguments, including the standard JS PropertyDescriptor object", ka: "სამ არგუმენტს, თვისების PropertyDescriptor-ის ჩათვლით" },
            { ru: "Один аргумент: текущее значение свойства", en: "Exactly one parameter: the live runtime value bound to that property", ka: "ერთ არგუმენტს: თვისების მიმდინარე მნიშვნელობას" },
            { ru: "Только объект метаданных", en: "Exclusively a solitary configuration metadata map object", ka: "მხოლოდ მეტამონაცემების ობიექტს" }
        ],
        correct: 0,
        explanation: {
            ru: "В отличие от декоратора метода, классический декоратор свойства принимает только 2 аргумента: `target` и `propertyKey`. Это связано с тем, что во время инициализации прототипа свойства еще не имеют дескрипторов в самом JS (они создаются на инстансе).",
            en: "Unlike method decorators, a legacy property decorator takes only two arguments: target and propertyKey. It does not get a PropertyDescriptor because fields are evaluated before instance assignments occur.",
            ka: "მეთოდის დეკორატორისგან განსხვავებით, თვისების კლასიკური დეკორატორი იღებს მხოლოდ 2 არგუმენტს: `target` და `propertyKey`. Property Descriptor მას არ გადაეცემა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators",
        docLabel: "Property Decorators — Handbook"
    },
    {
        id: 153,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Можно ли применить один и тот же декоратор к одному геттеру и одному сеттеру для одного свойства?",
            en: "Can you append separate matching decorators to both a getter and a setter of the same property?",
            ka: "შეიძლება თუ არა ერთი და იმავე თვისების გეტერზე და სეტერზე ცალ-ცალკе დეკორატორების დასმა?"
        },
        code: `<span class="kw">class</span> <span class="type">X</span> {
    @log <span class="kw">get</span> a() { <span class="kw">return</span> <span class="num">1</span>; }
    @log <span class="kw">set</span> a(v) {} <span class="comment">// Валидно ли это в классических декораторах?</span>
}`,
        options: [
            { ru: "Да, это стандартная практика", en: "Yes, this represents standard development layout patterns", ka: "დიახ, ეს სტანდაртული პრაქტიკაა" },
            { ru: "Нет, в экспериментальном режиме декоратор применяется к первому встретившемуся аксессору, вешать декораторы на оба аксессора для одного свойства запрещено", en: "No, under experimental rules, decorators apply to the first accessor encountered; decorating both accessors for a single property is a compilation error", ka: "არა, ექსპერიმენტულ რეჟიმში დეკორატორი ებმება პირველივე შეხვედრილ აქსესორს; ერთი თვისების ორივე აქსესორზე დეკორატორის დასმა აკრძალულია" },
            { ru: "Да, но только если сеттер ничего не возвращает", en: "Yes, but strictly provided that the setter layout returns void structures", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ სეტერი არაფერს აბრუნებს" },
            { ru: "Да, если флаг strictPropertyInitialization отключен", en: "Yes, assuming the strictPropertyInitialization compiler configuration is set to false", ka: "დიახ, თუ strictPropertyInitialization ფლაგი გამორთულია" }
        ],
        correct: 1,
        explanation: {
            ru: "В классических (experimental) декораторах TypeScript запрещено декорировать одновременно и геттер, и сеттер для одного свойства. Декоратор нужно ставить на тот аксессор, который идет первым в коде — он получит дескриптор, объединяющий оба метода.",
            en: "Legacy TS rules prohibit decorating both getter and setter blocks for the same member key. You must place the decorator on whichever accessor is declared first; its descriptor encompasses both channels.",
            ka: "კლასიკურ (experimental) დეკორატორებში აკრძალულია ერთი თვისების გეტერისა და სეტერის ერთდროულად დეკორირება. დეკორატორი უნდა დაისვას იმ აქსესორზე, რომელიც კოდში პირველი წერია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators",
        docLabel: "Accessor Decorators — Handbook"
    },
    {
        id: 154,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "В чем особенность классического декоратора параметра (Parameter Decorator)?",
            en: "What is the specific trait of a classic Parameter Decorator?",
            ka: "რა თავისებურება აქვს პარამეტრის კლასიკურ დეკორატორს (Parameter Decorator)?"
        },
        code: `<span class="kw">class</span> <span class="type">User</span> {
    greet(@required message: <span class="type">string</span>) {}
}`,
        options: [
            { ru: "Он может перехватывать и изменять значение аргумента при вызове", en: "It can intercept and completely mutate parameter values upon invocation", ka: "მას შეუძლია გადაცემული არგუმენტის მნიშვნელობის შეცვლა გამოძახებისას" },
            { ru: "Он принимает индекс параметра в массиве аргументов и служит только для фиксации метаданных", en: "It receives the parameter's ordinal index within the arguments array and serves only to record metadata", ka: "ის იღებს პარამეტრის ინდექსს არგუმენტების მასივში და გამოიყენება მხოლოდ მეტამონაცემების ჩასაწერად" },
            { ru: "Он автоматически превращает параметр в глобальную переменную", en: "It shifts parameter scoping contexts into global namespaces instantly", ka: "ის ავტომატურად აქცევს პარამეტრს გლობალურ ცვლადად" },
            { ru: "Он работает только внутри конструкторов абстрактных классов", en: "Its execution boundaries are strictly limited to abstract class constructors", ka: "ის მუშაობს მხოლოდ აბსტრაქტული კლასების კონსტრუქტორების შიგნით" }
        ],
        correct: 1,
        explanation: {
            ru: "Классический декоратор параметра принимает три аргумента: прототип, имя метода и порядковый индекс параметра (`parameterIndex`). Он НЕ может изменить значение аргумента 'на лету', его единственная цель — пометить параметр метаданными для последующего чтения декоратором метода.",
            en: "A legacy parameter decorator accepts target, method key, and parameterIndex. It cannot modify arguments mid-flight; it exists purely to attach structural metadata for method decorators to inspect later.",
            ka: "პარამეტრის კლასიკური დეკორატორი იღებს სამ არგუმენტს: პროტოტიპს, მეთოდის სახელს და პარამეტრის ინდექსს (`parameterIndex`). მას არ შეუძლიа არგუმენტის მნიშვნელობის შეცვლა, ის მხოლოდ ნიშნავს პარამეტრს მეტამონაცემებით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators",
        docLabel: "Parameter Decorators — Handbook"
    },
    {
        id: 155,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Если классический декоратор класса возвращает новый класс (или конструктор), что произойдет с исходным классом?",
            en: "If a classic class decorator returns a new class constructor, what happens to the original class definition?",
            ka: "თუ კლასის კლასიკური დეკორატორი აბრუნებს ახალ კლასს (ან კონსტრუქტორს), რა დაემართება თავდაპირველ კლასს?"
        },
        code: `<span class="kw">function</span> replace(target: <span class="type">any</span>) {
    <span class="kw">return class extends</span> <span class="type">target</span> { newProp = <span class="num">1</span>; }
}`,
        options: [
            { ru: "Будет выброшено исключение времени компиляции", en: "The compiler will halt operation throwing a type exception", ka: "გამოიწვევს კომპილაციის შეცდომას" },
            { ru: "Возвращенный конструктор полностью подменит исходный класс в рантайме", en: "The returned constructor completely replaces the original class definition at runtime", ka: "დაბრუნებული კონსტრუქტორი სრულად ჩაანაცვლებს თავდაპირველ კლასს runtime-ში" },
            { ru: "Оба класса сольются в один глобальный интерфейс", en: "Both structures merge boundaries together creating a unified interface layout", ka: "ორივე კლასი გაერთიანდება ერთ გლობალურ ინტერფეისში" },
            { ru: "Возвращаемое значение декоратора класса всегда игнорируется", en: "Class-level decorator return values are strictly discarded by runtime modules", ka: "კლასის დეკორატორის მიერ დაბრუნებული მნიშვნელობა ყოველთვის იგნორირებულია" }
        ],
        correct: 1,
        explanation: {
            ru: "Если декоратор класса возвращает функцию-конструктор (или новый класс), этот новый конструктор полностью подменяет исходную декларацию класса. Это позволяет расширять логику класса или добавлять новые свойства при инициализации.",
            en: "When a class decorator returns a new constructor function, it acts as a direct substitute for the original declaration, facilitating dynamic expansions or transparent instance augmentations.",
            ka: "თუ კлასის დეკორატორი აბრუნებს კონსტრუქტორ ფუნქციას (ან ახალ კლასს), ეს ახალი კონსტრუქტორი სრულად ჩაანაცვლებს თავდაპირველ კლასს runtime-ში, რაც საშუალებას გვაძლევს გავაფართოოთ კლასის ლოგიკა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators",
        docLabel: "Overriding Constructors — Handbook"
    },
    {
        id: 156,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Какая опция в tsconfig.json включает автоматическую генерацию метаданных типов для полифила reflect-metadata?",
            en: "Which tsconfig.json option enables automatic generation of type metadata for reflect-metadata?",
            ka: "tsconfig.json-ის რომელი ოპცია რთავს ტიპების მეტამონაცემების ავტომატურ გენერირებას reflect-metadata პოლიფილისთვის?"
        },
        code: `{ <span class="str">"compilerOptions"</span>: { <span class="str">"___________"</span>: <span class="num">true</span> } }`,
        options: [
            { ru: "emitDecoratorMetadata", en: "emitDecoratorMetadata", ka: "emitDecoratorMetadata" },
            { ru: "experimentalDecorators", en: "experimentalDecorators", ka: "experimentalDecorators" },
            { ru: "sourceMap", en: "sourceMap", ka: "sourceMap" },
            { ru: "preserveValueImports", en: "preserveValueImports", ka: "preserveValueImports" }
        ],
        correct: 0,
        explanation: {
            ru: "Флаг `emitDecoratorMetadata` заставляет компилятор TS внедрять метаданные типов (дизайн-тайм типы аргументов, возвращаемые значения) прямо в скомпилированный JS-код с использованием ключей `design:type`, `design:paramtypes` и `design:returntype`.",
            en: "Enabling `emitDecoratorMetadata` commands the compiler to preserve underlying static types inside the output JS file. It generates specific keys like `design:paramtypes` required for advanced Dependency Injection.",
            ka: "`emitDecoratorMetadata` ფლაგი აიძულებს TS კომპილატორს ჩადოს ტიპების მეტამონაცემები პირდაპირ კომპილირებულ JS კოდში ისეთი გასაღებების გამოყენებით, როგორიცაა `design:paramtypes`."
        },
        docLink: "https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata",
        docLabel: "emitDecoratorMetadata — TSConfig Reference"
    },
    {
        id: 157,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Поддерживают ли новые стандартные декораторы ECMAScript (Stage 3, TS 5.0+) декораторы параметров функций?",
            en: "Do modern ECMAScript decorators (Stage 3, TS 5.0+) support parameter decorators?",
            ka: "აქვთ თუ არა მხარდაჭერა პარამეტრების დეკორატორებს ახალ ECMAScript სტანდარტში (Stage 3, TS 5.0+)?"
        },
        code: `<span class="kw">class</span> <span class="type">A</span> { method(@dec param: <span class="type">any</span>) {} } <span class="comment">// В Stage 3</span>`,
        options: [
            { ru: "Да, синтаксис остался полностью идентичным", en: "Yes, the specification and syntax remain perfectly identical", ka: "დიახ, სინტაქსი სრულიად იდენტური დარჩა" },
            { ru: "Нет, в текущей спецификации Stage 3 декораторы параметров не поддерживаются", en: "No, the current Stage 3 specification does not support parameter decorators", ka: "არა, მიმდინარე Stage 3 სპეციფიკაციაში პარამეტრების დეკორატორები არ არის მხარდაჭერილი" },
            { ru: "Да, но только если параметр является обязательным", en: "Yes, but strictly provided that the parameter is marked mandatory", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ პარამეტრი სავალდებულოა" },
            { ru: "Да, но только для конструкторов классов", en: "Yes, but validation capabilities are restricted to class constructors alone", ka: "დიახ, მაგრამ მხოლოდ კლასის კონსტრუქტორებისთვის" }
        ],
        correct: 1,
        explanation: {
            ru: "В официальном стандарте ECMAScript Stage 3 (который встроен по умолчанию в TS 5.0+) декораторы параметров были исключены из спецификации. Для их использования всё ещё требуется старый экспериментальный режим (`experimentalDecorators`).",
            en: "Parameter decoration was excluded from the official ECMAScript Stage 3 standard formulation. Accessing parameter-level interception patterns requires rolling back to the legacy experimental flags.",
            ka: "ოფიციალურ ECMAScript Stage 3 სტანდარტში (რომელიც ჩაშენებულია TS 5.0+-ში) პარამეტრების დეკორატორები ამოღებულია სპეციფიკაციიდან. მათთვის კვლავ საჭიროა `experimentalDecorators` რეჟიმი."
        },
        docLink: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators",
        docLabel: "Parameter Decorators in Stage 3 — DevBlogs"
    },
    {
        id: 158,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Когда именно выполняются декораторы классов в приложении?",
            en: "When exactly do class decorators execute within an application lifetime?",
            ka: "ზუსტად როდის სრულდება კლასის დეკორატორები აპლიკაციაში?"
        },
        code: `<span class="comment">// Время запуска декоратора</span>`,
        options: [
            { ru: "При каждом создании экземпляра класса через оператор new", en: "On every single instance creation triggered via the new operator", ka: "კლასის ეგზემპლარის ყოველი შექმნისას new ოპერატორით" },
            { ru: "Один раз, когда скрипт загружается и класс инициализируется движком (runtime определение класса)", en: "Exactly once, when the script loads and the class is evaluated by the JS runtime engine", ka: "მხოლოდ ერთხელ, როდესაც სკრიპტი იტვირთება და კლასის ინიციალიზაცია ხდება JS ძრავის მიერ" },
            { ru: "Только во время компиляции, в итоговом JS коде их вызовов нет", en: "Purely at compile-time; their execution statements are fully omitted from native runtime bundles", ka: "მხოლოდ კომპილაციის დროს, საბოლოო JS კოდში მათი გამოძახება არ ხდება" },
            { ru: "При вызове любого метода этого класса", en: "Whenever any individual method of that class gets called", ka: "ამ კლასის ნებისმიერი მეთოდის გამოძახებისას" }
        ],
        correct: 1,
        explanation: {
            ru: "Декораторы выполняются ровно один раз, в момент, когда JavaScript-движок парсит файл и регистрирует класс (runtime-определение класса). При вызове `new MyClass()` декораторы повторно не запускаются.",
            en: "Decorators fire exactly once at definition evaluation phases. When the runtime environment loads a module file and processes the class signature, the decorators run; instantiation does not re-trigger them.",
            ka: "დეკორატორები სრულდება ზუსტად ერთხელ, იმ მომენტში, როდესაც JavaScript ძრავი კითხულობს ფაილს და არეგისტრირებს კლასს. `new MyClass()` გამოძახებისას ისინი თავიდან არ სრულდებიან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html",
        docLabel: "Decorator Execution Runtime — Handbook"
    },
    {
        id: 159,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Какое свойство нового объекта 'context' в Stage 3 декораторах позволяет выполнить логику ПОСЛЕ того, как класс был полностью определен?",
            en: "Which property of the modern 'context' object in Stage 3 decorators allows running custom logic AFTER the class is fully defined?",
            ka: "ახალი 'context' ობიექტის რომელი თვისება Stage 3 დეკორატორებში გვაძლევს საშუალებას შევასრულოთ ლოგიკა მას შემდეგ, რაც კლასი სრულად განისაზღვრება?"
        },
        code: `<span class="kw">function</span> myDec(value: <span class="type">any</span>, context: <span class="type">ClassDecoratorContext</span>) {
    context.__________((ctor) => { console.log(<span class="str">"Defined!"</span>); });
}`,
        options: [
            { ru: "addInitializer", en: "addInitializer", ka: "addInitializer" },
            { ru: "onComplete", en: "onComplete", ka: "onComplete" },
            { ru: "afterInit", en: "afterInit", ka: "afterInit" },
            { ru: "registerCallback", en: "registerCallback", ka: "registerCallback" }
        ],
        correct: 0,
        explanation: {
            ru: "В декораторах Stage 3 у объекта `context` есть метод `addInitializer`. С его помощью можно зарегистрировать коллбэк, который автоматически сработает после завершения инициализации класса или его члена, помогая связать логику без подмены конструктора.",
            en: "The modern Stage 3 context introduces `addInitializer`. This method hooks lifecycle callbacks into late-stage initialization flows, completing setup steps right after the class engine registration finishes.",
            ka: "Stage 3 დეკორატორებში `context` ობიექტს აქვს მეთოდი `addInitializer`. მისი დახმარებით შეგვიძლია დავარეგისტრიროთ callback ფუნქცია, რომელიც ავტომატურად შესრულდება კლასის ინიციალიზაციის დასრულების შემდეგ."
        },
        docLink: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#the-addinitializer-method",
        docLabel: "The addInitializer Method — DevBlogs"
    },
    {
        id: 160,
        category: { ru: "Декораторы", en: "Decorators", ka: "დეკორატორები" },
        tag: "decorators",
        question: {
            ru: "Можно ли использовать декораторы вне классов (например, повесить на обычную изолированную функцию)?",
            en: "Can you utilize decorator expressions outside of classes (e.g., attaching one to a standard isolated function)?",
            ka: "შესაძლებელია თუ არა დეკორატორების გამოყენება კლასების გარეთ (მაგალითად, ჩვეულებრივ იზოლირებულ ფუნქციაზე)?"
        },
        code: `@logger <span class="kw">function</span> standalone() {} <span class="comment">// Валидно ли это?</span>`,
        options: [
            { ru: "Да, декораторы можно вешать на любые функции в JavaScript", en: "Yes, decorators natively support adjustments over any functional declarations", ka: "დიახ, დეკორატორების დასმა შეიძლება ნებისმიერ ფუნქციაზე JavaScript-ში" },
            { ru: "Нет, спецификация декораторов в JS жестко ограничена классами и их членами. К обычным функциям они неприменимы", en: "No, JavaScript/TypeScript decorator specifications are strictly bound to classes and class members. They cannot be applied to standalone functions", ka: "არა, დეკორატორების სპეციფიკაცია JS/TS-ში მკაცრად შემოიფარგლება კლასებითა და მათი წევრებით. ჩვეულებრივ ფუნქციებზე მათ ვერ გამოვიყენებთ" },
            { ru: "Да, если функция экспортируется как модуль по умолчанию", en: "Yes, assuming the functional block gets declared as a default module export", ka: "დიახ, თუ ფუნქციის ექსპორტი ხდება როგორც ნაგულისხმევი მოდული" },
            { ru: "Да, но только при включенном флаге allowJs", en: "Yes, but strictly conditional to having the allowJs configuration active", ka: "დიახ, მაგრამ მხოლოდ მაშინ, როცა allowJs ფლაგი ჩართულია" }
        ],
        correct: 1,
        explanation: {
            ru: "Ни старая экспериментальная версия, ни новый стандарт ECMAScript Stage 3 не поддерживают декорирование свободных (standalone) функций. Декораторы в JS спроектированы исключительно как элемент синтаксиса классов.",
            en: "Neither experimental frameworks nor standard Stage 3 blueprints allow decorating standalone functions. The spec constraints decorator structures strictly into class entities and associated properties.",
            ka: "არც ძველი ექსპერიმენტული ვერსია და არც ახალი ECMAScript Stage 3 სტანდარტი არ უჭერს მხარს ცალკეული (standalone) ფუნქციების დეკორირებას. დეკორატორები შექმნილია მხოლოდ კლასებისთვის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html",
        docLabel: "Decorators Overview — Handbook"
    },

    // 9. MAPPED TYPES
    {
        id: 161,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Как работает этот сопоставленный тип (Mapped Type)?",
            en: "How does this specific Mapped Type operate?",
            ka: "როგორ მუშაობს ეს კონკრეტული Mapped Type?"
        },
        code: `<span class="kw">type</span> <span class="type">ReadonlyCustom</span>&lt;<span class="type">T</span>&gt; = {
  <span class="kw">readonly</span> [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Итерируется по всем ключам K типа T, создавая аналогичную структуру с флагом readonly", en: "Iterates through all keys K of T, re-creating the structure appended with a readonly flag", ka: "გადის T ტიპის ყველა K გასაღებზე და ქმნის ანალოგიურ სტრუქტურას readonly ფლაგით" },
            { ru: "Удаляет существующие свойства из типа, оставляя его пустым", en: "Wipes out preexisting object keys from existence", ka: "აშორებს არსებულ თვისებებს ტიპიდან და ტოვებს მას ცარიელს" },
            { ru: "Превращает типы всех свойств в строки (string)", en: "Forces the values of all existing fields to become plain strings", ka: "ყველა თვისების ტიპს აქცევს სტრიქონად (string)" },
            { ru: "Создаёт числовой индексный массив на основе ключей", en: "Builds a strictly indexed sequential number layout array map", ka: "ქმნის რიცხვით ინდექსირებულ მასივს გასაღებების საფუძველზე" },
        ],
        correct: 0,
        explanation: {
            ru: "Синтаксис '[K in keyof T]' — это цикл внутри системы типов TypeScript. Оператор keyof T собирает все ключи объекта в union строк. Цикл по очереди берет каждый ключ 'K', а выражение 'T[K]' (Indexed Access Type) вытаскивает тип значения, закрепленный за этим ключом в оригинальном объекте T. Добавление слова 'readonly' в начале означает, что каждое свойство на выходе станет доступным только для чтения.",
            en: "The configuration '[K in keyof T]' acts as a compiler-level loop mapping over type structures. The 'keyof T' expression accumulates a union string literal of every property key inside 'T'. As the iterator runs, 'K' grabs the key and 'T[K]' fetches its respective datatype value via indexed access. Pre-fixing the instruction block with 'readonly' converts all output fields to read-only.",
            ka: "სინტაქსი '[K in keyof T]' არის ციკლი TypeScript-ის ტიპების სისტემაში. keyof T აგროვებს ობიექტის ყველა გასაღებს union-ად. ციკლი რიგრიგობით იღებს თითოეულ 'K' გასაღებს, ხოლო 'T[K]' (Indexed Access Type) იღებს შესაბამისი მნიშვნელობის ტიპს ორიგინალი T ობიექტიდან. დასაწყისში 'readonly'-ს დამატება ნიშნავს, რომ თითოეული ველი გახდება მხოლოდ წაკითხვადი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
        docLabel: "Mapped Types — Handbook"
    },
    {
        id: 162,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что означает оператор '-readonly' в сопоставленном типе?",
            en: "What does the '-readonly' operator achieve inside a Mapped Type?",
            ka: "რას ნიშნავს ოპერატორი '-readonly' Mapped ტიპში?"
        },
        code: `<span class="kw">type</span> <span class="type">Mutable</span>&lt;<span class="type">T</span>&gt; = {
  -<span class="kw">readonly</span> [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Запрещает чтение свойств и разрешает только запись", en: "Blocks read permissions entirely while unlocking write-only channels", ka: "კრძალავს თვისებების წაკითხვას და უშვებს მხოლოდ ჩაწერას" },
            { ru: "Удаляет модификатор readonly из каждого свойства, делая их изменяемыми (mutable)", en: "Removes the readonly modifier from each property, making them completely mutable", ka: "აშორებს readonly მოდიფიკატორს თითოეულ თვისებას, რაც მათ შესაცვლელს (mutable) აქცევს" },
            { ru: "Делает свойства необязательными", en: "Converts properties into optional structural attributes", ka: "თვისებებს აქცევს არასავალდებულოდ" },
            { ru: "Это невалидный синтаксис, вызывающий ошибку компиляции", en: "This represents an invalid token layout causing compile failures", ka: "ეს არის არავალიდური სინტაქსი, რომელიც იწვევს შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript префиксы '+' или '-' могут использоваться совместно с модификаторами 'readonly' и '?'. Знак минус '-' означает удаление модификатора. Таким образом, '-readonly' находит свойства, которые были заблокированы для записи, и снимает с них это ограничение.",
            en: "The '+' and '-' prefixes act as modifier adjusters within Mapped Types. Using '-readonly' instructs the TS compiler to systematically strip away any pre-existing read-only constraints from the properties.",
            ka: "TypeScript-ში '+' ან '-' პრეფიქსები გამოიყენება 'readonly' და '?' მოდიფიკატორებთან ერთად. მინუსი '-' ნიშნავს მოდიფიკატორის მოცილებას. შესაბამისად, '-readonly' აშორებს readonly შეზღუდვას თითოეულ თვისებას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers",
        docLabel: "Mapping Modifiers — Handbook"
    },
    {
        id: 163,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Для чего используется оператор '-?' в сопоставленном типе?",
            en: "What purpose does the '-?' operator serve inside a Mapped Type definition?",
            ka: "რისთვის გამოიყენება ოპერატორი '-?' Mapped ტიპში?"
        },
        code: `<span class="kw">type</span> <span class="type">Concrete</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]-?: <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Делает все свойства типа строго обязательными, удаляя знак вопроса (необязательность)", en: "Makes all properties strictly required by stripping away the optional (?) modifier mark", ka: "ყველა თვისებას აქცევს მკაცრად სავალდებულოდ, აშორებს რა კითხვის ნიშანს (არასავალდებულოობას)" },
            { ru: "Превращает значения всех свойств в тип null", en: "Transforms the inner value types of all keys to match null definitions", ka: "ყველა თვისების მნიშვნელობას აქცევს null ტიპად" },
            { ru: "Удаляет свойства, имена которых заканчиваются на дефис", en: "Filters out and deletes properties whose keys terminate with a hyphen", ka: "აშორებს იმ თვისებებს, რომელთა სახელებიც მთავრდება დეფისით" },
            { ru: "Это аналог встроенной утилиты Pick", en: "It behaves identically to the built-in Pick utility method", ka: "ეს არის ჩაშენებული Pick უტილიტის ანალოგი" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор '-?' удаляет модификатор необязательности (`?`) у свойств. Данный сопоставленный тип превращает частично заполненный объект (где свойства могли быть `undefined`) в строго обязательную структуру. Именно так под капотом реализована стандартная утилита `Required<T>`.",
            en: "The '-?' operator subtracts optional traits from keys. It takes an object layout with optional fields and forces every output key to be strictly required. This is exactly how `Required<T>` is built.",
            ka: "`-?` ოპერატორი აშორებს არასავალდებულოობის მოდიფიკატორს (`?`). ეს Mapped ტიპი არასავალდებულო თვისებების მქონე ობიექტს აქცევს მკაცრად სავალდებულო სტრუქტურად, რაც არის `Required<T>`-ის რეალიზაცია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers",
        docLabel: "Mapping Modifiers — Handbook"
    },
    {
        id: 164,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что делает ключевое слово 'as' при итерации по ключам в Mapped Types (Key Remapping)?",
            en: "What does the 'as' keyword accomplish when iterating over keys in Mapped Types (Key Remapping)?",
            ka: "რას აკეთებს 'as' საკვანძო სიტყვა Mapped Types-ში გასაღებების იტერაციისას (Key Remapping)?"
        },
        code: `<span class="kw">type</span> <span class="type">Getters</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span> <span class="kw">as</span> \`get\${<span class="type">Capitalize</span>&lt;<span class="type">K</span> & <span class="type">string</span>&gt;}\`]: () => <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Позволяет переименовывать (трансформировать) исходные имена ключей во время сопоставления типов", en: "Allows remapping (transforming) the original key names into custom string layouts during execution", ka: "საშუალებას იძლევა შევცვალოთ (ტრანსფორმაცია მოვახდინოთ) თავდაპირველი გასაღებების სახელები ტიპების ასახვისას" },
            { ru: "Приводит типы значений к динамическому типу any", en: "Casts downstream member value types into unstable any types", ka: "მნიშვნელობების ტიპებს გარდაქმნის დინამიურ any ტიპად" },
            { ru: "Используется для создания асинхронных генераторов", en: "Is required strictly to initialize asynchronous template generators", ka: "გამოიყენება ასინქრონული გენერატორების შესაქმნელად" },
            { ru: "Это синтаксис для импорта внешних схем данных", en: "Represents a syntax layer designed to import remote schema records", ka: "ეს არის გარე მონაცემთა სქემების იმპორტის სინტაქსი" }
        ],
        correct: 0,
        explanation: {
            ru: "Начиная с TypeScript 4.1, вы можете перенаправлять и изменять имена ключей с помощью оператора `as` и шаблонных строк (`Template Literal Types`). В примере исходный ключ `id` превратится в новый ключ `getId`, возвращающий функцию.",
            en: "Introduced in TS 4.1, key remapping via the `as` clause lets developers mutate property keys on the fly using Template Literal Types. For instance, a property name like `name` easily morphs into `getName`.",
            ka: "TypeScript 4.1-დან შესაძლებელია გასაღებების სახელების შეცვლა `as` ოპერატორისა და Template Literal ტიპების დახმარებით. მაგალითად, გასაღები `name` გადაიქცევა ახალ გასაღებად `getName`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as",
        docLabel: "Key Remapping via as — Handbook"
    },
    {
        id: 165,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Как с помощью Key Remapping отфильтровать (исключить) определенные ключи из объекта, вернув тип 'never'?",
            en: "How can you filter out specific keys from an object using Key Remapping by returning 'never'?",
            ka: "როგორ შეგვიძლია Key Remapping-ის და 'never'-ის გამოყენებით გარკვეული გასაღებების გაფილტვრა (ამოღება) ობიექტიდან?"
        },
        code: `<span class="kw">type</span> <span class="type">ExcludeId</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span> <span class="kw">as</span> <span class="type">K</span> <span class="kw">extends</span> <span class="str">"id"</span> ? <span class="type">never</span> : <span class="type">K</span>]: <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Свойства с типом never вызовут ошибку рантайма при попытке чтения", en: "Properties mapping to never trigger instant execution syntax faults upon reading attempts", ka: "never ტიპის მქონе თვისებები გამოიწვევს შეცდომას წაკითხვის მცდელობისას" },
            { ru: "TypeScript полностью удалит ключ из результирующего типа, если выражение после 'as' разрешается в 'never'", en: "TypeScript completely filters out and drops the key from the resulting object type if the 'as' clause evaluates to 'never'", ka: "TypeScript სრულად ამოაგდებს გასაღებს საბოლოო ტიპიდან, თუ 'as'-ის შემდეგ არსებული გამოსახულება მიიღებს მნიშვნელობას 'never'" },
            { ru: "Ключ запишется как опциональный string", en: "The targeted key changes structural definitions into an optional string shape", ka: "გასაღები ჩაიწერება როგორც არასავალდებულო string" },
            { ru: "Это заменяет все значения свойств ключа 'id' на пустые строки", en: "This overwrites every single value assigned inside the 'id' field with blank strings", ka: "ეს ანაცვლებს 'id' გასაღების ყველა მნიშვნელობას ცარიელი სტრიქონით" }
        ],
        correct: 1,
        explanation: {
            ru: "В Mapped Types, если переименование ключа через условный тип `as K extends ...` приводит к специальному типу `never`, TypeScript просто выбрасывает этот ключ из итогового объекта. Это отличный способ фильтрации структуры.",
            en: "When key remapping maps a property name to the `never` primitive type, TypeScript completely omits that field from the output composition. This provides a highly clean mechanism for structural filtering.",
            ka: "Mapped Types-ში, თუ გასაღების გადარქმევა `as K extends ...` პირობითი ტიპის საშუალებით აბრუნებს `never`-ს, TypeScript უბრალოდ შლის ამ გასაღებს საბოლოო ობიექტიდან. ეს არის ფილტრაციის შესანიშნავი გზა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as",
        docLabel: "Filtering out keys — Handbook"
    },
    {
        id: 166,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Какая встроенная утилита TypeScript полностью построена на базе простейшего Mapped Type для создания словарей (ключ-значение)?",
            en: "Which built-in TypeScript utility is entirely based on a simple Mapped Type to generate key-value dictionaries?",
            ka: "TypeScript-ის რომელი ჩაშენებული უტილიტაა აგებული მარტივ Mapped ტიპზე ლექსიკონების (გასაღები-მნიშვნელობა) შესაქმნელად?"
        },
        code: `<span class="kw">type</span> <span class="type">MyDictionary</span> = <span class="type">______</span>&lt;<span class="type">string</span>, <span class="type">number</span>&gt;;`,
        options: [
            { ru: "Pick", en: "Pick", ka: "Pick" },
            { ru: "Omit", en: "Omit", ka: "Omit" },
            { ru: "Record", en: "Record", ka: "Record" },
            { ru: "Extract", en: "Extract", ka: "Extract" }
        ],
        correct: 2,
        explanation: {
            ru: "Утилита `Record<K, T>` реализована под капотом как сопоставленный тип: `type Record<K extends keyof any, T> = { [P in K]: T; };`. Она итерируется по переданному набору ключей K и присваивает каждому тип значения T.",
            en: "The global helper `Record<K, T>` is implemented using a basic Mapped Type rule: `{ [P in K]: T }`. It takes a set of keys and enforces a unified value type across all of them.",
            ka: "`Record<K, T>` უტილიტა რეალიზებულია როგორც Mapped ტიპი: `type Record<K extends keyof any, T> = { [P in K]: T; };`. ის იტერაციას ახდენს გადაცემულ K გასაღებებზე და თითოეულს ანიჭებს T ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",
        docLabel: "Record Utility — Handbook"
    },
    {
        id: 167,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что произойдет, если передать примитивный тип (например, string) вместо объекта в сопоставленный тип, использующий 'keyof T'?",
            en: "What happens if you pass a primitive type (like string) instead of an object into a Mapped Type using 'keyof T'?",
            ka: "რა მოხდება, თუ გადავცემთ პრიმიტიულ ტიპს (მაგალითად string-ს) ობიექტის ნაცვლად Mapped ტიპში, რომელიც იყენებს 'keyof T'-ს?"
        },
        code: `<span class="kw">type</span> <span class="type">Broken</span>&lt;<span class="type">T</span>&gt; = { [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>] };
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">Broken</span>&lt;<span class="type">string</span>&gt;;`,
        options: [
            { ru: "Будет сгенерирована критическая ошибка компиляции", en: "The compiler engine instantly crashes yielding critical type-safety faults", ka: "გენერირებული იქნება კომპილაციის კრიტიკული შეცდომა" },
            { ru: "Тип успешно сопоставит все встроенные методы и свойства строки (split, length и т.д.)", en: "The type will successfully map across all native prototype methods and fields of a string primitive (split, length, etc.)", ka: "ტიპი წარმატებით ასახავს სტრიქონის ყველა ჩაშენებულ მეთოდსა და თვისებას (split, length და ა.შ.)" },
            { ru: "Result превратится в пустой объект {}", en: "The resulting output evaluation simplifies down to an empty object absolute literal {}", ka: "Result გადაიქცევა ცარიელ ობიექტად {}" },
            { ru: "Result превратится в тип never", en: "The evaluation falls back immediately into a clean never type assignment", ka: "Result გადაიქცევა never ტიპად" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript примитивы имеют соответствующие им объекты-обертки. Оператор `keyof string` вернет union-тип всех методов и свойств строки (`'length' | 'split' | 'toUpperCase' | ...`). Сопоставленный тип послушно пройдет по ним и воссоздаст объект с методами строки.",
            en: "Primitives evaluate into their prototype object wrappers under reflection. Running `keyof string` extracts keys like `'length' | 'charAt'`, causing the Mapped Type to reconstruct an object reflecting those methods.",
            ka: "TypeScript-ში პრიმიტივებს აქვთ შესაბამისი ობიექტები. `keyof string` დააბრუნებს სტრიქონის ყველა მეთოდისა და თვისების გაერთიანებას (`'length' | 'split' | ...`). Mapped ტიპი შექმნის ობიექტს ამ მეთოდებით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Indexed Access and Keyof — Handbook"
    },
    {
        id: 168,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Как работает встроенная утилита Partial<T> с точки зрения Mapped Types?",
            en: "How is the built-in Partial<T> utility structured as a Mapped Type?",
            ka: "როგორ მუშაობს ჩაშენებული უტილიტა Partial<T> Mapped Types-ის თვალსაზრისით?"
        },
        code: `<span class="comment">// Реализация Partial&lt;T&gt; под капотом</span>`,
        options: [
            { ru: "Добавляет префикс +readonly к каждому ключу", en: "Appends a +readonly token modifier right before the key declaration", ka: "ამატებს +readonly პრეფიქსს თითოეულ გასაღებს" },
            { ru: "Добавляет модификатор '?' к каждому свойству, делая их необязательными", en: "Appends the '?' modifier to every property, rendering all of them optional", ka: "ამატებს '?' მოდიფიკატორს თითოეულ თვისებას, რაც მათ არასავალდებულოდ აქცევს" },
            { ru: "Заменяет тип каждого значения свойства на union с типом null", en: "Forces values across keys to expand their parameters into explicit null unions", ka: "თითოეული თვისების მნიშვნელობის ტიპს ცვლის union-ით null ტიპთან" },
            { ru: "Фильтрует объект, удаляя из него строковые свойства", en: "Filters the structural object, purging keys that resolve to text sequences", ka: "ფილტრავს ობიექტს, აშორებს რა მისგან სტრიქონულ თვისებებს" }
        ],
        correct: 1,
        explanation: {
            ru: "Встроенный тип `Partial<T>` делает все свойства объекта необязательными. Под капотом он объявлен как: `type Partial<T> = { [P in keyof T]?: T[P]; };`. Модификатор `?` после итератора ключей добавляет опциональность.",
            en: "The `Partial<T>` helper transforms all property fields to be optional. Its internal implementation reads: `type Partial<T> = { [P in keyof T]?: T[P]; };` where the `?` token injects optional traits.",
            ka: "ჩაშენებული ტიპი `Partial<T>` არასავალდებულოდ აქცევს ობიექტის ყველა თვისებას. შიგნიდან ის ასეა გამოცხადებული: `type Partial<T> = { [P in keyof T]?: T[P]; };`. `?` მოდიფიკატორი უზრუნველყოფს არასავალდებულოობას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",
        docLabel: "Partial Type — Handbook"
    },
    {
        id: 169,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Каким образом можно инвертировать сопоставление, чтобы поменять местами ключи и значения (если значения являются строками)?",
            en: "How can you invert a mapping to swap keys and values (assuming values are string literals)?",
            ka: "როგორ შეიძლება ასახვის ინვერტირება, რომ გასაღებები და მნიშვნელობები ადგილებით შეიცვალოს (თუ მნიშვნელობები სტრიქონებია)?"
        },
        code: `<span class="kw">type</span> <span class="type">Invert</span>&lt;<span class="type">T</span> <span class="kw">extends</span> <span class="type">Record</span>&lt;<span class="type">string</span>, <span class="type">string</span>&gt;&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span> <span class="kw">as</span> <span class="type">T</span>[<span class="type">K</span>]]: <span class="type">K</span>;
};`,
        options: [
            { ru: "Это некорректный код, значение T[K] нельзя использовать в блоке 'as'", en: "This is invalid code; the value expression T[K] is prohibited inside 'as' clauses", ka: "ეს არის არაკორექტული კოდი, T[K]-ს გამოყენება 'as' ბლოკში შეუძლებელია" },
            { ru: "Код валиден: итерация идет по ключам, но оператор 'as' переназначает имя ключа на тип значения T[K], а значением становится сам ключ K", en: "The code is valid: it loops over keys, but the 'as' clause maps the output key name to the value type T[K], while assigning the original key K as the property's new value type", ka: "კოდი ვალიდურია: იტერაცია ხდება გასაღებებზე, მაგრამ 'as' ოპერატორი ახალ გასაღებად ნიშნავს მნიშვნელობის ტიპს T[K], ხოლო მნიშვნელობად ხდება თავად K გასაღები" },
            { ru: "Этот код превращает все ключи объекта в тип string", en: "This operation converts all existing properties inside the object strictly to strings", ka: "ეს კოდი ობიექტის ყველა გასაღებს აქცევს string ტიპად" },
            { ru: "Тип выполняет глубокое копирование объекта", en: "The utility performs a complete deep clone operation across downline models", ka: "ტიპი ახორციელებს ობიექტის ღრმა კოპირებას (deep copy)" }
        ],
        correct: 1,
        explanation: {
            ru: "Это продвинутый паттерн Key Remapping. Мы итерируемся по исходным ключам `K`, но с помощью `as T[K]` говорим компилятору: 'сделай именем нового свойства значение исходного свойства'. В качестве типа значения мы указываем исходный ключ `K`. Это работает, только если значения являются литеральными типами строк/чисел.",
            en: "This represents an advanced pattern using Key Remapping. Writing `as T[K]` instructs TS to transform the runtime value type into the new property key, effectively flipping the dictionary architecture.",
            ka: "ეს არის Key Remapping-ის მოწინავე პატერნი. ჩვენ იტერაციას ვახდენთ `K` გასაღებებზე, მაგრამ `as T[K]`-ის დახმარებით ვეუბნებით კომპილატორს: 'ახალი თვისების სახელად აქციე ორიგინალი თვისების მნიშვნელობის ტიპი'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as",
        docLabel: "Advanced Key Remapping — Handbook"
    },
    {
        id: 170,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что делает этот сопоставленный тип с объектом?",
            en: "What adjustment does this Mapped Type enforce on an object?",
            ka: "რას აკეთებს ეს Mapped ტიპი ობიექტთან?"
        },
        code: `<span class="kw">type</span> <span class="type">Optionify</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>] | <span class="type">null</span>;
};`,
        options: [
            { ru: "Удаляет все свойства со значением null", en: "Deletes properties containing specific null values", ka: "აშორებს ყველა თვისებას, რომლის მნიშვნელობაც არის null" },
            { ru: "Расширяет тип значения каждого свойства объекта, позволяя ему принимать значение null", en: "Expands the value type of every property, allowing each to additionally accept a null value", ka: "აფართოებს ობიექტის თითოეული თვისების ტიპს, რაც მას აძლევს საშუალებას მიიღოს null მნიშვნელობაც" },
            { ru: "Делает сами ключи опциональными", en: "Converts property keys themselves into optional elements", ka: "თავად გასაღებებს აქცევს არასავალდებულოდ" },
            { ru: "Превращает объект в массив значений null", en: "Overwrites the object layout converting it into a continuous array of null elements", ka: "ობიექტს აქცევს null მნიშვნელობების მასივად" }
        ],
        correct: 1,
        explanation: {
            ru: "Сопоставленные типы могут трансформировать не только ключи, но и типы значений. Выражение `T[K] | null` берет оригинальный тип свойства и превращает его в union с типом `null`, делая структуру совместимой с nullable-базами данных.",
            en: "Mapped types can transform values just as easily as keys. The expression `T[K] | null` intercepts the original type and builds a union with `null`, allowing properties to accept null references.",
            ka: "Mapped ტიპებს შეუძლიათ არა მხოლოდ გასაღებების, არამედ მნიშვნელობების ტიპების ტრანსფორმაციაც. `T[K] | null` იღებს ორიგინალ ტიპს და ქმნის გაერთიანებას `null`-თან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
        docLabel: "Mapped Types Values — Handbook"
    },
    {
        id: 171,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Можно ли использовать более одного итератора (например, двух переменных цикла) в одном объявлении Mapped Type?",
            en: "Can you utilize more than a single iterator loop variable inside a solitary Mapped Type declaration block?",
            ka: "შესაძლებელია თუ არა ერთზე მეტი იტერატორის (მაგალითად, ციკლის ორი ცვლადის) გამოყენება ერთ Mapped Type დეკლарაციაში?"
        },
        code: `<span class="kw">type</span> <span class="type">DoubleMap</span>&lt;<span class="type">T</span>, <span class="type">U</span>&gt; = { [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>, <span class="type">V</span> <span class="kw">in keyof</span> <span class="type">U</span>]: <span class="type">any</span> };`,
        options: [
            { ru: "Да, это создает перекрестное произведение (смешивание) свойств", en: "Yes, it evaluates a cross-product (intersection matrix) of property combinations", ka: "დიახ, ეს ქმნის თვისებების კომბინაციების ჯვარედინ ნამრავლს" },
            { ru: "Нет, синтаксис сопоставленных типов строго ограничивает декларацию ровно одним выражением '[K in Keys]'", en: "No, Mapped Type syntax strictly restricts declarations to exactly one continuous '[K in Keys]' iterator statement", ka: "არა, Mapped ტიპების სინტაქსი მკაცრად ზღუდავს დეკლარაციას ზუსტად ერთი '[K in Keys]' გამოსახულებით" },
            { ru: "Да, но только если типы T и U идентичны", en: "Yes, conditional strictly to types T and U being structurally matching models", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ T და U ტიპები იდენტურია" },
            { ru: "Да, синтаксис поддерживается начиная с версии TS 5.2", en: "Yes, this syntax setup gained full native support with TS 5.2 engine updates", ka: "დიახ, სინტაქსი მხარдаჭერილია TS 5.2 ვერსიიდან" }
        ],
        correct: 1,
        explanation: {
            ru: "В сопоставленном типе разрешен только один одномерный цикл по ключам: `{ [K in Keys]: Value }`. Написать вложенные циклы или перечисление через запятую в одних фигурных скобках синтаксически невозможно. Для сложных пересечений приходится комбинировать несколько типов.",
            en: "Mapped Types support exactly one structural mapping variable iterator token inside brackets. Declaring multi-variable loops or nested commas inside a single block is a syntax violation.",
            ka: "Mapped ტიპში დაშვებულია მხოლოდ ერთი ერთგანზომილებიანი ციკლი გასაღებებზე: `{ [K in Keys]: Value }`. ერთ ფიგურულ ფრჩხილებში რამდენიმე ცვლადის მითითება მძიმით შეუძლებელია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
        docLabel: "Mapped Type Syntax — Handbook"
    },
    {
        id: 172,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Как ведет себя Mapped Type, если у объекта есть строковый индексный синтаксис (index signature)?",
            en: "How does a Mapped Type behave if the target object includes a generic string index signature?",
            ka: "როგორ იქცევა Mapped Type, თუ ობიექტს აქვს სტრიქონული ინდექსური სინტაქსი (index signature)?"
        },
        code: `<span class="kw">type</span> <span class="type">Dict</span> = { [key: <span class="type">string</span>]: <span class="type">boolean</span>; id: <span class="type">number</span>; };
<span class="kw">type</span> <span class="type">Copy</span>&lt;<span class="type">T</span>&gt; = { [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>] };
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">Copy</span>&lt;<span class="type">Dict</span>&gt;;`,
        options: [
            { ru: "Индексный синтаксис будет проигнорирован, скопируется только свойство id", en: "The index signature will be discarded; only the explicit 'id' key maps across", ka: "ინდექსური სინტაქსი იგნორირებული იქნება, დაკოპირდება მხოლოდ id თვისება" },
            { ru: "Result полностью сохранит как конкретные ключи, так и общий индексный синтаксис [key: string]", en: "Result preserves both explicit properties and the underlying fallback index signature string definition perfectly", ka: "Result სრულად შეინარჩუნებს როგორც კონკრეტულ გასაღებებს, ისე ზოგად ინდექსურ სინტაქსს [key: string]" },
            { ru: "Это вызовет ошибку компиляции из-за конфликта типов", en: "It throws a compiler-level build panic because type definitions collide aggressively", ka: "ეს გამოიწვევს კომპილაციის შეცდომას ტიპების კონფლიქტის გამო" },
            { ru: "Индексный синтаксис превратится в массив ключей", en: "The index signature properties transform natively into an ordered literal array mapping", ka: "ინდექსური სინტაქსი გადაიქცევა გასაღებების მასივად" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript умеет корректно обрабатывать индексные сигнатуры (Index Signatures) внутри Mapped Types. Оператор `keyof` учитывает, что типом ключа может быть любой `string` или `number`, и сопоставленный тип успешно воссоздает аналогичный индексный контракт на выходе.",
            en: "Mapped types evaluate index signatures natively. The `keyof` statement preserves dynamic index assertions alongside specific hardcoded fields, carrying both layers into the final type form.",
            ka: "TypeScript-ს შეუძლია კორექტულად დაამუშაოს ინდექსური სიგნატურები (Index Signatures) Mapped ტიპების შიგნით. `keyof` ითვალისწინებს, რომ გასაღები შეიძლება იყოს ნებისმიერი `string`, და წარმატებით გადააქვს ის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
        docLabel: "Index Signatures — Handbook"
    },
    {
        id: 173,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Какая встроенная утилита TypeScript использует Mapped Type для фильтрации объекта, оставляя ТОЛЬКО указанные ключи?",
            en: "Which built-in TypeScript utility leverages a Mapped Type to filter an object, preserving ONLY the explicitly listed keys?",
            ka: "TypeScript-ის რომელი ჩაშენებული უტილიტა იყენებს Mapped Type-ს ობიექტის გასაფილტრად, ტოვებს რა მხოლოდ მითითებულ გასაღებებს?"
        },
        code: `<span class="kw">type</span> <span class="type">OnlyName</span> = <span class="type">____</span>&lt;<span class="type">User</span>, <span class="str">"name"</span>&gt;;`,
        options: [
            { ru: "Omit", en: "Omit", ka: "Omit" },
            { ru: "Extract", en: "Extract", ka: "Extract" },
            { ru: "Pick", en: "Pick", ka: "Pick" },
            { ru: "Exclude", en: "Exclude", ka: "Exclude" }
        ],
        correct: 2,
        explanation: {
            ru: "Утилита `Pick<T, K>` выбирает заданное подмножество свойств из объекта `T`. Под капотом она реализована как Mapped Type, где итерация идет только по суженному union-типу ключей `K`: `type Pick<T, K extends keyof T> = { [P in K]: T[P]; };`.",
            en: "The helper `Pick<T, K>` slices out a specified subset of keys from `T`. Its core implementation utilizes a Mapped Type constrained strictly onto the incoming union sequence `K`: `{ [P in K]: T[P] }`.",
            ka: "`Pick<T, K>` უტილიტა ირჩევს თვისებების მითითებულ ქვეჯგუფს `T` ობიექტიდან. შიგნიდან ის რეალიზებულია როგორც Mapped Type, სადაც იტერაცია ხდება მხოლოდ შევიწროებულ გასაღებებზე: `{ [P in K]: T[P]; }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys",
        docLabel: "Pick Utility — Handbook"
    },
    {
        id: 174,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "В чем разница между реализацией утилит Pick и Omit под капотом?",
            en: "What is the structural difference between Pick and Omit utility implementations behind the scenes?",
            ka: "რა არის სტრუქტურული განსხვავება Pick და Omit უტილიტების რეალიზაციებს შორის?"
        },
        code: `<span class="comment">// Pick vs Omit</span>`,
        options: [
            { ru: "Pick использует сопоставленный тип напрямую по переданным ключам, а Omit сначала фильтрует ключи с помощью Exclude через Key Remapping (или подтипы)", en: "Pick maps over keys directly, while Omit runs pre-filtering on keys using Exclude before mapping (or utilizes Key Remapping)", ka: "Pick პირდაპირ ახდენს ასახვას გადაცემულ გასაღებებზე, ხოლო Omit ჯერ ფილტრავს გასაღებებს Exclude-ის დახმარებით" },
            { ru: "Pick работает только с классами, а Omit — только с интерфейсами", en: "Pick works exclusively with class models, whereas Omit limits its execution strictly to interfaces", ka: "Pick მუშაობს მხოლოდ კლასებთან, ხოლო Omit — მხოლოდ ინტერფეისებთან" },
            { ru: "Между ними нет разницы, это одинаковый код", en: "There is no functional compilation difference; they utilize identical code paths", ka: "მათ შორის განსხვავება არ არის, ეს ერთი და იგივე კოდია" },
            { ru: "Omit выполняется исключительно во время рантайма", en: "Omit executes its key exclusions dynamically strictly at script runtime", ka: "Omit სრულდება ექსკლუზიურად რანთაიმში" }
        ],
        correct: 0,
        explanation: {
            ru: "`Pick<T, K>` берет ключи `K` и строит из них объект. `Omit<T, K>` делает обратное: он берет ВСЕ ключи объекта `keyof T`, вычитает из них ненужные с помощью вспомогательной утилиты `Exclude`, и только потом на основе оставшегося списка строит объект через Mapped Type.",
            en: "`Pick` runs a Mapped Type loop precisely on the supplied keys. `Omit` first uses `Exclude<keyof T, K>` to drop unwanted property names from the union list, then pipes the remainder into a Mapped Type.",
            ka: "`Pick<T, K>` იღებს `K` გასაღებებს და მათგან აგებს ობიექტს. `Omit<T, K>` აკეთებს საპირისპიროს: ის იღებს `keyof T` ყველა გასაღებს, აკლებს მათ არასასურველს `Exclude`-ით და შემდეგ აგებს ობიექტს Mapped Type-ით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",
        docLabel: "Omit Utility — Handbook"
    },
    {
        id: 175,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что делает этот тип, комбинирующий сопоставленные типы и условные типы (Conditional Types)?",
            en: "What is the function of this type, which blends Mapped Types and Conditional Types together?",
            ka: "რას აკეთებს ეს ტიპი, რომელიც აერთიანებს Mapped და პირობით (Conditional) ტიპებს?"
        },
        code: `<span class="kw">type</span> <span class="type">FilterString</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>] <span class="kw">extends</span> <span class="type">string</span> ? <span class="type">T</span>[<span class="type">K</span>] : <span class="type">never</span>;
};`,
        options: [
            { ru: "Полностью удаляет ключи, значения которых не являются строками", en: "Completely drops keys from the object if their value type isn't a string", ka: "სრულად შლის იმ გასაღებებს, რომელთა მნიშვნელობებიც არ არის სტრიქონი" },
            { ru: "Сохраняет все ключи объекта, но заменяет тип не-строковых значений на 'never'", en: "Preserves all object property keys, but overwrites non-string value types with 'never'", ka: "ინარჩუნებს ობიექტის ყველა გასაღებს, მაგრამ არასტრიქონული მნიშვნელობების ტიპს ცვლის 'never'-ით" },
            { ru: "Превращает объект в массив строк", en: "Flattens the incoming object model layout into a continuous array of strings", ka: "ობიექტს აქცევს სტრიქონების მასივად" },
            { ru: "Это приводит к синтаксической ошибке", en: "This operation results in an immediate structural compilation token breakdown", ka: "ეს იწვევს სინტაქსურ შეცდომას" }
        ],
        correct: 1,
        explanation: {
            ru: "Этот тип проверяет значение каждого свойства (`T[K]`). Если значение расширяет `string`, оно остается неизменным. Иначе тип значения заменяется на `never`. Ключи при этом НЕ удаляются (они останутся в объекте, но записать туда что-либо кроме `never` будет нельзя). Для полного удаления ключей нужно применять утилиту `as` на этапе итерации ключей.",
            en: "This maps over all keys and checks their value type. Non-string fields remain in the output object layout but have their internal type rewritten to `never`. The property key identifiers themselves are not removed.",
            ka: "ეს ტიპი ამოწმებს თითოეული თვისების მნიშვნელობას (`T[K]`). თუ მნიშვნელობა არის `string`, ის რჩება უცვლელი, წინააღმდეგ შემთხვევაში იცვლება `never`-ით. გასაღებები ამ დროს არ იშლება, ისინი რჩებიან ობიექტში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types and Mapping — Handbook"
    },
    {
        id: 176,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Каким образом в Mapped Types можно сделать операцию 'глубокой' (deep) модификации объекта, например, DeepReadonly?",
            en: "How can a Mapped Type perform a recursive 'deep' modification on an object, such as DeepReadonly?",
            ka: "როგორ შეიძლება Mapped Types-ში ობიექტის 'ღრმა' (deep) მოდიფიკაციის განხორციელება, მაგალითად DeepReadonly?"
        },
        code: `<span class="kw">type</span> <span class="type">DeepReadonly</span>&lt;<span class="type">T</span>&gt; = {
  <span class="kw">readonly</span> [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">K</span>] <span class="kw">extends</span> <span class="type">object</span> ? <span class="type">DeepReadonly</span>&lt;<span class="type">T</span>[<span class="type">K</span>]&gt; : <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Через рекурсивный вызов сопоставленного типа внутри самого себя", en: "By triggering a recursive call of the Mapped Type expression within its own body definition", ka: "Mapped ტიპის საკუთარ თავში რეკურსიული გამოძახებით" },
            { ru: "Используя специальный цикл 'for-each' системы типов TS", en: "By executing an internal specialized compiler 'for-each' utility directive", ka: "TS ტიპების სისტემის სპეციალური 'for-each' ციკლის გამოყენებით" },
            { ru: "Такая операция невозможна, так как TS запрещает рекурсию в типах", en: "This operation is blocked because the TS engine prohibits recursive type references", ka: "ასეთი ოპერაცია შეუძლებელია, რადგან TS კრძალავს რეკურსიას ტიპებში" },
            { ru: "Рекурсия работает только совместно с классами", en: "Recursive structures only resolve successfully when attached directly onto classes", ka: "რეკურსია მუშაობს მხოლოდ კლასებთან ერთად" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript официально поддерживает рекурсивные типы (Recursive Type Aliases). В данном примере сопоставленный тип проверяет: если значение `T[K]` является объектом, он повторно вызывает `DeepReadonly<T[K]>` для этого поддерева, делая весь объект иммутабельным на всех уровнях вложенности.",
            en: "TypeScript natively supports recursive evaluations inside type definitions. By conditioning `T[K] extends object`, the engine loops down sub-properties, making the entire data structure nested-readonly.",
            ka: "TypeScript ოფიციალურად უჭერს მხარს რეკურსიულ ტიპებს. ამ მაგალითში Mapped ტიპი ამოწმებს: თუ `T[K]` არის ობიექტი, ის ხელახლა იძახებს `DeepReadonly<T[K]>`-ს ამ თვისებისთვის, რაც ობიექტს ხდის იმუტაბელურს ყველა დონეზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types",
        docLabel: "Recursive Conditional Types — TypeScript 4.1"
    },
    {
        id: 177,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "К какому типу сущностей применимы Mapped Types? Можно ли замапить элементы кортежа (Tuple) или массива?",
            en: "Which code entities can be processed by Mapped Types? Can they iterate over Tuple or Array components?",
            ka: "რა ტიპის ერთეულებზე გამოიყენება Mapped Types? შეიძლება თუ არა კორტეჟის (Tuple) ან მასივის ელემენტების ასახვა?"
        },
        code: `<span class="kw">type</span> <span class="type">MapTuple</span>&lt;<span class="type">T</span>&gt; = { [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">R</span> = <span class="type">MapTuple</span>&lt;[<span class="type">number</span>, <span class="type">boolean</span>]&gt;;`,
        options: [
            { ru: "Нет, сопоставленные типы работают исключительно со строковыми ключами классических объектов", en: "No, Mapped Types are engineered to execute strictly over string keys within explicit objects", ka: "არა, Mapped ტიპები მუშაობენ ექსკლუზიურად კლასიკური ობიექტების სტრიქონულ გასაღებებზე" },
            { ru: "Да, сопоставленные типы распознают массивы/кортежи и возвращают измененный массив/кортеж с сохраненными индексами", en: "Yes, Mapped Types recognize arrays/tuples and accurately return a modified array/tuple keeping correct sequential numeric indices", ka: "დიახ, Mapped ტიპები ცნობენ მასივებს/კორტეჟებს და აბრუნებენ სახეცვლილ მასივს/კორტეჟს შენარჩუნებული ინდექსებით" },
            { ru: "Да, но они преобразуют кортеж в стандартный строковый union-тип", en: "Yes, but they flatten tuple layouts down into flat text-based string unions", ka: "დიახ, მაგრამ ისინი კორტეჟს გარდაქმნიან სტანდარტულ სტრიქონულ union ტიპად" },
            { ru: "Операция завершится ошибкой 'Index out of bounds'", en: "The compilation run instantly crashes emitting an 'Index out of bounds' warning", ka: "ოპერაცია დასრულდება შეცდომით 'Index out of bounds'" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript сопоставленные типы обладают встроенной интеллектуальной поддержкой массивов и кортежей (Tuples). Если передать кортеж `[number, boolean]`, то тип успешно вернет новый кортеж `[string, string]`, сохранив всю структуру и длину массива, а не превратит его в сырой объект.",
            en: "Mapped types possess built-in generic intelligence for handling Arrays and Tuples. Passing `[number, boolean]` outputs a correctly structured tuple `[string, string]`, preserving array lengths and locations.",
            ka: "TypeScript-ში Mapped ტიპებს აქვთ მასივებისა და კორტეჟების (Tuples) ჩაშენებული მხარდაჭერა. თუ გადავცემთ კორტეჟს `[number, boolean]`, ტიპი დააბრუნებს ახალ კორტეჟს `[string, string]` სტრუქტურის შენარჩუნებით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#mapped-types-on-tuples-and-arrays",
        docLabel: "Mapped types on tuples and arrays — TypeScript 3.1"
    },
    {
        id: 178,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Что произойдет, если в выражении '[K in keyof T]' оператор 'keyof T' вернет пустой union (например, у объекта вообще нет свойств)?",
            en: "What occurs within '[K in keyof T]' if 'keyof T' resolves to an empty union (e.g., an object lacking any keys)?",
            ka: "რა მოხდება, თუ '[K in keyof T]' გამოსახულებაში 'keyof T' დააბრუნებს ცარიელ union-ს (მაგალითად, ობიექტს საერთოდ არ აქვს თვისებები)?"
        },
        code: `<span class="kw">type</span> <span class="type">EmptyObj</span> = {};
<span class="kw">type</span> <span class="type">Transform</span>&lt;<span class="type">T</span>&gt; = { [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Final</span> = <span class="type">Transform</span>&lt;<span class="type">EmptyObj</span>&gt;;`,
        options: [
            { ru: "Компилятор автоматически подставит ключ по умолчанию 'default'", en: "The compiler automatically injects a fallback default property label named 'default'", ka: "კომპილატორი ავტომატურად ჩასვამს ნაგულისხმევ გასაღებს 'default'" },
            { ru: "Final превратится в пустой объект {}", en: "Final evaluates directly into an empty object shape literal {}", ka: "Final გადაიქცევა ცარიელ ობიექტად {}" },
            { ru: "Final превратится в тип универсального массива any[]", en: "Final alters its structural design reverting into a generic any[] array list", ka: "Final გადაიქცევა ზოგად any[] მასივის ტიპად" },
            { ru: "Это вызовет ошибку 'Type compilation hung'", en: "The engine errors out displaying severe 'Type compilation hung' messages", ka: "ეს გამოიწვევს შეცდომას 'Type compilation hung'" }
        ],
        correct: 1,
        explanation: {
            ru: "Цикл сопоставленного типа итерируется по ключам. Если ключей нет (пустой union), цикл не сделает ни одного шага и вернет пустой объект `{}`. Это абсолютно безопасная и штатная ситуация в системе типов TS.",
            en: "The Mapped Type iterator loops precisely through available keys. If the evaluated union list is empty, the mapping loop runs zero iterations and safely resolves into an empty object structural representation `{}`.",
            ka: "Mapped ტიპის ციკლი იტერაციას ახდენს გასაღებებზე. თუ გასაღებები არ არის (ცარიელი union), ციკლი არ შეასრულებს არცერთ ბიჯს და დააბრუნებს ცარიელ ობიექტს `{}`. ეს სრულიად უსაფრთხო ქცევაა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
        docLabel: "Empty Mapped Types — Handbook"
    },
    {
        id: 179,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Для чего при переименовании ключей (Key Remapping) используется пересечение '& string' в блоке 'as'?",
            en: "Why is the intersection '& string' frequently included within 'as' Key Remapping blocks?",
            ka: "რისთვის გამოიყენется თანაკვეთა '& string' Key Remapping-ისას 'as' ბლოკში?"
        },
        code: `<span class="kw">type</span> <span class="type">Prefix</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span> <span class="kw">as</span> \`pre_\${<span class="type">K</span> & <span class="type">string</span>}\`]: <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Оно сообщает компилятору, что нужно игнорировать ключи-символы (symbol) и числовые ключи (number), поскольку шаблонные строки работают только со строками", en: "It hints to the compiler to disregard symbol or number keys, because template literal expressions strictly expect string types", ka: "ის ეუბნება კომპილატორს, რომ საჭიროა symbol და number გასაღებების იგნორირება, რადგან ტემპლეიტური სტრიქონები მუშაობენ მხოლოდ სტრიქონებთან" },
            { ru: "Оно принудительно шифрует имена ключей", en: "It triggers a built-in cryptographic scrambling sequence over property keys", ka: "ის იძულებით შიფრავს გასაღებების სახელებს" },
            { ru: "Оно преобразует все значения свойств объекта в строки", en: "It enforces string casts across all values declared inside the properties", ka: "ის ობიექტის ყველა თვისების მნიშვნელობას გარდაქმნის სტრიქონად" },
            { ru: "Это устаревший синтаксис, начиная с версии 5.0 он запрещен", en: "This is a deprecated syntax layout completely forbidden starting from version 5.0", ka: "ეს არის მოძველებული სინტაქსი, რომელიც 5.0 ვერსიიდან აკრძალულია" }
        ],
        correct: 0,
        explanation: {
            ru: "Ключи объекта в JS/TS могут быть типами `string`, `number` или `symbol`. Оператор `keyof T` собирает их все. Шаблонные строки (Template Literals) могут работать только со строками. Пересечение `K & string` отсекает числовые и символьные ключи, гарантируя компилятору, что в интерполяцию попадет только валидный `string`.",
            en: "Object properties can resolve to `string | number | symbol`. Since Template Literal Types accept string subsets exclusively, intersecting `K & string` safely filters out symbol or number variables to satisfy type safety.",
            ka: "ობიექტის გასაღებები შეიძლება იყოს `string`, `number` ან `symbol`. ტემპლეიტური სტრიქონები (Template Literals) მუშაობენ მხოლოდ სტრიქონებთან. `K & string` თანაკვეთა ფილტრავს რიცხვით და სიმბოლურ გასაღებებს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literal Types — Handbook"
    },
    {
        id: 180,
        category: { ru: "Mapped Types", en: "Mapped Types", ka: "Mapped ტიპები" },
        tag: "mapped-types",
        question: {
            ru: "Можно ли с помощью Mapped Types изменить тип конкретного свойства, обратившись к нему по имени во время итерации?",
            en: "Can you selectively modify the type of one specific property by checking its name during Mapped Type iterations?",
            ka: "შესაძლებელია თუ არა Mapped Types-ის დახმარებით კონკრეტული თვისების ტიპის შეცვლა იტერაციის დროს მის სახელს თუ შევამოწმებთ?"
        },
        code: `<span class="kw">type</span> <span class="type">FixAdmin</span>&lt;<span class="type">T</span>&gt; = {
  [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span>]: <span class="type">K</span> <span class="kw">extends</span> <span class="str">"isAdmin"</span> ? <span class="type">boolean</span> : <span class="type">T</span>[<span class="type">K</span>];
};`,
        options: [
            { ru: "Нет, имя K внутри блока типа значения использовать для проверок запрещено", en: "No, checking the variable identity of K inside values blocks is completely illegal", ka: "არა, K გასაღების სახელის გამოყენება მნიშვნელობის ბლოკში შესამოწმებლად აკრძალულია" },
            { ru: "Да, используя условный тип (Conditional Type) в правой части выражения, мы можем проверять, совпадает ли текущий итерируемый ключ K с конкретной строкой-литералом", en: "Yes, by utilizing a Conditional Type on the right side of the statement, we can check if the currently iterated key K matches a specific string literal", ka: "დიახ, მარჯვენა მხარეს პირობითი ტიპის (Conditional Type) გამოყენებით ჩვენ შეგვიძლია შევამოწმოთ, ემთხვევა თუ არა მიმდინარე იტერირებადი K გასაღები კონკრეტულ სტრიქონულ ლიტერალს" },
            { ru: "Да, но только если исходное свойство имело тип any", en: "Yes, but strictly conditional to the original field possessing an any data type", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ თავდაპირველ თვისებას ჰქონდა any ტიპი" },
            { ru: "Да, но это превратит весь объект в интерфейс", en: "Yes, however this syntax transforms the entire object into an explicit interface layout", ka: "დიახ, მაგრამ ეს მთლიან ობიექტს ინტერფეისად გარდაქმნის" }
        ],
        correct: 1,
        explanation: {
            ru: "Это очень популярный паттерн точечной трансформации. Переменная цикла `K` доступна во всей строке объявления сопоставленного типа, в том числе и в правой части (после двоеточия). Мы можем применить условный тип `K extends 'isAdmin' ? boolean : T[K]`, чтобы переписать тип конкретного поля, оставив остальные нетронутыми.",
            en: "This is a widespread pattern for precise property mutation. The iterator variable `K` is fully exposed inside the value mapping expression. Combining it with conditional extensions lets you pinpoint and alter isolated keys.",
            ka: "ეს არის ძალიან პოპულარული პატერნი თვისების წერტილოვანი ტრანსფორმაციისთვის. ციკლის `K` ცვლადი ხელმისაწვდომია Mapped ტიპის მარჯვენა მხარესაც (ორწერტილის შემდეგ). ჩვენ შეგვიძლია შევცვალოთ კონკრეტული ველის ტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types — Handbook"
    },

    // 10. CONDITIONAL TYPES
    {
        id: 181,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Какой тип будет присвоен переменным A и B в данном тернарном выражении типов?",
            en: "What final types will be assigned to variables A and B?",
            ka: "რა ტიპი მიენიჭება A და B ცვლადებს ამ პირობითი ტიპების (conditional types) გამოსახულებაში?"
        },
        code: `<span class="kw">type</span> <span class="type">IsArray</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">any</span>[] ? <span class="str">'yes'</span> : <span class="str">'no'</span>;
<span class="kw">type</span> <span class="type">A</span> = <span class="type">IsArray</span>&lt;<span class="type">string</span>[]&gt;;
<span class="kw">type</span> <span class="type">B</span> = <span class="type">IsArray</span>&lt;<span class="type">number</span>&gt;;`,
        options: [
            { ru: "A = 'yes', B = 'no'", en: "A = 'yes', B = 'no'", ka: "A = 'yes', B = 'no'" },
            { ru: "A = 'no', B = 'yes'", en: "A = 'no', B = 'yes'", ka: "A = 'no', B = 'yes'" },
            { ru: "Оба типа превратятся в string", en: "Both types unwrap into standard global string contexts", ka: "ორივე ტიპი გადაიქცევა ჩვეულებრივ string-ად" },
            { ru: "Произойдет критическая ошибка компиляции", en: "The operation triggers an unrecoverable type-check crash", ka: "მოხდება კომპილაციის კრიტიკული შეცდომა" },
        ],
        correct: 0,
        explanation: {
            ru: "Перед нами Conditional Type — аналог тернарного оператора, работающий на этапе компиляции. Он проверяет связь типов: 'Является ли переданный T подтипом массива any[]?'. Для переменной А мы передали string[], проверка 'string[] extends any[]' возвращает true, поэтому выбирается левая ветка — литеральный тип 'yes'. Для переменной B тип number не является массивом, проверка выдает false, генерируя тип 'no'.",
            en: "This example shows a Conditional Type, operating like a build-time structural ternary operator. It executes an extension verification assignment: 'Does incoming type T conform to an array structure?'. For 'A', string[] fits inside any[], passing the test and assigning literal type 'yes'. For 'B', a lone number is not an array structure, failing the test and yielding 'no'.",
            ka: "ეს არის Conditional Type — ტერნარული ოპერატორის ანალოგი ტიპების სისტემაში. ის ამოწმებს: 'არის თუ არა გადაცემული T any[] მასივის ქვეტიპი?'. A ცვლადისთვის გადავეცით string[], შესაბამისად პირობა სრულდება და აბრუნებს ლიტერალს 'yes'. B ცვლადისთვის კი number არ არის მასივი, პირობა არ სრულდება და აბრუნებს 'no'-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types — Handbook"
    },
    {
        id: 182,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что такое дистрибутивность (Distributive Behavior) в условных типах?",
            en: "What does distributive behavior signify within TypeScript Conditional Types?",
            ka: "რა არის დისტრიბუციულობა (Distributive Behavior) პირობით ტიპებში?"
        },
        code: `<span class="kw">type</span> <span class="type">ToArray</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">any</span> ? <span class="type">T</span>[] : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">StrOrNumArr</span> = <span class="type">ToArray</span>&lt;<span class="type">string</span> | <span class="type">number</span>&gt;;`,
        options: [
            { ru: "Тип преобразуется в (string | number)[]", en: "The entire entity evaluates straight into a single composite (string | number)[] array", ka: "ტიპი გარდაიქმნება (string | number)[]-ად" },
            { ru: "Тип распределяется по union-элементам, возвращая string[] | number[]", en: "The type automatically distributes across union branches, returning string[] | number[]", ka: "ტიპი ნაწილდება union-ელემენტებზე და აბრუნებს string[] | number[]" },
            { ru: "Произойдет ошибка, так как union-типы нельзя передавать в дженерики", en: "An error occurs because naked union elements are strictly blocked inside generic types", ka: "მოხდება შეცდომა, რადგან union-ტიპების გადაცემა ჯენერიკებში შეუძლებელია" },
            { ru: "Тип превратится в tuple-массив из двух элементов [string, number]", en: "The statement calculates a precise sequential two-element tuple array [string, number]", ka: "ტიპი გადაიქცევა ორელემენტიან კორტეჟად [string, number]" }
        ],
        correct: 1,
        explanation: {
            ru: "Если в условный тип в качестве 'голого' (unwrapped) параметра дженерика передается union-тип, TypeScript применяет дистрибутивность: он разбивает union на отдельные элементы, прогоняет каждый через условие независимо, а затем объединяет результаты обратно в новый union. Поэтому `string | number` превращается в `string[] | number[]`.",
            en: "When union types are passed as a naked generic argument into a Conditional Type, TypeScript automatically distributes the evaluation. It processes each member of the union independently and merges the outputs back into a union: `string[] | number[]`.",
            ka: "თუ პირობით ტიპში ჯენერიკის 'შიშველი' პარამეტრის სახით გადაეცემა union ტიპი, TypeScript იყენებს დისტრიბუციულობას: ის ყოფს union-ს ცალკეულ ელემენტებად, სათითაოდ ამოწმებს პირობას და შემდეგ აერთიანებს შედეგებს ახალ union-ად. ამიტომ `string | number` ხდება `string[] | number[]`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
        docLabel: "Distributive Conditional Types — Handbook"
    },
    {
        id: 183,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Как можно отключить дистрибутивное (распределительное) поведение условного типа?",
            en: "How can you explicitly suppress or bypass the distributive behavior of a Conditional Type?",
            ka: "როგორ შეიძლება პირობითი ტიპის დისტრიბუციული ქცევის გამორთვა?"
        },
        code: `<span class="kw">type</span> <span class="type">NoDistribute</span>&lt;<span class="type">T</span>&gt; = <span class="type">______</span> <span class="kw">extends</span> <span class="type">______</span> ? <span class="type">T</span>[] : <span class="type">never</span>;`,
        options: [
            { ru: "Обернуть обе стороны оператора extends в квадратные скобки: [T] extends [any]", en: "Wrap both sides of the extends keyword in square brackets: [T] extends [any]", ka: "extends ოპერატორის ორივე მხარის მოთავსება კვადრატულ ფრჩხილებში: [T] extends [any]" },
            { ru: "Добавить ключевое слово 'strict' перед дженериком", en: "Insert the modifier keyword 'strict' right before the generic variable declaration", ka: "ჯენერიკის წინ საკვანძო სიტყვა 'strict'-ის დამატება" },
            { ru: "Использовать круглые скобки вместо угловых", en: "Switch structural definitions by declaring parameters in smooth parentheses", ka: "მრგვალი ფრჩხილების გამოყენება კუთხოვანი ფრჩხილების ნაცვლად" },
            { ru: "Никак, дистрибутивность в TypeScript работает всегда принудительно", en: "It is impossible; distributive logic forms an immutable unescapable engine constraint", ka: "ვერანაირად, დისტრიბუციულობა TypeScript-ში ყოველთვის სავალდებულოა" }
        ],
        correct: 0,
        explanation: {
            ru: "Чтобы предотвратить автоматическое распределение union-типа по веткам условного типа, проверяемый параметр и целевой тип нужно обернуть в квадратные скобки: `[T] extends [any]`. В таком случае весь union будет проверяться монолитно как единый целый тип, без разделения на части.",
            en: "To turn off default distribution, wrap the generic argument and the comparison type in matching tuple brackets: `[T] extends [any]`. This forces the compiler to treat the incoming union atomically as one uniform structure.",
            ka: "იმისათვის, რომ თავიდან ავიცილოთ union ტიპის ავტომატური განაწილება, შესამოწმებელი პარამეტრი და სამიზნე ტიპი უნდა მოვათავსოთ კვადრატულ ფრჩხილებში: `[T] extends [any]`. ასეთ შემთხვევაში მთელი union შემოწმდება როგორც ერთიანი მთლიანობა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
        docLabel: "Distributive Conditional Types — Handbook"
    },
    {
        id: 184,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Для чего предназначено ключевое слово 'infer' внутри условного типа?",
            en: "What capability does the 'infer' keyword unlock within a Conditional Type scope?",
            ka: "რისთვისაა განკუთვნილი საკვანძო სიტყვა 'infer' პირობით ტიპში?"
        },
        code: `<span class="kw">type</span> <span class="type">Unwrap</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Promise</span>&lt;<span class="kw">infer</span> <span class="type">R</span>&gt; ? <span class="type">R</span> : <span class="type">T</span>;`,
        options: [
            { ru: "Оно объявляет новую переменную типа 'R', которая автоматически выводится (извлекается) компилятором из структуры T", en: "It introduces a temporary type variable 'R' that is automatically inferred (extracted) by the compiler from the shape of T", ka: "ის აცხადებს ახალ ტიპის ცვლადს 'R', რომლის მნიშვნელობასაც კომპილატორი ავტომატურად გამოიტანს (ამოიღებს) T სტრუქტურიდან" },
            { ru: "Оно принудительно преобразует тип в математическое бесконечное множество", en: "It maps standard properties into infinite sets for internal calculation layouts", ka: "ის იძულებით გარდაქმნის ტიპს მათემატიკურ უსასრულო სიმრავლედ" },
            { ru: "Оно проверяет, унаследован ли тип от глобального интерфейса Error", en: "It performs structural checks verifying deep inheritance from native Error types", ka: "ის ამოწმებს, არის თუ არა ტიპი მემკვიდრეობით მიღებული გლობალური Error ინტერფეისიდან" },
            { ru: "Это синтаксический синоним ключевого слова typeof", en: "It represents a clean structural alias working exactly identical to typeof tokens", ka: "ეს არის typeof საკვანძო სიტყვის სინტაქსური სინონიმი" }
        ],
        correct: 0,
        explanation: {
            ru: "Ключевое слово `infer` используется исключительно в блоке проверки `extends` условных типов. Оно позволяет объявить переменную (`R`), которую компилятор должен попытаться вычислить («угадать») на основе переданной структуры. Если проверка успешна, переменная `R` становится доступна в истинной (левой) ветке тернарного оператора.",
            en: "The `infer` declarations are allowed only inside the extends conditional clause. They tell the compiler to unpack a structural component (like the resolved value of a Promise) and capture its type into a fresh identifier usable in the true branch.",
            ka: "საკვანძო სიტყვა `infer` გამოიყენება მხოლოდ პირობითი ტიპების `extends` ბლოკში. ის საშუალებას იძლევა გამოვაცხადოთ ცვლადი (`R`), რომლის გამოთვლასაც კომპილატორი შეეცდება გადაცემული სტრუქტურის საფუძველზე. წარმატების შემთხვევაში, `R` ხელმისაწვდომია ჭეშმარიტ ტოტში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Inferring Within Conditional Types — Handbook"
    },
    {
        id: 185,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Какая встроенная утилита TypeScript использует 'infer' для извлечения типа, возвращаемого функцией?",
            en: "Which global TypeScript utility operates via 'infer' to capture the return value type of a functional signature?",
            ka: "TypeScript-ის რომელი ჩაშენებული უტილიტა იყენებს 'infer'-ს ფუნქციის მიერ დაბრუნებული მნიშვნელობის ტიპის ამოსაღებად?"
        },
        code: `<span class="kw">type</span> <span class="type">MyData</span> = <span class="type">____________</span>&lt;<span class="kw">typeof</span> <span class="type">fetchUser</span>&gt;;`,
        options: [
            { ru: "Parameters", en: "Parameters", ka: "Parameters" },
            { ru: "ReturnType", en: "ReturnType", ka: "ReturnType" },
            { ru: "InstanceType", en: "InstanceType", ka: "InstanceType" },
            { ru: "Extract", en: "Extract", ka: "Extract" }
        ],
        correct: 1,
        explanation: {
            ru: "Утилита `ReturnType<T>` извлекает возвращаемый тип функции. Под капотом она устроена так: `type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;`. Она перехватывает выходное значение с помощью `infer R`.",
            en: "The global helper `ReturnType<T>` captures functional payload outputs. Its type schema layout uses infer under the hood: `type ReturnType<T> = T extends (...args: any) => infer R ? R : any;`.",
            ka: "`ReturnType<T>` უტილიტა იღებს ფუნქციის დაბრუნებულ ტიპს. შიგნიდან ის ასეა მოწყობილი: `type ReturnType<T> = T extends (...args: any) => infer R ? R : any;`. ის `infer R`-ით აფიქსირებს გამომავალ მნიშვნელობას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype",
        docLabel: "ReturnType Utility — Handbook"
    },
    {
        id: 186,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что вернет условный тип, если в качестве аргумента передать тип 'never' в распределительный (distributive) тип?",
            en: "What type is generated if you supply 'never' into a distributive Conditional Type signature?",
            ka: "რას დააბრუნებს პირობითი ტიპი, თუ არგუმენტად გადავცემთ 'never' ტიპს დისტრიბუციულ (distributive) ტიპში?"
        },
        code: `<span class="kw">type</span> <span class="type">Check</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">any</span> ? <span class="str">"yes"</span> : <span class="str">"no"</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">Check</span>&lt;<span class="type">never</span>&gt;;`,
        options: [
            { ru: "Result станет 'yes', так как never расширяет любой тип", en: "Result resolves to 'yes' because never extends all existing structural types", ka: "Result გახდება 'yes', რადგან never აფართოებს ნებისმიერ ტიპს" },
            { ru: "Result станет 'no', так как проверка завершится неудачей", en: "Result resolves to 'no' because the condition verification falls through completely", ka: "Result გახდება 'no', რადგან შემოწმება ჩავარდება" },
            { ru: "Result станет 'never', потому что распределение по пустому union-типу (каковым является never) возвращает сам never", en: "Result evaluates directly to 'never' because distributing over an empty union set (which never represents) returns never instantly", ka: "Result გახდება 'never', რადგან ცარიელ union ტიპზე (რასაც წარმოადგენს never) განაწილება თავად never-ს აბრუნებს" },
            { ru: "Компилятор выдаст синтаксическую ошибку блокировки", en: "The compiler crashes raising strict illegal-parameter type safety blocks", ka: "კომპილატორი გამოიტანს სინტაქსურ შეცდომას" }
        ],
        correct: 2,
        explanation: {
            ru: "Это известная ловушка TypeScript. Тип `never` — это пустой union тип (объединение из нуля элементов). Поскольку по умолчанию условные типы являются дистрибутивными, они пытаются пройти циклом по элементам union. Но в `never` нет элементов, цикл выполняет 0 итераций, и результатом становится сам `never`. Проверка `never extends any` даже не запускается.",
            en: "This is an important edge case. In TS, `never` is represented as an empty union. Because conditional types distribute automatically, passing an empty union yields zero iterations, causing the type evaluation to resolve immediately to `never` without testing conditions.",
            ka: "ეს არის TypeScript-ის ცნობილი მახე. `never` არის ცარიელი union ტიპი (ნულოვანი ელემენტის გაერთიანება). ვინაიდან პირობითი ტიპები დისტრიბუციულია, ისინი ცდილობენ იტერაციას union-ის ელემენტებზე. მაგრამ რადგან ელემენტები არ არის, სრულდება 0 იტერაცია და ბრუნდება `never`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
        docLabel: "Advanced Union Distribution — Handbook"
    },
    {
        id: 187,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Каким образом встроенная утилита Exclude<T, U> убирает типы из объединения (Union) с помощью условных типов?",
            en: "How does the built-in Exclude<T, U> helper prune matching members out of a Union via Conditional Types?",
            ka: "როგორ აშორებს ჩაშენებული უტილიტა Exclude<T, U> ტიპებს გაერთიანებიდან (Union) პირობითი ტიპების დახმარებით?"
        },
        code: `<span class="comment">// Реализация Exclude&lt;T, U&gt; под капотом:</span>
<span class="kw">type</span> <span class="type">ExcludeCustom</span>&lt;<span class="type">T</span>, <span class="type">U</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">U</span> ? <span class="type">never</span> : <span class="type">T</span>;`,
        options: [
            { ru: "Она превращает отфильтрованные свойства в null", en: "It forces the discarded parameter fields to accept null variables exclusively", ka: "ის გაფილტრულ თვისებებს აქცევს null-ად" },
            { ru: "За счет дистрибутивности: элементы T, которые можно присвоить в U, заменяются на 'never', а 'never' автоматически исчезает (удаляется) из результирующего Union-типа", en: "Via distributive traits: elements in T assignable to U transform to 'never', and 'never' is automatically omitted/purged from the final output Union type", ka: "დისტრიბუციულობის ხარჯზე: T-ს ის ელემენტები, რომლებიც თავსებადია U-სთან, იცვლება 'never'-ით, ხოლო 'never' ავტომატურად ქრება საბოლოო Union ტიპიდან" },
            { ru: "Она выбрасывает исключение на этапе выполнения кода", en: "It injects script panics terminating execution routines inside production runtimes", ka: "ის ისვრის გამონაკლისს (exception) კოდის შესრულების ეტაპზე" },
            { ru: "Утилита компилируется в обычный массив", en: "The entire helper block transpiles directly down into a basic array footprint", ka: "უტილიტა კომპილირდება ჩვეულებრივ მასივში" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript тип `never` в составе union-типов просто поглощается и исчезает (например, `string | never` превращается просто в `string`). Утилита `Exclude` распределяет union `T`, проверяет каждый элемент против `U`, и если он совпадает — возвращает `never`, тем самым эффективно стирая его из финального списка.",
            en: "Inside unions, the `never` type automatically dissolves and is omitted (e.g., `string | never` normalizes directly to `string`). `Exclude` combines this behavior with distribution, mapping matched types to `never` to filter them out.",
            ka: "TypeScript-ში `never` ტიპი union-ის შემადგენლობაში უბრალოდ ქრება (მაგალითად, `string | never` ხდება `string`). `Exclude` უტილიტა ანაწილებს `T` union-ს, და თუ ელემენტი ემთხვევა `U`-ს — აბრუნებს `never`-ს, რითაც შლის მას სიიდან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedmembers",
        docLabel: "Exclude Utility — Handbook"
    },
    {
        id: 188,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Какая встроенная утилита извлекает типы аргументов функции в виде кортежа (Tuple)?",
            en: "Which global TypeScript utility extracts function parameter signatures into an ordered tuple structure?",
            ka: "TypeScript-ის რომელი ჩაშენებული უტილიტა იღებს ფუნქციის არგუმენტების ტიპებს კორტეჟის (Tuple) სახით?"
        },
        code: `<span class="kw">type</span> <span class="type">Args</span> = <span class="type">____________</span>&lt;(<span class="type">id</span>: <span class="type">number</span>, <span class="type">name</span>: <span class="type">string</span>) => <span class="type">void</span>&gt;;
<span class="comment">// Args должен быть равен [number, string]</span>`,
        options: [
            { ru: "ArgumentsReader", en: "ArgumentsReader", ka: "ArgumentsReader" },
            { ru: "Parameters", en: "Parameters", ka: "Parameters" },
            { ru: "ConstructorParameters", en: "ConstructorParameters", ka: "ConstructorParameters" },
            { ru: "ReturnType", en: "ReturnType", ka: "ReturnType" }
        ],
        correct: 1,
        explanation: {
            ru: "Утилита `Parameters<T>` принимает тип функции и с помощью условного типа с `infer` извлекает типы её аргументов, упаковывая их в типизированный кортеж (Tuple): `type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;`.",
            en: "The helper `Parameters<T>` accepts a functional layout type and utilizes conditional `infer` to pull out argument declarations as a tuple array sequence: `type Parameters<T> = T extends (...args: infer P) => any ? P : never;`.",
            ka: "`Parameters<T>` უტილიტა იღებს ფუნქციის ტიპს და `infer`-ით აღჭურვილი პირობითი ტიპის დახმარებით ამოაქვს მისი არგუმენტების ტიპები კორტეჟის სახით: `type Parameters<T> = T extends (...args: infer P) => any ? P : never;`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype",
        docLabel: "Parameters Utility — Handbook"
    },
    {
        id: 189,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что произойдет, если использовать несколько ключевых слов 'infer' для одной и той же переменной типа в ковариантных позициях (например, типы возвращаемых значений функций)?",
            en: "What happens if you declare multiple 'infer' statements pointing to the same type variable identifier in covariant positions (e.g., function return types)?",
            ka: "რა მოხდება, თუ გამოვიყენებთ რამდენიმე 'infer' საკვანძо სიტყვას ერთი და იმავე ტიპის ცვლადისთვის კოვარიანტულ პოზიციებში (მაგალითად, ფუნქციების დაბრუნებულ ტიპებში)?"
        },
        code: `<span class="kw">type</span> <span class="type">Combine</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { a: () => <span class="kw">infer</span> <span class="type">R</span>, b: () => <span class="kw">infer</span> <span class="type">R</span> } ? <span class="type">R</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">Combine</span>&lt;{ a: () => <span class="type">string</span>, b: () => <span class="type">number</span> }&gt;;`,
        options: [
            { ru: "Будет сгенерирована ошибка: нельзя использовать одно имя переменной дважды", en: "The compiler crashes stating you cannot reuse the same variable identifier twice", ka: "გენერირებული იქნება შეცდომა: ერთი სახელის ორჯერ გამოყენება შეუძლებელია" },
            { ru: "Типы объединятся в Union-тип (string | number)", en: "The inferred components merge cleanly into a shared Union type structure: string | number", ka: "ტიპები გაერთიანდება Union ტიპში (string | number)" },
            { ru: "Типы пересекутся в Intersection-тип (string & number), что даст тип never", en: "The components force a rigid Intersection calculation: string & number, simplifying to never", ka: "ტიპები გადაიკვეთება Intersection ტიპში (string & number), რაც მოგვცემს never-ს" },
            { ru: "Выведется только первый тип (string)", en: "The type analyzer discards trailing tokens, resolving strictly to the first branch (string)", ka: "გამოიტანება მხოლოდ პირველი ტიპი (string)" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript, если одна и та же переменная типа `infer R` указывается в нескольких ковариантных позициях (например, в типах возвращаемых значений), компилятор делает вывод, что итоговый тип должен быть объединением (`Union`) этих кандидатов. Поэтому `Res` станет `string | number`.",
            en: "When inferring into the same type variable from multiple covariant locations (like functional return structures), TypeScript constructs a composite `Union` type out of those candidates. Therefore, `Res` resolves to `string | number`.",
            ka: "TypeScript-ში, თუ ერთი და იგივე `infer R` ცვლადი მითითებულია რამდენიმე კოვარიანტულ პოზიციაში (მაგალითად, დაბრუნებულ ტიპებში), კომპილატორი აკეთებს დასკვნას, რომ საბოლოო ტიპი უნდა იყოს ამ კანდიდატების გაერთიანება (`Union`). შესაბამისად, მივიღებთ `string | number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Infer Candidates Union — Handbook"
    },
    {
        id: 190,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что произойдет, если несколько ключевых слов 'infer' указывают на одну переменную типа в контравариантных позициях (например, аргументы функций)?",
            en: "What type is evaluated if multiple 'infer' operators targeting the exact same variable identifier occupy contravariant locations (e.g., function arguments)?",
            ka: "რა მოხდება, თუ რამდენიმე 'infer' მიუთითებს ერთსა და იმავე ცვლადზე კონტრავარიანტულ პოზიციებში (მაгალითად, ფუნქციის არგუმენტებში)?"
        },
        code: `<span class="kw">type</span> <span class="type">Combine</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { a: (<span class="type">x</span>: <span class="kw">infer</span> <span class="type">R</span>) => <span class="type">void</span>, b: (<span class="type">x</span>: <span class="kw">infer</span> <span class="type">R</span>) => <span class="type">void</span> } ? <span class="type">R</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">Combine</span>&lt;{ a: (<span class="type">x</span>: { <span class="type">foo</span>: <span class="type">string</span> }) => <span class="type">void</span>, b: (<span class="type">x</span>: { <span class="type">bar</span>: <span class="type">number</span> }) => <span class="type">void</span> }&gt;;`,
        options: [
            { ru: "Типы объединятся в Union-тип ({ foo: string } | { bar: number })", en: "The types form a combined Union output: { foo: string } | { bar: number }", ka: "ტიპები გაერთიანდება Union ტიპში ({ foo: string } | { bar: number })" },
            { ru: "Типы пересекутся в Intersection-тип ({ foo: string } & { bar: number })", en: "The types construct a combined Intersection output: { foo: string } & { bar: number }", ka: "ტიპები გადაიკვეთება Intersection ტიპში ({ foo: string } & { bar: number })" },
            { ru: "Тип сбросится до общего примитива any", en: "The structural resolution collapses and defaults back to standard any primitives", ka: "ტიპი ჩამოიშლება ზოგად any ტიპამდე" },
            { ru: "Будет выдана ошибка несовместимости интерфейсов", en: "The compiler rejects the declaration due to rigid interface structural mismatch", ka: "გამოიტანება შეცდომა ინტერფეისების უთავსებადობის გამო" }
        ],
        correct: 1,
        explanation: {
            ru: "В контравариантных позициях (таких как аргументы функций) несколько выводов для одной и той же переменной `infer R` приводят к созданию пересечения (`Intersection`). Чтобы функция могла безопасно принять аргумент для обеих сигнатур, тип должен удовлетворять обоим условиям одновременно. Поэтому результатом будет `{ foo: string } & { bar: number }`.",
            en: "When inferring into the same type variable from multiple contravariant positions (such as function arguments), TypeScript generates an `Intersection` type. To satisfy both inputs safely, the type must meet both constraints, yielding `{ foo: string } & { bar: number }`.",
            ka: "კონტრავარიანტულ პოზიციებში (როგორიცაა ფუნქციის არგუმენტები) ერთი და იმავე `infer R` ცვლადისთვის რამდენიმე დასკვნა იწვევს გადაკვეთის (`Intersection`) შექმნას. ამიტომ მივიღებთ `{ foo: string } & { bar: number }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Infer Candidates Intersection — Handbook"
    },
    {
        id: 191,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Как работает встроенная утилита NonNullable<T> под капотом с использованием условных типов?",
            en: "How does the native NonNullable<T> utility filter out types using conditional logic?",
            ka: "როგორ მუშაობს ჩაშენებული უტილიტა NonNullable<T> შიგნიდან პირობითი ტიპების გამოყენებით?"
        },
        code: `<span class="comment">// Реализация NonNullable&lt;T&gt;</span>`,
        options: [
            { ru: "T extends null | undefined ? never : T", en: "T extends null | undefined ? never : T", ka: "T extends null | undefined ? never : T" },
            { ru: "T extends object ? T : never", en: "T extends object ? T : never", ka: "T extends object ? T : never" },
            { ru: "T & { nullable: false }", en: "T & { nullable: false }", ka: "T & { nullable: false }" },
            { ru: "Omit<T, null>", en: "Omit<T, null>", ka: "Omit<T, null>" }
        ],
        correct: 0,
        explanation: {
            ru: "Утилита `NonNullable<T>` исключает `null` и `undefined` из типа `T`. Она работает как дистрибутивный условный тип: проверяет каждый элемент union-типа, и если элемент является подтипом `null | undefined`, он превращается в `never` (и тем самым удаляется из union). Иначе элемент возвращается нетронутым.",
            en: "The helper `NonNullable<T>` strips `null` and `undefined` from `T`. Its core implementation is a distributive conditional type: `T extends null | undefined ? never : T`. This safely filters out nullable primitives from any union.",
            ka: "`NonNullable<T>` უტილიტა ამორიცხავს `null` და `undefined` მნიშვნელობებს `T` ტიპიდან. ის მუშაობს როგორც დისტრიბუციული პირობითი ტიპი: `T extends null | undefined ? never : T`. შესაბამისად, nullable ტიპები იშლება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype",
        docLabel: "NonNullable Utility — Handbook"
    },
    {
        id: 192,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Каким будет результат оценки типа 'Res' в данном вложенном условном типе?",
            en: "What type is evaluated for 'Res' inside this nested Conditional Type setup?",
            ka: "რა იქნება 'Res' ტიპის მნიშვნელობა ამ ჩადგმულ პირობით ტიპში?"
        },
        code: `<span class="kw">type</span> <span class="type">Check</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">string</span>
  ? <span class="str">"A"</span>
  : <span class="type">T</span> <span class="kw">extends</span> <span class="type">number</span>
  ? <span class="str">"B"</span>
  : <span class="str">"C"</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">Check</span>&lt;<span class="type">boolean</span>&gt;;`,
        options: [
            { ru: '"A"', en: '"A"', ka: '"A"' },
            { ru: '"B"', en: '"B"', ka: '"B"' },
            { ru: '"C"', en: '"C"', ka: '"C"' },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 2,
        explanation: {
            ru: "Условные типы можно вкладывать друг в друга по аналогии с цепочками `if-else if-else` в JavaScript. Переданный тип `boolean` проверяется сначала на принадлежность к `string` (false) — переходим в правую ветку. Затем проверяется на принадлежность к `number` (false) — переходим в финальную ветку 'else', которая возвращает литерал `'C'`.",
            en: "Conditional types can be chained and nested just like JavaScript `if-else if-else` statements. Since `boolean` does not extend `string` or `number`, the type analyzer steps through both false blocks, landing on `'C'`.",
            ka: "პირობითი ტიპების ჩადგმა შესაძლებელია ერთმანეთში, ისევე როგორც `if-else if-else` კონსტრუქციების JavaScript-ში. ვინაიდან `boolean` არ არის არც `string` და არც `number`, პროცესი მიდის ბოლო ტოტამდე და აბრუნებს `'C'`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Nested Conditional Types — Handbook"
    },
    {
        id: 193,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Какое ограничение (Constraint) накладывается на использование 'infer'? Где именно синтаксически разрешено писать это слово?",
            en: "What syntax rule governs the 'infer' modifier? Where exactly are developers permitted to use it?",
            ka: "რა შეზღუდვა არსებობს 'infer'-ის გამოყენებაზე? ზუსტად სად არის ნებადართული ამ სიტყვის დაწერა სინტაქსურად?"
        },
        code: `<span class="comment">// Местоположение infer в коде</span>`,
        options: [
            { ru: "В любом месте программы перед объявлением любой переменной", en: "Anywhere inside the codebase preceding any standard variable instance declaration", ka: "პროგრამის ნებისმიერ ადგილას ნებისმიერი ცვლადის გამოცხადებამდე" },
            { ru: "Только в блоке истинного результата условного типа (после знака '?')", en: "Exclusively inside the true payload return block of a conditional type (following '?')", ka: "მხოლოდ პირობითი ტიპის ჭეშმარიტი შედეგის ბლოკში (კითხვის ნიშნის '?' შემდეგ)" },
            { ru: "Исключительно в выражении условия после ключевого слова 'extends' перед проверяемой сигнатурой", en: "Exclusively inside the condition expression immediately following the 'extends' keyword within the signature being tested", ka: "ექსკლუზიურად პირობის გამოსახულებაში, 'extends' საკვანძო სიტყვის შემდეგ შესამოწმებელი სიგნატურის შიგნით" },
            { ru: "Только в блоке инициализации параметров функций", en: "Strictly inside the functional parameters definition blueprint header", ka: "მხოლოდ ფუნქციის პარამეტრების ინიციალიზაციის ბლოკში" }
        ],
        correct: 2,
        explanation: {
            ru: "Ключевое слово `infer` синтаксически разрешено использовать исключительно в части условия условного типа, а именно сразу после слова `extends` внутри сопоставляемого шаблона. Писать его в левой части дженерика или в правых ветках ответа напрямую запрещено.",
            en: "The `infer` keyword is grammatically locked to the immediate right side of the `extends` clause within a Conditional Type condition block. It cannot be used in standard generic parameter declarations or in response branches.",
            ka: "საკვანძო სიტყვა `infer` სინტაქსურად დაშვებულია მხოლოდ პირობითი ტიპის პირობის ნაწილში, კერძოდ `extends` სიტყვის შემდეგ შესამოწმებელ შაბლონში. მისი დაწერა სხვაგან აკრძალულია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Infer Constraints — Handbook"
    },
    {
        id: 194,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Каким будет результат оценки типа 'Res' при извлечении элементов из пустого кортежа с помощью infer?",
            en: "What type is evaluated for 'Res' when attempting to infer elements out of an empty tuple array?",
            ka: "რა იქნება 'Res' ტიპის მნიშვნელობა ცარიელი კორტეჟიდან infer-ის საშუალებით ელემენტების ამოღების მცდელობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">First</span>&lt;<span class="type">T</span> <span class="kw">extends</span> <span class="type">any</span>[]&gt; = <span class="type">T</span> <span class="kw">extends</span> [<span class="kw">infer</span> <span class="type">F</span>, ...<span class="kw">infer</span> <span class="type">_</span>] ? <span class="type">F</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">First</span>&lt;[]&gt;;`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "undefined", en: "undefined", ka: "undefined" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Будет выдана ошибка переполнения стека типов", en: "The type engine halts and reports a critical stack overflow exception", ka: "გამოიტანება ტიპების სტეკის გადავსების შეცდომა" }
        ],
        correct: 2,
        explanation: {
            ru: "Тип `First` проверяет, соответствует ли массив структуре, в которой есть хотя бы один первый элемент `infer F`. Поскольку передан пустой кортеж `[]`, проверка `extends` завершается неудачей (`false`), и выполнение переходит в правую ветку, возвращая явный тип `never`.",
            en: "The `First` template expects an array with at least one element to match against `infer F`. Because an empty tuple `[]` is passed, the condition test fails, selecting the false branch which yields `never`.",
            ka: "`First` ტიპი ამოწმებს, შეესაბამება თუ არა მასივი სტრუქტურას, სადაც არის მინიმუმ ერთი პირველი ელემენტი `infer F`. ვინაიდან გადაცემულია ცარიელი კორტეჟი `[]`, პირობა არ სრულდება და ბრუნდება `never`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Tuple Inference — Handbook"
    },
    {
        id: 195,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Как работает встроенная утилита Extract<T, U> в TypeScript?",
            en: "What operations are performed by the native Extract<T, U> type utility?",
            ka: "როგორ მუშაობს ჩაშენებული უტილიტა Extract<T, U> TypeScript-ში?"
        },
        code: `<span class="comment">// Реализация Extract&lt;T, U&gt;</span>
<span class="kw">type</span> <span class="type">ExtractCustom</span>&lt;<span class="type">T</span>, <span class="type">U</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">U</span> ? <span class="type">T</span> : <span class="type">never</span>;`,
        options: [
            { ru: "Она выбирает из T только те элементы, которые совместимы (можно присвоить) с типом U", en: "It filters T to retain only those members that are assignable to type U", ka: "ის ირჩევს T-დან მხოლოდ იმ ელემენტებს, რომლებიც თავსებადია (შეიძლება მიენიჭოს) U ტიპს" },
            { ru: "Она извлекает приватные свойства из классов", en: "It extracts private member definitions directly out of classes", ka: "მას ამოაქვს კლასებიდან პრივატული თვისებები" },
            { ru: "Она удаляет все строковые литералы", en: "It forces text properties to purge structural literals", ka: "ის შლის ყველა სტრიქონულ ლიტერალს" },
            { ru: "Это аналог деструктуризации объектов", en: "It acts as a compile-time structural alias for runtime object destructuring", ka: "ეს არის ობიექტების დესტრუქტურიზაციის ანალოგი" }
        ],
        correct: 0,
        explanation: {
            ru: "Утилита `Extract<T, U>` является противоположностью `Exclude`. Благодаря дистрибутивности условных типов, она берет каждый элемент объединения `T`, и если он является подтипом `U`, оставляет его (`T`). Иначе заменяет на `never`, что убирает его из итогового объединения. Это позволяет находить пересечения union-типов.",
            en: "The `Extract<T, U>` utility operates inversely to `Exclude`. It evaluates each element of union `T`, keeping it if it fits inside `U`. Otherwise, it maps to `never`, extracting common overlapping members between unions.",
            ka: "`Extract<T, U>` უტილიტა არის `Exclude`-ის საპირისპირო. პირობითი ტიპების დისტრიბუციულობის წყალობით, ის იღებს `T` გაერთიანების თითოეულ ელემენტს, და თუ ის არის `U`-ს ქვეტიპი, ტოვებს მას (`T`), წინააღმდეგ შემთხვევაში ცვლის `never`-ით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union",
        docLabel: "Extract Utility — Handbook"
    },
    {
        id: 196,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Можно ли использовать ограничения дженериков (Generic Constraints via 'extends') совместно с условными типами?",
            en: "Can generic parameter constraints ('extends' inside <>) be combined with Conditional Types?",
            ka: "შესაძლებელია თუ არა ჯენერიკების შეზღუდვების (Generic Constraints via 'extends') გამოყენება პირობით ტიპებთან ერთად?"
        },
        code: `<span class="kw">type</span> <span class="type">GetId</span>&lt;<span class="type">T</span> <span class="kw">extends</span> { id: <span class="type">any</span> }&gt; = <span class="type">T</span>[<span class="str">"id"</span>] <span class="kw">extends</span> <span class="type">number</span> ? <span class="str">"numeric"</span> : <span class="str">"other"</span>;`,
        options: [
            { ru: "Нет, использовать слово 'extends' дважды в одной строке запрещено", en: "No, implementing the 'extends' token twice inside a single declaration is a syntax error", ka: "არა, სიტყვა 'extends'-ის ორჯერ გამოყენება ერთ ხაზზე აკრძალულია" },
            { ru: "Да, это стандартная практика: сначала сужается круг допустимых аргументов дженерика, а затем внутри условного типа вычисляется логика", en: "Yes, this is standard: the generic constraint restricts acceptable input arguments first, then the conditional type processes internal logic", ka: "დიახ, ეს სტანდარტული პრაქტიკაა: ჯერ ვიწროვდება ჯენერიკის მისაღები არგუმენტების წრე, ხოლო შემდეგ პირობითი ტიპის შიგნით გამოითვლება ლოგიკა" },
            { ru: "Да, но только если типы возвращают строки", en: "Yes, but strictly limited to scenarios where outputs resolve to strings exclusively", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ტიპები აბრუნებენ სტრიქონებს" },
            { ru: "Это приводит к зацикливанию компилятора", en: "This causes internal build cycles that trigger compiler crashes", ka: "ეს იწვევს კომპილატორის ჩაციკვლას" }
        ],
        correct: 1,
        explanation: {
            ru: "Два применения слова `extends` выполняют совершенно разные роли. Первое (`T extends { id: any }` внутри угловых скобок) — это ограничение дженерика, которое запрещает передавать в тип объекты без поля `id`. Второе (`extends number` после знака равенства) — это тернарный условный тип, вычисляющий логику на этапе сборки. Они отлично работают вместе.",
            en: "The two instances of `extends` serve entirely separate roles. Inside `<>`, `extends` defines a generic constraint that enforces input shapes. After `=`, it initializes a build-time conditional check. They work perfectly in tandem.",
            ka: "`extends` საკვანძო სიტყვის ორჯერ გამოყენებას განსხვავებული როლი აქვს. პირველი (`T extends` კუთხოვან ფრჩხილებში) არის ჯენერიკის შეზღუდვა, ხოლო მეორე პირობითი ტიპის რეალიზაციაა. ისინი შესანიშნავად მუშაობენ ერთად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Constraints and Conditionals — Handbook"
    },
    {
        id: 197,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "К какому типу приведет выражение 'Res', если сопоставить шаблонную строку с помощью infer?",
            en: "What type is evaluated for 'Res' when matching template literal string shapes with infer?",
            ka: "რა ტიპს მოგვცემს 'Res' გამოსახულება, თუ მოვახდენთ ტემპლეიტური სტრიქონის ასახვას infer-ის დახმარებით?"
        },
        code: `<span class="kw">type</span> <span class="type">GetIdNum</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> \`id_\${<span class="kw">infer</span> <span class="type">N</span>}\` ? <span class="type">N</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">GetIdNum</span>&lt;<span class="str">"id_105"</span>&gt;;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: '"105" (литеральный тип строки)', en: '"105" (as a strict string literal type)', ka: '"105" (სტრიქონის ლიტერალური ტიპი)' },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript поддерживает использование ключевого слова `infer` внутри шаблонных типов строк (`Template Literal Types`). Компилятор анализирует префикс \"id_\" и успешно извлекает оставшуюся часть строки \"105\" в качестве строкового литерала. Поскольку извлечение идет из строки, тип будет именно литеральной строкой \"105\", а не числом.",
            en: "TypeScript allows `infer` inside Template Literal Types. The compiler strips the matched prefix \"id_\" and captures the remaining segment into variable `N`. Because it parses a string input, the output is string literal \"105\".",
            ka: "TypeScript მხარს უჭერს `infer`-ს გამოყენებას ტემპლეიტურ სტრიქონებში (`Template Literal Types`). კომპილატორი აცლის პრეფიქსს \"id_\" და დარჩენილ ნაწილს აფიქსირებს `N` ცვლადში, როგორც სტრიქონულ ლიტერალს \"105\"."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Inference with Template Literals — Handbook"
    },
    {
        id: 198,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что означает базовое правило 'T extends U' в условных типах с точки зрения совместимости структур?",
            en: "What structural principle determines whether 'T extends U' evaluates to true in a Conditional Type?",
            ka: "რას ნიშნავს საბაზისო წესი 'T extends U' პირობით ტიპებში სტრუქტურული თავსებადობის თვალსაზრისით?"
        },
        code: `<span class="kw">type</span> <span class="type">X</span> = <span class="type">T</span> <span class="kw">extends</span> <span class="type">U</span> ? <span class="type">true</span> : <span class="type">false</span>;`,
        options: [
            { ru: "Тип T должен содержать абсолютно все свойства типа U и может иметь дополнительные (T является подтипом U)", en: "Type T must satisfy all structural properties of U and can provide extra members (T is a subtype of U)", ka: "T ტიპი უნდა შეიცავდეს U ტიპის აბსოლუტურად ყველა თვისებას და შეიძლება ჰქონდეს დამატებითებიც (T არის U-ს ქვეტიპი)" },
            { ru: "Тип T должен быть абсолютно идентичен типу U по составу свойств", en: "Type T must have a completely identical configuration match with type U", ka: "T ტიპი თვისებების შემადგენლობით აბსოლუტურად იდენტური უნდა იყოს U ტიპის" },
            { ru: "Тип T должен содержать меньше свойств, чем тип U", en: "Type T must declare fewer fields than type U", ka: "T ტიპი უნდა შეიცავდეს იმაზე ნაკლებ თვისებას, ვიდრე U ტიპი" },
            { ru: "Это требование наследования через ключевое слово class", en: "It indicates formal OOP subclass inheritance created with runtime class keywords", ka: "ეს არის მემკვიდრეობის მოთხოვნა class საკვანძო სიტყვის საშუალებით" }
        ],
        correct: 0,
        explanation: {
            ru: "Выражение `T extends U` в TypeScript проверяет совместимость присваивания (Assignability). Так как TS обладает структурной системой типов, это означает: 'Достаточно ли информации в типе T, чтобы им можно было безопасно заменить тип U?'. Объект T должен обладать всеми обязательными свойствами U. Наличие дополнительных полей не нарушает условие.",
            en: "The expression `T extends U` tests structural assignability. Because TS uses a structural type system, this condition checks if T contains all required fields of U. T is allowed to have extra properties without failing.",
            ka: "გამოსახულება `T extends U` TypeScript-ში ამოწმებს სტრუქტურულ თავსებადობას (Assignability). ვინაიდან TS იყენებს სტრუქტურულ სისტემას, ეს ნიშნავს: არის თუ არა T-ში საკმარისი ინფორმაცია U-ს უსაფრთხოდ ჩასანაცვლებლად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/type-compatibility.html",
        docLabel: "Type Compatibility — Handbook"
    },
    {
        id: 199,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Как ведет себя ключевое слово 'infer' при работе со свойствами объектов, имена которых неизвестны (динамические ключи)? Можно ли извлечь тип значения по ключу?",
            en: "Can 'infer' extract the value type of a specific property from an object configuration?",
            ka: "როგორ იქცევა 'infer' ობიექტის თვისებებთან მუშაობისას? შესაძლებელია თუ არა მნიშვნელობის ტიპის ამოღება?"
        },
        code: `<span class="kw">type</span> <span class="type">GetVal</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { data: <span class="kw">infer</span> <span class="type">V</span> } ? <span class="type">V</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">R</span> = <span class="type">GetVal</span>&lt;{ data: <span class="type">number</span>; status: <span class="type">string</span> }&gt;;`,
        options: [
            { ru: "Код валиден, R примет тип number, извлеченный из свойства data", en: "The code is valid; R evaluates to number, extracted precisely from the data field", ka: "კოდი ვალიდურია, R მიიღებს number ტიპს, რომელიც ამოღებულია data თვისებიდან" },
            { ru: "Код вызовет ошибку 'Property missing'", en: "The code errors out reporting 'Property missing' build issues", ka: "კოდი გამოიწვევს შეცდომას 'Property missing'" },
            { ru: "R примет тип { data: number; status: string }", en: "R resolves back to the complete object block shape: { data: number; status: string }", ka: "R მიიღებს მთლიანი ობიექტის ტიპს" },
            { ru: "R примет тип never", en: "R evaluates straight to never because of structure mismatch", ka: "R მიიღებს never ტიპს" }
        ],
        correct: 0,
        explanation: {
            ru: "Да, это классический паттерн извлечения типов. Условное выражение проверяет: соответствует ли переданный объект структуре `{ data: infer V }`. Наличие дополнительного свойства `status` не мешает сопоставлению, компилятор находит поле `data`, считывает его тип (`number`) и записывает его в переменную `V`.",
            en: "This is a key type extraction pattern. The condition checks if the input object satisfies shape `{ data: infer V }`. The companion property `status` does not break structural matching; TS isolates the `data` field and infers its type.",
            ka: "დიახ, ეს ტიპის ამოღების კლასიკური პატერნია. პირობა ამოწმებს, შეესაბამება თუ არა ობიექტი `{ data: infer V }` სტრუქტურას. დამატებითი თვისება `status` ხელს არ უშლის ამას, კომპილატორი იღებს `data`-ს ტიპს (`number`)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Object Field Inference — Handbook"
    },
    {
        id: 200,
        category: { ru: "Conditional Types", en: "Conditional Types", ka: "Conditional ტიპები" },
        tag: "conditional-types",
        question: {
            ru: "Что произойдет, если обернуть проверку в условном типе в квадратные скобки при передаче 'never' в качестве аргумента дженерика?",
            en: "What is the outcome if you wrap the comparison variables in square brackets when passing 'never' into a Conditional Type generic?",
            ka: "რა მოხდება, თუ პირობით ტიპში შემოწმებას მოვაქცევთ კვადრատულ ფრჩხილებში, როცა ჯენერიკის არგუმენტად გადავცემთ 'never'-ს?"
        },
        code: `<span class="kw">type</span> <span class="type">CheckSafe</span>&lt;<span class="type">T</span>&gt; = [<span class="type">T</span>] <span class="kw">extends</span> [<span class="type">never</span>] ? <span class="str">"yes"</span> : <span class="str">"no"</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">CheckSafe</span>&lt;<span class="type">never</span>&gt;;`,
        options: [
            { ru: "Result примет значение 'never' из-за дистрибутивности", en: "Result evaluates directly to 'never' due to default distribution rules", ka: "Result მიიღებს მნიშვნელობას 'never' დისტრიბუციულობის გამო" },
            { ru: "Result примет литеральное значение 'yes', так как квадратные скобки отключили дистрибутивность, и проверка [never] extends [never] выполнилась монолитно", en: "Result resolves to 'yes' because square brackets disable distribution, allowing the [never] extends [never] condition to execute atomically", ka: "Result მიიღებს ლიტერალურ მნიშვნელობას 'yes', რადგან კვადრატულმა ფრჩხილებმა გამორთეს დისტრიბუციულობა და შემოწმება [never] extends [never] შესრულდა ერთიანად" },
            { ru: "Result примет значение 'no'", en: "Result evaluates straight into a false 'no' branch token", ka: "Result მიიღებს მნიშვნელობას 'no'" },
            { ru: "Это вызовет ошибку парсинга токенов", en: "The statement triggers an unrecoverable token parsing compiler failure", ka: "ეს გამოიწვევს შეცდომას სინტაქსის პარსინგის დროს" }
        ],
        correct: 1,
        explanation: {
            ru: "Квадратные скобки `[T] extends [never]` полностью отключают дистрибутивное поведение условного типа. Вместо того чтобы пытаться итерироваться по пустому union-типу (что привело бы к результату `never`), TypeScript берет `never` целиком как единый аргумент. Проверка `[never] extends [never]` завершается успехом, возвращая `'yes'`. Это стандартный способ создания защитных проверок на тип `never`.",
            en: "Wrapping components in brackets `[T] extends [never]` suppresses distributive operations. Instead of looping through an empty union, TypeScript treats `never` as an atomic value, executing `[never] extends [never]` to true and returning `'yes'`.",
            ka: "კვადრატული ფრჩხილები `[T] extends [never]` სრულად თიშავს დისტრიბუციულ ქცევას. ნაცვლად იმისა, რომ მოხდეს იტერაცია ცარიელ union-ზე, TypeScript იღებს `never`-ს მთლიანობაში. შემოწმება სრულდება წარმატებით და ბრუნდება `'yes'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
        docLabel: "Checking never safely — Handbook"
    },

    // 11. ENUM
    {
        id: 201,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "В чем заключается принципиальное отличие const enum от стандартного enum?",
            en: "What is the primary architectural difference behind a const enum versus a standard enum?",
            ka: "რა არის პრინციპული განსხვავება const enum-სა და ჩვეულებრივ enum-ს შორის?"
        },
        code: `<span class="kw">const enum</span> <span class="type">Status</span> { Active = <span class="num">1</span> }
<span class="kw">let</span> s = <span class="type">Status</span>.Active;`,
        options: [
            { ru: "const enum полностью удаляется при компиляции, а значения инлайнятся (подставляются напрямую)", en: "const enum is completely erased upon compilation, and usages are directly inlined as numbers/strings", ka: "const enum სრულად იშლება კომპილაციისას, ხოლო მნიშვნელობები პირდაპირ ჩაინლაინდება კოდში" },
            { ru: "const enum запрещает использовать числовые значения, разрешая только строки", en: "const enum completely blocks number keys, enforcing string values only", ka: "const enum კრძალავს რიცხვითი მნიშვნელობების გამოყენებას და უშვებს მხოლოდ სტრიქონებს" },
            { ru: "Обычный enum не генерирует объект в итоговом JavaScript-файле", en: "Standard enums emit absolutely zero object allocations inside deployment targets", ka: "ჩვეულებრივი enum არ ქმნის ობიექტს საბოლოო JavaScript ფაილში" },
            { ru: "const enum работает медленнее из-за постоянных рантайм-проверок", en: "const enum causes performance drops due to aggressive evaluation loops", ka: "const enum უფრო ნელა მუშაობს მუდმივი runtime შემოწმებების გამო" },
        ],
        correct: 0,
        explanation: {
            ru: "Стандартный enum компилируется в массивный и сложный JavaScript-объект с двунаправленным маппингом (ключ-значение и значение-ключ). Это увеличивает размер бандла. Напротив, 'const enum' полностью стирается из кода во время билда. В местах, где вы писали Status.Active, компилятор просто вставит жесткое число '1'. Объект не создается. Обратная сторона: из-за удаления структуры const enum нельзя использовать для динамического перебора ключей в рантайме.",
            en: "Regular enums transform into heavy JavaScript object representations supporting reverse lookups, bloating compiled assets. A 'const enum' is completely erased from your files during compilation; the TS compiler looks up the targeted value and inlines its primitive form directly (replacing 'Status.Active' with just '1'). No runtime objects are generated, optimizing code weight.",
            ka: "ჩვეულებრივი enum კომპილირდება დიდ და რთულ JS ობიექტად ორმხრივი მაპინგით. ეს ზრდის ფაილის ზომას. 'const enum' კი სრულად იშლება კოდიდან ბილდის დროს. იმ ადგილებში, სადაც გეწერათ Status.Active, კომპილატორი უბრალოდ ჩასვამს პირდაპირ მნიშვნელობას '1'. შესაბამისად, ზედმეტი ობიექტი არ იქმნება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#const-enums",
        docLabel: "Const Enums — Handbook"
    },
    {
        id: 202,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Какие значения по умолчанию присвоит TypeScript членам числового перечисления (Numeric Enum), если они не инициализированы явно?",
            en: "What default sequence values does TypeScript assign to numeric enum members if no explicit initializers are provided?",
            ka: "რა მნიშვნელობებს მიანიჭებს TypeScript ნაგულისხმევად რიცხვითი Enum-ის წევრებს, თუ მათ აშკარად არ მივუთითებთ მნიშვნელობას?"
        },
        code: `<span class="kw">enum</span> <span class="type">Direction</span> { Up, Down, Left, Right }`,
        options: [
            { ru: "Все члены получат значение undefined", en: "All members evaluate to undefined", ka: "ყველა წევრი მიიღებს მნიშვნელობას undefined" },
            { ru: "Индексация начнется с 0 и будет увеличиваться на 1 для каждого следующего члена (0, 1, 2, 3)", en: "Values start indexing at 0 and increment sequentially by 1 (0, 1, 2, 3)", ka: "ინდექსაცია დაიწყება 0-იდან და გაიზრდება 1-ით თითოეული წევრისთვის (0, 1, 2, 3)" },
            { ru: "Индексация начнется с 1 и будет увеличиваться на 1 (1, 2, 3, 4)", en: "Values start indexing at 1 and increment sequentially by 1 (1, 2, 3, 4)", ka: "ინდექსაცია დაიწყება 1-იდან და გაიზრდება 1-ით (1, 2, 3, 4)" },
            { ru: "Каждому ключу будет присвоено случайное хэш-число", en: "Each element acquires a random auto-generated unique hash sequence number", ka: "თითოეულ გასაღებს მიენიჭება შემთხვევითი ჰეშ-რიცხვი" }
        ],
        correct: 1,
        explanation: {
            ru: "В числовых перечислениях TypeScript по умолчанию начинает автоматический отсчет с нуля (`0`). Каждое последующее свойство, не имеющее явного инициализатора, получает инкрементированное на единицу значение предыдущего соседа. Таким образом: Up=0, Down=1, Left=2, Right=3.",
            en: "By default, the first member of a numeric enum is initialized to `0`. Each subsequent unassigned member auto-increments by `1` from the preceding item.",
            ka: "რიცხვით გადათვლებში (Numeric Enums) TypeScript ნაგულისხმევად იწყებს ათვლას ნულიდან (`0`). ყოველი მომდევნო თვისება, რომელსაც არ აქვს მითითებული მნიშვნელობა, იზრდება ერთით წინა წევრთან შედარებით: Up=0, Down=1, Left=2, Right=3."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums",
        docLabel: "Numeric Enums — Handbook"
    },
    {
        id: 203,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Что произойдет, если инициализировать первый элемент числового перечисления значением 5, а остальные оставить пустыми?",
            en: "What sequence is generated if you explicitly set the first numeric enum member to 5, leaving the remainder unassigned?",
            ka: "რა მოხდება, თუ რიცხვითი enum-ის პირველ ელემენტს მივანიჭებთ მნიშვნელობას 5, ხოლო დანარჩენებს ცარიელს დავტოვებთ?"
        },
        code: `<span class="kw">enum</span> <span class="type">Sizes</span> { Small = <span class="num">5</span>, Medium, Large }`,
        options: [
            { ru: "Medium станет 6, Large станет 7", en: "Medium resolves to 6, Large resolves to 7", ka: "Medium გახდება 6, Large გახდება 7" },
            { ru: "Medium станет 0, Large станет 1", en: "Medium resets to 0, Large increments to 1", ka: "Medium გახდება 0, Large გახდება 1" },
            { ru: "Произойдет ошибка, так как инициализировать нужно либо все элементы, либо ни одного", en: "A compile error is raised; you must either initialize all keys or none", ka: "მოხდება შეცდომა, რადგან საჭიროა ან ყველა ელემენტის ინიციალიზაცია, ან არცერთის" },
            { ru: "Все элементы станут равны 5", en: "All subsequent keys will mirror the first assignment and evaluate to 5", ka: "ყველა ელემენტი გახდება 5-ის ტოლი" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript механизм автоинкремента отталкивается от значения предыдущего элемента. Если `Small` явно задан как `5`, то следующий за ним `Medium` автоматически получит `5 + 1 = 6`, а `Large` получит `6 + 1 = 7`.",
            en: "TypeScript auto-increment logic computes onward from the closest preceding defined element. If `Small` is manually bound to `5`, `Medium` evaluates to `6`, and `Large` evaluates to `7`.",
            ka: "TypeScript-ში ავტოინკრემენტის მექანიზმი ეყრდნობა წინა ელემენტის მნიშვნელობას. თუ `Small` არის `5`, მაშინ მომდევნო `Medium` ავტომატურად მიიღებს `5 + 1 = 6` მნიშვნელობას, ხოლო `Large` — `7`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums",
        docLabel: "Numeric Enums — Handbook"
    },
    {
        id: 204,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Что такое двунаправленный маппинг (Reverse Mapping) в контексте перечислений?",
            en: "What does the reverse mapping capability mean for generated TypeScript enums?",
            ka: "რა არის ორმხრივი მაპინგი (Reverse Mapping) გადათვლების (enum) კონტექსტში?"
        },
        code: `<span class="kw">enum</span> <span class="type">Role</span> { Admin = <span class="num">2</span> }
<span class="kw">console</span>.<span class="prop">log</span>(<span class="type">Role</span>[<span class="num">2</span>]);`,
        options: [
            { ru: "Это поведение вызовет ошибку во время выполнения из-за отсутствия ключа '2'", en: "This statement throws a runtime exception because number index lookups are restricted", ka: "ეს ქცევა გამოიწვევს შეცდომას runtime-ში, რადგან გასაღები '2' არ არსებობს" },
            { ru: "Вызов вернет строку 'Admin', так как числовые enum генерируют маппинг как от ключа к значению, так и от значения к ключу", en: "It prints the string 'Admin', because numeric enums generate lookups from key-to-value as well as value-to-key", ka: "ეს დააბრუნებს სტრიქონს 'Admin', რადგან რიცხვითი enum-ები ქმნიან მაპინგს როგორც გასაღებიდან მნიშვნელობაზე, ისე მნიშვნელობიდან გასაღებზე" },
            { ru: "Вызов вернет число 2", en: "It returns the number 2 mirroring its own input reference parameter", ka: "ეს დააბრუნებს რიცხვს 2" },
            { ru: "Вызов вернет undefined", en: "It yields undefined because lookups by value are restricted to objects", ka: "ეს დააბრუნებს undefined-ს" }
        ],
        correct: 1,
        explanation: {
            ru: "Числовые перечисления в TypeScript автоматически поддерживают обратное отображение (Reverse Mapping). Компилируемый JS-объект устроен так, что получить доступ можно как по имени ключа (`Role.Admin` даст `2`), так и по значению (`Role[2]` даст строковое имя ключа \"Admin\"). Обратите внимание: строковые enum обратного маппинга по умолчанию не создают.",
            en: "Numeric enums generate a reverse mapping out of the box. The emitted JavaScript object structure maps property-to-value and value-to-property simultaneously, allowing `Role[2]` to safely resolve to string \"Admin\".",
            ka: "რიცხვითი გადათვლები (Numeric Enums) TypeScript-ში ავტომატურად უჭერენ მხარს უკუმაპინგს. კომპილირებული JS ობიექტი ისეა მოწყობილი, რომ წვდომა შესაძლებელია როგორც გასაღებით (`Role.Admin` მოგვცემს `2`-ს), ისე მნიშვნელობით (`Role[2]` მოგვცემс \"Admin\"-ს)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings",
        docLabel: "Reverse Mappings — Handbook"
    },
    {
        id: 205,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Генерируют ли строковые перечисления (String Enums) автоматический обратный маппинг (Reverse Mapping) в JavaScript?",
            en: "Do String Enums automatically construct a reverse mapping blueprint inside compiled JavaScript targets?",
            ka: "ქმნიან თუ არა სტრიქონული გადათვლები (String Enums) ავტომატურ უკუმაპინგს (Reverse Mapping) JavaScript-ში?"
        },
        code: `<span class="kw">enum</span> <span class="type">Colors</span> { Red = <span class="str">"RED"</span> }
<span class="kw">let</span> nameOfRed = <span class="type">Colors</span>[<span class="str">"RED"</span>];`,
        options: [
            { ru: "Да, nameOfRed будет равен 'Red'", en: "Yes, nameOfRed resolves neatly into the key string 'Red'", ka: "დიახ, nameOfRed იქნება 'Red'-ის ტოლი" },
            { ru: "Нет, строковые перечисления не создают обратный маппинг; nameOfRed будет равен undefined", en: "No, string enums do not generate reverse mappings; nameOfRed resolves to undefined", ka: "არა, სტრიქონული გადათვლები არ ქმნიან უკუმაპინგს; nameOfRed იქნება undefined" },
            { ru: "Это приведет к критической ошибке компиляции кода", en: "This operation will crash during the initial compilation phase", ka: "ეს გამოიწვევს კომპილაციის კრიტიკულ შეცდომას" },
            { ru: "Строковые перечисления вообще запрещено читать по индексу", en: "Indexed brackets syntax access is strictly blocked on string-based enums", ka: "სტრიქონული enum-ების ინდექსით წაკითხვა საერთოდ აკრძალულია" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от числовых перечислений, строковые перечисления (`String Enums`) **не генерируют** обратное отображение в скомпилированном JavaScript коде. Попытка прочесть `Colors[\"RED\"]` вернет `undefined`, так как объект содержит только прямую связь `{ Red: \"RED\" }`.",
            en: "Unlike numeric counterparts, string enums do not create reverse mappings within the emitted JavaScript runtime object. The structure contains only forward property pairs, so `Colors[\"RED\"]` yields `undefined`.",
            ka: "რიცხვითი გადათვლებისგან განსხვავებით, სტრიქონული გადათვლები (`String Enums`) **არ ქმნიან** უკუმაპინგს კომპილირებულ JavaScript კოდში. `Colors[\"RED\"]`-ს წაკითხვის მცდელობა დააბრუნებს `undefined`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#string-enums",
        docLabel: "String Enums — Handbook"
    },
    {
        id: 206,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Какая ошибка возникнет в данном коде, содержащем разнородное (Heterogeneous) перечисление?",
            en: "What compilation error occurs inside this non-uniform Heterogeneous Enum block?",
            ka: "რა შეცდომა მოხდება მოცემულ კოდში, რომელიც შეიცავს არაერთგვაროვან (Heterogeneous) გადათვლას?"
        },
        code: `<span class="kw">enum</span> <span class="type">Mixed</span> {
    A = <span class="str">"YES"</span>,
    B
}`,
        options: [
            { ru: "Ошибки нет, член B автоматически получит числовое значение 0", en: "No error; member B automatically inherits numeric value 0", ka: "შეცდომა არ არის, წევრი B ავტომატურად მიიღებს რიცხვით მნიშვნელობას 0" },
            { ru: "Ошибка: Член перечисления, следующий за строковым членом, должен иметь явный инициализатор", en: "Error: Enum member must have initializer if the preceding member is a string literal", ka: "შეცდომა: Enum-ის წევრს, რომელიც მოსდევს სტრიქონულ წევრს, აუცილებლად უნდა ჰქონდეს მითითებული მნიშვნელობა (initializer)" },
            { ru: "Ошибка: В TypeScript полностью запрещены гетерогенные перечисления", en: "Error: Heterogeneous mixed enums are fully restricted inside modern TypeScript setups", ka: "შეცდომა: TypeScript-ში ჰეტეროგენული გადათვლები სრულად აკრძალულია" },
            { ru: "Ошибки нет, член B примет строковое значение 'B'", en: "No error; member B defaults to string literal fallback value 'B'", ka: "შეცდომა არ არის, წევრი B მიიღებს სტრიქონულ მნიშვნელობას 'B'" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript технически разрешены смешанные (гетерогенные) перечисления, содержащие и числа, и строки. Однако, если член перечисления идет сразу после строкового литерала, компилятор не может автоматически вычислить инкремент (нельзя сделать автоинкремент от строки). В таких случаях TypeScript требует явно прописать значение для элемента `B`.",
            en: "Heterogeneous enums are allowed but have strict rules. If an enum member lacks an initializer and follows a string member, TypeScript cannot compute an auto-increment value, throwing a compilation error unless a value is provided explicitly.",
            ka: "TypeScript-ში ტექნიკურად ნებადართულია შერეული (ჰეტეროგენული) გადათვლები. თუმცა, თუ ელემენტი მოსდევს სტრიქონულ ლიტერალს, კომპილატორს არ შეუძლია ავტოინკრემენტის გამოთვლა (სტრიქონიდან ინკრემენტი შეუძლებელია). ამიტომ საჭიროა მნიშვნელობის აშკარად მითითება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#heterogeneous-enums",
        docLabel: "Heterogeneous Enums — Handbook"
    },
    {
        id: 207,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Как получить строковый тип, объединяющий все имена ключей перечисления (а не их значения)?",
            en: "How do you construct a Union type containing all string key identifiers of a given enum (not their values)?",
            ka: "როგორ მივიღოთ სტრიქონული ტიპი, რომელიც აერთიანებს enum-ის ყველა გასაღების სახელს (და არა მათ მნიშვნელობებს)?"
        },
        code: `<span class="kw">enum</span> <span class="type">Status</span> { Active = <span class="num">1</span>, Pending = <span class="num">2</span> }
<span class="kw">type</span> <span class="type">Keys</span> = <span class="type">_________________</span>; 
<span class="comment">// Keys должен быть равен "Active" | "Pending"</span>`,
        options: [
            { ru: "keyof Status", en: "keyof Status", ka: "keyof Status" },
            { ru: "keyof typeof Status", en: "keyof typeof Status", ka: "keyof typeof Status" },
            { ru: "typeof Status", en: "typeof Status", ka: "typeof Status" },
            { ru: "Status.keys()", en: "Status.keys()", ka: "Status.keys()" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку имя `Status` в контексте типов представляет собой сам тип экземпляра перечисления, выражение `keyof Status` вернет методы чисел (так как значения — числа). Чтобы получить ключи самого объекта перечисления, нужно сначала взять его рантайм-форму через `typeof Status`, а затем извлечь ключи с помощью `keyof`. Результатом будет `\"Active\" | \"Pending\"`.",
            en: "In TypeScript, an enum name acts as a type for its members. To target the object metadata shape itself, you must invoke `typeof Status`. Applying `keyof` to that type extracts its property keys: `keyof typeof Status`.",
            ka: "ვინაიდან `Status` ტიპების კონტექსტში წარმოადგენს enum-ის მნიშვნელობის ტიპს, `keyof Status` დააბრუნებს რიცხვის მეთოდებს. თავად ობიექტის გასაღებების მისაღებად საჭიროა ჯერ მისი ფორმის აღება `typeof Status`-ით, ხოლო შემდეგ გასაღებების ამოღება `keyof`-ით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-compile-time",
        docLabel: "Enums at Compile Time — Handbook"
    },
    {
        id: 208,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Можно ли присвоить произвольное число переменной, которая типизирована обычным числовым перечислением, при отключенном флаге strictEnums?",
            en: "Can you assign an arbitrary, out-of-bounds number to a variable explicitly typed as a numeric enum?",
            ka: "შესაძლებელია თუ არა ნებისმიერი რიცხვის მინიჭება ცვლადისთვის, რომლის ტიპიც არის ჩვეულებრივი რიცხვითი enum-ი?"
        },
        code: `<span class="kw">enum</span> <span class="type">Discount</span> { Low = <span class="num">5</span> }
<span class="kw">let</span> d: <span class="type">Discount</span> = <span class="num">999</span>;`,
        options: [
            { ru: "Нет, компилятор выдаст ошибку о несоответствии диапазону значений", en: "No, the compiler blocks assignments falling outside defined range limits", ka: "არა, კომპილატორი გამოიტანს შეცდომას მნიშვნელობების დიაპაზონთან უთავსებადობის შესახებ" },
            { ru: "Да, так как числовые перечисления в TypeScript совместимы с типом 'number' в обоих направлениях", en: "Yes, because numeric enums in TypeScript are mutually assignable with any generic 'number' type", ka: "დიახ, რადგან რიცხვითი enum-ები TypeScript-ში თავსებადია 'number' ტიპთან ორივე მიმართულებით" },
            { ru: "Можно, но только если число отрицательное", en: "Yes, but strictly limited to negative numerical values", ka: "შესაძლებელია, მაგრამ მხოლოდ იმ შემთხვევაში, თუ რიცხვი უარყოფითია" },
            { ru: "Нет, присваивать можно только через явное приведение типов 'as unknown'", en: "No, this operation requires explicit forced casts using 'as unknown' overrides", ka: "არა, მინიჭება შესაძლებელია მხოლოდ ტიპების აშკარა გარდაქმნის 'as unknown' საშუალებით" }
        ],
        correct: 1,
        explanation: {
            ru: "Исторически в TypeScript числовые перечисления рассматриваются просто как обертка над числами. Переменной с типом числового `enum` можно присвоить абсолютно любое число (например, `999`), даже если такого значения нет среди членов перечисления. Это сделано для поддержки битовых масок и флагов.",
            en: "For historical compatibility and bitwise flags, numeric enums are treated as loosely compatible with the base `number` type. You can assign any literal number to a numeric enum variable without triggers from the type-checker.",
            ka: "ისტორიულად TypeScript-ში რიცხვითი გადათვლები განიხილება როგორც რიცხვების ერთგვარი შეფუთვა. რიცხვითი `enum`-ით ტიპიზებულ ცვლადს შეიძლება მიენიჭოს ნებისმიერი რიცხვი (მაგალითად, `999`), თუნდაც ის არ იყოს enum-ის წევრებს შორის. ეს გაკეთებულია ბიტური ნიღბების მხარდასაჭერად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums",
        docLabel: "Numeric Enums Assignability — Handbook"
    },
    {
        id: 209,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Какое поведение демонстрирует данный код при попытке присвоить произвольную строку переменной с типом String Enum?",
            en: "What type safety behavior is triggered when assigning an arbitrary string to a String Enum typed variable?",
            ka: "როგორ იქცევა კოდი, როდესაც ვცდილობთ ნებისმიერი სტრიქონის მინიჭებას String Enum ტიპის ცვლადისთვის?"
        },
        code: `<span class="kw">enum</span> <span class="type">Media</span> { Video = <span class="str">"VID"</span> }
<span class="kw">let</span> m: <span class="type">Media</span> = <span class="str">"VID"</span>;`,
        options: [
            { ru: "Код скомпилируется успешно, так как строка совпадает со значением члена", en: "The code compiles perfectly because the string content matches the enum value", ka: "კოდი წარმატებით კომპილირდება, რადგან სტრიქონი ემთხვევა წევრის მნიშვნელობას" },
            { ru: "Произойдет ошибка компиляции: тип '\"VID\"' не может быть присвоен типу 'Media'", en: "A compile-time error occurs: type '\"VID\"' is not assignable to type 'Media'", ka: "მოხდება კომპილაციის შეცდომა: ტიპი '\"VID\"' ვერ მიენიჭება 'Media' ტიპს" },
            { ru: "В рантайме переменная m автоматически сбросится в null", en: "At runtime, variable m automatically resets its reference value to null", ka: "Runtime-ში ცვლადი m ავტომატურად ჩამოიშლება null-ამდე" },
            { ru: "Строка автоматически преобразуется в числовой индекс", en: "The compilation process automatically maps textual tokens into numeric index offsets", ka: "სტრიქონი ავტომატურად გარდაიქმნება რიცხვით ინდექსად" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от числовых перечислений, строковые перечисления (`String Enums`) обладают строгой типизацией. Вы не можете присвоить даже абсолютно идентичную строку напрямую переменной типа `Media`. TypeScript ожидает, что значение будет передано исключительно в виде ссылки на член перечисления: `Media.Video`.",
            en: "String enums are much stricter than numeric ones. You cannot assign a raw string literal to a string enum variable, even if the runtime text value matches perfectly. You must explicitly reference the enum member: `Media.Video`.",
            ka: "რიცხვითი გადათვლებისგან განსხვავებით, სტრიქონულ გადათვლებს (`String Enums`) აქვთ მკაცრი ტიპიზაცია. თქვენ ვერ მიანიჭებთ იდენტურ სტრიქონულ ლიტერალს პირდაპირ `Media` ტიპის ცვლადს. აუცილებელია მიეთითოს თავად წევრი: `Media.Video`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#string-enums",
        docLabel: "String Enums Strictness — Handbook"
    },
    {
        id: 210,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Во что именно компилируется стандартный числовой перечислитель (Numeric Enum) в итоговом JavaScript-файле?",
            en: "What structural entity represents a standard Numeric Enum inside compiled JavaScript outputs?",
            ka: "ზუსტად რაში კომპილირდება სტანდარტული რიცხვითი გადათვლა (Numeric Enum) საბოლოო JavaScript ფაილში?"
        },
        code: `<span class="kw">enum</span> <span class="type">State</span> { Ok = <span class="num">1</span> }`,
        options: [
            { ru: "В нативный массив JavaScript строк", en: "Into a native plain JavaScript array array structure filled with text strings", ka: "JavaScript-ის ჩაშენებულ სტრიქონების მასივში" },
            { ru: "В немедленно вызываемую функцию (IIFE), которая наполняет переданный объект свойствами для прямого и обратного маппинга", en: "An Immediately Invoked Function Expression (IIFE) that populates an object with key-value and value-key mappings", ka: "დაუყოვნებლივ შესრულებად ფუნქციაში (IIFE), რომელიც ავსებს გადაცემულ ობიექტს პირდაპირი და უკუმაპინგის თვისებებით" },
            { ru: "В класс (class) с приватным конструктором", en: "Into an ES6 class module representation built with a locked private constructor footprint", ka: "კლასში (class) პრივატული კონსტრუქტორით" },
            { ru: "Он бесследно исчезает, оставляя только комментарии", en: "It vanishes completely from outputs, leaving only developer annotation comments", ka: "ის უკვალოდ ქრება და ტოვებს მხოლოდ კომენტარებს" }
        ],
        correct: 1,
        explanation: {
            ru: "Стандартный `enum` компилируется в самоисполняющуюся функцию (IIFE), которая принимает объект и навешивает на него свойства: `State[State[\"Ok\"] = 1] = \"Ok\";`. Именно эта конструкция обеспечивает рантайм-существование объекта и двунаправленный поиск значений.",
            en: "A standard enum transpiles down into an Immediately Invoked Function Expression (IIFE). This routine executes a double-assignment mapping pattern (`State[State[\"Ok\"] = 1] = \"Ok\"`) on a plain JS object, enabling full runtime lookups.",
            ka: "სტანდარტული `enum` კომპილირდება დაუყოვნებლივ შესრულებად ფუნქციაში (IIFE), რომელიც იღებს ობიექტს და ამატებს მასში თვისებებს: `State[State[\"Ok\"] = 1] = \"Ok\";`. ეს კონსტრუქცია უზრუნველყოფს ობიექტის არსებობას рантайм-ში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-runtime",
        docLabel: "Enums at Runtime — Handbook"
    },
    {
        id: 211,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Что произойдет, если в утилите компиляции включен флаг '--isolatedModules' и вы экспортируете 'const enum' без флага 'preserveConstEnums'?",
            en: "What compilation barrier arises if you export a 'const enum' under the '--isolatedModules' compiler flags?",
            ka: "რა მოხდება, თუ კომპილაციისას ჩართულია ფლაგები '--isolatedModules' და თქვენ აექსპორტებთ 'const enum'-ს 'preserveConstEnums' ფლაგის გარეშე?"
        },
        code: `<span class="kw">export const enum</span> <span class="type">Theme</span> { Dark, Light }`,
        options: [
            { ru: "Код скомпилируется без проблем", en: "The code builds successfully without any errors or warnings", ka: "კოდი პრობლემების გარეშე კომპილირდება" },
            { ru: "TypeScript выдаст ошибку, так как при isolatedModules файлы компилируются поодиночке и другие модули не смогут получить доступ к удаленному const enum", en: "TypeScript throws a compilation error because isolatedModules transpiles files independently, meaning other modules cannot resolve an erased const enum", ka: "TypeScript გამოიტანს შეცდომას, რადგან isolatedModules-ის დროს ფაილები სათითაოდ კომპილირდება და სხვა მოდულები ვერ შეძლებენ წაშლილ const enum-თან წვდომას" },
            { ru: "Перечисление автоматически превратится в глобальную строку", en: "The enum converts at build-time to occupy the global application context scope", ka: "გადათვლა ავტომატურად გადაიქცევა გლობალურ სტრიქონად" },
            { ru: "Проект зависнет на этапе сборки", en: "The compilation routine hits deadlock and hangs indefinitely", ka: "პროექტი გაიჭედება ბილდის ეტაპზე" }
        ],
        correct: 1,
        explanation: {
            ru: "С флагом `--isolatedModules` транспиляторы (такие как Babel или esbuild) обрабатывают каждый файл независимо, не имея информации о типах из других файлов. Так как `const enum` полностью удаляется при компиляции, другой файл, импортирующий этот enum, не сможет узнать, какие числа нужно подставить вместо ключей. TypeScript запрещает экспорт `const enum` в этом режиме, чтобы избежать поломки кода в рантайме.",
            en: "Under `--isolatedModules`, compilers process files one-by-one with no cross-file type knowledge. Since `const enum` metadata is completely erased during compilation, importing files cannot know what values to inline, leading to a build failure.",
            ka: "`--isolatedModules` ფლაგით კომპილატორები (როგორც Babel ან esbuild) ამუშავებენ თითოეულ ფაილს დამოუკიდებლად. ვინაიდან `const enum` სრულად იშლება კომპილაციისას, სხვა ფაილი, რომელიც აიმპორტებს ამ enum-ს, ვერ გაიგებს რა მნიშვნელობები ჩასვას. ამიტომ TS კრძალავს ამას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#isolatedmodules",
        docLabel: "Isolated Modules and Enums — TSConfig Reference"
    },
    {
        id: 212,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Разрешено ли в TypeScript использовать вычисляемые значения (Computed Values) в качестве элементов перечисления?",
            en: "Are computed execution values permitted as members inside a TypeScript enum statement?",
            ka: "ნებადართულია თუ არა TypeScript-ში გამოთვლადი მნიშვნელობების (Computed Values) გამოყენება გადათვლის ელემენტებად?"
        },
        code: `<span class="kw">enum</span> <span class="type">Calculated</span> {
    A = <span class="str">"test"</span>.<span class="prop">length</span>,
    B = <span class="num">1</span> << <span class="num">2</span>
}`,
        options: [
            { ru: "Нет, значения перечислений должны быть строго литералами", en: "No, enum values must strictly be defined via compile-time primitives or literals", ka: "არა, გადათვლის მნიშვნელობები მკაცრად ლიტერალები უნდა იყოს" },
            { ru: "Да, числовые перечисления могут содержать вычисляемые члены, но они должны идти до неинициализированных членов", en: "Yes, numeric enums can feature computed members, but they must be positioned carefully relative to uninitialized items", ka: "დიახ, რიცხვით გადათვლებში შეიძლება იყოს გამოთვლადი წევრები, თუმცა ისინი უნდა უსწრებდნენ არაინიციალიზებულ წევრებს" },
            { ru: "Да, вычисления разрешены только для строковых перечислений", en: "Yes, calculations are uniquely permitted inside string-based enums exclusively", ka: "დიახ, გამოთვლები ნებადართულია მხოლოდ სტრიქონული გადათვლებისთვის" },
            { ru: "Разрешено, но только при использовании функций высшего порядка", en: "Yes, but strictly limited to values calculated via higher-order functions", ka: "ნებადართულია, მაგრამ მხოლოდ უმაღლესი რიგის ფუნქციების გამოყენებისას" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript члены перечисления разделяются на константные и вычисляемые (computed). Использование битовых сдвигов, чтение `.length` строки — это валидные вычисляемые выражения. Главное ограничение: если элемент является вычисляемым, следующий за ним элемент обязан иметь явную инициализацию, так как компилятор не сможет автоматически сделать инкремент от динамического значения.",
            en: "TypeScript splits enum members into constant and computed fields. Operations like bitwise shifts or string `.length` lookups are valid computed values. The caveat is that any member following a computed item must be explicitly initialized.",
            ka: "TypeScript-ში გადათვლის წევრები იყოფა კონსტანტურ და გამოთვლად (computed) ელემენტებად. ბიტური ძვრები ან სტრიქონის `.length` წაკითხვა ვალიდური გამოსახულებებია. მთავარია: გამოთვლად ელემენტს მომდევნო წევრმა აუცილებლად უნდა მიუთითოს მნიშვნელობა აშკარად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members",
        docLabel: "Computed Members — Handbook"
    },
    {
        id: 213,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Что произойдет при попытке изменить значение свойства перечисления в рантайме?",
            en: "What happens if you attempt to mutate or overwrite an enum property at runtime?",
            ka: "რა მოხდება рантайм-ში გადათვლის (enum) თვისების მნიშვნელობის შეცვლის მცдელობისას?"
        },
        code: `<span class="kw">enum</span> <span class="type">Uploader</span> { Status = <span class="num">200</span> }
<span class="type">Uploader</span>.<span class="prop">Status</span> = <span class="num">400</span>;`,
        options: [
            { ru: "Значение успешно перезапишется в объекте JavaScript", en: "The value is overwritten successfully inside the baseline JavaScript engine object", ka: "მნიშვნელობა წარმატებით გადაეწერება JavaScript ობიექტში" },
            { ru: "TypeScript выдаст ошибку компиляции: свойство доступно только для чтения", en: "TypeScript triggers a compile error: properties on an enum are read-only", ka: "TypeScript გამოიტანს კომპილაციის შეცდომას: თვისება ხელმისაწვდომია მხოლოდ წაკითხვისთვის (read-only)" },
            { ru: "Код вызовет ошибку ReferenceError в браузере", en: "The statement triggers an unrecoverable runtime ReferenceError inside browsers", ka: "კოდი გამოიწვევს ReferenceError შეცდომას ბრაუზერში" },
            { ru: "Значение изменится, но только внутри области видимости файла", en: "The modification is scoped, updating references strictly within that file environment", ka: "მნიშვნელობა შეიცვლება, მაგრამ მხოლოდ მოცემული ფაილის ხილვადობის არეში" }
        ],
        correct: 1,
        explanation: {
            ru: "С точки зрения TypeScript, свойства объектов перечислений помечаются модификатором `readonly`. Попытка перезаписать `Uploader.Status = 400` пресекается компилятором на этапе проверки типов, хотя в чистом скомпилированном JavaScript это обычный объект, который технически можно было бы мутировать.",
            en: "From the type-checker perspective, all properties on a TypeScript enum object are treated as `readonly`. Mutating an enum key causes a build-time compilation error, protecting structural integrity.",
            ka: "TypeScript-ის თვალსაზრისით, გადათვლის ობიექტის თვისებები მონიშნულია როგორც `readonly`. `Uploader.Status = 400`-ის გადაწერის მცდელობა დაიბლოკება კომპილატორის მიერ, თუმცა სუფთა JS-ში ეს ჩვეულებრივი ობიექტია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
        docLabel: "Enum Readonly Properties — Handbook"
    },
    {
        id: 214,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Какой тип будет выведен для переменной 'val' в данном случае?",
            en: "What actual type is inferred for the variable 'val' in this assignment?",
            ka: "რა ტიპი მიენიჭება 'val' ცვლადს მოცემულ შემთხვევაში?"
        },
        code: `<span class="kw">enum</span> <span class="type">AppMode</span> { Dev, Prod }
<span class="kw">let</span> val = <span class="type">AppMode</span>.Dev;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "AppMode (тип самого перечисления)", en: "AppMode (the enum type context itself)", ka: "AppMode (თვითონ გადათვლის ტიპი)" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "Когда вы объявляете перечисление `AppMode`, оно одновременно создает и рантайм-объект, и уникальный тип данных `AppMode` в пространстве типов. Переменная `val`, инициализированная элементом `AppMode.Dev`, получает тип `AppMode`, а не просто общий примитив `number`.",
            en: "Declaring an enum introduces both a runtime object and a distinct type identifier. Variable `val` gets inferred with type `AppMode`, restricting it specifically to members belonging to that enum definition.",
            ka: "როდესაც აცხადებთ `AppMode` გადათვლას, ის ერთდროულად ქმნის рантайм-ობიექტს და უნიკალურ `AppMode` მონაცემთა ტიპს. `val` ცვლადი მიიღებს `AppMode` ტიპს და არა უბრალოდ `number`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types",
        docLabel: "Enum Member Types — Handbook"
    },
    {
        id: 215,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Как ведет себя 'const enum' при попытке получить доступ к его свойствам через строковую динамическую переменную (динамический ключ) в рантайме?",
            en: "What occurs if you attempt runtime property lookups on a 'const enum' using a dynamic string variable key?",
            ka: "როგორ იქცევა 'const enum', როდესაც ვცდილობთ მის თვისებებთან წვდომას დინამიკური სტრიქონული ცვლადის (დინამიკური გასაღების) საშუალებით рантайм-ში?"
        },
        code: `<span class="kw">const enum</span> <span class="type">Log</span> { Info = <span class="str">"INF"</span> }
<span class="kw">let</span> key = <span class="str">"Info"</span>;
<span class="kw">console</span>.<span class="prop">log</span>(<span class="type">Log</span>[key]);`,
        options: [
            { ru: "Будет выведено 'INF'", en: "It prints 'INF' safely directly to the console environment", ka: "დაიბეჭდება 'INF'" },
            { ru: "Произойдет ошибка компиляции, так как объект Log удален и динамический поиск невозможен", en: "A compilation error occurs because the Log object is erased, making dynamic runtime lookups impossible", ka: "მოხდება კომპილაციის შეცდომა, რადგან Log ობიექტი წაშლილია და დინამიკური ძებნა შეუძლებელია" },
            { ru: "В консоль выведется undefined", en: "It prints undefined directly without raising syntax blockers", ka: "კონსოლში დაიბეჭდება undefined" },
            { ru: "TypeScript автоматически восстановит объект в коде", en: "TypeScript automatically bakes the full object map back into deployment artifacts", ka: "TypeScript ავტომატურად აღადგენს ობიექტს კოდში" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку `const enum` полностью удаляется на этапе компиляции, в итоговом JS-коде объекта `Log` просто не существует. Компилятор может заинлайнить значение только тогда, когда ключ прописан статически (например, `Log.Info` превращается в \"INF\"). Попытка прочесть динамический ключ `Log[key]` вызывает ошибку компиляции, так как рантайм-структуры для этого поиска нет.",
            en: "Because a `const enum` is erased during compilation, its runtime object is non-existent. The compiler can only inline inline keys targeted via static dot/bracket access. Dynamic lookups like `Log[key]` fail with a build-time error.",
            ka: "ვინაიდან `const enum` სრულად იშლება კომპილაციის ეტაპზე, საბოლოო JS კოდში `Log` ობიექტი საერთოდ არ არსებობს. კომპილატორს მნიშვნელობის ჩასმა შეუძლია მხოლოდ მაშინ, როცა გასაღები გაწერილია სტატიკურად (`Log.Info`). დინამიკური გასაღებით ძებნა იწვევს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#const-enums",
        docLabel: "Const Enums Limitations — Handbook"
    },
    {
        id: 216,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Что представляют собой Ambient Enums (объявленные с ключевым словом 'declare')?",
            en: "What purpose do Ambient Enums initialized via the 'declare' keyword serve?",
            ka: "რას წარმოადგენენ Ambient Enums (გამოცხადებული 'declare' საკვანძო სიტყვით)?"
        },
        code: `<span class="kw">declare enum</span> <span class="type">ExternalLib</span> { Version = <span class="num">1</span> }`,
        options: [
            { ru: "Они используются для описания структуры перечислений, которые уже существуют в сторонних JS-библиотеках, и не генерируют рантайм-кода при компиляции", en: "They describe the shape of enums that already exist in external JavaScript libraries, emitting zero code during compilation", ka: "ისინი გამოიყენება იმ გადათვლების სტრუქტურის აღსაწერად, რომლებიც უკვე არსებობენ გარე JS ბიბლიოთეკებში და არ ქმნიან კოდს კომპილაციისას" },
            { ru: "Это перечисления, которые видны только внутри асинхронных функций", en: "They define local configurations visible exclusively within asynchronous context blocks", ka: "ეს არის გადათვლები, რომლებიც ჩანან მხოლოდ ასინქრონული ფუნქციების შიგნით" },
            { ru: "Они автоматически превращаются в JSON-файлы", en: "They automate file-system mapping routines converting objects directly into JSON files", ka: "ისინი ავტომატურად გარდაიქმნებიან JSON ფაილებად" },
            { ru: "Это устаревший синтаксис, запрещенный в строгом режиме", en: "They represent legacy deprecated syntax configurations blocked under strict modes", ka: "ეს არის მოძველებული სინტაქსი, რომელიც აკრძალულია მკაცრ რეჟიმში" }
        ],
        correct: 0,
        explanation: {
            ru: "Ключевое слово `declare` используется для создания деклараций типов (Ambient Declarations). Объявление `declare enum` сообщает компилятору TypeScript, что объект этого перечисления будет предоставлен внешней средой выполнения (например, глобальным скриптом или сторонней библиотекой). Сам TypeScript код для этого перечисления в финальный JS-файл добавлять не будет.",
            en: "Ambient enums declared with `declare` are used to describe the shape of pre-existing enum types. They are strictly informational for the type-checker and do not emit any code into the output JavaScript build assets.",
            ka: "საკვანძო სიტყვა `declare` გამოიყენется ტიპების დეკლარაციებისთვის (Ambient Declarations). `declare enum` ეუბნება კომპილატორს, რომ ეს ობიექტი უკვე არსებობს გარე გარემოში. შესაბამისად, TypeScript ამისთვის კოდს არ გენერირებს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#ambient-enums",
        docLabel: "Ambient Enums — Handbook"
    },
    {
        id: 217,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Каким будет результат компиляции данного кода, если два перечисления объявлены с одинаковым именем в одном пространстве имен (Namespace)?",
            en: "What merges if you declare two separate enums under the exact same identifier scope name?",
            ka: "რა იქნება ამ კოდის კომპილაციის შედეგი, თუ ორი გადათვლა გამოცხადებულია ერთი და იმავე სახელით ერთსა და იმავე ხილვადობის არეში?"
        },
        code: `<span class="kw">enum</span> <span class="type">User</span> { Admin = <span class="num">1</span> }
<span class="kw">enum</span> <span class="type">User</span> { Guest = <span class="num">2</span> }`,
        options: [
            { ru: "Произойдет ошибка компиляции: 'Duplicate identifier'", en: "A compilation failure occurs stating 'Duplicate identifier'", ka: "მოხდება კომპილაციის შეცდომა: 'Duplicate identifier'" },
            { ru: "TypeScript сольет их в единое перечисление User, содержащее и Admin, и Guest", en: "TypeScript automatically merges them into a single User enum containing both Admin and Guest", ka: "TypeScript გააერთიანებს მათ ერთიან User გადათვლაში, რომელიც შეიცავს Admin-საც და Guest-საც" },
            { ru: "Второе перечисление полностью сотрет и заменит первое", en: "The trailing duplicate definition overwrites and erases the original block layout", ka: "მეორე გადათვლა სრულად წაშლის და ჩაანაცვლებს პირველს" },
            { ru: "Код вызовет сбой парсера на этапе сборки", en: "The operation triggers an unrecoverable type analyzer crash", ka: "კოდი გამოიწვევს პარსერის შეცდომას ბილდის ეტაპზე" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript поддерживается механизм слияния деклараций (Declaration Merging). Если объявить два перечисления с одним именем `User`, они объединят свои члены в рамках единой рантайм-структуры. Важное правило: при слиянии перечислений только одно из них (или ни одно) может опускать инициализатор первого элемента, иначе возникнет ошибка.",
            en: "TypeScript natively supports Declaration Merging. When multiple enums share an identical identifier signature name, the compiler merges their members into a unified interface type and single runtime object layout.",
            ka: "TypeScript მხარს უჭერს დეკლარაციების გაერთიანების მექანიზმს (Declaration Merging). თუ გამოვაცხადებთ ორ გადათვლას ერთი სახელით `User`, ისინი გააერთიანებენ თავიანთ წევრებს ერთიან სტრუქტურაში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-enums",
        docLabel: "Merging Enums — Handbook"
    },
    {
        id: 218,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Какая альтернатива перечислениям чаще всего используется в современном TypeScript для экономии размера бандла и строгой проверки литералов?",
            en: "Which popular pattern serves as a lightweight alternative to enums in modern TypeScript codebases to avoid runtime overhead?",
            ka: "გადათვლის (enum) რომელი ალტერნატივა გამოიყენება ყველაზე ხშირად თანამედროვე TypeScript-ში ბანდლის ზომის დასაზოგად?"
        },
        code: `<span class="kw">const</span> <span class="type">Config</span> = {
    fast: <span class="num">100</span>,
    slow: <span class="num">1000</span>
} <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">Speed</span> = <span class="kw">typeof</span> <span class="type">Config</span>[<span class="kw">keyof typeof</span> <span class="type">Config</span>];`,
        options: [
            { ru: "Использование абстрактных классов", en: "Abstract classes configurations", ka: "აბსტრაქტული კლასების გამოყენება" },
            { ru: "Сочетание readonly объектов с оператором 'as const' (Union типов из значений объекта)", en: "Combining plain JavaScript objects with an 'as const' modifier to derive a Union of values", ka: "Readonly ობიექტების კომბინაცია 'as const' ოპერატორთან (Union ტიპის მიღება ობიექტის მნიშვნელობებიდან)" },
            { ru: "Глобальные символы (Symbol)", en: "Global runtime core Primitive Symbols", ka: "გლობალური სიმბოლოები (Symbol)" },
            { ru: "Динамические интерфейсы", en: "Dynamic interface declarations", ka: "დინამიკური ინტერფეისები" }
        ],
        correct: 1,
        explanation: {
            ru: "Паттерн `as const` (Literal Inference) вместе с обычным объектом JavaScript стал главной альтернативой стандартным перечислениям. Он создает чистый объект без оверхеда IIFE-функций, а типы извлекаются динамически. Это дает максимальную оптимизацию при минимуме сгенерированного кода.",
            en: "Object literals combined with `as const` assertion constraints are widely used instead of enums. This pattern emits standard, readable JavaScript syntax and lets you derive strict compiler union types on demand via indexing.",
            ka: "ობიექტის კომბინაცია `as const` ასერციასთან გახდა გადათვლების მთავარი ალტერნატივა. ის ქმნის სუფთა JS ობიექტს IIFE ფუნქციების ზედმეტი დანახარჯების გარეშე, ხოლო ტიპების მიღება ხდება დინამიკურად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Literal Inference as const — Handbook"
    },
    {
        id: 219,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Совместимы ли между собой члены двух разных числовых перечислений (Enum), если их значения совпадают?",
            en: "Are members of two distinct numeric enums compatible or assignable to each other if their underlying values match?",
            ka: "არიან თუ არა თავსებადი ორი სხვადასხვა რიცხვითი enum-ის წევრები ერთმანეთთან, თუ მათი მნიშვნელობები ემთხვევა?"
        },
        code: `<span class="kw">enum</span> <span class="type">A</span> { X = <span class="num">1</span> }
<span class="kw">enum</span> <span class="type">B</span> { Y = <span class="num">1</span> }
<span class="kw">let</span> val: <span class="type">A</span> = <span class="type">B</span>.<span class="prop">Y</span>;`,
        options: [
            { ru: "Да, так как это числовые значения и они равны 1", en: "Yes, because they both resolve to raw numeric values evaluated to 1", ka: "დიახ, რადგან ეს რიცხვითი მნიშვნელობებია და ორივე 1-ის ტოლია" },
            { ru: "Нет, члены разных перечислений считаются несовместимыми типами данных", en: "No, members of different enum declarations are treated as completely incompatible types", ka: "არა, სხვადასხვა გადათვლის (enum) წევრები ითვლებიან აბსოლუტურად უთავსებად მონაცემთა ტიპებად" },
            { ru: "Совместимы только при явном включении флага --allowMixedEnums", en: "They share compatibility strictly under dedicated --allowMixedEnums compiler overrides", ka: "თავსებადია მხოლოდ --allowMixedEnums ფლაგის ჩართვის შემთხვევაში" },
            { ru: "Да, но только в нестрогом режиме (strict: false)", en: "Yes, but strictly confined to environments running under non-strict configurations", ka: "დიახ, მაგრამ მხოლოდ არამკაცრ რეჟიმში (strict: false)" }
        ],
        correct: 1,
        explanation: {
            ru: "Несмотря на то, что TypeScript использует структурную подтипизацию для большинства сущностей, перечисления (`enums`) являются исключением: они используют **номинальную** типизацию для проверки совместимости между собой. Член перечисления `A` нельзя присвоить типу `B`, даже если их внутренние числовые значения абсолютно одинаковы.",
            en: "While TypeScript utilizes a structural type system for interfaces and objects, enums are a notable exception and behave **nominally**. Members from different enum definitions are structurally incompatible with each other.",
            ka: "მიუხედავად იმისა, რომ TS უმეტესწილად იყენებს სტრუქტურულ ტიპიზაციას, გადათვლები (`enums`) გამონაკლისია: ისინი იყენებენ **ნომინალურ** ტიპიზაციას. `A` enum-ის წევრის მინიჭება `B` ტიპისთვის შეუძლებელია, თუნდაც მათი მნიშვნელობები იდენტური იყოს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
        docLabel: "Enum Compatibility — Handbook"
    },
    {
        id: 220,
        category: { ru: "Enum", en: "Enum", ka: "Enum" },
        tag: "enum",
        question: {
            ru: "Для чего на практике часто применяются числовые перечисления со значениями, кратными степеням двойки (1, 2, 4, 8...)?",
            en: "For what technical scenario are numeric enums assigned binary powers of two (1, 2, 4, 8...) values typically used?",
            ka: "რისთვის გამოიყენება პრაქტიკაში ხშირად რიცხვითი გადათვლები მნიშვნელობებით ორის ხარისხებში (1, 2, 4, 8...)?"
        },
        code: `<span class="kw">enum</span> <span class="type">FilePermissions</span> {
    Read = <span class="num">1</span>,    <span class="comment">// 0001</span>
    Write = <span class="num">2</span>,   <span class="comment">// 0010</span>
    Execute = <span class="num">4</span>  <span class="comment">// 0100</span>
}`,
        options: [
            { ru: "Для ускорения отрисовки элементов интерфейса", en: "To accelerate virtual DOM interface rendering computations", ka: "ინტერფეისის ელემენტების რენდერინგის დასაჩქარებლად" },
            { ru: "Для реализации битовых флагов (битовых масок) и проверки множественных прав с помощью побитовых операторов OR/AND", en: "For implementing bitwise flags (bitmasks) to track and test composite options using bitwise OR/AND operators", ka: "ბიტური დროშების (ბიტური ნიღბების) რეალიზაციისთვის და მრავალჯერადი უფლებების შესამოწმებლად ბიტური OR/AND ოპერატორების დახმარებით" },
            { ru: "Для автоматической сериализации данных в бинарный формат Protobuf", en: "To satisfy format constraints required when serializing into binary Protobuf layouts", ka: "მონაცემთა ავტომატური სერიალიზაციისთვის Protobuf ბინარულ ფორმატში" },
            { ru: "Это требование для работы с асинхронными потоками WebWorkers", en: "This matches compliance rules required by parallel WebWorkers threads", ka: "ეს არის WebWorkers-თან მუშაობის სავალდებულო მოთხოვნა" }
        ],
        correct: 1,
        explanation: {
            ru: "Значения степеней двойки позволяют использовать перечисления в качестве битовых масок. С помощью побитового `|` (OR) можно объединять несколько флагов в одно число (например, `Read | Write` даст `3`), а с помощью `&` (AND) проверять наличие конкретного флага. TypeScript изначально проектировал числовые перечисления так, чтобы они беспрепятственно поддерживали эту классическую низкоуровневую логику.",
            en: "Using bitwise values (powers of two) converts an enum into a collection of bitmasks. This lets you store multiple flag combinations inside a single numeric state value using bitwise `|` (OR) and test for them efficiently via bitwise `&` (AND).",
            ka: "ორის ხარისხის მნიშვნელობები საშუალებას იძლევა გადათვლები გამოვიყენოთ ბიტურ ნიღბებად. ბიტური `|` (OR) ოპერატორით შესაძლებელია რამდენიმე დროშის გაერთიანება ერთ რიცხვში (მაგ. `Read | Write` მოგვცემს `3`-ს), ხოლო `&` (AND) ოპერატორით კონკრეტული უფლების შემოწმება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums",
        docLabel: "Enums as Bitfields — Handbook"
    },

    // 12. ASYNC / AWAIT
    {
        id: 221,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип данных получит переменная data после применения ключевого слова await?",
            en: "What static type will be extracted into the data variable post-await execution?",
            ka: "რა ტიპის მონაცემს მიიღებს data ცვლადი await ქივორდის გამოყენების შემდეგ?"
        },
        code: `<span class="kw">async function</span> <span class="fn">fetchNum</span>(): <span class="type">Promise</span>&lt;<span class="type">number</span>&gt; { <span class="kw">return</span> <span class="num">5</span>; }
<span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">fetchNum</span>();`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "Promise<number>", en: "Promise<number>", ka: "Promise<number>" },
            { ru: "void", en: "void", ka: "void" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
        ],
        correct: 0,
        explanation: {
            ru: "Ключевое слово 'await' работает на уровне типов TypeScript точно так же, как и на уровне выполнения JavaScript: оно 'разворачивает' или 'распаковывает' Promise. Если функция возвращает Promise<T>, то результатом выражения с await будет чистый тип T. В данном случае Promise<number> превращается в обычный number.",
            en: "The compiler replicates runtime behavior: applying the 'await' keyword onto a standard 'Promise<T>' signatures breaks down the wrapper and extracts the core entity type 'T'. Because 'fetchNum' returns 'Promise<number>', resolving its timeline with an await assignment isolates the value down to a native number.",
            ka: "await ქივორდი TypeScript-ის ტიპების დონეზე ზუსტად ისევე მუშაობს, როგორც JS-ის შესრულებისას: ის ხსნის Promise-ს. თუ ფუნქცია აბრუნებს Promise<T>-ს, მაშინ await-ის გამოყენების შედეგად მივიღებთ სუფთა T ტიპს. ამ შემთხვევაში Promise<number> გადაიქცევა ჩვეულებრივ number-ად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#awaited",
        docLabel: "Async Functions — Handbook"
    },
    {
        id: 222,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип данных автоматически возвращает любая функция, помеченная ключевым словом async, даже если внутри нет явного Promise?",
            en: "What wrapper type does an async function automatically return, even if you return a primitive value directly?",
            ka: "რა ტიპის მონაცემს აბრუნებს ავტომატურად ნებისმიერი ფუნქცია, რომელიც მონიშნულია async ქივორდით, თუნდაც მასში არ იყოს აშკარა Promise?"
        },
        code: `<span class="kw">async function</span> <span class="fn">greet</span>() {
    <span class="kw">return</span> <span class="str">"Hello"</span>;
}`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "Promise<string>", en: "Promise<string>", ka: "Promise<string>" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "void", en: "void", ka: "void" }
        ],
        correct: 1,
        explanation: {
            ru: "Спецификация JavaScript и компилятор TypeScript гарантируют, что любая `async` функция всегда оборачивает свой результат в `Promise`. Даже если вы возвращаете обычную строку `\"Hello\"`, TypeScript выведет возвращаемый тип функции как `Promise<string>`.",
            en: "JavaScript engine rules dictate that an `async` function always wraps its execution results into a Promise. Therefore, returning a raw string text yields an inferred `Promise<string>` signature in TypeScript.",
            ka: "JavaScript-ის სპეციფიკაცია და TypeScript-ის კომპილატორი უზრუნველყოფენ, რომ ნებისმიერი `async` ფუნქცია ყოველთვის აბრუნებს `Promise`-ს. მაშინაც კი, თუ თქვენ აბრუნებთ უბრალო სტრიქონს, ტიპი იქნება `Promise<string>`."
        },
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        docLabel: "Async function — MDN"
    },
    {
        id: 223,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип по умолчанию имеет переменная ошибки 'error' в блоке catch при использовании асинхронного кода с включенным флагом useUnknownInCatchVariables?",
            en: "What default type is bound to the 'error' variable inside a catch block when strict compilation flags are enabled?",
            ka: "რა ტიპისაა ნაგულისხმევად შეცდომის ცვლადი 'error' catch ბლოკში useUnknownInCatchVariables ფლაგის ჩართვისას?"
        },
        code: `<span class="kw">try</span> {
    <span class="kw">await</span> <span class="fn">doSomething</span>();
} <span class="kw">catch</span> (error) {
    <span class="comment">// Какой тип у error?</span>
}`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "Error", en: "Error", ka: "Error" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "RuntimeException", en: "RuntimeException", ka: "RuntimeException" }
        ],
        correct: 2,
        explanation: {
            ru: "В современном TypeScript (и при флаге `strict` / `useUnknownInCatchVariables`) переменная в блоке `catch` всегда имеет тип `unknown`. В JavaScript выбросить в качестве ошибки можно что угодно: объект `Error`, строку, число или `undefined`. Поскольку тип заранее не застрахован, TypeScript заставляет вас безопасно проверить ошибку (например, через `instanceof Error`) перед использованием.",
            en: "Under modern strict compiler configurations, catch block error variables default to `unknown` instead of `any`. This forces developers to perform explicit runtime type assertions or guards, since JavaScript allows throwing any data format as an exception.",
            ka: "თანამედროვე TypeScript-ში (და `strict` რეჟიმში) `catch` ბლოკში არსებული შეცდომის ცვლადი ყოველთვის არის `unknown`. ვინაიდან JS-ში შეცდომად შეიძლება ნებისმიერი რამ იქნას გასროლილი, TS გაიძულებთ შეამოწმოთ ტიპი (მაგ. `instanceof Error`) მის გამოყენებამდე."
        },
        docLink: "https://www.typescriptlang.org/tsconfig/#useUnknownInCatchVariables",
        docLabel: "useUnknownInCatchVariables — TSConfig"
    },
    {
        id: 224,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой встроенный служебный тип (Utility Type) используется в TypeScript для рекурсивного разворачивания вложенных промисов и получения чистого возвращаемого значения?",
            en: "Which official TypeScript utility type unboxes deeply nested Promise resolutions down to their un-wrapped primitive data layer?",
            ka: "რომელი ჩაშენებული სერვისული ტიპი (Utility Type) გამოიყენება TypeScript-ში ჩადგმული Promise-ების რეკურსიულად გასახსნელად?"
        },
        code: `<span class="kw">type</span> <span class="type">DeepPromise</span> = <span class="type">Promise</span>&lt;<span class="type">Promise</span>&lt;<span class="type">string</span>&gt;&gt;;
<span class="kw">type</span> <span class="type">Unwrapped</span> = <span class="type">Awaited</span>&lt;<span class="type">DeepPromise</span>&gt;;`,
        options: [
            { ru: "Unwrap<T>", en: "Unwrap<T>", ka: "Unwrap<T>" },
            { ru: "PromiseResult<T>", en: "PromiseResult<T>", ka: "PromiseResult<T>" },
            { ru: "Awaited<T>", en: "Awaited<T>", ka: "Awaited<T>" },
            { ru: "AsyncResult<T>", en: "AsyncResult<T>", ka: "AsyncResult<T>" }
        ],
        correct: 2,
        explanation: {
            ru: "Тип `Awaited<T>` был добавлен специально для моделирования поведения ключевого слова `await` или метода `Promise.all`. Он рекурсивно разворачивает переданный тип, если тот является промисом или «thenable» объектом, до тех пор, пока не доберется до базового типа (в данном случае `string`).",
            en: "The `Awaited<T>` utility type models operations like `await` in async functions or the `.then()` method on Promises. It recursively unwraps promises until a non-promise type is extracted.",
            ka: "`Awaited<T>` ტიპი დაემატა სპეციალურად `await` ქივორდის ან `Promise.all`-ს ქცევის მოდელირებისთვის. ის რეკურსიულად ხსნის გადაცემულ ტიპს, თუ ის წარმოადგენს პრომისს, სანამ არ მივა საბაზისო ტიპამდე (მოცემულ შემთხვევაში `string`)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype",
        docLabel: "Awaited — Utility Types"
    },
    {
        id: 225,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип будет выведен для переменной 'results' при передаче кортежа в Promise.all?",
            en: "What exact tuple structure type is inferred for the 'results' variable when executing Promise.all with diverse inputs?",
            ka: "რა ტიპი მიენიჭება 'results' ცვლადს Promise.all-ში კორტეჟის (tuple) გადაცემისას?"
        },
        code: `<span class="kw">const</span> p1 = <span class="type">Promise</span>.<span class="prop">resolve</span>(<span class="num">10</span>);
<span class="kw">const</span> p2 = <span class="type">Promise</span>.<span class="prop">resolve</span>(<span class="str">"ok"</span>);
<span class="kw">const</span> results = <span class="kw">await</span> <span class="type">Promise</span>.<span class="prop">all</span>([p1, p2]);`,
        options: [
            { ru: "(number | string)[]", en: "(number | string)[]", ka: "(number | string)[]" },
            { ru: "[number, string]", en: "[number, string]", ka: "[number, string]" },
            { ru: "any[]", en: "any[]", ka: "any[]" },
            { ru: "Promise<[number, string]>", en: "Promise<[number, string]>", ka: "Promise<[number, string]>" }
        ],
        correct: 1,
        explanation: {
            ru: "Благодаря строгой типизации сигнатур `Promise.all` в TypeScript, если вы передаете фиксированный массив (кортеж) промисов, на выходе после `await` вы получаете строго типизированный кортеж значений `[number, string]`, сохраняющий позиции элементов, а не просто перемешанный массив `(number | string)[]`.",
            en: "TypeScript handles `Promise.all` signatures with generic overrides. When given a concrete array tuple of promises, it preserves position mapping, yielding an unwrapped tuple typed as `[number, string]` instead of a flattened array union type.",
            ka: "TypeScript-ში `Promise.all`-ს მკაცრი ტიპიზაციის წყალობით, თუ თქვენ გადასცემთ პრომისების ფიქსირებულ მასივს (კორტეჟს), `await`- ის შემდეგ მიიღებთ ზუსტად ტიპიზებულ კორტეჟს `[number, string]`, რომელიც ინარჩუნებს ელემენტების პოზიციებს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html",
        docLabel: "Variadic Tuple Types — Release Notes"
    },
    {
        id: 226,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Каким интерфейсом должен быть типизирован асинхронный генератор (async function*), чтобы по нему можно было пройтись циклом 'for await...of'?",
            en: "Which standard TypeScript generic interface typed signature describes the return value of an async generator function?",
            ka: "რა ინტერფეისით უნდა იყოს ტიპიზებული ასინქრონული გენერატორი (async function*), რათა შესაძლებელი იყოს მასზე 'for await...of' ციკლით გავლა?"
        },
        code: `<span class="kw">async function*</span> <span class="fn">generateData</span>(): <span class="type">_________________</span> {
    <span class="kw">yield</span> <span class="str">"chunk"</span>;
}`,
        options: [
            { ru: "AsyncGenerator<string>", en: "AsyncGenerator<string>", ka: "AsyncGenerator<string>" },
            { ru: "Promise<string[]>", en: "Promise<string[]>", ka: "Promise<string[]>" },
            { ru: "Iterator<string>", en: "Iterator<string>", ka: "Iterator<string>" },
            { ru: "AsyncIterableIterator<void>", en: "AsyncIterableIterator<void>", ka: "AsyncIterableIterator<void>" }
        ],
        correct: 0,
        explanation: {
            ru: "Асинхронные функции-генераторы (`async function*`) возвращают объект, соответствующий интерфейсу `AsyncGenerator<T, Return, Next>` (или его базовому родителю `AsyncIterableIterator`). Это позволяет использовать синтаксис `for await (const chunk of generateData())` для поочередного считывания асинхронных чанков.",
            en: "An asynchronous generator function returns an `AsyncGenerator<T>` object layout. This type extends `AsyncIterableIterator`, making it compatible with the `for await...of` loop syntax designed to stream async-yield blocks.",
            ka: "ასინქრონული გენერატორ-ფუნქციები (`async function*`) აბრუნებენ ობიექტს, რომელიც შეესაბამება `AsyncGenerator<T>` ინტერფეისს. ეს საშუალებას იძლევა გამოვიყენოთ `for await (const chunk of generateData())` სინტაქსი მონაცემების მისაღებად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iterators",
        docLabel: "Async Iterators — Release Notes"
    },
    {
        id: 227,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какую ошибку компиляции вызовет данный код, если целевая версия JavaScript в tsconfig (target) установлена в ES5, а полифилы промисов не подключены?",
            en: "What compilation roadblock occurs if you use async/await keywords while targeting the legacy ES5 standard in tsconfig?",
            ka: "რა კომპილაციის შეცდომას გამოიწვევს ეს კოდი, თუ tsconfig-ში target დაყენებულია ES5-ზე, ხოლო პრომისების პოლიფილები არ არის ჩართული?"
        },
        code: `<span class="kw">async function</span> <span class="fn">start</span>() {}`,
        options: [
            { ru: "Ошибки нет, TypeScript сгенерирует сложный стейт-машин код на коллбэках", en: "No error; TypeScript automatically transpiles async constructs into callback-driven state machines", ka: "შეცდომა არ არის, TypeScript დააგენერირებს რთულ state-machine კოდს callback-ებზე" },
            { ru: "Ошибка: 'An async function or method in ES5/ES3 requires the 'Promise' constructor. Make sure you have a polyfill...'", en: "An async function or method in ES5/ES3 requires the 'Promise' constructor. Make sure you have a polyfill...", ka: "შეცდომა: 'An async function or method in ES5/ES3 requires the 'Promise' constructor. Make sure you have a polyfill...'" },
            { ru: "Ошибка: Использование async запрещено для любых версий ниже ES2020", en: "Error: The usage of async routines is strictly blocked for any targets below ES2020 frameworks", ka: "შეცდომა: async-ის გამოყენება აკრძალულია ES2020-ზე დაბალი ვერსიებისთვის" },
            { ru: "Код скомпилируется, но упадет со сбоем сегментации", en: "The build processes cleanly but triggers a low-level memory segmentation fault at runtime", ka: "კოდი დაკომპილირდება, მაგრამ გაიშვება შეცდომით рантайм-ში" }
        ],
        correct: 1,
        explanation: {
            ru: "Хотя TypeScript умеет понижать синтаксис `async/await` в циклы и стейт-машины для старых сред типа ES5, генерируемый код под капотом все равно опирается на глобальный конструктор `Promise`. Если вы компилируете под ES5, вам нужно либо обновить таргет до ES6+, либо подключить типы промисов через свойство `\"lib\": [\"ES5\", \"ScriptHost\", \"DOM\", \"ES2015.Promise\"]`.",
            en: "When down-leveling async/await to ES5 target modules, TypeScript generates a state machine that inherently depends on the global `Promise` class constructor. Without an environment polyfill or matching `lib` declaration definitions, compilation halts.",
            ka:"მიუხედავად იმისა, რომ TS-ს შეუძლია `async/await` სინტაქსის დაყვანა ES5-მდე, გენერირებული კოდი მაინც ეყრდნობა გლობალურ `Promise` კონსტრუქტორს. თუ აკომპილირებთ ES5-ზე, უნდა განაახლოთ target ვერსია ან ჩართოთ პრომისის ტიპები `lib`-ში."
        },
        docLink: "https://www.typescriptlang.org/tsconfig/#lib",
        docLabel: "Compiler Options lib — TSConfig"
    },
    {
        id: 228,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Как поведет себя TypeScript, если попытаться применить оператор await к обычному примитивному значению, которое не является промисом?",
            en: "How does the TypeScript compiler react when evaluating an await operator applied to a non-promise primitive variable?",
            ka: "როგორ მოიქცევა TypeScript, თუ ვცდით await ოპერატორის გამოყენებას ჩვეულებრივ პრიმიტიულ მნიშვნელობაზე, რომელიც არ არის პრომისი?"
        },
        code: `<span class="kw">const</span> num = <span class="num">42</span>;
<span class="kw">const</span> result = <span class="kw">await</span> num;`,
        options: [
            { ru: "Вызовет жесткую ошибку компиляции, запрещая await для не-промисов", en: "Throws a rigid compilation error since await statements are restricted to Promises", ka: "გამოიწვევს კომპილაციის შეცდომას, რადგან await აკრძალულია არაპრომისებისთვის" },
            { ru: "Код скомпилируется, result получит тип number, так как рантайм JavaScript автоматически оборачивает значение в resolved Promise", en: "The code compiles fine, result evaluates to type number, because the JavaScript runtime auto-wraps immediate non-promises into resolved states", ka: "კოდი დაკომპილირდება, result მიიღებს number ტიპს, რადგან JavaScript ავტომატურად ფუთავს მნიშვნელობას resolved Promise-ში" },
            { ru: "result примет тип void", en: "result is downcast into a void assignment", ka: "result მიიღებს void ტიპს" },
            { ru: "result примет тип any", en: "result falls back onto an unsafe any data signature type", ka: "result მიიღებს any ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "В JavaScript синтаксис `await` абсолютно валиден для любых типов данных: если переданное выражение не является промисом, оно просто неявно превращается в успешно разрешенный промис с этим значением. TypeScript знает об этом поведении рантайма, поэтому код компилируется без ошибок, а тип `result` успешно выводится как `number` (благодаря поведению `Awaited<number> => number`).",
            en: "Awaiting a non-promise value is fully valid in JavaScript; the runtime treats it as an immediately resolved promise wrapper. TypeScript respects this pattern, allowing compilation and inferring the underlying primitive type safely.",
            ka: "JavaScript-ში `await` სრულიად ვალიდურია ნებისმიერი ტიპის მონაცემისთვის: თუ გამოსახულება არ არის პრომისი, ის უბრალოდ გარდაიქმნება წარმატებულ პრომისად. TypeScript-მა იცის ეს ქცევა, ამიტომ კოდი კომპილირდება შეცდომის გარეშე, ხოლო `result` იქნება `number`."
        },
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await",
        docLabel: "Await Operator — MDN"
    },
    {
        id: 229,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Каким типом следует описать объект, у которого есть метод '.then()', чтобы TypeScript воспринял его как полноценный 'Thenable'-объект (аналог Promise) при выполнении await?",
            en: "What generic interface blueprint qualifies a custom object structure as a 'Thenable' entity acceptable by the await operator?",
            ka: "რა ტიპით უნდა აღვწეროთ ობიექტი, რომელსაც აქვს '.then()' მეთოდი, რათა TypeScript-მა ის აღიქვას როგორც 'Thenable' ობიექტი await-ის შესრულებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">MyThenable</span>&lt;<span class="type">T</span>&gt; {
    <span class="fn">then</span>(
        <span class="fn">onfulfilled</span>: (value: <span class="type">T</span>) => <span class="type">any</span>
    ): <span class="type">any</span>;
}`,
        options: [
            { ru: "Объекты с кастомными методами then запрещено передавать в await", en: "Custom object instances lacking native Promise inheritance crash if passed to await", ka: "then მეთოდის მქონე კასტომური ობიექტების გადაცემა await-ში აკრძალულია" },
            { ru: "Такой интерфейс валиден, TypeScript распознает его структуру и развернет возвращаемое значение метода в тип T при await", en: "This interface structure is valid; TypeScript recognizes the 'thenable' shape and extracts type T upon awaiting it", ka: "ეს ინტერფეისი ვალიდურია, TypeScript ამოიცნობს მის სტრუქტურას და გახსნის დაბრუნებულ მნიშვნელობას T ტიპში await-ის დროს" },
            { ru: "Нужно обязательно наследоваться от класса Promise", en: "The custom signature block must explicitly extend the global Promise class blueprint", ka: "აუცილებელია Promise კლასიდან მემკვიდრეობის მიღება" },
            { ru: "Интерфейс скомпилируется только в том случае, если onfulfilled возвращает void", en: "The type checker requires that the onfulfilled callback function explicitly returns void", ka: "ინტერფეისი დაკომპილირდება მხოლოდ იმ შემთხვევაში, თუ onfulfilled აბრუნებს void-ს" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово `await` в JS/TS работает не только с нативными экземплярами `Promise`, но и с любыми объектами, имеющими метод `.then` (так называемые Thenables). TypeScript отлично понимает эту структуру: встроенный тип `Awaited<T>` проверяет наличие метода `then` и вытаскивает из коллбэка `onfulfilled` тип передаваемого значения `T`.",
            en: "The JavaScript `await` ecosystem interacts with any objects featuring a `.then()` method handler (Thenables). TypeScript matches this signature directly inside its helper types, reading the success callback arguments to extract the wrapped generic type.",
            ka: "JS/TS-ში `await` ქივორდი მუშაობს არა მხოლოდ ნატივ `Promise` ობიექტებთან, არამედ ნებისმიერ ობიექტთან, რომელსაც აქვს `.then` მეთოდი (ე.წ. Thenables). TypeScript-ს კარგად ესმის ეს სტრუქტურა და ამოიღებს მნიშვნელობის T ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype",
        docLabel: "Awaited and Thenables — Handbook"
    },
    {
        id: 230,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "В чем заключается опасность использования типизации возвращаемого значения 'Promise<any>' в экспортируемых асинхронных функциях API?",
            en: "What major type-safety risk do you introduce by declaring an async API handler with a 'Promise<any>' return statement?",
            ka: "რაში მდგომარეობს საფრთხე ექსპორტირებულ ასინქრონულ API ფუნქციებში 'Promise<any>' დაბრუნების ტიპის მითითებისას?"
        },
        code: `<span class="kw">export async function</span> <span class="fn">loadUser</span>(): <span class="type">Promise</span>&lt;<span class="type">any</span>&gt; {
    <span class="kw">return</span> <span class="kw">await</span> <span class="fn">fetchData</span>();
}`,
        options: [
            { ru: "Функция перестанет выполняться асинхронно", en: "The function reverts to a blocking synchronous execution thread loop at runtime", ka: "ფუნქცია შეწყვეტს ასინქრონულად შესრულებას" },
            { ru: "Использование 'any' отключает проверку типов для всей цепочки последующих операций с результатом этой функции после await", en: "Using 'any' infects downstream variables post-await, turning off type checking across all subsequent consuming operations", ka: "'any'-ის გამოყენება თიშავს ტიპების შემოწმებას ამ ფუნქციის შედეგის შემდგომი გამოყენების მთელ ჯაჭვში await-ის შემდეგ" },
            { ru: "TypeScript принудительно заблокирует компиляцию этого файла", en: "TypeScript triggers an uncatchable core type compiler system error block", ka: "TypeScript იძულებით დაბლოკავს ამ ფაილის კომპილაციას" },
            { ru: "Значение 'any' запрещает использовать блоки try/catch", en: "Returning any blocks developers from deploying wrapped error handler blocks", ka: "'any' მნიშვნელობა კრძალავს try/catch ბლოკების გამოყენებას" }
        ],
        correct: 1,
        explanation: {
            ru: "Использование `Promise<any>` нивелирует преимущества TypeScript. После того как потребитель напишет `const user = await loadUser()`, переменная `user` получит тип `any`. Это позволит совершать любые ошибочные действия (читать несуществующие свойства, передавать не те аргументы), и компилятор не сможет выдать предупреждение. Рекомендуется использовать `Promise<unknown>` или конкретный интерфейс.",
            en: "Declaring `Promise<any>` pollutes type safety. Applying `await` yields an `any` typed reference, disabling compiler assistance for that resource downstream. Using `Promise<unknown>` or concrete shapes is the preferred approach.",
            ka: "`Promise<any>`-ის გამოყენება ანულირებს TS-ის უპირატესობებს. მას შემდეგ, რაც მომხმარებელი დაწერს `const user = await loadUser()`, `user` ცვლადი მიიღებს `any` ტიპს. ეს გამოიწვევს ტიპების შემოწმების გათიშვას მის შემდგომ გამოყენებაზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/declaration-files/do-not-edit-this-file-see-readme.html#any",
        docLabel: "Avoiding Any — Production Guidelines"
    },
    {
        id: 231,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какая ошибка проектирования типов допущена в данном объявлении метода интерфейса?",
            en: "What fundamental structural mistake is made in this async interface method definition?",
            ka: "რა შეცდომაა დაშვებული ინტერფეისის მეთოდის ამგვარ გამოცხადებაში?"
        },
        code: `<span class="kw">interface</span> <span class="type">DataService</span> {
    <span class="kw">async</span> <span class="fn">getData</span>(): <span class="type">Promise</span>&lt;<span class="type">string</span>&gt;;
}`,
        options: [
            { ru: "Метод должен возвращать void, а не Promise", en: "The method definition framework strictly demands a void return layout shape", ka: "მეთოდი უნდა აბრუნებდეს void-ს და არა Promise-ს" },
            { ru: "Ключевое слово 'async' недопустимо использовать внутри объявлений типов и интерфейсов; достаточно указать возвращаемый тип Promise", en: "The 'async' modifier keyword cannot be used within type or interface declarations; specifying a Promise return type is sufficient", ka: "საკვანძო სიტყვა 'async'-ის გამოყენება დაუშვებელია ტიპებისა და ინტერფეისების გამოცხადებისას; საკმარისია მიეთითოს დაბრუნების ტიპი Promise" },
            { ru: "Вместо string нужно использовать тип unknown", en: "The string generic param wrapper must be swapped to hold an unknown token", ka: "string-ის ნაცვლად საჭიროა unknown ტიპის გამოყენება" },
            { ru: "Ошибки нет, код написан абсолютно верно", en: "No error; this statement follows perfect syntactic and structural guidelines", ka: "შეცდომა არ არის, კოდი აბსოლუტურად სწორადაა დაწერილი" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово `async` — это деталь реализации конкретной функции в рантайме, а не часть контракта типа. В интерфейсах и абстрактных типах указывать `async` запрещено. Чтобы показать, что функция асинхронная, достаточно вернуть `Promise<T>`: `getData(): Promise<string>;`.",
            en: "The `async` keyword represents an implementation detail rather than an interface type contract definition. Inside declaration blocks, you only declare that a method returns a `Promise<T>`. Adding `async` triggers a syntax error.",
            ka: "საკვანძო სიტყვა `async` არის ფუნქციის რეალიზაციის დეტალი рантайм-ში და არა ტიპის კონტრაქტის ნაწილი. ინტერფეისებში `async`- ის მითითება აკრძალულია. საკმარისია პრომისის დაბრუნება: `getData(): Promise<string>;`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
        docLabel: "Object Types Method Signatures — Handbook"
    },
    {
        id: 232,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип будет иметь переменная 'x' после выполнения утилиты ReturnType на асинхронной функции?",
            en: "What type profile does the ReturnType utility infer when mapped over an async function target?",
            ka: "რა ტიპის იქნება 'x' ცვლადი асинхრონულ ფუნქციაზე ReturnType სერვისული ტიპის გამოყენების შემდეგ?"
        },
        code: `<span class="kw">async function</span> <span class="fn">numFactory</span>() { <span class="kw">return</span> <span class="num">100</span>; }
<span class="kw">type</span> <span class="type">X</span> = <span class="type">ReturnType</span>&lt;<span class="kw">typeof</span> <span class="fn">numFactory</span>&gt;;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "Promise<number>", en: "Promise<number>", ka: "Promise<number>" },
            { ru: "Awaited<number>", en: "Awaited<number>", ka: "Awaited<number>" },
            { ru: "void", en: "void", ka: "void" }
        ],
        correct: 1,
        explanation: {
            ru: "Утилита `ReturnType` извлекает тип, который функция возвращает декларативно. Поскольку `async` функция всегда возвращает объект Promise, `ReturnType<typeof numFactory>` вернет именно `Promise<number>`. Если бы вам нужно было получить чистый `number`, следовало бы обернуть выражение дополнительно в `Awaited<...>`.",
            en: "The `ReturnType` utility evaluates what a function formally emits. Since async declarations naturally produce promises, `ReturnType<typeof numFactory>` resolves to `Promise<number>`. To get the raw inner type, combine it with `Awaited`.",
            ka: "`ReturnType` სერვისული ტიპი იღებს იმ ტიპს, რომელსაც ფუნქცია აბრუნებს დეკლარაციულად. ვინაიდან `async` ფუნქცია ყოველთვის აბრუნებს Promise-ს, შედეგი იქნება `Promise<number>`. სუფთა `number`- ის მისაღებად საჭიროა `Awaited`- ის გამოყენება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype",
        docLabel: "ReturnType — Utility Types"
    },
    {
        id: 233,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Разрешено ли использовать ключевое слово await на верхнем уровне модуля (Top-level await) в TypeScript без оборачивания в async-функцию?",
            en: "Is Top-level await permitted in TypeScript files without wrapping the expression inside an explicit async block?",
            ka: "ნებადართულია თუ არა await ქივорდის გამოყენება მოდულის ზედა დონეზე (Top-level await) TypeScript-ში async ფუნქციაში გახვევის გარეშე?"
        },
        code: `<span class="kw">const</span> settings = <span class="kw">await</span> <span class="fn">loadConfig</span>();
<span class="kw">export</span> { settings };`,
        options: [
            { ru: "Нет, await разрешен строго внутри функций с пометкой async", en: "No, await code patterns remain strictly isolated to async function bodies exclusively", ka: "არა, await დაშვებულია მკაცრად async მონიშვნის მქონე ფუნქციებში" },
            { ru: "Да, если в настройках tsconfig.json установлены современные значения свойств 'module' (например, es2022 или next) и 'target'", en: "Yes, provided that modern ecosystem targets (such as es2022 or esnext) are specified inside your tsconfig.json 'module' settings", ka: "დიახ, თუ tsconfig.json-ის პარამეტრებში მითითებულია თანამედროვე 'module' მნიშვნელობები (მაგალითად es2022 ან next) და შესაბამისი 'target'-ი" },
            { ru: "Разрешено, но только в файлах с расширением .d.ts", en: "Yes, but accessibility is exclusively unlocked inside declaration .d.ts file extensions", ka: "ნებადართულია, მაგრამ მხოლოდ .d.ts გაფართოების მქონე ფაილებში" },
            { ru: "Разрешено только при отключенном режиме strict", en: "Yes, but only unlocked when running configurations with strict compilation turned off", ka: "ნებადართულია მხოლოდ გათიშული strict რეჟიმის დროს" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript поддерживает спецификацию ECMAScript 'Top-level await'. Вы можете использовать `await` на самом верхнем уровне файла (вне функций), но для этого ваш скомпилированный модуль должен быть нацелен на современный стандарт. В `tsconfig.json` свойство `module` должно быть выставлено в `es2022`, `esnext`, `node16` или `nodenext`.",
            en: "TypeScript implements the ECMAScript 'Top-level await' standard feature. It is fully available at the root level of modules, provided your `tsconfig.json` configurations target modern output schemas like `es2022` or `esnext`.",
            ka: "TypeScript მხარს უჭერს ECMAScript 'Top-level await' სპეციფიკაციას. თქვენ შეგიძლიათ გამოიყენოთ `await` ფაილის ზედა დონეზე, თუმცა ამისთვის საჭიროა, რომ `tsconfig.json`-ში `module` პარამეტრს ეყენოს თანამედროვე მნიშვნელობა (`es2022`, `esnext` და ა.შ.)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#top-level-await",
        docLabel: "Top-level await — Release Notes"
    },
    {
        id: 234,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какой тип получит переменная 'data', если в Promise.race передан массив промисов разных типов?",
            en: "What type resolution is derived for the 'data' variable when executing a competitive Promise.race containing diverse types?",
            ka: "რა ტიპს მიიღებს 'data' ცვლადი, თუ Promise.race-ში გადაცემულია სხვადასხვა ტიპის პრომისების მასივი?"
        },
        code: `<span class="kw">const</span> pStr = <span class="type">Promise</span>.<span class="prop">resolve</span>(<span class="str">"hello"</span>);
<span class="kw">const</span> pNum = <span class="type">Promise</span>.<span class="prop">resolve</span>(<span class="num">123</span>);
<span class="kw">const</span> data = <span class="kw">await</span> <span class="type">Promise</span>.<span class="prop">race</span>([pStr, pNum]);`,
        options: [
            { ru: "string & number (never)", en: "string & number (never)", ka: "string & number (never)" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку `Promise.race` возвращает результат того промиса, который выполнится самым первым, компилятор не может знать заранее в рантайме, кто победит в гонке. Поэтому TypeScript объединяет типы всех переданных промисов через Union (`string | number`).",
            en: "Because `Promise.race` yields the evaluation of whichever promise settles first, the compiler cannot predict the runtime winner. TypeScript builds a Union type (`string | number`) encompassing all possible outcomes.",
            ka: "ვინაიდან `Promise.race` აბრუნებს იმ პრომისის შედეგს, რომელიც ყველაზე პირველი შესრულდება, კომპილატორმა წინასწარ არ იცის ვინ გაიმარჯვებს რბოლაში. ამიტომ TS აერთიანებს ყველა გადაცემული პრომისის ტიპს Union-ში (`string | number`)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
        docLabel: "Union Types — Handbook"
    },
    {
        id: 235,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "К какому поведению приведет отсутствие ключевого слова await перед вызовом асинхронной функции внутри другой функции, если возвращаемый тип внешней функции описан как Promise<void>?",
            en: "What happens if you invoke an async task inside another function but omit the await keyword, while the parent returns Promise<void>?",
            ka: "რა ქცევას გამოიწვევს await ქივორდის გამოტოვება ასინქრონული ფუნქციის გამოძახებისას სხვა ფუნქციის შიგნით, თუ გარე ფუნქციის ტიპი არის Promise<void>?"
        },
        code: `<span class="kw">async function</span> <span class="fn">save</span>(): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt; {
    <span class="fn">sendAnalytics</span>(); <span class="comment">// sendAnalytics тоже асинхронная</span>
}`,
        options: [
            { ru: "TypeScript выдаст ошибку компиляции о пропущенном await", en: "TypeScript throws a compile error demanding a mandatory await prefix", ka: "TypeScript გამოიტანს კომპილაციის შეცდომას გამოტოვებული await-ის გამო" },
            { ru: "Функция sendAnalytics запустится, но выполнение save() пойдет дальше, не дожидаясь завершения sendAnalytics (пожар и забыл / fire-and-forget)", en: "The sendAnalytics task fires, but save() exits immediately without waiting for its resolution (fire-and-forget pattern)", ka: "sendAnalytics ფუნქცია გაეშვება, თუმცა save() გააგრძელებს შესრულებას sendAnalytics-ის დასრულების დალოდების გარეშე (fire-and-forget)" },
            { ru: "Код вызовет ошибку во время выполнения (Runtime Error)", en: "The statement crashes with a severe runtime exception", ka: "კოდი გამოიწვევს შეცდომას შესრულებისას (Runtime Error)" },
            { ru: "sendAnalytics вообще не начнет выполняться", en: "The sendAnalytics operation is aborted and never enters execution", ka: "sendAnalytics საერთოდ არ დაიწყებს შესრულებას" }
        ],
        correct: 1,
        explanation: {
            ru: "Если вы не ставите `await`, выполнение кода продолжается синхронно, а промис, возвращенный `sendAnalytics`, уходит в фоновый режим. Это легальный паттерн 'fire-and-forget'. TypeScript не считает это ошибкой, если вам не важен результат работы функции. Однако, если за запуск бесхозных промисов отвечает линтер, он может предупредить вас через правило `no-floating-promises`.",
            en: "Omitting `await` triggers 'fire-and-forget' behavior: the code triggers the promise and steps onward immediately. While valid in JS/TS syntax, it can lead to unhandled rejections unless tracked by static linting rules like `no-floating-promises`.",
            ka: "თუ არ წერთ `await`-ს, კოდის შესრულება გრძელდება სინქრონულად, ხოლო `sendAnalytics`- ის მიერ დაბრუნებული პრომისი გადადის ფონურ რეჟიმში (fire-and-forget). TS ამას შეცდომად არ მიიჩნევს, თუმცა ლინტერმა შეიძლება გაგაფრთხილოთ `no-floating-promises` წესით."
        },
        docLink: "https://typescript-eslint.io/rules/no-floating-promises/",
        docLabel: "no-floating-promises — TSLint/ESLint Rules"
    },
    {
        id: 236,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Как правильно типизировать аргумент функции, которая должна принимать исключительно нативный объект Promise, разрешающийся числом?",
            en: "How do you enforce a function argument to strictly accept a native Promise instance that resolves to a number?",
            ka: "როგორ უნდა დავატიპიზოთ სწორად ფუნქციის არგუმენტი, რომელმაც უნდა მიიღოს მხოლოდ ნატივი Promise ობიექტი, რომელიც რიცხვით სრულდება?"
        },
        code: `<span class="kw">function</span> <span class="fn">processPromise</span>(task: <span class="type">___________</span>) {}`,
        options: [
            { ru: "async number", en: "async number", ka: "async number" },
            { ru: "Promise<number>", en: "Promise<number>", ka: "Promise<number>" },
            { ru: "Awaited<number>", en: "Awaited<number>", ka: "Awaited<number>" },
            { ru: "() => number", en: "() => number", ka: "() => number" }
        ],
        correct: 1,
        explanation: {
            ru: "Для типизации параметров, ожидающих асинвекторы, используется стандартный встроенный обобщенный класс `Promise<T>`. Обозначение `task: Promise<number>` гарантирует, что передать туда можно только обещание, результатом выполнения которого станет число.",
            en: "To restrict a variable or argument to a promise-only contract, use the built-in generic identifier `Promise<T>`. Passing any primitive or alternative signature directly will fail type-checking.",
            ka: "პარამეტრების დასატიპიზებლად, რომლებიც ელიან ასინქრონულ ობიექტს, გამოიყენება ჩაშენებული კლასი `Promise<T>`. ჩანაწერი `task: Promise<number>` უზრუნველყოფს, რომ ფუნქციას გადაეცეს მხოლოდ პრომისი, რომლის შედეგიც იქნება რიცხვი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
        docLabel: "Generics and Promises — Handbook"
    },
    {
        id: 237,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какое ключевое преимущество дает использование служебного типа 'PromiseSettledResult<T>' по сравнению с обычным 'Promise.all' при обработке массива асинхронных операций?",
            en: "What advantage does Promise.allSettled and its PromiseSettledResult type provide over a standard Promise.all execution array?",
            ka: "რა მთავარ უპირატესობას გვაძლევს 'PromiseSettledResult<T>' სერვისული ტიპის გამოყენება ჩვეულებრივ 'Promise.all'-თან შედარებით ასინქრონული ოპერაციების მასივის დამუშავებისას?"
        },
        code: `<span class="kw">const</span> outputs = <span class="kw">await</span> <span class="type">Promise</span>.<span class="prop">allSettled</span>([p1, p2]);
<span class="comment">// outputs имеет тип PromiseSettledResult&lt;T&gt;[]</span>`,
        options: [
            { ru: "Он заставляет код выполняться в два раза быстрее", en: "It doubles runtime thread processing speeds", ka: "ის აიძულებს კოდს ორჯერ უფრო სწრაფად შესრულდეს" },
            { ru: "Он возвращает массив объектов, детально описывающих статус каждого промиса (fulfilled или rejected), позволяя безопасно обрабатывать ошибки без падения всей цепочки", en: "It returns an array of discriminator objects explicitly describing each outcome status (fulfilled or rejected), allowing partial successes to be handled gracefully", ka: "ის აბრუნებს ობიექტების მასივს, რომლებიც დეტალურად აღწერენ თითოეული პრომისის სტატუსს (fulfilled ან rejected), რაც საშუალებას იძლევа შეცდომები უსაფრთხოდ დამუშავდეს მთელი ჯაჭვის გაფუჭების გარეშე" },
            { ru: "Он преобразует все ошибки в тип void", en: "It automatically silences exceptions by mapping them to void values", ka: "ის ყველა შეცდომას გარდაქმნის void ტიპში" },
            { ru: "Этот тип запрещает использовать ключевое слово catch", en: "This metadata footprint explicitly locks developer use of catch expressions", ka: "ეს ტიპი კრძალავს catch საკვანძო სიტყვის გამოყენებას" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от `Promise.all`, который аварийно завершается при первой же ошибке (short-circuit), `Promise.allSettled` дожидается завершения всех задач. Тип `PromiseSettledResult` представляет собой Discriminated Union объектов со статусами `\"fulfilled\"` или `\"rejected\"`. Это дает возможность детально проверить, какие задачи завершились успехом, а какие выдали ошибку.",
            en: "`Promise.all` rejects immediately if any task fails. `Promise.allSettled` collects all settlements. Its derived array items are typed as a discriminated union (`PromiseSettledResult`), enabling safe branching check filters via `.status === \"fulfilled\"`.",
            ka: "`Promise.all`-სგან განსხვავებით, რომელიც წყდება პირველივე შეცდომისას, `Promise.allSettled` ელოდება ყველა დავალების დასრულებას. `PromiseSettledResult` ტიპი წარმოადგენს ობიექტების გაერთიანებას (Discriminated Union) სტატუსებით `\"fulfilled\"` ან `\"rejected\"`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html",
        docLabel: "Promise.allSettled Typings — Release Notes"
    },
    {
        id: 238,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Каким типом TypeScript инициализирует возвращаемое значение метода, если в коде используется конструкция 'await' внутри функции, но сама функция забыла вернуть значение через return?",
            en: "What implicit Promise inner type is assigned to an async function that performs awaits but lacks a return statement?",
            ka: "რა ტიპით დააინიციალიზებს TypeScript ფუნქციის დაბრუნების მნიშვნელობას, თუ კოდში გამოიყენება 'await' ფუნქციის შიგნით, თუმცა თავად ფუნქციას არ აქვს return?"
        },
        code: `<span class="kw">async function</span> <span class="fn">logger</span>() {
    <span class="kw">await</span> <span class="type">Promise</span>.<span class="prop">resolve</span>();
}`,
        options: [
            { ru: "Promise<any>", en: "Promise<any>", ka: "Promise<any>" },
            { ru: "Promise<void>", en: "Promise<void>", ka: "Promise<void>" },
            { ru: "Promise<undefined>", en: "Promise<undefined>", ka: "Promise<undefined>" },
            { ru: "void", en: "void", ka: "void" }
        ],
        correct: 1,
        explanation: {
            ru: "Если в `async` функции отсутствуют операторы `return`, возвращающих конкретные данные, TypeScript автоматически делает вывод, что функция ничего не возвращает, и присваивает ей тип `Promise<void>`, соответствующий правилам рантайма, где выполнение завершается возвратом значения `undefined`.",
            en: "When an async function runs through its body execution path without encountering an explicit return statement, TypeScript infers its outcome contract type as `Promise<void>`.",
            ka: "თუ `async` ფუნქციაში არ არის მონაცემების დამაბრუნებელი `return` ოპერატორი, TypeScript ავტომატურად ასკვნის, რომ ფუნქცია არაფერს აბრუნებს და ანიჭებს მას `Promise<void>` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#void",
        docLabel: "Return type void — Handbook"
    },
    {
        id: 239,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Какая ошибка возникнет при попытке скомпилировать данный код с использованием асинхронного метода в обычном callback-обработчике массива?",
            en: "What typing issue or logic disconnect occurs when passing an async arrow function into a synchronous .forEach array iterator?",
            ka: "რა შეცდომა მოხდება კოდის კომპილაციისას, როდესაც ვიყენებთ ასინქრონულ მეთოდს მასივის ჩვეულ callback-დამამუშავებელში?"
        },
        code: `<span class="kw">const</span> ids = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
ids.<span class="prop">forEach</span>(<span class="kw">async</span> (id) => {
    <span class="kw">await</span> <span class="fn">saveId</span>(id);
});
<span class="kw">console</span>.<span class="prop">log</span>(<span class="str">"Done!"</span>);`,
        options: [
            { ru: "Ошибка компиляции: forEach запрещает принимать async функции", en: "Compile error: forEach is explicitly configured to block async function arguments", ka: "კომპილაციის შეცდომა: forEach კრძალავს async ფუნქციების მიღებას" },
            { ru: "Ошибки типов нет, но логически код выполнится не так, как ожидает новичок: 'Done!' выведется в консоль РАНЬШЕ, чем завершатся все асинхронные вызовы saveId", en: "There is no type error, but logically it behaves unexpectedly: 'Done!' prints to the console BEFORE the async saveId operations finish executing", ka: "ტიპების შეცდომა არ არის, თუმცა ლოგიკურად კოდი შესრულდება არა ისე, როგორც მოელიან: 'Done!' დაიბეჭდება კონსოლში იმაზე უფრo ადრე, ვიდრე დასრულდება saveId-ის ასინქრონული გამოძახებები" },
            { ru: "Код вызовет критический сбой переполнения стека (Stack Overflow)", en: "The code execution engine throws an immediate runtime Stack Overflow exception", ka: "კოდი გამოიწვევს სტეკის გადავსების კრიტიკულ შეცდომას (Stack Overflow)" },
            { ru: "Цикл автоматически превратится в бесконечный", en: "The runtime loop intercepts the promise and converts into an infinite block state", ka: "ციკლი ავტომატურად გადაიქცევა უსასრულოდ" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript этот код абсолютно валиден с точки зрения типов, так как `forEach` ожидает коллбэк, возвращающий `void`, а `async () => {}` возвращает `Promise<void>`, что совместимо с `void`. Однако это логическая ловушка: метод `forEach` не умеет ожидать (await) разрешения промисов. Он запустит их параллельно и тут же выполнит `console.log(\"Done!\")`. Для последовательного ожидания нужно использовать обычный цикл `for...of`.",
            en: "From a type checking perspective, passing an async function to `.forEach` is allowed because its return contract (`Promise<void>`) satisfies the expected `void` parameter constraint. Logically, however, `.forEach` is synchronous and won't await each item; 'Done!' will print before saving is complete.",
            ka: "TypeScript-ში ეს კოდი ტიპების მხრივ სრულიად ვალიდურია, რადგან `forEach` ელის callback-ს, რომელიც აბრუნებს `void`-ს, ხოლო `async () => {}` აბრუნებს `Promise<void>`-ს. თუმცა, `forEach`-მა არ იცის პრომისების დალოდება. ის გაუშვებს მათ პარალელურად და მაშინვე დაბეჭდავს `Done!`-ს."
        },
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description",
        docLabel: "Array.prototype.forEach and Async — MDN"
    },
    {
        id: 240,
        category: { ru: "Async / Await", en: "Async / Await", ka: "Async / Await" },
        tag: "async",
        question: {
            ru: "Как ведет себя оператор await, если переданный ему Promise переходит в состояние отклонения (Rejected)?",
            en: "How does the await operator react when a targeted Promise transitions into a Rejected state?",
            ka: "როგორ იქცევა await ოპერატორი, თუ მისთვის გადაცემული Promise გადადის უარყოფის (Rejected) სტატუსში?"
        },
        code: `<span class="kw">const</span> faultyPromise = <span class="type">Promise</span>.<span class="prop">reject</span>(<span class="str">"Error!"</span>);
<span class="kw">const</span> data = <span class="kw">await</span> faultyPromise;`,
        options: [
            { ru: "Переменная data примет значение null", en: "The data variable is initialized with a safe null primitive value", ka: "data ცვლადი მიიღებს null მნიშვნელობას" },
            { ru: "Оператор await выбрасывает (throws) причину отклонения как обычное исключение, которое нужно перехватывать через блок try/catch", en: "The await operator throws the rejection reason as a standard exception, requiring a try/catch wrapper block to capture it", ka: "await ოპერატორი ისვრის (throws) უარყოფის მიზეზს როგორც ჩვეულებრივ გამონაკლისს, რომლის დაჭერაც საჭიროა try/catch ბლოკით" },
            { ru: "Программа просто молча останавливает поток выполнения без ошибок", en: "The runtime engine silences execution entirely without logging warnings", ka: "პროგრამა უბრალოდ ჩუმად აჩერებს შესრულების ნაკადს შეცდომების გარეშე" },
            { ru: "data примет тип never", en: "The type engine forces the data variable profile into never", ka: "data მიიღებს never ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "Синтаксис `await` устроен так, что отклоненный (rejected) промис проецируется на стандартный механизм исключений. Рантайм прерывает выполнение текущей строки и выбрасывает ошибку наверх. Чтобы приложение не упало с ошибкой 'Unhandled Promise Rejection', такой вызов оборачивают в конструкцию `try { await ... } catch(e) {}`.",
            en: "An awaited rejected promise throws its rejection reason exactly like a synchronous native exception. To safely contain this error state and prevent unhandled crashes, you must enclose the await statement inside a standard `try/catch` runtime wrapper.",
            ka: "`await` სინტაქსი ისეა მოწყობილი, რომ უარყოფილი (rejected) პრომისი აისახება გამონაკლისების სტანდაртულ მექანიზმზე. ის ისვრის შეცდომას, რომლის დასაჭერადაც საჭიროა კოდის მოქცევა `try { await ... } catch(e) {}` კონსტრუქციაში."
        },
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#description",
        docLabel: "Await Error Handling — MDN"
    },

    // 13. TEMPLATE LITERAL TYPES
    {
        id: 241,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какие строковые комбинации сформирует данный шаблонный литеральный тип?",
            en: "Which configuration of string literal combinations will this template type generate?",
            ka: "რა სტრიქონულ კომბინაციებს შექმნის მოცემული შაბლონური ლიტერალური ტიპი (Template Literal Type)?"
        },
        code: `<span class="kw">type</span> <span class="type">Direction</span> = <span class="str">'top'</span> | <span class="str">'bottom'</span>;
<span class="kw">type</span> <span class="type">Margin</span> = <span class="str">&#96;margin-\${<span class="type">Direction</span>}&#96;</span>;`,
        options: [
            { ru: "'margin-top' | 'margin-bottom'", en: "'margin-top' | 'margin-bottom'", ka: "'margin-top' | 'margin-bottom'" },
            { ru: "Любая строка, начинающаяся с 'margin-'", en: "Any arbitrary string that begins with a 'margin-' prefix", ka: "ნებისმიერი სტრიქონი, რომელიც იწყება 'margin-' პრეფიქსით" },
            { ru: "Массив строк ['margin-top', 'margin-bottom']", en: "A standard string array type matching ['margin-top', 'margin-bottom']", ka: "სტრიქონების მასივი ['margin-top', 'margin-bottom']" },
            { ru: "Тип данных string", en: "A generic placeholder string signature", ka: "ჩვეულებრივი ზოგადი string ტიპი" },
        ],
        correct: 0,
        explanation: {
            ru: "Template Literal Types позволяют использовать синтаксис шаблонных строк из JavaScript прямо на уровне типов. Когда вы передаёте Union тип внутрь интерполяции `${Direction}`, TypeScript автоматически перемножает шаблоны и генерирует все возможные комбинации строк. Результатом станет новое строгое объединение литералов: 'margin-top' | 'margin-bottom'. Это мощное средство для типизации CSS-политик, роутинга или дизайн-систем.",
            en: "Template Literal Types import JS string interpolation capabilities right into compiler types. Injecting a union reference inside the type declaration `${Direction}` directs the engine to perform a combinatorics evaluation. It maps every item of the union against the base string, outputting a precise combined literal union: 'margin-top' | 'margin-bottom'.",
            ka: "Template Literal ტიპები საშუალებას გვაძლევს გამოვიყენოთ შაბლონური სტრიქონების სინტაქსი პირდაპირ ტიპების დონეზე. როდესაც Union ტიპს გადასცემთ ინტერპოლაციაში `${Direction}`, TS ავტომატურად აგენერირებს სტრიქონების ყველა შესაძლო კომბინაციას. შედეგი იქნება: 'margin-top' | 'margin-bottom'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literal Types — Handbook"
    },
    {
        id: 242,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Сколько всего строковых литералов будет сгенерировано в Union-типе GridPos в результате декартова произведения двух объединений?",
            en: "How many distinct string literal permutations are generated within the GridPos union type through cross-multiplication?",
            ka: "სულ რამდენი სტრიქონული ლიტერალი შეიქმნება GridPos გაერთიანებაში (Union) ორი ჯგუფის გადაკვეთის შედეგად?"
        },
        code: `<span class="kw">type</span> <span class="type">Col</span> = <span class="str">'A'</span> | <span class="str">'B'</span> | <span class="str">'C'</span>;
<span class="kw">type</span> <span class="type">Row</span> = <span class="str">'1'</span> | <span class="str">'2'</span>;
<span class="kw">type</span> <span class="type">GridPos</span> = <span class="str">&#96;\${<span class="type">Col</span>}\${<span class="type">Row</span>}&#96;</span>;`,
        options: [
            { ru: "3 литерала ('A1' | 'B2' | 'C')", en: "3 literals ('A1' | 'B2' | 'C')", ka: "3 ლიტერალი ('A1' | 'B2' | 'C')" },
            { ru: "5 литералов ('A' | 'B' | 'C' | '1' | '2')", en: "5 literals ('A' | 'B' | 'C' | '1' | '2')", ka: "5 ლიტერალი ('A' | 'B' | 'C' | '1' | '2')" },
            { ru: "6 литералов ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')", en: "6 literals ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')", ka: "6 ლიტერალი ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')" },
            { ru: "Бесконечное множество строк типа string", en: "An infinite set of generic string values", ka: "string ტიპის უსასრულო რაოდენობა" }
        ],
        correct: 2,
        explanation: {
            ru: "Когда в одном шаблонном типе используются сразу несколько Union-компонентов, TypeScript производит их полное декартово произведение (cross-multiplication). Каждый элемент из `Col` (3 шт.) соединяется с каждым элементом из `Row` (2 шт.), что дает ровно 3 * 2 = 6 строковых литералов.",
            en: "When multiple union placeholders are distributed side-by-side inside a single template literal string type, TypeScript automatically resolves them as a Cartesian product, producing exactly 3 * 2 = 6 strict string variations.",
            ka: "როდესაც ერთ შაბლონურ ტიპში ერთდროულად გამოიყენება რამდენიმე Union კომპონენტი, TypeScript აწარმოებს მათ სრულ დეკარტულ ნამრავლს. `Col`- ის თითოეული ელემენტი (3 ცალი) უკავშირდება `Row`- ის თითოეულ ელემენტს (2 ცალი), რაც გვაძლევს ზუსტად 3 * 2 = 6 სტრიქონულ ლიტერალს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Union Substitution — Handbook"
    },
    {
        id: 243,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой встроенный служебный тип нужно применить к переменной внутри шаблона, чтобы гарантировать, что первая буква строки станет заглавной?",
            en: "Which intrinsic string manipulation utility type transforms the initial character of an interpolated literal token to uppercase?",
            ka: "რომელი ჩაშენებული სერვისული ტიპი უნდა გამოვიყენოთ შაბлონში, რათა სტრიქონის პირველი ასო გახდეს მაღალი რეგისტრის (დიდი ასო)?"
        },
        code: `<span class="kw">type</span> <span class="type">Action</span> = <span class="str">'create'</span> | <span class="str">'update'</span>;
<span class="kw">type</span> <span class="type">GetterName</span> = <span class="str">&#96;on\${___________&lt;<span class="type">Action</span>&gt;}&#96;</span>;
<span class="comment">// Трябуемый результат: 'onCreate' | 'onUpdate'</span>`,
        options: [
            { ru: "Uppercase", en: "Uppercase", ka: "Uppercase" },
            { ru: "Capitalize", en: "Capitalize", ka: "Capitalize" },
            { ru: "ToUpperCase", en: "ToUpperCase", ka: "ToUpperCase" },
            { ru: "FirstUpper", en: "FirstUpper", ka: "FirstUpper" }
        ],
        correct: 1,
        explanation: {
            ru: "Для трансформации строк на уровне типов TypeScript поставляет специальные intrinsic-типы. Тип `Capitalize<T>` делает первую букву строки заглавной (в отличие от `Uppercase<T>`, который переводит в верхний регистр абсолютно все символы строки). Результатом станет `'onCreate' | 'onUpdate'`. ",
            en: "TypeScript includes specific intrinsic types to alter characters during compilation. `Capitalize<T>` modifies only the first character of the targeted string literal union, while `Uppercase<T>` forces every character to be uppercase.",
            ka: "სტრიქონების ტრანსფორმაციისთვის ტიპების დონეზე TS გვთავაზობს სპეციალურ intrinsic ტიპებს. `Capitalize<T>` დიდ ასოდ აქცევს სტრიქონის მხოლოდ პირველ ასოს (განსხვავებით `Uppercase<T>`-სგან, რომელიც ყველა ასოს ადიდებს). შედეგი იქნება `'onCreate' | 'onUpdate'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype",
        docLabel: "Capitalize — Utility Types"
    },
    {
        id: 244,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип будет выведен для типа 'AllCaps' при обработке объединения литералов утилитой Uppercase?",
            en: "What final literal union is yielded when passing mixed-case string entities through the Uppercase intrinsic compiler utility?",
            ka: "რა ტიპი მიენიჭება 'AllCaps'-ს სხვადასხვა რეგისტრის მქონე ლიტერალების გაერთიანებაზე Uppercase სერვისული ტიპის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Status</span> = <span class="str">'init'</span> | <span class="str">'pending_Ok'</span>;
<span class="kw">type</span> <span class="type">AllCaps</span> = <span class="type">Uppercase</span>&lt;<span class="type">Status</span>&gt;;`,
        options: [
            { ru: "'INIT' | 'PENDING_OK'", en: "'INIT' | 'PENDING_OK'", ka: "'INIT' | 'PENDING_OK'" },
            { ru: "'Init' | 'Pending_ok'", en: "'Init' | 'Pending_ok'", ka: "'Init' | 'Pending_ok'" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Служебный тип `Uppercase<T>` полностью трансформирует все символы переданных строковых литералов в верхний регистр. Строка `'init'` превращается в `'INIT'`, а `'pending_Ok'` — в `'PENDING_OK'`, сохраняя структуру змеиного регистра или дефисов.",
            en: "The `Uppercase<T>` intrinsic helper converts every lowercase alphabetical character in the union into its uppercase equivalent. Thus, `'pending_Ok'` safely matches against `'PENDING_OK'`.",
            ka: "`Uppercase<T>` სერვისული ტიპი სრულად გარდაქმნის გადაცემული სტრიქონული ლიტერალების ყველა სიმბოლოს ზედა რეგისტრში (დიდ ასოებად). სტრიქონი `'init'` ხდება `'INIT'`, ხოლო `'pending_Ok'` — `'PENDING_OK'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype",
        docLabel: "Uppercase — Utility Types"
    },
    {
        id: 245,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какое поведение продемонстрирует TypeScript, если передать тип 'boolean' внутрь интерполяции шаблонного литерала?",
            en: "How does the TypeScript engine handle the primitive 'boolean' type token when embedded directly inside a template literal layout?",
            ka: "როგორ მოიქცევა TypeScript, თუ შაბლონური ლიტერალის ინტერპოლაციაში გადავცემთ 'boolean' ტიპს?"
        },
        code: `<span class="kw">type</span> <span class="type">IsActive</span> = <span class="str">&#96;visible-\${<span class="type">boolean</span>}&#96;</span>;`,
        options: [
            { ru: "Вызовет ошибку: разрешено передавать только string-литералы", en: "Throws a compiler error: template blocks accept string literal tokens only", ka: "გამოიწვევს შეცდომას: ნებადართულია მხოლოდ string ლიტერალების გადაცემა" },
            { ru: "Тип IsActive превратится в 'visible-true' | 'visible-false'", en: "The IsActive type expands into the concrete literal union 'visible-true' | 'visible-false'", ka: "IsActive ტიპი გარდაიქმნება 'visible-true' | 'visible-false' გაერთიანებად" },
            { ru: "IsActive примет вид 'visible-boolean'", en: "IsActive resolves as a static 'visible-boolean' token mapping", ka: "IsActive მიიღებს 'visible-boolean' სახეს" },
            { ru: "Тип деградирует до общего string", en: "The definition collapses down to a basic generic string fallback", ka: "ტიპი დავა ჩვეულებრივ ზოგად string ტიპამდე" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку базовый примитив `boolean` на самом деле представляет собой не что иное, как встроенный Union-тип `true | false`, TypeScript обрабатывает его точно так же, как и обычные строковые объединения. Выражение распаковывается в строковые константы `'visible-true' | 'visible-false'`.",
            en: "Because the primitive `boolean` type is internally structured as a union of `true | false`, TypeScript expands it identically during template parsing. Interpolating it yields a literal distribution of `'visible-true' | 'visible-false'`.",
            ka: "ვინაიდან საბაზისო პრიმიტივი `boolean` სინამდვილეში სხვა არაფერია, თუ არა ჩაშენებული Union ტიპი `true | false`, TypeScript მას ამუშავებს ზუსტად ისე, როგორც სხვა გაერთიანებებს. გამოსახულება გაიშლება ორ ლიტერალად: `'visible-true' | 'visible-false'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literals with Primitives — Handbook"
    },
    {
        id: 246,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Что произойдет, если попытаться присвоить строку, не соответствующую паттерну, в переменную, типизированную по шаблону с числовым примитивом?",
            en: "What compiler response occurs if you assign a non-numeric text string to a variable guarded by a numeric template literal pattern?",
            ka: "რა მოხდება, თუ ვცდით პატერნთან შეუსაბამო სტრიქონის მინიჭებას ცვლადზე, რომელიც ტიპიზებულია ციფრული პრიმიტივის მქონე შაბლონით?"
        },
        code: `<span class="kw">type</span> <span class="type">IdPattern</span> = <span class="str">&#96;id-\${<span class="type">number</span>}&#96;</span>;
<span class="kw">const</span> userId: <span class="type">IdPattern</span> = <span class="str">"id-abc"</span>;`,
        options: [
            { ru: "Код успешно скомпилируется, так как 'number' внутри шаблона разрешает любые символы", en: "Compiles smoothly; the number token acts as an open wildcard accepting any characters", ka: "კოდი წარმატებით დაკომპილირდება, რადგან 'number' შაბლონში ნებისმიერ სიმბოლოს უშვებს" },
            { ru: "Ошибка компиляции: Type '\"id-abc\"' is not assignable to type 'id-\${number}'", en: "Compile error: Type '\"id-abc\"' is not assignable to type 'id-\${number}'", ka: "კომპილაციის შეცდომა: Type '\"id-abc\"' is not assignable to type 'id-\${number}'" },
            { ru: "userId автоматически примет значение 'id-NaN' во время выполнения", en: "userId alters at runtime to hold an 'id-NaN' string state instead", ka: "userId ავტომატურად მიიღებს მნიშვნელობას 'id-NaN' შესრულებისას" },
            { ru: "Ошибка возникнет только в том случае, если строка содержит пробелы", en: "An error will only register if the assigned layout includes spacing characters", ka: "შეცდომა მოხდება მხოლოდ იმ შემთხვევაში, თუ სტრიქონი შეიცავს ჰარებს" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript умеет валидировать бесконечные паттерны строк через примитивы вроде `${number}`. Если строка начинается с \"id-\", но далее идет не число, а текст \"abc\", компилятор пресечет это на этапе сборки, защищая программу от некорректных форматов данных.",
            en: "TypeScript tracks endless string patterns by compiling primitives like `${number}` as open validation expressions. Assigning \"id-abc\" breaks this pattern requirement, throwing a compilation type mismatch error.",
            ka: "TypeScript-ს შეუძლია სტრიქონების უსასრულო პატერნების ვალიდაცია `${number}` პრიმიტივის საშუალებით. თუ სტრიქონი იწყება \"id-\"-ით, მაგრამ შემდეგ ციფრის ნაცვლად არის ტექსტი \"abc\", კომპილატორი დაბლოკავს ამას აწყობის ეტაპზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#pattern-template-string-types",
        docLabel: "Pattern Template Literal Types — Release Notes"
    },
    {
        id: 247,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип будет извлечен для 'Param' с помощью условного типа и оператора infer в данном примере парсинга динамического роута?",
            en: "What target substring is captured for the 'Param' alias type by utilizing an infer query inside a conditional template check?",
            ka: "რა ტიპი აიგება 'Param'-სთვის პირობითი ტიპისა (Conditional Type) და infer ოპერატორის საშუალებით დინამიური როუტის პარსინგის ამ მაგალითში?"
        },
        code: `<span class="kw">type</span> <span class="type">ExtractParam</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="str">&#96;/user/:\${infer <span class="type">P</span>}&#96;</span> ? <span class="type">P</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Param</span> = <span class="type">ExtractParam</span>&lt;<span class="str">"/user/101"</span>&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "101 (строковый литерал '101')", en: "101 (the strict string literal '101')", ka: "101 (სტრიქონული ლიტერალი '101')" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "В сочетании с условными типами (`extends`), оператор `infer` внутри шаблонных литералов работает как регулярное выражение на уровне компиляции. Он сопоставляет строку `\"/user/101\"` с шаблоном `\"/user/:\"` и захватывает оставшуюся часть строки. Поскольку это строковый парсинг, результатом будет точный строковый литерал `'101'`.",
            en: "When paired with conditional structures, the `infer` keyword inside template literal blocks mirrors regex compilation logic. It isolates matching text zones, pulling the exact remaining value as the strict literal string type `'101'`.",
            ka: "პირობით ტიპებთან (`extends`) კომბინაციაში, `infer` ოპერატორი შაბლონურ ლიტერალებში მუშაობს როგორც რეგულარული გამოსახულება კომპილაციის დონეზე. ის ადარებს სტრიქონს `\"/user/101\"` შაბლონს და იჭერს დარჩენილ ნაწილს. შედეგი იქნება სტრიქონული ლიტერალი `'101'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#inference-with-conditional-types",
        docLabel: "Inference with Template Literals — Handbook"
    },
    {
        id: 248,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Каким синтаксисом можно автоматически переназначить (перемапить) ключи объекта в новый строковый формат при объявлении Mapped Type?",
            en: "Which syntax pattern is required to remap object keys into a fresh string format using a Mapped Type iteration?",
            ka: "რა სინტაქსით შეიძლება ობიექტის გასაღებების ავტომატურად გადაკეთება (перемапить) ახალ სტრიქონულ ფორმატში Mapped Type-ის გამოცხადებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Getters</span>&lt;<span class="type">T</span>&gt; = {
    [<span class="type">K</span> <span class="kw">in keyof</span> <span class="type">T</span> <span class="kw">as</span> <span class="str">&#96;get\${<span class="type">Capitalize</span>&lt;<span class="type">K</span> & <span class="type">string</span>&gt;}&#96;</span>]: () => <span class="type">T</span>[<span class="type">K</span>]
};`,
        options: [
            { ru: "Использовать ключевое слово 'as' совместно с шаблонным литералом", en: "Deploying the 'as' remapping keyword combined alongside a template string literal structure", ka: "საკვანძო სიტყვა 'as'-ის გამოყენება შაბლონურ ლიტერალთან ერთად" },
            { ru: "Использовать двоеточие ':' вместо 'in'", en: "Swapping out the 'in' token modifier to deploy a standard colon ':' divider instead", ka: "ორწერტილის ':' გამოყენება 'in'-ის ნაცვლად" },
            { ru: "Ключи объекта невозможно переименовать с помощью типов", en: "Object key remapping is strictly impossible to execute within the type system scope", ka: "ობიექტის გასაღებების გადარქმევა ტიპების საშუალებით შეუძლებელია" },
            { ru: "Через конструкцию K extends string", en: "By applying a standard structural 'K extends string' restriction check", ka: "K extends string კონსტრუქციის საშუალებით" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript, начиная с версии 4.1, доступно переопределение ключей (Key Remapping) в отображаемых типах (Mapped Types) с помощью оператора `as`. Внутри шаблона мы берем старый ключ `K`, принудительно приводим его к строке через пересечение `& string` (так как ключи могут быть еще символами или числами) и создаем новое имя.",
            en: "Key Remapping via the `as` clause inside Mapped Types unlocks dynamic object restructuring. It re-evaluates object property names through string generation templates, permitting developers to automatically append prefixes or suffixes.",
            ka: "TypeScript-ში შესაძლებელია გასაღებების გადარქმევა (Key Remapping) Mapped Types-ში `as` ოპერატორის დახმარებით. შაბლონის შიგნით ჩვენ ვიღებთ ძველ `K` გასაღებს, ვაიძულებთ მას გახდეს სტრიქონი `& string` გადაკვეთით და ვქმნით ახალ სახელს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as",
        docLabel: "Key Remapping via as — Handbook"
    },
    {
        id: 249,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Что произойдет, если в шаблонном литерале использовать пересечение типов (Intersection) вместо объединения (Union)?",
            en: "What happens when you inject an Intersection type instead of a Union type inside a template literal expression?",
            ka: "რა მოხდება, თუ შაბლონურ ლიტერალში გამოვიყენებთ ტიპების გადაკვეთას (Intersection) გაერთიანების (Union) ნაცვლად?"
        },
        code: `<span class="kw">type</span> <span class="type">A</span> = <span class="str">'red'</span> & <span class="str">'blue'</span>;
<span class="kw">type</span> <span class="type">Color</span> = <span class="str">&#96;color-\${<span class="type">A</span>}&#96;</span>;`,
        options: [
            { ru: "Тип Color примет вид 'color-red-blue'", en: "The Color type expands to match the joint string literal 'color-red-blue'", ka: "Color ტიპი მიიღებს 'color-red-blue' სახეს" },
            { ru: "Тип Color превратится в 'color-never'", en: "The Color type evaluates to the exact literal string 'color-never'", ka: "Color ტიპი გადაიქცევა 'color-never' ლიტერალად" },
            { ru: "Тип Color превратится в чистый тип never, так как 'red' & 'blue' дает never", en: "The Color type collapses completely into the pure 'never' type because 'red' & 'blue' evaluates to never", ka: "Color ტიპი გადაიქცევა სუფთა never ტიპად, რადგან 'red' & 'blue' იძლევა never-ს" },
            { ru: "TypeScript выдаст синтаксическую ошибку парсинга амперсанда", en: "The type checker halts with an invalid ampersand syntax token error", ka: "TypeScript გამოიტანს სინტაქსურ შეცდომას ამპერსანდის პარსინგისას" }
        ],
        correct: 2,
        explanation: {
            ru: "Пересечение двух несовпадающих строковых литералов `'red' & 'blue'` физически невозможно, поэтому TypeScript сводит тип `A` к `never`. А при подстановке `never` в любой шаблонный литеральный тип, весь шаблон схлопывается и возвращает чистый тип `never`, сигнализируя о недостижимости кода.",
            en: "Intersecting two separate string literals like `'red' & 'blue'` is a logical contradiction, resolving to `never`. Injecting `never` into any zone of a template literal collapses the entire string definition down to a pure `never` type.",
            ka: "ორი განსხვავებული სტრიქონული ლიტერალის გადაკვეთა `'red' & 'blue'` ფიზიკურად შეუძლებელია, ამიტომ TS ამცირებს `A` ტიპს `never`-მდე. ხოლო შაბლონურ ლიტერალში `never`- ის ჩასმისას, მთელი შაბლონი ქრება და აბრუნებს სუფთა `never` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#intersection-types",
        docLabel: "Intersection Types — Handbook"
    },
    {
        id: 250,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიidები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип будет сгенерирован для 'Event' при интерполяции глобального типа уникального символа (unique symbol)?",
            en: "What compilation result occurs if you attempt to interpolate a 'unique symbol' type token into a template literal string definition?",
            ka: "რა ტიპი შეიქმნება 'Event'-სთვის უნიკალური სიმბოლოს (unique symbol) გლობალური ტიპის ინტერპოლაციისას?"
        },
        code: `<span class="kw">declare const</span> <span class="kw">sym</span>: <span class="kw">unique symbol</span>;
<span class="kw">type</span> <span class="type">Event</span> = <span class="str">&#96;on-\${<span class="kw">typeof</span> <span class="kw">sym</span>}&#96;</span>;`,
        options: [
            { ru: "Код вызовет ошибку компиляции, так как тип 'unique symbol' не может быть сериализован в шаблон строки", en: "An explicit compile error triggers because a 'unique symbol' reference cannot be serialized into a template literal string", ka: "კოდი გამოიწვევს კომპილაციის შეცდომას, რადგან 'unique symbol' ტიპის სერიალიზაცია შაბლონურ სტრიქონში შეუძლებელია" },
            { ru: "on-symbol", en: "on-symbol", ka: "on-symbol" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 0,
        explanation: {
            ru: "В шаблонных литералах типов TypeScript разрешает использовать только те типы, которые можно однозначно преобразовать в текст во время компиляции: `string`, `number`, `boolean`, `bigint`, `null`, `undefined`. Тип `symbol` и `unique symbol` не подлежат текстовой интерполяции на уровне типов, что вызовет синтаксическую ошибку компилятора.",
            en: "Template literal type definitions only support parameters capable of being mapped directly into text strings: `string`, `number`, `boolean`, `bigint`, `null`, and `undefined`. Attempting to interpolate a `symbol` format results in a compiler block.",
            ka: "შაბლონურ ლიტერალებში TypeScript ნებას რთავს მხოლოდ იმ ტიპების გამოყენებას, რომელთა გარდაქმნაც ტექსტად ცალსახად შესაძლებელია: `string`, `number`, `boolean`, `bigint`, `null`, `undefined`. `symbol` ან `unique symbol` ტიპები არ ექვემდებარებიან ტექსტურ ინტერპოლაციას და გამოიწვევენ შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literal Constraints — Handbook"
    },
    {
        id: 251,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой встроенный служебный тип переводит ПЕРВЫЙ символ каждого строкового литерала в нижний регистр, оставляя остальные без изменений?",
            en: "Which intrinsic utility type alters solely the initial character of a string literal to lowercase, keeping subsequent characters untouched?",
            ka: "რომელი ჩაშენებული სერვისული ტიპი გადაიყვანს თითოეული სტრიქონული ლიტერალის მხოლოდ პირველ სიმბოლოს ქვედა რეგისტრში?"
        },
        code: `<span class="kw">type</span> <span class="type">Data</span> = <span class="str">'User'</span> | <span class="str">'ID'</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">Uncapitalize</span>&lt;<span class="type">Data</span>&gt;;
<span class="comment">// Ожидается: 'user' | 'iD'</span>`,
        options: [
            { ru: "Lowercase", en: "Lowercase", ka: "Lowercase" },
            { ru: "Uncapitalize", en: "Uncapitalize", ka: "Uncapitalize" },
            { ru: "ToLowerCaseFirst", en: "ToLowerCaseFirst", ka: "ToLowerCaseFirst" },
            { ru: "DeCapitalize", en: "DeCapitalize", ka: "DeCapitalize" }
        ],
        correct: 1,
        explanation: {
            ru: "Встроенный тип `Uncapitalize<T>` предназначен для де-капитализации строк. Он изменяет только первый символ. Полезно, например, при конвертации классов или фабричных методов в обычные camelCase-свойства объектов.",
            en: "The intrinsic type `Uncapitalize<T>` shifts only the first character of an alphanumeric string literal down to its lowercase equivalent. This is valuable when dynamically translating UpperCamelCase typings into standard camelCase schemas.",
            ka: "ჩაშენებული ტიპი `Uncapitalize<T>` განკუთვნილია სტრიქონების დე-კაპიტალიზაციისთვის. ის ცვლის მხოლოდ პირველ სიმბოლოს. ეს სასარგებლოა, მაგალითად, კლასების ან ქარხნული მეთოდების camelCase თვისებებად კონვერტაციისთვის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#uncapitalizestringtype",
        docLabel: "Uncapitalize — Utility Types"
    },
    {
        id: 252,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип будет выведен для 'Clean' при попытке извлечь подстроку из пустого строкового литерала c помощью паттерна с infer?",
            en: "What type defaults to the target alias variable when the infer engine processes an empty string literal input?",
            ka: "რა ტიპი მიენიჭება 'Clean'-ს ცარიელი სტრიქონული ლიტერალიდან infer პატერნის საშუალებით ქვესტრიქონის ამოღების მცდელობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">TrimLeft</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="str">&#96; \${infer <span class="type">R</span>}&#96;</span> ? <span class="type">R</span> : <span class="type">T</span>;
<span class="kw">type</span> <span class="type">Clean</span> = <span class="type">TrimLeft</span>&lt;<span class="str">""</span>&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "Пустая строка (строковый литерал \"\")", en: "An empty string literal type (\"\")", ka: "ცარიელი სტრიქონი (სტრიქონული ლიტერალი \"\")" },
            { ru: "undefined", en: "undefined", ka: "undefined" }
        ],
        correct: 2,
        explanation: {
            ru: "В типе `TrimLeft`, строка проверяется на наличие начального пробела. Пустая строка `\"\"` не содержит пробелов и не удовлетворяет условию `extends \` \${infer R}\``. Следовательно, условный тип переходит в ветку `else` и возвращает исходный тип `T`, то есть саму пустую строку `\"\"`.",
            en: "In the `TrimLeft` evaluator type, the condition tests for a mandatory leading whitespace character. An empty string `\"\"` fails this matching rule, guiding execution down the alternative path to return the unchanged initial `T` signature (`\"\"`).",
            ka: "`TrimLeft` ტიპში სტრიქონი მოწმდება საწყის ჰარზე (space). ცარიელი სტრიქონი `\"\"` არ შეიცავს ჰარებს და ვერ აკმაყოფილებს პირობას `extends \` \${infer R}\``. შესაბამისად, კოდი გადადის `else` შტოში და აბრუნებს საწყის `T` ტიპს, ანუ ცარიელ სტრიქონს `\"\"`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types Evaluation — Handbook"
    },
    {
        id: 253,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "К какому типу приведет интерполяция типа 'bigint' в шаблонном литерале?",
            en: "What structural text pattern is synthesized when a 'bigint' type token is interpolated within a template literal compilation block?",
            ka: "რა ტიპს მივიღებთ შაბლონურ ლიტერალში 'bigint' ტიპის ინტერპოლაციისას?"
        },
        code: `<span class="kw">type</span> <span class="type">BigStr</span> = <span class="str">&#96;val-\${<span class="type">bigint</span>}&#96;</span>;`,
        options: [
            { ru: "Код не скомпилируется, bigint запрещен", en: "Compilation fails; bigint parameters are strictly illegal inside literal tags", ka: "კოდი არ დაკომპილირდება, bigint აკრძალულია" },
            { ru: "Любая валидная строка вида 'val-100', где после дефиса идет последовательность цифр, представляющая большое число", en: "Any valid string following the pattern 'val-100', where the suffix matches an infinite sequence of numeric digits", ka: "ნებისმიერი ვალიდური სტრიქონი სახით 'val-100', სადაც დეფისის შემდეგ არის ციფრების მიმდევრობა, რომელიც დიდ რიცხვს გამოსახავს" },
            { ru: "Строковый литерал 'val-bigint'", en: "The static string literal 'val-bigint'", ka: "სტრიქონული ლიტერალი 'val-bigint'" },
            { ru: "Тип any", en: "An unsafe any type", ka: "any ტიპი" }
        ],
        correct: 1,
        explanation: {
            ru: "Аналогично типу `number`, тип `bigint` поддерживается шаблонными литералами TypeScript начиная с версии 4.4. Он превращается в паттерн-валидатор, проверяющий, что правая часть строки представляет собой строковое представление числовых символов BigInt.",
            en: "Identical to how `number` parameters behave, the `bigint` token type functions as an open-ended pattern validator since TS 4.4. It matches any sequence of numeric text characters representing a BigInt digit allocation.",
            ka: "`number` ტიპის მსგავსად, `bigint` მხარდაჭერილია შაბლონურ ლიტერალებში TS 4.4 ვერსიიდან. ის გარდაიქმნება პატერნ-ვალიდატორად, რომელიც ამოწმებს, რომ სტრიქონის მარჯვენა ნაწილი წარმოადგენს BigInt ციფრების ტექსტურ ჩანაწერს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#pattern-template-string-types",
        docLabel: "Bigint Patterns — Release Notes"
    },
    {
        id: 254,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип данных будет выведен для 'Parsed' при рекурсивном разборе строки с разделителем-запятой?",
            en: "What mapped structure is resolved for 'Parsed' when recursively breaking down a comma-separated string literal type?",
            ka: "რა მონაცემთა ტიპი შეიქმნება 'Parsed'-სთვის მძიმით გამოყოფილი სტრიქონის რეკურსიული პარსინგის დროს?"
        },
        code: `<span class="kw">type</span> <span class="type">Split</span>&lt;<span class="type">S</span> <span class="kw">extends</span> <span class="type">string</span>&gt; = 
    <span class="type">S</span> <span class="kw">extends</span> <span class="str">&#96;\${infer <span class="type">T</span>},\${infer <span class="type">U</span>}&#96;</span> ? [<span class="type">T</span>, ...<span class="type">Split</span>&lt;<span class="type">U</span>&gt;] : [<span class="type">S</span>];
<span class="kw">type</span> <span class="type">Parsed</span> = <span class="type">Split</span>&lt;<span class="str">"a,b,c"</span>&gt;;`,
        options: [
            { ru: "string[]", en: "string[]", ka: "string[]" },
            { ru: "['a', 'b', 'c'] (строгий кортеж литералов)", en: "['a', 'b', 'c'] (a strict ordered tuple of string literal tokens)", ka: "['a', 'b', 'c'] (ლიტერალების ზუსტი კორტეჟი)" },
            { ru: "['a', 'b,c']", en: "['a', 'b,c']", ka: "['a', 'b,c']" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Благодаря рекурсивным условным типам и шаблонным литералам, TypeScript может выполнять сложные алгоритмы парсинга строк во время компиляции. На первом шаге строка разделяется на `'a'` и `'b,c'`, далее правая часть рекурсивно обрабатывается снова, превращаясь в кортеж конкретных литералов `['a', 'b', 'c']`.",
            en: "Combining template literals with recursive conditional architectures empowers the compiler to run complete static string tokenizers. It breaks \"a,b,c\" down element by element into a perfectly mapped tuple collection: `['a', 'b', 'c']`.",
            ka: "რეკურსიული პირობითი ტიპებისა და შაბლონური ლიტერალების წყალობით, TS-ს შეუძლია სტრიქონების პარსინგის რთული ალგორითმების შესრულება კომპილაციისას. კოდი ნაბიჯ-ნაბიჯ ყოფს ტექსტს მძიმეების მიხედვით და აწყობს კორტეჟს `['a', 'b', 'c']`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#recursive-conditional-types",
        docLabel: "Recursive Conditional Types — Handbook"
    },
    {
        id: 255,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какое ограничение (Constraint) накладывает TypeScript на общее количество литералов, генерируемых декартовым произведением в одном шаблоне, во избежание зависания компилятора?",
            en: "What safety limit check does TypeScript place on the total number of string literals generated via union cross-multiplication?",
            ka: "რა შეზღუდვას (Constraint) აწესებს TypeScript ერთ შაბლონში დეკარტული ნამრავლით გენერირებული ლიტერალების მაქსიმალურ რაოდენობაზე კომპილატორის ჩამოკიდების თავიდან ასაცილებლად?"
        },
        code: `<span class="comment">// Если перемножить слишком огромные Union-типы</span>
<span class="kw">type</span> <span class="type">TooBig</span> = <span class="str">&#96;\${<span class="type">HeavyUnion</span>}\${<span class="type">AnotherHeavy</span>}&#96;</span>;`,
        options: [
            { ru: "Лимит отсутствует, все ограничивается оперативной памятью", en: "No limit exists; expansion capabilities are bounded only by system hardware RAM sizes", ka: "ლიმიტი არ არსებობს, ყველაფერი შემოიფარგლება მხოლოდ ოპერატიული მეხსიერებით" },
            { ru: "Ровно 100 000 комбинаций", en: "Exactly 100,000 distinct permutations", ka: "ზუსტად 100 000 კომბინაცია" },
            { ru: "100 комбинаций", en: "Exactly 100 total combinations", ka: "100 კომბინაცია" },
            { ru: "10 000 комбинаций (вызовет ошибку 'Expression produces a union type that is too complex')", en: "10,000 combinations (triggers 'Expression produces a union type that is too complex')", ka: "10 000 კომბინაცია (გამოიწვევს შეცდომას 'Expression produces a union type that is too complex')" }
        ],
        correct: 3,
        explanation: {
            ru: "Генерация типов на лету — ресурсозатратная операция. Во избежание бесконечных циклов или падения компилятора по нехватке памяти, в TypeScript встроено жесткое ограничение: если шаблонный литерал в процессе перемножения генерирует более 10 000 уникальных строковых вариантов, компиляция прерывается с ошибкой о чрезмерной сложности объединения.",
            en: "To prevent compilation tasks from running out of memory or entering infinite loop states, TypeScript enforces a built-in threshold. If cross-multiplying dynamic template unions attempts to spawn more than 10,000 items, it stops with a 'too complex' warning.",
            ka: "ტიპების გენერაცია რესურსტევადი ოპერაციაა. კომპილატორის გაჭედვის თავიდან ასაცილებლად TS-ში ჩაშენებულია ლიმიტი: თუ შაბლონური ლიტერალი გამრავლებისას აგენერირებს 10 000-ზე მეტ უნიკალურ სტრიქონულ ვარიანტს, კომპილაცია წყდება შეცდომით."
        },
        docLink: "https://github.com/microsoft/TypeScript/pull/40336",
        docLabel: "Template Literal Types Performance Limits — GitHub"
    },
    {
        id: 256,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип данных получится, если применить встроенную утилиту Lowercase к строковому литералу, состоящему исключительно из цифр?",
            en: "What string type outcome is evaluated when running the Lowercase intrinsic helper over a purely numeric string literal?",
            ka: "რა ტიპს მივიღებთ, თუ გამოვიყენებთ ჩაშენებულ Lowercase სერვისულ ტიპს მხოლოდ ციფრებისგან შემდგარ სტრიქონულ ლიტერალზე?"
        },
        code: `<span class="kw">type</span> <span class="type">NumStr</span> = <span class="type">Lowercase</span>&lt;<span class="str">"123-45"</span>&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "Строковый литерал '123-45' без изменений", en: "The identical string literal token '123-45' left completely unaltered", ka: "სტრიქონული ლიტერალი '123-45' ცვლილებების გარეშე" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" }
        ],
        correct: 1,
        explanation: {
            ru: "Встроенные утилиты трансформации регистра (`Lowercase`, `Uppercase` и др.) влияют исключительно на алфавитные символы латиницы (или поддерживаемых алфавитов). Цифры, дефисы, знаки препинания и спецсимволы не имеют понятия регистра, поэтому они возвращаются компилятором в исходном виде, без ошибок.",
            en: "Intrinsic casing utilities like `Lowercase` manipulate alphabetical string characters exclusively. Because numbers, hyphens, and spaces carry no case attributes, the compiler leaves them unaltered, returning \"123-45\".",
            ka: "რეგისტრის ტრანსფორმაციის ჩაშენებული სერვისები (`Lowercase`, `Uppercase` და ა.შ.) გავლენას ახდენენ მხოლოდ ანბანის ასოებზე. ციფრებს, დეფისებსა და სპეც-სიმბოლოებს არ გააჩნიათ რეგისტრი, ამიტომ ისინი ბრუნდებიან პირვანდელი სახით, შეცდომის გარეშე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype",
        docLabel: "Lowercase Intrinsic — Utility Types"
    },
    {
        id: 257,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Как поведет себя TypeScript при попытке передать в шаблонный литерал значение null или undefined?",
            en: "How does TypeScript resolve type transformations when null or undefined types are injected inside a template literal block?",
            ka: "როგორ მოიქცევა TypeScript შაბლონურ ლიტერალში null ან undefined მნიშვნელობის გადაცემის მცდელობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">WithNull</span> = <span class="str">&#96;key-\${<span class="kw">null</span>}-\${<span class="kw">undefined</span>}&#96;</span>;`,
        options: [
            { ru: "Вызовет ошибку компиляции: типы null и undefined запрещены", en: "Throws an error; null and undefined options are banned inside template string segments", ka: "გამოიწვევს კომპილაციის შეცდომას: null და undefined ტიპები აკრძალულია" },
            { ru: "Схлопнется в тип never", en: "Collapses the statement down into a pure never type", ka: "ჩაიკეცება never ტიპში" },
            { ru: "Успешно сгенерирует точный строковый литерал 'key-null-undefined'", en: "Successfully evaluates to the explicit string literal type 'key-null-undefined'", ka: "წარმატებით დააგენერირებს ზუსტ სტრიქონულ ლიტერალს 'key-null-undefined'" },
            { ru: "Превратится в универсальный тип string", en: "Broadens the entire declaration out into a generic string type", ka: "გარდაიქმნება უნივერსალურ string ტიპად" }
        ],
        correct: 2,
        explanation: {
            ru: "Типы `null` и `undefined` официально разрешены к использованию внутри интерполяций шаблонных типов. Компилятор TypeScript превращает их в текстовые литералы `'null'` и `'undefined'` соответственно, в точности повторяя поведение примитивов при конкатенации строк в рантайме JavaScript.",
            en: "The compiler officially permits `null` and `undefined` tokens inside template literal arguments. It serializes them directly into text strings `'null'` and `'undefined'`, replicating JavaScript runtime behavior.",
            ka: "`null` და `undefined` ტიპები ოფიციალურად ნებადართულია შაბлონურ ლიტერალებში. TypeScript-ის კომპილატორი მათ აქცევს ტექსტურ ლიტერალებად `'null'` და `'undefined'`, რითაც ზუსტად იმეორებს JS-ის ქცევას რანთაიმში სტრიქონების კონკატენაციისას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literals with Nullable Types — Handbook"
    },
    {
        id: 258,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Какой тип будет выведен для 'Prop', если при парсинге шаблона с infer правая часть строки является полностью свободной переменной без явного ограничителя?",
            en: "What string text slice is mapped to the inner inferred token when the right-hand segment of the template matches an open end?",
            ka: "რა ტიპი მიენიჭება 'Prop'-ს, თუ infer პატერნის პარსინგისას სტრიქონის მარჯვენა ნაწილი არის სრულიად თავისუფალი ცვლადი მკაფიო შემზღუდავის გარეშე?"
        },
        code: `<span class="kw">type</span> <span class="type">GetProp</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="str">&#96;data-\${infer <span class="type">P</span>}&#96;</span> ? <span class="type">P</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Prop</span> = <span class="type">GetProp</span>&lt;<span class="str">"data-user-profile"</span>&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "'user'", en: "'user'", ka: "'user'" },
            { ru: "'user-profile'", en: "'user-profile'", ka: "'user-profile'" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 2,
        explanation: {
            ru: "Если оператор `infer P` находится в самом конце паттерна шаблонного литерала и после него нет никаких статических символов-ограничителей, TypeScript «жадно» захватывает абсолютно всю оставшуюся хвостовую часть строки. Для \"data-user-profile\" остатком после \"data-\" является подстрока `'user-profile' независимо от дефисов.`,",
            en: "When an `infer P` placeholder is placed at the absolute terminal end of a template string type pattern, it greedily swallows the complete remaining tail sequence. For \"data-user-profile\", it extracts `'user-profile'`.",
            ka: "თუ `infer P` ოპერატორი იმყოფება შაბლონური ლიტერალის პატერნის ბოლოში და მის შემდეგ არ არის სიმბოლოები, TypeScript ხარბად (greedily) იჭერს სტრიქონის მთელ დარჩენილ ნაწილს. შესაბამისად, დარჩენილი ნაწილი იქნება `'user-profile'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#inference-with-conditional-types",
        docLabel: "Greedy Inference in Templates — Handbook"
    },
    {
        id: 259,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "Каким образом можно объединить шаблонные литеральные типы со строковыми перечислениями (string enums) в TypeScript?",
            en: "How can you leverage string enums as parameters inside a template literal type declaration?",
            ka: "როგორ შეიძლება შაბლონური ლიტერალური ტიპების გაერთიანება სტრიქონულ Enum-ებთან (string enums) TypeScript-ში?"
        },
        code: `<span class="kw">enum</span> <span class="type">Theme</span> { Dark = <span class="str">"dark"</span>, Light = <span class="str">"light"</span> }
<span class="kw">type</span> <span class="type">ThemeClass</span> = <span class="str">&#96;theme-\${___________}&#96;</span>;`,
        options: [
            { ru: "Theme (просто имя enum)", en: "Theme (the raw enum name reference directly)", ka: "Theme (უბრალოდ enum-ის სახელი)" },
            { ru: "keyof Theme", en: "keyof Theme", ka: "keyof Theme" },
            { ru: "Theme.Dark | Theme.Light", en: "Theme.Dark | Theme.Light", ka: "Theme.Dark | Theme.Light" },
            { ru: "Использовать имя enum напрямую ('Theme'), либо перечислить его значения. Оба варианта заставят TypeScript извлечь строковые литералы значений перечисления", en: "Provide the raw enum name identifier ('Theme') directly or point to its members. Either way, TypeScript extracts the underlying string values.", ka: "Enum-ის სახელის პირდაპირ მითითებით ('Theme'), ან მისი მნიშვნელობების ჩამოთვლით. ორივე შემთხვევაში TS ამოიღებს enum-ის სტრიქონულ მნიშვნელობებს" }
        ],
        correct: 3,
        explanation: {
            ru: "Строковые перечисления (`enum`) отлично интегрированы с шаблонными типами. Если вы подставите само имя перечисления `Theme` внутрь `${Theme}`, TypeScript автоматически развернет его в Union-тип его значений (`\"dark\" | \"light\"`). В итоге `ThemeClass` примет тип `'theme-dark' | 'theme-light'`.",
            en: "String enums integrate with template type declarations. Passing the enum type name `Theme` inside the `${Theme}` interpolation block instructs the compiler to automatically unpack it into a union of its active string values.",
            ka: "სტრიქონული ჩამონათვალი (`enum`) კარგად ინტეგრირდება შაბლონურ ტიპებთან. თუ ჩაწერთ enum-ის სახელს `Theme` ინტერპოლაციაში `${Theme}`, TS ავტომატურად გაშლის მას მნიშვნელობების Union ტიპად. შედეგად მივიღებთ `'theme-dark' | 'theme-light'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Enums in Template Literals — Handbook"
    },
    {
        id: 260,
        category: { ru: "Template Literal Types", en: "Template Literal Types", ka: "Template Literal ტიპები" },
        tag: "template-literals",
        question: {
            ru: "К какому итоговому типу будет приведена переменная, если шаблонный литерал составляется на основе общего не-литерального типа 'string'?",
            en: "What type result is produced when a template literal compiles around an open, non-literal primitive 'string' argument?",
            ka: "რა საბოლოო ტიპამდე მივალთ, თუ შაბლონური ლიტერალი იწყობა ზოგადი (არალიტერალური) 'string' ტიპის ბაზაზე?"
        },
        code: `<span class="kw">const</span> prefix: <span class="type">string</span> = <span class="str">"custom-"</span>;
<span class="kw">type</span> <span class="type">StrPattern</span> = <span class="str">&#96;fmt-\${<span class="type">string</span>}&#96;</span>;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "Тип string (шаблон полностью деградирует до базовой строки)", en: "The generic string type (the exact pattern degrades entirely back to a flat string configuration)", ka: "string ტიპი (შაბლონი სრულად ჩამოდის საბაზისო string ტიპამდე)" },
            { ru: "Паттерн-тип 'fmt-${string}', который разрешает присваивать любые строки, начинающиеся строго с 'fmt-'", en: "A dynamic pattern type 'fmt-${string}', validating and accepting any runtime strings that explicitly begin with a 'fmt-' prefix", ka: "პატერნ-ტიპი 'fmt-${string}', რომელიც ნებას რთავს ნებისმიერი ისეთი სტრიქონის მინიჭებას, რომელიც იწყება მკაცრად 'fmt-' პრეფიქსით" },
            { ru: "Строковый литерал 'fmt-string'", en: "The static text string 'fmt-string'", ka: "სტრიქონული ლიტერალი 'fmt-string'" }
        ],
        correct: 2,
        explanation: {
            ru: "Когда в шаблон подставляется открытый примитив `${string}`, TypeScript не сбрасывает его до обычного `string`. Он создает специальный паттерн-тип `` `fmt-${string}` ``. Переменной такого типа можно присвоить \"fmt-any text\", \"fmt-123\", но попытка присвоить \"just-text\" вызовет ошибку компиляции. Это позволяет валидировать префиксы и суффиксы для произвольных строк.",
            en: "Injecting the open `${string}` primitive does not flatten the template into a plain `string`. Instead, TypeScript maintains a template pattern format (`` `fmt-${string}` ``). This allows assigning any string starting with \"fmt-\", while enforcing prefix safety.",
            ka:",როდესაც შაბლონში თავსდება ღია პრიმიტივი `${string}`, TypeScript მას არ აუფასურებს უბრალო `string`-მდე. ის ქმნის სპეციალურ პატერნ-ტიპს `` `fmt-${string}` ``. ამ ტიპის ცვლადს შეიძლება მიენიჭოს \"fmt-abc\", მაგრამ \"abc\" გამოიწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#pattern-template-string-types",
        docLabel: "Pattern Template String Types — Release Notes"
    },

    // 14. ADVANCED TYPES (INFER)
    {
        id: 261,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какова задача ключевого слова infer в условных типах (Conditional Types)?",
            en: "What is the primary role of the infer keyword within conditional types?",
            ka: "რა არის infer ქივორდის დანიშნულება პირობით ტიპებში (Conditional Types)?"
        },
        code: `<span class="kw">type</span> <span class="type">Unwrap</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Promise</span>&lt;<span class="kw">infer</span> <span class="type">U</span>&gt; ? <span class="type">U</span> : <span class="type">T</span>;`,
        options: [
            { ru: "Позволяет объявить временную переменную внутри условия для автовыведения и 'захвата' скрытого типа", en: "Declares a dynamic compile-time inline variable to infer and capture a hidden sub-type context", ka: "საშუალებას გვაძლევს გამოვაცხადოთ დროებითი ცვლადი პირობაში ფარული ტიპის ავტომატურად ამოსაცნობად და დასაჭერად" },
            { ru: "Принудительно отключает строгую проверку, сводя тип к any", en: "Forcibly bypasses standard architecture rules reverting matching paths to any", ka: "იძულებით თიშავს მკაცრ შემოწმებას და დაჰყავს ტიპი any-მდე" },
            { ru: "Служит для создания циклических рекурсивных типов данных", en: "Operates as a looping baseline trigger crafting recursive interfaces", ka: "გამოიყენება ციკლური რეკურსიული მონაცემთა ტიპების შესაქმნელად" },
            { ru: "Проверяет, унаследован ли класс от родительского интерфейса", en: "Validates whether an active OOP node inherits properties from an interface", ka: "ამოწმებს არის თუ არა კლასი მემკვიდრეობით მიღებული მშობელი ინტერფეისისგან" },
        ],
        correct: 0,
        explanation: {
            ru: "Слово 'infer' (вывести/предположить) можно использовать исключительно внутри блока extends условного типа. Оно даёт компилятору команду: 'Если тип соответствует паттерну, посмотри, что находится на этом месте, и запиши этот тип в созданную на лету переменную U'. В примере, если T — это Promise<string>, то U захватит тип string и вернет его. Если T не промис, сработает ветка else и вернется сам T. Без infer создание кастомных сложных утилит-трансформеров невозможно.",
            en: "The 'infer' keyword is restricted to conditional type pattern matching statements. It instructs the compiler engine: 'If the type layout satisfies this shape constraint, examine whatever dynamic datatype occupies this specific coordinate and store it in a temporary parameter U.' This allows utilities to dismantle type wrappers and expose internal arguments.",
            ka: "'infer' ქივორდის გამოყენება შესაძლებელია მხოლოდ პირობითი ტიპის extends ბლოკში. ის კომპილატორს აძლევს ბრძანებას: 'თუ ტიპი შეესაბამება შაბლონს, ნახე რა ტიპია ამ ადგილას და ჩაწერე ის ახალ ცვლად U-ში'. მაგალითში, თუ T არის Promise<string>, U დაიჭერს string ტიპს და დააბრუნებს მას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Infer keyword — Handbook"
    },
    {
        id: 262,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип данных извлечет утилита GetReturnType для типа 'Func' в данном примере?",
            en: "What specific type will the GetReturnType utility extract for 'Func' in this layout?",
            ka: "რა კონკრეტულ ტიპს ამოიღებს GetReturnType სერვისი 'Func' ტიპისთვის მოცემულ მაგალითში?"
        },
        code: `<span class="kw">type</span> <span class="type">GetReturnType</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> (...args: <span class="type">any</span>[]) => <span class="kw">infer</span> <span class="type">R</span> ? <span class="type">R</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Func</span> = (id: <span class="type">number</span>) => <span class="type">boolean</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">GetReturnType</span>&lt;<span class="type">Func</span>&gt;;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "boolean", en: "boolean", ka: "boolean" },
            { ru: "any[]", en: "any[]", ka: "any[]" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Шаблон `(...args: any[]) => infer R` сопоставляется с сигнатурой любой функции. Утилита проверяет тип `Func`. Так как `Func` является функцией, возвращающей `boolean`, оператор `infer R` захватывает тип возвращаемого значения, фиксируя его в переменную `R`. В итоге `Result` равен `boolean`. На этом принципе основан встроенный служебный тип `ReturnType<T>`.",
            en: "The pattern `(...args: any[]) => infer R` structure checks against any callable function signature. Since `Func` maps to a function returning `boolean`, the `infer R` expression successfully isolates and extracts the `boolean` token as the resolution.",
            ka: "`(...args: any[]) => infer R` შაბლონი შეესაბამება ნებისმიერი ფუნქციის სიგნატურას. სერვისი ამოწმებს `Func` ტიპს. ვინაიდან `Func` არის ფუნქცია, რომელიც აბრუნებს `boolean`-ს, `infer R` ოპერატორი აფიქსირებს დაბრუნებული მნიშვნელობის ტიპს `R` ცვლადში. შედეგად მივიღებთ `boolean`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype",
        docLabel: "ReturnType — Utility Types"
    },
    {
        id: 263,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Что вернет условный тип GetFirst, если ему передать пустой кортеж или пустой массив?",
            en: "What type does the GetFirst conditional tool evaluate to when provided an empty tuple or array structure?",
            ka: "რას დააბრუნებს პირობითი ტიპი GetFirst, თუ მას გადავცემთ ცარიელ კორტეჟს ან ცარიელ მასივს?"
        },
        code: `<span class="kw">type</span> <span class="type">GetFirst</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> [<span class="kw">infer</span> <span class="type">F</span>, ...<span class="type">any</span>[]] ? <span class="type">F</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">EmptyRes</span> = <span class="type">GetFirst</span>&lt;[]&gt;;`,
        options: [
            { ru: "undefined", en: "undefined", ka: "undefined" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Ошибка компиляции: пустой кортеж не имеет типов", en: "Compile error: An empty tuple template possesses no internal types to parse", ka: "კომპილაციის შეცდომა: ცარიელ კორტეჟს არ გააჩნია ტიპები" }
        ],
        correct: 2,
        explanation: {
            ru: "Шаблон `[infer F, ...any[]]` требует, чтобы в массиве/кортеже присутствовал как минимум один обязательный первый элемент. Поскольку в пустом кортеже `[]` элементов нет вообще, сопоставление `extends` завершается неудачей. Соответственно, TypeScript выбирает ложную ветку условного типа и возвращает `never`.",
            en: "The structural syntax `[infer F, ...any[]]` requires a tuple to have at least one defined starting member. Because an empty tuple `[]` contains zero elements, the `extends` check fails, routing evaluation into the fallback `never` arm.",
            ka: "`[infer F, ...any[]]` შაბლონი მოითხოვს, რომ მასივში/კორტეჟში იყოს მინიმუმ ერთი სავალდებულო პირველი ელემენტი. ვინაიდან ცარიელ კორტეჟში `[]` ელემენტები საერთოდ არ არის, `extends` შემოწმება ჩავარდება, კომპილატორი აირჩევს მეორე შტოს და დააბრუნებს `never`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types — Handbook"
    },
    {
        id: 264,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет выведен для 'ArgType' при попытке извлечь тип первого аргумента конструктора через infer?",
            en: "What type is extracted for 'ArgType' when trying to isolate the first constructor argument via an infer clause?",
            ka: "რა ტიპი მიენიჭება 'ArgType'-ს კონსტრუქტორის პირველი არგუმენტის ტიპის infer-ით ამოღების მცდელობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">FirstArg</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="kw">new</span> (arg1: <span class="kw">infer</span> <span class="type">A</span>, ...args: <span class="type">any</span>[]) => <span class="type">any</span> ? <span class="type">A</span> : <span class="type">never</span>;
<span class="kw">class</span> <span class="type">User</span> { <span class="kw">constructor</span>(id: <span class="type">string</span>, age: <span class="type">number</span>) {} }
<span class="kw">type</span> <span class="type">ArgType</span> = <span class="type">FirstArg</span>&lt;<span class="kw">typeof</span> <span class="type">User</span>&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "User", en: "User", ka: "User" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Конструкторы классов описываются через ключевое слово `new`. Мы передаем `typeof User` (саму функцию-конструктор класса, а не его инстанс). Паттерн `new (arg1: infer A, ...args: any[]) => any` успешно сопоставляется с конструктором, и `infer A` захватывает тип первого параметра `arg1`, которым является `string`.",
            en: "Class constructors are represented inside the type space using the `new` prefix. By passing `typeof User` (the constructor function itself), the `new (arg1: infer A, ...args: any[]) => any` template catches and matches the signature, binding `A` to `string`.",
            ka: "კლასის კონსტრუქტორები აღიწერება `new` საკვანძო სიტყვით. ჩვენ გადავცემთ `typeof User`-ს (თვითონ კლასის კონსტრუქტორ-ფუნქციას და არა მის ინსტანსს). შაბლონი წარმატებით ემთხვევა კონსტრუქტორს და `infer A` იჭერს პირველი პარამეტრის ტიპს, რომელიც არის `string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparametersregistries",
        docLabel: "ConstructorParameters — Utility Types"
    },
    {
        id: 265,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "К какому типу приведет вычисление 'TailType', извлекающего хвостовые элементы кортежа?",
            en: "What composite type calculation is derived for 'TailType' when extracting the tail properties of an existing tuple?",
            ka: "რა ტიპს მივიღებთ 'TailType'-ის გამოთვლისას, რომელიც კორტეჟის ბოლო (tail) ელემენტებს ამოდებს?"
        },
        code: `<span class="kw">type</span> <span class="type">GetTail</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> [<span class="type">any</span>, ...<span class="kw">infer</span> <span class="type">R</span>] ? <span class="type">R</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">TailType</span> = <span class="type">GetTail</span>&lt;[<span class="type">number</span>, <span class="type">string</span>, <span class="type">boolean</span>]&gt;;`,
        options: [
            { ru: "string | boolean", en: "string | boolean", ka: "string | boolean" },
            { ru: "[string, boolean] (строгий под-кортеж)", en: "[string, boolean] (a strict nested sub-tuple)", ka: "[string, boolean] (ზუსტი ქვეკორტეჟი)" },
            { ru: "boolean", en: "boolean", ka: "boolean" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript поддерживает извлечение остаточных элементов (rest elements) в кортежах с помощью `infer`. Конструкция `[any, ...infer R]` пропускает первый элемент (`number`), а все оставшиеся элементы кортежа пакует в новую структуру кортежа. В результате переменная `R` захватывает точный под-кортеж `[string, boolean]`.",
            en: "TypeScript handles the extraction of rest parameters inside tuple types via `infer`. The layout `[any, ...infer R]` skips the leading member (`number`) and gathers all remaining trailing signatures into a clean structured tuple: `[string, boolean]`.",
            ka: "TypeScript მხარს უჭერს ნაშთი ელემენტების (rest elements) ამოღებას კორტეჟებში `infer`- ის დახმარებით. კონსტრუქცია `[any, ...infer R]` გამოტოვებს პირველ ელემენტს (`number`), ხოლო ყველა დანარჩენ ელემენტს აკავშირებს ახალ კორტეჟად. შედეგად მივიღებთ `[string, boolean]`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Variadic Tuple Types Inference — Handbook"
    },
    {
        id: 266,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Что произойдет, если объявить две переменные infer с одинаковым именем в ковариантной позиции (например, возвращаемое значение функции)?",
            en: "How does the type system handle two infer variables declared with the identical name in a covariant position (e.g., function returns)?",
            ka: "რა მოხდება, თუ გამოვაცხადებთ ორ ერთნაირი სახელის მქონე infer ცვლადს კოვარიანტულ პოზიციაში (მაგალითად, ფუნქციის დაბრუნებულ მნიშვნელობაში)?"
        },
        code: `<span class="kw">type</span> <span class="type">UnionInfer</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { a: <span class="kw">infer</span> <span class="type">U</span>, b: <span class="kw">infer</span> <span class="type">U</span> } ? <span class="type">U</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">UnionInfer</span>&lt;{ a: <span class="type">string</span>, b: <span class="type">number</span> }&gt;;`,
        options: [
            { ru: "Вызовется ошибка компиляции: дублирование имен переменных infer запрещено", en: "Throws a compiler error: duplicating infer identity names is strictly prohibited", ka: "გამოიწვევს კომპилაციის შეცდომას: infer ცვლადების სახელების დუბლირება აკრძალულია" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Типы объединятся в Union: string | number", en: "The captured types merge cleanly into a Union: string | number", ka: "ტიპები გაერთიანდება Union-ში: string | number" },
            { ru: "Типы пересекутся в Intersection: string & number (что дает никогда/never)", en: "The types merge via an Intersection check: string & number (yielding never)", ka: "ტიპები გადაიკვეთება Intersection-ში: string & number (რაც იძლევა never-ს)" }
        ],
        correct: 2,
        explanation: {
            ru: "Если одно и то же имя переменной `infer U` используется несколько раз в ковариантных позициях (обычные свойства объектов, возвращаемые значения функций), TypeScript соберет все возможные варианты и объединит их в **Union-тип**. Для свойств `{ a: string, b: number }` результатом станет объединение `string | number`.",
            en: "When the same `infer U` variable target is shared across multiple covariant coordinates (like standard object fields or function outputs), TypeScript evaluates them by compiling a candidate **Union type** (`string | number`).",
            ka: "თუ ერთი და იგივე `infer U` ცვლადის სახელი რამდენჯერმე გამოიყენება კოვარიანტულ პოზიციაში (ობიექტის თვისებები, ფუნქციის დაბრუნებული მნიშვნელობა), TypeScript აგროვებს ყველა შესაძლო ვარიანტს და აერთიანებს მათ **Union ტიპში**. შედეგი იქნება `string | number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Covariant Infer Positioning — Handbook"
    },
    {
        id: 267,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какое поведение продемонстрирует компилятор, если переменные infer с одинаковым именем объявлены в контравариантной позиции (например, аргументы функций)?",
            en: "What type behavior is observed when identical infer variable names occupy a contravariant position (e.g., function arguments)?",
            ka: "როგორ მოიქცევა კომპილატორი, თუ ერთი და იგივე სახელის მქონе infer ცვლადები გამოცხადებულია კონტრავარიანტულ პოზიციაში (მაგალითად, ფუნქციის არგუმენტებში)?"
        },
        code: `<span class="kw">type</span> <span class="type">InterInfer</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> ((x: <span class="kw">infer</span> <span class="type">U</span>) => <span class="type">void</span>) & ((x: <span class="kw">infer</span> <span class="type">U</span>) => <span class="type">void</span>) ? <span class="type">U</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">InterInfer</span>&lt;((x: { foo: <span class="type">string</span> }) => <span class="type">void</span>) & ((x: { bar: <span class="type">number</span> }) => <span class="type">void</span>)&gt;;`,
        options: [
            { ru: "Сформирует Union-тип: { foo: string } | { bar: number }", en: "Constructs a standard Union compilation fallback: { foo: string } | { bar: number }", ka: "შექმნის Union ტიპს: { foo: string } | { bar: number }" },
            { ru: "Сформирует тип пересечения (Intersection): { foo: string } & { bar: number }", en: "Constructs a rigorous Intersection type schema: { foo: string } & { bar: number }", ka: "შექმნის გადაკვეთის ტიპს (Intersection): { foo: string } & { bar: number }" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от ковариантных позиций, множественные упоминания одного и того же `infer U` в контравариантных позициях (таких как аргументы перегруженных или пересекающихся функций) заставляют TypeScript выводить **пересечение типов (Intersection)**. Таким образом, аргументы объединяются через `&`, давая полноценный тип `{ foo: string } & { bar: number }`.",
            en: "Contravariant locations (such as function argument criteria) handle multiple identical `infer` references by producing an **Intersection type** structure instead of a union, generating `{ foo: string } & { bar: number }`.",
            ka: "კოვარიანტული პოზიციებისგან განსხვავებით, ერთი და იგივე `infer U`-ს მრავალჯერადი გამოყენება კონტრავარიანტულ პოზიციებში (მაგალითად, ფუნქციის არგუმენტებში) აიძულებს TS-ს დააგენერიროს **ტიპების გადაკვეთა (Intersection)**: `{ foo: string } & { bar: number }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Contravariant Infer Positioning — Handbook"
    },
    {
        id: 268,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Каким образом можно ограничить тип, выводимый через infer (добавить Constraint к infer), начиная с версии TypeScript 4.7?",
            en: "How can you apply an inline type Constraint directly to an infer variable since TypeScript 4.7?",
            ka: "როგორ შეიძლება infer-ით მისაღები ტიპის შეზღუდვა (Constraint-ის დამატება infer-ზე) TypeScript 4.7 ვერსიიდან?"
        },
        code: `<span class="kw">type</span> <span class="type">GetStrRes</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Promise</span>&lt;<span class="kw">infer</span> <span class="type">R</span> <span class="kw">extends</span> <span class="type">string</span>&gt; ? <span class="type">R</span> : <span class="type">never</span>;`,
        options: [
            { ru: "Использовать синтаксис 'infer R extends Type' прямо внутри дженерика", en: "Use the inline 'infer R extends Type' syntax directly inside the conditional generic layout", ka: "სინტაქსის 'infer R extends Type' გამოყენება პირდაპირ პირობით დონეზე" },
            { ru: "Через двоеточие: infer R: string", en: "Using a standard colon separation check: infer R: string", ka: "ორწერტილის საშუალებით: infer R: string" },
            { ru: "Такой синтаксис недопустим, ограничения накладываются только внешним условием", en: "This syntax pattern is illegal; restrictions can only be asserted using outer separate filters", ka: "ასეთი სინტაქსი დაუშვებელია, შეზღუდვები წესდება მხოლოდ გარე პირობით" },
            { ru: "Через ключевое слово implements", en: "By applying the 'implements' type keyword modification", ka: "implements საკვანძო სიტყვის გამოყენებით" }
        ],
        correct: 0,
        explanation: {
            ru: "Начиная с версии TS 4.7, разработчики могут писать ограничения (Constraints) непосредственно в объявлении переменной выведения: `infer R extends string`. Это избавляет от необходимости писать дополнительные вложенные условные типы для валидации того, что выведенный тип является строкой, числом или объектом конкретной формы.",
            en: "Introduced in TypeScript 4.7, the inline syntax `infer R extends string` evaluates and binds constraints during inference. It bypasses the old architectural burden of writing nested conditional statements just to verify sub-type qualities.",
            ka: "TS 4.7 ვერსიიდან დეველოპერებს შეუძლიათ შეზღუდვების (Constraints) ჩაწერა პირდაპირ გამოყვანილ ცვლადში: `infer R extends string`. ეს გვიცავს დამატებითი ჩაშენებული პირობითი ტიპების წერისგან იმის შესამოწმებლად, არის თუ არა ტიპი სტრიქონი, ციფრი თუ სხვა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#extends-constraints-on-infer-type-variables",
        docLabel: "infer Constraints — Release Notes"
    },
    {
        id: 269,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип вернет утилита ItemType, если ей в качестве аргумента передать обычную строку (string)?",
            en: "What type is evaluated by the ItemType utility if a flat primitive 'string' is passed as the core argument?",
            ka: "რა ტიპს დააბრუნებს ItemType სერვისი, თუ მას არგუმენტად გადავცემთ ჩვეულებრივ სტრიქონს (string)?"
        },
        code: `<span class="kw">type</span> <span class="type">ItemType</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> (<span class="kw">infer</span> <span class="type">U</span>)[] ? <span class="type">U</span> : <span class="type">T</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">ItemType</span>&lt;<span class="type">string</span>&gt;;`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "string[]", en: "string[]", ka: "string[]" }
        ],
        correct: 2,
        explanation: {
            ru: "Утилита проверяет, расширяет ли тип `T` паттерн массива `(infer U)[]`. Переданный тип `string` не является массивом. Поскольку условие `extends` ложно, TypeScript переходит к ветке `else`, которая возвращает сам исходный тип `T`, то есть `string`.",
            en: "The configuration checks whether `T` aligns with an array layout `(infer U)[]`. Because the primitive `string` type fails this array criteria check, the execution branches to the `else` logic, returning `T` (`string`) as-is.",
            ka: "სერვისი ამოწმებს, აკმაყოფილებს თუ არა `T` ტიპი მასივის შაბლონს `(infer U)[]`. გადაცემული `string` ტიპი არ არის მასივი. ვინაიდან პირობა მცდარია, კომპილატორი გადადის `else` შტოზე, რომელიც აბრუნებს თვითონ საწყის `T` ტიპს, ანუ `string`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types Fallbacks — Handbook"
    },
    {
        id: 270,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет выведен для переменной 'Instance' при разборе абстрактного класса утилитой с оператором infer?",
            en: "What type is outputted for 'Instance' when an abstract class reference is scrutinized by an infer-powered conditional wrapper?",
            ka: "რა ტიპი მიენიჭется 'Instance' ცვლადს აბსტრაქტული კლასის infer ოპერატორით პარსინგისას?"
        },
        code: `<span class="kw">abstract class</span> <span class="type">Controller</span> {}
<span class="kw">type</span> <span class="type">GetInstance</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="kw">new</span> (...args: <span class="type">any</span>[]) => <span class="kw">infer</span> <span class="type">I</span> ? <span class="type">I</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Instance</span> = <span class="type">GetInstance</span>&lt;<span class="kw">typeof</span> <span class="type">Controller</span>&gt;;`,
        options: [
            { ru: "Controller", en: "Controller", ka: "Controller" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "object", en: "object", ka: "object" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово `new (...args: any[]) => any` описывает конструктор конкретного (ньюабельного) класса. Экземпляр абстрактного класса невозможно создать через `new`, поэтому `typeof Controller` не соответствует этому паттерну. Условие `extends` проваливается, и тип вычисляется в `never`.",
            en: "The explicit template signature `new (...args: any[]) => any` targets instantiation signatures. Abstract classes cannot be instantiated with `new` directly. Thus, `typeof Controller` fails the pattern, returning `never`.",
            ka: "`new (...args: any[]) => any` სინტაქსი აღწერს ჩვეულებრივი (ინსტანცირებადი) კლასის კონსტრუქტორს. აბსტრაქტული კლასის შექმნა `new`-ით შეუძლებელია, ამიტომ `typeof Controller` არ შეესაბამется ამ შაბლონს. პირობა ჩავარდება და დაბრუნდება `never`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes",
        docLabel: "Abstract Class Signatures — Handbook"
    },
    {
        id: 271,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет определен для 'ElementType' при попытке извлечь тип элементов многомерного массива через infer?",
            en: "What inner signature matches 'ElementType' when evaluating a nested multidimensional array type structure with infer?",
            ka: "რა ტიპი განისაზღვრება 'ElementType'-სთვის მრავალგანზომილებიანი მასივის ელემენტების ტიპის infer-ით ამოღებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Flatten</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> (<span class="kw">infer</span> <span class="type">U</span>)[] ? <span class="type">U</span> : <span class="type">T</span>;
<span class="kw">type</span> <span class="type">ElementType</span> = <span class="type">Flatten</span>&lt;<span class="type">number</span>[][]&gt;;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "number[]", en: "number[]", ka: "number[]" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "any[]", en: "any[]", ka: "any[]" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку утилита `Flatten` не является рекурсивной, она снимает только один (самый верхний) слой массива. Переданный тип `number[][]` (массив массивов чисел) при сопоставлении с `(infer U)[]` возвращает тип его непосредственных элементов, коим является `number[]`.",
            en: "Because this specific `Flatten` declaration is non-recursive, it extracts only the outermost structural array wrapper. Evaluating a matrix shape like `number[][]` peels off one layer, returning `number[]` directly.",
            ka: "ვინაიდან `Flatten` სერვისი არ არის რეკურსიული, მას მოაქვს მასივის მხოლოდ ერთი (ყველაზე ზედა) დონე. გადაცემული `number[][]` (რიცხვების მასივების მასივი) `(infer U)[]`-თან შედარებისას დააბრუნებს მის უშუალო ელემენტებს, ანუ `number[]`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Flattening via Conditional Types — Handbook"
    },
    {
        id: 272,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет захвачен в переменную 'Value' при разборе типа объекта с динамическими строковыми ключами типа Record?",
            en: "What datatype is bound to 'Value' when parsing a dynamic Record map collection through a conditional lookup?",
            ka: "რა ტიპი ჩაიწერება 'Value' ცვლადში Record ტიპის ობიექტის პირობითი პარსინგის დროს?"
        },
        code: `<span class="kw">type</span> <span class="type">ExtractValue</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Record</span>&lt;<span class="type">string</span>, <span class="kw">infer</span> <span class="type">V</span>&gt; ? <span class="type">V</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Value</span> = <span class="type">ExtractValue</span>&lt;<span class="type">Record</span>&lt;<span class="type">string</span>, <span class="type">number</span>&gt;&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 1,
        explanation: {
            ru: "Встроенная утилита `Record<string, number>` разворачивается во внутреннюю структуру инкрементального маппинга `{[x: string]: number}`. Шаблон `Record<string, infer V>` успешно считывает тип значений словаря, благодаря чему переменная `V` инициализируется типом `number`.",
            en: "The standard utility `Record<string, number>` resolves down to a basic index signature shape `{[x: string]: number}`. Matching it against `Record<string, infer V>` lets the compiler capture the value component, outputting `number`.",
            ka: "ჩაშენებული სერვისი `Record<string, number>` იშლება ინდექსურ სტრუქტურად `{[x: string]: number}`. შაბლონი `Record<string, infer V>` წარმატებით კითხულობს ლექსიკონის მნიშვნელობების ტიპს, რის გამოც `V` ცვლადი მიიღებს `number` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeysvalues",
        docLabel: "Record — Utility Types"
    },
    {
        id: 273,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Что вернет данный условный тип, если на вход 'ExtractId' подать интерфейс без свойства 'id'?",
            en: "What type does the 'ExtractId' tool yield when presented with an interface type argument that lacks an explicit 'id' property?",
            ka: "რას დააბრუნებს მოცემული პირობითი ტიპი, თუ 'ExtractId'-ს შეყვანაზე მივაწვდით ინტერფეისს 'id' თვისების გარეშე?"
        },
        code: `<span class="kw">type</span> <span class="type">ExtractId</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { id: <span class="kw">infer</span> <span class="type">I</span> } ? <span class="type">I</span> : <span class="type">unknown</span>;
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">ExtractId</span>&lt;{ name: <span class="type">string</span> }&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "Ошибка: свойство 'id' обязательно должно присутствовать", en: "Compile error: the property 'id' is mandatory and must register inside the object type parameter", ka: "შეცდომა: 'id' თვისება აუცილებლად უნდა არსებობდეს" }
        ],
        correct: 1,
        explanation: {
            ru: "Условный тип сначала проверяет структуру на соответствие: `T extends { id: infer I }`. Переданный тип `{ name: string }` не имеет поля `id`. Проверка `extends` проваливается, из-за чего компилятор уходит в альтернативную ветку двоеточия (`else`) и возвращает тип `unknown`.",
            en: "The conditional pattern requires the checked object to mirror `{ id: infer I }`. Since `{ name: string }` doesn't supply an `id` field, the type checker moves to the alternative branch, safely returning `unknown`.",
            ka: "პირობითი ტიპი ჯერ ამომწმებს სტრუქტურულ შესაბამისობას: `T extends { id: infer I }`. გადაცემულ `{ name: string }` ტიპს არ აქვს `id` ველი. შესაბამისად, შემოწმება ჩავარდება, კომპილატორი გადავა `else` შტოზე და დააბრუნებს `unknown`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types Architecture — Handbook"
    },
    {
        id: 274,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип данных будет выведен для 'Param' при извлечении универсального типа из инстанса кастомного класса-контейнера?",
            en: "What inner generic parameter type is resolved for 'Param' when unwrapping an active custom box container instance?",
            ka: "რა ტიპი მიენიჭება 'Param'-ს ქასთომ კონტეინერ-კლასის ინსტანსიდან ჯენერიკ ტიპის ამოღებისას?"
        },
        code: `<span class="kw">class</span> <span class="type">Box</span>&lt;<span class="type">T</span>&gt; { value!: <span class="type">T</span> }
<span class="kw">type</span> <span class="type">Unbox</span>&lt;<span class="type">B</span>&gt; = <span class="type">B</span> <span class="kw">extends</span> <span class="type">Box</span>&lt;<span class="kw">infer</span> <span class="type">V</span>&gt; ? <span class="type">V</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Param</span> = <span class="type">Unbox</span>&lt;<span class="type">Box</span>&lt;<span class="type">string</span>[]&gt;&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "string[]", en: "string[]", ka: "string[]" },
            { ru: "Box<string[]>", en: "Box<string[]>", ka: "Box<string[]>" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор `infer` отлично справляется с распаковкой аргументов любых дженерик-классов или интерфейсов. Поскольку переданный тип — это `Box<string[]>`, шаблон `Box<infer V>` успешно сопоставляется с ним, а переменная `V` захватывает переданный аргумент целиком, то есть тип `string[]`.",
            en: "The `infer` operator unwraps target generic variables bound to structures or interfaces. Matching against `Box<string[]>` assigns the variable `V` to the exact inner generic type array payload, evaluating to `string[]`.",
            ka: "`infer` ოперატორი შესანიშნავად ართმევს თავს ნებისმიერი ჯენერიკ-კლასის თუ ინტერფეისის არგუმენტების ამოღებას. ვინაიდან გადაცემული ტიპია `Box<string[]>`, შაბლონი მას შეესაბამება და `V` ცვლადი სრულად იჭერს შიდა არგუმენტს, ანუ `string[]`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Inferring from Generic Classes — Handbook"
    },
    {
        id: 275,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "К какому результату приведёт использование infer внутри условного типа, если проверяемый аргумент равен типу any?",
            en: "What type output is produced by an infer statement inside a conditional type check if the evaluated parameter resolves to any?",
            ka: "რა შედეგს მივიღებთ პირობით ტიპში infer-ის გამოყენებისას, თუ შესამოწმებელი არგუმენტი არის any ტიპის?"
        },
        code: `<span class="kw">type</span> <span class="type">ExtractSomething</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { data: <span class="kw">infer</span> <span class="type">D</span> } ? <span class="type">D</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">ExtractSomething</span>&lt;<span class="type">any</span>&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "будет выброшена ошибка несовместимости типов", en: "The compiler crashes due to an unsafe strict type mismatch rule", ka: "გამოვა ტიპების შეუსაბამობის შეცდომა" }
        ],
        correct: 1,
        explanation: {
            ru: "Тип `any` в TypeScript отключает стандартные правила сопоставления типов. Когда `any` передаётся в условный тип `T extends { data: infer D }`, компилятор вычисляет обе ветки (и истинную, и ложную) и объединяет их результаты, либо сразу возвращает `any`. В данном случае результатом выведения для `Res` станет чистый тип `any`.",
            en: "Passing `any` into conditional types bypasses conventional matching constraints. TypeScript shortcuts the evaluation of conditional statements when dealing with an unsafe `any` root token, defaulting the output (`Res`) directly to `any`.",
            ka: "`any` ტიპი TypeScript-ში თიშავს ტიპების შედარების სტანდარტულ წესებს. როდესაც `any` გადაეცემა პირობით ტიპს `T extends { data: infer D }`, კომპილატორი პირდაპირ აბრუნებს `any` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
        docLabel: "Any type evaluation — Handbook"
    },
    {
        id: 276,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет извлечен для 'Last' в данном примере использования вариативных кортежей (Variadic Tuples)?",
            en: "Which explicit type signature is extracted for 'Last' when evaluating the end element of this variadic tuple type?",
            ka: "რა ტიპი ამოიღება 'Last'-სთვის ვარიაციული კორტეჟების (Variadic Tuples) გამოყენების ამ მაგალითში?"
        },
        code: `<span class="kw">type</span> <span class="type">GetLast</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> [...<span class="type">any</span>[], <span class="kw">infer</span> <span class="type">L</span>] ? <span class="type">L</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">Last</span> = <span class="type">GetLast</span>&lt;[<span class="type">string</span>, <span class="type">number</span>]&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "[string, number]", en: "[string, number]", ka: "[string, number]" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript вариативные кортежи позволяют ставить rest-оператор `...any[]` не только в конце, но и в начале паттерна. Шаблон `[...any[], infer L]` означает: пропусти все элементы массива до самого последнего, а последний элемент захвати в переменную `L`. Для кортежа `[string, number]` последним элементом является `number`.",
            en: "Variadic tuples allow placing rest variables (`...any[]`) at the frontend of a pattern match schema. The structure `[...any[], infer L]` discards all preceding items to lock onto the final element, mapping `L` to `number`.",
            ka: "TypeScript-ში ვარიაციული კорტეჟები საშუალებას გვაძლევს rest-ოპერატორი `...any[]` მოვათავსოთ არა მხოლოდ ბოლოში, არამედ შაბლონის დასაწყისშიც. შაბლონი `[...any[], infer L]` ნიშნავს: გამოტოვე ყველა ელემენტი ბოლომდე, ხოლო ბოლო ელემენტი ჩაწერე `L` ცვლადში. შედეგი იქნება `number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types",
        docLabel: "Variadic Tuple Types — Release Notes"
    },
    {
        id: 277,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Что произойдет, если попытаться использовать ключевое слово infer за пределами условия 'extends' условного типа?",
            en: "What compilation response occurs if you declare an infer clause completely outside of a conditional type 'extends' context?",
            ka: "რა მოხდება, თუ ვცდით infer საკვანძო სიტყვის გამოყენებას პირობითი ტიპის 'extends' ბლოკის გარეთ?"
        },
        code: `<span class="kw">type</span> <span class="type">BadType</span>&lt;<span class="type">T</span>&gt; = { data: <span class="kw">infer</span> <span class="type">U</span> };`,
        options: [
            { ru: "Код успешно скомпилируется, создав ленивое выведение типа", en: "Compiles successfully, creating a lazy auto-inferred reference hook", ka: "კოდი წარმატებით დაკომპილირდება და შექმნის ზარმაცი (lazy) ტიპის გამოყვანას" },
            { ru: "Ошибка компиляции: 'infer' declarations are only permitted in the 'extends' clause of a conditional type.", en: "Compile error: 'infer' declarations are only permitted in the 'extends' clause of a conditional type.", ka: "კომპილაციის შეცდომა: 'infer' declarations are only permitted in the 'extends' clause of a conditional type." },
            { ru: "Тип BadType по умолчанию превратится в any", en: "The BadType format automatically defaults to an explicit any signature", ka: "BadType ტიპი ავტომატურად გაუთანაბრდება any-ს" },
            { ru: "Переменная U примет тип unknown", en: "The internal parameter U defaults to match an unknown type signature", ka: "U ცვლადი მიიღებს unknown ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "Использование оператора `infer` строго ограничено синтаксисом условных типов (Conditional Types). Он может быть объявлен исключительно внутри секции проверки соответствия после слова `extends`. Написание `infer` в типах свойств объектов, интерфейсах или обычных дженериках является синтаксической ошибкой.",
            en: "The compiler restricts the usage of the `infer` modifier. It is legally valid exclusively inside the immediate expression sequence following an `extends` clause within a conditional type block. Any alternative declaration causes a compilation error.",
            ka: "`infer` ოპერატორის გამოყენება მკაცრად შეზღუდულია პირობითი ტიპების (Conditional Types) სინტაქსით. მისი გამოცხადება დასაშვებია მხოლოდ შესაბამისობის შემოწმების სექციაში `extends`- ის შემდეგ. სხვაგან მისი გამოყენება სინტაქსური შეცდომაა."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
        docLabel: "Infer placement rules — Handbook"
    },
    {
        id: 278,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет выведен для 'Unwrapped' при передаче Union-типа в утилиту, использующую infer?",
            en: "What type is outputted for 'Unwrapped' when a Union type is provided to a utility that features an internal infer evaluation?",
            ka: "რა ტიპი მიენიჭება 'Unwrapped'-ს, თუ Union ტიპს გადავცემთ სერვისში, რომელიც იყენებს infer-ს?"
        },
        code: `<span class="kw">type</span> <span class="type">UnpackPromise</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Promise</span>&lt;<span class="kw">infer</span> <span class="type">U</span>&gt; ? <span class="type">U</span> : <span class="type">T</span>;
<span class="kw">type</span> <span class="type">Unwrapped</span> = <span class="type">UnpackPromise</span>&lt;<span class="type">Promise</span>&lt;<span class="type">string</span>&gt; | <span class="type">Promise</span>&lt;<span class="type">number</span>&gt;&gt;;`,
        options: [
            { ru: "string | number (дистрибутивное распределение)", en: "string | number (due to distributive type matching processing)", ka: "string | number (დისტრიბუციული განაწილება)" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Promise<string | number>", en: "Promise<string | number>", ka: "Promise<string | number>" }
        ],
        options: [
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "string & number", en: "string & number", ka: "string & number" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 0,
        explanation: {
            ru: "Поскольку условные типы по умолчанию являются **дистрибутивными (Distributive)**, когда в `UnpackPromise` передается Union-тип `Promise<string> | Promise<number>`, TypeScript разбивает его и обрабатывает каждый элемент отдельно: сначала вычисляет `UnpackPromise<Promise<string>>` (дает `string`), затем `UnpackPromise<Promise<number>>` (дает `number`), а затем объединяет полученные результаты обратно в `string | number`.",
            en: "Conditional types execute as **Distributive** operations over raw naked generic placeholders. When receiving `Promise<string> | Promise<number>`, TypeScript iterates over each component independently before uniting the individual answers into a final `string | number` union.",
            ka: "ვინაიდან პირობითი ტიპები ნაგულისხმევად არის **დისტრიბუციული (Distributive)**, როდესაც `UnpackPromise`-ს გადაეცემა Union ტიპი, TS შლის მას და თითოეულ ელემენტს ცალ-ცალკე ამუშავებს, ხოლო ბოლოს მიღებულ შედეგებს ისევ აერთიანებს: `string | number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
        docLabel: "Distributive Conditional Types — Handbook"
    },
    {
        id: 279,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет определен для 'HeaderVal' при попытке вытащить тип конкретного заголовка из объекта конфигурации через infer?",
            en: "What configuration type is resolved for 'HeaderVal' when isolating a specific header dictionary property via an infer type signature lookup?",
            ka: "რა ტიპი განისაზღვრება 'HeaderVal'-სთვის კონფიგურაციის ობიექტიდან კონკრეტული ჰედერის (header) ტიპის infer-ით ამოღებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Config</span> = { headers: { <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span>, <span class="str">"Authorization"</span>: <span class="type">string</span> } };
<span class="kw">type</span> <span class="type">GetAuth</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> { headers: { <span class="str">"Authorization"</span>: <span class="kw">infer</span> <span class="type">A</span> } } ? <span class="type">A</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">HeaderVal</span> = <span class="type">GetAuth</span>&lt;<span class="type">Config</span>&gt;;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "application/json", en: "application/json", ka: "application/json" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор `infer` может погружаться на любую глубину вложенности объектов для поиска и извлечения типов. Шаблон `{ headers: { \"Authorization\": infer A } }` точечно сопоставляется со структурой `Config` и вытаскивает тип, привязанный к ключу `\"Authorization\"`, которым является обычный `string`.",
            en: "The `infer` system traverses down to any arbitrary depth of nested object structures to identify and pull signature types. Mapping the target layout captures the specific property nested key, evaluating `A` to `string`.",
            ka: "`infer` ოპერატორს შეუძლია ობიექტების ნებისმიერ სიღრმეში ჩასვლა ტიპების მოსაძებნად და ამოსაღებად. შაბლონი ზუსტად ემთხვევა `Config` სტრუქტურას და `\"Authorization\"` გასაღებიდან იღებს ტიპს, რომელიც არის `string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Deep Property Inference — Handbook"
    },
    {
        id: 280,
        category: { ru: "Advanced Types", en: "Advanced Types", ka: "Advanced ტიპები" },
        tag: "advanced",
        question: {
            ru: "Какой тип будет выведен для 'Res' при использовании infer для захвата параметров генератора (Generator)?",
            en: "What type is outputted for 'Res' when employing infer to extract the yields of a Generator function signature?",
            ka: "რა ტიპი მიენიჭება 'Res'-ს გენერატორის (Generator) პარამეტრების infer-ით ხელში ჩაგდებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">GetGenYield</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="type">Generator</span>&lt;<span class="kw">infer</span> <span class="type">Y</span>, <span class="type">any</span>, <span class="type">any</span>&gt; ? <span class="type">Y</span> : <span class="type">never</span>;
<span class="kw">type</span> <span class="type">MyGen</span> = <span class="type">Generator</span>&lt;<span class="type">number</span>, <span class="type">string</span>, <span class="type">boolean</span>&gt;;
<span class="kw">type</span> <span class="type">Res</span> = <span class="type">GetGenYield</span>&lt;<span class="type">MyGen</span>&gt;;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "boolean", en: "boolean", ka: "boolean" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Интерфейс `Generator<Y, Return, Next>` принимает три параметра дженерика. Первый параметр (`Y`) обозначает тип значений, которые генератор возвращает через оператор `yield`. Поскольку в утилите `GetGenYield` оператор `infer Y` стоит на первой позиции описания типа `Generator`, он успешно извлекает `number` из типа `MyGen`.",
            en: "The standard global `Generator<Y, Return, Next>` interface signature allocates three distinct parameters. The leading generic argument `Y` describes the yield format. Placing `infer Y` at the starting coordinate pulls the `number` type successfully.",
            ka: "`Generator<Y, Return, Next>` ინტერფეისი იღებს სამ ჯენერიკ პარამეტრს. პირველი პარამეტრი (`Y`) აღნიშნავს იმ მნიშვნელობების ტიპს, რომლებსაც გენერატორი აბრუნებს `yield` ოპერატორით. ვინაიდან `infer Y` პირველ პოზიციაზეა, ის წარმატებით ამოიღებს `number`-ს `MyGen` ტიპიდან."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#stricter-generators",
        docLabel: "Generator Type Parameters — Release Notes"
    },

    // === НОВЫЕ ТЕМЫ (21 - 28) ===

    // 15. KEYOF OPERATOR
    {
        id: 281,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Что вернет оператор keyof, примененный к интерфейсу?",
            en: "What does the keyof operator return when applied to an interface?",
            ka: "რას აბრუნებს keyof ოპერატორი ინტერფეისზე გამოყენებისას?"
        },
        code: `<span class="kw">interface</span> <span class="type">User</span> { id: <span class="type">number</span>; name: <span class="type">string</span>; }
<span class="kw">type</span> <span class="type">UserKeys</span> = <span class="kw">keyof</span> <span class="type">User</span>;`,
        options: [
            { ru: "Union строковых литералов: 'id' | 'name'", en: "A union of string literals: 'id' | 'name'", ka: "სტრიქონული ლიტერალების გაერთიანებას (Union): 'id' | 'name'" },
            { ru: "Массив строк ['id', 'name']", en: "A runtime array of strings ['id', 'name']", ka: "სტრიქონების მასივს ['id', 'name']" },
            { ru: "Тип данных string", en: "A general generic string type", ka: "ჩვეულებრივ string ტიპს" },
            { ru: "Объект со значениями типов полей", en: "An object mapped to the fields values", ka: "ობიექტს ველების ტიპების მნიშვნელობებით" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор 'keyof' принимает тип объекта и генерирует объединение (Union) его строковых или числовых литеральных ключей. В данном случае `keyof User` превращается в тип `'id' | 'name'`. Вариант с массивом неверен, поскольку система типов TS работает во время компиляции и никаких реальных массивов в JS-код не поставляет.",
            en: "The 'keyof' operator takes an object type and produces a string or numeric literal union of its keys. In this setup, `keyof User` yields exactly `'id' | 'name'`. It cannot yield a real runtime array because JavaScript engines do not evaluate type signatures in runtime.",
            ka: "'keyof' ოპერატორი იღებს ობიექტის ტიპს და აგენერირებს მისი გასაღებების სტრიქონულ ან რიცხვით ლიტერალების გაერთიანებას (Union). მოცემულ შემთხვევაში `keyof User` გადაიქცევა ტიპად `'id' | 'name'`. მასივის ვარიანტი არასწორია, რადგან ტიპების სისტემა მუშაობს მხოლოდ კომპილაციისას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
        docLabel: "Keyof Type Operator — Handbook"
    },
    {
        id: 282,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет выведен для 'RecordKeys' при применении keyof к типу Record с числовым индексом?",
            en: "What type is evaluated for 'RecordKeys' when applying keyof to a Record map featuring numeric index keys?",
            ka: "რა ტიპი განისაზღვრება 'RecordKeys'-სთვის keyof-ის გამოყენებისას ციფრული ინდექსის მქონე Record ტიპზე?"
        },
        code: `<span class="kw">type</span> <span class="type">NumericMap</span> = <span class="type">Record</span>&lt;<span class="type">number</span>, <span class="type">string</span>&gt;;
<span class="kw">type</span> <span class="type">RecordKeys</span> = <span class="kw">keyof</span> <span class="type">NumericMap</span>;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку `NumericMap` объявлен с ключами типа `number`, оператор `keyof` извлекает тип допустимых ключей этого объекта, возвращая непосредственно `number`. Если бы ключом был `string`, то вернулся бы тип `string | number` из-за особенностей поведения JavaScript, где числовые ключи приводятся к строкам.",
            en: "Since `NumericMap` specifies `number` as its key parameter, the `keyof` operator extracts the permitted key format, returning `number` directly.",
            ka: "ვინაიდან `NumericMap` გამოცხადებულია `number` ტიპის გასაღებებით, `keyof` ოპერატორი ამოიღებს ამ ობიექტის დასაშვები გასაღებების ტიპს და დააბრუნებს პირდაპირ `number`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
        docLabel: "Keyof and Index Signatures — Handbook"
    },
    {
        id: 283,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Что возвращает оператор keyof при обращении к объекту с явной строковой индексной сигнатурой (String Index Signature)?",
            en: "What does the keyof operator return when evaluated against an object type containing a explicit string index signature?",
            ka: "რას აბრუნებს keyof ოპერატორი სტრიქონული ინდექსური სიგნატურის (String Index Signature) მქონე ობიექტზე გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">StringDic</span> = { [key: <span class="type">string</span>]: <span class="type">boolean</span> };
<span class="kw">type</span> <span class="type">DicKeys</span> = <span class="kw">keyof</span> <span class="type">StringDic</span>;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "string | number | symbol", en: "string | number | symbol", ka: "string | number | symbol" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript строковая индексная сигнатура `{ [key: string]: any }` означает, что объект может принимать как строки, так и числа в качестве ключей (так как в JS `obj[1]` эквивалентно `obj['1']`). Поэтому `keyof` для такого объекта возвращает `string | number`.",
            en: "In TypeScript, a string index signature `{ [key: string]: any }` implies keys can be strings or numbers, because JavaScript automatically coerces numerical properties to string keys. Thus, `keyof` resolves to `string | number`.",
            ka: "TypeScript-ში სტრიქონული ინდექსური სიგნატურა ნიშნავს, რომ ობიექტს შეუძლია მიიღოს როგორც სტრიქონები, ისე რიცხვები გასაღებებად (რადგან JS-ში `obj[1]` იგივეა რაც `obj['1']`). ამიტომ `keyof` აბრუნებს `string | number`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Index Signatures — Handbook"
    },
    {
        id: 284,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет выведен для 'UnionKeys' при вычислении keyof от объединения (Union) двух типов?",
            en: "What type is evaluated for 'UnionKeys' when computing keyof on a Union of two distinct object types?",
            ka: "რა ტიპი განისაზღვრება 'UnionKeys'-სთვის ორი ტიპის გაერთიანებაზე (Union) keyof-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">A</span> = { id: <span class="type">number</span>; age: <span class="type">number</span>; };
<span class="kw">type</span> <span class="type">B</span> = { id: <span class="type">number</span>; name: <span class="type">string</span>; };
<span class="kw">type</span> <span class="type">UnionKeys</span> = <span class="kw">keyof</span> (<span class="type">A</span> | <span class="type">B</span>);`,
        options: [
            { ru: "'id' | 'age' | 'name'", en: "'id' | 'age' | 'name'", ka: "'id' | 'age' | 'name'" },
            { ru: "'id'", en: "'id'", ka: "'id'" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 1,
        explanation: {
            ru: "При применении `keyof` к объединению типов (`A | B`), TypeScript возвращает только те ключи, которые гарантированно присутствуют в **обоих** типах (пересечение множества ключей). Единственным общим свойством является `'id'`. Для получения всех возможных ключей объединения используется специальная конструкция вида `A | B` через дженерики.",
            en: "When applying `keyof` to a Union type (`A | B`), TypeScript only extracts keys that are strictly guaranteed to exist across **all** members of that union (the intersection of their keys). Only `'id'` fits this rule.",
            ka: "როდესაც `keyof` გამოიყენება ტიპების გაერთიანებაზე (`A | B`), TypeScript აბრუნებს მხოლოდ იმ გასაღებებს, რომლებიც გარანტირებულად არსებობს **ორივე** ტიპში. ერთადერთი საერთო თვისება არის `'id'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html",
        docLabel: "Keyof on Union Types — Release Notes"
    },
    {
        id: 285,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет выведен для 'IntersectKeys' при вычислении keyof от пересечения (Intersection) двух типов?",
            en: "What type is evaluated for 'IntersectKeys' when computing keyof on an Intersection of two distinct object types?",
            ka: "რა ტიპი განისაზღვრება 'IntersectKeys'-სთვის ორი ტიპის გადაკვეთაზე (Intersection) keyof-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">A</span> = { id: <span class="type">number</span>; };
<span class="kw">type</span> <span class="type">B</span> = { name: <span class="type">string</span>; };
<span class="kw">type</span> <span class="type">IntersectKeys</span> = <span class="kw">keyof</span> (<span class="type">A</span> & <span class="type">B</span>);`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "'id' | 'name'", en: "'id' | 'name'", ka: "'id' | 'name'" },
            { ru: "'id' & 'name'", en: "'id' & 'name'", ka: "'id' & 'name'" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 1,
        explanation: {
            ru: "Пересечение типов (`A & B`) создает объединенный тип, который содержит свойства обоих исходных типов. Соответственно, `keyof (A & B)` возвращает объединение (Union) всех ключей, присутствующих как в `A`, так и в `B`, что дает результат `'id' | 'name'`.",
            en: "An intersection type (`A & B`) forms a combined object structure presenting all properties from both types. Therefore, `keyof (A & B)` yields a total union of all fields from both types: `'id' | 'name'`.",
            ka: "ტიპების გადაკვეთა (`A & B`) ქმნის გაერთიანებულ ტიპს, რომელიც შეიცავს ორივე საწყისი ტიპის თვისებებს. შესაბამისად, `keyof (A & B)` აბრუნებს ყველა გასაღების გაერთიანებას (Union), რაც გვაძლევს `'id' | 'name'`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Keyof on Intersections — Handbook"
    },
    {
        id: 286,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Что произойдет, если применить оператор keyof к примитивному типу данных number?",
            en: "What specific literal values are generated if you apply the keyof operator to the primitive type 'number'?",
            ka: "რა მოხდება, თუ გამოვიყენებთ keyof ოპერატორს პრიმიტიულ მონაცემთა ტიპზე number?"
        },
        code: `<span class="kw">type</span> <span class="type">NumKeys</span> = <span class="kw">keyof</span> <span class="type">number</span>;`,
        options: [
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "Объединение методов прототипа Number (например, 'toFixed' | 'toExponential' | ...)", en: "A union of standard Number prototype methods (e.g., 'toFixed' | 'toExponential' | ...)", ka: "Number პროტოტიპის მეთოდების გაერთიანება (მაგალითად, 'toFixed' | 'toExponential' | ...)" },
            { ru: "Ошибка компиляции: примитивы не имеют ключей", en: "Compile error: primitive datatypes do not contain accessible property fields", ka: "კომპილაციის შეცდომა: პრიმიტივებს არ გააჩნიათ გასაღებები" }
        ],
        correct: 2,
        explanation: {
            ru: "В TypeScript примитивные типы ведут себя как их объектные обертки в JavaScript при доступе к свойствам. Поэтому `keyof number` возвращает Union-тип строковых литералов, соответствующих именам всех методов из встроенного интерфейса `Number` в глобальном контексте (таких как `'toFixed'`, `'toString'`, `'valueOf'` и т.д.).",
            en: "Primitive types wrap into their auto-boxed object counterparts when evaluated for attributes. Thus, `keyof number` yields a literal union representing all methods available on the global `Number` prototype schema (`'toFixed'`, `'toString'`, etc.).",
            ka: "TypeScript-ში პრიმიტიული ტიპები იქცევიან ისე, როგორც მათი შესაბამისი ობიექტური ობერტკები JS-ში თვისებებთან წვდომისას. ამიტომ `keyof number` აბრუნებს გლობალური `Number` ინტერფეისის ყველა მეთოდის სახელის გაერთიანებას (როგორიცაა `'toFixed'`, `'toString'` და ა.შ.)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
        docLabel: "Keyof on Primitives — Handbook"
    },
    {
        id: 287,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет назначен для переменной 'ArrayKeys' при вызове keyof от стандартного типа массива строк?",
            en: "What type blueprint represents 'ArrayKeys' when calling keyof against a standard string array type?",
            ka: "რა ტიპი მიენიჭება 'ArrayKeys' ცვლადს სტრიქონების მასივის ტიპზე keyof-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">ArrayKeys</span> = <span class="kw">keyof</span> <span class="type">string</span>[];`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "number | keyof string[] (включая методы 'length', 'push', 'pop' и т.д.)", en: "number | keyof string[] (including built-in array fields like 'length', 'push', 'pop', etc.)", ka: "number | keyof string[] (მასივის მეთოდების ჩათვლით, როგორიცაა 'length', 'push', 'pop' და ა.შ.)" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Массив в TypeScript имеет числовую индексную сигнатуру для доступа к элементам по индексам (`number`), а также содержит стандартные свойства и методы встроенного глобального интерфейса `Array<T>` (свойства `'length'`, методы `'push'`, `'map'` и т.д.). Поэтому `keyof string[]` содержит `number` объединенный со всеми литералами методов массива.",
            en: "An array type exposes a numerical index layout (`number`) along with all standard structural object properties belonging to the global `Array<T>` prototype definition (`'length'`, `'push'`, `'map'`, etc.).",
            ka: "TypeScript-ში მასივს გააჩნია ციფრული ინდექსური სიგნატურა ელემენტებზე წვდომისთვის (`number`), ასევე გლობალური `Array<T>` ინტერფეისის სტანდარტული თვისებები და მეთოდები (`'length'`, `'push'`, `'map'` და ა.შ.)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays",
        docLabel: "Array Types Key Evaluation — Handbook"
    },
    {
        id: 288,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой результат вернет оператор keyof, примененный к пустому объекту без прописанных свойств?",
            en: "What evaluation result occurs when applying the keyof operator to an empty object type structure?",
            ka: "რა შედეგს დააბრუნებს keyof ოპერატორი ცარიელ ობიექტზე გამოყენებისას, რომელსაც არ გააჩნია თვისებები?"
        },
        code: `<span class="kw">type</span> <span class="type">EmptyKeys</span> = <span class="kw">keyof</span> {};`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string | number | symbol", en: "string | number | symbol", ka: "string | number | symbol" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку тип `{}` представляет собой пустой объект, у которого нет собственных объявленных ключей, оператор `keyof` не находит элементов для включения в Union-тип. По правилам алгебры типов TypeScript, пустое множество ключей выражается типом `never`.",
            en: "Because the `{}` declaration signals an empty object with zero explicit property keys, the `keyof` query encounters an empty set of literal candidates. In the type system, an empty set of literals evaluates to `never`.",
            ka: "ვინაიდან `{}` წარმოადგენს ცარიელ ობიექტს, რომელსაც არ აქვს საკუთარი გამოცხადებული გასაღებები, `keyof` ოპერატორი ვერ პოულობს ელემენტებს გაერთიანებისთვის. TS-ის წესების მიხედვით, გასაღებების ცარიელი სიმრავლე გამოიხატება `never` ტიპით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
        docLabel: "Keyof on Empty Objects — Handbook"
    },
    {
        id: 289,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип данных будет возвращен при вызове keyof от типа any?",
            en: "What type resolution is generated when referencing keyof against the 'any' wildcard type?",
            ka: "რა მონაცემთა ტიპი დაბრუნდება any ტიპზე keyof-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">AnyKeys</span> = <span class="kw">keyof</span> <span class="type">any</span>;`,
        options: [
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string | number | symbol", en: "string | number | symbol", ka: "string | number | symbol" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 2,
        explanation: {
            ru: "Тип `any` представляет собой динамическое значение, которое может иметь абсолютно любые свойства. В TypeScript тип `keyof any` специально нормализован компилятором и возвращает базовое объединение всех возможных типов, которые могут выступать ключами JS-объектов: `string | number | symbol`.",
            en: "The wildcard `any` token bypasses compile restrictions and implies availability of any property. TypeScript treats `keyof any` as a special case, widening it to embrace all acceptable JavaScript key signatures: `string | number | symbol`.",
            ka: "`any` ტიპი წარმოადგენს დინამიურ მნიშვნელობას, რომელსაც შეიძლება ჰქონდეს აბსოლუტურად ნებისმიერი თვისება. TypeScript-ში `keyof any` სპეციალურად არის ნორმალიზებული და აბრუნებს ყველა შესაძლო გასაღების ტიპის გაერთიანებას: `string | number | symbol`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
        docLabel: "Keyof Any Resolution — Handbook"
    },
    {
        id: 290,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "К какому типу приведет вызов keyof от безопасного типа unknown?",
            en: "What type output is produced when running keyof on the strict type container 'unknown'?",
            ka: "რა ტიპს მივიღებთ უსაფრთხო unknown ტიპზე keyof-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">UnknownKeys</span> = <span class="kw">keyof</span> <span class="type">unknown</span>;`,
        options: [
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string | number | symbol", en: "string | number | symbol", ka: "string | number | symbol" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "Тип `unknown` является топ-типом и означает абсолютно неизвестное значение. TypeScript запрещает выполнять какие-либо операции со свойствами переменной типа `unknown` до тех пор, пока тип не будет сужен. Соответственно, у типа `unknown` нет заведомо доступных ключей, и `keyof unknown` всегда возвращает `never`.",
            en: "The `unknown` keyword represents an unrefined structure whose features cannot be interacted with until narrowed. Because it guarantees no safe accessible property keys up front, `keyof unknown` resolves directly to `never`.",
            ka: "`unknown` არის ტოპ-ტიპი, რომელიც აღნიშნავს აბსოლუტურად უცნობ მნიშვნელობას. TS კრძალავს ნებისმიერ ოპერაციას `unknown` ტიპის ცვლადის თვისებებზე მის დავიწროებამდე. შესაბამისად, მას არ გააჩნია წინასწარ ხელმისაწვდომი გასაღებები და `keyof unknown` ყოველთვის აბრუნებს `never`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
        docLabel: "Keyof Unknown Rules — Handbook"
    },
    {
        id: 291,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Что вернет keyof примененный к типу класса (для typeof ClassName), содержащего статические и нестатические методы?",
            en: "What parameters are collected by keyof when evaluating a class constructor reference (via typeof Class)?",
            ka: "რას აბრუნებს keyof კლასის ტიპზე გამოყენებისას (typeof ClassName), რომელიც შეიცავს სტატიკურ და არასტატიკურ მეთოდებს?"
        },
        code: `<span class="kw">class</span> <span class="type">Logger</span> {
    <span class="kw">static</span> <span class="kw">version</span> = <span class="str">"1.0"</span>;
    log(msg: <span class="type">string</span>): <span class="type">void</span> {}
}
<span class="kw">type</span> <span class="type">LoggerKeys</span> = <span class="kw">keyof</span> <span class="kw">typeof</span> <span class="type">Logger</span>;`,
        options: [
            { ru: "'log'", en: "'log'", ka: "'log'" },
            { ru: "'version' | 'prototype'", en: "'version' | 'prototype'", ka: "'version' | 'prototype'" },
            { ru: "'version' | 'log'", en: "'version' | 'log'", ka: "'version' | 'log'" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Конструкция `typeof Logger` запрашивает тип самой функции-конструктора класса (его статической части), а не тип экземпляра. Статическая часть класса содержит объявленные статические свойства (например, `'version'`) и обязательное встроенное свойство `'prototype'`. Метод экземпляра `'log'` находится внутри типа самого инстанса (просто `keyof Logger`).",
            en: "The keyword statement `typeof Logger` targets the class constructor entity (its static blueprint) instead of an instance. The static footprint includes explicit static fields (like `'version'`) and the default `'prototype'` literal property.",
            ka: "`typeof Logger` კონსტრუქცია ითხოვს თვითონ კლასის კონსტრუქტორ-ფუნქციის (მისი სტატიკური ნაწილის) ტიპს და არა ინსტანსის ტიპს. კლასის სტატიკური ნაწილი შეიცავს გამოცხადებულ სტატიკურ თვისებებს (`'version'`) და სავალდებულო ჩაშენებულ თვისებას `'prototype'`. ინსტანსის მეთოდი `'log'` არის უშუალოდ `keyof Logger`-ში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/classes.html#static-members",
        docLabel: "Static Type Evaluation — Handbook"
    },
    {
        id: 292,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет выведен для 'TupleKeys' при передаче строгого кортежа в оператор keyof?",
            en: "What specific literal keys are isolated for 'TupleKeys' when processing a defined fixed tuple through keyof?",
            ka: "რა ტიპი განისაზღვრება 'TupleKeys'-სთვის მკაცრი კორტეჟის keyof ოპერატორში გადაცემისას?"
        },
        code: `<span class="kw">type</span> <span class="type">TupleKeys</span> = <span class="kw">keyof</span> [<span class="type">string</span>, <span class="type">number</span>];`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "'0' | '1' | keyof any[] (включая методы массива)", en: "'0' | '1' | keyof any[] (including explicit array prototype methods)", ka: "'0' | '1' | keyof any[] (მასივის მეთოდების ჩათვლით)" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 2,
        explanation: {
            ru: "Кортеж в TypeScript — это подвид массива с фиксированным числом элементов на определенных позициях. Ключами доступа к его элементам являются строковые литералы индексов (`'0'` и `'1'`), а также все стандартные методы массивов (`'length'`, `'map'` и т.д.).",
            en: "A tuple is a specialized array with defined fixed item coordinates. Its index accessor properties resolve to string literals (`'0'` and `'1'`) in tandem with the baseline array prototype properties.",
            ka: "კორტეჟი არის მასივის სახესხვაობა ელემენტების ფიქსირებული რაოდენობით კონკრეტულ პოზიციებზე. მის ელემენტებზე წვდომის გასაღებებია ინდექსების სტრიქონული ლიტერალები (`'0'` და `'1'`), მასივის სტანდაртულ მეთოდებთან ერთად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Properties — Handbook"
    },
    {
        id: 293,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Каким образом извлечь тип конкретного свойства объекта, зная его ключ из набора keyof?",
            en: "How do you perform an indexed access lookup to extract a property type from an object using a key from a keyof union?",
            ka: "როგორ ამოვიღოთ ობიექტის კონკრეტული თვისების ტიპი, თუ ვიცით მისი გასაღები keyof სიმრავლიდან?"
        },
        code: `<span class="kw">interface</span> <span class="type">Product</span> { id: <span class="type">number</span>; title: <span class="type">string</span>; }
<span class="kw">type</span> <span class="type">TargetType</span> = <span class="type">Product</span>[<span class="str">"title"</span>];`,
        options: [
            { ru: "Использовать синтаксис обращения через квадратные скобки (Indexed Access Type)", en: "Utilize bracket syntax notation (Indexed Access Type)", ka: "კვადრატული ფრჩხილების გამოყენებით (Indexed Access Type)" },
            { ru: "Через оператор typeof: typeof Product.title", en: "Using a standard dot notation query: typeof Product.title", ka: "typeof ოპერატორის დახმარებით: typeof Product.title" },
            { ru: "С помощью утилиты Pick: Pick<Product, 'title'>", en: "Using the Pick utility wrapper: Pick<Product, 'title'>", ka: "Pick სერვისის საშუალებით: Pick<Product, 'title'>" },
            { ru: "Через двоеточие во внешнем интерфейсе", en: "By declaring a colon filter inside an outer template definition", ka: "ორწერტილის საშუალებით გარე ინტერფეისში" }
        ],
        correct: 0,
        explanation: {
            ru: "Для получения типа конкретного свойства по его ключу используется механизм **Indexed Access Types** (типы индексного доступа). Запись `Product[\"title\"]` вернет тип `string`. Использование `typeof Product.title` вызовет ошибку, так как `Product` — это тип, а не runtime-объект.",
            en: "To isolate a nested property's type signature using its key, TypeScript implements **Indexed Access Types**. Writing `Product[\"title\"]` returns `string` directly.",
            ka: "კონკრეტული თვისების ტიპის მისაღებად მისი გასაღებით გამოიყენება **Indexed Access Types** მექანიზმი. ჩანაწერი `Product[\"title\"]` დააბრუნებს `string`-ს. `typeof Product.title` გამოიწვევს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Indexed Access Types — Handbook"
    },
    {
        id: 294,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет выведен для дженерика 'K' в объявлении функции prop, гарантирующей безопасность обращения к ключам?",
            en: "What constraint is enforced on generic placeholder 'K' inside a type-safe object property getter function?",
            ka: "რა ტიპი განისაზღვრება 'K' ჯენერიკისთვის ფუნქციის გამოცხადებაში, რომელიც უზრუნველყოფს გასაღებებთან უსაფრთხო მუშაობას?"
        },
        code: `<span class="kw">function</span> getProp&lt;<span class="type">T</span>, <span class="type">K</span> <span class="kw">extends</span> <span class="kw">keyof</span> <span class="type">T</span>&gt;(obj: <span class="type">T</span>, key: <span class="type">K</span>) { <span class="kw">return</span> obj[key]; }`,
        options: [
            { ru: "K становится типом string", en: "K expands strictly into a plain string type", ka: "K ხდება string ტიპის" },
            { ru: "K ограничивается подмножеством ключей переданного объекта T", en: "K is constrained strictly to the subset union keys of the provided object T", ka: "K იზღუდება გადაცემული T ობიექტის გასაღებების ქვესიმრავლით" },
            { ru: "K превращается в тип any", en: "K transitions into a loose any blueprint type", ka: "K გადაიქცევა any ტიპად" },
            { ru: "K принимает значение типа never", en: "K is evaluated as a strict structural never parameter", ka: "K იღებს never ტიპის მნიშვნელობას" }
        ],
        correct: 1,
        explanation: {
            ru: "Выражение `K extends keyof T` накладывает ограничение на дженерик `K`. Оно указывает компилятору, что в качестве аргумента `key` может быть передан исключительно валидный ключ, существующий в объекте `T`. Это полностью исключает опечатки и попытки запросить несуществующее свойство.",
            en: "The syntax condition `K extends keyof T` sets a generic constraint. It guarantees that the parameter `key` accepts only string or numeric literal elements that actively exist on object `T`, mitigating runtime exceptions.",
            ka: "გამოსახულება `K extends keyof T` ადგენს შეზღუდვას `K` ჯენერიკზე. ის მიუთითებს კომპილატორს, რომ `key` არგუმენტად შეიძლება გადაეცეს მხოლოდ ის გასაღები, რომელიც რეალურად არსებობს `T` ობიექტში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints",
        docLabel: "Generic Constraints with Keyof — Handbook"
    },
    {
        id: 295,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет сгенерирован утилитой, если применить keyof к объекту, у которого часть свойств объявлены как необязательные (Optional)?",
            en: "What type is outputted by keyof when parsing an object architecture where multiple fields are marked as Optional via a question mark?",
            ka: "რა ტიპი დაგენერირდება სერვისის მიერ, თუ გამოვიყენებთ keyof-ს ობიექტზე, რომლის თვისებების ნაწილი არასავალდებულოა (Optional)?"
        },
        code: `<span class="kw">interface</span> <span class="type">Config</span> { id: <span class="type">string</span>; timeout?: <span class="type">number</span>; }
<span class="kw">type</span> <span class="type">ConfigKeys</span> = <span class="kw">keyof</span> <span class="type">Config</span>;`,
        options: [
            { ru: "'id'", en: "'id'", ka: "'id'" },
            { ru: "'id' | 'timeout'", en: "'id' | 'timeout'", ka: "'id' | 'timeout'" },
            { ru: "'id' | undefined", en: "'id' | undefined", ka: "'id' | undefined" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Флаг необязательности `?` добавляет `undefined` к возможному *значению* свойства (`number | undefined`), но сам по себе ключ остается частью структуры объекта. Поэтому `keyof` собирает все ключи, независимо от того, являются они обязательными или нет. Итоговый тип: `'id' | 'timeout'`.",
            en: "The optional modifier `?` appends `undefined` to the property's *value type space* (`number | undefined`), but the lookup identity name remains a member of the object. Hence, `keyof` registers it, yielding `'id' | 'timeout'`.",
            ka: "არასავალდებულოობის ნიშანი `?` უმატებს `undefined`-ს თვისების შესაძლო *მნიშვნელობას* (`number | undefined`), მაგრამ თვითონ გასაღები რჩება ობიექტის სტრუქტურის ნაწილად. ამიტომ `keyof` აგროვებს ყველა გასაღებს: `'id' | 'timeout'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties",
        docLabel: "Optional Properties Inference — Handbook"
    },
    {
        id: 296,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет назначен для 'Keys', если применить оператор keyof к объекту со свойствами типа symbol?",
            en: "What type is evaluated for 'Keys' when running the keyof operator on an object layout governed by unique symbol keys?",
            ka: "რა ტიპი მიენიჭება 'Keys'-ს, თუ გამოვიყენებთ keyof ოპერატორს symbol ტიპის თვისებების მქონე ობიექტზე?"
        },
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "typeof sym", en: "typeof sym", ka: "typeof sym" },
            { ru: "symbol", en: "symbol", ka: "symbol" }
        ],
        code: `<span class="kw">const</span> <span class="kw">sym</span> = <span class="type">Symbol</span>(<span class="str">"unique"</span>);
<span class="kw">type</span> <span class="type">WithSym</span> = { [sym]: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Keys</span> = <span class="kw">keyof</span> <span class="type">WithSym</span>;`,
        options: [
            { ru: "symbol", en: "symbol", ka: "symbol" },
            { ru: "typeof sym (уникальный тип константного символа)", en: "typeof sym (the unique literal signature of that exact symbol constant)", ka: "typeof sym (კონსტანტური სიმბოლოს უნიკალური ტიპი)" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку константа `sym` объявлена через `const`, она обладает своим уникальным литеральным типом `typeof sym`. При вызове `keyof WithSym` TypeScript извлекает этот точный идентификатор, возвращая `typeof sym`. Если бы свойство было описано общей сигнатурой `[key: symbol]`, то вернулся бы базовый тип `symbol`.",
            en: "Because the reference `sym` is a `const` allocation, it maintains a unique type token represented as `typeof sym`. Performing a `keyof` lookup references this exact token, outputting `typeof sym`.",
            ka: "ვინაიდან `sym` კონსტანტა გამოცხადებულია `const`-ით, მას გააჩნია თავისი უნიკალური ლიტერალური ტიპი `typeof sym`. `keyof WithSym`- ის გამოყენებისას TS ამოიღებს ამ ზუსტ იდენტიფიკატორს და დააბრუნებს `typeof sym`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#symbols",
        docLabel: "Symbol Keys with Keyof — Handbook"
    },
    {
        id: 297,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Что вернет оператор keyof для объекта, у которого все свойства имеют модификатор readonly?",
            en: "How does the readonly modifier on object properties affect the output produced by the keyof operator?",
            ka: "რას დააბრუნებს keyof ოპერატორი ობიექტზე, რომლის ყველა თვისებას აქვს readonly მოდიფიკატორი?"
        },
        code: `<span class="kw">interface</span> <span class="type">ImmutableUser</span> { <span class="kw">readonly</span> id: <span class="type">number</span>; <span class="kw">readonly</span> roles: <span class="type">string</span>[]; }
<span class="kw">type</span> <span class="type">Result</span> = <span class="kw">keyof</span> <span class="type">ImmutableUser</span>;`,
        options: [
            { ru: "'id' | 'roles'", en: "'id' | 'roles'", ka: "'id' | 'roles'" },
            { ru: "never (модификатор readonly блокирует чтение ключей)", en: "never (the readonly modifier locks property keys from compilation access queries)", ka: "never (readonly მოდიფიკატორი ბლოკავს გასაღებების წაკითხვას)" },
            { ru: "ReadonlyArray<'id' | 'roles'>", en: "ReadonlyArray<'id' | 'roles'>", ka: "ReadonlyArray<'id' | 'roles'>" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 0,
        explanation: {
            ru: "Модификатор `readonly` влияет только на возможность перезаписи значений полей объекта в коде, но никак не влияет на структуру самих ключей. Оператор `keyof` считывает имена полей в обычном режиме, возвращая объединение строковых литералов `'id' | 'roles'`.",
            en: "The `readonly` modifier strictly regulates mutation permissions for property values at development time; it does not alter key layouts. The `keyof` operator collects keys uniformly, returning `'id' | 'roles'`.",
            ka: "`readonly` მოდიფიკატორი გავლენას ახდენს მხოლოდ ობიექტის მნიშვნელობების შეცვლის უფლებაზე კოდში, მაგრამ არ ცვლის გასაღებების სტრუქტურას. `keyof` ოპერატორი ჩვეულებრივ კითხულობს ველების სახელებს და აბრუნებს `'id' | 'roles'`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties",
        docLabel: "Readonly Properties — Handbook"
    },
    {
        id: 298,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какой тип будет получен при сочетании операторов keyof и typeof для обычного JavaScript-объекта?",
            en: "What type is constructed when combining keyof and typeof sequentially to read a plain JavaScript object literal?",
            ka: "რა ტიპს მივიღებთ ჩვეულებრივ JavaScript ობიექტზე keyof და typeof ოპერატორების კომბინირებული გამოყენებისას?"
        },
        code: `<span class="kw">const</span> <span class="kw">theme</span> = { background: <span class="str">"#fff"</span>, color: <span class="str">"#000"</span> };
<span class="kw">type</span> <span class="type">ThemeKeys</span> = <span class="kw">keyof</span> <span class="kw">typeof</span> <span class="kw">theme</span>;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "'background' | 'color'", en: "'background' | 'color'", ka: "'background' | 'color'" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Ошибка: нельзя применять keyof к переменным из JavaScript", en: "Compile error: the keyof query cannot be applied to explicit JavaScript value nodes", ka: "შეცდომა: keyof-ის გამოყენება JavaScript ცვლადებზე დაუშვებელია" }
        ],
        correct: 1,
        explanation: {
            ru: "Ключевое слово `keyof` работает исключительно в пространстве типов и ожидает на вход тип данных. Переменная `theme` — это JS-значение. Чтобы получить её тип на этапе компиляции, мы сначала применяем оператор `typeof theme`, который возвращает анонимный тип `{ background: string, color: string }`. Затем `keyof` извлекает из него ключи `'background' | 'color'`.",
            en: "The `keyof` operator acts purely inside type spaces and demands a type parameter input. To examine the value instance `theme`, `typeof theme` is executed first to resolve its implicit type layer, allowing `keyof` to extract `'background' | 'color'`.",
            ka: "`keyof` ოპერატორი მუშაობს ექსკლუზიურად ტიპების სივრცეში და შეყვანაზე ელოდება ტიპს. `theme` ცვლადი არის JS მნიშვნელობა. მისი ტიპის მისაღებად ჯერ ვიყენებთ `typeof theme`-ს, რომელიც აბრუნებს ანონიმურ ტიპს, ხოლო შემდეგ `keyof` იღებს გასაღებებს: `'background' | 'color'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Typeof Type Operator — Handbook"
    },
    {
        id: 299,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Каким образом поведет себя компилятор, если применить keyof к пересечению типов, содержащих одинаковые ключи с разными типами данных?",
            en: "How does keyof evaluate an Intersection type where identical property keys are declared with competing data types?",
            ka: "როგორ მოიქცევა კომპილატორი, თუ გამოვიყენებთ keyof-ს ისეთი ტიპების გადაკвეთაზე (Intersection), რომლებიც შეიცავენ ერთნაირ გასაღებებს განსხვავებული მონაცემთა ტიპებით?"
        },
        code: `<span class="kw">type</span> <span class="type">X</span> = { shared: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Y</span> = { shared: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Keys</span> = <span class="kw">keyof</span> (<span class="type">X</span> & <span class="type">Y</span>);`,
        options: [
            { ru: "never (конфликт типов уничтожает ключ)", en: "never (competing type declarations neutralize the key presence entirely)", ka: "never (ტიპების კონფლიქტი აქრობს გასაღებს)" },
            { ru: "'shared'", en: "'shared'", ka: "'shared'" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "Ошибка компиляции", en: "Throws a hard compiler failure exception", ka: "კომპილაციის შეცდომა" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор `keyof` анализирует исключительно имена полей (ключи), а не типы их значений. Поскольку поле с именем `'shared'` присутствует в обеих частях пересечения, оно становится валидным ключом результирующего типа `X & Y`. Тип самого поля `shared` внутри пересечения преобразуется в `string & number` (что дает `never`), но сам ключ `'shared'` успешно извлекается.",
            en: "The `keyof` operator registers and builds unions from identifier field names, ignoring their underlying values. Since `'shared'` populates both objects, it resolves as a valid key. The value collapses to `string & number` (`never`), but the key `'shared'` remains valid.",
            ka: "`keyof` ოპერატორი აანალიზებს მხოლოდ ველების სახელებს (გასაღებებს) და არა მათ მნიშვნელობებს. ვინაიდან ველი სახელით `'shared'` არსებობს გადაკვეთის ორივე ნაწილში, ის ხდება საბოლოო ტიპის ვალიდური გასაღები. თვითონ ველის მნიშვნელობის ტიპი გახდება `string & number` (რაც იძლევა `never`-ს), მაგრამ გასაღები `'shared'` წარმატებით ამოიღება."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
        docLabel: "Property Intersection Evaluation — Handbook"
    },
    {
        id: 300,
        category: { ru: "Оператор keyof", en: "Keyof Operator", ka: "keyof ოპერატორი" },
        tag: "keyof-operators",
        question: {
            ru: "Какое ключевое слово используется совместно с оператором keyof для создания Маппированных Типов (Mapped Types) с целью обхода всех ключей объекта?",
            en: "Which loop instruction keyword matches with keyof to build Mapped Types by iterating over an object key index?",
            ka: "რა საკვანძო სიტყვა გამოიყენება keyof ოპერატორთან ერთად მაპირებული ტიპების (Mapped Types) შესაქმნელად ობიექტის ყველა გასაღების გადასავლელად?"
        },
        code: `<span class="kw">type</span> <span class="type">ReadonlyMapped</span>&lt;<span class="type">T</span>&gt; = { <span class="kw">readonly</span> [P <span class="kw">in</span> <span class="kw">keyof</span> <span class="type">T</span>]: <span class="type">T</span>[P] };`,
        options: [
            { ru: "extends", en: "extends", ka: "extends" },
            { ru: "in", en: "in", ka: "in" },
            { ru: "of", en: "of", ka: "of" },
            { ru: "infer", en: "infer", ka: "infer" }
        ],
        correct: 1,
        explanation: {
            ru: "Для итерации по набору ключей, сгенерированных оператором `keyof T`, внутри маппированных типов используется ключевое слово `in`. Конструкция `[P in keyof T]` последовательно перебирает каждый строковый литерал из множества ключей типа `T` и сопоставляет его с переменной типа `P`.",
            en: "To loop through a union profile generated via `keyof T`, mapped types demand the deployment of the `in` operator. The command structure `[P in keyof T]` acts like a compiler-level for-in loop over the literal property entries.",
            ka: "`keyof T` ოპერატორით დაგენერირებულ გასაღებებზე გადასასვლელად მაპირებულ ტიპებში (Mapped Types) გამოიყენება საკვანძო სიტყვა `in`. კონსტრუქცია `[P in keyof T]` სათითაოდ გადის `T` ტიპის ყველა გასაღებს და აფიქსირებს მას `P` ცვლადში."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
        docLabel: "Mapped Types — Handbook"
    },

    // 16. TYPEOF OPERATOR
    {
        id: 301,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "В чем разница между typeof в JavaScript и typeof в контексте типов TypeScript?",
            en: "What is the difference between JavaScript's typeof and TypeScript's type-context typeof?",
            ka: "რა არის განსხვავება JavaScript-ის typeof-სა და TypeScript-ის ტიპების კონტექსტის typeof-ს შორის?"
        },
        code: `<span class="kw">const</span> config = { port: <span class="num">8080</span> };
<span class="kw">type</span> <span class="type">ConfigType</span> = <span class="kw">typeof</span> config;`,
        options: [
            { ru: "TS-typeof извлекает структуру переменной на уровне типов, а JS-typeof возвращает строку в рантайме", en: "TS-typeof extracts variable structure as a static type, while JS-typeof returns a runtime string", ka: "TS-typeof იღებს ცვლადის სტრუქტურას ტიპების დონეზე, ხოლო JS-typeof აბრუნებს სტრიქონს runtime-ში" },
            { ru: "Они ничем не отличаются, это один и тот же оператор", en: "There is no difference, they are the exact same statement", ka: "ისინი არაფრით განსხვავდებიან, ეს ერთი და იგივე ოპერატორია" },
            { ru: "TS-typeof работает только внутри функций", en: "TS-typeof only operates inside function scopes", ka: "TS-typeof მუშაობს მხოლოდ ფუნქციების შიგნით" },
            { ru: "JS-typeof строже и безопаснее", en: "JS-typeof is stricter and safer than the TS version", ka: "JS-typeof უფრო მკაცრია და უსაფრთხოა" }
        ],
        correct: 0,
        explanation: {
            ru: "В JavaScript `typeof` выполняется в браузере или Node.js и возвращает базовую строку (например, `'object'`, `'string'`). В TypeScript `typeof` используется в контексте объявления типов, позволяя сослаться на форму реальной JS-переменной. Здесь `ConfigType` станет типом `{ port: number }`. Это избавляет от необходимости писать дублирующие интерфейсы для констант.",
            en: "In JavaScript, `typeof` runs in runtime and evaluates to basic keyword strings like `'object'`. In TypeScript type annotations, `typeof` intercepts a concrete variable name and duplicates its live structure into a static TS type definition. Here, `ConfigType` evaluates explicitly to `{ port: number }`.",
            ka: "JavaScript-ში `typeof` სრულდება ბრაუზერში ან Node.js-ში და აბრუნებს საბაზისო სტრიქონს (მაგ. `'object'`). TypeScript-ში კი `typeof` გამოიყენется ტიპების გამოცხადების კონტექსტში და საშუალებას გვაძლევს ავიღოთ რეალური JS ცვლადის ფორმა. აქ `ConfigType` გახდება ტიპი `{ port: number }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Typeof Type Operator — Handbook"
    },
    {
        id: 302,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип данных извлечет оператор typeof при обращении к обычной JavaScript-функции?",
            en: "What type blueprint does the typeof operator extract when targeting a standard JavaScript function declaration?",
            ka: "რა ტიპს ამოიღებს typeof ოპერატორი ჩვეულებრივი JavaScript ფუნქციის გამოძახებისას?"
        },
        code: `<span class="kw">function</span> greet(name: <span class="type">string</span>) { <span class="kw">return</span> <span class="str">"Hello "</span> + name; }
<span class="kw">type</span> <span class="type">FnType</span> = <span class="kw">typeof</span> greet;`,
        options: [
            { ru: "string (тип возвращаемого значения)", en: "string (the return value type matches directly)", ka: "string (დაბრუნებული მნიშვნელობის ტიპი)" },
            { ru: "Сигнатуру функции: (name: string) => string", en: "The full function signature format: (name: string) => string", ka: "ფუნქციის სრული სიგნატურა: (name: string) => string" },
            { ru: "string | Function", en: "string | Function", ka: "string | Function" },
            { ru: "Function (общий объект-конструктор JS)", en: "Function (the basic global JS Function constructor reference)", ka: "Function (საერთო JS კონსტრუქტორი)" }
        ],
        correct: 1,
        explanation: {
            ru: "При передаче функции в TypeScript-оператор `typeof`, компилятор считывает её полную сигнатуру: типы всех параметров и тип возвращаемого значения. В результате `FnType` будет равен `(name: string) => string`. Это позволяет переиспользовать структуру функции для коллбэков.",
            en: "When a function symbol is processed via TS `typeof`, the compiler resolves its full functional identity—tracking both parameter guards and the computed output type. Thus, `FnType` becomes exactly `(name: string) => string`.",
            ka: "როდესაც ფუნქცია გადაეცემა TS `typeof` ოპერატორს, კომპილატორი კითხულობს მის სრულ სიგნატურას: ყველა პარამეტრის ტიპსა და დაბრუნებული მნიშვნელობის ტიპს. შედეგად `FnType` იქნება `(name: string) => string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Typeof with Functions — Handbook"
    },
    {
        id: 303,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Что произойдет, если попытаться применить оператор typeof напрямую к результату вызова функции в пространстве типов?",
            en: "What happens if you attempt to apply the typeof operator directly to a function execution call within a type signature location?",
            ka: "რა მოხდება, თუ ვეცდებით typeof ოპერატორის პირდაპირ გამოყენებას ფუნქციის გამოძახების შედეგზე ტიპების სივრცეში?"
        },
        code: `<span class="kw">function</span> getData() { <span class="kw">return</span> { id: <span class="num">1</span> }; }
<span class="kw">type</span> <span class="type">DataType</span> = <span class="kw">typeof</span> getData();`,
        options: [
            { ru: "Тип DataType автоматически определится как { id: number }", en: "DataType automatically maps to the return object shape { id: number }", ka: "DataType ტიპი ავტომატურად განისაზღვრება როგორც { id: number }" },
            { ru: "Ошибка компиляции: оператор typeof может применяться только к идентификаторам или свойствам", en: "Compile error: the typeof operator must be applied only to identifiers or property accesses", ka: "კომპილაციის შეცდომა: typeof ოპერატორი შეიძლება გამოყენებულ იქნას მხოლოდ იდენტიფიკატორებზე ან თვისებებზე" },
            { ru: "DataType примет тип any", en: "DataType falls back dynamically to any", ka: "DataType მიიღებს any ტიპს" },
            { ru: "DataType превратится в тип void", en: "DataType evaluates into a void declaration", ka: "DataType გადაიქცევა void ტიპად" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript оператор `typeof` предназначен для извлечения типов существующих именованных сущностей (переменных, функций, классов, объектов). Вызов функции `getData()` — это выражение этапа выполнения (runtime expression). TypeScript запрещает применять `typeof` к вызовам функций. Для получения типа возвращаемого значения функции следует использовать встроенную утилиту `ReturnType<typeof getData>`.",
            en: "In TypeScript, `typeof` is restricted to operate directly on identifier tokens or valid property paths. Calling a function like `getData()` generates a runtime expression sequence. To safely inspect function return payloads, apply `ReturnType<typeof getData>` instead.",
            ka: "TypeScript-ში `typeof` ოპერატორი განკუთვნილია არსებული დასახელებული ერთეულების ტიპების ამოსაღებად. ფუნქციის გამოძახება `getData()` არის runtime გამოსახულება. TS კრძალავს `typeof`-ის გამოყენებას ფუნქციის გამოძახებებზე; ამისთვის გამოიყენება სერვისი `ReturnType<typeof getData>`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Typeof Constraints — Handbook"
    },
    {
        id: 304,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип будет извлечен для 'EnumShape' при использовании typeof к стандартному числовому TypeScript-enum?",
            en: "What type structural design is resolved for 'EnumShape' when applying typeof to a standard numeric TypeScript enum structure?",
            ka: "რა ტიპი განისაზღვრება 'EnumShape'-სთვის სტანდარტულ ციფრულ TypeScript-enum-ზე typeof-ის გამოყენებისას?"
        },
        code: `<span class="kw">enum</span> <span class="type">Direction</span> { Up, Down }
<span class="kw">type</span> <span class="type">EnumShape</span> = <span class="kw">typeof</span> <span class="type">Direction</span>;`,
        options: [
            { ru: "Up | Down (литералы значений)", en: "Up | Down (the raw value entries)", ka: "Up | Down (მნიშვნელობების ლიტერალები)" },
            { ru: "Объектный тип самого объекта перечисления (содержит ключи 'Up' и 'Down' и их обратные маппинги)", en: "An object representation of the enum container itself (featuring property mappings for 'Up' and 'Down' keys)", ka: "თვითონ გადათვლის ობიექტის ტიპი (შეიცავს გასაღებებს 'Up' და 'Down' და მათ უკუმაპირებებს)" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "string", en: "string", ka: "string" }
        ],
        correct: 1,
        explanation: {
            ru: "Сам по себе `enum` в рантайме превращается в реальный JavaScript-объект. Применение `typeof Direction` возвращает тип самого этого объекта-контейнера со всеми его свойствами (ключами `Up` и `Down`, а также числовыми индексами обратного маппинга). Если нужен тип конкретного элемента перечисления, мы пишем просто `Direction` без оператора `typeof`.",
            en: "A TypeScript `enum` compiles down into a concrete JavaScript object map. Executing `typeof Direction` references the type schema of that physical object collection. Using the bare token `Direction` without `typeof` accesses the type representing its enum members instead.",
            ka: "თვითონ `enum` runtime-ში იქცევა რეალურ JS ობიექტად. `typeof Direction`- ის გამოყენება აბრუნებს ამ კონტეინერ-ობიექტის ტიპს თავისი თვისებებით. თუ გვჭირდება კონკრეტული ელემენტის ტიპი, ვწერთ უბრალოდ `Direction`-ს `typeof`-ის გარეშე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
        docLabel: "Enum Typeof Evaluation — Handbook"
    },
    {
        id: 305,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Каким образом поведет себя typeof, если применить его к массиву, созданному с помощью 'as const' (const assertion)?",
            en: "How does the typeof operator behave when invoked against an array variable initialized with an 'as const' assertion?",
            ka: "როგორ მოიქცევა typeof ოპერატორი იმ მასივზე გამოყენებისას, რომელიც შექმნილია 'as const' (const assertion) მოდიфикаტორით?"
        },
        code: `<span class="kw">const</span> statusList = [<span class="str">"pending"</span>, <span class="str">"approved"</span>] <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">Statuses</span> = <span class="kw">typeof</span> statusList;`,
        options: [
            { ru: "string[] (обычный массив строк)", en: "string[] (a mutable string array)", ka: "string[] (სტრიქონების ჩვეულებრივი მასივი)" },
            { ru: "readonly ['pending', 'approved'] (строгий немутируемый кортеж литералов)", en: "readonly ['pending', 'approved'] (a read-only strict literal tuple layout)", ka: "readonly ['pending', 'approved'] (ლიტერალების მკაცრი უცვლელი კორტეჟი)" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "'pending' | 'approved'", en: "'pending' | 'approved'", ka: "'pending' | 'approved'" }
        ],
        correct: 1,
        explanation: {
            ru: "Инструкция `as const` фиксирует структуру объекта или массива, делая её литеральной и неизменяемой. Без `as const` оператор `typeof statusList` вернул бы тип `string[]`. Благодаря утверждению константности, TypeScript выводит максимально точный тип: `readonly [\"pending\", \"approved\"]`.",
            en: "The `as const` assertion locks literal values into precise immutable snapshots. Without it, `typeof statusList` defaults to `string[]`. With it active, TypeScript evaluates the exact read-only literal tuple: `readonly [\"pending\", \"approved\"]`.",
            ka: "`as const` ინსტრუქცია აფიქსირებს ობიექტის ან მასივის სტრუქტურას, ხდის მას ლიტერალურსა და უცვლელს. მის გარეშე `typeof statusList` დააბრუნებდა `string[]`-ს. `as const`- ის წყალობით TS აბრუნებს ზუსტ ტიპს: `readonly [\"pending\", \"approved\"]`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Assertions with Typeof — Handbook"
    },
    {
        id: 306,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Каким образом извлечь тип элементов из массива констант с помощью комбинации typeof и индексации?",
            en: "How do you extract a union of individual item values from a const-asserted array using a combination of typeof and indexed access rules?",
            ka: "როგორ ამოვიღოთ ელემენტების ტიპი კონსტანტების მასივიდან typeof-ისა და ინდექსაციის კომბინაციით?"
        },
        code: `<span class="kw">const</span> roles = [<span class="str">"admin"</span>, <span class="str">"user"</span>] <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">Role</span> = <span class="kw">typeof</span> roles[<span class="type">number</span>];`,
        options: [
            { ru: "Role примет тип number", en: "Role evaluates strictly into a number primitive", ka: "Role მიიღებს number ტიპს" },
            { ru: "Role примет тип 'admin' | 'user'", en: "Role evaluates into the literal union 'admin' | 'user'", ka: "Role მიიღებს ტიპს 'admin' | 'user'" },
            { ru: "Role примет тип string[]", en: "Role evaluates into a generic string array representation", ka: "Role მიიღებს string[] ტიპს" },
            { ru: "Произойдет синтаксическая ошибка", en: "Triggers a structural syntax failure", ka: "მოხდება სინტაქსური შეცდომა" }
        ],
        correct: 1,
        explanation: {
            ru: "Комбинация `typeof roles[number]` сначала вычисляет тип массива (`readonly [\"admin\", \"user\"]`), а затем с помощью числового индексатора `[number]` извлекает типы всех возможных элементов этого массива. В результате получается Union-тип строковых литералов: `\"admin\" | \"user\"`.",
            en: "The combination `typeof roles[number]` instructs TypeScript to read the frozen tuple structure, and then applies the numeric lookup token `[number]` to iterate across all indexed values, yielding the union: `\"admin\" | \"user\"`.",
            ka: "`typeof roles[number]` კომბინაცია ჯერ ითვლის მასივის ტიპს (`readonly [\"admin\", \"user\"]`), ხოლო შემდეგ ციფრული ინდექსატორის `[number]` დახმარებით ამოაქვს ამ მასივის ყველა შესაძლო ელემენტის ტიპი. შედეგად მიიღება: `\"admin\" | \"user\"`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Indexed Access with Typeof — Handbook"
    },
    {
        id: 307,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Что вернет оператор typeof, если применить его к имени объявленного класса (без typeof перед словом class)?",
            en: "What entity profile is extracted by keyof/typeof patterns when referencing a bare Class constructor identifier?",
            ka: "რას დააბრუნებს typeof ოპერატორი, თუ მას გამოვიყენებთ გამოცხადებული კლასის სახელზე (სიტყვა class-ის წინ typeof-ის გარეშე)?"
        },
        code: `<span class="kw">class</span> <span class="type">UserService</span> { id = <span class="num">1</span>; }
<span class="kw">type</span> <span class="type">ServiceType</span> = <span class="kw">typeof</span> <span class="type">UserService</span>;`,
        options: [
            { ru: "Тип экземпляра класса { id: number }", en: "The class instance shape blueprint: { id: number }", ka: "კლასის ინსტანსის ტიპი: { id: number }" },
            { ru: "Тип самой функции-конструктора класса (со свойством prototype)", en: "The actual type of the class constructor function itself (including its prototype property properties)", ka: "თვითონ კლასის კონსტრუქტორ-ფუნქციის ტიპი (prototype თვისებით)" },
            { ru: "Function", en: "Function", ka: "Function" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "В TypeScript имя класса `UserService` само по себе является типом его *экземпляра*. Если мы хотим сослаться на тип самого класса (функции-конструктора, статической части), мы должны написать `typeof UserService`. Это критично, например, при реализации фабрик классов или передаче конструкторов в аргументы.",
            en: "In TypeScript, a raw class name identifier like `UserService` represents the shape of its *instance*. To refer to the constructor function structure itself, you must append `typeof UserService`.",
            ka: "TypeScript-ში კლასის სახელი `UserService` თავისთავად წარმოადგენს მისი *ინსტანსის* ტიპს. თუ გვინდა მივუთითოთ თვითონ კლასის (კონსტრუქტორ-ფუნქციის, სტატიკური ნაწილის) ტიპი, უნდა დავწეროთ `typeof UserService`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/classes.html",
        docLabel: "Class Constructor Typeof — Handbook"
    },
    {
        id: 308,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип будет назначен для переменной 'LetType' при использовании typeof к переменной, объявленной через let без явного типа?",
            en: "What type behavior is assigned to 'LetType' when applying typeof to a mutable variable initialized via let without an explicit type signature?",
            ka: "რა ტიპი მიენიჭება 'LetType' ცვლადს let-ით გამოცხადებულ ცვლადზე (რომელსაც არ აქვს მითითებული ტიპი) typeof-ის გამოყენებისას?"
        },
        code: `<span class="kw">let</span> message = <span class="str">"hello"</span>;
<span class="kw">type</span> <span class="type">LetType</span> = <span class="kw">typeof</span> message;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "'hello' (литеральный тип)", en: "'hello' (the exact literal string definition)", ka: "'hello' (ლიტერალური ტიპი)" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 0,
        explanation: {
            ru: "Переменные, объявленные через `let`, могут менять свое значение в будущем. Поэтому TypeScript выполняет автоматическое расширение типов (type widening). Значение `\"hello\"` расширяется до базового примитивного типа `string`. Оператор `typeof` считает этот расширенный тип, возвращая `string`.",
            en: "Variables introduced using `let` are mutable and subject to type widening. Consequently, the initial value `\"hello\"` widens into the base primitive `string`. The `typeof` operator captures this widened type, returning `string`.",
            ka: "`let`-ით გამოცხადებულ ცვლადებს შეუძლიათ მნიშვნელობის შეცვლა მომავალში. ამიტომ TS ახდენს ტიპის ავტომატურ გაფართოებას (type widening). მნიშვნელობა `\"hello\"` ფართოვდება საბაზისო პრიმიტიულ ტიპამდე `string`. შესაბამისად, `typeof` დააბრუნებს `string`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-inference",
        docLabel: "Type Widening and Typeof — Handbook"
    },
    {
        id: 309,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип извлечет оператор typeof из переменной, объявленной через const с примитивным значением?",
            en: "What type is evaluated by the typeof operator when reading a primitive constant initialized via const?",
            ka: "რა ტიპს ამოიღებს typeof ოპერატორი const-ით გამოცხადებული პრიმიტიული ცვლადიდან?"
        },
        code: `<span class="kw">const</span> statusId = <span class="num">101</span>;
<span class="kw">type</span> <span class="type">StatusIdType</span> = <span class="kw">typeof</span> statusId;`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "101 (строгий литеральный тип числа)", en: "101 (the exact strict numeric literal type)", ka: "101 (რიცხვის მკაცრი ლიტერალური ტიპი)" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку переменная объявлена через `const`, её значение гарантированно не изменится. В этом случае TypeScript не расширяет тип до `number`, а выводит максимально строгий литеральный тип значения. Таким образом, `typeof statusId` возвращает тип `101`.",
            en: "Because the target asset is declared with `const`, its value is frozen at compile time. TypeScript avoids type widening to `number` and creates a strict literal numeric definition. Hence, `typeof statusId` resolves to `101`.",
            ka: "ვინაიდან ცვლადი გამოცხადებულია `const`-ით, მისი მნიშვნელობა გარანტირებულად არ შეიცვლება. ამ შემთხვევაში TS არ აფართოებს ტიპს `number`-მდე, არამედ გამოაქვს მნიშვნელობის მაქსიმალურად მკაცრი ლიტერალური ტიპი. შესაბამისად, `typeof statusId` აბრუნებს ტიპს `101`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types",
        docLabel: "Literal Inference on Const — Handbook"
    },
    {
        id: 310,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Допускается ли использование оператора typeof совместно с утилитными типами, такими как Partial или Pick?",
            en: "Can the typeof operator be fed directly as a type parameter argument into utility types like Partial or Pick?",
            ka: "დაშვებულია თუ არა typeof ოპერატორის გამოყენება ისეთ სერვის ტიპებთან ერთად, როგორიცაა Partial ან Pick?"
        },
        code: `<span class="kw">const</span> user = { id: <span class="num">1</span>, name: <span class="str">"Alice"</span> };
<span class="kw">type</span> <span class="type">PartialUser</span> = <span class="type">Partial</span>&lt;<span class="kw">typeof</span> user&gt;;`,
        options: [
            { ru: "Да, это полностью валидный синтаксис", en: "Yes, this represents fully valid and common utility syntax", ka: "დიახ, ეს აბსოლუტურად ვალიდური სინტაქსია" },
            { ru: "Нет, утилиты принимают только чистые интерфейсы", en: "No, utility wrappers accept pure interface identifiers only", ka: "არა, სერვისები იღებენ მხოლოდ სუფთა ინტერფეისებს" },
            { ru: "Нет, это вызовет ошибку во время выполнения JavaScript", en: "No, this operation triggers a critical exception during runtime execution", ka: "არა, ეს გამოიწვევს შეცდომას JS-ის მუშაობისას" },
            { ru: "Да, но только если объект объявлен с экспортом", en: "Yes, but only provided the target object carries an export token", ka: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ობიექტი გამოცხადებულია ექსპორტით" }
        ],
        correct: 0,
        explanation: {
            ru: "Это частый паттерн в TypeScript. Оператор `typeof user` извлекает тип объекта `{ id: number, name: string }` прямо в аргументе дженерика. Затем утилита `Partial` делает все свойства этого извлеченного типа необязательными. Код компилируется без ошибок.",
            en: "This is a standard pattern. `typeof user` successfully converts the object payload structure into a dynamic type configuration `{ id: number, name: string }`, which `Partial` maps into optional variables. No errors are reported.",
            ka: "ეს არის ხშირი პატერნი TypeScript-ში. `typeof user` ოპერატორი ამოიღებს ობიექტის ტიპს `{ id: number, name: string }` პირდაპირ ჯენერიკის არგუმენტში. შემდეგ `Partial` სერვისი ამ ტიპის ყველა თვისებას ხდის არასავალდებულოდ."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/utility-types.html",
        docLabel: "Utility Types Integration — Handbook"
    },
    {
        id: 311,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Что произойдет при попытке применить оператор typeof к объекту, импортированному как значение, для использования в аннотации типа переменной?",
            en: "What type layer behavior occurs when executing typeof against an external runtime value object imported from another module?",
            ka: "რა მოხდება, თუ ვეცდებით typeof ოპერატორის გამოყენებას სხვა მოდულიდან მნიშვნელობის სახით იმპორტირებულ ობიექტზე ტიპის ანოტაციაში?"
        },
        code: `<span class="kw">import</span> { defaultSettings } <span class="kw">from</span> <span class="str">"./settings"</span>;
<span class="kw">const</span> customSettings: <span class="kw">typeof</span> defaultSettings = { theme: <span class="str">"dark"</span> };`,
        options: [
            { ru: "Это валидная операция, TypeScript извлечет структуру импортированного объекта", en: "This is a valid action; TypeScript safely maps the structure of the imported variable", ka: "ეს ვალიდური ოპერაციაა, TS ამოიღებს იმპორტირებული ობიექტის სტრუქტურას" },
            { ru: "Ошибка компиляции: нельзя использовать typeof для импортированных сущностей", en: "Compile error: you cannot pass imported external values into the typeof operator", ka: "კომპილაციის შეცდომა: იმპორტირებულ ერთეულებზე typeof-ის გამოყენება დაუშვებელია" },
            { ru: "Импорт автоматически превратится в type-only импорт", en: "The statement converts implicitly into a type-only module import declaration", ka: "იმპორტი ავტომატურად გადაიქცევა type-only იმპორტად" },
            { ru: "Тип будет принудительно определен как any", en: "The target attribute defaults strictly to any", ka: "ტიპი იძულებით განისაზღვრება როგორც any" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript умеет анализировать структуру импортированных JavaScript-значений. Оператор `typeof defaultSettings` считывает форму внешнего объекта на этапе сборки и применяет её как тип для переменной `customSettings`. Это безопасный способ типизации.",
            en: "TypeScript handles type inferences across separate file modules. Applying `typeof defaultSettings` parses the layout of the external object literal during compilation and validates `customSettings` safely.",
            ka: "TypeScript-ს შეუძლია სხვა მოდულებიდან იმპორტირებული JS მნიშვნელობების სტრუქტურის გაანალიზება. `typeof defaultSettings` ოპერატორი კითხულობს გარე ობიექტის ფორმას კომპილაციის ეტაპზე და იყენებს მას `customSettings` ცვლადის ტიპად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/modules.html",
        docLabel: "Modules and Type Inferences — Handbook"
    },
    {
        id: 312,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип будет определен для 'PropType' при получении типа глубоко вложенного свойства объекта с помощью typeof?",
            en: "What type profile resolves for 'PropType' when executing a dot-notated property route sequence under a typeof context?",
            ka: "რა ტიპი განისაზღვრება 'PropType'-სთვის ობიექტის ღრმად ჩასმული თვისების ტიპის typeof-ით მიღებისას?"
        },
        code: `<span class="kw">const</span> app = { data: { config: { active: <span class="kw">true</span> } } };
<span class="kw">type</span> <span class="type">PropType</span> = <span class="kw">typeof</span> app.data.config;`,
        options: [
            { ru: "{ active: boolean }", en: "{ active: boolean }", ka: "{ active: boolean }" },
            { ru: "boolean", en: "boolean", ka: "boolean" },
            { ru: "Ошибка: оператор typeof не поддерживает цепочки через точку", en: "Compile error: the typeof operator does not support extended nested dot-notation chains", ka: "შეცდომა: typeof ოპერატორი არ უჭერს მხარს წერტილოვან ჯაჭვებს" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript оператор `typeof` поддерживает цепочки обращений к свойствам через точку (`app.data.config`). Компилятор проходит по указанному пути реального объекта и извлекает тип конечного узла. В данном случае результатом будет подтип `{ active: boolean }`.",
            en: "In TypeScript, the `typeof` statement supports standard dot-notation object property routing paths (`app.data.config`). The compiler resolves the sequence path statically, isolating the target structural block: `{ active: boolean }`.",
            ka: "TypeScript-ში `typeof` ოპერატორი მხარს უჭერს თვისებებზე წვდომის წერტილოვან ჯаჭვებს (`app.data.config`). კომპილატორი მიჰყვება რეალური ობიექტის მითითებულ გზას და ამოაქვს ბოლო კვანძის ტიპი. ამ შემთხვევაში შედეგი იქნება `{ active: boolean }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Property Path Inferences — Handbook"
    },
    {
        id: 313,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Можно ли применить оператор typeof к выражению с квадратными скобками для вычисления динамического свойства рантайм-объекта?",
            en: "Is it valid to include dynamic bracket variable access syntax inside a compile-time typeof query expression?",
            ka: "შესაძლებელია თუ არა typeof ოპერატორის გამოყენება კვადრატული ფრჩხილების მქონе გამოსახულებაზე рантаიმ-ობიექტის დინამიური თვისების გამოსათვლელად?"
        },
        code: `<span class="kw">const</span> obj = { env_prod: <span class="str">"production"</span>, env_dev: <span class="str">"development"</span> };
<span class="kw">const</span> key = <span class="str">"env_prod"</span>;
<span class="kw">type</span> <span class="type">EnvType</span> = <span class="kw">typeof</span> obj[key];`,
        options: [
            { ru: "Ошибка компиляции: оператор typeof в контексте типов принимает только идентификаторы и цепочки через точку", en: "Compile error: the type-context typeof operator only permits fixed identifier chains and dot notations", ka: "კომპილაციის შეცდომა: typeof ოპერატორი ტიპების კონტექსტში იღებს მხოლოდ იდენტიფიკატორებსა და წერტილოვან ჯაჭვებს" },
            { ru: "Да, EnvType станет типом 'production'", en: "Yes, EnvType resolves perfectly to the literal type 'production'", ka: "დიახ, EnvType გახდება ტიპი 'production'" },
            { ru: "Да, EnvType примет общий тип string", en: "Yes, EnvType resolves successfully into a plain string type", ka: "დიახ, EnvType მიიღებს საერთო string ტიპს" },
            { ru: "EnvType примет значение типа unknown", en: "EnvType cascades into an unknown variable fallback", ka: "EnvType მიიღებს unknown ტიპის მნიშვნელობას" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript оператор `typeof` в позиции объявления типа умышленно ограничен. Он может принимать только имена переменных или цепочки свойств через точку. Использование квадратных скобок с динамической переменной `obj[key]` запрещено на этапе компиляции, поскольку компилятор не выполняет JS-код.",
            en: "TypeScript purposely restricts the grammar allowed inside a type-space `typeof` call. It only tolerates variable labels or dot-notation routes. Mixing dynamic runtime variables in bracket notation like `obj[key]` causes a compiler error.",
            ka: "TypeScript-ში `typeof` ოპერატორი ტიპის გამოცხადების პოზიციაში შეზღუდულია. მას შეუძლია მიიღოს მხოლოდ ცვლადების სახელები ან თვისებების წერტილოვანი ჯაჭვები. კვადრატული ფრჩხილების გამოყენება დინამიურ ცვლადთან `obj[key]` აკრძალულია კომპილაციის ეტაპზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Grammar Restrictions on Typeof — Handbook"
    },
    {
        id: 314,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Какой тип будет получен, если применить typeof к объекту, свойства которого инициализированы null или undefined без явного указания типа?",
            en: "What specific type definitions are assigned when executing typeof against an object containing properties initially set to null or undefined?",
            ka: "რა ტიპი მიიღება, თუ გამოვიყენებთ typeof-ს ობიექტზე, რომლის თვისებებიც ინიციალიზებულია null ან undefined-ით ტიპის პირდაპირი მითითების გარეше?"
        },
        code: `<span class="kw">const</span> state = { data: <span class="kw">null</span>, error: <span class="kw">undefined</span> };
<span class="kw">type</span> <span class="type">StateType</span> = <span class="kw">typeof</span> state;`,
        options: [
            { ru: "{ data: any, error: any }", en: "{ data: any, error: any }", ka: "{ data: any, error: any }" },
            { ru: "{ data: null, error: undefined }", en: "{ data: null, error: undefined }", ka: "{ data: data: null, error: undefined }" },
            { ru: "{ data: unknown, error: unknown }", en: "{ data: unknown, error: unknown }", ka: "{ data: unknown, error: unknown }" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Для констант (`const`), содержащих значения `null` или `undefined`, TypeScript выводит их точные литеральные типы `null` и `undefined` соответственно (при включенном флаге `strictNullChecks`). Таким образом, `typeof state` возвращает объектную структуру `{ data: null, error: undefined }`.",
            en: "For explicit literal properties allocated within a `const` block, TypeScript preserves their exact identities as `null` and `undefined` types (assuming `strictNullChecks` is true). `typeof state` resolves strictly to `{ data: null, error: undefined }`.",
            ka: "კონსტანტებისთვის (`const`), რომლებიც შეიცავენ `null` ან `undefined` მნიშვნელობებს, TS გამოაქვს მათი ზუსტი ლიტერალური ტიპები `null` და `undefined` (როდესაც ჩართულია `strictNullChecks`). შესაბამისად, `typeof state` დააბრუნებს `{ data: null, error: undefined }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined",
        docLabel: "Strict Null/Undefined Inferences — Handbook"
    },
    {
        id: 315,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Каким образом извлечь тип конструктора класса, чтобы создать фабричную функцию, принимающую сам класс?",
            en: "How do you define a type guard parameter for a factory function that safely accepts a class constructor template?",
            ka: "როგორ ამოვიღოთ კლასის კონსტრუქტორის ტიპი ფაბრიკული ფუნქციის შესაქმნელად, რომელიც პარამეტრად იღებს თვითონ კლასს?"
        },
        code: `<span class="kw">class</span> <span class="type">Hero</span> {}
<span class="kw">function</span> createInstance(ClassRef: <span class="kw">typeof</span> <span class="type">Hero</span>) { <span class="kw">return</span> <span class="kw">new</span> ClassRef(); }`,
        options: [
            { ru: "Использовать имя класса без операторов: ClassRef: Hero", en: "Use the raw class name token without modifiers: ClassRef: Hero", ka: "კლასის სახელის გამოყენება ოპერატორების გარეშე: ClassRef: Hero" },
            { ru: "Использовать оператор typeof перед именем класса: ClassRef: typeof Hero", en: "Prepend the typeof operator onto the class identifier: ClassRef: typeof Hero", ka: "typeof ოპერატორის გამოყენება კლასის სახელის წინ: ClassRef: typeof Hero" },
            { ru: "Использовать InstanceType<Hero>", en: "Deploy the InstanceType utility wrapper: InstanceType<Hero>", ka: "InstanceType<Hero>-ის გამოყენება" },
            { ru: "Передать строку: ClassRef: 'Hero'", en: "Enforce a string literal validation: ClassRef: 'Hero'", ka: "სტრიქონის გადაცემა: ClassRef: 'Hero'" }
        ],
        correct: 1,
        explanation: {
            ru: "Поскольку `ClassRef` принимает ссылку на сам класс (функцию-конструктор), её типом должен выступать статический тип класса. Чтобы получить его, пишется `typeof Hero`. Если написать просто `ClassRef: Hero`, TypeScript будет ожидать уже созданный инстанс (объект) класса, и вызов `new ClassRef()` приведет к ошибке.",
            en: "Because `ClassRef` requires a reference to the constructor template itself, it must match the static class interface. This is fetched via `typeof Hero`. Typing `ClassRef: Hero` implies passing an already instantiated object.",
            ka: "ვინაიდან `ClassRef` იღებს თვითონ კლასის (კონსტრუქტორ-ფუნქციის) ლინკს, მის ტიპად უნდა გამოდიოდეს კლასის სტატიკური ტიპი. მის მისაღებად იწერება `typeof Hero`. უბრალოდ `ClassRef: Hero`-ს ჩაწერისას TS დაელოდება უკვე შექმნილ ინსტანსს და `new ClassRef()` გამოიწვევს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/classes.html#static-members",
        docLabel: "Constructors and Typeof — Handbook"
    },
    {
        id: 316,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Что вернет оператор typeof в TypeScript, если применить его к переменной, имеющей тип any?",
            en: "What type resolution is achieved when running typeof against a variable explicitly annotated with the any wildcard?",
            ka: "რას დააბრუნებს typeof ოპერატორი TypeScript-ში, თუ მას გამოვიყენებთ any ტიპის მქონე ცვლადზე?"
        },
        code: `<span class="kw">let</span> dynamicData: <span class="type">any</span> = { age: <span class="num">30</span> };
<span class="kw">type</span> <span class="type">ExtractedType</span> = <span class="kw">typeof</span> dynamicData;`,
        options: [
            { ru: "{ age: number }", en: "{ age: number }", ka: "{ age: number }" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "object", en: "object", ka: "object" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 1,
        explanation: {
            ru: "Оператор `typeof` в контексте типов TypeScript анализирует исключительно статический тип переменной, известный компилятору, а не реальное рантайм-содержимое объекта. Поскольку `dynamicData` явно аннотирован как `any`, `typeof dynamicData` возвращает исходный тип `any`.",
            en: "The type-space `typeof` operator operates on compile-time static annotations rather than parsing evaluation layers in runtime. Since `dynamicData` is bounded to `any`, its `typeof` reflection outputs `any`.",
            ka: "TS-ის ტიპების კონტექსტში `typeof` ოპერატორი აანალიზებს ექსკლუზიურად ცვლადის სტატიკურ ტიპს, რომელიც ცნობილია კომპილატორისთვის, და არა რეალურ runtime შიგთავსს. ვინაიდან `dynamicData` ანოტირებულია როგორც `any`, `typeof dynamicData` დააბრუნებს საწყის `any` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Static Type Tracking — Handbook"
    },
    {
        id: 317,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Каким образом извлечь тип сложного стрелочного метода из рантайм-объекта с сохранением его параметров через typeof?",
            en: "How do you capture the functional signature of a nested arrow method inside an object variable using typeof?",
            ka: "როგორ ამოვიღოთ რთული ისრული მეთოდის (arrow method) ტიპი runtime ობიექტიდან მისი პარამეტრების შენარჩუნებით typeof-ის საშუალებით?"
        },
        code: `<span class="kw">const</span> api = { handler: (id: <span class="type">number</span>) => <span class="kw">true</span> };
<span class="kw">type</span> <span class="type">HandlerFn</span> = <span class="kw">typeof</span> api.handler;`,
        options: [
            { ru: "HandlerFn примет тип (id: number) => boolean", en: "HandlerFn evaluates exactly to the type (id: number) => boolean", ka: "HandlerFn მიიღებს ტიპს (id: number) => boolean" },
            { ru: "HandlerFn примет тип boolean", en: "HandlerFn collapses into a plain boolean type description", ka: "HandlerFn მიიღებს boolean ტიპს" },
            { ru: "Ошибка: нельзя читать типы функций из литералов объектов", en: "Compile error: parsing sub-nested function nodes from object items is invalid", ka: "შეცდომა: ობიექტის ლიტერალებიდან ფუნქციის ტიპების წაკითხვა დაუშვებელია" },
            { ru: "Function", en: "Function", ka: "Function" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript успешно выводит типы вложенных стрелочных и обычных функций внутри объектов. С помощью цепочки точек оператор `typeof api.handler` считывает сигнатуру метода, возвращая тип `(id: number) => boolean`.",
            en: "TypeScript tracks function shapes embedded inside object assignments. Executing a target property lookup via `typeof api.handler` evaluates smoothly to the arrow signature `(id: number) => boolean`.",
            ka: "TypeScript წარმატებით გამოაქვს ობიექტების შიგნით არსებული ჩასმული ისრული და ჩვეულებრივი ფუნქციების ტიპები. წერტილების ჯაჭვის დახმარებით `typeof api.handler` კითხულობს მეთოდის სიგნატურას და აბრუნებს `(id: number) => boolean`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Method Type Extraction — Handbook"
    },
    {
        id: 318,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Что произойдет, если использовать typeof к элементу массива, обращаясь к нему по конкретному числовому индексу-литералу?",
            en: "What type behavior is evaluated when running typeof against an explicit numeric index location inside a declared constant array?",
            ka: "რა მოხდება, თუ გამოვიყენებთ typeof-ს მასივის ელემენტზე კონკრეტული ციფრული ინდექს-ლიტერალით მიმართვისას?"
        },
        code: `<span class="kw">const</span> points = [{ x: <span class="num">10</span> }, { y: <span class="num">20</span> }] <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">FirstPoint</span> = <span class="kw">typeof</span> points[<span class="num">0</span>];`,
        options: [
            { ru: "{ readonly x: 10 }", en: "{ readonly x: 10 }", ka: "{ readonly x: 10 }" },
            { ru: "{ x: number } | { y: number }", en: "{ x: number } | { y: number }", ka: "{ x: number } | { y: number }" },
            { ru: "Ошибка компиляции: числовые индексы запрещены в typeof", en: "Compile error: index bracket coordinates are illegal parameters inside a typeof statement", ka: "კომპილაციის შეცდომა: ციფრული ინდექსები აკრძალულია typeof-ში" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript, если массив объявлен с утверждением `as const`, он превращается в точный неизменяемый кортеж. При обращении по фиксированному литеральному индексу `[0]` внутри `typeof`, компилятор извлекает тип элемента именно на этой позиции. Результат: `{ readonly x: 10 }`.",
            en: "When an array contains an `as const` modifier, it is evaluated as a strict immutable tuple. Querying a literal index entry like `[0]` through `typeof` targets that single coordinate, yielding `{ readonly x: 10 }`.",
            ka: "TypeScript-ში, თუ მასივი გამოცხადებულია `as const` მოდიფიკატორით, ის იქცევა ზუსტ უცვლელ კორტეჟად. `typeof`-ში ფიქსირებული ლიტერალური ინდექსით `[0]` მიმართვისას კომპილატორი ამოიღებს ზუსტად ამ პოზიციაზე მყოფი ელემენტის ტიპს: `{ readonly x: 10 }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Indexing with Typeof — Handbook"
    },
    {
        id: 319,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "Допускается ли использование оператора typeof внутри условных типов (Conditional Types) для динамической проверки формы объектов?",
            en: "Can the typeof operator be evaluated directly inside a Conditional Type test sequence to check value attributes?",
            ka: "დაშვებულია თუ არა typeof ოპერატორის გამოყენება პირობით ტიპებში (Conditional Types) ობიექტების ფორმის დინამიური შემოწმებისთვის?"
        },
        code: `<span class="kw">const</span> val = <span class="str">"text"</span>;
<span class="kw">type</span> <span class="type">IsString</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="kw">extends</span> <span class="kw">typeof</span> val ? <span class="kw">true</span> : <span class="kw">false</span>;`,
        options: [
            { ru: "Да, это полностью валидная конструкция", en: "Yes, this setup represents fully legal syntax expressions", ka: "დიახ, ეს აბсოლუტურად ვალიდური კონსტრუქციაა" },
            { ru: "Нет, оператор typeof нельзя сочетать с ключевым словом extends", en: "No, the typeof command is banned from combining with extends parameters", ka: "არა, typeof ოპერატორის კომბინირება extends საკვანძო სიტყვასთან დაუშვებელია" },
            { ru: "Нет, условные типы работают только с интерфейсами", en: "No, conditional type branches only accept abstract declaration models", ka: "არა, პირობითი ტიპები მუშაობენ მხოლოდ ინტერფეისებთან" },
            { ru: "Да, но только внутри тела функций", en: "Yes, but strictly inside active code execution closures only", ka: "დიახ, მაგრამ მხოლოდ ფუნქციების ტანის შიგნით" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `typeof val` возвращает тип `\"text\"` (поскольку `val` — это `const`). Этот полученный тип можно свободно использовать в любых позициях, где ожидается тип данных, включая проверки в условных типах `T extends typeof val`. Это валидный и рабочий синтаксис.",
            en: "The expression `typeof val` yields the literal string type `\"text\"`. Because it resolves cleanly into a type entity, it can be embedded anywhere types are anticipated, including right-hand branches of `extends` clauses.",
            ka: "`typeof val` ოპერატორი აბრუნებს ტიპს `\"text\"` (რადგან `val` არის `const`). მიღებული ტიპის გამოყენება თავისუფლად შეიძლება ნებისმიერ პოზიციაში, სადაც მოსალოდნელია მონაცემთა ტიპი, მათ შორის პირობით ტიპებში `T extends typeof val`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Conditional Types and Typeof — Handbook"
    },
    {
        id: 320,
        category: { ru: "Оператор typeof", en: "Typeof Operator", ka: "typeof ოპერატორი" },
        tag: "typeof-operators",
        question: {
            ru: "В какой код скомпилируется строка объявления типа 'type T = typeof obj;' после сборки проекта в чистый JavaScript?",
            en: "Into what specific output expression is the type alias definition 'type T = typeof obj;' compiled after building into plain JavaScript?",
            ka: "რა კოდში დაკომპილირდება ტიპის გამოცხადების ხაზი 'type T = typeof obj;' პროექტის სუფთა JavaScript-ში აწყობის შემდეგ?"
        },
        code: `<span class="kw">const</span> obj = { id: <span class="num">1</span> };
<span class="kw">type</span> <span class="type">T</span> = <span class="kw">typeof</span> obj;`,
        options: [
            { ru: "Строка полностью удаляется компилятором (исчезает из финального файла)", en: "The entire type declaration line is fully stripped and deleted by the compiler", ka: "ხაზი მთლიანად იშლება კომპილატორის მიერ (ქრება საბოლოო ფაილიდან)" },
            { ru: "Превращается в: const T = typeof obj;", en: "It translates into the asset: const T = typeof obj;", ka: "გადაიქცევა შემდეგნაირად: const T = typeof obj;" },
            { ru: "Превращается в объектный литерал во время выполнения", en: "It translates into an active runtime object layout map", ka: "Runtime-ში გადაიქცევა ობიექტის ლიტერალად" },
            { ru: "Превращается в комментарий", en: "It is converted into a standard text code comment block", ka: "გადაიქცევა კომენტარად" }
        ],
        correct: 0,
        explanation: {
            ru: "Поскольку `type T = typeof obj;` находится исключительно в пространстве типов TypeScript, эта строка служит только для статической проверки корректности кода на этапе разработки. Компилятор TS полностью удаляет (erase) все объявления типов, интерфейсов и алиасов при сборке в финальный JS-файл.",
            en: "Since the syntax block `type T = typeof obj;` resides strictly within TypeScript type spaces, it serves only for static analysis verification. The compiler completely erases type statements during JavaScript generation.",
            ka: "ვინაიდან `type T = typeof obj;` იმყოფება ექსკლუზიურად TS-ის ტიპების სივრცეში, ეს ხაზი ემსახურება მხოლოდ კოდის სტატიკურ შემოწმებას დეველოპმენტის ეტაპზე. TS კომპილატორი მთლიანად შლის ტიპების, ინტერფეისებისა და ალიასების გამოცხადებებს JS ფაილის აწყობისას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Type Erasure Principles — Handbook"
    },

    // 17. INDEXED ACCESS TYPES
    {
        id: 321,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип данных получит переменная IdType при использовании Indexed Access?",
            en: "What type does IdType resolve to when using Indexed Access?",
            ka: "რა ტიპს მიიღებს IdType ცვლადი Indexed Access-ის გამოყენებისას?"
        },
        code: `<span class="kw">type</span> <span class="type">AppConfig</span> = { db: { id: <span class="type">string</span>; active: <span class="type">boolean</span> } };
<span class="kw">type</span> <span class="type">IdType</span> = <span class="type">AppConfig</span>[<span class="str">'db'</span>][<span class="str">'id'</span>];`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "{ id: string; active: boolean }", en: "{ id: string; active: boolean }", ka: "{ id: string; active: boolean }" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "Ошибка: нельзя искать вложенные свойства через квадратные скобки", en: "Error: nested lookups via bracket notation are illegal", ka: "შეცდომა: ჩადგმული თვისებების ძებნა კვადრატული ფრჩხილებით შეუძლებელია" }
        ],
        correct: 0,
        explanation: {
            ru: "Indexed Access Types позволяют получать типы отдельных свойств по аналогии с тем, как мы забираем значения из объектов в JS. Синтаксис `AppConfig['db']` вернет `{ id: string; active: boolean }`, а цепочка `['id']` углубится и вытащит чистый тип `string`. Попытка использовать точку вместо квадратных скобок (например, AppConfig.db) вызовет синтаксическую ошибку.",
            en: "Indexed Access Types fetch sub-nested properties directly out of complex parent types using syntax similar to JS bracket access. Chain querying `AppConfig['db']['id']` isolates and returns the exact type signature of `string`. Using dot notation here (like AppConfig.db) triggers a syntax compilation crash.",
            ka: "Indexed Access ტიპები საშუალებას გვაძლევს ავიღოთ კონკრეტული თვისებების ტიპები იმავე პრინციპით, როგორც JS-ში ვიღებთ მნიშვნელობებს ობიექტებიდან კვადრატული ფრჩხილებით. `AppConfig['db']` დააბრუნებს შიდა ობიექტს, ხოლო `['id']` უფრო ღრმად შევა და ამოიღებს სუფთა `string` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Indexed Access Types — Handbook"
    },
    {
        id: 322,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Что произойдет, если в качестве ключа индексного доступа передать Union-тип из нескольких строковых литералов?",
            en: "What happens when you provide a union type composed of multiple string literals as the key inside an indexed access expression?",
            ka: "რა მოხდება, თუ ინდექსური წვდომის გასაღებად გადავცემთ რამდენიმე სტრიქონული ლიტერალისგან შემდგარ Union-ტიპს?"
        },
        code: `<span class="kw">type</span> <span class="type">User</span> = { id: <span class="type">number</span>; name: <span class="type">string</span>; role: <span class="type">boolean</span> };
<span class="kw">type</span> <span class="type">UnionAccess</span> = <span class="type">User</span>[<span class="str">'id'</span> | <span class="str">'name'</span>];`,
        options: [
            { ru: "number | string (объединение типов указанных свойств)", en: "number | string (a union type containing the target property definitions)", ka: "number | string (მითითებული თვისებების ტიპების გაერთიანება)" },
            { ru: "{ id: number; name: string } (новый объектный тип)", en: "{ id: number; name: string } (a freshly constructed object type)", ka: "{ id: number; name: string } (ახალი ობიექტური ტიპი)" },
            { ru: "Ошибка: индексный доступ принимает только один литеральный ключ", en: "Compile error: indexed access only tolerates a single literal key argument", ka: "კომპილაციის შეცდომა: ინდექსური წვდომა იღებს მხოლოდ ერთ ლიტერალურ გასაღებს" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "Индексный доступ в TypeScript поддерживает Union-типы. Если передать несколько ключей через `|`, TypeScript извлечет типы для каждого свойства по отдельности и объединит их в новый Union-тип. Для `User['id' | 'name']` мы получаем объединение `number | string`.",
            en: "TypeScript handles union expressions inside index keys smoothly. Passing a list of properties separated by `|` tells the compiler to look up each property shape individually and compose them back into a unified union: `number | string`.",
            ka: "TypeScript-ში ინდექსური წვდომა მხარს უჭერს Union-ტიპებს. თუ გადავცემთ რამდენიმე გასაღებს `|`-ით, TS ამოიღებს თითოეული თვისების ტიპს ცალ-ცალკე და გააერთიანებს მათ ახალ Union-ტიპში. `User['id' | 'name']`-სთვის მივიღებთ `number | string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Union Key Access — Handbook"
    },
    {
        id: 323,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип будет выведен для переменной AllValues при сочетании индексного доступа и оператора keyof?",
            en: "What type identity is evaluated for AllValues when combining indexed access syntax with the keyof keyword?",
            ka: "რა ტიპი გამოითვლება AllValues ცვლადისთვის ინდექსური წვდომისა და keyof ოპერატორის კომბინაციისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Theme</span> = { dark: <span class="type">string</span>; size: <span class="type">number</span>; compact: <span class="type">boolean</span> };
<span class="kw">type</span> <span class="type">AllValues</span> = <span class="type">Theme</span>[<span class="kw">keyof</span> <span class="type">Theme</span>];`,
        options: [
            { ru: "string | number | boolean", en: "string | number | boolean", ka: "string | number | boolean" },
            { ru: "'dark' | 'size' | 'compact'", en: "'dark' | 'size' | 'compact'", ka: "'dark' | 'size' | 'compact'" },
            { ru: "unknown", en: "unknown", ka: "unknown" },
            { ru: "Ошибка: нельзя использовать операторы внутри квадратных скобок", en: "Compile error: you cannot nest keywords directly inside index access operations", ka: "კომპილაციის შეცდომა: კვადრატული ფрჩხილების შიგნით ოპერატორების გამოყენება დაუშვებელია" }
        ],
        correct: 0,
        explanation: {
            ru: "Выражение `keyof Theme` генерирует Union всех ключей объекта: `\"dark\" | \"size\" | \"compact\"`. Передавая этот результат в качестве индекса для самой `Theme`, мы заставляем TypeScript извлечь типы абсолютно всех значений этого объекта. Результатом будет `string | number | boolean`.",
            en: "The evaluation of `keyof Theme` spits out a union matching all valid dictionary keys: `\"dark\" | \"size\" | \"compact\"`. Feeding that union immediately back into `Theme[...]` looks up every possible target value, returning `string | number | boolean`.",
            ka: "`keyof Theme` გამოსახულება აგენერირებს ობიექტის ყველა გასაღების Union-ს: `\"dark\" | \"size\" | \"compact\"`. ამ შედეგის ინდექსად გადაცემით თვითონ `Theme`-ისთვის, TS-ს ვაიძულებთ ამოიღოს ამ ობიექტის აბსოლუტურად ყველა მნიშვნელობის ტიპი. შედეგი იქნება `string | number | boolean`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Keyof Interaction — Handbook"
    },
    {
        id: 324,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Можно ли использовать обычную строковую JavaScript-переменную (runtime variable) в качестве индекса типа?",
            en: "Can a standard JavaScript runtime string variable be passed directly as the index argument for a type-level lookup?",
            ka: "შეიძლება თუ არა ჩვეულებრივი JavaScript-ის ცვლადის (runtime variable) გამოყენება ტიპის ინდექსად?"
        },
        code: `<span class="kw">type</span> <span class="type">Response</span> = { status: <span class="type">number</span> };
<span class="kw">const</span> keyVar = <span class="str">"status"</span>;
<span class="kw">type</span> <span class="type">StatusType</span> = <span class="type">Response</span>[keyVar];`,
        options: [
            { ru: "Да, StatusType примет тип number", en: "Yes, StatusType maps smoothly onto the number primitive", ka: "დიახ, StatusType მიიღებს number ტიპს" },
            { ru: "Ошибка компиляции: переменная keyVar относится к значениям, а не к типам", en: "Compile error: keyVar refers to a runtime value, but is being used here as a static type", ka: "კომპილაციის შეცდომა: ცვლადი keyVar ეკუთვნის მნიშვნელობებს და არა ტიპებს" },
            { ru: "Да, если переменная объявлена через const", en: "Yes, but only provided the target variable is structured as a strict const", ka: "დიახ, თუ ცვლადი გამოცხადებულია const-ით" },
            { ru: "StatusType примет тип any", en: "StatusType silently falls back into an any type annotation", ka: "StatusType მიიღებს any ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "Внутри квадратных скобок при объявлении типов можно передавать только *типы данных* (например, строковые литералы вроде `'status'`). Переменная `keyVar` — это живое JS-значение. Чтобы этот код сработал, вместо переменной нужно передать либо саму строку `'status'`, либо преобразовать её в тип с помощью оператора `typeof keyVar`.",
            en: "Type configurations only accept *types* as index keys, not execution values. Even if `keyVar` is a constant string, the token itself represents a value. To fix this compilation issue, use either the string literal `'status'` or convert the token reference via `typeof keyVar`.",
            ka: "ტიპების გამოცხადებისას კვადრատულ ფრჩხილებში შეიძლება გადაეცეს მხოლოდ *მონაცემთა ტიპები*. ცვლადი `keyVar` არის რეალური JS მნიშვნელობა. კოდმა რომ იმუშაოს, ცვლადის ნაცვლად უნდა გადავცეთ ან თვითონ სტრიქონი `'status'`, ან გარდავქმნათ ის ტიპად `typeof keyVar` ოპერატორით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Types vs Values in Indexed Access — Handbook"
    },
    {
        id: 325,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Каким образом извлечь тип элементов обычного типизированного массива с помощью синтаксиса индексного доступа?",
            en: "How do you capture the singular underlying member type from a standard array definition using indexed access syntax?",
            ka: "როგორ ამოვიღოთ ჩვეულებრივი ტიპიზირებული მასივის ელემენტების ტიპი ინდექსური წვდომის სინტაქსით?"
        },
        code: `<span class="kw">type</span> <span class="type">UserList</span> = { name: <span class="type">string</span> }[];
<span class="kw">type</span> <span class="type">SingleUser</span> = <span class="type">UserList</span>[<span class="type">number</span>];`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "{ name: string } (тип объекта внутри массива)", en: "{ name: string } (the structural object type held inside the array)", ka: "{ name: string } (მასივის შიგნით არსებული ობიექტის ტიპი)" },
            { ru: "{ name: string }[]", en: "{ name: string }[]", ka: "{ name: string }[]" },
            { ru: "Ошибка компиляции: ключевое слово number нельзя указывать в качестве индекса", en: "Compile error: the number keyword is forbidden as an index parameter here", ka: "კომპილაციის შეცდომა: საკვანძო სიტყვა number-ის მითითება ინდექსად დაუშვებელია" }
        ],
        correct: 1,
        explanation: {
            ru: "Использование встроенного типа `number` в качестве индекса (`UserList[number]`) сообщает TypeScript, что необходимо извлечь тип элементов этого массива. Поскольку массивы индексируются числами, этот синтаксис идеально распаковывает массив, возвращая базовую структуру объекта `{ name: string }`.",
            en: "Passing the primitive type `number` as the lookup index (`UserList[number]`) instructs TypeScript to extract the element type stored inside the array collection. Because array slots are tracked via numeric signatures, this unwraps the outer array, yielding `{ name: string }`.",
            ka: "საკვანძო სიტყვა `number`- ის ინდექსად გამოყენება (`UserList[number]`) მიუთითებს TS-ს, რომ საჭიროა ამ მასივის ელემენტების ტიპის ამოღება. ვინაიდან მასივების ინდექსაცია ხდება რიცხვებით, ეს სინტაქსი იდეალურად ხსნის მასივს და აბრუნებს ობიექტის სტრუქტურას `{ name: string }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Array Indexing via number — Handbook"
    },
    {
        id: 326,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Что произойдет, если попытаться применить индексный доступ с несуществующим строковым ключом к жестко описанному типу?",
            en: "What type check error behavior is seen when attempting an indexed access query using an invalid, non-existent key name?",
            ka: "რა მოხდება, თუ ვეცდებით ინდექსური წვდომის გამოყენებას არარსებული სტრიქონული გასაღებით მკაცრად აღწერილ ტიპზე?"
        },
        code: `<span class="kw">type</span> <span class="type">Point</span> = { x: <span class="type">number</span>; y: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">ZType</span> = <span class="type">Point</span>[<span class="str">'z'</span>];`,
        options: [
            { ru: "ZType примет значение undefined", en: "ZType evaluates cleanly into an undefined type allocation", ka: "ZType მიიღებს undefined მნიშვნელობას" },
            { ru: "Ошибка компиляции: свойство 'z' отсутствует в типе Point", en: "Compile error: Property 'z' does not exist on type 'Point'", ka: "კომპილაციის შეცდომა: თვისება 'z' არ არსებობს Point ტიპში" },
            { ru: "ZType автоматически запишется как any", en: "ZType resolves automatically into any to guarantee stability", ka: "ZType ავტომატურად ჩაიწერება როგორც any" },
            { ru: "ZType примет тип null", en: "ZType collapses into a null placeholder mapping", ka: "ZType მიიღებს null ტიპს" }
        ],
        correct: 1,
        explanation: {
            ru: "TypeScript гарантирует строгую безопасность на этапе компиляции. Если тип `Point` содержит только свойства `x` и `y`, то попытка запросить ключ `'z'` через квадратные скобки вызовет немедленную ошибку компиляции. TypeScript не возвращает `any` или `undefined` по умолчанию для явных промахов по ключам.",
            en: "TypeScript enforces strict type safety during static checks. If a type contract like `Point` only defines `x` and `y` mappings, requesting key `'z'` via brackets causes an immediate compile-time failure instead of returning an `any` or `undefined` fallback.",
            ka: "TypeScript უზრუნველყოფს მკაცრ უსაფრთხოებას კომპილაციის ეტაპზე. თუ `Point` ტიპი შეიცავს მხოლოდ `x` და `y` თვისებებს, კვადრატული ფრჩხილებით `'z'` გასაღების გამოძახება გამოიწვევს კომპილაციის შეცდომას. TS არ აბრუნებს `any`-ს ან `undefined`-ს არარსებულ გასაღებებზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Property Validation Safety — Handbook"
    },
    {
        id: 327,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип будет извлечен из кортежа (Tuple) при попытке прочитать элемент по индексу '0'?",
            en: "What specific type is returned from a rigid Tuple declaration when targeting the explicit literal index '0'?",
            ka: "რა ტიპი ამოიღება კორტეჟიდან (Tuple) '0' ინდექსით ელემენტის წაკითხვის მცდელობისას?"
        },
        code: `<span class="kw">type</span> <span class="type">Pair</span> = [<span class="type">string</span>, <span class="type">number</span>];
<span class="kw">type</span> <span class="type">First</span> = <span class="type">Pair</span>[<span class="str">'0'</span>];`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "number", en: "number", ka: "number" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "Ошибка: кортежи не поддерживают строковые индексы цифр", en: "Compile error: tuples reject stringified numeric keys in type lookups", ka: "შეცდომა: კორტეჟები მხარს არ უჭერენ ციფრების სტრიქონულ ინდექსებს" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript кортежи за кулисами представляются как специализированные объекты, у которых числовые позиции описаны как строковые и числовые литеральные ключи. Передача как `'0'`, так и `0` в квадратные скобки успешно извлечет тип первого элемента кортежа — `string`.",
            en: "Tuples in TypeScript map positions internally using numeric and stringified literal indexes. Because of this, both `Pair[0]` and `Pair['0']` evaluate successfully, pinpointing the first slot definition which corresponds to `string`.",
            ka: "TypeScript-ში კორტეჟები კულისებს მიღმა წარმოდგენილია როგორც სპეციალიზებული ობიექტები, რომელთა ციფრული პოზიციები აღწერილია როგორც სტრიქონული და ციფრული ლიტერალური გასაღებები. კვადრატულ ფრჩხილებში როგორც `'0'`, ისე `0`- ის გადაცემა წარმატებით ამოიღებს პირველი ელემენტის ტიპს — `string`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Indexed Access — Handbook"
    },
    {
        id: 328,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Что вернет выражение Pair[number] для типизированного фиксированного кортежа?",
            en: "What type resolution is generated when referencing the collective index parameter Pair[number] against a fixed Tuple layout?",
            ka: "რას დააბრუნებს `Pair[number]` გამოსახულება ტიპიზირებული ფიქსირებული კორტეჟისთვის?"
        },
        code: `<span class="kw">type</span> <span class="type">Pair</span> = [<span class="type">string</span>, <span class="type">number</span>];
<span class="kw">type</span> <span class="type">Elements</span> = <span class="type">Pair</span>[<span class="type">number</span>];`,
        options: [
            { ru: "string | number (Union всех типов, находящихся в кортеже)", en: "string | number (a union configuration of all types enclosed by the tuple layout)", ka: "string | number (კორტეჟში არსებული ყველა ტიპის Union-ი)" },
            { ru: "строку 'string' или 'number'", en: "the raw value string keywords 'string' or 'number'", ka: "სტრიქონს 'string' ან 'number'" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "Ошибка компиляции: number применим только к классическим массивам, но не к кортежам", en: "Compile error: the number lookup tool is reserved for traditional arrays, not tuples", ka: "კომპილაციის შეცდომა: number გამოიყენება მხოლოდ კლასიკური მასივებისთვის და არა კორტეჟებისთვის" }
        ],
        correct: 0,
        explanation: {
            ru: "Применение индекса `[number]` к кортежу заставляет TypeScript пройти по всем числовым позициям структуры и объединить типы всех элементов в единый Union-тип. Для кортежа `[string, number]` результатом выполнения станет тип `string | number`.",
            en: "Applying the generic `[number]` type index to a static tuple triggers an internal layout iteration across all coordinates, creating a flattened type representation of its parts. Thus, `Pair[number]` constructs `string | number`.",
            ka: "კორტეჟზე `[number]` ინდექსის გამოყენება აიძულებს TS-ს გაიაროს სტრუქტურის ყველა ციფრულ პოზიციაზე და გააერთიანოს ელემენტების ტიპები ერთიან Union-ტიპში. `[string, number]` კორტეჟისთვის შედეგი იქნება `string | number`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Flattening with number — Handbook"
    },
    {
        id: 329,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Каким образом ведет себя индексный доступ, если запросить тип по индексу string у объекта с явно описанным String Index Signature?",
            en: "How does indexed access behave when querying via a generic string index identifier against a type featuring a declared String Index Signature?",
            ka: "როგორ იქცევა ინდექსური წვდომა, თუ მოვითხოვთ ტიპს string ინდექსით იმ ობიექტზე, რომელსაც აქვს მკაცრად აღწერილი String Index Signature?"
        },
        code: `<span class="kw">type</span> <span class="type">Dictionary</span> = { [key: <span class="type">string</span>]: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">ValType</span> = <span class="type">Dictionary</span>[<span class="type">string</span>];`,
        options: [
            { ru: "number", en: "number", ka: "number" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "Ошибка: нельзя передавать глобальный тип string внутрь квадратных скобок", en: "Compile error: passing the base string primitive type directly into brackets is illegal", ka: "შეცდომა: კვადრატულ ფრჩხილებში ბაზისური string ტიპის გადაცემა დაუშვებელია" }
        ],
        correct: 0,
        explanation: {
            ru: "Если тип данных описывает динамический индексный сигнатурный контракт (Index Signature), например, любые строки ведут к числам, то передача базового типа `string` в квадратные скобки (`Dictionary[string]`) вернет тип значения этой сигнатуры, то есть `number`.",
            en: "When an interface sets up an open-ended index contract like `[key: string]: number`, passing the generic type identifier `string` into brackets asks for the placeholder return signature. Hence, `Dictionary[string]` returns `number`.",
            ka: "თუ მონაცემთა ტიპი აღწერს დინამიურ ინდექსურ ხელშეკრულებას (Index Signature), მაგალითად ნებისმიერი სტრიქონი მიდის რიცხვებთან, მაშინ კვადრატულ ფრჩხილებში ბაზისური `string` ტიპის გადაცემა (`Dictionary[string]`) დააბრუნებს ამ სიგნატურის მნიშვნელობის ტიპს, ანუ `number`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
        docLabel: "Index Signatures Lookup — Handbook"
    },
    {
        id: 330,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Допускается ли использование дженерик-параметра (Generic Type Parameter) в качестве индекса внутри квадратных скобок?",
            en: "Is it legal to use an unresolved Generic Type Parameter token as the lookup key argument within an indexed access bracket?",
            ka: "დაშვებულია თუ არა ჯენერიკ-პარამეტრის (Generic Type Parameter) გამოყენება ინდექსად კვადრატული ფრჩხილების შიგნით?"
        },
        code: `<span class="kw">type</span> <span class="type">GetPropType</span>&lt;<span class="type">T</span>, <span class="type">K</span> <span class="kw">extends</span> <span class="kw">keyof</span> <span class="type">T</span>&gt; = <span class="type">T</span>[<span class="type">K</span>];`,
        options: [
            { ru: "Да, это полностью валидный синтаксис (динамический индексный доступ)", en: "Yes, this matches standard production syntax (Generic Indexed Access)", ka: "დიახ, ეს სრულიად ვალიდური სინტაქსია (დინამიური ინდექსური წვდომა)" },
            { ru: "Нет, дженерики должны быть разрешены до литералов перед использованием в качестве индекса", en: "No, generics must be fully evaluated into concrete literal bounds before indexing", ka: "არა, ჯენერიკები უნდა გარდაიქმნან კონკრეტულ ლიტერალებად ინდექსად გამოყენებამდე" },
            { ru: "Код скомпилируется, но тип всегда будет оцениваться как any", en: "Compiles fine, but the output signature is forced to any permanently", ka: "კოდი დაკომპილირდება, მაგრამ ტიპი ყოველთვის შეფასდება როგორც any" },
            { ru: "Будет выдана ошибка о циклической зависимости", en: "Triggers a fatal cyclic dependency compilation fault", ka: "გამოიწვევს ციკლური დამოკიდებულების შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Это один из мощнейших паттернов TypeScript, называемый Generic Indexed Access. Мы накладываем ограничение `K extends keyof T`, гарантируя, что тип `K` обязан быть валидным ключом объекта `T`. После этого мы можем динамически вытащить тип `T[K]`.",
            en: "This represents a powerful design pattern known as Generic Indexed Access. By combining the constraint `K extends keyof T`, TypeScript guarantees that whatever type maps to `K` is a real property of `T`, allowing safe evaluation of `T[K]` dynamically.",
            ka: "ეს არის TypeScript-ის ერთ-ერთი ყველაზე ძლიერი პატერნი, რომელსაც Generic Indexed Access ეწოდება. ჩვენ ვადებთ შეზღუდვას `K extends keyof T`, რითაც გარანტიას ვაძლევთ, რომ `K` ტიპი ვალდებულია იყოს `T` ობიექტის ვალიდური გასაღები. ამის შემდეგ შეგვიძლია დინამიურად ამოვიღოთ `T[K]` ტიპი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Generic Indexed Access — Handbook"
    },
    {
        id: 331,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип будет назначен свойству 'AgeOrName', если исходные свойства объекта опциональны (содержат знак вопроса)?",
            en: "What combined type is extracted via indexed access if the target attributes on the parent type are marked optional (?)?",
            ka: "რა ტიპი მიენიჭება 'AgeOrName' თვისებას, თუ ობიექტის საწყისი თვისებები არასავალდებულოა (შეიცავს კითხვის ნიშანს)?"
        },
        code: `<span class="kw">type</span> <span class="type">PartialUser</span> = { id?: <span class="type">number</span>; name?: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">AgeOrName</span> = <span class="type">PartialUser</span>[<span class="str">'id'</span> | <span class="str">'name'</span>];`,
        options: [
            { ru: "number | string", en: "number | string", ka: "number | string" },
            { ru: "number | string | undefined (поскольку свойства могут отсутствовать)", en: "number | string | undefined (because optional markers introduce an implicit undefined union)", ka: "number | string | undefined (ვინაიდან თვისებები შეიძლება არ არსებობდეს)" },
            { ru: "number | string | null", en: "number | string | null", ka: "number | string | null" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 1,
        explanation: {
            ru: "Знак вопроса `?` в описании типа объекта под капотом добавляет `undefined` к типу значения (при `strictNullChecks`). Когда мы запрашиваем типы этих свойств через индексный доступ, TypeScript честно подмешивает `undefined` в итоговый Union. Результат: `number | string | undefined`.",
            en: "An optional marker `?` implicitly injects `undefined` into the property value definition under `strictNullChecks`. When extracting these entries via indexed access, TypeScript preserves this rule, returning: `number | string | undefined`.",
            ka: "კითხვის ნიშანი `?` ობიექტის ტიპის აღწერაში კულისებს მიღმა უმატებს `undefined`-ს მნიშვნელობის ტიპს (როდესაც ჩართულია `strictNullChecks`). როდესაც ამ თვისებების ტიპებს ვითხოვთ ინდექსური წვდომით, TS აერთიანებს მათ `undefined`-თან. შედეგი: `number | string | undefined`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties",
        docLabel: "Optional Properties Lookup — Handbook"
    },
    {
        id: 332,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Можно ли использовать интерфейс (interface) в качестве базовой мишени для индексного доступа, или данный синтаксис работает только с type alias?",
            en: "Can a standard TS interface declare targeted values via indexed access brackets, or is this mechanic exclusive to type aliases?",
            ka: "შესაძლებელია თუ არა ინტერფეისის (interface) გამოყენება ინდექსური წვდომის საბაზისო ობიექტად, თუ ეს სინტაქსი მუშაობს მხოლოდ type alias-თან?"
        },
        code: `<span class="kw">interface</span> <span class="type">Client</span> { uid: <span class="type">string</span> }
<span class="kw">type</span> <span class="type">UidType</span> = <span class="type">Client</span>[<span class="str">'uid'</span>];`,
        options: [
            { ru: "Да, синтаксис абсолютно одинаково работает как для type, так и для interface", en: "Yes, indexed access operates identically across both type aliases and interface contracts", ka: "დიახ, სინტაქსი აბსოლუტურად იდენტურად მუშაობს როგორც type-ისთვის, ასევე interface-ისთვის" },
            { ru: "Нет, интерфейсы не поддерживают обращение через квадратные скобки", en: "No, interface structures reject bracket token references natively", ka: "არა, ინტერფეისები მხარს არ უჭერენ კვადრატული ფრჩხილებით მიმართვას" },
            { ru: "Можно, но только если интерфейс унаследован от другого интерфейса", en: "Yes, but strictly on condition that the interface extends an upstream companion contract", ka: "შესაძლებელია, მაგრამ მხოლოდ იმ შემთხვევაში, თუ ინტერფეისი მემკვიდრეობითობაზეა სხვა ინტერფეისიდან" },
            { ru: "Это вызовет ошибку отсутствия свойства prototype", en: "This causes a missing prototype property error", ka: "ეს გამოიწვევს prototype თვისების არარსებობის შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Индексный доступ к свойствам в TypeScript полностью универсален. Не имеет значения, как именно была описана структура объекта — через ключевое слово `type` или через `interface`. Синтаксис `Client['uid']` извлечет тип `string` без каких-либо ограничений.",
            en: "Indexed access resolution is fully generic across TypeScript object models. It makes no compiler difference whether a contract was instantiated as a `type` alias or an `interface`. Writing `Client['uid']` returns `string` flawlessly.",
            ka: "TypeScript-ში თვისებებზე ინდექსური წვდომა უნივერსალურია. არ აქვს მნიშვნელობა ობიექტის სტრუქტურა აღწერილი იყო `type` ალიასით თუ `interface`-ით. `Client['uid']` სინტაქსი ამოიღებს `string` ტიპს ყოველგვარი შეზღუდვის გარეშე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Interfaces with Indexed Access — Handbook"
    },
    {
        id: 333,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип будет извлечен для переменной 'LenType', если обратиться по ключу 'length' к типу обычного массива строк?",
            en: "What value signature is obtained for 'LenType' when looking up the literal key 'length' against a plain string array type?",
            ka: "რა ტიპი ამოიღება 'LenType' ცვლადისთვის, თუ მივმართავთ 'length' გასაღებით სტრიქონების ჩვეულებრივ მასივს?"
        },
        code: `<span class="kw">type</span> <span class="type">StrArray</span> = <span class="type">string</span>[];
<span class="kw">type</span> <span class="type">LenType</span> = <span class="type">StrArray</span>[<span class="str">'length'</span>];`,
        options: [
            { ru: "number (поскольку свойство length у массивов всегда число)", en: "number (since the array length property is universally bounded to a number value)", ka: "number (ვინაიდან მასივების length თვისება ყოველთვის რიცხვია)" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "Ошибка компиляции: у встроенных массивов JS нет типов свойств в TS", en: "Compile error: core global JS arrays do not carry indexable properties inside TS types", ka: "კომპილაციის შეცდომა: JS-ის მასივებს არ აქვთ თვისებების ტიპები TS-ში" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript встроенные глобальные типы, такие как массивы (`string[]`), полностью описаны со всеми их внутренними методами и свойствами из JavaScript. Так как у любого массива есть рантайм-свойство `length`, возвращающее число, индексный доступ `StrArray['length']` вернет стандартный тип `number`.",
            en: "Built-in JavaScript objects and structures—including generic arrays (`string[]`)—are mapped out completely inside TypeScript's core definitions. Because every array exposes a physical `.length` property, indexing `StrArray['length']` safely extracts `number`.",
            ka: "TypeScript-ში ჩაშენებული გლობალური ტიპები, როგორიცაა მასივები (`string[]`), სრულად არის აღწერილი თავისი შიდა მეთოდებითა და თვისებებით. ვინაიდან ნებისმიერ მასივს აქვს runtime თვისება `length`, რომელიც აბრუნებს რიცხვს, `StrArray['length']` ინდექსური წვდომა დააბრუნებს სტანდარტულ `number` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Array Properties Lookup — Handbook"
    },
    {
        id: 334,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой точный тип будет получен для переменной 'TupleLenType', если запросить свойство 'length' у фиксированного кортежа (Tuple)?",
            en: "What precise value type is captured for 'TupleLenType' when looking up 'length' against a frozen literal Tuple definition?",
            ka: "რა ზუსტი ტიპი მიიღება 'TupleLenType' ცვლადისთვის, თუ მოვითხოვთ 'length' თვისებას ფიქსირებულ კორტეჟზე (Tuple)?"
        },
        code: `<span class="kw">type</span> <span class="type">Coordinate</span> = [<span class="type">number</span>, <span class="type">number</span>];
<span class="kw">type</span> <span class="type">TupleLenType</span> = <span class="type">Coordinate</span>[<span class="str">'length'</span>];`,
        options: [
            { ru: "number (общий тип числа)", en: "number (the generic open-ended primitive identifier)", ka: "number (რიცხვის საერთო ტიპი)" },
            { ru: "2 (строгий числовой литеральный тип длины кортежа)", en: "2 (the exact literal strict numeric length of the tuple instance)", ka: "2 (კორტეჟის სიგრძის მკაცრი ციფრული ლიტერალური ტიპი)" },
            { ru: "never", en: "never", ka: "never" },
            { ru: "Ошибка: у кортежей длина вычисляется динамически", en: "Compile error: tuple structural lengths are evaluated in runtime only", ka: "შეცდომა: კორტეჟებში სიგრძე გამოითვლება დინამიურად" }
        ],
        correct: 1,
        explanation: {
            ru: "В отличие от обычных массивов, длина которых динамическая (`number`), кортежи (Tuples) в TypeScript имеют строго фиксированную неизменяемую длину на уровне типов. Поэтому обращение к свойству `length` у кортежа `[number, number]` возвращает не просто `number`, а точный литеральный тип числа `2`.",
            en: "Unlike classic open arrays whose capacity is dynamic, TypeScript Tuples represent fixed structures with explicit lengths tracked by the compiler. Querying `length` on a `[number, number]` tuple evaluates directly to the strict numeric literal type `2`.",
            ka: "ჩვეულებრივი მასივებისგან განსხვავებით, რომელთა სიგრძეც დინამიურია (`number`), კორტეჟებს (Tuples) TS-ში აქვთ მკაცრად ფიქსირებული უცვლელი სიგრძე ტიპების დონეზე. ამიტომ `[number, number]` კორტეჟზე `length` თვისებასთან მიმართვა აბრუნებს არა უბრალოდ `number`-ს, არამედ ზუსტ ციფრულ ლიტერალურ ტიპს — `2`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
        docLabel: "Tuple Length Inference — Handbook"
    },
    {
        id: 335,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Что произойдет, если использовать условный тип (Conditional Type) прямо внутри квадратных скобок индексного доступа?",
            en: "Is it valid to nest a Conditional Type expression directly inside the bracket space of an indexed access lookup?",
            ka: "რა მოხდება, თუ გამოვიყენებთ პირობით ტიპს (Conditional Type) პირდაპირ ინდექსური წვდომის კვადრատულ ფრჩხილებში?"
        },
        code: `<span class="kw">type</span> <span class="type">Container</span> = { str: <span class="type">string</span>; num: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Select</span>&lt;<span class="type">T</span>&gt; = <span class="type">Container</span>[<span class="type">T</span> <span class="kw">extends</span> <span class="type">string</span> ? <span class="str">'str'</span> : <span class="str">'num'</span>];
<span class="kw">type</span> <span class="type">Result</span> = <span class="type">Select</span>&lt;<span class="type">string</span>&gt;;`,
        options: [
            { ru: "string", en: "string", ka: "string" },
            { ru: "Ошибка компиляции: квадратные скобки принимают только плоские литералы и дженерики", en: "Compile error: indexed access brackets only tolerate flat literals or plain identifiers", ka: "კომპილაციის შეცდომა: კვადრատული ფრჩხილები იღებენ მხოლოდ ბრტყელ ლიტერალებსა და ჯენერიკებს" },
            { ru: "string | number", en: "string | number", ka: "string | number" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript квадратные скобки индексного доступа принимают абсолютно любые конструкции, которые в результате вычисляются (evaluate) в валидный тип ключа. Так как условный тип `T extends string ? 'str' : 'num'` возвращает строковый литерал `'str'` при `T = string`, данный синтаксис полностью валиден. `Result` примет тип `string`.",
            en: "TypeScript allows any valid type-level expression inside indexed access brackets, provided it evaluates down into a legal key signature. Because the conditional block resolves into the strict literal `'str'` when `T` is `string`, the operation is valid and outputs `string`.",
            ka: "TypeScript-ში კვადრатული ფრჩხილები იღებენ აბსოლუტურად ნებისმიერ კონსტრუქციას, რომელიც შედეგად ითვლება გასაღების ვალიდურ ტიპად. ვინაიდან პირობითი ტიპი `T extends string ? 'str' : 'num'` აბრუნებს სტრიქონულ ლიტერალს `'str'`, როდესაც `T = string`, ეს სინტაქსი სრულიად ვალიდურია. `Result` მიიღებს `string` ტიპს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
        docLabel: "Advanced Bracket Evaluation — Handbook"
    },
    {
        id: 336,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип вернет выражение User['profile']['avatar'] при глубоком поиске, если промежуточное свойство 'profile' помечено как опциональное?",
            en: "What type output is generated from a chained lookup like User['profile']['avatar'] if the middle property 'profile' is marked optional?",
            ka: "რა ტიპს დააბრუნებს `User['profile']['avatar']` გამოსახულება ღრმა ძებნისას, თუ შუალედური თვისება 'profile' მონიშნულია როგორც არასავალდებულო?"
        },
        code: `<span class="kw">type</span> <span class="type">User</span> = { profile?: { avatar: <span class="type">string</span> } };
<span class="kw">type</span> <span class="type">AvatarType</span> = <span class="type">User</span>[<span class="str">'profile'</span>][<span class="str">'avatar'</span>];`,
        options: [
            { ru: "Ошибка компиляции: тип свойства 'profile' включает undefined, у которого нет свойства 'avatar'", en: "Compile error: the property 'profile' includes 'undefined' which has no member 'avatar'", ka: "კომპილაციის შეცდომა: 'profile' თვისების ტიპი მოიცავს undefined-ს, რომელსაც არ გააჩნია 'avatar' თვისება" },
            { ru: "string | undefined", en: "string | undefined", ka: "string | undefined" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "any", en: "any", ka: "any" }
        ],
        correct: 0,
        explanation: {
            ru: "Это частая ловушка. Так как `profile` является опциональным (`profile?`), его тип равен `{ avatar: string } | undefined`. Когда мы пишем первую часть `User['profile']`, мы получаем этот Union. Следующий шаг `['avatar']` пытается прочесть свойство из `undefined`, что вызывает строгую ошибку компиляции (Property 'avatar' does not exist on type 'undefined').",
            en: "This is a common pitfall. Because `profile` is optional, its extracted signature expands to `{ avatar: string } | undefined`. Chaining `['avatar']` directly after that fails, because TypeScript complains that you are trying to read a property from a type that could be `undefined`.",
            ka: "ეს არის ხშირი მახე. ვინაიდან `profile` არასავალდებულოა (`profile?`), მისი ტიპი არის `{ avatar: string } | undefined`. როდესაც ვწერთ პირველ ნაწილს `User['profile']`, ჩვენ ვიღებთ ამ Union-ს. შემდეგი ნაბიჯი `['avatar']` ცდილობს თვისების წაკითხვას `undefined`-დან, რაც იწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Optional Chaining Constraints — Handbook"
    },
    {
        id: 337,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Как безопасно обойти ошибку компиляции при глубоком индексном доступе к опциональному свойству объекта?",
            en: "How can you safely extract a sub-nested type from an optional property path without triggering a compiler error?",
            ka: "როგორ ავუაროთ გვერდი უსაფრთხოდ კომპილაციის შეცდომას არასავალდებულო თვისებაზე ღრმა ინდექსური წვდომისას?"
        },
        code: `<span class="kw">type</span> <span class="type">User</span> = { profile?: { avatar: <span class="type">string</span> } };
<span class="kw">type</span> <span class="type">SafeAvatar</span> = <span class="type">Exclude</span>&lt;<span class="type">User</span>[<span class="str">'profile'</span>], <span class="type">undefined</span>&gt;[<span class="str">'avatar'</span>];`,
        options: [
            { ru: "Использовать встроенную утилиту Exclude или NonNullable для удаления undefined перед следующим шагом доступа", en: "Deploy the Exclude or NonNullable utility wrappers to clear out undefined before navigating the next index slot", ka: "Exclude ან NonNullable სერვისების გამოყენება undefined-ის წასაშლელად წვდომის შემდეგ ნაბიჯამდე" },
            { ru: "Использовать синтаксис с вопросительным знаком: User['profile']?['avatar']", en: "Apply an operational type question mark modifier: User['profile']?['avatar']", ka: "კითხვის ნიშნიანი სინტაქსის გამოყენება: User['profile']?['avatar']" },
            { ru: "Использовать точку вместо скобок", en: "Swap the bracket design blocks entirely for runtime dot notations", ka: "წერტილის გამოყენება ფრჩხილების ნაცვლად" },
            { ru: "Никак, TypeScript запрещает чтение подтипов у опциональных объектов", en: "It is impossible; TypeScript blocks deep evaluation of optional sub-objects entirely", ka: "никак, TS კრძალავს არასავალდებულო ობიექტების ქვეტიპების წაკითხვას" }
        ],
        correct: 0,
        explanation: {
            ru: "В TypeScript на уровне типов не существует оператора опциональной цепочки (типа `?.`). Чтобы безопасно углубиться в опциональное свойство, необходимо предварительно отсечь от него тип `undefined`. Это делается с помощью встроенных утилит `Exclude<..., undefined>` или `NonNullable<...>`.",
            en: "TypeScript does not support optional chaining syntax operators (like `?.`) inside static type declarations. To safely traverse an optional route, you must exclude `undefined` upfront by wrapping the initial lookup segment inside an `Exclude` or `NonNullable` utility.",
            ka: "TypeScript-ში ტიპების დონეზე არ არსებობს არასავალდებულო ჯაჭვის ოპერატორი (როგორიცაა `?.`). არასავალდებულო თვისებაში უსაფრთხოდ ჩასასვლელად საჭიროა წინასწარ მოვაცილოთ მას `undefined` ტიპი. ეს კეთდება სერვისებით `Exclude<..., undefined>` ან `NonNullable<...>`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/utility-types.html",
        docLabel: "Advanced Utility Type Filtering — Handbook"
    },
    {
        id: 338,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Какой тип будет извлечен, если применить индексный доступ к readonly-массиву строк с использованием ключевого слова number?",
            en: "What type is evaluated when performing a number index lookup against a ReadonlyArray collection?",
            ka: "რა ტიპი ამოიღება, თუ გამოვიყენებთ ინდექსურ წვდომას readonly-სტრიქონების მასივზე საკვანძო სიტყვა number-ის დახმარებით?"
        },
        code: `<span class="kw">const</span> actions = [<span class="str">"login"</span>, <span class="str">"logout"</span>] <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">ActionType</span> = (<span class="kw">typeof</span> actions)[<span class="type">number</span>];`,
        options: [
            { ru: "'login' | 'logout' (Union строковых литералов)", en: "'login' | 'logout' (a strict string literal union)", ka: "'login' | 'logout' (სტრიქონული ლიტერალების Union-ი)" },
            { ru: "string", en: "string", ka: "string" },
            { ru: "readonly string[]", en: "readonly string[]", ka: "readonly string[]" },
            { ru: "never", en: "never", ka: "never" }
        ],
        correct: 0,
        explanation: {
            ru: "Комбинация `as const` превращает обычный массив в `readonly` кортеж литералов. Когда мы запрашиваем его элементы через `[number]`, оператор просматривает все существующие индексы и собирает их точные литеральные значения, формируя Union-тип: `\"login\" | \"logout\"`.",
            en: "The `as const` assertion maps a mutable array structure into a frozen read-only tuple of literal values. Applying the `[number]` lookup tool tells the compiler to gather all index constants together, resolving cleanly into the literal union `\"login\" | \"logout\"`.",
            ka: "`as const` კომბინაცია ჩვეულებრივ მასივს აქცევს ლიტერალების `readonly` კორტეჟად. როდესაც ვითხოვთ მის ელემენტებს `[number]`-ით, ოპერატორი ამოწმებს ყველა არსებულ ინდექსს და აგროვებს მათ ზუსტ ლიტერალურ მნიშვნელობებს Union-ტიპში: `\"login\" | \"logout\"`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Arrays Indexing — Handbook"
    },
    {
        id: 339,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Что произойдет, если в качестве ключа индексного доступа попытаться передать логический тип boolean?",
            en: "What type-check event occurs when providing the primitive type boolean as the key inside an indexed access type definition?",
            ka: "რა მოხდება, თუ ინდექსური წვდომის გასაღებად ვეცდებით ლოგიკური ტიპის (boolean) გადაცემას?"
        },
        code: `<span class="kw">type</span> <span class="type">Toggle</span> = { true: <span class="type">string</span>; false: <span class="type">number</span> };
<span class="kw">type</span> <span class="type">Check</span> = <span class="type">Toggle</span>[<span class="type">boolean</span>];`,
        options: [
            { ru: "string | number (так как boolean раскладывается в true | false)", en: "string | number (since the boolean primitive splits into the union true | false)", ka: "string | number (ვინაიდან boolean იშლება true | false-ად)" },
            { ru: "Ошибка компиляции: тип boolean нельзя использовать в качестве индекса", en: "Compile error: the primitive type boolean cannot be used as a direct index signature lookup", ka: "კომპილაციის შეცდომა: boolean ტიპის გამოყენება ინდექსად დაუშვებელია" },
            { ru: "any", en: "any", ka: "any" },
            { ru: "unknown", en: "unknown", ka: "unknown" }
        ],
        correct: 0,
        explanation: {
            ru: "Это продвинутая фича TypeScript. Тип `boolean` внутренне интерпретируется компилятором как Union-тип `true | false`. Когда мы передаем `boolean` в квадратные скобки объекта `Toggle`, TypeScript превращает это в `Toggle[true | false]`, успешно извлекая и объединяя типы обоих свойств в `string | number`.",
            en: "This is an elegant built-in TypeScript mechanic. The global primitive `boolean` is evaluated under the hood as the union literal `true | false`. Passing `boolean` into `Toggle[...]` evaluates as `Toggle[true | false]`, creating the output: `string | number`.",
            ka: "ეს არის TypeScript-ის მოწინავე ფუნქცია. `boolean` ტიპი შიგნიდან ინტერპრეტირდება კომპილატორის მიერ როგორც `true | false` Union-ტიპი. როდესაც გადავცემთ `boolean`-ს `Toggle` ობიექტის კვადრატულ ფრჩხილებში, TS ამას გარდაქმნის `Toggle[true | false]`-ად და აბრუნებს `string | number`-ს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
        docLabel: "Boolean Index Distributivity — Handbook"
    },
    {
        id: 340,
        category: { ru: "Индексный доступ к типам", en: "Indexed Access Types", ka: "ინდექსური წვდომის ტიპები" },
        tag: "indexed-access",
        question: {
            ru: "Влияет ли использование индексного доступа на производительность компиляции (compile time) и размер итогового JavaScript-кода (runtime)?",
            en: "Does deploying indexed access types impact compile-time checking performance or bloat the final generated JavaScript bundle size?",
            ka: "ახდენს თუ არა გავლენას ინდექსური წვდომის გამოყენება კომპილაციის პროดუქტიულობაზე (compile time) და საბოლოო JavaScript კოდის ზომაზე (runtime)?"
        },
        code: `<span class="kw">type</span> <span class="type">Data</span> = { info: <span class="type">string</span> };
<span class="kw">type</span> <span class="type">Info</span> = <span class="type">Data</span>[<span class="str">'info'</span>];`,
        options: [
            { ru: "Не влияет на рантайм (полностью удаляется), оказывает минимальную стандартную нагрузку на компилятор", en: "Zero runtime overhead (completely erased), introduces standard micro-load onto the compiler analysis threads", ka: "არ მოქმედებს runtime-ზე (მთლიანად იშლება), ახდენს მინიმალურ სტანდარტულ დატვირთვას კომპილატორზე" },
            { ru: "Увеличивает размер итогового JS-файла, добавляя туда прокси-объекты", en: "Bloats the JS build footprint by emitting structural proxy maps under the hood", ka: "ზრდის საბოლოო JS ფაილის ზომას მასში პროქსი-ობიექტების დამატებით" },
            { ru: "Замедляет выполнение кода в браузере в 2 раза", en: "Severely throttles browser execution performance by a factor of 2", ka: "2-ჯერ ანელებს კოდის შესრულებას ბრაუზერში" },
            { ru: "Блокирует работу минификаторов кода", en: "Prevents code minifiers from processing output scripts correctly", ka: "ბლოკავს კოდის მინიფიკატორების მუშაობას" }
        ],
        correct: 0,
        explanation: {
            ru: "Индексный доступ к типам — это сугубо статическая фича TypeScript (compile-time type level). При транспиляции в JavaScript строки объявлений типов `type Info = ...` бесследно удаляются компилятором (Type Erasure). На размер бандла и скорость выполнения в браузере это не влияет никак.",
            en: "Indexed access operations run exclusively on the compile-time type deck. During JavaScript generation, all type alias statements are completely stripped from the output scripts (Type Erasure). This guarantees zero runtime performance drops and zero bundle inflation.",
            ka: "ტიპებზე ინდექსური წვდომა არის სუფთა სტატიკური ფუნქცია TypeScript-ში (compile-time). JavaScript-ში ტრანსპილაციისას ტიპების გამოცხადების ხაზები უკვალოდ იშლება კომპილატორის მიერ (Type Erasure). შესაბამისად, ის არანაირ გავლენას არ ახდენს ფაილის ზომასა და შესრულების სიჩქარეზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-type-operator.html",
        docLabel: "Type Erasing Mechanics — Handbook"
    },

    // 18. AS CONST (CONST ASSERTIONS)
    {
        id: 341,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что произойдет при добавлении директивы 'as const' к объекту?",
            en: "What exactly happens when you append 'as const' to an object literal?",
            ka: "რა ხდება ობიექტზე 'as const' დირექტივის დამატებისას?"
        },
        code: `<span class="kw">const</span> routes = { home: <span class="str">'/home'</span>, admin: <span class="str">'/admin'</span> } <span class="kw">as const</span>;`,
        options: [
            { ru: "Все свойства получают модификатор readonly, а строки становятся точными литеральными типами", en: "All fields become strictly readonly, and strings narrow down to literal types", ka: "ყველა თვისება ხდება readonly, ხოლო სტრიქონები იქცევიან ზუსტ ლიტერალურ ტიპებად" },
            { ru: "Объект автоматически замораживается на уровне JavaScript через Object.freeze()", en: "The object triggers an automatic native JavaScript Object.freeze() in runtime", ka: "ობიექტი ავტომატურად იყინება JS-ის დონეზე Object.freeze()-ის საშუალებით" },
            { ru: "Тип объекта расширяется до общих типов string", en: "The object properties automatically widen to generalized string types", ka: "ობიექტის თვისებების ტიპი ფართოვდება ზოგად string ტიპებამდე" },
            { ru: "Это приводит к ошибке синтаксиса компилятора", en: "The notation crashes as an invalid deployment syntax error", ka: "ეს იწვევს კომპილატორის სინტაქსურ შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Директива `as const` (Const Assertions) переводит объект в режим глубокого иммутабельного литерала на уровне системы типов. Во-первых, все строковые поля сужаются от общего `string` до конкретного значения (например, тип поля home станет конкретно `'/home'`, а не просто `string`). Во-вторых, все поля (даже глубоко вложенные) получают флаг `readonly`, защищая объект от изменений. Помните: в рантайме JS код остаётся обычным мутабельным объектом, если вы дополнительно не применили Object.freeze().",
            en: "The `as const` directive locks down an object into a deep immutable literal structure inside the type system. First, string types narrow from generalized global `string` types to their concrete content (e.g., field type home becomes exactly `'/home'`). Second, fields receive deep `readonly` flags. It affects static checking; native JS runtime code stays mutable.",
            ka: "`as const` დირექტივა (Const Assertions) გადააქვს ობიექტი ღრმა უცვლელი ლიტერალის რეჟიმში ტიპების სისტემის დონეზე. პირველი, სტრიქონები ვიწროვდება ზოგადი `string`-იდან კონკრეტულ მნიშვნელობებამდე (მაგ. home-ის ტიპი გახდება `'/home'`). მეორეც, ყველა ველი ხდება `readonly`. თუმცა runtime-ში ის ჩვეულებრივი ობიექტია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Assertions — Handbook"
    },
    {
        id: 342,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как влияет 'as const' на массив, если он используется при инициализации переменной?",
            en: "How does 'as const' transform an array literal when used during variable declaration?",
            ka: "როგორ მოქმედებს 'as const' მასივზე, თუ ის გამოყენებულია ცვლადის ინიციალიზაციისას?"
        },
        code: `<span class="kw">const</span> roles = [<span class="str">'admin'</span>, <span class="str">'user'</span>] <span class="kw">as const</span>;`,
        options: [
            { ru: "Массив превращается в readonly-кортеж (tuple) ['admin', 'user']", en: "The array becomes a readonly tuple: ['admin', 'user']", ka: "მასივი იქცევა readonly-კორტეჟად (tuple) ['admin', 'user']" },
            { ru: "Массив остается обычным массивом string[]", en: "The array remains a standard mutable string[]", ka: "მასივი რჩება ჩვეულებრივ მასივად string[]" },
            { ru: "Элементы массива становятся типом any", en: "Array elements are widened to the any type", ka: "მასივის ელემენტები ხდება any ტიპის" },
            { ru: "Вызывается ошибка, так как 'as const' нельзя использовать с массивами", en: "An error occurs; 'as const' cannot be used with arrays", ka: "გამოიწვევა შეცდომა, რადგან 'as const'-ის გამოყენება მასივებთან არ შეიძლება" }
        ],
        correct: 0,
        explanation: {
            ru: "Без `as const` массив `['admin', 'user']` типизируется как `string[]` (мутабельный). С `as const` TypeScript выводит его как `readonly [\"admin\", \"user\"]. Это фиксирует не только типы элементов, но и их количество, а также порядок (индексы), делая массив иммутабельным кортежем.",
            en: "Without `as const`, the array `['admin', 'user']` is inferred as `string[]` (mutable). With `as const`, TypeScript treats it as `readonly [\"admin\", \"user\"]. This fixes not just the element types, but the length and order of the array, effectively turning it into an immutable tuple.",
            ka: "`as const`-ის გარეშე მასივი `['admin', 'user']` ტიპიზირდება როგორც `string[]` (მუტაბელური). `as const`-ით TypeScript მას აფასებს როგორც `readonly [\"admin\", \"user\"]. ეს აფიქსირებს არა მხოლოდ ელემენტების ტიპებს, არამედ მათ რაოდენობას და თანმიმდევრობას, რაც მას აქცევს იმუტაბელურ კორტეჟად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Arrays — Handbook"
    },
    {
        id: 343,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Можно ли переопределить значение свойства после использования 'as const'?",
            en: "Is it possible to reassign a property value after applying 'as const'?",
            ka: "შესაძლებელია თუ არა თვისების მნიშვნელობის გადაწერა 'as const'-ის გამოყენების შემდეგ?"
        },
        code: `<span class="kw">const</span> config = { port: <span class="num">8080</span> } <span class="kw">as const</span>;
config.port = <span class="num">3000</span>;`,
        options: [
            { ru: "Ошибка: свойство 'port' доступно только для чтения (readonly)", en: "Error: property 'port' is read-only", ka: "შეცდომა: 'port' თვისება ხელმისაწვდომია მხოლოდ წასაკითხად (readonly)" },
            { ru: "Да, так как это обычный JavaScript-объект", en: "Yes, because it's a standard JavaScript object", ka: "დიახ, რადგან ეს ჩვეულებრივი JavaScript-ობიექტია" },
            { ru: "Значение сменится на 3000, но TypeScript выдаст предупреждение", en: "The value changes to 3000, but TS issues a warning", ka: "მნიშვნელობა შეიცვლება 3000-ით, მაგრამ TS გამოსცემს გაფრთხილებას" },
            { ru: "Ошибка возникнет только в рантайме", en: "The error will only appear at runtime", ka: "შეცდომა გამოჩნდება მხოლოდ runtime-ში" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript на этапе проверки типов считает свойства объекта `as const` доступными только для чтения (`readonly`). Попытка присвоить новое значение (`config.port = 3000`) приведет к ошибке компиляции `Cannot assign to 'port' because it is a read-only property`.",
            en: "TypeScript marks properties of `as const` objects as `readonly` during static analysis. Attempting to assign a new value (`config.port = 3000`) triggers a compiler error: `Cannot assign to 'port' because it is a read-only property`.",
            ka: "TypeScript სტატიკური შემოწმების ეტაპზე `as const` ობიექტის თვისებებს თვლის `readonly`-დ. ახალი მნიშვნელობის მინიჭების მცდელობა (`config.port = 3000`) გამოიწვევს კომპილაციის შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Readonly Enforcement — Handbook"
    },
    {
        id: 344,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' влияет на тип вложенных объектов?",
            en: "How does 'as const' affect nested objects?",
            ka: "როგორ მოქმედებს 'as const' ჩადგმულ ობიექტებზე?"
        },
        code: `<span class="kw">const</span> app = { settings: { theme: <span class="str">'dark'</span> } } <span class="kw">as const</span>;`,
        options: [
            { ru: "Только верхний уровень становится readonly", en: "Only the top level becomes readonly", ka: "მხოლოდ ზედა დონე ხდება readonly" },
            { ru: "Глубокая заморозка: все вложенные свойства также становятся readonly", en: "Deep freeze: all nested properties also become readonly", ka: "ღრმა გაყინვა: ყველა ჩადგმული თვისებაც ხდება readonly" },
            { ru: "Вложенные свойства остаются изменяемыми", en: "Nested properties remain mutable", ka: "ჩადგმული თვისებები რჩება ცვლადი" },
            { ru: "Вложенные свойства становятся типом any", en: "Nested properties become the any type", ka: "ჩადგმული თვისებები ხდება any ტიპის" }
        ],
        correct: 1,
        explanation: {
            ru: "Использование `as const` обеспечивает рекурсивную (глубокую) типизацию как `readonly`. Все вложенные объекты и массивы внутри `app` также будут защищены от изменений на уровне типов.",
            en: "Using `as const` applies recursive (deep) `readonly` typing. Every nested object and array within the structure is similarly protected from modification by the type system.",
            ka: "`as const`-ის გამოყენება უზრუნველყოფს რეკურსიულ (ღრმა) `readonly` ტიპიზაციას. ყველა ჩადგმული ობიექტი და მასივი `app`-ის შიგნით ასევე დაცული იქნება ცვლილებებისგან ტიპების დონეზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Deep Readonly — Handbook"
    },
    {
        id: 345,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что будет, если использовать 'as const' с числовым литералом?",
            en: "What happens when you use 'as const' with a numeric literal?",
            ka: "რა მოხდება, თუ გამოვიყენებთ 'as const'-ს რიცხვით ლიტერალთან?"
        },
        code: `<span class="kw">const</span> version = <span class="num">1</span> <span class="kw">as const</span>;`,
        options: [
            { ru: "Тип будет точно 1, а не number", en: "The type will be exactly 1, not number", ka: "ტიპი იქნება ზუსტად 1 და არა number" },
            { ru: "Тип будет number", en: "The type will be number", ka: "ტიპი იქნება number" },
            { ru: "Ошибка: as const не работает с примитивами", en: "Error: as const does not work with primitives", ka: "შეცდომა: as const არ მუშაობს პრიმიტივებთან" },
            { ru: "Тип будет any", en: "The type will be any", ka: "ტიპი იქნება any" }
        ],
        correct: 0,
        explanation: {
            ru: "Хотя при использовании `const` для чисел TypeScript и так выводит литеральный тип (`1`), явное указание `as const` закрепляет это поведение и гарантирует, что тип не будет расширен до `number` при передаче в функции или изменении структуры.",
            en: "Even though `const` declarations for primitives already infer literal types (like `1`), explicitly adding `as const` reinforces this, ensuring the type remains the literal `1` and does not widen to `number` in generic contexts.",
            ka: "მიუხედავად იმისა, რომ `const`-ით რიცხვების დეკლარირებისას TypeScript ისედაც აფასებს ლიტერალურ ტიპს (`1`), `as const`-ის მითითება ამას ამყარებს და გარანტიას იძლევა, რომ ტიპი არ გაფართოვდება `number`-მდე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Literal Inference — Handbook"
    },
    {
        id: 346,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' помогает при работе с Union-типами из массивов?",
            en: "How does 'as const' assist when deriving union types from arrays?",
            ka: "როგორ გვეხმარება 'as const' მასივებიდან Union-ტიპების მიღებისას?"
        },
        code: `<span class="kw">const</span> colors = [<span class="str">'red'</span>, <span class="str">'green'</span>] <span class="kw">as const</span>;
<span class="kw">type</span> <span class="type">Color</span> = <span class="kw">typeof</span> colors[<span class="type">number</span>];`,
        options: [
            { ru: "Тип Color будет 'red' | 'green'", en: "The Color type will be 'red' | 'green'", ka: "Color ტიპი იქნება 'red' | 'green'" },
            { ru: "Тип Color будет string", en: "The Color type will be string", ka: "Color ტიპი იქნება string" },
            { ru: "Тип Color будет any", en: "The Color type will be any", ka: "Color ტიპი იქნება any" },
            { ru: "Код вызовет ошибку", en: "The code will throw an error", ka: "კოდი გამოიწვევს შეცდომას" }
        ],
        correct: 0,
        explanation: {
            ru: "Это один из самых частых сценариев использования. Без `as const` массив будет иметь тип `string[]`, и `typeof colors[number]` превратится просто в `string`. Благодаря `as const` массив становится литеральным кортежем, и `typeof colors[number]` извлекает объединение точных значений: `'red' | 'green'`.",
            en: "This is a common pattern. Without `as const`, the array is typed as `string[]`, so `typeof colors[number]` evaluates to `string`. With `as const`, the array becomes a literal tuple, allowing `typeof colors[number]` to extract the exact union of values: `'red' | 'green'`.",
            ka: "ეს ერთ-ერთი ყველაზე ხშირი სცენარია. `as const`-ის გარეშე მასივი იქნება `string[]` ტიპის, ხოლო `typeof colors[number]` გახდება უბრალოდ `string`. `as const`-ის წყალობით მასივი ხდება ლიტერალური კორტეჟი და `typeof colors[number]` ამოიღებს ზუსტ მნიშვნელობათა გაერთიანებას: `'red' | 'green'`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Union from Array — Handbook"
    },
    {
        id: 347,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "В чем разница между const и as const?",
            en: "What is the difference between const and as const?",
            ka: "რა განსხვავებაა const-სა და as const-ს შორის?"
        },
        code: `<span class="kw">const</span> x = <span class="str">'hello'</span>;
<span class="kw">const</span> y = <span class="str">'hello'</span> <span class="kw">as const</span>;`,
        options: [
            { ru: "Для примитивов (строк) разницы почти нет", en: "For primitives (strings), there is almost no difference", ka: "პრიმიტივებისთვის (სტრიქონებისთვის) განსხვავება თითქმის არ არსებობს" },
            { ru: "as const делает переменную изменяемой", en: "as const makes the variable mutable", ka: "as const ცვლადს მუტაბელურს ხდის" },
            { ru: "const нельзя использовать с объектами", en: "const cannot be used with objects", ka: "const-ის გამოყენება ობიექტებთან არ შეიძლება" },
            { ru: "as const всегда создает тип any", en: "as const always creates the any type", ka: "as const ყოველთვის ქმნის any ტიპს" }
        ],
        correct: 0,
        explanation: {
            ru: "Для простых примитивов (строки, числа) `const` уже выводит литеральный тип. Однако для объектов и массивов `const` лишь запрещает переприсвоение самой переменной, но позволяет менять свойства объекта. `as const` же делает сам объект (и все его свойства) иммутабельным на уровне типов.",
            en: "For simple primitives, `const` already infers the literal type. However, for objects/arrays, `const` only prevents reassigning the variable itself; it does not protect object properties. `as const` applies deep readonly protection to the structure itself.",
            ka: "მარტივი პრიმიტივებისთვის (სტრიქონები, რიცხვები) `const` უკვე აფასებს ლიტერალურ ტიპს. თუმცა, ობიექტებისა და მასივებისთვის `const` კრძალავს მხოლოდ ცვლადის გადამისამართებას, ხოლო თვისებების ცვლილება შესაძლებელია. `as const` კი ობიექტს (და მის თვისებებს) ხდის იმუტაბელურს ტიპების დონეზე."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const vs as const — Handbook"
    },
    {
        id: 348,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Можно ли использовать 'as const' с функциями?",
            en: "Can 'as const' be used with functions?",
            ka: "შესაძლებელია თუ არა 'as const'-ის გამოყენება ფუნქციებთან?"
        },
        code: `<span class="kw">const</span> add = (a: <span class="type">number</span>, b: <span class="type">number</span>) =&gt; a + b;
<span class="kw">const</span> op = add <span class="kw">as const</span>;`,
        options: [
            { ru: "Да, но это не имеет смысла, так как функции не меняются", en: "Yes, but it serves no real purpose as functions do not change structure", ka: "დიახ, მაგრამ ამას აზრი არ აქვს, რადგან ფუნქციები არ იცვლება" },
            { ru: "Нет, вызовет ошибку", en: "No, it will cause an error", ka: "არა, გამოიწვევს შეცდომას" },
            { ru: "Да, функция станет readonly", en: "Yes, the function will become readonly", ka: "დიახ, ფუნქცია გახდება readonly" },
            { ru: "Функция станет типом any", en: "The function will become any", ka: "ფუნქცია გახდება any" }
        ],
        correct: 0,
        explanation: {
            ru: "Хотя TypeScript не запрещает писать `as const` после функций, это не оказывает влияния на их поведение, так как функции не являются объектами с литеральными свойствами, которые нужно «замораживать» таким образом.",
            en: "While TypeScript does not forbid appending `as const` to functions, it has no meaningful effect. Functions are not structures with mutable properties that need the type-level 'freeze' that `as const` provides.",
            ka: "მიუხედავად იმისა, რომ TypeScript არ კრძალავს ფუნქციებთან `as const`-ის დაწერას, ეს მათ ქცევაზე გავლენას არ ახდენს, რადგან ფუნქციები არ არის ისეთი ობიექტები ლიტერალური თვისებებით, რომლებიც უნდა 'გაიყინოს'."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Functions and Const Assertions — Handbook"
    },
    {
        id: 349,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' влияет на enum-подобные объекты?",
            en: "How does 'as const' affect enum-like objects?",
            ka: "როგორ მოქმედებს 'as const' enum-ის მსგავს ობიექტებზე?"
        },
        code: `<span class="kw">const</span> Status = {
  Active: <span class="num">0</span>,
  Inactive: <span class="num">1</span>
} <span class="kw">as const</span>;`,
        options: [
            { ru: "Это стандартный способ создания 'Type-safe Enum'", en: "This is the standard approach to creating a 'Type-safe Enum'", ka: "ეს არის 'Type-safe Enum'-ის შექმნის სტანდარტული გზა" },
            { ru: "Это ухудшает производительность", en: "It degrades performance", ka: "ეს აუარესებს პროდუქტიულობას" },
            { ru: "Это делает объект нечитаемым", en: "It makes the object unreadable", ka: "ეს ობიექტს არაკითხვადს ხდის" },
            { ru: "Объект превращается в обычный enum", en: "The object turns into a standard enum", ka: "ობიექტი იქცევა ჩვეულებრივ enum-ად" }
        ],
        correct: 0,
        explanation: {
            ru: "Использование `as const` для объектов-констант — это рекомендуемый способ создания безопасных перечислений (enums) в современном TypeScript. Это гарантирует, что значения не будут изменены, а типы будут строгими литералами.",
            en: "Using `as const` for constant objects is the community-recommended approach for creating type-safe enums in modern TypeScript. It ensures values cannot be changed and types remain strict literals.",
            ka: "ობიექტებისთვის `as const`-ის გამოყენება არის თანამედროვე TypeScript-ში უსაფრთხო Enum-ების შექმნის რეკომენდებული გზა. ეს უზრუნველყოფს, რომ მნიშვნელობები არ შეიცვლება, ხოლო ტიპები დარჩება მკაცრი ლიტერალები."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
        docLabel: "Type-safe Enums — Handbook"
    },
    {
        id: 350,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что если написать 'as const' после вызова функции?",
            en: "What happens if you use 'as const' after a function call?",
            ka: "რა მოხდება, თუ 'as const'-ს დავწერთ ფუნქციის გამოძახების შემდეგ?"
        },
        code: `<span class="kw">const</span> getSettings = () =&gt; ({ theme: <span class="str">'light'</span> });
<span class="kw">const</span> settings = getSettings() <span class="kw">as const</span>;`,
        options: [
            { ru: "as const не работает с возвращаемыми значениями функций напрямую", en: "as const does not work with function return values directly", ka: "as const პირდაპირ არ მუშაობს ფუნქციის დაბრუნებულ მნიშვნელობებთან" },
            { ru: "Это заморозит результат функции", en: "It will freeze the function result", ka: "ეს გაყინავს ფუნქციის შედეგს" },
            { ru: "Это вызовет ошибку компиляции", en: "It will cause a compilation error", ka: "ეს გამოიწვევს კომპილაციის შეცდომას" },
            { ru: "Это превратит результат в строку", en: "It will turn the result into a string", ka: "ეს შედეგს აქცევს სტრიქონად" }
        ],
        correct: 0,
        explanation: {
            ru: "Оператор `as const` является утверждением типа (type assertion). Он применяется к выражению перед ним. Хотя технически это можно написать после вызова функции, TypeScript не сможет «заморозить» то, что функция вернула динамически, если тип возвращаемого значения (return type) функции уже был шире, чем литерал. `as const` не может сузить тип, если сигнатура функции уже явно задала расширенный тип.",
            en: "`as const` is a type assertion applied to the preceding expression. While syntactically allowed after a function call, it won't retroactively 'freeze' the result if the function signature already defined a wider return type. Assertions cannot narrow down types if they conflict with established function signatures.",
            ka: "`as const` არის ტიპის ასერცია. მიუხედავად იმისა, რომ სინტაქსურად ეს შესაძლებელია, TypeScript ვერ 'გაყინავს' იმას, რაც ფუნქციამ დინამიურად დააბრუნა, თუ ფუნქციის return type უკვე უფრო ფართო იყო. ასერციას არ შეუძლია ტიპის შევიწროება, თუ ის ეწინააღმდეგება ფუნქციის დეკლარირებულ სიგნატურას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Assertions Limitations — Handbook"
    },
    {
        id: 351,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Влияет ли 'as const' на тип свойства, если оно было явно типизировано?",
            en: "Does 'as const' affect a property type if it was explicitly typed?",
            ka: "მოქმედებს თუ არა 'as const' თვისების ტიპზე, თუ ის უკვე ექსპლიციტურად იყო ტიპიზირებული?"
        },
        code: `<span class="kw">const</span> obj: { port: <span class="type">number</span> } = { port: <span class="num">80</span> } <span class="kw">as const</span>;`,
        options: [
            { ru: "Нет, явная типизация имеет приоритет", en: "No, explicit typing takes precedence", ka: "არა, ექსპლიციტურ ტიპიზაციას აქვს პრიორიტეტი" },
            { ru: "Да, as const всё равно сделает свойство литералом", en: "Yes, as const will still make the property a literal", ka: "დიახ, as const მაინც აქცევს თვისებას ლიტერალად" },
            { ru: "Это вызовет ошибку несовместимости", en: "This causes an incompatibility error", ka: "ეს გამოიწვევს შეუთავსებლობის შეცდომას" },
            { ru: "Это сделает свойство any", en: "This makes the property any", ka: "ეს თვისებას აქცევს any-ად" }
        ],
        correct: 0,
        explanation: {
            ru: "Явная аннотация типа (`{ port: number }`) ограничивает TypeScript. Так как `number` — это широкий тип, а литерал `80` (который `as const` пытается навязать) не является подмножеством, которое `as const` может расширить при явном `number`, часто возникает конфликт. Но если тип совместим, приоритет остается за аннотацией.",
            en: "Explicit type annotations take precedence. If you explicitly define a type as `number`, it overrides the literal inference that `as const` would otherwise provide. If you define `{ port: number }`, `as const` cannot 'force' the value to be a literal `80` at the type level if the variable is already restricted to `number`.",
            ka: "ექსპლიციტურ ტიპის ანოტაციას აქვს პრიორიტეტი. თუ ტიპს განსაზღვრავთ როგორც `number`, ეს გადაფარავს ლიტერალურ ინფერენსს, რასაც `as const` შესთავაზებდა. თუ განსაზღვრავთ `{ port: number }`, `as const` ვერ აიძულებს მნიშვნელობას იყოს ლიტერალი `80`, თუ ცვლადი უკვე შეზღუდულია `number`-ით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Type Priority — Handbook"
    },
    {
        id: 352,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что произойдет, если использовать 'as const' с пустым объектом?",
            en: "What happens if you use 'as const' with an empty object?",
            ka: "რა მოხდება, თუ გამოვიყენებთ 'as const'-ს ცარიელ ობიექტთან?"
        },
        code: `<span class="kw">const</span> empty = {} <span class="kw">as const</span>;`,
        options: [
            { ru: "Тип будет Readonly<{}>", en: "The type will be Readonly<{}>", ka: "ტიპი იქნება Readonly<{}>" },
            { ru: "Тип будет any", en: "The type will be any", ka: "ტიპი იქნება any" },
            { ru: "Ошибка: нельзя использовать as const с пустыми объектами", en: "Error: cannot use as const with empty objects", ka: "შეცდომა: ცარიელ ობიექტებთან as const-ის გამოყენება არ შეიძლება" },
            { ru: "Тип будет object", en: "The type will be object", ka: "ტიპი იქნება object" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript создает `Readonly<{}>`. Это означает, что вы не можете добавлять свойства в этот объект, так как он зафиксирован как пустой.",
            en: "TypeScript infers `Readonly<{}>`. This strictly prevents adding any properties to the object, as its structure is locked in its current empty state.",
            ka: "TypeScript ქმნის `Readonly<{}>`. ეს ნიშნავს, რომ თქვენ ვერ დაამატებთ თვისებებს ამ ობიექტს, რადგან ის დაფიქსირებულია როგორც ცარიელი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Empty Object Const — Handbook"
    },
    {
        id: 353,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' взаимодействует с символами (Symbols)?",
            en: "How does 'as const' interact with Symbols?",
            ka: "როგორ ურთიერთქმედებს 'as const' სიმბოლოებთან (Symbols)?"
        },
        code: `<span class="kw">const</span> S = Symbol(<span class="str">'id'</span>) <span class="kw">as const</span>;`,
        options: [
            { ru: "Это вызовет ошибку", en: "It will cause an error", ka: "ეს გამოიწვევს შეცდომას" },
            { ru: "Тип будет уникальным символом (unique symbol)", en: "The type will be unique symbol", ka: "ტიპი იქნება უნიკალური სიმბოლო (unique symbol)" },
            { ru: "Тип будет symbol", en: "The type will be symbol", ka: "ტიპი იქნება symbol" },
            { ru: "Тип будет any", en: "The type will be any", ka: "ტიპი იქნება any" }
        ],
        correct: 1,
        explanation: {
            ru: "Когда вы используете `as const` с `Symbol()`, TypeScript пытается вывести тип как `unique symbol`, что делает его более специфичным, чем просто `symbol`.",
            en: "When using `as const` with `Symbol()`, TypeScript attempts to narrow the type to `unique symbol`, which is a more specific type than the generic `symbol` primitive.",
            ka: "როდესაც იყენებთ `as const`-ს `Symbol()`-თან, TypeScript ცდილობს ტიპი დაასკვნას როგორც `unique symbol`, რაც უფრო სპეციფიკურია, ვიდრე უბრალოდ `symbol` პრიმიტივი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/symbols.html",
        docLabel: "Symbols and Const Assertions"
    },
    {
        id: 354,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что произойдет, если попытаться изменить свойство вложенного массива в объекте 'as const'?",
            en: "What happens if you try to change a property of a nested array in an 'as const' object?",
            ka: "რა მოხდება, თუ ვეცდებით ჩადგმული მასივის თვისების შეცვლას 'as const' ობიექტში?"
        },
        code: `<span class="kw">const</span> obj = { items: [<span class="num">1</span>, <span class="num">2</span>] } <span class="kw">as const</span>;
obj.items.push(<span class="num">3</span>);`,
        options: [
            { ru: "Ошибка компиляции: свойство 'push' отсутствует", en: "Compile error: property 'push' does not exist", ka: "კომპილაციის შეცდომა: 'push' თვისება არ არსებობს" },
            { ru: "Работает нормально", en: "Works fine", ka: "მუშაობს ნორმალურად" },
            { ru: "TypeScript выдаст только предупреждение", en: "TypeScript issues a warning only", ka: "TypeScript გამოსცემს მხოლოდ გაფრთხილებას" },
            { ru: "Ошибка возникнет в браузере", en: "Error occurs in the browser", ka: "შეცდომა წარმოიშობა ბრაუზერში" }
        ],
        correct: 0,
        explanation: {
            ru: "Поскольку `obj` помечен как `as const`, массив `items` становится `readonly`. У `readonly` массивов в TypeScript нет метода `push`, поэтому компилятор выдаст ошибку.",
            en: "Because the object is `as const`, the `items` array is treated as `readonly`. Readonly arrays in TypeScript do not have a `push` method, thus triggering a compile-time error.",
            ka: "ვინაიდან ობიექტი მონიშნულია როგორც `as const`, `items` მასივი ხდება `readonly`. `readonly` მასივებს TypeScript-ში არ აქვთ `push` მეთოდი, ამიტომ კომპილატორი გამოსცემს შეცდომას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Readonly Array Methods — Handbook"
    },
    {
        id: 355,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Можно ли использовать 'as const' с переменной, которая не является литералом?",
            en: "Can 'as const' be used with a variable that is not a literal?",
            ka: "შესაძლებელია თუ არა 'as const'-ის გამოყენება ცვლადთან, რომელიც არ არის ლიტერალი?"
        },
        code: `<span class="kw">const</span> val = x; <span class="kw">const</span> c = val <span class="kw">as const</span>;`,
        options: [
            { ru: "Да, но это не сузит тип, если x не был литералом", en: "Yes, but it won't narrow the type if x wasn't a literal", ka: "დიახ, მაგრამ ეს არ შეავიწროებს ტიპს, თუ x არ იყო ლიტერალი" },
            { ru: "Нет, вызовет ошибку", en: "No, it will cause an error", ka: "არა, გამოიწვევს შეცდომას" },
            { ru: "Это всегда делает тип any", en: "It always makes the type any", ka: "ეს ყოველთვის აქცევს ტიპს any-ად" },
            { ru: "Это работает только с числами", en: "It only works with numbers", ka: "ეს მუშაობს მხოლოდ რიცხვებთან" }
        ],
        correct: 0,
        explanation: {
            ru: "`as const` — это утверждение о том, что выражение является литералом. Если `x` уже был объявлен как `string` или `any`, то `as const` не может «превратить» его в литерал, так как информация об исходном значении уже потеряна.",
            en: "`as const` asserts that the expression is a literal. If `x` was already typed as a general `string` or `any`, `as const` cannot 'force' it to become a specific literal type, as the original value source is already abstracted away.",
            ka: "`as const` არის მტკიცება, რომ გამოსახულება ლიტერალია. თუ `x` უკვე დეკლარირებული იყო როგორც `string` ან `any`, `as const` ვერ 'გადააქცევს' მას ლიტერალად, რადგან თავდაპირველი მნიშვნელობის შესახებ ინფორმაცია უკვე დაკარგულია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Assertion Limitations"
    },
    {
        id: 356,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' влияет на использование объектов в качестве ключей?",
            en: "How does 'as const' affect using objects as keys?",
            ka: "როგორ მოქმედებს 'as const' ობიექტების გასაღებებად გამოყენებაზე?"
        },
        code: `<span class="kw">const</span> keys = [<span class="str">'a'</span>, <span class="str">'b'</span>] <span class="kw">as const</span>;`,
        options: [
            { ru: "Позволяет безопасно использовать их как типы ключей", en: "Allows using them safely as key types", ka: "საშუალებას იძლევა უსაფრთხოდ გამოვიყენოთ ისინი როგორც გასაღების ტიპები" },
            { ru: "Делает их невозможными для использования", en: "Makes them impossible to use", ka: "ხდის მათ გამოუყენებელს" },
            { ru: "Это не влияет на ключи", en: "It does not affect keys", ka: "ეს არ მოქმედებს გასაღებებზე" },
            { ru: "Это превращает ключи в числа", en: "It turns keys into numbers", ka: "ეს გასაღებებს აქცევს რიცხვებად" }
        ],
        correct: 0,
        explanation: {
            ru: "Благодаря `as const` мы получаем точный список ключей (например, `'a' | 'b'`), что позволяет создавать типизированные карты или объекты, где ключи ограничены только этими значениями.",
            en: "Thanks to `as const`, we get the exact list of keys (e.g., `'a' | 'b'`), enabling the creation of strongly-typed maps or objects where keys are restricted strictly to these allowed values.",
            ka: "`as const`-ის წყალობით ჩვენ ვიღებთ გასაღებების ზუსტ სიას (მაგ. `'a' | 'b'`), რაც საშუალებას გვაძლევს შევქმნათ ტიპიზირებული რუკები ან ობიექტები, სადაც გასაღებები შეზღუდულია მხოლოდ ამ მნიშვნელობებით."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Key Restriction — Handbook"
    },
    {
        id: 357,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Можно ли использовать 'as const' для Template Literal Types?",
            en: "Can 'as const' be used for Template Literal Types?",
            ka: "შესაძლებელია თუ არა 'as const'-ის გამოყენება Template Literal Types-ისთვის?"
        },
        code: `<span class="kw">const</span> id = <span class="str"> user_\${<span class="num">1</span>}</span> <span class="kw">as const</span>;`,
        options: [
            { ru: "Да, тип будет 'user_1'", en: "Yes, the type will be 'user_1'", ka: "დიახ, ტიპი იქნება 'user_1'" },
            { ru: "Нет, это приведет к ошибке", en: "No, it leads to an error", ka: "არა, ეს გამოიწვევს შეცდომას" },
            { ru: "Тип будет string", en: "The type will be string", ka: "ტიპი იქნება string" },
            { ru: "Тип будет any", en: "The type will be any", ka: "ტიპი იქნება any" }
        ],
        correct: 0,
        explanation: {
            ru: "Да, TypeScript корректно обрабатывает шаблоны с `as const`, превращая их в литеральные типы.",
            en: "Yes, TypeScript correctly handles template literals with `as const`, inferring them as literal types.",
            ka: "დიახ, TypeScript სწორად ამუშავებს შაბლონებს `as const`-თან ერთად და გარდაქმნის მათ ლიტერალურ ტიპებად."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
        docLabel: "Template Literal Types — Handbook"
    },
    {
        id: 358,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Что произойдет, если использовать 'as const' с переменной, которая уже имеет тип?",
            en: "What happens if you use 'as const' on a variable already typed?",
            ka: "რა მოხდება, თუ გამოვიყენებთ 'as const'-ს ცვლადთან, რომელსაც უკვე აქვს ტიპი?"
        },
        code: `<span class="kw">const</span> a: string = <span class="str">'hello'</span> <span class="kw">as const</span>;`,
        options: [
            { ru: "as const будет проигнорирован в пользу явного типа", en: "as const is ignored in favor of the explicit type", ka: "as const იგნორირებული იქნება ექსპლიციტური ტიპის სასარგებლოდ" },
            { ru: "Ошибка компиляции", en: "Compilation error", ka: "კომპილაციის შეცდომა" },
            { ru: "Тип станет any", en: "The type will become any", ka: "ტიპი გახდება any" },
            { ru: "Работает нормально, но смысл теряется", en: "Works fine, but the point is lost", ka: "მუშაობს ნორმალურად, მაგრამ აზრი იკარგება" }
        ],
        correct: 0,
        explanation: {
            ru: "TypeScript всегда отдает предпочтение явной аннотации типа, если она предоставлена. `as const` здесь лишний.",
            en: "TypeScript prioritizes explicit type annotations. `as const` has no effect here because the type is already constrained.",
            ka: "TypeScript ყოველთვის ანიჭებს უპირატესობას ექსპლიციტურ ანოტაციას, თუ ის მოწოდებულია. `as const` აქ ზედმეტია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Explicit Types vs Const Assertions"
    },
    {
        id: 359,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Как 'as const' влияет на свойства-функции объекта?",
            en: "How does 'as const' affect function properties of an object?",
            ka: "როგორ მოქმედებს 'as const' ობიექტის ფუნქცია-თვისებებზე?"
        },
        code: `<span class="kw">const</span> obj = { fn: () =&gt; <span class="num">1</span> } <span class="kw">as const</span>;`,
        options: [
            { ru: "Свойство fn станет readonly", en: "The fn property becomes readonly", ka: "fn თვისება ხდება readonly" },
            { ru: "Функция удалится", en: "The function is removed", ka: "ფუნქცია წაიშლება" },
            { ru: "Функция превратится в строку", en: "The function turns into a string", ka: "ფუნქცია იქცევა სტრიქონად" },
            { ru: "Тип станет any", en: "The type will become any", ka: "ტიპი გახდება any" }
        ],
        correct: 0,
        explanation: {
            ru: "Функция внутри `as const` объекта станет `readonly`. Это значит, что вы не сможете переопределить эту функцию (например, `obj.fn = () => 2` вызовет ошибку).",
            en: "The function inside an `as const` object becomes `readonly`. You cannot reassign this property (e.g., `obj.fn = () => 2` will cause a compilation error).",
            ka: "`as const` ობიექტის შიგნით ფუნქცია ხდება `readonly`. ეს ნიშნავს, რომ თქვენ ვერ შეცვლით ამ ფუნქციას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Functions in Const Assertions"
    },
    {
        id: 360,
        category: { ru: "Assertions", en: "Assertions", ka: "ასერციები" },
        tag: "assertions",
        question: {
            ru: "Почему 'as const' полезен для библиотек?",
            en: "Why is 'as const' useful for libraries?",
            ka: "რატომ არის 'as const' სასარგებლო ბიბლიოთეკებისთვის?"
        },
        code: `<span class="kw">export</span> <span class="kw">const</span> CONFIG = { ... } <span class="kw">as const</span>;`,
        options: [
            { ru: "Чтобы пользователи библиотеки получали точные типы вместо общих", en: "To ensure library users get exact types instead of general ones", ka: "იმისათვის, რომ ბიბლიოთეკის მომხმარებლებმა მიიღონ ზუსტი ტიპები ზოგადის ნაცვლად" },
            { ru: "Чтобы ускорить компиляцию", en: "To speed up compilation", ka: "კომპილაციის დასაჩქარებლად" },
            { ru: "Чтобы заблокировать изменение конфигурации в рантайме", en: "To lock down runtime configuration", ka: "რანტაიმში კონფიგურაციის შეცვლის დასაბლოკად" },
            { ru: "Это никак не помогает", en: "It doesn't help at all", ka: "ეს საერთოდ არ ეხმარება" }
        ],
        correct: 0,
        explanation: {
            ru: "Когда вы экспортируете объект как `as const`, потребители вашей библиотеки видят точные литеральные значения (например, конкретный статус или значение опции), а не просто `string` или `number`. Это делает API гораздо предсказуемее.",
            en: "When exporting objects with `as const`, consumers of your library get precise literal types (e.g., specific status strings) instead of generic `string` types, significantly improving the predictability and safety of your API.",
            ka: "როდესაც ობიექტებს ექსპორტს უკეთებთ `as const`-ით, თქვენი ბიბლიოთეკის მომხმარებლები ხედავენ ზუსტ ლიტერალურ მნიშვნელობებს (მაგ. კონკრეტული სტატუსი), ნაცვლად ზოგადი `string`-ისა, რაც API-ს გაცილებით პროგნოზირებადს ხდის."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Library API Design"
    },

    // 19. CUSTOM TYPE GUARDS (IS / ASSERTS)
    {
        id: 361,
        category: { ru: "Type Narrowing", en: "Type Narrowing", ka: "ტიპის შევიწროება" },
        tag: "narrowing",
        question: {
            ru: "Для чего применяется ключевое слово asserts в сигнатуре функций?",
            en: "What is the specific utility of the asserts keyword in function signatures?",
            ka: "რისთვის გამოიყენება asserts ქივორდი ფუნქციის სიგნატურაში?"
        },
        code: `<span class="kw">function</span> <span class="fn">assertIsString</span>(val: <span class="type">any</span>): <span class="kw">asserts</span> val <span class="kw">is</span> <span class="type">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> val !== <span class="str">'string'</span>) <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="str">'Not a string!'</span>);
}`,
        options: [
            { ru: "Гарантирует, что если функция завершилась без ошибок, тип переменной на следующих строках сузился до string", en: "Guarantees that if execution finishes without throwing, the variable type downstream narrows to string", ka: "გარანტიას იძლევა, რომ თუ ფუნქცია დასრულდა შეცდომის გარეშე, ცვლადის ტიპი მომდევნო ხაზებზე შევიწროვდა string-მდე" },
            { ru: "Используется для написания автоматических юнит-тестов компилятора", en: "It connects external automated unit testing libraries during compilation", ka: "გამოიყენება კომპილატორის ავტომატური იუნიტ-ტესტების დასაწერად" },
            { ru: "Возвращает логическое значение true или false", en: "Forces the operation to return a concrete true/false condition boolean", ka: "აბრუნებს ლოგიკურ მნიშვნელობას true ან false" },
            { ru: "Это устаревший синтаксис, запрещенный в новых версиях", en: "It is an outdated deprecated tag banned in modern software setups", ka: "ეს არის მოძველებული სინტაქსი, რომელიც აკრძალულია ახალ ვერსიებში" }
        ],
        correct: 0,
        explanation: {
            ru: "Функции утверждения (Assertion Functions) с ключевым словом `asserts val is string` не возвращают значение, а генерируют исключение, если условие не выполнено. Преимущество для TypeScript: если функция была вызвана и выполнение кода пошло дальше (не упало в ошибку), то компилятор автоматически считает, что на всех последующих строках переменная val имеет тип `string`. Это избавляет от необходимости заворачивать код в блоки `if (isString(val)) {}`.",
            en: "Assertion Functions using `asserts val is string` return no data but throw runtime execution errors if conditions fail. The benefit to TS is linear flow management: if this function runs and code flow continues successfully, the engine assumes all downstream code lines can interact with 'val' as a confirmed `string` type.",
            ka: "Assertion ფუნქციები `asserts val is string` ქივორდით არ აბრუნებენ მნიშვნელობას, არამედ აგდებენ შეცდომას, თუ პირობა არ შესრულდა. TS-ისთვის ეს ნიშნავს: თუ ფუნქცია გამოიძახა და კოდი არ გაჩერდა შეცდომაზე, მაშინ ყველა მომდევნо ხაზზე val ცვლადი ითვლება `string` ტიპად. ეს გვაცილებს კოდის `if` ბლოკებში ჩასმის საჭიროებას."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions",
        docLabel: "Assertion Functions — Handbook"
    },

//     // 20. DECLARE GLOBAL / MODULES (.D.TS)
//     {
//         id: 26,
//         category: { ru: "Окружение и Модули", en: "Environment & Modules", ka: "გარემო და მოდულები" },
//         tag: "environment",
//         question: {
//             ru: "Зачем нужны файлы с расширением .d.ts в экосистеме TypeScript?",
//             en: "What is the core purpose of .d.ts declaration files in TypeScript?",
//             ka: "რისთვის არის საჭირო .d.ts გაფართოების ფაილები TypeScript ეკოსისტემაში?"
//         },
//         code: `<span class="cm">// index.d.ts</span>
// <span class="kw">declare module</span> <span class="str">"legacy-lib"</span> { <span class="kw">export function</span> <span class="fn">oldFunc</span>(): <span class="type">void</span>; }`,
//         options: [
//             { ru: "Для описания типов и интерфейсов существующего JavaScript-кода без генерации итогового JS", en: "To hold purely architectural types for existing JavaScript code without emitting runtime JS", ka: "არსებული JavaScript კოდის ტიპებისა და ინტერფეისების აღსაწერად, საბოლოო JS ფაილის გენერაციის გარეშე" },
//             { ru: "Это файлы для автоматического документирования разметки HTML5", en: "They function as build targets documentation formatting global HTML5 canvas layers", ka: "ეს არის ფაილები HTML5 მარკაპის ავტომატური დოკუმენტირებისთვის" },
//             { ru: "В них пишется логика работы баз данных проекта", en: "They hold dynamic logic connecting active database queries", ka: "მათში იწერება პროექტის მონაცემთა ბაზების მუშაობის ლოგიკა" },
//             { ru: "Они автоматически переводят код на другие языки программирования", en: "They translate standard variables into target low-level bytecode scripts", ka: "ისინი ავტომატურად თარგმნიან კოდს პროგრამირების სხვა ენებზე" }
//         ],
//         correct: 0,
//         explanation: {
//             ru: "Файлы с расширением `.d.ts` называются Declaration Files (файлы деклараций). Они содержат исключительно описание типов, интерфейсов и сигнатур модулей, но не содержат никакой исполняемой логики. Сборщик полностью игнорирует их при создании продакшн-кода. Они нужны, чтобы подружить TypeScript со старыми JavaScript-библиотеками или объявить глобальные переменные (например, расширить объект `window` через `declare global`).",
//             en: "Files ending in `.d.ts` are Declaration Files. They store exclusively type signatures, blueprints, and interface abstractions. They contain zero operational runtime code, meaning compilers filter them out from production builds. They serve as bridging maps enabling TS projects to interact with raw, un-typed standard JS dependencies safely.",
//             ka: "`.d.ts` გაფართოების ფაილებს დეკლარაციის ფაილები (Declaration Files) ეწოდებათ. ისინი შეიცავენ მხოლოდ ტიპების, ინტერფეისებისა და მოდულების სიგნატურების აღწერას, ყოველგვარი შესასრულებელი კოდის გარეშე. ისინი საჭიროა იმისათვის, რომ TS-მა შეძლოს მუშაობა ძველ JavaScript ბიბლიოთეკებთან ან გლობალურ ცვლადებთან (მაგ. window ობიექტის გასაფართოებლად)."
//         },
//         docLink: "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",
//         docLabel: "Declaration Files — Handbook"
//     },

//     // 21. IMPORT TYPE
//     {
//         id: 27,
//         category: { ru: "Окружение и Модули", en: "Environment & Modules", ka: "გარემო და მოდულები" },
//         tag: "environment",
//         question: {
//             ru: "В чем выгода использования синтаксиса 'import type' вместо обычного импорта?",
//             en: "What is the optimization benefit of utilizing 'import type' over a normal import?",
//             ka: "რა უპირატესობა აქვს 'import type' სინტაქსის გამოყენებას ჩვეულებრივი იმპორტის ნაცვლად?"
//         },
//         code: `<span class="kw">import type</span> { <span class="type">UserDataType</span> } from <span class="str">"./models"</span>;`,
//         options: [
//             { ru: "Гарантирует, что импорт полностью вырежется из финального JS-кода, не допуская появления пустых импортов в сборке", en: "Guarantees the import statement is erased from production JS, avoiding ghost dependency bloat", ka: "გარანტიას იძლევა, რომ იმპორტი სრულად ამოიჭრება საბოლოო JS კოდიდან, რაც თავიდან აგვაცილებს ზედმეტ ბლოტს ბანდლში" },
//             { ru: "Позволяет импортировать файлы гораздо быстрее в асинхронном фоне", en: "Forces dependencies to resolve at accelerated async multi-threaded background tracks", ka: "საშუალებას გვაძლევს უფრო სწრაფად მოვახდინოთ ფაილების იმპორტი ასინქრონულ ფონზე" },
//             { ru: "Защищает код от межсайтового скриптинга (XSS-атак)", en: "Secures external endpoint arrays preventing dynamic cross-site scripting web attacks", ka: "იცავს კოდს საიტთაშორისი სკრიპტინგისგან (XSS შეტევები)" },
//             { ru: "Разрешает циклические зависимости между классами", en: "Overrides dependency errors bypassing looping class inheritance boundaries", ka: "ხსნის კლასებს შორის ციკლური დამოკიდებულებების შეცდომებს" }
//         ],
//         correct: 0,
//         explanation: {
//             ru: "Синтаксис `import type` сообщает компилятору и сборщику (Vite, Webpack), что импортируемая сущность используется *исключительно* как тип данных. При компиляции эта строчка будет удалена на 100%. Обычный импорт, даже если импортируется только тип, иногда может сбить с толку сборщик, из-за чего в итоговом JS-файле останется пустая строчка `import {} from './models'`, которая может приводить к проблемам с циклическими зависимостями (circular dependencies) или мешать Tree Shaking.",
//             en: "The explicit declaration `import type` instructs bundlers (like Vite, Webpack, or esbuild) that the imported resource represents a type interface constraint only. During build compilation, this line is 100% wiped clean. Standard imports of types can confuse older module targets, leaving ghost runtime footprints (`import {} from './models'`) that slow down optimal Tree Shaking.",
//             ka: "`import type` სინტაქსი მიუთითებს კომპილატორსა და ბანდლერს (Vite, Webpack), რომ იმპორტირებული ერთეული გამოიყენება *მხოლოდ* როგორც მონაცემთა ტიპი. კომპილაციისას ეს ხაზი 100%-ით წაიშლება. ჩვეულებრივმა იმპორტმა შეიძლება გამოიწვიოს ცარიელი ხაზების დარჩენა JS-ში (`import {} from './models'`), რაც ხელს უშლის Tree Shaking პროცესს."
//         },
//         docLink: "https://www.typescriptlang.org/docs/handbook/2/modules.html#importing-types",
//         docLabel: "Importing Types — Handbook"
//     },

//     // 22. CONFIGURATION (TSCONFIG.JSON)
//     {
//         id: 28,
//         category: { ru: "Конфигурация", en: "Configuration", ka: "კონფიგურაცია" },
//         tag: "configuration",
//         question: {
//             ru: "За что отвечает флаг strictNullChecks в файле настроек tsconfig.json?",
//             en: "What behavior does strictNullChecks enforce when turned on inside tsconfig.json?",
//             ka: "რაზეა პასუხისმგებელი strictNullChecks ფლაგი tsconfig.json პარამეტრების ფაილში?"
//         },
//         code: `<span class="cm">// tsconfig.json</span>
// { <span class="str">"compilerOptions"</span>: { <span class="str">"strictNullChecks"</span>: <span class="kw">true</span> } }`,
//         options: [
//             { ru: "Запрещает неявно присваивать null и undefined любым типам данных без явного union", en: "Disallows implicitly assigning null and undefined to properties unless explicitly defined in a type union", ka: "კრძალავს null-ისა და undefined-ის მინიჭებას ნებისმიერ ტიპზე, თუ ისინი მკაფიოდ არ არის მითითებული union ტიპში" },
//             { ru: "Автоматически конвертирует все значения null в пустые строки", en: "Transforms runtime null values into safe blank text strings automatically", ka: "ავტომატურად აქცევს ყველა null მნიშვნელობას ცარიელ სტრიქონად" },
//             { ru: "Вырезает блоки кода, где переменная равна undefined, для оптимизации", en: "Deletes unused logic blocks tracking undefined states to reduce bundle sizes", ka: "ოპტიმიზაციისთვის შლის კოდის ბლოკებს, სადაც ცვლადი undefined-ის ტოლია" },
//             { ru: "Проверяет скорость работы асинхронных баз данных", en: "Monitors internal latency thresholds processing server database callbacks", ka: "ამოწმებს ასინქრონული მონაცემთა ბაზების მუშაობის სიჩქარეს" }
//         ],
//         correct: 0,
//         explanation: {
//             ru: "Когда флаг `strictNullChecks` отключен (false), значения `null` и `undefined` можно легально присвоить переменной любого типа, например, строке или объекту, что часто приводило к знаменитым ошибкам 'Cannot read property of undefined' в рантайме. Включение этого флага заставляет TypeScript расценивать `null` и `undefined` как отдельные полноценные типы данных. Теперь, если вы хотите допустить отсутствие значения, вы обязаны написать тип явно через Union: `string | null`.",
//             en: "When `strictNullChecks` is disabled, `null` and `undefined` act as legal values for any datatype, opening doors for runtime application crashes. Turning this flag on turns `null` and `undefined` into strict distinct datatypes. If a property can experience missing states, you are forced to define it as an explicit union signature like `string | null`.",
//             ka: "როდესაც `strictNullChecks` გამორთულია (false), `null` და `undefined` მნიშვნელობების მინიჭება შესაძლებელია ნებისმიერი ტიპის ცვლადზე, რაც ხშირად იწვევს შეცდომებს runtime-ში. ამ ფლაგის ჩართვა აიძულებს TS-ს განიხილოს `null` და `undefined` როგორც ცალკეული დამოუკიდებელი ტიპები. თუ გსურთ მათი დაშვება, უნდა მიუთითოთ Union ტიპით: `string | null`."
//         },
//         docLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
//         docLabel: "TSConfig Reference — Documentation"
//     }
];