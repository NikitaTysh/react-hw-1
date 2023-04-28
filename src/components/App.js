import { ProfileFunc } from './Profile/Profile';
import { StatisticsFunc } from './Stats/Stats';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './Table/Table.js';

import profile from './data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileFunc
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <StatisticsFunc title={data.title} stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
