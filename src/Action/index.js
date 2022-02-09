export const addData = (obj) =>{
    return {
        type:"ADD",
        payload:{
            safe:obj
        }

    }
}
export const deleteSafe= (safeId) =>{
    return {
        type:"DELETE",
        payload:{
            id:safeId
        }
    }
}
export const selectState=(obj)=>{
    return{
        type:"SELECTED",
        payload :{
            safe:obj
        }
    }
}
export const safeEdit = (ob) => {
    return{
        type: "EDIT",
      payload:{
          safe: ob,
          }
    }
}
export const addFolder = (safeId,str) => {
    return{
        type: "ADDFOLDER",
      payload:{
          id:safeId,obj2:str
          }
    }
}
export const searchitem = (searchdata) => {
    return{
        type: "SEARCH" ,
      payload:{
          txt:searchdata
          }
    }
}
export const deleteFolder = (safeId,folderId) => {
    return{
        type: "DELETEFOLDER",
      payload:{
        id:safeId , 
        fid:folderId
          }
    }
}