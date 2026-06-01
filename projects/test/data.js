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

    // 8. ДЕКОРАТОРЫ
    {
        id: 14,
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
            ru: "Декоратор — это просто функция высшего порядка, которая автоматически вызывается средой выполнения JavaScript при инициализации класса. Она принимает параметры в зависимости от того, куда подвешена (сам класс, его метод, свойство или аргумент). Декоратор может изменить поведение сущности, логировать вызовы, подменять логику или навешивать метаданные (через reflect-metadata). Напоминание: старые декораторы требуют флага experimentalDecorators, новые соответствуют стандарту ECMAScript Stage 3.",
            en: "A decorator is essentially a high-order function invoked by the JS runtime engine during prototype declaration setup. Depending on its attachment metadata point (a class, parameter, accessor, or method), it receives specific references allowing it to intercept, alter, log, wrap, or inject custom runtime functionality. Experimental versions require specific tsconfig variables, whereas modern iterations follow Stage 3 specs.",
            ka: "დეკორატორი არის უბრალოდ მაღალი შეკვეთის ფუნქცია, რომელიც ავტომატურად გამოიძახება JS-ის მიერ კლასის ინიციალიზაციისას. ის იღებს პარამეტრებს იმის მიხედვით, თუ რაზეა მიბმული (თავად კლასი, მეთოდი, თვისება თუ არგუმენტი). მას შეუძლია შეცვალოს კლასის ქცევა. ძველ ვერსიებს სჭირდება experimentalDecorators ფლაგი."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/decorators.html",
        docLabel: "Decorators — Handbook"
    },

    // 9. MAPPED TYPES
    {
        id: 15,
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

    // 10. CONDITIONAL TYPES
    {
        id: 16,
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

    // 11. ENUM
    {
        id: 17,
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

    // 12. ASYNC / AWAIT
    {
        id: 18,
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

    // 13. TEMPLATE LITERAL TYPES
    {
        id: 19,
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

    // 14. ADVANCED TYPES (INFER)
    {
        id: 20,
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

    // === НОВЫЕ ТЕМЫ (21 - 28) ===

    // 15. KEYOF OPERATOR
    {
        id: 21,
        category: { ru: "Операторы типов", en: "Type Operators", ka: "ტიპის ოპერატორები" },
        tag: "type-operators",
        question: {
            ru: "Что вернет оператор keyof примененный к интерфейсу?",
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

    // 16. TYPEOF OPERATOR
    {
        id: 22,
        category: { ru: "Операторы типов", en: "Type Operators", ka: "ტიპის ოპერატორები" },
        tag: "type-operators",
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
            ka: "JavaScript-ში `typeof` სრულდება ბრაუზერში ან Node.js-ში და აბრუნებს საბაზისო სტრიქონს (მაგ. `'object'`). TypeScript-ში კი `typeof` გამოიყენება ტიპების გამოცხადების კონტექსტში და საშუალებას გვაძლევს ავიღოთ რეალური JS ცვლადის ფორმა. აქ `ConfigType` გახდება ტიპი `{ port: number }`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/typeof-types.html",
        docLabel: "Typeof Type Operator — Handbook"
    },

    // 17. INDEXED ACCESS TYPES
    {
        id: 23,
        category: { ru: "Операторы типов", en: "Type Operators", ka: "ტიპის ოპერატორები" },
        tag: "type-operators",
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

    // 18. AS CONST (CONST ASSERTIONS)
    {
        id: 24,
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
            ka: "`as const` დირექტივა (Const Assertions) გადააქვს ობიექტი ღრმა უცვლელი ლიტერალის რეჟიმში ტიპების სისტემის დონეზე. პირველი, სტრიქონები ვიწროვდება ზოგადი `string`-იდან კონკრЕТულ მნიშვნელობებამდე (მაგ. home-ის ტიპი გახდება `'/home'`). მეორეც, ყველა ველი ხდება `readonly`. თუმცა runtime-ში ის ჩვეულებრივი ობიექტია."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference",
        docLabel: "Const Assertions — Handbook"
    },

    // 19. CUSTOM TYPE GUARDS (IS / ASSERTS)
    {
        id: 25,
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

    // 20. DECLARE GLOBAL / MODULES (.D.TS)
    {
        id: 26,
        category: { ru: "Окружение и Модули", en: "Environment & Modules", ka: "გარემო და მოდულები" },
        tag: "environment",
        question: {
            ru: "Зачем нужны файлы с расширением .d.ts в экосистеме TypeScript?",
            en: "What is the core purpose of .d.ts declaration files in TypeScript?",
            ka: "რისთვის არის საჭირო .d.ts გაფართოების ფაილები TypeScript ეკოსისტემაში?"
        },
        code: `<span class="cm">// index.d.ts</span>
<span class="kw">declare module</span> <span class="str">"legacy-lib"</span> { <span class="kw">export function</span> <span class="fn">oldFunc</span>(): <span class="type">void</span>; }`,
        options: [
            { ru: "Для описания типов и интерфейсов существующего JavaScript-кода без генерации итогового JS", en: "To hold purely architectural types for existing JavaScript code without emitting runtime JS", ka: "არსებული JavaScript კოდის ტიპებისა და ინტერფეისების აღსაწერად, საბოლოო JS ფაილის გენერაციის გარეშე" },
            { ru: "Это файлы для автоматического документирования разметки HTML5", en: "They function as build targets documentation formatting global HTML5 canvas layers", ka: "ეს არის ფაილები HTML5 მარკაპის ავტომატური დოკუმენტირებისთვის" },
            { ru: "В них пишется логика работы баз данных проекта", en: "They hold dynamic logic connecting active database queries", ka: "მათში იწერება პროექტის მონაცემთა ბაზების მუშაობის ლოგიკა" },
            { ru: "Они автоматически переводят код на другие языки программирования", en: "They translate standard variables into target low-level bytecode scripts", ka: "ისინი ავტომატურად თარგმნიან კოდს პროგრამირების სხვა ენებზე" }
        ],
        correct: 0,
        explanation: {
            ru: "Файлы с расширением `.d.ts` называются Declaration Files (файлы деклараций). Они содержат исключительно описание типов, интерфейсов и сигнатур модулей, но не содержат никакой исполняемой логики. Сборщик полностью игнорирует их при создании продакшн-кода. Они нужны, чтобы подружить TypeScript со старыми JavaScript-библиотеками или объявить глобальные переменные (например, расширить объект `window` через `declare global`).",
            en: "Files ending in `.d.ts` are Declaration Files. They store exclusively type signatures, blueprints, and interface abstractions. They contain zero operational runtime code, meaning compilers filter them out from production builds. They serve as bridging maps enabling TS projects to interact with raw, un-typed standard JS dependencies safely.",
            ka: "`.d.ts` გაფართოების ფაილებს დეკლარაციის ფაილები (Declaration Files) ეწოდებათ. ისინი შეიცავენ მხოლოდ ტიპების, ინტერფეისებისა და მოდულების სიგნატურების აღწერას, ყოველგვარი შესასრულებელი კოდის გარეშე. ისინი საჭიროა იმისათვის, რომ TS-მა შეძლოს მუშაობა ძველ JavaScript ბიბლიოთეკებთან ან გლობალურ ცვლადებთან (მაგ. window ობიექტის გასაფართოებლად)."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",
        docLabel: "Declaration Files — Handbook"
    },

    // 21. IMPORT TYPE
    {
        id: 27,
        category: { ru: "Окружение и Модули", en: "Environment & Modules", ka: "გარემო და მოდულები" },
        tag: "environment",
        question: {
            ru: "В чем выгода использования синтаксиса 'import type' вместо обычного импорта?",
            en: "What is the optimization benefit of utilizing 'import type' over a normal import?",
            ka: "რა უპირატესობა აქვს 'import type' სინტაქსის გამოყენებას ჩვეულებრივი იმპორტის ნაცვლად?"
        },
        code: `<span class="kw">import type</span> { <span class="type">UserDataType</span> } from <span class="str">"./models"</span>;`,
        options: [
            { ru: "Гарантирует, что импорт полностью вырежется из финального JS-кода, не допуская появления пустых импортов в сборке", en: "Guarantees the import statement is erased from production JS, avoiding ghost dependency bloat", ka: "გარანტიას იძლევა, რომ იმპორტი სრულად ამოიჭრება საბოლოო JS კოდიდან, რაც თავიდან აგვაცილებს ზედმეტ ბლოტს ბანდლში" },
            { ru: "Позволяет импортировать файлы гораздо быстрее в асинхронном фоне", en: "Forces dependencies to resolve at accelerated async multi-threaded background tracks", ka: "საშუალებას გვაძლევს უფრო სწრაფად მოვახდინოთ ფაილების იმპორტი ასინქრონულ ფონზე" },
            { ru: "Защищает код от межсайтового скриптинга (XSS-атак)", en: "Secures external endpoint arrays preventing dynamic cross-site scripting web attacks", ka: "იცავს კოდს საიტთაშორისი სკრიპტინგისგან (XSS შეტევები)" },
            { ru: "Разрешает циклические зависимости между классами", en: "Overrides dependency errors bypassing looping class inheritance boundaries", ka: "ხსნის კლასებს შორის ციკლური დამოკიდებულებების შეცდომებს" }
        ],
        correct: 0,
        explanation: {
            ru: "Синтаксис `import type` сообщает компилятору и сборщику (Vite, Webpack), что импортируемая сущность используется *исключительно* как тип данных. При компиляции эта строчка будет удалена на 100%. Обычный импорт, даже если импортируется только тип, иногда может сбить с толку сборщик, из-за чего в итоговом JS-файле останется пустая строчка `import {} from './models'`, которая может приводить к проблемам с циклическими зависимостями (circular dependencies) или мешать Tree Shaking.",
            en: "The explicit declaration `import type` instructs bundlers (like Vite, Webpack, or esbuild) that the imported resource represents a type interface constraint only. During build compilation, this line is 100% wiped clean. Standard imports of types can confuse older module targets, leaving ghost runtime footprints (`import {} from './models'`) that slow down optimal Tree Shaking.",
            ka: "`import type` სინტაქსი მიუთითებს კომპილატორსა და ბანდლერს (Vite, Webpack), რომ იმპორტირებული ერთეული გამოიყენება *მხოლოდ* როგორც მონაცემთა ტიპი. კომპილაციისას ეს ხაზი 100%-ით წაიშლება. ჩვეულებრივმა იმპორტმა შეიძლება გამოიწვიოს ცარიელი ხაზების დარჩენა JS-ში (`import {} from './models'`), რაც ხელს უშლის Tree Shaking პროცესს."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/2/modules.html#importing-types",
        docLabel: "Importing Types — Handbook"
    },

    // 22. CONFIGURATION (TSCONFIG.JSON)
    {
        id: 28,
        category: { ru: "Конфигурация", en: "Configuration", ka: "კონფიგურაცია" },
        tag: "configuration",
        question: {
            ru: "За что отвечает флаг strictNullChecks в файле настроек tsconfig.json?",
            en: "What behavior does strictNullChecks enforce when turned on inside tsconfig.json?",
            ka: "რაზეა პასუხისმგებელი strictNullChecks ფლაგი tsconfig.json პარამეტრების ფაილში?"
        },
        code: `<span class="cm">// tsconfig.json</span>
{ <span class="str">"compilerOptions"</span>: { <span class="str">"strictNullChecks"</span>: <span class="kw">true</span> } }`,
        options: [
            { ru: "Запрещает неявно присваивать null и undefined любым типам данных без явного union", en: "Disallows implicitly assigning null and undefined to properties unless explicitly defined in a type union", ka: "კრძალავს null-ისა და undefined-ის მინიჭებას ნებისმიერ ტიპზე, თუ ისინი მკაფიოდ არ არის მითითებული union ტიპში" },
            { ru: "Автоматически конвертирует все значения null в пустые строки", en: "Transforms runtime null values into safe blank text strings automatically", ka: "ავტომატურად აქცევს ყველა null მნიშვნელობას ცარიელ სტრიქონად" },
            { ru: "Вырезает блоки кода, где переменная равна undefined, для оптимизации", en: "Deletes unused logic blocks tracking undefined states to reduce bundle sizes", ka: "ოპტიმიზაციისთვის შლის კოდის ბლოკებს, სადაც ცვლადი undefined-ის ტოლია" },
            { ru: "Проверяет скорость работы асинхронных баз данных", en: "Monitors internal latency thresholds processing server database callbacks", ka: "ამოწმებს ასინქრონული მონაცემთა ბაზების მუშაობის სიჩქარეს" }
        ],
        correct: 0,
        explanation: {
            ru: "Когда флаг `strictNullChecks` отключен (false), значения `null` и `undefined` можно легально присвоить переменной любого типа, например, строке или объекту, что часто приводило к знаменитым ошибкам 'Cannot read property of undefined' в рантайме. Включение этого флага заставляет TypeScript расценивать `null` и `undefined` как отдельные полноценные типы данных. Теперь, если вы хотите допустить отсутствие значения, вы обязаны написать тип явно через Union: `string | null`.",
            en: "When `strictNullChecks` is disabled, `null` and `undefined` act as legal values for any datatype, opening doors for runtime application crashes. Turning this flag on turns `null` and `undefined` into strict distinct datatypes. If a property can experience missing states, you are forced to define it as an explicit union signature like `string | null`.",
            ka: "როდესაც `strictNullChecks` გამორთულია (false), `null` და `undefined` მნიშვნელობების მინიჭება შესაძლებელია ნებისმიერი ტიპის ცვლადზე, რაც ხშირად იწვევს შეცდომებს runtime-ში. ამ ფლაგის ჩართვა აიძულებს TS-ს განიხილოს `null` და `undefined` როგორც ცალკეული დამოუკიდებელი ტიპები. თუ გსურთ მათი დაშვება, უნდა მიუთითოთ Union ტიპით: `string | null`."
        },
        docLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
        docLabel: "TSConfig Reference — Documentation"
    }
];