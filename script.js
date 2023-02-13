const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wraper .text');

const enter_Screen = (index) => {
    const Grid = grids[index]
    const Heading = headings[index]
    const gridColumns = Grid.querySelectorAll('.column')

    Grid.classList.add('active')

    gridColumns.forEach(column => {
      column.classList.remove('animate-before', 'animate-after')  
    })

    //Heading.classList.remove('animate-before', 'animate-after')
};

const exit_Screen = (index, exitDelay) => {
    const Grid = grids[index]
    const Heading = headings[index]
    const gridColumns = Grid.querySelectorAll('.column')

    gridColumns.forEach(column => {
        column.classList.add('animate-after')  
    })

    Heading.classList.add('animate-after')

    setTimeout(() => {
        Grid.classList.remove('active')
    }, exitDelay);

};

const setupAnimation_LOOP = ({ initialScreen_index, time_PER_Screen, exitDelay }) => {

    const loop_time = time_PER_Screen + exitDelay

    let next_index = 0

    const next_loop = () => {
        const current_index = next_index
        enter_Screen(current_index)

        setTimeout(() => exit_Screen(current_index, exitDelay), time_PER_Screen);

        // 0 -> 1 -> 2 -> 3 -> 0 -> ...
        next_index = (next_index >= grids.length - 1) ? 0 : next_index + 1
    };

    next_loop()

    setInterval(next_loop, loop_time);

    enter_Screen(initialScreen_index)
};

setupAnimation_LOOP({
    time_PER_Screen: 2000,
    exitDelay: 100 * 7
})