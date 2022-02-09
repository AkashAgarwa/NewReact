export default function folderIdReducer (state = 0 , action) {

    switch (action.type) {
        
     case "ADDFOLDER":
         return state+1
     default:
            return state;
    }
}
