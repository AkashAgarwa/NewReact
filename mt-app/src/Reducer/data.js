export default function dataReducer (state = [] , action) {

    switch (action.type) {
        
     case "ADD":
         return [...state,action.payload.safe];
    case "DELETE":
        let obj=[];
        for(let i=0;i<state.length;i++)
        {
            if(state[i].safeId==action.payload.id);
else{
obj=[...obj,state[i]];}

        }
        return obj;
        case "EDIT":
        let obj1=[];
        for(let i=0;i<state.length;i++)
        {
            if(state[i].safeId==action.payload.safe.safeId)
obj1=[...obj1,action.payload.safe]
else
obj1=[...obj1,state[i]]

        }
        return obj1;
   case "ADDFOLDER":
    let obj5=[];
    for(let i=0;i<state.length;i++)
    {
        if(state[i].safeId==action.payload.id){
        state[i].folder=[...state[i].folder,action.payload.obj2];
        }
obj5=[...obj5,state[i]];

    }
    return obj5;
        case "DELETEFOLDER":
            let obj6=[];
            let obj7=[];
            let obj8;
            for(let i=0;i<state.length;i++)
            {
                if(state[i].safeId==action.payload.id){
                    obj8=state[i];
                    for(let j=0;j<state[i].folder.length;j++)
            {
                if(state[i].safeId.folder[j].id==action.payload.fid);
                else {
                    obj7=[...obj7,state[i].safeId.folder[j]]
                }
            }
            obj8.folder=obj7;
            obj6=[...obj6,obj8]
        }
        else{
            obj6=[...obj6,state[i]]
        }
    }
    return obj6;

        default:
            return state;
    }
}
