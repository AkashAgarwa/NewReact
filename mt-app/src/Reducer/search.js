export default function searchReducer (state = "" , action) {

    switch (action.type) {
        
     case "SEARCH":
             return action.payload.txt;
         default:
            return state;
    }
}
