
export default class DraggableItem{

    constructor(title, category, action, position_x = 0, position_y = 0){
        this.title = title
        this.category = category
        this.position_x = position_x
        this.position_y = position_y;
        this.action = action
    }
}