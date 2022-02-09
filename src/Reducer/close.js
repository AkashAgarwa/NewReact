export default function close(state = 0 ,action){
    switch (action.type) {
        case "TOGGLE":
            return !state;
         }
}
