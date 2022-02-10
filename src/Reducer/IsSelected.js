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
        case "REMOVEFOLDER":
            let fol=[];
            for(let i=0;i<(state.folder ? state.folder.length : 0);i++){
                if(state.folder[i].id === action.payload.folderId)
                continue;
                else
                fol=[...fol,state.folder[i]];
            }
            state.folder=fol;
            return state;
            // case "ADDFOLDER":
            //     let obj5=[];
            //     for(let i=0;i<state.length;i++)
            //     {
            //         if(state[i].safeId===action.payload.id){
            //         state[i].folder=[...state[i].folder,action.payload.obj2];
            //         }
            // obj5=[...obj5,state[i]];
            
            //     }
            //     break;
        default:return state;
    }
}
