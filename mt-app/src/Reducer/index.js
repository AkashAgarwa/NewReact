import data from './data'
import IsSelected from './IsSelected';
import SafeId from './safeId'
import search from './search';
import folderId from './folderId'
import { combineReducers } from 'redux';
export default combineReducers(
    {safe:data
        ,IS:IsSelected
        ,id:SafeId
        ,search:search,
        fid:folderId}
    )
