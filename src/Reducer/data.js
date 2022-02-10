export default function dataReducer (state = [] , action) {

    switch (action.type) {
        
     case "ADD":
      
        action.payload.safe.date=new Date();
         return [...state,action.payload.safe];

    case "DELETE":
        let obj=[];
        for(let i=0;i<state.length;i++)
        {
            if(state[i].safeId===action.payload.id);
else{
obj=[...obj,state[i]];}

        }
        return obj;
        case "EDIT":
  
            action.payload.safe.date=new Date();
        let obj1=[];
        for(let i=0;i<state.length;i++)
        {
            if(state[i].safeId===action.payload.safe.safeId)
obj1=[...obj1,action.payload.safe]
else
obj1=[...obj1,state[i]]

        }
        return obj1;
   case "ADDFOLDER":
    let obj5=[];
    for(let i=0;i<state.length;i++)
    {
        if(state[i].safeId===action.payload.id){
        state[i].folder=[...state[i].folder,action.payload.obj2];
        }
obj5=[...obj5,state[i]];

    }
    return obj5;
    case "REMOVEFOLDER":
        let dataOFRemovedFolder=[];
        for(let j=0;j<(state ? state.length : 0);j++)
        if(state[j].safeId===action.payload.safeId){
            let fol=[];
            for(let i=0;i<(state[j].folder ? state[j].folder.length : 0);i++){
                if(state[j].folder[i].id === action.payload.folderId)
                continue;
                else
                fol=[...fol,state[j].folder[i]];
            }
            state[j].folder=fol;
            dataOFRemovedFolder=[...dataOFRemovedFolder,state[j]];
        }

        else{dataOFRemovedFolder=[...dataOFRemovedFolder,state[j]];
}
return dataOFRemovedFolder;
        default:
            return state;
    }
}
