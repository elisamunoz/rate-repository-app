import { FlatList, View, Text, Image } from 'react-native';
import { repositories } from '../../data/repositories';
import { formatNumber } from '../../functions/helpers'
import styles from './RepositoryList.styles';

const ItemSeparator = () => <View style={styles.separator} />;
const LanguageTag = ({children}) => (
  <View style={styles.languageTag}>
    <Text style={styles.languageTagText}>{children}</Text>
  </View>
)
const RepositoryStat = ({data, type}) => {
  const formatedNumber = formatNumber(data, 1)
  return(
    <View style={styles.repositoryStat}>
      <Text style={styles.data}>{formatedNumber}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
)}
const RepositoryList = () => {
  return (
    <FlatList
      style={styles.repositoryList}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                uri: item.ownerAvatarUrl
                }}
                style={styles.tinyLogo}
              />
            </View>
            <View style={styles.topContentText}>
              <Text style={styles.fullName}>{item.fullName}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <LanguageTag>{item.language}</LanguageTag>
            </View>
          </View>

          <View style={styles.bottomContent}>
            <RepositoryStat type="Stars" data={item.forksCount}/>
            <RepositoryStat type="Forks" data={item.stargazersCount}/>
            <RepositoryStat type="Reviews" data={item.ratingAverage}/>
            <RepositoryStat type="Rating" data={item.reviewCount}/>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;