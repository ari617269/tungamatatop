import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { business, politics, sports, tech, economics } from './newsData';

if (
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const categoryKeys = ['business', 'politics', 'sports', 'tech', 'economics'];
const categoryDataMap = {
  business,
  politics,
  sports,
  tech,
  economics,
};

export default function App() {
  const [categoryRowWidth, setCategoryRowWidth] = React.useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);
  const [contentRowWidth, setContentRowWidth] = React.useState(0);
  const [contentLevel, setContentLevel] = React.useState(0);
  const scrollOffsets = React.useRef({
    business: 0,
    politics: 0,
    sports: 0,
    tech: 0,
    economics: 0,
  });
  const flatListRef = React.useRef(null);
  const CATEGORY_TIERS = categoryKeys.length;
  const CONTENT_TIERS = 4;
  React.useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [contentLevel]);
  React.useEffect(() => {
    const key = categoryKeys[activeCategoryIndex];
    const offset = scrollOffsets.current[key] || 0;
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset, animated: false });
    }
  }, [activeCategoryIndex]);
  const onCategoryGestureEvent = (event) => {
    const x = event.nativeEvent.x;
    if (categoryRowWidth <= 0) return;

    const segmentWidth = categoryRowWidth / CATEGORY_TIERS;
    let newIndex = Math.floor(x / segmentWidth);
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= CATEGORY_TIERS) newIndex = CATEGORY_TIERS - 1;
    if (newIndex !== activeCategoryIndex) {
      setActiveCategoryIndex(newIndex);
    }
  };

  const onCategoryHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const x = event.nativeEvent.x;
      const segmentWidth = categoryRowWidth / CATEGORY_TIERS;
      let newIndex = Math.floor(x / segmentWidth);
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= CATEGORY_TIERS) newIndex = CATEGORY_TIERS - 1;
      if (newIndex !== activeCategoryIndex) {
        setActiveCategoryIndex(newIndex);
      }
    }
  };
  const onContentGestureEvent = (event) => {
    const x = event.nativeEvent.x;
    if (contentRowWidth <= 0) return;

    const segmentWidth = contentRowWidth / CONTENT_TIERS;
    let newLevel = Math.floor(x / segmentWidth);
    if (newLevel < 0) newLevel = 0;
    if (newLevel >= CONTENT_TIERS) newLevel = CONTENT_TIERS - 1;
    if (newLevel !== contentLevel) {
      setContentLevel(newLevel);
    }
  };

  const onContentHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const x = event.nativeEvent.x;
      const segmentWidth = contentRowWidth / CONTENT_TIERS;
      let newLevel = Math.floor(x / segmentWidth);
      if (newLevel < 0) newLevel = 0;
      if (newLevel >= CONTENT_TIERS) newLevel = CONTENT_TIERS - 1;
      if (newLevel !== contentLevel) {
        setContentLevel(newLevel);
      }
    }
  };

  const onCategoryRowLayout = (e) => {
    setCategoryRowWidth(e.nativeEvent.layout.width);
  };

  const onContentRowLayout = (e) => {
    setContentRowWidth(e.nativeEvent.layout.width);
  };
  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const key = categoryKeys[activeCategoryIndex];
    scrollOffsets.current[key] = offsetY;
  };
  const renderItem = ({ item }) => {
    const snippet =
      item.text.length > 140
        ? item.text.substring(0, 140) + '…'
        : item.text;

    return (
      <View style={styles.card}>
        {contentLevel >= 1 && (
          <>
            <Text style={styles.headingText}>{item.heading}</Text>
          </>
        )}
        {contentLevel >= 0 && contentLevel <= 2  && (
          <Text style={styles.snippetText}>{snippet}</Text>
        )}
        
        {contentLevel === 2 && (
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {contentLevel >= 3 && (
          <>
            <Text style={styles.fullText}>{item.text}</Text>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.metaContainer}>
              <Text style={styles.metaText}>
                {`By ${item.author} • ${item.date} • ${item.medium}`}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };

  const activeCategoryKey = categoryKeys[activeCategoryIndex];
  const dataForCategory = categoryDataMap[activeCategoryKey];
  const displayCategoryName =
    activeCategoryKey.charAt(0).toUpperCase() +
    activeCategoryKey.slice(1);

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onCategoryGestureEvent}
        onHandlerStateChange={onCategoryHandlerStateChange}
      >
        <View
          style={styles.rowContainer}
          onLayout={onCategoryRowLayout}
        >
          {categoryKeys.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.segment,
                idx === activeCategoryIndex
                  ? styles.segmentActive
                  : styles.segmentInactive,
              ]}
            >
              <Text style={[{}, idx === activeCategoryIndex && styles.colorWhite]}>{['trade', 'politics', 'sports', 'tech', 'econ'][idx]}</Text>
            </View>
          ))}
        </View>
      </PanGestureHandler>

      <PanGestureHandler
        onGestureEvent={onContentGestureEvent}
        onHandlerStateChange={onContentHandlerStateChange}
      >
        <View
          style={styles.rowContainer}
          onLayout={onContentRowLayout}
        >
          {Array.from({ length: CONTENT_TIERS }).map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.segment,
                idx === contentLevel
                  ? styles.segmentActive
                  : styles.segmentInactive,
              ]}
            >
            <Text style={[{}, idx === contentLevel && styles.colorWhite]}>{['snippet', 'headlines', 'media', 'full'][idx]}</Text>
            </View>
          ))}
        </View>
      </PanGestureHandler>
      <Text style={styles.categoryTitle}>
        {displayCategoryName.toUpperCase()}
      </Text>

      <FlatList
        ref={flatListRef}
        data={dataForCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5F5F5',
  },
  rowContainer: {
    flexDirection: 'row',
    height: 40,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  segment: {
    flex: 1,
    height: 30,
    marginHorizontal: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentInactive: {
    backgroundColor: '#DDD',
  },
  segmentActive: {
    backgroundColor: '#4287f5',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  snippetText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  fullText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 4,
    marginBottom: 8,
  },
  metaContainer: {
    marginTop: 8,
  },
  metaText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  colorWhite: {
    color: 'white',
  }
});
