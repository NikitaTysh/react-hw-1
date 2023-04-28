import PropTypes from 'prop-types';
import {
  CardFriendList,

} from './FriendList.styled';
import { FriendItem } from 'components/FriendItem/FriendItem';

export function FriendList({ friends }) {
  return (
    <CardFriendList>
      {friends.map(friend  => (
    <FriendItem 
      key={friend.id}
      isOnline = {friend.isOnline}
      avatar = {friend.avatar}
      name = {friend.name}
    />
  ))}
    </CardFriendList>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
