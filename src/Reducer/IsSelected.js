export default function isSelected(state = {} ,action){
    switch (action.type) {
        case "SELECTED":
            return action.payload.safe;
            case "ADD":
                return action.payload.safe
        case "DELETE":
            return {};
            case "EDIT":
                return action.payload.safe;
           
        //     case "DELETEFOLDERS":
        //         let obj7=[];
        //         for(let j=0;j<state.folder.length;j++)
        // {
        //     if(state.safeId.folder[j].id===action.payload.fid);
        //     else {
        //         obj7=[...obj7,state.safeId.folder[j]]
        //     }
        // }
        // state.folder=obj7;
        // return state;
        default:return state;
    }
}
