import { combineReducers } from "redux";
import LedgerReducer from './LedgerReducer'
import TransactionReducer from './TransactionReducer'
import TransactionFilterReducer from './TransactionFilterReducer'
import LedgerFilterReducer from './LedgerFilterReducer'
import UserReducer from './UserReducer';

const reducers = combineReducers({
    ledgerRecord: LedgerReducer,
    transactionRecord : TransactionReducer,
    transactionFilter: TransactionFilterReducer,
    ledgerFilter : LedgerFilterReducer,
    userDetails: UserReducer
});

export default reducers