export default function isSelected(state = {} ,action){
    switch (action.type) {
        case "SELECTED":
            return action.payload.safe
            case "ADD":
                return action.payload.safe
        case "DELETE":
            return {};
            case "EDIT":
                return action.payload.safe;
            default:
                return state
    }
}
