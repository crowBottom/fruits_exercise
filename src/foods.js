import {choice, remove} from './helpers'

const Fruits = () => {
    const fruit_list = [
        "🍇",
        "🍈",
        "🍉",
        "🍊",
        "🍋",
        "🍌",
        "🍍",
        "🍎",
        "🍏",
        "🍐",
        "🍒",
        "🍓",
        "🥝",
        "🍅",
        "🥑"
    ];
    const random_fruit = choice(fruit_list);
    const remove_the_fruit = remove(fruit_list, random_fruit);
    
    return (
        <>
            <h1>Random Fruit</h1>
            <h3>I'd like one {random_fruit} please.</h3>
            <h3>Here you go: {random_fruit}</h3>
            <h3>Delicious! May I have another?</h3>
            <div>{remove_the_fruit}</div>
            <h3>I’m sorry, we’re all out. We have {remove_the_fruit.length} fruits left.</h3>

        </>
    )
}

export default Fruits