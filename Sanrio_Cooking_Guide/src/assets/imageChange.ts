export function imageChange(selected: number, img: string) {
    if (selected === 1) {
        //1st item
        return img
    } else if (selected === 2) {

        // 2nd item
        return img
    }
    else {
        alert('You only able to select 2 items')
        return ''
    }
}