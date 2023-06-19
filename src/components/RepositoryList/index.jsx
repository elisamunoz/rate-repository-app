import { FlatList, View, Text } from 'react-native';
import { repositories } from '../../data/repositories';
import { styles } from './RepositoryList.styles';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <>
          <Text>Full name: {item.fullName}</Text>
          <Text>Description: {item.description}</Text>
          <Text>Language: {item.language}</Text>
          <Text>Stars: {item.forksCount}</Text>
          <Text>Forks: {item.stargazersCount}</Text>
          <Text>Reviews: {item.ratingAverage}</Text>
          <Text>Rating: {item.reviewCount}</Text>
        </>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;