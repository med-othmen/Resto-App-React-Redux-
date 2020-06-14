import {CONNECT} from './types'
import Axios from 'axios';


export const Connect = (payload) => ({
    type: CONNECT,
    payload,
    
  });

