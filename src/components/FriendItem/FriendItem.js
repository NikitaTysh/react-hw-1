
import PropTypes from 'prop-types';

import {
    CardItem,
    Cardame,
    CardAvatar,
    CardStatus,
  } from '../FriendItem/FriendItem.styled';

export function FriendItem({id, name, avatar, isOnline })
{
    return (
            <CardItem key={id}>
              <CardStatus isOnline={isOnline}></CardStatus>
              <CardAvatar src={avatar} alt="User avatar" width="48" />
              <Cardame>{name}</Cardame>
            </CardItem>
    )
}


FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};