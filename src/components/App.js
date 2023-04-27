import profile from "../user.json"
import {ProfileFunc} from './Profile/Profile'
import data from    '../data.json'
 import {StatisticsFunc} from './Stats/Stats'
 import { FriendList } from './FriendsList/FriendList'
import friends from '../friends.json'
import transactions from "../transactions.json"

import { TransactionHistory } from './Table/Table.js'


export const App = () =>{
return (
    <div>

    
<ProfileFunc username={profile.username} tag={profile.tag}
    location={profile.location} avatar={profile.avatar}
    stats={profile.stats}
    />
    <StatisticsFunc
    title={data.title}
    stats={data}
  />

  <FriendList friends={friends} />

  <TransactionHistory
        items={transactions}
      />

  </div>)


}
