import PropTypes from 'prop-types';
import {
  Profile,
  PrDesctirpion,
  PrImg,
  PrName,
  PrTag,
  PrLocation,
  StatsList,
  StatsItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';
export function ProfileFunc({ username, avatar, tag, location, stats }) {
  return (
    <Profile>
      <PrDesctirpion>
        <PrImg src={avatar} alt={'Profile Avatat'} />
        <PrName>{username}</PrName>
        <PrTag>@{tag}</PrTag>
        <PrLocation>{location}</PrLocation>
      </PrDesctirpion>
      <StatsList>
        <StatsItem>
          <ItemLabel>Follower</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </StatsItem>
      </StatsList>
    </Profile>
  );
}

        ProfileFunc.propTypes = {
        username: PropTypes.string,
         avatar: PropTypes.string,
         tag: PropTypes.string,
         location: PropTypes.string,
         stats: PropTypes.string,
    }